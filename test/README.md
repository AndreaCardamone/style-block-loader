# test for style-block-loader

## Excecution

### Requirements
This test requires the following tools

- NodeJS v4.1.1 or higher
- NPM v2.14.4 o higher (not compatible for npm3)

### Installation
Enter into test directory and type this command

``` shell
npm install --save-dev
```

### Execution
Enter into test directory and type this command

``` shell
npm run test
> webpack --config entry.js

Hash: 54f3335a34824a8bb5ee
Version: webpack 1.12.13
Time: 956ms
          Asset       Size  Chunks             Chunk Names
  main.build.js    2.15 kB       0  [emitted]  main
main.styles.css   50 bytes       0  [emitted]  main
main.sheets.css   42 bytes       0  [emitted]  main
  main.less.css  313 bytes       0  [emitted]  main
   [0] multi main 88 bytes {0} [built]
   [1] ./index.js 0 bytes {0} [built]
    + 10 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
Child extract-text-webpack-plugin:
        + 2 hidden modules
```

## Result
The results of execution are the following files

+ dist/main.less.css
+ dist/main.sheets.css
+ dist/main.styles.css
