export interface ColorNeutralMapToken {
  //
  // Text

  colorText: string
  colorTextSecondary: string
  colorTextTertiary: string
  colorTextQuaternary: string

  //
  // Border

  colorBorder: string
  colorBorderSecondary: string

  //
  // Fill

  colorFill: string
  colorFillSecondary: string
  colorFillTertiary: string
  colorFillQuaternary: string

  //
  // Background

  colorBgLayout: string
  colorBgContainer: string
  colorBgElevated: string
  colorBgSpotlight: string
}

interface ColorPrimaryMapToken {
  colorPrimary: string
  colorPrimaryBg: string
  colorPrimaryBgHover: string
  colorPrimaryBorder: string
  colorPrimaryBorderHover: string
  colorPrimaryHover: string
  colorPrimaryActive: string
  colorPrimaryText: string
  colorPrimaryTextHover: string
  colorPrimaryTextActive: string
}
interface ColorSuccessMapToken {
  colorSuccess: string
  colorSuccessBg: string
  colorSuccessBgHover: string
  colorSuccessBorder: string
  colorSuccessBorderHover: string
  colorSuccessHover: string
  colorSuccessActive: string
  colorSuccessText: string
  colorSuccessTextHover: string
  colorSuccessTextActive: string
}
interface ColorWarningMapToken {
  colorWarning: string
  colorWarningBg: string
  colorWarningBgHover: string
  colorWarningBorder: string
  colorWarningBorderHover: string
  colorWarningHover: string
  colorWarningActive: string
  colorWarningText: string
  colorWarningTextHover: string
  colorWarningTextActive: string
}
interface ColorInfoMapToken {
  colorInfo: string
  colorInfoBg: string
  colorInfoBgHover: string
  colorInfoBorder: string
  colorInfoBorderHover: string
  colorInfoHover: string
  colorInfoActive: string
  colorInfoText: string
  colorInfoTextHover: string
  colorInfoTextActive: string
}
interface ColorErrorMapToken {
  colorError: string
  colorErrorBg: string
  colorErrorBgHover: string
  colorErrorBorder: string
  colorErrorBorderHover: string
  colorErrorHover: string
  colorErrorActive: string
  colorErrorText: string
  colorErrorTextHover: string
  colorErrorTextActive: string
}

export interface ColorMapToken
  extends ColorNeutralMapToken,
    ColorPrimaryMapToken,
    ColorSuccessMapToken,
    ColorWarningMapToken,
    ColorInfoMapToken,
    ColorErrorMapToken {
  colorWhite: string
  colorBgMask: string
}
