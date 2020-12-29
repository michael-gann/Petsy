from flask import Blueprint, jsonify
from app.models import Pet, db
from sqlalchemy.orm import selectinload


pet_routes = Blueprint('pets', __name__)


@pet_routes.route("/", methods=["GET"])
def pets():
    pets = db.session.query(Pet).options(selectinload(Pet.user)).all()

    pets_with_seller = [{**pet.to_dict(), "user": pet.user.to_dict()} for pet in pets]

    return jsonify(pets_with_seller)
