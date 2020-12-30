from flask import Blueprint, jsonify
from app.models import Order, db


order_routes = Blueprint('orders', __name__)


@order_routes.route("/", methods=["POST"])
def orders():
  # get data from post
    order = data.something # set it to something

    # save it to db

    return jsonify(pets_with_seller)


@pet_routes.route("/<id>")
def pet(id):
    pet = db.session.query(Pet).get(id)

    return jsonify(pet.to_dict())
