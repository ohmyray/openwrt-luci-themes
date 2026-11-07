include $(TOPDIR)/rules.mk

PKG_NAME:=luci-theme-veil
PKG_VERSION:=1.0.9
PKG_RELEASE:=1
PKG_LICENSE:=Apache-2.0

LUCI_TITLE:=Veil Theme for LuCI
LUCI_DEPENDS:=+luci-base
LUCI_MINIFY_CSS:=0
define Package/$(PKG_NAME)/conffiles
/etc/config/veil
endef


define Package/$(PKG_NAME)/preinst
#!/bin/sh
[ -n "$${IPKG_INSTROOT}" ] || {
	if command -v apk >/dev/null 2>&1 && apk info -e luci-theme-veil-lite >/dev/null 2>&1; then
		echo "luci-theme-veil-lite is installed; remove it before installing luci-theme-veil" >&2
		exit 1
	fi
	if command -v opkg >/dev/null 2>&1 && opkg list-installed luci-theme-veil-lite 2>/dev/null | grep -q '^luci-theme-veil-lite '; then
		echo "luci-theme-veil-lite is installed; remove it before installing luci-theme-veil" >&2
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
