from app.models import db, Review


def seed_reviews():

    demo_review1 = Review(userId=1, itemId=1, score=4,
                          review='''Arrived a day earlier than expected, and came in a sturdy box. The color and shape were exactly as advertised!''')
    demo_review2 = Review(userId=2, itemId=2, score=5,
                          review='''This water bottle is truly a godsend! I cannot imagine using any other travel water bottle for my pups! It is slim, fits perfectly in a bottle slot in my travel bag!''')
    demo_review3 = Review(userId=3, itemId=3, score=3,
                          review='''I don’t like the amount of pressure you have to use to hold down the button, but besides that decent purchase.''')
    demo_review4 = Review(userId=4, itemId=4, score=5, review='''I\'ve had a cheaper version of this before but the lock on it was not well made and eventually the seal went. However our dogs love the design and it\'s a very easy and convenient way to carry water on a walk!''')
    demo_review5 = Review(userId=5, itemId=5, score=1,
                          review='''Bottle is no good, the little switch to lock the bottle is extremely stiff, so most of the time I can’t shut it.. So far its leaked pretty often into my backpack and I\'m very unhappy about this.''')
    demo_review6 = Review(userId=6, itemId=6, score=4, review='''Super stylish bandana! The listing says its for dogs but my cat is still swagging in it!''')
    demo_review7 = Review(userId=7, itemId=7, score=5, review='''Wow, these yak treats hit different! My dog just cant get enough of them, he's actually been listening! Definitely a life changer and saver!''')
    demo_review8 = Review(userId=8, itemId=8, score=5, review='''Purchased this for my kitten since it was their birthday, and they love it! Been playing with it all day, I think they forgot I exist anymore!''')
    demo_review9 = Review(userId=9, itemId=9, score=4, review='''This climbing tree is the best! Foundation is strong, and my cat is scartching it nonstop! Great buy!''')
    demo_review10 = Review(userId=10, itemId=10, score=3, review='''HIGHLY recommend this dog bed, its super soft and well made! Quality material and will keep your furry friends warm and cozy!''')
    db.session.add(demo_review1)
    db.session.add(demo_review2)
    db.session.add(demo_review3)
    db.session.add(demo_review4)
    db.session.add(demo_review5)
    db.session.add(demo_review6)
    db.session.add(demo_review7)
    db.session.add(demo_review8)
    db.session.add(demo_review9)
    db.session.add(demo_review10)
    db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE reviews;')
    db.session.commit()
