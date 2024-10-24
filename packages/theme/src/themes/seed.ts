import { PresetColorType, SeedToken } from '../interface'

export const defaultPresetColors: PresetColorType = {
  blue: '#3A8BFF',
  purple: '#722ED1',
  cyan: '#13C2C2',
  green: '#52C41A',
  magenta: '#EB2F96',
  pink: '#eb2f96',
  red: '#F5222D',
  orange: '#FA8C16',
  yellow: '#FADB14',
  volcano: '#FA541C',
  geekblue: '#2F54EB',
  gold: '#FAAD14',
  lime: '#A0D911'
}

const seedToken: SeedToken = {
  ...defaultPresetColors,

  // Color
  colorPrimary: '#3a8bff',
  colorSuccess: '#52c41a',
  colorWarning: '#faad14',
  colorError: '#ff4d4f',
  colorInfo: '#3a8bff',
  colorTextBase: '',

  colorBgBase: '',

  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontSize: 14,

  // Line
  lineWidth: 1,
  lineType: 'solid',

  // Radius
  borderRadius: 6,

  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,

  // Control Base
  controlHeight: 32,

  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1000,

  // Motion
  motionUnit: 0.1,
  motionBase: 0
}

export default seedToken
