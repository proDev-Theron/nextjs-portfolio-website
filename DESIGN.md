---
# gstack: design-md-format=spec
name: Theron Bueno portfolio
description: A quiet, evidence-first page for a site reliability engineer. Paper-light ground, ink text, one green accent that means "verified".
colors:
  primary: "#0B7A4B"
  primary-hover: "#09643D"
  on-primary: "#FFFFFF"
  background: "#F5F6F4"
  surface: "#FFFFFF"
  text: "#111418"
  text-muted: "#5A6169"
  rule: "#DDE1DE"
  dark-primary: "#3FB67E"
  dark-primary-hover: "#5CC894"
  dark-on-primary: "#0B1410"
  dark-background: "#0F1215"
  dark-surface: "#171B1F"
  dark-text: "#E8EBE9"
  dark-text-muted: "#9AA3AB"
  dark-rule: "#2A3036"
typography:
  display:
    fontFamily: General Sans
    fontWeight: 600
    fontSize: clamp(2.2rem, 4.6vw, 3.4rem)
    letterSpacing: -0.025em
  heading:
    fontFamily: General Sans
    fontWeight: 600
    fontSize: 2rem
    letterSpacing: -0.015em
  body:
    fontFamily: Source Sans 3
    fontSize: 17px
    lineHeight: 1.55
  label:
    fontFamily: Source Sans 3
    fontWeight: 600
    fontSize: 13px
    letterSpacing: 0.04em
  mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontFeature: tnum
rounded:
  sm: 6px
  md: 8px
  full: 999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 72px
  4xl: 96px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    borderColor: "{colors.text}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
  badge:
    borderColor: "{colors.rule}"
    textColor: "{colors.text-muted}"
    rounded: "{rounded.full}"
  quote:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.md}"
  nav-link:
    textColor: "{colors.text-muted}"
---

# Theron Bueno portfolio

## Overview

**Creative North Star:** An incident report written by someone you'd trust with production. Typography and ruled lines carry the page, numbers sit in mono, and the single green accent marks outcomes that are proven.
**Product context:** Personal site for a site reliability engineer. Readers are US/EU hiring managers, recruiters, and engineers evaluating him for senior SRE/platform roles or long-term contracts. It's a static Next.js site on Vercel.
**Mode per surface:** Persuade (hero, evidence ledger); Read (case studies, principles, experience).
**Reference sites:** None. Visual research was not run this session, so the direction comes from design knowledge and the brief.
**Key characteristics:**
- The first screen shows proof in a ruled ledger, not adjectives or big-number tiles.
- Case studies read like postmortems: labeled steps, with a status badge for anything still open.
- One accent color, used only for actions and verified results.
- There's no decoration anywhere. If a section feels empty, it needs better content.

**Memorable thing:** "This engineer shows proof, not adjectives." Every choice below serves that.

## Colors

**Strategy:** Restrained. One green accent plus warm-neutral grays. Green means "act here" (buttons, links on focus) or "this is a verified result" (`.ok`, `.res`). It's never used for decoration.
**Light or dark:** Light by default. Readers are recruiters and hiring managers skimming during work hours in lit offices, and many are on laptops between meetings. Dark mode is a reader toggle, not the brand.
Neutrals lean slightly green so they sit with the accent instead of against it. In dark mode, surfaces step up in lightness (background, then surface, then rule) to keep hierarchy, and the accent lightens to hold contrast. It doesn't just invert.

## Typography

**General Sans** (Fontshare, ITF Free Font License) is the display face: a grotesk with enough character to feel authored without reading as a startup template. Weights are 500 and 600.
**Source Sans 3** (Google Fonts, OFL) is the body face: highly legible for long case-study text, and neutral enough to let the content lead. Weights are 400 and 600.
**JetBrains Mono** (Google Fonts, OFL) is used only for numbers, dates, status badges, and tech lists, with tabular figures so metrics align. It marks data, not personality.
The scale jumps in clear steps: display 2.2 to 3.4rem, then headings 2rem, h3 about 1.2 to 1.35rem, body 17px, and labels and mono 13px. Labels are uppercase with tracking; nothing else is.
All three families load from Google Fonts and the Fontshare CDN with `display=swap` and preconnects. Self-hosting them is the next performance step.

## Layout

The page sits in a single 1120px column with 24px side padding. The hero is a two-column grid (1.1fr / 1fr) with the claim on the left and the evidence ledger on the right. Case studies use a label/value grid (140px label column). Principles are ruled rows (name, how it was applied, result). Experience uses a 180px date column.
Sections are separated by 1px rules with 72px vertical padding (56px on mobile). At 860px and below, every grid collapses to one column and the section nav hides.

## Elevation & Depth

The page is flat. Hierarchy comes from rules (a 1px `rule` color, with a 2px `text` color at the head of a group) and from a surface tint for the quote panel. There are no shadows and no glows.

## Shapes

Buttons and the theme toggle use 6px. The quote panel uses 8px. Status badges are fully rounded. Everything else is square.

## Components

- **Primary button:** a solid primary fill, with a darker primary on hover and a 2px primary outline at a 2px offset on focus-visible. The label names the outcome ("Email me").
- **Secondary button:** a 1px ink border on a transparent fill, with the same focus treatment.
- **Theme toggle:** always labeled "Dark mode", with `aria-pressed` reflecting state. Its border and text shift to ink on hover and when pressed.
- **Evidence ledger:** a table with a mono value column (24px, 600 weight) and a plain-language explanation. Each row must trace to verified evidence.
- **Case study:** an article with a title, a status badge ("Ongoing", "Complete", "In progress"), and labeled steps (context, signal, hypotheses, evidence, decision, result, what changed). Unproven hypotheses must say so.
- **Principle row:** the principle name, the mental model in mono, how it was applied, and the result in primary.
- **Quote panel:** a surface-tinted panel carrying a real, attributed quote only.

## Do's and Don'ts

- Do trace every number to evidence, and label open investigations as open.
- Do use mono only for data (numbers, dates, statuses, tech lists).
- Do reserve the green accent for actions and verified results.
- Do keep every text pair at WCAG AA or better; the current tokens are 4.97:1 to 17:1.
- Don't add a kicker or chip above the hero headline, or big-number tiles with tiny labels.
- Don't use colored side borders on cards or quotes; use the surface tint instead.
- Don't use looping animations. The old pulsing availability dot cost about 1.8s of mobile layout work.
- Don't use inline `style` attributes; the CSP forbids inline styles.
- Don't name the current employer or internal systems; this page is public.

## Motion

- **Approach:** minimal-functional. Only smooth anchor scrolling, disabled under `prefers-reduced-motion`.
- **Easing:** enter(ease-out) exit(ease-in) move(ease-in-out)
- **Duration:** micro(50-100ms) short(150-250ms) medium(250-400ms) long(400-700ms)
- **The one authored moment:** none. The evidence ledger is the first-screen moment, not an animation.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-09-30 | v2 system: light paper ground, green accent, General Sans / Source Sans 3 / JetBrains Mono | Approved in the first /design-consultation preview; proof-first positioning for SRE hiring |
| 2026-10-01 | Removed hero kicker, pulsing dot animation, and quote left border | Anti-slop audit; the animation also caused about 1.8s of mobile layout work |
| 2026-10-01 | Principles as ruled rows instead of a 3-column card grid | Unequal content deserves rows, and they match the case-study format |
| 2026-10-01 | Strict CSP (no inline scripts or styles) via vercel.json | Security audit; the page has no inline scripts, so the strict policy costs nothing |
