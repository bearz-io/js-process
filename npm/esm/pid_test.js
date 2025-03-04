import { test } from "@bearz/testing";
import { ok } from "@bearz/assert";
import { pid } from "./pid.js";
import { globals } from "./globals.js";
test("process::pid", () => {
    if (globals.Deno || globals.process) {
        ok(pid > 0);
    } else {
        ok(pid === 0);
    }
});
