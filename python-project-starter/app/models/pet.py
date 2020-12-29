from .db import db


class Pet(db.Model):
    __tablename__ = 'pets'

    id = db.Column(db.Integer, primary_key=True)
    sellerId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    name = db.Column(db.String)
    description = db.Column(db.String)
    price = db.Column(db.Integer)
    imgurl = db.Column(db.String)
    catergoryId = db.Column(db.Integer)
    breed = db.Column(db.String)
    age = db.Column(db.Integer)
    weight = db.Column(db.Integer)
    gender = db.Column(db.Integer)

    user = db.relationship("User", back_populates="pets")
