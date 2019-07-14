import styled from 'styled-components'
import { theme } from '../styles/theme'
import * as CSS from 'csstype'
import { SpacingSizes } from '../types/style'

// simple layout flex components
// meant to be stacked on top of each other FlexParent => FlexChild => content/FlexParent => FlexChild => content/FlexParent...
// => IE reasons and layout consistency reasons

export interface ILayoutFlexParentProps {
	alignItems?: CSS.AlignItemsProperty
	// tslint:disable-next-line:max-union-size
	justifyContent?: CSS.JustifyContentProperty
	flexWrap?: boolean
	flexDirection?: CSS.FlexDirectionProperty
	fullWidth?: boolean
	fillHeight?: boolean
	isInline?: boolean
	spacing?: SpacingSizes
	withBottomSpacing?: boolean
}

export interface ILayoutFlexChildProps {
	flexGrow?: number
	flexShrink?: number
	width?: string
	spacing?: SpacingSizes
	withBottomSpacing?: boolean
	noFontSize?: boolean
}

export const FlexParent = styled.div<ILayoutFlexParentProps>`
    display: ${({ isInline }) => (isInline ? 'inline-flex' : 'flex')};
    ${({ fullWidth }) => (fullWidth ? `width: 100%;` : '')}
    ${({ fillHeight }) => (fillHeight ? `height: 100%;` : '')}
    ${({ flexDirection }) =>
		flexDirection ? `flex-direction: ${flexDirection};` : ''}
    ${({ alignItems }) => (alignItems ? `align-items: ${alignItems};` : '')}
    ${({ justifyContent }) =>
		justifyContent ? `justify-content: ${justifyContent};` : ''}
    ${({ flexWrap }) => (flexWrap ? 'flex-wrap: wrap;' : '')}
    ${({ withBottomSpacing, spacing = 'default' }) =>
		withBottomSpacing && `margin-bottom: ${theme.spacing[spacing]}`}
`

// we set the width of element by flex-basis & max-width + inline-block (IE fix)
export const FlexChild = styled.div<ILayoutFlexChildProps>`
	display: inline-block;
	flex-grow: ${({ flexGrow }) => flexGrow || 0};
	flex-shrink: ${({ flexShrink }) => flexShrink || 0};
	flex-basis: ${({ width }) => width || 'auto'};
	max-width: ${({ width }) => (width ? width : '100%')};
	${({ withBottomSpacing, spacing = 'default' }) =>
		withBottomSpacing && `margin-bottom: ${theme.spacing[spacing]};`}
	${({ noFontSize }) => noFontSize && 'font-size: 0;'}
`
