---
name: Micka Daoud Portfolio
description: A name-as-monument portfolio for development and design.
colors:
  paper: "#f4efe5"
  ink: "#352c24"
  accent: "#365744"
  muted: "#746557"
  line: "#d5c7b5"
  sand: "#d5b994"
  preview-clay: "#c4aa91"
  preview-sage: "#bac4aa"
  preview-sand: "#e1cfab"
  preview-moss: "#9ca78c"
typography:
  display:
    fontFamily: '"Geist Variable", sans-serif'
    fontSize: "clamp(90px, 13vw, 220px)"
    fontWeight: 650
    lineHeight: 0.85
    letterSpacing: "-0.04em"
  headline:
    fontFamily: '"Geist Variable", sans-serif'
    fontSize: "clamp(40px, 5.5vw, 88px)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.04em"
  title:
    fontFamily: '"Geist Variable", sans-serif'
    fontSize: "35px"
    fontWeight: 500
    letterSpacing: "-0.03em"
  body:
    fontFamily: '"Geist Variable", sans-serif'
    fontSize: "16px"
    lineHeight: 1.65
  label:
    fontFamily: '"Geist Variable", sans-serif'
    fontSize: "13px"
rounded:
  pill: "30px"
  circle: "50%"
spacing:
  gutter: "clamp(22px, 4.2vw, 80px)"
  section: "120px"
  section-mobile: "76px"
components:
  mode-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "9px 15px"
  skill-selected:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.accent}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  project-preview:
    backgroundColor: "{colors.preview-clay}"
    width: "100%"
  archive-toggle:
    padding: "30px 0"
    textColor: "{colors.ink}"
  copy-email:
    padding: "12px"
    textColor: "{colors.ink}"
---

# Design System: Micka Daoud Portfolio

## Overview

**Creative North Star: "Name as monument"**

A personal portfolio built around the name as a monument: large, tightly spaced lettering gives Micka Daoud a distinct presence. Warm paper, strong forest-green sections, and a muted sand contact surface frame a spacious, direct presentation of development and design work.

**Key Characteristics:**

- Oversized local Geist Variable typography.
- Asymmetric project rhythm with generous whitespace.
- Flat color fields and restrained interactive motion.

## Colors

Primary forest-green carries the punctuation, exploration control, introduction curtain, and full about section. Secondary sand marks the contact section. Neutral paper and ink support the main reading experience; muted text supplies metadata and fine line color divides archive and experience rows. Four soft preview colors distinguish the intentionally empty media containers.

## Typography

Geist Variable is locally bundled through `@fontsource-variable/geist`; the fallback is sans-serif. The display role is reserved for the name. Section headlines and project titles share tight tracking while body paragraphs remain open and readable. About paragraphs cap at 52ch.

The hero permanently uses the development display style: weight 650, ink lettering, and forest-green punctuation. There is no lettering switcher. At 1000px the name becomes 15vw, and at 700px it becomes 20vw with a 0.95 line height. Contact lettering uses `clamp(76px, 16vw, 260px)`, becoming 19vw on mobile.

## Layout

The page flows through hero, selected work, about/toolkit, experience/education, contact, and footer. Fluid gutters align sections; vertical section spacing reduces at 700px. The desktop project grid uses 1.15fr / 1fr columns, an 82px row gap and 5vw column gap; alternate projects start 145px lower. At 700px it becomes one column with 45px gaps and no stagger.

About uses 1.2fr / 1fr columns and becomes a single column at 700px. Experience uses a native horizontal scroll-snap timeline with 360px events on desktop and 85% viewport-width events on mobile. Additional adjustments at 1000px wrap the hero controls and footer; the desktop hero height is clamped between 540px and 700px at 73svh. Mobile navigation replaces the desktop links below 700px.

## Elevation & Depth

The main composition is flat: color fields, whitespace, and thin rules establish separation. Only the mobile navigation has an ambient shadow (`0 18px 22px #352c2412`) to distinguish its overlay from the page beneath.

## Shapes

Project previews are square-cornered rectangles with a 1.3 aspect ratio; alternate desktop previews use 1.05. Mode controls and skill choices use pill corners, and the exploration arrow uses a circular forest-green field. Avoid applying these control radii to large content surfaces.

## Components

