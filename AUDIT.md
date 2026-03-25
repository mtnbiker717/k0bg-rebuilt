# K0BG Content Audit

Audited: 2026-03-24
Articles: 16

## Summary

- Total specific claims audited: ~350
- Verified against source material: ~280
- Unverified (plausible additions): ~65
- Contradictions found & fixed: 4
- Internal inconsistencies found & fixed: 2
- Missing content: 2 items
- High-risk article (no source material): 1

## Corrections Applied

| # | File | Before | After | Reason |
|---|------|--------|-------|--------|
| 1 | `common-mode.html` | 7-turn impedance listed as 2.2 kohm | Corrected to 2.7 kohm | Source shows 6 turns = 2.2 kohm, 7 turns = 2.7 kohm |
| 2 | `rfi.html` | Advised "stack multiple beads" | Replaced with "multiple turns preferred over multiple beads" | Contradicted source guidance |
| 3 | `rfi.html` | No color burst tolerance range mentioned | Added 146.70-146.80 MHz range | Omission from source material |
| 4 | `wiring.html` | Powerpole color convention was softened/ambiguous | Clarified: red/black for power, other colors for motor/control | Contradicted source convention |
| 5 | `wiring.html` | Fuse distance stated as "12 inches" | Changed to "as close to battery as possible" | Contradicted source best practice |
| 6 | `safety.html` | Fuse distance stated as "18 inches" | Changed to "as close to battery as possible" | Contradicted source best practice; also inconsistent with wiring.html |

## Outstanding Issues

### High Priority

