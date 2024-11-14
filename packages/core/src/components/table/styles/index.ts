import { type AliasToken, TinyColor } from '@starry-ui/theme'

export interface TableToken extends AliasToken {
  componentCls: string
  tableFontSize: number
  tableBg: string
  tableRadius: number
  tablePaddingHorizontal: number
  tablePaddingVertical: number
  tablePaddingHorizontalMiddle: number
  tablePaddingVerticalMiddle: number
  tablePaddingHorizontalSmall: number
  tablePaddingVerticalSmall: number
  tableBorderColor: string
  tableHeaderTextColor: string
  tableHeaderBg: string
  tableFooterTextColor: string
  tableFooterBg: string
  tableHeaderCellSplitColor: string
  tableHeaderSortBg: string
  tableHeaderSortHoverBg: string
  tableHeaderIconColor: string
  tableHeaderIconColorHover: string
  tableBodySortBg: string
  tableFixedHeaderSortActiveBg: string
  tableHeaderFilterActiveBg: string
  tableFilterDropdownBg: string
  tableFilterDropdownHeight: number
  tableRowHoverBg: string
  tableSelectedRowBg: string
  tableSelectedRowHoverBg: string

  tableFontSizeMiddle: number
  tableFontSizeSmall: number
  tableSelectionColumnWidth: number
  tableExpandIconBg: string
  tableExpandColumnWidth: number
  tableExpandedRowBg: string
  tableFilterDropdownWidth: number
  tableFilterDropdownSearchWidth: number

  // Z-Index
  zIndexTableFixed: number
  zIndexTableSticky: number

  // Virtual Scroll Bar
  tableScrollThumbSize: number
  tableScrollThumbBg: string
  tableScrollThumbBgHover: string
  tableScrollBg: string
}

export function tableTokenFactory(
  token: AliasToken,
  componentCls: string
): TableToken {
  const {
    controlItemBgActive,
    controlItemBgActiveHover,
    colorTextPlaceholder,
    colorTextHeading,
    colorSplit,
    colorBorderSecondary,
    fontSize,
    padding,
    paddingXS,
    paddingSM,
    controlHeight,
    colorFillAlter,
    colorIcon,
    colorIconHover,
    opacityLoading,
    colorBgContainer,
    borderRadiusLG,
    colorFillContent,
    colorFillSecondary,
    controlInteractiveSize: checkboxSize
  } = token

  const baseColorAction = new TinyColor(colorIcon)
  const baseColorActionHover = new TinyColor(colorIconHover)

  const tableSelectedRowBg = controlItemBgActive
  const zIndexTableFixed: number = 2

  const colorFillSecondarySolid = new TinyColor(colorFillSecondary)
    .onBackground(colorBgContainer)
    .toHexString()
  const colorFillContentSolid = new TinyColor(colorFillContent)
    .onBackground(colorBgContainer)
    .toHexString()

  const colorFillAlterSolid = new TinyColor(colorFillAlter)
    .onBackground(colorBgContainer)
    .toHexString()

  return Object.assign(token, {
    componentCls,
    tableFontSize: fontSize,
    tableBg: colorBgContainer,
    tableRadius: borderRadiusLG,

    tablePaddingVertical: padding,
    tablePaddingHorizontal: padding,
    tablePaddingVerticalMiddle: paddingSM,
    tablePaddingHorizontalMiddle: paddingXS,
    tablePaddingVerticalSmall: paddingXS,
    tablePaddingHorizontalSmall: paddingXS,
    tableBorderColor: colorBorderSecondary,
    tableHeaderTextColor: colorTextHeading,
    tableHeaderBg: colorFillAlterSolid,
    tableFooterTextColor: colorTextHeading,
    tableFooterBg: colorFillAlterSolid,
    tableHeaderCellSplitColor: colorBorderSecondary,
    tableHeaderSortBg: colorFillSecondarySolid,
    tableHeaderSortHoverBg: colorFillContentSolid,
    tableHeaderIconColor: baseColorAction
      .clone()
      .setAlpha(baseColorAction.getAlpha() * opacityLoading)
      .toRgbString(),
    tableHeaderIconColorHover: baseColorActionHover
      .clone()
      .setAlpha(baseColorActionHover.getAlpha() * opacityLoading)
      .toRgbString(),
    tableBodySortBg: colorFillAlterSolid,
    tableFixedHeaderSortActiveBg: colorFillSecondarySolid,
    tableHeaderFilterActiveBg: colorFillContent,
    tableFilterDropdownBg: colorBgContainer,
    tableRowHoverBg: colorFillAlterSolid,
    tableSelectedRowBg,
    tableSelectedRowHoverBg: controlItemBgActiveHover,
    zIndexTableFixed,
    zIndexTableSticky: zIndexTableFixed + 1,
    tableFontSizeMiddle: fontSize,
    tableFontSizeSmall: fontSize,
    tableSelectionColumnWidth: controlHeight,
    tableExpandIconBg: colorBgContainer,
    tableExpandColumnWidth: checkboxSize + 2 * token.padding,
    tableExpandedRowBg: colorFillAlter,

    // Dropdown
    tableFilterDropdownWidth: 120,
    tableFilterDropdownHeight: 264,
    tableFilterDropdownSearchWidth: 140,

    // Virtual Scroll Bar
    tableScrollThumbSize: 8, // Mac scroll bar size
    tableScrollThumbBg: colorTextPlaceholder,
    tableScrollThumbBgHover: colorTextHeading,
    tableScrollBg: colorSplit
  })
}
