import React from 'react'
import {
	MenuPanelHeaderBackground,
	MenuPanelHeaderStyled
} from './menu-panel.styles'
import { IMenuPanelHeaderProps } from './menu-panel.types'
import { MenuPanelTitle, MenuStatusIconWrapperStyled } from '../menu.styled'
import { FlexChild } from '../../layout-flex'
import { FlipperY } from '../../flipper'
import { IconChevron } from '../../icons/icon-chevron'
import { theme } from '../../../styles/theme'
export const MenuPanelHeader = ({
	isOpen,
	isDisabled = false,
	title,
	onClick,
	icon
}: IMenuPanelHeaderProps) => (
	<MenuPanelHeaderBackground
		isOpen={isOpen}
		isDisabled={isDisabled}
		onClick={onClick}
	>
		<MenuPanelHeaderStyled isOpen={isOpen}>
			<MenuStatusIconWrapperStyled>{icon}</MenuStatusIconWrapperStyled>
			<FlexChild>
				<MenuPanelTitle isOpen={isOpen}>{title}</MenuPanelTitle>
			</FlexChild>
			<FlexChild noFontSize justifySelfEnd>
				<FlipperY isFlipped={isOpen}>
					<IconChevron
						direction="top"
						color={isOpen ? theme.colors.red : theme.colors.white}
					/>
				</FlipperY>
			</FlexChild>
		</MenuPanelHeaderStyled>
	</MenuPanelHeaderBackground>
)
