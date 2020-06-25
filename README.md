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

1. Login to `npm` in your terminal.
2. Manually bump the `version` in `package.json`.
3. Run `npm publish` - this builds the new `/dist` and pushes to npm

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
