import { Link, GatsbyLinkProps } from 'gatsby'
import styled from 'styled-components'
import React from 'react'

export const NavLinkStyled = styled(({ ...rest }) => <Link {...rest} />)<
	GatsbyLinkProps<any>
>`
	font-size: 20px;
	&.active {
		color: red;
	}
`
