import React from 'react'
import styled from 'styled-components'
import { FlexParent } from '../../layout-flex'
import { darken, padding, position, rgba } from 'polished'
import { IMenuPanelHeaderProps } from './menu-panel.types'
import { withTransition, withUnit } from '../../../utilities/styles'
import { theme } from '../../../styles/theme'

const PANEL_HEADER_HEIGHT = 80

type MenuPanelStylesType = Pick<IMenuPanelHeaderProps, 'isOpen' | 'isDisabled'>

export const MenuPanelHeaderStyled = styled(({ ...rest }) => (
	<FlexParent
		{...rest}
		alignItems="center"
		justifyContent="space-between"
		fullWidth
	/>
))({
	height: withUnit(PANEL_HEADER_HEIGHT, 'px'),
	cursor: 'pointer',
	position: 'relative',
	zIndex: 1,
	color: theme.colors.white,
	...padding('1rem', '1.5rem')
})

export const MenuPanelHeaderBackground = styled('div')<MenuPanelStylesType>(
	({ isOpen, isDisabled }: MenuPanelStylesType) => ({
		...position('relative'),
		background: theme.colors.blue,
		height: withUnit(PANEL_HEADER_HEIGHT, 'px'),
		cursor: !isDisabled ? 'pointer' : 'not-allowed',
		'&:after': {
			content: '""', // empty string won't render this crucial css property - this will
			backgroundColor: isOpen
				? rgba(0, 0, 0, 0)
				: theme.colors.grayLighter,
			opacity: 1,
			display: 'block',
			...position('absolute', 0),
			...(!isDisabled && withTransition(['background-color', 'opacity']))
		},
		'&:hover': {
			...(!isDisabled &&
				!isOpen && {
					'&:after': {
						backgroundColor: darken(0.1, theme.colors.grayLighter)
					}
				}),
			...(isOpen &&
				!isDisabled && {
					'&:after': {
						backgroundColor: darken(0.1, theme.colors.blue)
					}
				})
		},
		[MenuPanelHeaderStyled]: {
			...(isDisabled && { cursor: 'not-allowed' })
		}
	})
)
