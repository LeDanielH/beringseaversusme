import React from 'react'
import { Title, Subtitle } from '../typography'
import { HeaderStyled } from './page-layout.styles'
import { HeaderProps } from './page-layout.types'

// TODO: remove NewDesign from const once app is redesigned
export const Header = ({ title, description }: HeaderProps) => (
	<HeaderStyled>
		<Title>{title}</Title>
		{!!description && <Subtitle>{description}</Subtitle>}
	</HeaderStyled>
)
