import React, { useState } from 'react'
import styled from 'styled-components'
import { FlexChild, FlexParent } from '../layout-flex'
import { Paragraph } from '../typography'
import { IconCloseButton } from '../icons/icon-close'
import { Spacer } from '@householdjs/elements'
import { SpacerProps } from '@householdjs/types'

import { theme } from '../../styles/theme'
import { ChildrenProp } from '../../types/common'

export const PanelRemovableStyled = styled(({ ...rest }) => (
	<FlexParent {...rest} justifyContent="space-between" alignItems="center" />
))({
	backgroundColor: theme.colors.white,
	border: `1px solid ${theme.colors.border}`,
	borderRadius: theme.border.radius,
	padding: theme.spacing.default
})

const closePanel = (toggle: (hidden: boolean) => void) => () => toggle(true)

// todo maybe remove paragraph if other components needed inside this component
export const PanelRemovable = ({
	children,
	...rest
}: ChildrenProp & SpacerProps) => {
	const [hidden, toggle] = useState(false)
	return hidden ? null : (
		<Spacer {...rest}>
			<PanelRemovableStyled>
				<FlexChild flexGrow={1} flexShrink={1}>
					<Paragraph>{children}</Paragraph>
				</FlexChild>
				<FlexChild>
					<Spacer sLeft>
						<IconCloseButton onClick={closePanel(toggle)} />
					</Spacer>
				</FlexChild>
			</PanelRemovableStyled>
		</Spacer>
	)
}
