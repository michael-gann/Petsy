from .db import db


class Pet(db.Model):
    __tablename__ = 'pets'

    id = db.Column(db.Integer, primary_key=True)
    sellerId = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    name = db.Column(db.String)
    description = db.Column(db.String)
    price = db.Column(db.Float)
    imgurl = db.Column(db.String)
    categoryId = db.Column(db.Integer, db.ForeignKey("categories.id"), nullable=False)
    breed = db.Column(db.String)
    age = db.Column(db.Integer)
    weight = db.Column(db.Integer)
    gender = db.Column(db.String)

    user = db.relationship("User", back_populates="pets")

    def to_dict(self):
        return {"id": self.id, "sellerId": self.sellerId, "name": self.name,
                "description": self.description, "price": self.price,
                "imgurl": self.imgurl, "categoryId": self.categoryId,
                "breed": self.breed, "age": self.age, "weight": self.weight,
                "gender": self.gender
                }
