# Spectra

Design system for the Astronomer platform.

## Add to your project

```bash
yarn add @astronomer/spectra
```

```JSX
import { Example } from "@astronomer/spectra";

render () {
  return (
    <Example />
  );
}
```

## Develop

Clone the repository and use the package manager [yarn](https://yarnpkg.com) to install the project's dependancies.

```bash
yarn install
```

Open Storybook at `http://localhost:51731/`.

```bash
yarn start
```


## Release Process

This package is automatically semantically versioned when merges are made to `main`.

To bump a minor version run `yarn pkg-minor`.

To bump a major version run `yarn pkg-major`.


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
