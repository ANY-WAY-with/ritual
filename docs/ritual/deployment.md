# Deployment and domain

- GitHub repository: https://github.com/ANY-WAY-with/ritual
- Vercel project: https://vercel.com/any-way/ritual
- Vercel team: ANY-WAY (`team_H34f9BMLTUhACUFTOLprl3i9`)
- Project ID: `prj_Ofkbe1iWx9LuNRW30rI0L2JofOxa`
- Production branch: `main`
- Public Vercel URL: https://ritual-ruddy.vercel.app
- Primary custom domain: https://madeinritual.com
- `www.madeinritual.com`: configured in Vercel to redirect to the primary domain with HTTP 308.

## DNS

Registrar and authoritative DNS remain GoDaddy. Preserve existing NS, SOA, `_domainconnect`, and `_dmarc` records.

Vercel's project-specific recommended records, read on 2026-11-06:

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 216.150.1.1 |
| A | @ | 216.150.16.1 |
| CNAME | www | 4d9f5641eaabd683.vercel-dns-016.com |

Recheck Vercel's domain configuration before future DNS changes; recommended values can change.

## Verified connection

Verified on 2026-11-06 at 18:07 KST after the user updated GoDaddy DNS:

- Apex resolves to both recommended A records; `www` resolves to the project CNAME.
- Vercel reports `misconfigured: false` with no conflicts for both domains.
- `https://madeinritual.com` returns HTTP 200 with the Ritual launch page and canonical URL.
- HTTPS certificate validation succeeds for both hostnames.
- `https://www.madeinritual.com` returns HTTP 308 to `https://madeinritual.com/`.

The domain connection is complete. GitHub pushes to `main` deploy automatically through Vercel.
