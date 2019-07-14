import styled, { keyframes } from 'styled-components'
import { position, rem, rgba, size } from 'polished'
import { FlexParent } from '../layout-flex'
import { theme } from '../../styles/theme'
import { ChildrenProp } from '../../types/common'

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const LoaderBackdrop = styled((props: ChildrenProp) => (
	<FlexParent
		alignItems="center"
		justifyContent="center"
		fullWidth
		fillHeight
	>
		{props.children}
	</FlexParent>
))`
	${position('absolute', 0, 0, 0, 0)};
	background-color: ${rgba(theme.colors.white, 0.5)};
	z-index: 1000;
	pointer-events: none;
`

export const LoaderCircle = styled.div`
	position: relative;
	display: inline-block;
	${size(rem(theme.sizes.iconCircle))};

	&::after {
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		display: block;
		border-top-color: ${rgba(theme.colors.blue, 0.3)};
		border-right-color: ${rgba(theme.colors.blue, 0.3)};
		border-bottom-color: ${rgba(theme.colors.blue, 0.3)};
		border-left-color: ${rgba(theme.colors.blue, 0.9)};
		border-style: solid;
		border-width: ${rem(2)};
		border-radius: 50%;
		content: '';
		animation: ${spin} 1s infinite linear;
	}
`
