# Yargs Demo

This is a simple demo to show how yargs parses command line arguments to
generate

1. Positional arguments in the `_` array
2. Options as key value pairs (from arguments such as `--generator app`)

In addition, I show a practical use case of parsing command line arguments to
execute a plugin which should only receive the options form the command line.

Running the app using `npm start` results in the following output:

```
$ npm start

> yargs-demo@1.0.0 start
> ts-node index.ts react --generator app --appName movie-magic --ssr --port 3000 --workspaces apps --workspaces packages --plugins.dir plugins --plugins.scan

----- argv -----
{
  "_": [
    "react"
  ],
  "generator": "app",
  "appName": "movie-magic",
  "ssr": true,
  "port": 3000,
  "workspaces": [
    "apps",
    "packages"
  ],
  "plugins": {
    "dir": "plugins",
    "scan": true
  },
  "$0": "index.ts"
}

----- argv destructured -----
command: index.ts
plugin: react
options:
{
  "generator": "app",
  "appName": "movie-magic",
  "ssr": true,
  "port": 3000,
  "workspaces": [
    "apps",
    "packages"
  ],
  "plugins": {
    "dir": "plugins",
    "scan": true
  }
}

----- execute plugin -----
ReactPlugin
options:
{
  "generator": "app",
  "appName": "movie-magic",
  "ssr": true,
  "port": 3000,
  "workspaces": [
    "apps",
    "packages"
  ],
  "plugins": {
    "dir": "plugins",
    "scan": true
  }
}
```
