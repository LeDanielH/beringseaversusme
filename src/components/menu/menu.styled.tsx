import React from 'react'
import styled from 'styled-components'
import { padding, position, rem } from 'polished'
import { IMenuPanelHeaderProps } from './MenuPanel/menu-panel.types'
import { mediaMax, withUnit } from '../../utilities/styles'
import { theme } from '../../styles/theme'
import { FlexChild, FlexParent } from '../layout-flex'
import { Paragraph, Subtitle } from '../typography'
import {withTransition} from "@householdjs/utils";

const MENU_ITEM_DASH_HEIGHT = 18
const MENU_ITEM_DASH_WIDTH = 1
const MENU_ITEM_DASH_SEPARATION = 5
const MENU_ITEM_DASH_POSITION =
	MENU_ITEM_DASH_HEIGHT + MENU_ITEM_DASH_SEPARATION

export const MenuStyled = styled('nav')({
	boxShadow: theme.colors.boxShadow,
	borderRadius: theme.border.radius,
	// width: rem(theme.newDesign.sizes.menuWidth),
	[`${mediaMax(theme.breakPoints.md)}`]: {
		width: '100%'
	}
})

export const MenuListStyled = styled('ul')({
	...padding(theme.spacing.default, 0),
	backgroundColor: theme.colors.white,
	margin: 0,
	listStyleType: 'none'
})

export interface IMenuItemTextProps {
	isSelected: boolean
}

export interface IMenuItemStyledProps {
	isDisabled: boolean
}

const pseudoStyles = (where: 'top' | 'bottom') => ({
	content: '""',
	display: 'inline-block',
	...position(
		'absolute',
		where === 'top' ? -MENU_ITEM_DASH_POSITION : null,
		null,
		where === 'bottom' ? -MENU_ITEM_DASH_POSITION : null,
		'50%'
	),
	marginLeft: withUnit(-MENU_ITEM_DASH_WIDTH * 0.5, 'px'),
	height: withUnit(MENU_ITEM_DASH_HEIGHT, 'px'),
	width: withUnit(MENU_ITEM_DASH_WIDTH, 'px'),
	backgroundColor: theme.colors.grayLighter,
	transform: 'scaleY(1)',
	transformOrigin: where === 'top' ? 'bottom center' : 'top center',
	...withTransition('transform')
})
export const MenuStatusIconWrapperStyled = styled(({ ...rest }) => (
	<FlexChild {...rest} noFontSize width={rem(40)} />
))({
	paddingRight: theme.spacing.default
})

export const MenuIconDashesStyled = styled('div')({
	position: 'relative',
	'&:before': {
		...pseudoStyles('top')
	},
	'&:after': {
		...pseudoStyles('bottom')
	}
})

type MenuPanelTitleType = Pick<IMenuPanelHeaderProps, 'isOpen'>

export const MenuPanelTitle = styled(({ ...rest }) => <Subtitle {...rest} />)<
	MenuPanelTitleType
>(({ isOpen }: MenuPanelTitleType) => ({
	...withTransition(['font', 'color'], {
		durationInMs: theme.transition.duration * 0.5
	}),
	color: isOpen ? theme.colors.white : theme.colors.text,
	fontWeight: isOpen ? 'bold' : 'normal'
}))

export const MenuItemText = styled(Paragraph)<IMenuItemTextProps>(
	({ isSelected }: IMenuItemTextProps) => ({
		fontFamily: theme.typography.ffHeadings,
		fontWeight: isSelected ? 'bold' : 'normal',
		lineHeight: 1, // want padding to decide the spacing,
		...withTransition(['font', 'color'], {
			durationInMs: theme.transition.duration * 0.5
		}),
		...(isSelected && { fontWeight: 'bold', color: theme.colors.text })
	})
)

export const MenuListItemStyled = styled(({ ...rest }) => (
	<FlexParent {...rest} as="li" alignItems="center" fullWidth />
))<IMenuItemStyledProps>(({ isDisabled }: IMenuItemStyledProps) => ({
	...padding(theme.spacing.default, theme.spacing.big),
	cursor: isDisabled ? 'not-allowed' : 'pointer',
	position: 'relative',
	zIndex: 1,
	'&:before': {
		content: '""',
		display: 'block',
		transform: 'scaleX(0)',
		...withTransition('transform'),
		backgroundColor: theme.colors.grayLightest,
		...position('absolute', 0),
		zIndex: -1,
		transformOrigin: 'left center'
	},
	'&:first-of-type': {
		[MenuIconDashesStyled]: {
			'&:before': {
				display: 'none'
			}
		}
	},
	'&:last-of-type': {
		[MenuIconDashesStyled]: {
			'&:after': {
				display: 'none'
			}
		}
	},
	...(!isDisabled && {
		'&:hover': {
			'&:before': {
				transform: 'scaleX(1)'
			},
			[MenuIconDashesStyled]: {
				'&:before, &:after': {
					transform: 'scaleY(0)'
				}
			}
		}
	})
}))
