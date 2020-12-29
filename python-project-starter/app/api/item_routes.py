from flask import Blueprint, jsonify, session, request
from app.models import Item, db
from sqlalchemy.orm import selectinload


item_routes = Blueprint('items', __name__)


@item_routes.route("/", methods=["GET"])
def items():
    items = db.session.query(Item).options(selectinload(Item.user)).all()

    items_with_seller = [{**item.to_dict(), "user": item.user.to_dict()} for item in items]

    return jsonify(items_with_seller)


@item_routes.route("/<id>")
def item(id):
    item = db.session.query(Item).get(id)
    return jsonify(item.to_dict())
