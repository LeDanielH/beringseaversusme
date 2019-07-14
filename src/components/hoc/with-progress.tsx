import React from 'react'

export interface IWaitingProps {
	expectedInSeconds?: number
	maxInSeconds?: number
	fastUpTo?: number
	progress?: number
}

const WAITING_EXPECTED_SECONDS = 15
const WAITING_MAX_SECONDS = 60
const WAITING_NORMAL_UP_TO = 80
const WAITING_UPDATE_INTERVAL_MS = 1000

export function withProgress<P extends object>(
	WrappedComponent: React.ComponentType<P>
) {
	interface IState {
		progress: number
	}
	return class WithProgressComponent extends React.Component<
		IWaitingProps,
		IState
	> {
		interval: number = null

		state = {
			progress: 0
		}

		componentDidMount(): void {
			if (!this.interval) {
				this.startProgress()
			}
		}

		startProgress = () => {
			const { expectedInSeconds, maxInSeconds, fastUpTo } = this.props
			const expectedWaitingTimeInSeconds =
				expectedInSeconds || WAITING_EXPECTED_SECONDS
			const expectedMaxWaitingTimeInSeconds =
				maxInSeconds || WAITING_MAX_SECONDS
			const fastProgressUpTo = fastUpTo || WAITING_NORMAL_UP_TO
			this.interval = setInterval(() => {
				const { progress } = this.state
				if (progress < WAITING_NORMAL_UP_TO) {
					this.setState({
						progress: Math.min(
							progress +
								fastProgressUpTo / expectedWaitingTimeInSeconds,
							100
						)
					})
				} else {
					this.setState({
						progress: Math.min(
							progress +
								(100 - fastProgressUpTo) /
									(expectedMaxWaitingTimeInSeconds -
										expectedWaitingTimeInSeconds),
							100
						)
					})
				}
			}, WAITING_UPDATE_INTERVAL_MS)
		}

		componentWillUnmount(): void {
			clearInterval(this.interval)
		}

		render() {
			return (
				<WrappedComponent
					{...(this.props as P)}
					progress={this.state.progress}
				/>
			)
		}
	}
}
