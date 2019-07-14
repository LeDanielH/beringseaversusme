import * as React from 'react'

export interface WithUpdaterProps {
	rotationPaused?: boolean
	onNextUpdate: () => void
	interval: number
}

export function withUpdater<P extends object>(
	WrappedComponent: React.ComponentType<P>
) {
	class Updater extends React.Component<WithUpdaterProps> {
		static defaultProps = {
			rotationPaused: false
		}

		updaterInterval: number = null

		componentDidMount() {
			this.startUpdating()
		}

		componentDidUpdate() {
			if (this.props.rotationPaused) {
				this.pauseUpdating()
				return
			}

			this.startUpdating()
		}

		componentWillUnmount() {
			const { updaterInterval: updaterInterval1 } = this
			clearInterval(updaterInterval1)
		}

		startUpdating = () => {
			if (this.props.rotationPaused) return
			if (this.updaterInterval) return

			this.updaterInterval = setInterval(
				this.props.onNextUpdate,
				this.props.interval
			)
		}

		pauseUpdating = () => {
			clearInterval(this.updaterInterval)
			this.updaterInterval = null
		}

		render() {
			return <WrappedComponent {...(this.props as P)} />
		}
	}

	return Updater
}
