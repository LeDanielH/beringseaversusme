import React from 'react'
import { MenuPanelHeader } from './menu-panel-header'
import { IMenuPanelProps } from './menu-panel.types'
import { MenuListStyled } from '../menu.styled'
import { Dropdown } from '../../dropdown/dropdown'

export const MenuPanel = ({
	isDisabled,
	isOpen,
	title,
	listItems,
	onClick,
	icon
}: IMenuPanelProps) => {
	return (
		<>
			<MenuPanelHeader
				isOpen={isOpen}
				isDisabled={isDisabled}
				title={title}
				onClick={onClick}
				icon={icon}
			/>
			<Dropdown isOpen={isOpen}>
				<MenuListStyled>{listItems}</MenuListStyled>
			</Dropdown>
		</>
	)
}
