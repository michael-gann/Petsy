from .db import db


class Order(db.Model):
    __tablename__ = 'orders'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer)
    checkout = db.Column(db.String)

    user = db.relationship("User", back_populates="order")
