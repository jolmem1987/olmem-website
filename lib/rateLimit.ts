/**
 * Simple in-memory rate limiter.
 * Buckets are keyed by an identifier (e.g. IP address).
 * Each bucket tracks the number of requests in the current window.
 *
 * **Note:** State is lost on server restart and this implementation does not
 * scale across multiple server instances. For production deployments with
 * multiple nodes, replace this with a shared persistent store (e.g. Redis).
 */

interface Bucket {
  count: number;
  resetAt: number;
}

const store = new Map<string, Bucket>();

/**
 * Check whether the caller identified by `key` is within the allowed rate.
 *
 * @param key       - Unique identifier for the caller (e.g. IP address).
 * @param limit     - Maximum number of requests allowed per window.
 * @param windowMs  - Length of the sliding window in milliseconds.
 * @returns `true` if the request is allowed, `false` if the limit is exceeded.
 */
export function checkRateLimit(key: string, limit: number, windowMs: number): boolean {
  const now = Date.now();
  const bucket = store.get(key);

  if (!bucket || now >= bucket.resetAt) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (bucket.count >= limit) {
    return false;
  }

  bucket.count += 1;
  return true;
}

/**
 * Extract the best available IP identifier from a Next.js request.
 * Falls back to "unknown" when no IP can be determined.
 */
export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}
