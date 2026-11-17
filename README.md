# R Remy Miller · The Literary Atelier

Many Worlds. One Imagination.

The first construction version of the new author website: a Christmas welcome, searchable literary catalogue, individual work pages, About, RGuytano art and music, Journal, and Contact.

## Hosting for review

This is a buildless static site. In GitHub, open Settings → Pages. Choose Deploy from a branch, main, / (root), then Save. No custom domain is set in this version. The legacy remyrmiller.com site and domain forwarding remain unchanged.

For local preview, run `python3 -m http.server 8080` from this directory.

## Content and editing

`build.py` holds the public editorial definitions and generates the HTML and `data/catalogue.json`. Run `python3 build.py` from the repository root after changing those definitions. CSS and JavaScript live in `assets/`.

The 21 initial catalogue entries are a starting inventory, not a claim of an exhaustive bibliography. Availability distinguishes developing work from published episodes. Descriptions are introductory editorial copy for author review, not approved manuscript text. Private submission records and manuscript excerpts are excluded.

The RGuytano showcase uses three visual selections from the existing artist landing graphic. Original high-resolution artwork and captions can replace these as the curation develops. The independent artist destination is not presented as launched. The orbital ornament is site design; the three selected digital works are taken from the existing RGuytano landing image.

The Christmas library image was supplied for this site. The author portrait is carried forward from the legacy author website. Literary title panels are typographic site designs, not published book covers.

Contact opens a mail application at the address already public on the legacy site. No form processor, payment system, tracking, or private documents are included.
