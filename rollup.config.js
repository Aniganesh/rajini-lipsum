import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import path from "path";
import fs from "fs";

const production = !process.env.ROLLUP_WATCH;

export default fs
  .readdirSync(path.join(__dirname, "webviews", "src", "Screens"))
  .map((fileName) => {
    const name = fileName.split(".")[0];
    console.log({ fileName });
    return {
      input: "webviews/src/Screens/" + fileName,
      output: {
        sourcemap: true,
        format: "iife",
        name: "app",
        file: "compiled/" + name + ".js",
      },
      plugins: [
        resolve({
          browser: true,
          moduleDirectories: ["node_modules"],
        }),
        babel({
          babelHelpers: "bundled",
          presets: ["@babel/preset-react"],
          extensions: [".ts", ".tsx", ".js", ".jsx"],
        }),
        replace({
          preventAssignment: false,
          "process.env.NODE_ENV": '"development"',
        }),
        typescript({
          tsconfig: "webviews/tsconfig.json",
          sourceMap: !production,
          inlineSources: !production,
        }),
        commonjs(),

        // If we're building for production (npm run build
        // instead of npm run dev), minify
        production && terser(),
      ],
      watch: {
        clearScreen: false,
      },
    };
  });
