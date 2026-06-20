# ideas for later

## GitHub sync

Sync to GitHub for project activity status (most recent commit within reasonable timeframe, "inactive" or "hiatus" status if over x days, etc.)

## Skills interactions

* hover for subtlest glow
* click to toggle gentle glow on related skills (e.g. TS lights JS, React, Node; React lights JS + TS; etc.)
* alternatively: skip toggle and apply directly to hover

* implementation: add "related" or "tags" metadata, conditional classNames

## Hero image

* parallax image layout/tech
* separate scene, sky, and reflective layers
* set scene as primary top-layer image
* *slowly* pan horizontally across ultra-wide sky image
* reflections layer slowly fade-transitions between different points in time, synced to sky layer

## Reflections/Notes section (thanks, ChatGPT)

* Gallery of sticky notes
* Thought fragment on display
  * onClick => popup modal of thought process
* Data entry needs to be low friction

## Skills interactions (cont)

* add tags to `projects` and `skills`
* tags of currently hovered project stored in state that changes with cursor placement
* skills component:
  * `onMouseEnter()` + `onMouseLeave()`:
    * if `selectedTags // useState():tags[]` includes `skill.tag`
      * `<SkillTile className={"skills-item", ("highlight-[intensity]" : "")}/>`

## Site landing

* hide header bar until mouse movement, click, or screen touch
* taglines fade in sequentially as soon as page loads -- 1s initial timeout?
* suspense boundary app? (probably doesn't work this way)

## Skills display

* Floating side panel, fades/slides in/out of opposite side of page on hover or selection of project card
  * Alernatively, diagonal instead of horizontal opposite
* Panel smoothly transitions up/down or from one side of page to other based on mouse position
