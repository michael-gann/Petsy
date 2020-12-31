from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User, Item, Pet, db
from sqlalchemy.orm import selectinload

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route("/<userId>/items/<itemId>")
def user_items(userId, itemId):
    items = db.session.query(Item).filter_by(sellerId=userId).filter(Item.id!=itemId).all()

    user_items = [item.to_dict() for item in items]

    return jsonify(user_items)

@user_routes.route("/<userId>/pets/<petId>")
def user_pets(userId,petId):
    pets = db.session.query(Pet).filter_by(sellerId=userId).filter(Pet.id!=petId).options(selectinload(Pet.user)).all()

    user_pets = [{**pet.to_dict(), "user": pet.user.to_dict()} for pet in pets]

    return jsonify(user_pets)
