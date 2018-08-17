import React, { Component } from 'react'
import _throttle from 'lodash/throttle'

import styles from './resizer.module.scss'

class Resizer extends Component {
	throttled = _throttle(this.props.onResize, 33)

	componentDidMount() {
		this.props.onResize()
		window.addEventListener('resize', this.throttled)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.throttled)
	}

	render() {
		return <div className={styles.resizer}>{this.props.children}</div>
	}
}

export default Resizer
