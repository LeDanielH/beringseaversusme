import styled, { css } from 'styled-components'
import { position } from 'polished'
import { IconButton } from './icon-button'
import { IIconCommonProps } from './Icon.types'
import { HTMLAttributes } from 'react'
import { theme } from '../../styles/theme'
import { withTransition, withUnit } from '@householdjs/utils'
import React from 'react';

const ICON_CLOSE_SIZE = 1 // rem
const ICON_CLOSE_DASH_HEIGHT = 2
const DEFAULT_ROTATION_WITH_UNIT = withUnit(45, 'deg')

type IconClosePropsType = Pick<IIconCommonProps, 'size' | 'color'>

const pseudoStyles = css`
	display: block;
	content: '';
	width: 100%;
	${position('absolute', '50%', 0, null, 0)};
	height: ${withUnit(ICON_CLOSE_DASH_HEIGHT, 'px')};
	margin-top: -${withUnit(ICON_CLOSE_DASH_HEIGHT * 0.5, 'px')};
`

const animateStyles = css`
	${css(withTransition('transform'))}
`

export const IconClose = styled('div')<IconClosePropsType>`
	cursor: pointer;
	width: ${({ size }) => withUnit(size || ICON_CLOSE_SIZE, 'rem')};
	height: ${({ size }) => withUnit(size || ICON_CLOSE_SIZE, 'rem')};
	position: relative;

	&:before,
	&:after {
		background-color: ${({ color }) => color || theme.colors.black};
		${pseudoStyles}
	}

	&:before {
		transform: rotate(${DEFAULT_ROTATION_WITH_UNIT});
	}

	&:after {
		transform: rotate(-${DEFAULT_ROTATION_WITH_UNIT});
	}
`

export const IconCloseAnimated = styled(({ ...rest }) => (
	<IconClose {...rest} />
))<IconClosePropsType>`
	&:before,
	&:after {
		${animateStyles}
	}
	&:hover,
	&:focus {
		&:before {
			transform: rotate(-${DEFAULT_ROTATION_WITH_UNIT});
		}
		&:after {
			transform: rotate(${DEFAULT_ROTATION_WITH_UNIT});
		}
	}
`

export const IconCloseButton = ({
	onClick,
	color
}: IconClosePropsType & HTMLAttributes<HTMLElement>) => (
	<IconButton onClick={onClick}>
		<IconClose color={color} />
	</IconButton>
)
