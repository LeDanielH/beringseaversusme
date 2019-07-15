import React from 'react'
import {
	MenuListItemStyled,
	IMenuItemStyledProps,
	MenuStatusIconWrapperStyled,
	MenuItemText,
	IMenuItemTextProps,
	MenuIconDashesStyled
} from './menu.styled'
import { FlexChild } from '../layout-flex'

export interface IMenuItemProps {
	label: string
	onClick: () => void
	onEdit?: () => void // todo make not optional when layout finished
	isDisabled: boolean
	icon?: React.ReactNode
}

type MenuItemProps = IMenuItemStyledProps & IMenuItemProps & IMenuItemTextProps

export const MenuItem = ({
	isSelected,
	isDisabled,
	onClick,
	icon,
	label
}: MenuItemProps) => (
	<MenuListItemStyled isDisabled={isDisabled} onClick={onClick}>
		<MenuStatusIconWrapperStyled>
			{icon && <MenuIconDashesStyled>{icon}</MenuIconDashesStyled>}
		</MenuStatusIconWrapperStyled>
		<FlexChild>
			<MenuItemText isSelected={isSelected}>{label}</MenuItemText>
		</FlexChild>
	</MenuListItemStyled>
)
