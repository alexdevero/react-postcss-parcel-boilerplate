<p align="center">
  <img src="https://cdn.rawgit.com/alexdevero/react-postcss-parcel-boilerplate/master/docs/images/react-postcss-parcel-boilerplate.png" width="135" align="center">
  <br>
  <br>
</p>

<p align="center">
  <a href="https://david-dm.org/alexdevero/react-postcss-parcel-boilerplate"><img alt="Dependency Status" src="https://david-dm.org/alexdevero/react-postcss-parcel-boilerplate.svg?style=flat"></a>
  <a href="https://david-dm.org/alexdevero/react-postcss-parcel-boilerplate?type=dev"><img alt="devDependency Status" src="https://david-dm.org/alexdevero/react-postcss-parcel-boilerplate/dev-status.svg?style=flat"></a>
  <a href="http://opensource.org/licenses/MIT"><img alt="MIT License" src="https://img.shields.io/npm/l/express.svg"></a>
</p>

<p align="center">
  <a href="https://alexdevero.com"><img alt="Built by DEVERO" src="https://img.shields.io/badge/built%20by-DEVERO-brightgreen.svg?colorB=d30320"></a>
  <a href="https://github.com/alexdevero/react-postcss-parcel-boilerplate/releases"><img alt="Current release" src="https://img.shields.io/github/release/alexdevero/react-postcss-parcel-boilerplate.svg"></a>
</p>

# React - PostCSS - Parcel Boilerplate

Minimal React, [PostCSS] and [Parcel Bundler] app boilerplate.

### Table of contents

* [What's inside?](#whats-inside)
* [Install](#install)
* [Usage](#usage)
* [Notes](#notes)
* [Code of Conduct](#code-of-conduct)
* [License](#license)

## What's inside?

* `react`
* `react-dom`
* `parcel-bundler`
* `babel-preset-react-app`
* `autoprefixer`

Folder structure:

```
react-postcss-parcel-boilerplate
└── src
│   └── assets
│      └── .gitkeep
│   └── styles
│      └── styles.css
│   └── index.html
│   └── index.js
├── .babelrc
├── .editorconfig
├── .gitignore
├── .postcssrc
├── code-of-conduct.md
├── license
├── package.json
├── README.md
└── yarn.lock
```

### Install

#### Clone this repo

First, clone the repository (or download it) and navigate into its folder:

```
git clone https://github.com/alexdevero/react-postcss-parcel-boilerplate.git

cd react-postcss-parcel-boilerplate
```

#### Install dependencies

Second, install dependencies using npm, yarn, pnpm or any other dependency manager.
```
yarn
```
or
```
npm install
```

### Usage

#### Run it

Use following command and open `http://localhost:1337`. When you edit `index.js` and save your changes. Parcel will automagically hot reload you files whenever you make changes.

```
yarn start
```
or
```
npm start
```

#### Building for Production

Use following command when you want to compile your JS and copy your `index.html` to the `dist` folder you can then deploy.

```
yarn run build
```
or
```
npm run build
```

### Notes

#### HTML

If you want to move `index.html`, make sure to update the `start` and `build` npm scripts in `package.json` with the new relative path to the file.

#### CSS

[Parcel uses PostCSS plugins to manage CSS assets](https://parceljs.org/transforms.html#postcss). You can find and modify PostCSS configuration by editing `.postcssrc` file.

#### Deployment

If you have any questions about deployment, take a look at the guide in `create-react-app` [repository]. Keep in mind that Parcel builds the app into a `dist` directory. CRA uses `build` directory. If you want to change the destination for build, add `--out-dir build` to both `start` and `build` npm tasks in `package.json`.

### Code of Conduct

[Contributor Code of Conduct](code-of-conduct.md). By participating in this project you agree to abide by its terms.

### License

MIT © [Alex Devero](https://alexdevero.com).

<!-- Links -->
[PostCSS]: http://postcss.org/
[Parcel Bundler]: https://parceljs.org
[repository]: https://github.com/facebookincubator/create-react-app
