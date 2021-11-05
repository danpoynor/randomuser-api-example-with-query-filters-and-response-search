# RandomUser.me API Example with Query Filters and Response Search

An example demonstrating API accessing, filtering, and searching of the returned response.

## Live Preview

[https://danpoynor.github.io/randomuser-api-example-with-query-filters-and-response-search/](https://danpoynor.github.io/randomuser-api-example-with-query-filters-and-response-search/)

## Responsive Layout Example Screenshots

<details open>

  <summary>Click to expand/collapse</summary>

  ![danpoynor-api-results-in-responsive-layout-examples](https://user-images.githubusercontent.com/764270/140547469-03dce6ae-bb16-4118-8b14-4085d2f0f8d9.jpg)

</details>

## Code Validation

[W3C CSS Validation](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fdanpoynor.github.io%2Frandomuser-api-example-with-query-filters-and-response-search%2Fstyles.css&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

[W3C Markup Validation](https://validator.w3.org/nu/?doc=https%3A%2F%2Fdanpoynor.github.io%2Frandomuser-api-example-with-query-filters-and-response-search%2F)

## Tech Used Highlights

<details open>

  <summary>Click to expand/collapse</summary>

- Dart Sass / CSS
  - Uses `@use` and `@forward` to manage imports
  - `@media` queries for responsive design
  - `:focus-visible` pseudo-selector for keyboard focus
  - `:invalid` pseudo-selector for form validation
  - svg `fill` and `stroke` attributes for button hover color effects
  - `display: grid` layout for responsive design
  - No use of `display: flex`
  - Styling of newer `<dialog>` element including `::backdrop` pseudo-element (requires latest Chrome or Safari Preview, Firefox Nightly browser versions)

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
  - Newer `<dialog>` element (requires latest Chrome or Safari Preview, Firefox Nightly browser versions)

</details>

## Development Toolchain

<details open>

  <summary>Click to expand/collapse</summary>

- [CodeKit](https://codekitapp.com/)

  Used to:
  - Streamline package.json NPM management
  - Compile [Dart SASS](https://sass-lang.com/dart-sass) files into CSS
  - Complile [Pug](https://pugjs.org/api/getting-started.html) file into HTML
  - Provide UI for settings and processing management of:
    - [Autoprefixer](https://github.com/postcss/autoprefixer)
    - [PurgeCSS](https://purgecss.com/)
    - [CSSO](https://github.com/css/csso)
    - [ESLint](https://eslint.org/)
    - [Terser](https://terser.org/)
  - Provide live browser refreshing

- [MAMP Pro](https://www.mamp.info/en/mamp-pro/mac/)

  Used to add a MIME type parameter as an [Apache](https://httpd.apache.org/) Virtual Hosts directive so [ES Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) with filename extensions `.mjs` are interpreted as JavaScript:

  ```lang-plaintext
  AddType application/javascript      .mjs
  ```

- [Visual Studio Code](https://code.visualstudio.com/)
  - IDE of choice

- [Git](https://git-scm.com/) version control

- [Apple iMac](https://www.apple.com/imac/) desktop computer

</details>
