# with creator — Brand assets

Web-served BI files for the `/ditto` (with creator) clone.

## Folder layout

```
public/with/
├── logo/          Wordmarks, marks, lockups
├── icons/         UI icons, app marks, favicons
└── README.md
```

## Current files

| File | Use |
|------|-----|
| `logo/with-big-logo.svg` | Primary SVG wordmark (from with_ai) |
| `logo/with-mark.png` | Square mark / app icon source |
| `logo/with-text-logo.png` | Horizontal “with” text lockup |

## Usage in code

```tsx
import Image from "next/image";

<Image src="/with/logo/with-text-logo.png" alt="with" width={787} height={182} />
```

Add new exports (favicon, OG image, burst icon PNG, etc.) under the matching subfolder.
