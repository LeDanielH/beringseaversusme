import React, { HTMLAttributes } from 'react'
import { IIconCommonProps } from './Icon.types'
import { FlexChild } from '../layout-flex'
import { IconButtonStyled } from './Icon.styles'

export const IconButton = ({
	children,
	onClick,
	size
}: { children: React.ReactNode } & HTMLAttributes<HTMLElement> &
	Pick<IIconCommonProps, 'size'>) => (
	<IconButtonStyled onClick={onClick} size={size}>
		<FlexChild as="span" noFontSize>
			{children}
		</FlexChild>
	</IconButtonStyled>
)
