/**
 * server.js – SiteGround / Phusion Passenger entry point
 *
 * SiteGround cPanel Node.js hosting uses Phusion Passenger.  Set this file as
 * the "Application startup file" in cPanel → Node.js, and make sure you run
 * `npm install && npm run build` from the SSH terminal first.
 *
 * With `output: "standalone"` in next.config.ts this file delegates to the
 * self-contained server that Next.js generates in .next/standalone/server.js.
 * The PORT and HOST environment variables are respected so Passenger can inject
 * the correct port at runtime.
 */

const path = require("path");
const fs = require("fs");

// Path to the standalone server emitted by `next build`
const standaloneServer = path.join(__dirname, ".next", "standalone", "server.js");

if (!fs.existsSync(standaloneServer)) {
  console.error(
    "ERROR: .next/standalone/server.js not found.\n" +
      "Run `npm run build` first, then copy static assets:\n" +
      "  cp -r public .next/standalone/public\n" +
      "  cp -r .next/static .next/standalone/.next/static"
  );
  process.exit(1);
}

// Pass PORT / HOST through to the standalone server
process.env.PORT = process.env.PORT || "3000";
process.env.HOST = process.env.HOST || "localhost";

require(standaloneServer);
