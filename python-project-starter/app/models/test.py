from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash
db = SQLAlchemy()

class Employee(db.Model, UserMixin):
    __tablename__ = "employees"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False, unique=True)
    employee_number = db.Column(db.Integer, nullable=False, unique=True)
    hashed_password = db.Column(db.String(100), nullable=False)

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.hashed_password, password)


class Menu(db.Model):
    __tablename__ = "menus"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(30), nullable=False)
    menu_items = db.relationship("MenuItem", back_populates="menu")


class MenuItem(db.Model):
    __tablename__ = "menu_items"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    price = db.Column(db.Float, nullable=False)
    menu_id = db.Column(db.Integer, db.ForeignKey("menus.id"), nullable=False,)
    menu_type_id = db.Column(db.Integer,
                             db.ForeignKey("menu_item_types.id"),
                             nullable=False,
                             )
    menu = db.relationship("Menu", back_populates="menu_items")


    menu_item_types = db.relationship("MenuItemType",
                                      back_populates="menu_items"
                                      )
    order_detail = db.relationship("OrderDetail",
                                    back_populates="menu_item"
                                )
class MenuItemType(db.Model):
    __tablename__ = "menu_item_types"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20), nullable=False)
    menu_items = db.relationship("MenuItem", back_populates="menu_item_types")


class Table(db.Model):
    __tablename__ = "tables"
    id = db.Column(db.Integer, primary_key=True)
    number = db.Column(db.Integer, nullable=False, unique=True)
    capacity = db.Column(db.Integer, nullable=False)


class Order(db.Model):
    __tablename__ = "orders"
    id = db.Column(db.Integer, primary_key=True)
    employee_id = db.Column(db.Integer, db.ForeignKey("employees.id"), nullable=False)
    table_id = db.Column(db.Integer, db.ForeignKey("tables.id"), nullable=False)
    finished = db.Column(db.Boolean, nullable=False)
    order_detail = db.relationship("OrderDetail", back_populates="order")


class OrderDetail(db.Model):
    __tablename__ = "order_details"
    id = db.Column(db.Integer, primary_key=True)
    order_id = db.Column(db.Integer, db.ForeignKey("orders.id"), nullable=False)
    menu_item_id = db.Column(db.Integer, db.ForeignKey("menu_items.id"), nullable=False)
    order = db.relationship("Order", back_populates="order_detail")
    menu_item = db.relationship("MenuItem", back_populates="order_detail")


association_table = Table('association', Base.metadata,
    Column('left_id', Integer, ForeignKey('left.id')),
    Column('right_id', Integer, ForeignKey('right.id'))
)

class Parent(Base):
    __tablename__ = 'left'
    id = Column(Integer, primary_key=True)
    children = relationship(
        "Child",
        secondary=association_table,
        back_populates="parents")

class Child(Base):
    __tablename__ = 'right'
    id = Column(Integer, primary_key=True)
    parents = relationship(
        "Parent",
        secondary=association_table,
        back_populates="children")
