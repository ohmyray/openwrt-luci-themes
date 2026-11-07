include $(TOPDIR)/rules.mk

LUCI_TITLE:=Veil Theme for LuCI (lite)
LUCI_DEPENDS:=+luci-base
LUCI_MINIFY_CSS:=0

PKG_NAME:=luci-theme-veil-lite
PKG_VERSION:=1.0.9
PKG_RELEASE:=1
PKG_LICENSE:=Apache-2.0

VEIL_LITE_SOURCE_DIR:=$(CURDIR)
VEIL_FULL_SOURCE_DIR:=$(abspath $(CURDIR)/../luci-theme-veil)

define LUCI_DESCRIPTION
Core Veil theme styling for LuCI without optional menu, updater, log, and application enhancements.
endef

define Build/Prepare/$(PKG_NAME)
	$(CP) $(VEIL_FULL_SOURCE_DIR)/htdocs/* $(PKG_BUILD_DIR)/htdocs/
	$(CP) $(VEIL_FULL_SOURCE_DIR)/root/* $(PKG_BUILD_DIR)/root/
	$(CP) $(VEIL_LITE_SOURCE_DIR)/htdocs/* $(PKG_BUILD_DIR)/htdocs/
	$(CP) $(VEIL_LITE_SOURCE_DIR)/root/* $(PKG_BUILD_DIR)/root/
endef

define Package/$(PKG_NAME)/conffiles
/etc/config/veil
endef

define Package/$(PKG_NAME)/preinst
#!/bin/sh
[ -n "$${IPKG_INSTROOT}" ] || {
	if command -v apk >/dev/null 2>&1 && apk info -e luci-theme-veil >/dev/null 2>&1; then
		echo "luci-theme-veil is installed; remove it before installing luci-theme-veil-lite" >&2
		exit 1
	fi
	if command -v opkg >/dev/null 2>&1 && opkg list-installed luci-theme-veil 2>/dev/null | grep -q '^luci-theme-veil '; then
		echo "luci-theme-veil is installed; remove it before installing luci-theme-veil-lite" >&2
		exit 1
	fi
}
endef

define Package/$(PKG_NAME)/postinst
#!/bin/sh
[ -n "$${IPKG_INSTROOT}" ] || {
	uci batch <<-EOF
		set luci.themes.Veil=/luci-static/veil
		commit luci
	EOF
	/etc/init.d/rpcd restart
}
endef

# call BuildPackage - OpenWrt buildroot signature
include $(TOPDIR)/feeds/luci/luci.mk
