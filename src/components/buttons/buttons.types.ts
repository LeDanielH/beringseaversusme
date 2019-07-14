import { ButtonHTMLAttributes } from 'react'

export type IButtonPropsWithAttrs = ButtonHTMLAttributes<HTMLButtonElement> & {
	onClick: () => void
}

export interface IButtonLabelStyledProps {
	color?: string
}

export interface IButtonStyledProps extends IButtonLabelStyledProps {
	backgroundColor?: string
}

export interface IButtonIconWrapperProps {
	direction: 'left' | 'right'
}
