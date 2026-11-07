import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { FLUENT_DEFAULTS } from "../web/resources/veil-defaults";

export const generateThemeDefaults = (): void => {
  const here = dirname(fileURLToPath(import.meta.url));
  const templateOutputPath = join(here, "../../package/luci-theme-veil/ucode/template/themes/veil/defaults.ut");
  const templateAssignments = Object.entries(FLUENT_DEFAULTS)
    .map(([key, value]) => `  defaults.${key} = ${JSON.stringify(value)};`)
    .join("\n");

  writeFileSync(templateOutputPath, `{%\n${templateAssignments}\n%}\n`, "utf8");
};
