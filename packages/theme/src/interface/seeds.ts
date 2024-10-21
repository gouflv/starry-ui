import type { PresetColorType } from './presetColors'

export interface SeedToken extends PresetColorType {
  // Colors
  //

  /** 品牌主色 */
  colorPrimary: string

  colorSuccess: string
  colorWarning: string
  colorError: string
  colorInfo: string

  /** 基础文本 */
  colorTextBase: string
  /** 基础背景 */
  colorBgBase: string

  // Typography
  //

  fontFamily: string
  fontSize: number

  // Line
  //

  lineWidth: number
  lineType: string

  // Borders
  //

  borderRadius: number

  // Sizes
  //

  /** 尺寸变化 @default 4 */
  sizeUnit: number
  /** 步长 @default 4 */
  sizeStep: number
  sizePopupArrow: number
  /** 输入控件高度 @default 32 */
  controlHeight: number

  // Z-index
  //

  zIndexBase: number
  zIndexPopupBase: number

  // Motion tokens
  //

  motionUnit: number
  motionBase: number
}
