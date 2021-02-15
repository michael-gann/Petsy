from flask import Blueprint, jsonify, session, request
from app.models import Item, Review, db
from sqlalchemy.orm import selectinload


item_routes = Blueprint('items', __name__)


@item_routes.route("", methods=["GET"])
def items():
    items = db.session.query(Item).options(selectinload(Item.user)).all()

    items_with_seller = [{**item.to_dict(), "user": item.user.to_dict()}
                         for item in items]

    return jsonify(items_with_seller)


@item_routes.route("/<id>")
def item(id):
    item = db.session.query(Item).get(id)

    return jsonify(item.to_dict())


@item_routes.route("/<id>/reviews")
def item_reviews(id):
    reviews = db.session.query(Review).options(
        selectinload(Review.user)).filter_by(itemId=id).all()

    reviews_by_item = [{**review.to_dict(), "user": review.user.to_dict()}
                       for review in reviews]

    return jsonify(reviews_by_item)
