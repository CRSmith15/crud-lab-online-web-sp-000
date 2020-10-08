import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    text: '',
    restaurantId: this.props.restaurantId
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addReview(this.state);
    this.setState({ text: '' });
  }

  handleChange = event => {
    this.setState({ text: event.target.value })
  }


  render() {
    return (
      <div>
        Review Input
      </div>
    );
  }
};

export default ReviewInput;
