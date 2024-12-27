import type { PresetColorType } from './presetColors'

export interface SeedToken extends PresetColorType {
  // Colors
  //

  /**
   * @name 品牌色
   * @desc 品牌色是体现产品特性和传播理念最直观的视觉元素之一。
   */
  colorPrimary: string

  /**
   * @name 成功色
   */
  colorSuccess: string

  /**
   * @name 警戒色
   */
  colorWarning: string

  /**
   * @name 错误色
   */
  colorError: string

  /**
   * @name 信息色
   */
  colorInfo: string

  /**
   * @name 基础文本
   * @desc 用于派生文本色梯度的基础变量
   */
  colorTextBase: string

  /**
   * @name 基础背景
   * @desc 用于派生背景色梯度的基础变量
   */
  colorBgBase: string

  // Typography
  //

  /**
   * @name 字体
   */
  fontFamily: string

  /**
   * @name 默认字号
   */
  fontSize: number

  // Line
  //

  /**
   * @name 线宽
   * @desc 用于派生边框、分割线等的宽度
   */
  lineWidth: number

  /**
   * @name 线类型
   * @desc 用于派生边框、分割线等的类型，默认实线
   */
  lineType: string

  // Borders
  //

  /**
   * @name 基础圆角
   */
  borderRadius: number

  // Sizes
  //

  /**
   * @name 尺寸变化单位
   * @default 4
   */
  sizeUnit: number

  /**
   * @name 步长
   * @desc 尺寸梯度计算方式：`sizeUnit * (sizeStep * N)`
   * @default 4
   */
  sizeStep: number

  /**
   * @name 箭头尺寸
   */
  sizePopupArrow: number

  /**
   * @name 输入控件高度
   * @desc 按钮和输入框等基础控件的高度
   * @default 32
   */
  controlHeight: number

  // Z-index
  //

  /**
   * @name 基础 zIndex
   * @default 0
   */
  zIndexBase: number

  /**
   * @name 浮层基础 zIndex
   * @default 1000
   */
  zIndexPopupBase: number

  // Motion
  //

  motionUnit: number
  motionBase: number
}
