import { DENO, globals, NODE } from "./globals.ts";

let id: number = 0;

if (DENO) {
    id = globals.Deno.pid;
} else if (NODE) {
    id = globals.process.pid;
}

/**
 * The current process ID. The process ID is a unique identifier for the
 * current process. In a browser environment, the process ID is always 0.
 */
export const pid: number = id;
