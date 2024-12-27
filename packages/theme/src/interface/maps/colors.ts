export interface ColorNeutralMapToken {
  //
  // Text

  /**
   * @name 一级文本色
   * @desc 默认的文本色
   */
  colorText: string

  /**
   * @name 二级文本色
   * @desc 一般用在不那么需要强化文本颜色的场景，例如 Label 文本、Menu 的文本选中态等场景
   */
  colorTextSecondary: string

  /**
   * @name 三级文本色
   * @desc 一般用于描述性文本，例如表单的中的补充说明文本、列表的描述性文本等场景
   */
  colorTextTertiary: string

  /**
   * @name 四级文本色
   * @desc 表单的输入提示文本、禁用文本等
   */
  colorTextQuaternary: string

  //
  // Border

  /**
   * @name 一级边框色
   * @desc 默认的边框色
   */
  colorBorder: string

  /**
   * @name 二级边框色
   */
  colorBorderSecondary: string

  //
  // Fill

  colorFill: string
  colorFillSecondary: string
  colorFillTertiary: string
  colorFillQuaternary: string

  //
  // Background

  /**
   * @name 布局背景色
   * @desc 页面级别的背景色
   */
  colorBgLayout: string

  /**
   * @name 容器背景色
   * @desc 一般用于默认按钮、输入框等
   */
  colorBgContainer: string

  /**
   * @name 浮层容器背景色
   * @desc 一般用于模态框、弹出框、菜单等
   */
  colorBgElevated: string

  /**
   * @name 引起注意的背景色
   * @desc 引起用户强烈关注注意的背景色
   */
  colorBgSpotlight: string
}

interface ColorPrimaryMapToken {
  /**
   * @name 品牌主色
   */
  colorPrimary: string
  /**
   * @name 主色浅色背景
   */
  colorPrimaryBg: string
  /**
   * @name 主色浅色背景悬浮态
   */
  colorPrimaryBgHover: string
  /**
   * @name 主色描边色
   */
  colorPrimaryBorder: string
  /**
   * @name 主色描边色悬浮态
   */
  colorPrimaryBorderHover: string
  /**
   * @name 主色悬浮态
   */
  colorPrimaryHover: string
  /**
   * @name 主色激活态
   */
  colorPrimaryActive: string
  /**
   * @name 主色文本色
   */
  colorPrimaryText: string
  /**
   * @name 主色文本色悬浮态
   */
  colorPrimaryTextHover: string
  /**
   * @name 主色文本色激活态
   */
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
  /**
   * @name 白色
   * @desc 固定的白色
   */
  colorWhite: string

  /**
   * @name 浮层背景遮罩色
   */
  colorBgMask: string
}
