import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import { connect } from 'react-redux';

class ReviewsContainer extends Component {

  render() {
    const { restaurant, addReview, deleteReview, reviews } = this.props;
    const restaurantReviews = reviews.filter(review => review.restaurantId === restaurant.id);

    return (
      <div>
        <ReviewInput
          restaurantId ={restaurant.id}
          addReview={addReview}
        />
        <Reviews
        reviews={restaurantReviews}
        deleteReview={deleteReview}
        />
      </div>
    )
  }
}

export default ReviewsContainer;
