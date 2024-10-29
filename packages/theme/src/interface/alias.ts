import type { MapToken } from './maps'

export interface AliasToken extends MapToken {
  // Background
  colorFillContentHover: string
  colorFillAlter: string
  colorFillContent: string

  colorBgContainerDisabled: string
  colorBgTextHover: string
  colorBgTextActive: string

  // Border
  colorBorderBg: string
  colorSplit: string

  // Text
  colorTextPlaceholder: string
  colorTextDisabled: string
  colorTextHeading: string
  colorTextLabel: string
  colorTextDescription: string
  colorTextLightSolid: string

  colorIcon: string
  colorIconHover: string

  colorLink: string
  colorLinkHover: string
  colorLinkActive: string

  colorHighlight: string

  controlOutline: string
  colorWarningOutline: string
  colorErrorOutline: string

  // Font
  fontSizeIcon: number
  fontWeightStrong: number

  // Control
  controlOutlineWidth: number
  controlItemBgHover: string
  controlItemBgActive: string
  controlItemBgActiveHover: string
  controlInteractiveSize: number
  controlItemBgActiveDisabled: string

  // Padding
  paddingXXS: number
  paddingXS: number
  paddingSM: number
  padding: number
  paddingMD: number
  paddingLG: number
  paddingXL: number

  // Padding Content
  paddingContentHorizontalLG: number
  paddingContentHorizontal: number
  paddingContentHorizontalSM: number
  paddingContentVerticalLG: number
  paddingContentVertical: number
  paddingContentVerticalSM: number

  // Margin
  marginXXS: number
  marginXS: number
  marginSM: number
  margin: number
  marginMD: number
  marginLG: number
  marginXL: number
  marginXXL: number

  boxShadow: string
  boxShadowSecondary: string
  boxShadowTertiary: string

  linkDecoration: string
  linkHoverDecoration: string
  linkFocusDecoration: string

  controlPaddingHorizontal: number
  controlPaddingHorizontalSM: number

  // Media queries breakpoints
  screenXS: number
  screenXSMin: number
  screenXSMax: number
  screenSM: number
  screenSMMin: number
  screenSMMax: number
  screenMD: number
  screenMDMin: number
  screenMDMax: number
  screenLG: number
  screenLGMin: number
  screenLGMax: number
  screenXL: number
  screenXLMin: number
  screenXLMax: number
  screenXXL: number
  screenXXLMin: number
  screenXXLMax: number
  screenXXXL: number
  screenXXXLMin: number

  /** Used for DefaultButton, Switch which has default outline */
  controlTmpOutline: string

  // FIXME: component box-shadow, should be removed
  /** @internal */
  boxShadowPopoverArrow: string
  /** @internal */
  boxShadowCard: string
  /** @internal */
  boxShadowDrawerRight: string
  /** @internal */
  boxShadowDrawerLeft: string
  /** @internal */
  boxShadowDrawerUp: string
  /** @internal */
  boxShadowDrawerDown: string
  /** @internal */
  boxShadowTabsOverflowLeft: string
  /** @internal */
  boxShadowTabsOverflowRight: string
  /** @internal */
  boxShadowTabsOverflowTop: string
  /** @internal */
  boxShadowTabsOverflowBottom: string
}
