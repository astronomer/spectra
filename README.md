<p align="center">
  <img src="https://www.astronomer.io/static/iconforLIGHTbackground.svg" width="250" height="100">
  <br /><br />
  <a href="https://drone.astronomer.io/astronomer/design-system">
    <img src="https://drone.astronomer.io/api/badges/astronomer/design-system/status.svg">
  </a>
  <a href="#">
    <img src="https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg">
  </a>
</p>

# Astro Design System

A design system for The Astronomer Platform, a managed service to run Apache Airflow on Kubernetes.
<br />Built with React, exports to CommonJS and ES Modules.

## Add to your project

```bash
yarn add @astronomer/design-system
```

```JS
import { Example } from "@astronomer/design-system";

render () {
  return (
    <Example />
  );
}
```

### Develop

Clone the repository and use the package manager [yarn](https://yarnpkg.com) to install the project's dependancies.

```bash
yarn install
```

Open Storybook at `http://localhost:51731/`.

```bash
yarn start
```

#### Styling

Style Modules: include a `styles.module.css` file as needed for each code chunk.
<br/>CSS variables should be used and can imported as needed into the
style module files.

```CSS
@import 'styles/_mixins.css';

.container {
  @include container(hover);

  & h6 {
    @include textBodySmall;
  }
}
```

## Build Production

To build bundle files and Storybook static files:

```bash
yarn build
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
<br />Please make sure to update tests as appropriate.
