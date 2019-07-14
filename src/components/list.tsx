import styled from 'styled-components'
import { margin, padding } from 'polished'
import { theme } from '../styles/theme'

export interface ListItemProps {
	withBorder?: boolean
}

export const List = styled('ul')({
	...padding(0),
	...margin(0, 0, theme.spacing.small),
	listStyle: 'none'
})

export const ListItem = styled('li')<ListItemProps>`
	padding: 0;
	${({ withBorder }) =>
		withBorder ? `border-bottom: 1px solid ${theme.colors.border};` : ''}
	&:last-of-type {
		border-bottom: 0;
	}
`
