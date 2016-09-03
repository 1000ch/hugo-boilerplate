# Hugo Boilerplate

[![devDependency Status](https://david-dm.org/1000ch/hugo-boilerplate/dev-status.svg)](https://david-dm.org/1000ch/hugo-boilerplate#info=dev)

Minimum structure for Hugo.

You have to install newest version of Hugo before using this repository.

```bash
$ brew install hugo
```

If already installed, I recommend you to update.

```bash
$ brew update
```

## Getting started

Clone this repository.

```bash
$ hub clone 1000ch/hugo-boilerplate
```

Install node modules (Bower installation and gulp build will start automatically.).

```bash
$ npm install
```

Build project (`hugo serve --watch`).

```bash
$ npm start
```

Contents will be served on [`localhost:1313`](http://localhost:1313).

## Development

Watch static files (`static/css` / `static/js`).

```bash
$ gulp watch
```

Watch hugo project files.

```bash
$ npm start
```

## To use [Wercker](http://wercker.com/)

See [Automated deployments with Wercker](http://gohugo.io/tutorials/automated-deployments/).
