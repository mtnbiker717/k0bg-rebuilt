# K0BG Mobile Amateur Radio — Community Preservation Project

A static website preserving the mobile amateur radio reference originally authored by **Alan Applegate, K0BG**.

K0BG.com was the encyclopedic resource for mobile HF and VHF amateur radio installation — covering antennas, bonding, wiring, RFI suppression, impedance matching, antenna controllers, amplifiers, and much more. It was the first place experienced operators sent newcomers, and the last word in many technical debates. When the site went offline, years of irreplaceable knowledge went with it.

This project reconstructs and organizes that knowledge as a free, permanent community resource.

## What's Here

- **40 articles across 7 topic areas** covering every aspect of mobile amateur radio installation — Getting Started, Electrical System, RFI & Noise, Antenna System, Equipment, Special Installs, and Reference
- **Comprehensive glossary** of 50+ technical terms
- **Modernized for 2026** — Alan's original guidance preserved, with new sections covering modern vehicle electrical systems, digital modes, current test equipment, and emerging technologies
- **Client-side search** across all articles
- **Responsive design** with dark mode — works on desktop, tablet, and mobile
- **Print-optimized** stylesheets for offline reference

## Important Disclaimer

**This project is NOT affiliated with or endorsed by Alan Applegate (K0BG) or his estate.**

This is an independent community preservation effort. The technical content was reconstructed from publicly available sources including cached pages, forum references, community posts, and search engine snippets. While every effort has been made to preserve accuracy, some content has been expanded or reorganized from the original.

## How It Was Built

The original k0bg.com content was lost when the domain went offline and was subsequently excluded from the Wayback Machine (HTTP 403 on all archived snapshots). Content was reconstructed from:

- Google-cached page fragments
- Forum posts quoting K0BG articles (eham.net, qrz.com, groups.io)
- Search engine snippets and metadata
- Community members' notes and references
- General amateur radio technical knowledge consistent with K0BG's documented positions

An [accuracy audit](AUDIT.md) was performed against the original source material, with corrections applied where contradictions or errors were found.

## Modernization

Alan's original content addressed vehicles and equipment available through roughly 2015. Every article has been updated with "Modern Considerations" sections that cover:

- **Modern vehicle electrical systems** — Intelligent Battery Sensors (IBS), battery-mounted fuse blocks, smart alternators (12.4–15.5V variable voltage), start-stop systems, 48V mild hybrids
- **New RFI sources** — LED headlight drivers, ADAS sensors, USB-C Power Delivery, electronic power steering, wireless CarPlay/Android Auto, heated seats and steering wheels
- **Aluminum and composite vehicles** — Galvanic corrosion prevention, adhesive-bonded panels, non-conductive body panels, factory ground points
- **Digital voice and data** — DMR, Fusion, D-STAR, M17, FT8/FT4, APRS with modern hardware
- **Current test equipment** — NanoVNA replacing MFJ analyzers, VNA-based choke verification
- **Updated product landscape** — MFJ/Ameritron closure (May 2024), Hardrock-50 LDMOS amplifiers, Wolf River Coils, modern dual-band mobiles, Mobilinkd TNC4
- **RV and OTR updates** — Starlink RFI, LiFePO4 house batteries, MPPT/inverter noise, Class B van builds

The original K0BG content has been preserved to the best of our ability from the sources available. Modern updates are clearly additions, not replacements — building on Alan's foundation rather than overwriting it.

## Contributing

### Photos Needed

The original site's images are unrecoverable. We need installation photos for:

- Bonding straps on vehicle panels (hood, exhaust, doors, bed-to-cab)
- Ferrite choke construction (coax wound through split beads)
- Antenna mounting examples (NMO, through-hole, screwdriver)
- Wiring installations (Powerpole connectors, fuse holders, cable routing)
- Before/after RFI measurements

If you have photos from your own mobile installation, we'd love to use them with full credit. See the photo request format and reach out.

### Corrections and Updates

If you spot a technical error, outdated information, or something K0BG would have disagreed with — please open an issue or submit a pull request. The [audit file](AUDIT.md) documents which claims are verified against original source material and which are supplementary.

### What Makes a Good Contribution

- Factual corrections with references
- Updated product information (model numbers, availability, pricing)
- Original installation photographs with permission to use under CC BY-SA 4.0
- Accessibility improvements
- Mobile/responsive layout fixes

## Tech Stack

Plain HTML/CSS/JavaScript — no frameworks, no build tools, no dependencies. Designed to be hosted on GitHub Pages (or any static file server) with zero configuration.

## License

Content is licensed under [Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)](LICENSE).

You are free to share and adapt this material for any purpose, including commercial, as long as you give appropriate credit and distribute your contributions under the same license.

## Credits

- **Alan Applegate, K0BG** — Original author of k0bg.com. His decades of practical experience and willingness to share it made mobile amateur radio accessible to thousands of operators.
- **Community contributors** — Reconstruction, organization, and site development.
- **The amateur radio community** — For preserving fragments of K0BG's work in forums, blog posts, and personal notes that made this reconstruction possible.

---

*73*
