# RandomUser.me API Example with Query Filters and Response Search

Temp WIP

## Live Preview

TODO: Add GitHub page link

## Some Technologies Used Highlights

<details open>

  <summary>Click to expand/collapse</summary>

- Dart Sass
  - Uses `@use` and `@forward` to manage imports
  - `@media` queries for responsive design
  - `:focus-visible` pseudo-selector for keyboard focus
  - `:invalid` pseudo-selector for form validation
  - svg `fill` and `stroke` attributes for button hover color effects
  - `display: grid` layout for responsive design
  - No use of `display: flex`
  - Styling of newer `<dialog>` element including `::backdrop` pseudo-selector

- JavaScript ES7+
  - Template Literals
  - Object Destructuring
  - Fetch API
  - Promises
  - Async/Await
  - Classes
  - Dynamically loaded modules
  - Namespaced global variables
  - Contextual explanitory code comments with tagging
  - Dynamically updated page content with no reload needed
  - Carousel with circular navigation, keyboard nav, and index tracking
  - Architected for automated tree-shaking

- HTML
  - Strict use of sematic elements
  - No `<div>` tags
  - Strict headline hierarchy
  - Search input pattern checking for valid characters
  - Newer `<dialog>` element (requires latest evergreen browser versions)

</details>

## Development Toolchain

<details open>

  <summary>Click to expand/collapse</summary>

- CodeKit

  Used to:
  - Compile Dart SASS files into CSS
  - Complile Pug file into HTML
  - Provide UI for settings and processing management of:
    - Autoprefixer
    - PurgeCSS
    - CSSO
    - ESLint
    - Terser
  - Provide live browser refreshing

- MAMP Pro

  Used to add a MIME type parameter as an Apache Virtual Hosts directive so ES Modules with filename extensions `.mjs` are interpreted as JavaScript:

  ```lang-plaintext
  AddType application/javascript      .mjs
  ```

- Visual Studio Code
  - IDE of choice

- Git version control

</details>
