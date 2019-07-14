import React from 'react'
import { Omit } from '../../../types/omit'

export interface IMenuPanelHeaderProps {
	isOpen: boolean
	isDisabled?: boolean
	children: React.ReactNode
	onClick: () => void
}

export interface IMenuPanelProps
	extends Omit<IMenuPanelHeaderProps, 'onClick' | 'isOpen'> {
	headerContent: React.ReactNode
	openOnLoad: boolean
}
