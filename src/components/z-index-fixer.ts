import styled from 'styled-components'

interface IZindexFixerProps {
	zIndex: number
}
export const ZIndexFixer = styled('div')<IZindexFixerProps>`
	position: relative;
	z-index: ${({ zIndex }) => zIndex};
`
