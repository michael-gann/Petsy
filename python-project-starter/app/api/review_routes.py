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

# @item_routes.route("/", methods=["GET"])
# def items():
#     items = db.session.query(Item).options(selectinload(Item.user)).all()

#     items_with_seller = [{**item.to_dict(), "user": item.user.to_dict()} for item in items]

#     return jsonify(items_with_seller)