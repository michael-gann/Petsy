from .db import db


class Item(db.Model):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    sellerId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    name = db.Column(db.String)
    description = db.Column(db.String)
    price = db.Column(db.Float)
    imgurl = db.Column(db.String)
    categoryId = db.Column(db.Integer, db.ForeignKey("categories.id"))

    reviews = db.relationship("Review", back_populates="item")
    user = db.relationship("User", back_populates="item")
    category = db.relationship("Category", back_populates="item")

    def to_dict(self):
        return {"id": self.id, "sellerId": self.sellerId, "name": self.name,
                "description": self.description, "price": self.price,
                "imgurl": self.imgurl, "categoryId": self.categoryId
                }
