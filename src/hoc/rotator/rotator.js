import React, { Component } from 'react'

function Rotator(WrappedComponent) {
	class RotatorR extends Component {
		static defaultProps = {
			rotationPaused: false
		}

		rotatorInterval = null

		componentDidMount() {
			this.startRotation()
		}

		startRotation = () => {
			if (this.props.rotationPaused) return
			if (this.rotatorInterval) return

			this.rotatorInterval = setInterval(
				this.props.onNextUpdate,
				this.props.interval
			)
		}

		pauseRotation = () => {
			clearInterval(this.rotatorInterval)
			this.rotatorInterval = null
		}

		componentDidUpdate() {
			if (this.props.rotationPaused) {
				this.pauseRotation()
				return
			}

			this.startRotation()
		}

		componentWillUnmount() {
			clearInterval(this.rotatorInterval)
		}

		render() {
			return <WrappedComponent {...this.props} />
		}
	}

	return RotatorR
}

export default Rotator
