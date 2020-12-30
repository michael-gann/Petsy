from flask import Blueprint, jsonify, session, request
from app.models import Review, db
from sqlalchemy.orm import selectinload


review_routes = Blueprint('reviews', __name__)


@review_routes.route("/")
def reviews():
    # reviews = db.session.query(Review).options(selectinload(Review.review)).all()
    # return jsonify(reviews)
    reviews = Review.query.all()
    return {"Reviews": [review.to_dict() for review in reviews]}



