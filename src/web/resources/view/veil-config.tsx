const form = L.form;
const uci = L.uci;

import { registerAboutTab } from "./veil-config/tabs/about";
import { registerAdvancedTab } from "./veil-config/tabs/advanced";
import { registerAnimationTab } from "./veil-config/tabs/animation";
import { registerColorsTab } from "./veil-config/tabs/colors";
import { registerGeneralTab } from "./veil-config/tabs/general";
import { registerLoginTab } from "./veil-config/tabs/login";
import { registerMenuTab } from "./veil-config/tabs/menu";

class mainImpl extends L.view {
  load() {
    return Promise.all([uci.load("veil"), L.ui.menu.load()]);
  }

  render(data: [unknown, LuCI.ui.menu.MenuNode]) {
    const [, menuTree] = data;

    const map = new form.Map(
      "veil",
      _("Fluent theme settings"),
      _("Configure color mode, accent colors, layout sizing, animation behavior, login-page appearance, and advanced CSS overrides for luci-theme-veil."),
    );

    const section = map.section(form.TypedSection, "global", _("Theme settings"));
    section.addremove = false;
    section.anonymous = true;

    registerGeneralTab(section);
    registerMenuTab(section, menuTree);
    registerColorsTab(section);
    registerAnimationTab(section);
    registerLoginTab(section);
    registerAdvancedTab(section);
    registerAboutTab(section);

    return map.render();
  }
}

export const main = mainImpl;
