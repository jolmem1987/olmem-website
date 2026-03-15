This is a [Next.js](https://nextjs.org) project for **Olmem Technical Solutions**.

## Getting Started (local development)

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `SUBSCRIBER_STORE_KEY` | 32-byte key (or `base64:<key>`) used to encrypt subscriber data |
| `ADMIN_USER` | Username for the `/admin/subscribers` dashboard |
| `ADMIN_PASS` | Password for the `/admin/subscribers` dashboard |
| `SMTP_HOST` *(optional)* | SMTP host for new-subscriber notification emails |
| `SMTP_PORT` *(optional)* | SMTP port (default 1025) |
| `SMTP_USER` *(optional)* | SMTP username |
| `SMTP_PASS` *(optional)* | SMTP password |

### Useful pages

- **Home:** `/`
- **Subscription intake:** `/subscription`
- **Subscriber self-service dashboard:** `/subscriber`
- **Admin subscriber list:** `/admin/subscribers`

---

## Deploying to SiteGround

SiteGround supports Node.js applications through **cPanel → Node.js** (powered by
Phusion Passenger).  The steps below walk you through a full deployment.

### 1 – Upload the source code

Use **Git** (recommended) or the SiteGround **File Manager** / FTP to upload the
entire repository to a directory on your account, e.g.:

```
/home/<user>/olmem-website/
```

> **Do not** upload `node_modules/` or `.next/` – they are rebuilt on the server.

### 2 – Create the `.env.local` file on the server

SSH into your SiteGround account and create the environment file:

```bash
cd ~/olmem-website
cp .env.example .env.local
nano .env.local   # fill in real values
```

### 3 – Install dependencies and build

```bash
cd ~/olmem-website
npm install
npm run build
```

After the build, copy the static assets into the standalone output so they are
served correctly by the standalone server:

```bash
cp -r public .next/standalone/public
cp -r .next/static .next/standalone/.next/static
```

### 4 – Set up the Node.js app in cPanel

1. Log in to cPanel and open **"Node.js"** (or **"Setup Node.js App"**).
2. Click **"Create Application"** and fill in:

   | Field | Value |
   |---|---|
   | Node.js version | **20** (or the latest LTS available) |
   | Application mode | **Production** |
   | Application root | `olmem-website` (the folder you uploaded to) |
   | Application URL | Your domain or subdomain |
   | Application startup file | `server.js` |

3. Click **"Create"**.

4. In the environment variables section of the same form, add:
   - `NODE_ENV` = `production`
   - `SUBSCRIBER_STORE_KEY` = *(your key)*
   - `ADMIN_USER` = *(admin username)*
   - `ADMIN_PASS` = *(admin password)*

5. Click **"Save"** then **"Restart"**.

### 5 – Verify

Visit your domain in a browser.  The Olmem Technical Solutions site should load
with the full layout intact.  If you see a 500 error, check the Node.js
application log inside cPanel for details.

### Notes

- The encrypted subscriber store is written to `data/subscribers.enc` inside the
  application root.  Make sure the directory is writable (`chmod 755 data` or let
  the app create it automatically).
- To update the site after a code change: SSH in, run `npm run build`, copy the
  static assets as shown in step 3, and restart the Node.js app in cPanel.
- If your SiteGround plan does not include Node.js hosting, consider upgrading to
  **GrowBig** or **GoGeek** (shared) or any **Cloud** plan.

---

## Deploy on Vercel (alternative)

The app also deploys to [Vercel](https://vercel.com/new) with zero configuration.
Set the same environment variables in the Vercel dashboard.
