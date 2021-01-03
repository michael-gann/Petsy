from app.models import db, Review


def seed_reviews():

    demo_review1 = Review(userId=1, itemId=1, score=4,
                          review='''Arrived a day earlier than expected, and came in a sturdy box. The color and shape were exactly as advertised!''')
    demo_review2 = Review(userId=2, itemId=2, score=5,
                          review='''This is truly a godsend! I cannot imagine using any other travel item for my pups! It is slim, fits perfectly in my travel bag!''')
    demo_review3 = Review(userId=3, itemId=3, score=3,
                          review='''I don’t like the amount of pressure you have to use to hold down the button, but besides that decent purchase.''')
    demo_review4 = Review(userId=4, itemId=4, score=5, review='''I\'ve had a cheaper version of this before but the lock on it was not well made and eventually the seal went. However our dogs love the design and it\'s a very easy and convenient way to carry water on a walk!''')
    demo_review5 = Review(userId=1, itemId=5, score=1,
                          review='''Item is no good, the little switch to lock the bottle is extremely stiff, so most of the time I can’t shut it.. So far its leaked pretty often into my backpack and I\'m very unhappy about this.''')
    demo_review6 = Review(userId=1, itemId=3, score=4,
                          review='''Super stylish bandana! The listing says its for dogs but my cat is still swagging in it!''')
    demo_review7 = Review(userId=2, itemId=4, score=5,
                          review='''Wow, these yak treats hit different! My dog just cant get enough of them, he's actually been listening! Definitely a life changer and saver!''')
    demo_review8 = Review(userId=3, itemId=5, score=5,
                          review='''Purchased this for my kitten since it was their birthday, and they love it! Been playing with it all day, I think they forgot I exist anymore!''')
    demo_review9 = Review(userId=4, itemId=6, score=4,
                          review='''This climbing tree is the best! Foundation is strong, and my cat is scartching it nonstop! Great buy!''')
    demo_review10 = Review(userId=5, itemId=8, score=3,
                           review='''HIGHLY recommend this dog bed, its super soft and well made! Quality material and will keep your furry friends warm and cozy!''')
    demo_review11 = Review(userId=2, itemId=1, score=3,
                           review="I really hate to complain, but I will. This wooden dog house is mediocre at best. No mini-bar, no airconditioning, like is my dog some forest dwelling animal? No. He's a person, and his house should reflect that.")
    demo_review12 = Review(userId=3, itemId=11, score=5,
                           review='''Great Harness! I got tons of compliment and my dog loves it!''')
    demo_review13 = Review(userId=2, itemId=12, score=5,
                           review='''These flamingo nest houses are the best! Super soft as well!''')
    demo_review14 = Review(userId=5, itemId=13, score=5,
                           review='''Super ethical and fun to play with for your pets! Not just for dogs but cats included!''')
    demo_review15 = Review(userId=4, itemId=14, score=5,
                           review='''These squeaky balls may be annoying at first, but you'll come to realize your dog will love them!''')
    demo_review16 = Review(userId=2, itemId=15, score=5,
                           review='''My pet wears me out because all they want to do is play and tug on this rope toy I got them! I guess thats a good thing  though!''')
    demo_review17 = Review(userId=3, itemId=16, score=5,
                           review='''Cactus scratching post is on point, super stylish and blends in at the home. Cats been scratching it all day too.''')
    demo_review18 = Review(userId=2, itemId=17, score=5,
                           review='''This cool cat house will keep your kitty nice and cozy!''')
    demo_review19 = Review(userId=4, itemId=18, score=5,
                           review='''Need a sturdy but quality crate for you animal friends? This ones definitely recommended, I use it all the time for travel purposes''')
    demo_review20 = Review(userId=3, itemId=19, score=5,
                           review='''This toy is such a great idea! I think its actually making my dog smarter!''')
    demo_review21 = Review(userId=2, itemId=20, score=5,
                           review='''Tired of the cheap slings, so this bag caught my attention immediately''')
    demo_review21 = Review(userId=4, itemId=1, score=5,
                           review='''MY PUPPER IS OFFICIALLY BAD AND BOUJEE!!''')
    demo_review22 = Review(userId=3, itemId=2, score=5,
                           review='''These tribal themed collars are truly the wave!''')
    demo_review23 = Review(userId=1, itemId=3, score=5,
                           review='''Shoot for the stars, Aim for the moon''')
    demo_review24 = Review(userId=2, itemId=4, score=5,
                           review='''They dont look yummy, but my dog definitely thinks so!''')
    demo_review25 = Review(userId=2, itemId=5, score=5,
                           review='''This baguette makes me crave french bread.''')
    demo_review26 = Review(userId=3, itemId=6, score=5,
                           review='''Love this scratching post, its been lasting me quite some time!''')
    demo_review27 = Review(userId=4, itemId=7, score=5,
                           review='''This flipping fish looks so real! It gets my kitten every time! Its so funny when he flinches!''')
    demo_review28 = Review(userId=1, itemId=8, score=5,
                           review='''This dog bed is honestly the best.  Wish they had one in human size..''')
    demo_review29 = Review(userId=4, itemId=9, score=5,
                           review='''High socks with my dog on them? SHUT UP AND TAKE MY MONEY!''')
    demo_review30 = Review(userId=3, itemId=10, score=5,
                           review='''This heavy duty collar is definitely great for my pitbull!''')
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
    db.session.add(demo_review11)
    db.session.add(demo_review12)
    db.session.add(demo_review13)
    db.session.add(demo_review14)
    db.session.add(demo_review15)
    db.session.add(demo_review16)
    db.session.add(demo_review17)
    db.session.add(demo_review18)
    db.session.add(demo_review19)
    db.session.add(demo_review20)
    db.session.add(demo_review21)
    db.session.add(demo_review22)
    db.session.add(demo_review23)
    db.session.add(demo_review24)
    db.session.add(demo_review25)
    db.session.add(demo_review26)
    db.session.add(demo_review27)
    db.session.add(demo_review28)
    db.session.add(demo_review29)
    db.session.add(demo_review30)
    db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE TABLE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
