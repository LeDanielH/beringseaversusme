import React from 'react'
export interface IMenuPanelHeaderProps {
	isOpen: boolean
	isDisabled?: boolean
	title: string
	onClick: () => void
	icon: React.ReactNode
}

export interface IMenuPanelProps extends Omit<IMenuPanelHeaderProps, 'isOpen'> {
	isOpen: boolean
	title: string
	listItems: React.ReactNode
}
