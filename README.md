# Updated Project Structure


## TODO
- Enforce Feature Slice Design rules with ESLint

## Quick Setup
1. `npm install`
2. `npm run dev`
3. Install the official Vue.js VSCode extension for proper typscript support.

## Details

This project uses Vue.js, Typescript, Tailwind.css, and Chart.js in a Feature Sliced Design (FSD) folder structure.

## Technology Stack

- [Vue 3](https://vuejs.org/guide/introduction.html)
- [Vue Router](https://router.vuejs.org/introduction.html)
- [Typescript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com/docs)
- Volt! Upcoming PrimeVue fork with standalone tailwind components
- [Chart.js](https://www.chartjs.org/)

## 📏 Coding Conventions
These are mostly subjective choices but being consistent with things like this will help us collaborate.

- Always use the composition API when writing Vue components.
- Place <script></script> tags before <template></template> tags when writing Vue components.
- Avoid using <style></style> tags in Vue components and instead opt for tailwinds utility classes.

## 🏗️ Project Structure

The project follows Feature Sliced Design (FSD) principles. I will include a brief explanation of FSD but it's best to refer to the following resources:
- [Feature Sliced Design - Official](https://feature-sliced.design/)
- [Understanding Feature-Sliced Design](https://hackernoon.com/understanding-feature-sliced-design-benefits-and-real-code-examples)

### Layers 🧅

I've included all layers in the FSD spec in the project from the start and labelled them 1-6 in order to more clearly represent the heirarchal import rules in the file explorer. You can read more about layers [here](https://feature-sliced.design/docs/reference/layers).

```
📦src
 ┣ 📂1-app          // App setup, routing, entrypoints, global styles, and providers/plugins
 ┣ 📂2-pages        // Full pages or large parts of a page in nested routing
 ┣ 📂3-widgets      // Large self-contained chunks of functionality or UI
 ┣ 📂4-features     // Reused implementations of entire product features
 ┣ 📂5-entities     // Business entities that the project works with, like user or product
 ┗ 📂6-shared       // Generic reusable functionality
```

### Slices 🍰

Slices in FSD represent vertical partitions of the app, with each slice responsible for a specific domain or feature. They help in organising the codebase by grouping related functionality together, making it easier to manage and scale.

Each slice should be self-contained and expose a public "API" through an `index.ts` file, allowing other parts of the application to interact with it without needing to know its internal structure. This ensures higher cohesion within a slice and clearly defined coupling points through the layers.

Slices CANNOT access code in other slices in the same layer or in slices in higher layers. Slices can access code in slices in lower layers.


### Segments 🧩

Segments are smaller units within slices that further break down the functionality into manageable parts. They are typically organized by specific function within a slice like 'ui', 'api', 'model', and 'config'.

Segments help in maintaining a clear separation of concerns while maintaining strong cohesion within a slice. Segments can access code freely from other segments in the same slice. 


### Rules 📌

- The App & Shared layers do not have slices.
- Layers can only import from lower layers.
- Slices can not import from other slices on the same layer.
- Each slice should have a public API (`index.ts`) to export neccessary functionality of its segments, ensuring controlled coupling.
- Segments CAN import from other segments in the same slice.

Following this structure ensures high cohesion and low coupling across the application.

I find the best approach to development in a FSD structured application is to start from the top down to avoid unnecessarily adding abstractions. The lower layers are extracted as the application is built and clear opportunities for code reuse are identified.
