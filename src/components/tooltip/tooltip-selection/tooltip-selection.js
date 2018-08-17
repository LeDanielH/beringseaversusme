import React from 'react'
import './tooltip-selection.scss'

const TooltipSelection = ({ tooltipData }) => (
	<div className="s-tooltip__content">
		{tooltipData.map(selection => (
			<span key={selection.id} className="s-tooltip__item">
				<span className="s-tooltip__name">{selection.name}</span>
				<span className="s-tooltip__separator">,&nbsp;</span>
			</span>
		))}
	</div>
)

export default TooltipSelection
