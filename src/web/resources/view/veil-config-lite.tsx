const form = L.form;
const uci = L.uci;

import { registerAdvancedTab } from "./veil-config/tabs/advanced";
import { registerColorsTab } from "./veil-config/tabs/colors";
import { registerGeneralTab } from "./veil-config/tabs/general";
import { registerLoginTab } from "./veil-config/tabs/login";

class mainImpl extends L.view {
  load() {
    return uci.load("veil");
  }

  render() {
    const map = new form.Map("veil", _("Fluent theme settings"), _("Configure color mode, accent colors, layout sizing, login-page appearance, and advanced CSS overrides for luci-theme-veil-lite."));
    const section = map.section(form.TypedSection, "global", _("Theme settings"));
    section.addremove = false;
    section.anonymous = true;

    registerGeneralTab(section, false);
    registerColorsTab(section);
    registerLoginTab(section);
    registerAdvancedTab(section);
    return map.render();
  }
}

export const main = mainImpl;