| Issue | File | Details |
|-------|------|---------|
| 5AG fuse dimensions | `tricks.html` | Article states "1/4 x 1-1/4 inch" but standard 5AG is 13/32" x 1-1/2". Needs correction or clarification. |
| Missing glossary term | `glossary.html` | "Strapping" is present in source material but absent from the glossary. Needs to be added. |
| AI-generated article | `coil-adjustment.html` | Entire article has no dedicated source material. All 17 specific claims are unverified. Physics checks pass but specific numbers (12 ohm on 40m, 3-5 ohm on 75m, 48" whip, 50 kHz shift, 4 ft spacing) are AI-generated. Needs disclaimer or source validation. |
| UNUN softening | `antenna-controllers.html` | Article says "broadband UNUN can also work" for SWR-sensing controllers, but source states fixed shunt coil is "the only correct matching." Should be tightened to reflect source or explicitly noted as editorial addition. |

### Low Priority / Informational

| Category | Details |
|----------|---------|
| Unverified but plausible | ~65 claims across all articles are reasonable additions not directly traceable to source. These include product names (Penetrox, No-Ox-Id, Scotch 130C), specific vehicle references (Ford F-150 2015), and practical advice ("full weekend at minimum," flat washer placement). |
| Outdated prices | "$30 Hustler lesson" in tricks.html may not reflect current pricing. |
| Omissions from source | RVs and "plastic-skinned" vehicles dropped from installation.html challenging vehicle list; reed switch bench test warning and Polyfuse reset time omitted from antenna-problems.html; discarded RG8 braid shielding tip omitted from rfi.html; MFJ 259B filter mention omitted from antenna-matching.html; SDC-100 stall current procedure ("not in manual") omitted from antenna-controllers.html. |
| Minor measurement discrepancy | abcs.html states quarter-wave on 20m is "16.5 feet" -- actual quarter-wave at 14.2 MHz is ~17.4 feet. May be intentional (shortened element) but worth reviewing. |
| Amplifier model suffix | amplifiers.html references "ALS-500M" but source says "ALS-500." The "M" suffix should be verified. |
| Coil dimension ambiguity | amplifiers.html mentions a "3.5 inch" coil dimension -- unclear whether source means diameter or length. |

## Article-by-Article Findings

---

### abcs.html

**Verdict: PASS WITH NOTES**

| Status | Claim / Issue |
|--------|---------------|
| ✅ | 22 specific claims verified against source material |
| ⚠️ | Quarter-wave on 20m stated as "16.5 feet" -- actual is ~17.4 feet |
| 🔍 | "Full weekend at minimum" for installation time -- unverified |
| 🔍 | "Not a Haynes manual, not a Chilton guide" -- unverified (editorial) |
| 🔍 | "Two-pound transceiver at 200 mph" -- unverified |
| 🔍 | "VHF/UHF in hybrids generally workable" -- unverified |
| 🔍 | "Remotable transceivers strongly preferred" -- unverified |
| 🔍 | 3 additional unverified claims |

---

### safety.html

**Verdict: PASS WITH NOTES**

| Status | Claim / Issue |
|--------|---------------|
| ✅ | 3 claims verified via cross-reference with other articles |
| ✅ | All physics checks correct |
| ✅ | Fuse distance FIXED -- changed from "18 inches" to "as close to battery as possible" |
| 🔍 | 10 claims unverified (no dedicated source material for this article) |

---

### bonding.html

**Verdict: PASS**

| Status | Claim / Issue |
|--------|---------------|
| ✅ | 27 claims verified -- very clean article |
| 🔍 | "Four-door sedan has eight hinges" -- unverified |
| 🔍 | "Flat washer between star washer and braid" -- unverified |
| 🔍 | Stainless steel recommendation for exhaust -- unverified |
| 🔍 | Corrosion inhibitor recommendation -- unverified |
| 🔍 | 1 additional unverified claim |

---

### wiring.html

**Verdict: PASS (after fixes)**

| Status | Claim / Issue |
|--------|---------------|
| ✅ | 21 claims verified |
| ✅ | Powerpole color convention FIXED -- clarified red/black for power |
| ✅ | Fuse distance FIXED -- changed from "12 inches" to "as close to battery as possible" |
| 🔍 | PP75/PP120 connector sizes -- unverified |
| 🔍 | Penetrox/No-Ox-Id product references -- unverified |
| 🔍 | Specific fuse sizing recommendations -- unverified |
| 🔍 | 0.5V drop test threshold -- unverified |
| 🔍 | Ford F-150 2015 date reference -- unverified |

---

### common-mode.html

**Verdict: PASS (after fix)**

| Status | Claim / Issue |
|--------|---------------|
| ✅ | 20 claims verified |
| ✅ | 7-turn impedance FIXED -- corrected from 2.2 kohm to 2.7 kohm |
| 🔍 | 2 unverified claims |

---

### rfi.html

**Verdict: PASS (after fixes)**

| Status | Claim / Issue |
|--------|---------------|
| ✅ | 19 claims verified |
| ✅ | "Stack beads" advice FIXED -- replaced with "multiple turns preferred" |
| ✅ | Color burst tolerance range ADDED (146.70-146.80 MHz) |
| ✅ | Cable damage warning for twisting -- already present in article |
| 🔍 | Discarded RG8 braid for older ignition shielding -- omitted from source |
| 🔍 | 3 additional unverified claims |

---

### installation.html

**Verdict: PASS WITH NOTES**

| Status | Claim / Issue |
|--------|---------------|
| ✅ | 14 claims verified |
| ⚠️ | RVs and "plastic-skinned" vehicles omitted from challenging vehicle list |
| 🔍 | Chilton manual reference -- unverified |
| 🔍 | Silicone sealant recommendation -- unverified |
| 🔍 | Projectile weight claim -- unverified |
| 🔍 | Interior temperature claim -- unverified |

---

### antenna-problems.html

**Verdict: PASS**

| Status | Claim / Issue |
|--------|---------------|
| ✅ | 24 claims verified -- cleanest article in batch |
| ⚠️ | Reed switch bench test warning omitted from source |
| ⚠️ | Polyfuse reset time omitted from source |
| 🔍 | Alternator voltage range -- unverified |
| 🔍 | Normal motor resistance figure -- unverified |
| 🔍 | 1 additional unverified claim |

---

### antenna-matching.html

**Verdict: PASS**

| Status | Claim / Issue |
|--------|---------------|
| ✅ | 27 claims verified -- cleanest article overall |
| ⚠️ | MFJ 259B filter mention omitted from source |

---

### antenna-controllers.html

**Verdict: PASS WITH NOTES**

| Status | Claim / Issue |
|--------|---------------|
| ✅ | 20 claims verified |
| ⚠️ | UNUN claim softened: article says "broadband UNUN can also work" but source says fixed shunt coil is "the only correct matching" |
| ⚠️ | SDC-100 stall current procedure ("not in manual") omitted |

---

### amplifiers.html

**Verdict: PASS WITH NOTES**

| Status | Claim / Issue |
|--------|---------------|
| ✅ | 21 claims verified |
| ✅ | All physics correct (7 dB calculation, S-unit calculation, I-squared noise) |
| 🔍 | "ALS-500M" suffix -- source says "ALS-500" |
| 🔍 | MOSFET push-pull circuit details -- unverified |
| 🔍 | 80A current draw figure -- unverified |
| 🔍 | SGC SG-500 and Mirage product mentions -- unverified |
| ⚠️ | 3.5" coil dimension -- ambiguous whether source means diameter or length |

---

### vhf-options.html

**Verdict: PASS**

| Status | Claim / Issue |
|--------|---------------|
| ✅ | 22 claims verified |
| 🔍 | NMO 3/4" hole size -- correct but not in source |
| 🔍 | Vendor names -- unverified |
| 🔍 | Antenna gain figures -- unverified |
| 🔍 | Handheld 10-20 dB improvement claim -- unverified |

---

### otr-rv.html

**Verdict: PASS WITH NOTES**

| Status | Claim / Issue |
|--------|---------------|
| ✅ | 17 claims verified |
| 🔍 | 400 Ah house bank figure -- unverified |
| 🔍 | Intermodulation from dual alternators -- unverified |
| 🔍 | 10-15 dB dipole advantage -- unverified |
| 🔍 | FT-240-31 part number -- unverified |
| 🔍 | Type 31/43 ferrite recommendation -- unverified |
| 🔍 | 10 AWG wire spec -- unverified |
| 🔍 | 12x12" steel plate -- unverified |
| 🔍 | Rubber-mounted cab isolation -- unverified |
| 🔍 | 8-10 turns through FT-240-31 -- unverified |
| 🔍 | 1 additional unverified claim |

---

### tricks.html

**Verdict: PASS WITH NOTES**

| Status | Claim / Issue |
|--------|---------------|
| ✅ | 28 claims verified |
| ❌ | 5AG fuse dimensions stated as "1/4 x 1-1/4 inch" -- standard 5AG is 13/32" x 1-1/2". NEEDS CORRECTION. |
| 🔍 | Scotch 130C product reference -- unverified |
| 🔍 | Crimp wing orientation detail -- unverified |
| 🔍 | Phillips screw opinion -- unverified (editorial) |
| 🔍 | "$30 Hustler lesson" -- unverified, possibly outdated |
| 🔍 | Stainless steel loss quantification -- unverified |
| 🔍 | 1 additional unverified claim |

---

### coil-adjustment.html

**Verdict: CAUTION**

| Status | Claim / Issue |
|--------|---------------|
| ⚠️ | Only 1 claim partially verified |
| ❌ | 17 specific claims unverified -- entire article AI-generated with no dedicated source material |
| 🔍 | 12 ohm impedance on 40m -- unverified, AI-generated |
| 🔍 | 3-5 ohm impedance on 75m -- unverified, AI-generated |
| 🔍 | 48" whip length recommendation -- unverified, AI-generated |
| 🔍 | 50 kHz frequency shift figure -- unverified, AI-generated |
| 🔍 | 4 foot spacing recommendation -- unverified, AI-generated |
| ⚠️ | Physics checks pass but specific numbers cannot be traced to any source |
| ❌ | HIGH RISK: Needs either source validation, expert review, or a visible disclaimer |

---

### glossary.html

**Verdict: PASS WITH NOTES**

| Status | Claim / Issue |
|--------|---------------|
| ✅ | 37 terms present, all definitions technically correct |
| ❌ | "Strapping" term is MISSING -- present in source but absent from glossary |
| 🔍 | B-CAN data rates -- specific number not in source (industry standard) |
| 🔍 | Maxifuse lower bound -- specific number not in source (industry standard) |
| 🔍 | Shadowing 6 dB figure -- specific number not in source (industry standard) |
| ✅ | Radiation resistance vs feed impedance distinction correctly handled |
| ✅ | Internal consistency across terms is good |

---

## Legend

| Marker | Meaning |
|--------|---------|
| ✅ | Verified against source material or confirmed correct |
| ⚠️ | Unverified, softened from source, or omitted -- review recommended |
| ❌ | Incorrect, missing, or high-risk -- action needed |
| 🔍 | Unverified addition -- plausible but not traceable to source |
