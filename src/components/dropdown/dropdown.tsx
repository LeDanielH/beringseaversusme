import React, { RefObject } from 'react'
import { DropdownStyled } from './dropdown.styles'
import { ChildrenProp } from '../../types/common'

type DropdownState = typeof initialState
type DropdownProps = typeof initialProps & ChildrenProp

const initialState = {
	contentHeight: 0
}

const initialProps = {
	isOpen: false,
	checkDOMUpdate: false
}

export class Dropdown extends React.Component<DropdownProps, DropdownState> {
	content: RefObject<HTMLDivElement> = {
		current: null
	}

	static defaultProps = initialProps

	state = initialState

	constructor(props: DropdownProps) {
		super(props)
		this.content = React.createRef()
	}

	// for edge cases where change inside dropdown won't trigger height update
	componentDidForceUpdate = () => {
		const mutationObserver = new MutationObserver(this.updateContentHeight)
		if(this.content.current) {
			mutationObserver.observe(this.content.current, {
				attributes: false,
				characterData: false,
				childList: true,
				subtree: true,
				attributeOldValue: false,
				characterDataOldValue: false
			})
		}

	}

	componentDidMount(): void {
		this.updateContentHeight()
		if (this.props.checkDOMUpdate) {
			this.componentDidForceUpdate()
		}
	}

	componentDidUpdate(prevProps: DropdownProps): void {
		if (prevProps.isOpen !== this.props.isOpen) {
			this.updateContentHeight()
		}
	}

	updateContentHeight = () => {
		const { current } = this.content
		if (current) {
			this.getContentHeight(current)
		}
	}

	getContentHeight = (element: HTMLDivElement): void => {
		this.setState({
			contentHeight: element.offsetHeight
		})
	}

	render() {
		const { isOpen, children } = this.props
		return (
			<DropdownStyled height={this.state.contentHeight} isOpen={isOpen}>
				<div ref={this.content}>{children}</div>
			</DropdownStyled>
		)
	}
}
