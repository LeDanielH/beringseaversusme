import React from 'react'

const TooltipChart = ({ tooltipData }) => (
	<div className="chart__tooltip-content">
		<div
			className={`chart__tooltip-color`}
			style={{ backgroundColor: tooltipData.color }}
		/>
		<div className="chart__tooltip-key">{tooltipData.key}</div>
		<div className="chart__tooltip-value">{tooltipData.value}</div>
	</div>
)

export default TooltipChart
