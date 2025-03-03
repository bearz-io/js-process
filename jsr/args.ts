import { DENO, globals, NODE } from "./globals.ts";

let a: Array<string> = [];

if (DENO) {
    a = globals.Deno.args;
} else if (NODE) {
    a = globals.process.argv.slice(2);
}

/**
 * The current process arguments. The arguments do not include the
 * executable path or the script path.
 */
export const args: ReadonlyArray<string> = a;
