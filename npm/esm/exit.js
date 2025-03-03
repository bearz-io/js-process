import { DENO, globals, NODE } from "./globals.js";
/**
 * Exits the current process. If the process is running in a browser
 * environment, it will close the current window.
 *
 * @param code The exit code. If not provided, the process will exit with a
 * status code of 0.
 */
export function exit(code) {
    if (DENO) {
        globals.Deno.exit(code);
    }
    if (NODE) {
        globals.process.exit(code);
    }
    // deno-lint-ignore no-explicit-any
    if (globals.window && globals.window.close) {
        // deno-lint-ignore no-explicit-any
        globals.window.close();
    }
}
