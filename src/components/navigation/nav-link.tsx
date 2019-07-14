import { Link, GatsbyLinkProps } from 'gatsby'
import styled from 'styled-components'
import React from 'react'
import { theme } from '../../styles/theme'

export const NavLinkStyled = styled(({ ...rest }) => <Link {...rest} />)<
	GatsbyLinkProps<any>
>`
	font-size: ${theme.typography.fsBodyBigger};
	font-family: ${theme.typography.ffHeadings};
	font-weight: ${theme.typography.fwLight};
	&.active {
		color: ${theme.colors.blue};
	}
`
