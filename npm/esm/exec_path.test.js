import { test } from "@bearz/testing";
import { exists, ok } from "@bearz/assert";
import { NODELIKE } from "./globals.js";
import { execPath } from "./exec_path.js";
test("process::execPath", () => {
    const p = execPath();
    exists(p);
    console.log(p);
    if (NODELIKE) {
        ok(p.length > 0);
    } else {
        ok(p.length === 0);
    }
});
