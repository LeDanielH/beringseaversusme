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
	return (
		<FooterStyled justifyContent={justifyContent}>
			{buttonBack && (
				<FlexChild>
					<ButtonBack
						onClick={buttonBack.onClick}
						type={oc(buttonBack).type('button')}
					>
						{oc(buttonBack).label('')}
					</ButtonBack>
				</FlexChild>
			)}
			{buttonContinue && (
				<FlexChild>
					<ButtonContinue
						onClick={buttonContinue.onClick}
						type={oc(buttonContinue).type('button')}
					>
						{oc(buttonContinue).label('')}
					</ButtonContinue>
				</FlexChild>
			)}
		</FooterStyled>
	)
}
