# Cloudflare Pages deployment

The production project is `cs-archive` in Cloudflare account
`805b33dabc3ee15b816e1b591928951e`.

## GitHub Actions

Create a Cloudflare API token with `Account / Cloudflare Pages / Edit` access,
then add it to the GitHub repository as the Actions secret
`CLOUDFLARE_API_TOKEN`. The workflow deploys on pushes to `main` and can also
be started manually.

The workflow safely skips deployment while the secret is absent, so repository
changes can be pushed before the credential is configured.

## Local deployment

After authenticating with `npx wrangler@4.110.0 login`, run:

```sh
npm run deploy:pages
```

The build script copies tracked website files to `dist`, excluding repository
and deployment metadata. Validation fails before upload if the output exceeds
Cloudflare Pages' 20,000-file or 25 MiB-per-file limits.

## Custom domain cutover

Keep the existing GitHub Pages DNS record until the `pages.dev` deployment has
been checked. Then add `cs.099115.xyz` under the Pages project's Custom domains
settings. Cloudflare will replace or request the necessary DNS record.
