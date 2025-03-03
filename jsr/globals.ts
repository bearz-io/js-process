// deno-lint-ignore no-explicit-any
export const globals: typeof globalThis & Record<string | symbol, any> = globalThis;

export const NODELIKE: boolean = globals.Deno !== undefined || globals.process !== undefined;

// deno-lint-ignore no-explicit-any
export const DENO: boolean = globals.Deno !== undefined && (globals.Deno as any).cwd !== undefined;
export const BUN: boolean = globals.Bun !== undefined;
export const NODE: boolean = globals.process !== undefined && globals.process.cwd !== undefined;
