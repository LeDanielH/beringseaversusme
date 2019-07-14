import styled from 'styled-components'
import * as React from 'react'
import { padding, rem } from 'polished'
import { theme } from '../../styles/theme'

type InputChangeType = {
	onChange: (e: React.FormEvent<HTMLInputElement>) => void
}

export const InputStyled = styled.input.attrs({ type: 'text' })<
	React.HTMLProps<HTMLInputElement> & InputChangeType
>`
	border: 0;
	outline: 0;
	height: ${rem(theme.inputs.height)};
	line-height: ${rem(theme.inputs.height)};
	font-size: ${theme.typography.fsBody};
	font-family: ${theme.typography.ffBody};
	${padding(null, theme.spacing.small)};
	width: 100%;
	text-align: center;
	&:focus,
	&:hover {
		border: 0;
		outline: 0;
	}
`
