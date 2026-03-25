# K0BG Image Recovery Manifest

## Summary

- **Total image URLs found in CDX**: 0
- **Successfully recovered**: 0
- **Failed/missing**: All

## Investigation Results

The Wayback Machine has **no accessible snapshots** of k0bg.com content. Investigation revealed:

1. **CDX API queries** for `k0bg.com/*` and `www.k0bg.com/*` across all MIME types (JPEG, PNG, GIF, PDF) returned zero results
2. **Wayback availability API** confirms no archived snapshots exist for `k0bg.com`, `www.k0bg.com`, or `k0bg.com/index.html`
3. **Direct Wayback fetch** of known pages (e.g., `bonding.html`) returns **HTTP 403 Forbidden** — indicating the site has been **excluded from the Wayback Machine** via a retroactive robots.txt takedown request
4. **Live site** (`http://www.k0bg.com/`) returns HTTP 200 but serves a **domain parking page** (Searchvity ad frame). The original content is gone.
5. **Gallery2 subsystem** (`k0bg.com/gallery2/*`) — also zero results in CDX

### Root Cause

The k0bg.com domain was either:
- Excluded by the original owner before the domain lapsed, OR
- Excluded by the new domain owner (squatter) who took over after the domain expired

The Internet Archive honors robots.txt exclusion requests retroactively, removing all previously captured snapshots from public access.

## Known Image Categories (Unrecoverable)

Based on the original site structure and article references, these image categories existed:

| Expected Path | Description | Referenced In |
|--------------|-------------|---------------|
| `images/antenna/*` | Antenna mounting photos, screwdriver antennas, loading coils | installation.html, antenna-problems.html |
| `images/bonding/*` | Bonding strap photos, exhaust bonding, hood straps | bonding.html |
| `images/common/*` | Ferrite bead photos, coax chokes, MFJ-854 meter | common-mode.html |
| `images/rfi/*` | Noise sources, RFI examples, spectrum screenshots | rfi.html |
| `images/wiring/*` | Power wiring, Anderson Powerpoles, fuse installations | wiring.html |
| `images/amplifiers/*` | Ameritron ALS-500, amplifier installations | amplifiers.html |
| `images/match/*` | Antenna analyzer readings, shunt coil photos, UNUN builds | antenna-matching.html |
| `images/controllers/*` | MFJ-1924, SDC-102B, reed switch details | antenna-controllers.html |
| `images/install/*` | Radio mounting, dashboard clearance, bed box mounts | installation.html |
| `images/tricks/*` | Tools, fastener comparisons, crimping examples | tricks.html |

## PDFs (Unrecoverable)

| Expected File | Description | Referenced In |
|--------------|-------------|---------------|
| `pdf/Q-222R1.pdf` | Ford aluminum body installation bulletin | installation.html |
| `pdf/GM.pdf` | GM vehicle bulletin | installation.html |
| `pdf/MobileAmateurRadioPolicyStatement.pdf` | ARRL mobile radio policy | general reference |
| `pdf/ABC.pdf` | BetterRF Screwdriver Control manual | antenna-controllers.html |

## Recommendation

Since all original images are unrecoverable from both the Wayback Machine and the live site:

1. Articles should use descriptive text in place of photos where possible
2. New photographs could be sourced from:
   - Creative Commons licensed amateur radio photos
   - Original photography of actual installations
   - Technical diagrams recreated as SVG
3. The community forums (eham.net, qrz.com) may have users who saved copies of k0bg.com images locally

## Recovery Attempted

- **Date**: 2026-03-24
- **CDX API endpoint**: `http://web.archive.org/cdx/search/cdx`
- **URLs tried**: `k0bg.com/*`, `www.k0bg.com/*`, `*.k0bg.com`, `k0bg.com/gallery2/*`
- **Wayback direct fetch**: HTTP 403 (excluded)
- **Live site fetch**: Domain parked (searchvity.com)
