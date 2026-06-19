# TODO - Portfolio content upgrade

## Plan (approved context)

- Map existing routes:
  - `/` → Home (Professional Experiences)
  - `/about` → About (Training, Languages, Tools)
  - `/projects` → Projects (Selected Projects)

## Steps

1. Fix router imports/names in `src/router/routes.ts` (currently references undefined components).
2. Update `src/App.vue` to render the navigation and `<router-view />`.
3. Replace placeholder content in:
   - `src/views/home.vue` with Professional Experiences section.
   - `src/views/about.vue` with Training & Professional Development + Languages + Tools.
   - `src/views/project.vue` with Selected Projects extracted from the provided experiences.
4. Ensure consistent styling (simple card/timeline layout) across pages.
5. Update navigation label routes (Home/About/Projects).
6. Install missing dependency `vue-router`.
7. Run `npm install`, `npm run build-only`, and confirm navigation + routes render correctly.

## Progress

- [x] Steps 1-5 implemented
- [x] Installed `vue-router`
- [x] `npm run build-only` succeeded
