import React from 'react'
import { ButtonLabelStyled, ButtonIconWrapper } from './buttons.styles'
import { ButtonDefaultStyled } from './buttons.styles'
import { IconArrow } from '../icons/icon-arrow'
import { IButtonPropsWithAttrs } from './buttons.types'
import { FlexParent } from '../layout-flex'

export const ButtonBack = ({ children, ...rest }: IButtonPropsWithAttrs) => (
	<ButtonDefaultStyled {...rest}>
		<FlexParent alignItems="center" fullWidth as="span">
			<ButtonIconWrapper direction="left">
				<IconArrow direction="left" />
			</ButtonIconWrapper>
			<ButtonLabelStyled>
				{children}
			</ButtonLabelStyled>
		</FlexParent>
	</ButtonDefaultStyled>
)
