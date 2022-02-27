import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { CSSObject } from 'styled-components'
import { Link } from 'gatsby-plugin-react-intl'

interface HeaderProps {
	siteTitle: string
	children?: never
}

const headerStyles: CSSObject = {
	backgroundColor: 'rebeccapurple',
	marginBottom: '1.45rem',
	display: 'flex'
}

const headerInnerStyles: CSSObject = {
	margin: `0 auto`,
	maxWidth: '960px',
	padding: `1.45rem 1.0875rem`
}

const linkStyles: CSSObject = {
	color: `white`,
	textDecoration: `none`
}

const h1Styles = { margin: 0 }

const HeaderP = styled.header({ ...headerStyles })
const HeaderInner = styled.div({ ...headerInnerStyles })

const Header = ({ siteTitle }: HeaderProps) => (
	<HeaderP>
		<HeaderInner>
			<h1 style={h1Styles}>
				<Link to="/" style={linkStyles}>
					{siteTitle}
				</Link>
			</h1>
		</HeaderInner>
	</HeaderP>
)

Header.propTypes = {
	siteTitle: PropTypes.string
}

Header.defaultProps = {
	siteTitle: ``
}

export default Header
