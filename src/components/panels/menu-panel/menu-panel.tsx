import React, { useState } from 'react'
import { MenuPanelHeader } from './menu-panel-header'
import { IMenuPanelProps } from './menu-panel.types'
import { Dropdown } from '../../dropdown/dropdown'

export const MenuPanel = ({
	headerContent,
	children,
	isDisabled,
	openOnLoad
}: IMenuPanelProps) => {
	const [isPanelOpen, toggle] = useState<boolean>(openOnLoad || false)
	const togglePanel = () => toggle(!isPanelOpen)
	return (
		<>
			<MenuPanelHeader
				isOpen={isPanelOpen}
				isDisabled={isDisabled}
				onClick={isDisabled ? undefined : togglePanel}
			>
				{headerContent}
			</MenuPanelHeader>
			<Dropdown isOpen={isPanelOpen}>{children}</Dropdown>
		</>
	)
}
