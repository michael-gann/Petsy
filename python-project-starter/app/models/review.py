from .db import db


class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    itemId = db.Column(db.Integer, db.ForeignKey("items.id"), nullable=False)
    score = db.Column(db.Integer, nullable=False)
    review = db.Column(db.String, nullable=False)

    user = db.relationship("User", back_populates="reviews")
    item = db.relationship("Item", back_populates="reviews")
