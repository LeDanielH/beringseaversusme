import React from 'react'
import styled from 'styled-components'

import { padding, position } from 'polished'
import { IMenuPanelHeaderProps } from './menu-panel.types'
import { withUnit } from '../../../utilities/styles'
import { FlexParent } from '../../layout-flex'
import { theme } from '../../../styles/theme'

const PANEL_HEADER_HEIGHT = 80

type MenuPanelHeaderBckgStylesType = Pick<
	IMenuPanelHeaderProps,
	'isOpen' | 'isDisabled'
>

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
	...padding('1rem', '1.5rem')
})

export const MenuPanelHeaderBackground = styled('div')<
	MenuPanelHeaderBckgStylesType
>(({ isOpen, isDisabled }: MenuPanelHeaderBckgStylesType) => {
	return {
		...position('relative'),
		background: isOpen ? theme.colors.blue : theme.colors.white,
		height: withUnit(PANEL_HEADER_HEIGHT, 'px'),
		cursor: !isDisabled ? 'pointer' : 'not-allowed',
		[MenuPanelHeaderStyled]: {
			...(isDisabled && { cursor: 'not-allowed' })
		}
	}
})
