import React, { Component } from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'
import Transition from 'react-transition-group/Transition'

import tooltipActions from '../../state/tooltip/actions'
import { bindActionCreators } from 'redux'

import './tooltip.scss'

class Tooltip extends Component {
	handleTooltipDirection = () => {
		const { direction, width } = this.props
		switch (direction) {
			case 'right':
				return {
					marginLeft: '0px'
				}
			case 'left':
				return {
					marginLeft: `-${width}px`
				}
			default:
				return {
					marginLeft: `-${width / 2}px`
				}
		}
	}

	render() {
		const {
			direction,
			isVisible,
			customClass,
			content,
			positionX,
			positionY,
			width
		} = this.props
		const { marginLeft } = this.handleTooltipDirection()

		const tooltipStyle = {
			transform: `translate3d(${positionX}px, ${positionY}px, 0)`,
			width: `${width}px`
		}

		const tooltipWrapperStyle = {
			width: `${width}px`,
			marginLeft
		}

		return (
			<Transition
				in={isVisible}
				timeout={300}
				mountOnEnter={true}
				unmountOnExit={true}
			>
				<div
					className={classNames(
						'tooltip',
						`tooltip--${direction}`,
						`${customClass}__tooltip`,
						{ active: isVisible }
					)}
					style={tooltipStyle}
				>
					<div
						className={`tooltip__wrapper tooltip__wrapper--${direction} ${customClass}__tooltip-wrapper`}
						style={tooltipWrapperStyle}
					>
						{content}
					</div>
				</div>
			</Transition>
		)
	}
}

const mapStateToProps = state => ({
	content: state.tooltip.content,
	positionX: state.tooltip.positionX,
	positionY: state.tooltip.positionY,
	isVisible: state.tooltip.isVisible,
	customClass: state.tooltip.customClass,
	width: state.tooltip.width,
	direction: state.tooltip.direction
})

const mapDispatchToProps = dispatch => {
	const dispatchedTooltipActions = bindActionCreators(
		tooltipActions,
		dispatch
	)
	return {
		showTooltip: dispatchedTooltipActions.showTooltip,
		hideTooltip: dispatchedTooltipActions.hideTooltip
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Tooltip)
