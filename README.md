This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

### Google sign-in

In the Google Cloud OAuth client used by `AUTH_GOOGLE_ID`, add this Authorized redirect URI:

```text
http://localhost:3000/api/auth/callback/google
```

For the deployed app, also add the exact production callback URI:

```text
https://<your-vercel-domain>/api/auth/callback/google
```

In Vercel, add these Environment Variables for the `Production` environment, then redeploy:

```text
AUTH_GOOGLE_ID
AUTH_GOOGLE_SECRET
AUTH_SECRET
AUTH_TRUST_HOST=true
AUTH_FIREBASE_PROJECT_ID
AUTH_FIREBASE_CLIENT_EMAIL
AUTH_FIREBASE_PRIVATE_KEY
```

Do not set `AUTH_URL` to `http://localhost:3000` in Vercel. If `AUTH_URL` is configured there, use the deployed HTTPS origin instead. The Google client must also include the deployed origin under Authorized JavaScript origins.

The URI must match the app origin and path exactly, including the protocol, port, and trailing path.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
