import styled from 'styled-components'
import { FooterStyledProps } from './page-layout.types'
import { FlexParent } from '../layout-flex'
import React from 'react'
import { theme } from '../../styles/theme'

export const HeaderStyled = styled('header')`
	margin-bottom: ${theme.spacing.big};
`

export const FooterStyled = styled(({ ...rest }) => (
	<FlexParent {...rest} alignItems="center" as="footer" fullWidth />
))<FooterStyledProps>({
	marginTop: '2rem'
})
