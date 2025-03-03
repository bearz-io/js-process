import { dirname, fromFileUrl } from "jsr:@std/path@1";

const __dirname = dirname(fromFileUrl(import.meta.url));
const pwd = dirname(__dirname);

export async function deleteShim(path: string) {
    await Deno.remove(path);
}

export async function replaceGlobalsFile(path: string) {
    const content = `export const globals = globalThis;
export const NODELIKE = globals.Deno !== undefined || globals.process !== undefined;

export const DENO = globals.Deno !== undefined && globals.Deno.cwd !== undefined;
export const BUN = globals.Bun !== undefined;
export const NODE = globals.process !== undefined && globals.process.cwd !== undefined;
`;

    await Deno.writeTextFile(path, content);
}

export async function replaceGlobalsTypeFile(path: string) {
    const content = `export declare const globals: typeof globalThis & Record<string, any>;
export declare const NODELIKE: boolean;
export declare const DENO: boolean;
export declare const BUN: boolean;
export declare const NODE: boolean;
`;

    await Deno.writeTextFile(path, content);
}

await replaceGlobalsTypeFile(`${pwd}/npm/types/globals.d.ts`);
await replaceGlobalsFile(`${pwd}/npm/esm/globals.js`);
await deleteShim(`${pwd}/npm/esm/_dnt.shims.js`);
await deleteShim(`${pwd}/npm/types/_dnt.shims.d.ts`);
