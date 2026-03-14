This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Environment variables

This project stores subscriber data in an encrypted file. To enable that, set the following environment variables in your development environment or hosting platform:

- `SUBSCRIBER_STORE_KEY` - A 32-byte secret used to encrypt/decrypt subscriber data. You can supply it directly or as a base64 string prefixed with `base64:`.
- `ADMIN_USER` - Admin username for viewing encrypted subscriber data.
- `ADMIN_PASS` - Admin password for viewing encrypted subscriber data.

Example `.env.local`:

```env
# Either a 32-byte raw secret:
SUBSCRIBER_STORE_KEY=5cB1... (32 characters)

# Or a base64-encoded key:
SUBSCRIBER_STORE_KEY=base64:VGVzdGluZ1NlY3JldEtleUluQmFzZTY0

ADMIN_USER=admin
ADMIN_PASS=supersecret
```

### Useful pages

- **Subscriber dashboard (self-service):** `/subscriber`
- **Admin subscriber list (encrypted view):** `/admin/subscribers`
- **Custom workflow AI product page:** `/products/custom-workflow-solutions`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
