# @x12i/execution-memory-manager usage example

Memory management utilities for execution history objects.

This consuming application demonstrates **store execution memories and retrieve one role** using the published npm package, pinned to `1.2.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Store execution memories and retrieve the entries for a chosen role.
- Export a selected execution history as Markdown for inspection.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/execution-memory-manager)
- [Implementation monorepo](https://github.com/x12i/execution-memory-manager)
- [Reviewed package source](https://github.com/x12i/execution-memory-manager/tree/8a336ede4c778ff1d292b23c609a42c7ad3c05d4/.)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
