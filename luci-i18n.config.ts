import { defineConfig } from "@lazulikao/luci-types/i18n";

export default defineConfig({
  packageName: "luci-theme-veil",
  input: ["package/luci-theme-veil/htdocs/luci-static/resources", "src/script/.cache/extra-strings.js"],
  pot: "package/luci-theme-veil/po/templates/veil.pot",
  extractPot: true,

  translate: {
    enabled: true,
    translator: "openai",
    batchSize: 10,
    prompt: "src/script/translate.${locale}.md",
  },
  headers: {
    languageTeam: "LuCI Theme Fluent",
    lastTranslator: "TranslateGemma",
  },
  locales: [
    {
      locale: "zh_Hans",
      headers: { lastTranslator: "LazuliKao" },
      po: "package/luci-theme-veil/po/zh_Hans/veil.po",
    },
    {
      locale: "zh_Hant",
      po: "package/luci-theme-veil/po/zh_Hant/veil.po",
    },
    {
      locale: "es",
      headers: { lastTranslator: "castillofrancodamian" },
      po: "package/luci-theme-veil/po/es/veil.po",
    },
    {
      locale: "fa",
      po: "package/luci-theme-veil/po/fa/veil.po",
    },
    {
      locale: "ru",
      po: "package/luci-theme-veil/po/ru/veil.po",
    },
    {
      locale: "de",
      po: "package/luci-theme-veil/po/de/veil.po",
    },
    {
      locale: "fr",
      po: "package/luci-theme-veil/po/fr/veil.po",
    },
    {
      locale: "ja",
      po: "package/luci-theme-veil/po/ja/veil.po",
    },
    {
      locale: "ko",
      po: "package/luci-theme-veil/po/ko/veil.po",
    },
    {
      locale: "tr",
      po: "package/luci-theme-veil/po/tr/veil.po",
    },
    {
      locale: "uk",
      po: "package/luci-theme-veil/po/uk/veil.po",
    },
    {
      locale: "vi",
      po: "package/luci-theme-veil/po/vi/veil.po",
    },
    {
      locale: "it",
      po: "package/luci-theme-veil/po/it/veil.po",
    },
    {
      locale: "pl",
      po: "package/luci-theme-veil/po/pl/veil.po",
    },
  ],
});
