import React from 'react'
import styled from 'styled-components'

import { IIconCommonProps } from './Icon.types'
import { FlexParent, FlexChild } from '../layout-flex'
import { theme } from '../../styles/theme'
import { sizeRounderWithUnit } from '../../utilities/styles'

type IconWithTextProps = Pick<IIconCommonProps, 'sizeRatio'>

const IconWithTextStyled = styled(({ ...rest }) => (
	<FlexParent {...rest} justifyContent="center" alignItems="center" />
))<IconWithTextProps>(({ sizeRatio }: IconWithTextProps) => ({
	borderColor: theme.colors.black,
	borderStyle: 'solid',
	borderWidth: sizeRounderWithUnit(2 * sizeRatio, 'px'),
	borderRadius: sizeRounderWithUnit(4 * sizeRatio, 'px'),
	height: sizeRounderWithUnit(theme.sizes.iconSize * 1.5 * sizeRatio, 'px'),
	padding: '0.1rem'
}))

const IconWithTextText = styled('span')<IconWithTextProps>`
	font-size: ${({ sizeRatio }) =>
		sizeRounderWithUnit(0.4 * sizeRatio, 'rem')};
	color: ${theme.colors.black};
	font-family: ${theme.typography.ffHeadings};
	text-transform: uppercase;
	text-align: center;
	font-weight: bold;
`

export interface IIconWithText {
	shortText: string
}

export const IconWithText = ({
	sizeRatio = 1,
	shortText = 'ext'
}: IconWithTextProps & IIconWithText) => (
	<IconWithTextStyled sizeRatio={sizeRatio}>
		<FlexChild noFontSize>
			<IconWithTextText sizeRatio={sizeRatio}>
				{shortText}
			</IconWithTextText>
		</FlexChild>
	</IconWithTextStyled>
)
