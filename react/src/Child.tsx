import React, { Component } from 'react'

export class Child extends Component<{ currentCount: number }> {
	componentWillReceiveProps(nextProps: any): void {
		console.log('componentWillReceiveProps', nextProps)
	}
	render() {
		return <div>Count - {this.props.currentCount}</div>
	}
}

export default Child
