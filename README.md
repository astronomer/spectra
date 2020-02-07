## Astronomer Spectra 🌈

[![](https://img.shields.io/github/package-json/v/astronomer/spectra)](https://github.com/astronomer/spectra/packages/121505)

A design system for The Astronomer Platform, a managed service to run Apache Airflow on Kubernetes.

## Add to your project


```bash
yarn add @astronomer/spectra@latest
```

```JSX
import { Example } from "@astronomer/spectra";

render () {
  return (
    <Example />
  );
}
```

---

### Develop

Clone the repository and use the package manager [yarn](https://yarnpkg.com) to install the project's dependancies.

```bash
yarn install
```

Open Storybook at `http://localhost:51731/`.

```bash
yarn start
```

---

### Release Process

This package is automatically semantically versioned when merges are made to `master`. 
<br/>To bump a minor version run `yarn pkg-minor`.
<br/>To bump a major version run `yarn pkg-major`. 

---

### Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
<br />Please make sure to update tests as appropriate.
