

function Review({review}) {
    const {rating, comments} = review;

    return (
        <div>
            <h3>{rating}/5</h3>
            <h4>{comments}</h4>
        </div>
    )

}

export default Review;