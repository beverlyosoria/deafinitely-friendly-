import React, { Component } from 'react';
import ReviewForm from '../../components/ReviewForm/ReviewForm';

class DetailsPage extends Component {
	render() {
		// this is to match the index of post from the getPost function
		let post = this.props.getPostId(this.props.match.params.id);
		return (
			<div>
				<h1>Details</h1>
				<p>{post.address}</p>
				<p>{post.area}</p>
				<p>{post.state}</p>
				<ReviewForm />
			</div>
		);
	}
}

export default DetailsPage;
