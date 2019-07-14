import { IButtonPropsWithAttrs } from '../buttons/buttons.types'
import { ILayoutFlexParentProps } from '../layout-flex'

export interface FooterStyledProps {
	justifyContent?: ILayoutFlexParentProps['justifyContent']
}

export interface HeaderProps {
	title: string
	description?: string
}

export interface FooterButtonProps extends IButtonPropsWithAttrs {
	label?: string
}

export interface FooterProps {
	buttonBack?: FooterButtonProps
	buttonContinue?: FooterButtonProps
}

export type PageLayoutProps = FooterProps &
	HeaderProps & { children: React.ReactNode }
