from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():

    demo = User(firstName='Demo', lastName="Lition", email='demo@aa.io', password='password')
    demo1 = User(firstName='Flash', lastName='Sales', email='support@flashsales.com', password='password')
    demo2 = User(firstName='Animals', lastName='RUs', email='help@animalsrus.com', password='password')
    demo3 = User(firstName='Puppy', lastName='Pals', email='info@puppypals.com', password='password')
    demo4 = User(firstName='Feline', lastName='Friends', email='contact@felinefriends.com', password='password')

    db.session.add(demo)
    db.session.add(demo1)
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.add(demo4)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_users():
    db.session.execute('TRUNCATE users CASCADE;')
    db.session.commit()
