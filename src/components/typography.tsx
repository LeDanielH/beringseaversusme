import styled from 'styled-components'
import { theme } from '../styles/theme'
import { withUnit } from '../utilities/styles'
import * as CSS from 'csstype'
import { SpacingSizes } from '../types/style'

export interface TypographyProps {
	textAlign?: CSS.TextAlignProperty
	fontWeight?: CSS.FontWeightProperty
	withBottomSpacing?: boolean
	spacing?: SpacingSizes
}

export const baseTypographyStyles = ({
	textAlign = 'left',
	fontWeight = theme.typography.fwRegular,
	withBottomSpacing = false,
	spacing = 'default'
}: TypographyProps) => ({
	textAlign,
	marginBottom: 0,
	fontFamily: theme.typography.fsBody,
	color: theme.colors.text,
	fontWeight,
	...(withBottomSpacing ? { marginBottom: theme.spacing[spacing] } : {})
})

export const Paragraph = styled('p')<TypographyProps>(
	(props: TypographyProps) => ({
		...baseTypographyStyles(props),
		fontSize: theme.typography.fsBody,
		lineHeight: theme.typography.lhBody
	})
)

export const ParagraphSmall = styled(Paragraph)({
	fontSize: theme.typography.fsSmall
})

export const Subtitle = styled('h2')<TypographyProps>(
	(props: TypographyProps) => ({
		...baseTypographyStyles(props),
		fontSize: theme.typography.fsSubtitle,
		fontWeight: theme.typography.fwBold
	})
)

export const Title = styled('h1')<TypographyProps>(
	(props: TypographyProps) => ({
		...baseTypographyStyles(props),
		fontSize: withUnit(1.75, 'rem'),
		fontWeight: 800,
		marginBottom: withUnit(1, 'rem'),
		lineHeight: 1
	})
)
