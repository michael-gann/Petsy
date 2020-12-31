from flask import Blueprint, jsonify, session, request
from app.models import Review, db
from sqlalchemy.orm import selectinload
from app.forms import ReviewForm


review_routes = Blueprint('reviews', __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@review_routes.route("/")
def reviews():
    # reviews = db.session.query(Review).options(selectinload(Review.review)).all()
    # return jsonify(reviews)
    reviews = Review.query.all()
    reviews_list = [review.to_dict() for review in reviews]
    # Goal: {itemId1: {countReviews: 3, sumReviews: 12}}

    def buildScoreDic(reviews_list):
        score = dict()
        for review in reviews_list:
            if review["itemId"] in score:
                score[review["itemId"]]["countReviews"] += 1
                score[review["itemId"]]["sumReviews"] += review["score"]
            else:
                score[review["itemId"]] = {
                    "countReviews": 1, "sumReviews": review["score"]}

        return score
    score = buildScoreDic(reviews_list)
    return score


@review_routes.route("/", methods=["POST"])
def post_reviews():
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review = Review(
            userId=form.data['userId'],
            itemId=form.data['itemId'],
            score=form.data['score'],
            review=form.data['review'],
        )
        db.session.add(review)
        db.session.commit()
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}
