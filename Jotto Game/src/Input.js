import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps({ success }) {
	return { success };
}

class Input extends Component {
	render() {
		const content = this.props.success ? null : (
			<form className="formInline">
				<input
					type="text"
					data-test="input-box"
					placeholder="enter guess"
					className="mb-2 mx-sm-3"
					id="word-guess"
				/>
				<button data-test="submit-button" type="submit" className="btn btn-primary mb-2">
					Submit
				</button>
			</form>
		);
		return <div data-test="component-input">{content}</div>;
	}
}

export default connect(mapStateToProps)(Input);
