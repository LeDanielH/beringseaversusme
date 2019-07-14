import styled from 'styled-components'
import { padding } from 'polished'
import { SpacingSizes } from '../types/style'
import { theme } from '../styles/theme'
import { mediaMax } from '../utilities/styles'

export interface ISpacerProps {
	top?: boolean
	right?: boolean
	bottom?: boolean
	left?: boolean
	all?: boolean
	vertical?: boolean
	horizontal?: boolean
	removeHorizontalMd?: boolean
	spacing?: SpacingSizes
}

// todo add breakpoint for removing horizontal spacing
export const Spacer = styled('div')<ISpacerProps>`
    ${({ top, spacing }) => top && `padding-top: ${theme.spacing[spacing]};`}
    ${({ right, spacing }) =>
		right && `padding-right: ${theme.spacing[spacing]};`}
    ${({ bottom, spacing }) =>
		bottom && `padding-bottom: ${theme.spacing[spacing]};`}
    ${({ left, spacing }) => left && `padding-left: ${theme.spacing[spacing]};`}
    ${({ all, spacing }) => all && `padding: ${theme.spacing[spacing]};`}
    ${({ vertical, spacing }) =>
		vertical && padding(theme.spacing[spacing], null)}
    ${({ horizontal, spacing }) =>
		horizontal && padding(null, theme.spacing[spacing])}
    ${mediaMax(theme.breakPoints.md)} {
        ${({ removeHorizontalMd }) => removeHorizontalMd && padding(null, 0)}
    }
`

Spacer.defaultProps = {
	spacing: 'default',
	removeHorizontalMd: false
}
