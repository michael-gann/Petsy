from app.models import db, Category

def seed_categories():

    demo = Category(type='Pet')
    demo2 = Category(type="Item")

    db.session.add(demo)
    db.session.add(demo2)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key
def undo_categories():
    db.session.execute('TRUNCATE categories;')
    db.session.commit()
