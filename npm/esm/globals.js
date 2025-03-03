export const globals = globalThis;
export const NODELIKE = globals.Deno !== undefined || globals.process !== undefined;

export const DENO = globals.Deno !== undefined && globals.Deno.cwd !== undefined;
export const BUN = globals.Bun !== undefined;
export const NODE = globals.process !== undefined && globals.process.cwd !== undefined;
