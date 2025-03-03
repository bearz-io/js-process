import { DENO, globals, NODE } from "./globals.ts";

/**
 * Gets the current working directory of the process.
 * In the browser environment, this function returns the
 * current URL or the last URL in the history if its
 * stored in the state.
 *
 * @returns The current working directory.
 * @throws Error if cwd is not implemented or if the runtime does not support
 * getting the current working directory.
 */
export function cwd(): string {
    if (DENO) {
        return globals.Deno.cwd();
    }
    if (NODE) {
        return globals.process.cwd();
    }
    if (globals.navigator) {
        // deno-lint-ignore no-explicit-any
        const window = globals.window as Record<string, any>;
        if (window.history && window.history.state && window.history.state.url) {
            return window.history.state.url as string;
        }
        return window.location.pathname as string;
    }
    throw new Error("cwd is not implemented");
}
