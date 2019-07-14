import React from 'react'
import { getTimeTillTomorrow } from '../../utilities/date-time'

export interface WithCurrentDateState {
	today: Date
}

export function withCurrentDate<P extends object>(
	WrappedComponent: React.ComponentType<P>
) {
	return class extends React.PureComponent<any, WithCurrentDateState> {
		dayTimer?: number = undefined

		constructor(props: any) {
			super(props)
			const today = new Date()

			this.state = {
				today
			}
		}

		componentDidMount() {
			this.startTimer()
		}

		// The timer is here to determine change of the day
		startTimer() {
			const actualToday = new Date()
			const timeTillTomorow = getTimeTillTomorrow(actualToday)

			this.dayTimer = (setTimeout(() => {
				const today = new Date()

				this.setState({
					today
				})
				this.startTimer()
			}, timeTillTomorow) as unknown) as number
		}

		componentWillUnmount() {
			clearTimeout(this.dayTimer)
		}

		render() {
			return (
				<WrappedComponent
					{...(this.props as P)}
					today={this.state.today}
				/>
			)
		}
	}
}