- **Navigation:** compact text links with a left-origin underline on pointer hover. The mobile menu has an explicit toggle, closes on section selection, and supports Escape.
- **Lettering selector:** a bordered pill group with mutually exclusive pressed buttons. The selected option uses ink on paper inversion; state changes update the name styling.
- **Exploration link:** text beside a forest-green circular arrow, 60px on desktop and 43px on mobile. Hover moves the arrow down 5px.
- **Project preview:** an empty colored div with an accessible placeholder label; the title follows immediately below with 22px top spacing, then metadata, description, and plain text technology tags. These are deliberately placeholders for user-supplied media. Pointer hover scales the field to 0.985 and rotates it −0.7 degrees.
- **Archive disclosure:** a full-width transparent button between thin rules, paired with plus/minus icons and `aria-expanded`. Revealed archive rows use aligned text columns.
- **Skill choices:** outlined pills on forest-green. Selected and hovered choices use paper fill and forest-green text. Changing category reveals the corresponding wrapping skill list.
- **Experience timeline:** four chronological work/education events sit on a horizontal axis. Native scrolling, arrows, pagination and keyboard navigation select events. After six idle seconds, autoplay advances and wraps; it pauses offscreen, in background tabs, on hover/focus, with an open detail card, or via the pause control. Reduced motion disables autoplay. The forest-green 8px axis and 32px markers dominate an unboxed composition, with 100–200px desktop gaps and 72px mobile gaps. Next wraps to the first event. Base UI popovers show detailed descriptions and technology tags on event hover; event clicks do not open or toggle them. A separate Details control supports touch and keyboard, with collision handling, Escape dismissal and focus return. The axis draws in over 850ms; events rise and rotate into place once with 75ms stagger. Popup motion lasts 200ms.
- **Contact:** a large disclosure button on sand; its plus rotates into a close mark and unfolds GitHub, LinkedIn, and email links. Links stagger by 35ms with a 250ms expansion, stack on mobile, and are inert when collapsed. Escape closes and restores focus. Reduced motion removes transitions. A separate email link, copy control, and telephone link remain. Copy feedback is announced politely and resets after 3.5 seconds.

All links and buttons use a 2px current-color focus outline with 6px offset. Hover transforms are restricted to fine pointers. Entry reveals use opacity and a 28px upward translation over 700ms; content is visible by default. The decorative asterisk turns through one revolution over 5 seconds, then stops; pointer hover pauses it. On every refresh, the intro slides in the three cream-outlined letters of “mck” with 100ms stagger and a 3px non-scaling stroke, fills them bottom-to-top over 4.5 seconds, starting after 0.2 seconds with a drifting wave-shaped mask, then immediately splits the forest-green curtain. Total duration: 5.5 seconds. The underlying page is inert and scrolling is locked until completion; Escape skips it. Reduced motion removes the curtain, animation, transitions, smooth scrolling, and decorative transforms.

## Do's and Don'ts

- Do use Geist Variable from the local font package.
- Do retain visible keyboard focus and reduced-motion behavior.
- Do preserve the plain empty project preview divs until real media is supplied.
- Do keep resume facts grounded in RESUME.md.
- Don’t replace the project placeholders with invented screenshots or imagery.
- Don’t add decorative shadows to the flat project surfaces.
- Don’t hide content until JavaScript animations finish.

The header is sticky with an opaque paper background. Scrolling down hides it with a 250ms transform; scrolling up reveals it after 8px of accumulated movement. It stays visible near the document top, while the mobile menu is open, and whenever a navigation control has visible keyboard focus. Reduced motion removes the transition. Anchor scroll padding is 110px to keep section headings below the header.

The timeline snap point is inset to 30% of the viewport on desktop and 25% on mobile. Matching leading/trailing track padding gives the first and last events the same alignment; mobile event widths fit the remaining space.

Event descriptions sit up to 140px left of their date/marker, capped by the leading inset on small screens so text stays inside the page gutters. The event snap point is unchanged.

Palette update: warm cream (#f4efe5), espresso brown (#352c24), forest green (#365744), and tan (#d5b994). Project placeholders use clay, sage, sand, and moss. Accent colors share the semantic --accent token.

Hero interaction: each letter has a stable pointer hitbox and a separate transformed span. Fine mouse pointers lift letters up to 22px with up to 8 degrees of tilt and a 7px sideways response. Motion springs (mass 1, stiffness 100, damping 10) return letters to rest without React rerenders on each frame. Screen readers receive one complete name; touch and reduced-motion users keep stable letters.
