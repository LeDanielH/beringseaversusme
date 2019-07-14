import React from 'react'
import {
	MenuPanelHeaderBackground,
	MenuPanelHeaderStyled
} from './menu-panel.styles'
import { FlexChild } from '../../layout-flex'
import { FlipperY } from '../../flippers'
import { IconChevron } from '../../icons/icon-chevron'
import { IMenuPanelHeaderProps } from './menu-panel.types'
import { theme } from '../../../styles/theme'

export const MenuPanelHeader = ({
	isOpen,
	isDisabled = false,
	onClick,
	children
}: IMenuPanelHeaderProps) => (
	<MenuPanelHeaderBackground
		isOpen={isOpen}
		isDisabled={isDisabled}
		onClick={isDisabled ? undefined : onClick}
	>
		<MenuPanelHeaderStyled>
			<FlexChild>{children}</FlexChild>
			<FlexChild noFontSize>
				<FlipperY isFlipped={isOpen}>
					<IconChevron direction="top" color={theme.colors.white} />
				</FlipperY>
			</FlexChild>
		</MenuPanelHeaderStyled>
	</MenuPanelHeaderBackground>
)
