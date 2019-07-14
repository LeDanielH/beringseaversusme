import React from 'react'
import { Header } from './header'
import { PageLayoutProps } from './page-layout.types'
import { Footer } from './footer'

export const PageLayout = ({
	buttonBack,
	buttonContinue,
	title,
	description,
	children
}: PageLayoutProps) => {
	// oc only for non mandatory
	const hasButtons = buttonBack || buttonContinue
	// todo REDESIGN - pls do not add top spacing to this component but rather padding to a parent layout.
	//  Parent should decide about the vertical && horizontal spacing.
	//  This is just an unopionated component that should only have styling that applies within
	return (
		<section>
			<Header title={title} description={description} />
			<main>{children}</main>
			{/*if you do not define any button, you can add your own custom footer*/}
			{/*among PageContentLayoutNewDesign children wrapped by FooterNewDesignStyled*/}
			{/*(it is a flex container so do not forget to add FlexChilds as children, see FooterNavigationNewDesign)*/}
			{hasButtons && (
				<Footer
					buttonBack={buttonBack}
					buttonContinue={buttonContinue}
				/>
			)}
		</section>
	)
}
