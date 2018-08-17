import React from 'react'
import classNames from 'classnames'
import { connect } from 'react-redux'

import style from './loader.module.scss'

const Loader = ({ isLoading }) => (
	<div className={classNames(style.loader, { [style.active]: isLoading })} />
)

const mapStateToProps = state => ({
	isLoading: state.loader.isLoading
})

export default connect(mapStateToProps)(Loader)
