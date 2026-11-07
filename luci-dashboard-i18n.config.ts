import { defineConfig } from "@lazulikao/luci-types/i18n";

export default defineConfig({
  packageName: "luci-mod-veil-dashboard",
  input: ["package/luci-mod-veil-dashboard/htdocs/luci-static/resources/view/veil-dashboard"],
  pot: "package/luci-mod-veil-dashboard/po/templates/veil-dashboard.pot",
  extractPot: true,
  translate: {
    enabled: false,
  },
  locales: [
    {
      locale: "zh_Hans",
      po: "package/luci-mod-veil-dashboard/po/zh_Hans/veil-dashboard.po",
    },
  ],
});
