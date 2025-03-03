import { test } from "@bearz/testing";
import { ok } from "@bearz/assert";
import { pid } from "./pid.ts";
import { globals } from "./globals.ts";

test("process::pid", () => {
    if (globals.Deno || globals.process) {
        ok(pid > 0);
    } else {
        ok(pid === 0);
    }
});
