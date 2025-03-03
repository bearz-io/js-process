import { test } from "@bearz/testing";
import { equal } from "@bearz/assert";
import { join, resolve } from "@bearz/path";
import { chdir } from "./chdir.js";
import { cwd } from "./cwd.js";
test("process::chdir and cwd", () => {
    const pwd = cwd();
    const dir = resolve(join(pwd, ".."));
    equal(pwd, cwd());
    equal(chdir(dir), undefined);
    equal(cwd(), dir);
    chdir(pwd);
});
