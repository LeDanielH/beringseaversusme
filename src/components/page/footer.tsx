import React from 'react'
import { ButtonBack } from '../buttons/button-back'
import { ButtonContinue } from '../buttons/button-continue'
import { FooterProps } from './page-layout.types'
import { FlexChild, ILayoutFlexParentProps } from '../layout-flex'
import { oc } from 'ts-optchain'
import { FooterStyled } from './page-layout.styles'

export const Footer = ({ buttonBack, buttonContinue }: FooterProps) => {
	const justifyContent: ILayoutFlexParentProps['justifyContent'] =
		buttonBack && buttonContinue ? 'space-between' : 'center'
	const maybeContinueButton = buttonContinue ? <FlexChild>
		<ButtonContinue
			onClick={buttonContinue.onClick}
			type={oc(buttonContinue).type('button')}
		>
			{oc(buttonContinue).label('')}
		</ButtonContinue>
	</FlexChild> : null;

	const maybeBackButton = buttonBack ? <FlexChild>
		<ButtonBack
			onClick={buttonBack.onClick}
			type={oc(buttonBack).type('button')}
		>
			{oc(buttonBack).label('')}
		</ButtonBack>
	</FlexChild> : null;
	return (
		<FooterStyled justifyContent={justifyContent}>
			{maybeBackButton}
			{maybeContinueButton}
		</FooterStyled>
	)
}
