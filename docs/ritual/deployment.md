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

Initial state: GoDaddy `@` record is Parked, `www` points to `madeinritual.com`.
Domain ownership is verified in Vercel; DNS cutover and HTTPS verification are pending.
