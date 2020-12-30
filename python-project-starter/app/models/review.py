from .db import db


class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    itemId = db.Column(db.Integer, db.ForeignKey("items.id"))
    score = db.Column(db.Integer, nullable=False)
    review = db.Column(db.String, nullable=False)
    createdAt = db.Column(db.DateTime, server_default=db.func.now())
    updatedAt = db.Column(
        db.DateTime, server_default=db.func.now(), server_onupdate=db.func.now())

    user = db.relationship("User", back_populates="reviews")
    item = db.relationship("Item", back_populates="reviews")

    def to_dict(self):
        return {"id": self.id, "userId": self.userId, "itemId": self.itemId,
                "score": self.score, "review": self.review}
