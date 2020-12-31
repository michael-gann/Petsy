from app.models import db, Review


def seed_reviews():

    demo_review1 = Review(userId=4, itemId=4, score=4,
                          review='''Arrived a day earlier than expected, and came in a sturdy box. The color and shape were exactly as advertised!''')
    demo_review2 = Review(userId=3, itemId=3, score=5,
                          review='''This is truly a godsend! I cannot imagine using any other travel item for my pups! It is slim and fits perfectly in my bag!''')
    demo_review3 = Review(userId=3, itemId=3, score=3,
                          review='''I don’t like the amount of pressure you have to use to hold down the button, but besides that decent purchase.''')
    demo_review4 = Review(userId=5, itemId=5, score=5, review='''I\'ve had a cheaper version of this before but the lock on it was not well made and eventually the seal went. However our dogs love the design and it\'s a very easy and convenient way to carry water on a walk!''')
    demo_review5 = Review(userId=4, itemId=4, score=1,
                          review='''Product is no good, the little switch to lock it is extremely stiff, so most of the time I can’t shut it.. So far its leaked pretty often into my backpack and I\'m very unhappy about this.''')
    demo_review6 = Review(userId=1, itemId=1, score=4,
                          review='''Super stylish bandana! The listing says its for dogs but my cat is still swagging in it!''')
    demo_review7 = Review(userId=1, itemId=1, score=5,
                          review='''Wow, these yak treats hit different! My dog just cant get enough of them, he's actually been listening! Definitely a life changer and saver!''')
    demo_review8 = Review(userId=2, itemId=2, score=5,
                          review='''Purchased this for my kitten since it was their birthday, and they love it! Been playing with it all day, I think they forgot I exist anymore!''')
    demo_review9 = Review(userId=2, itemId=2, score=4,
                          review='''This climbing tree is the best! Foundation is strong, and my cat is scartching it nonstop! Great buy!''')
    demo_review10 = Review(userId=2, itemId=2, score=3,
                           review='''HIGHLY recommend this dog bed, its super soft and well made! Quality material and will keep your furry friends warm and cozy!''')
    demo_review11 = Review(userId=1, itemId=1, score=3,
                           review="I really hate to complain, but I will. This wooden dog house is mediocre at best. No mini-bar, no airconditioning, like is my dog some forest dwelling animal? No. He's a person, and his house should reflect that.")
    demo_review12 = Review(userId=4, itemId=4, score=4,
                          review=''' For the price you can't beat it. My pet's very entertained by it, particularly when it's dark. I have noticed that she's way more active with it if we are not watching her like a hawk and leave her to her own devices.''')
    demo_review13 = Review(userId=3, itemId=3, score=5,
                          review='''OMG! My kitties are in LOVE!''')
    demo_review14 = Review(userId=5, itemId=5, score=5, review='''Great pet bed for medium and large cats and multiples!''')
    demo_review15 = Review(userId=4, itemId=4, score=1,
                          review=''' I find the darn thing to be a little annoying. It's pretty noisy and it's constantly getting stuck...on the thresholds, under the cabinets, under the couch, up against the wall.''')
    demo_review16 = Review(userId=1, itemId=1, score=4,
                          review='''Our furry friend took to this immediately and now we have created a monster in that we can't get her out of it. We literally don't see her much any more because she wants to go upstairs and sleep in her bed. I thought this would be a waste of money as our buddy is more likely to want to sleep on anything else (like the box it came in, a plastic bag, etc.) But, my wife insisted and the rest is history.''')
    demo_review17 = Review(userId=1, itemId=1, score=5,
                          review='''Keeps my pets entertained! I was excited to see it even moves around on my carpet! The size and sturdiness gives me hope my cat won’t break it as easily.''')
    demo_review18 = Review(userId=3, itemId=3, score=5,
                          review='''Well-made pet bed at a great price - Highly recommended!''')
    demo_review19 = Review(userId=2, itemId=2, score=4,
                          review='''I ordered two of these for my two 10-pound poodle mix dogs. After washing them on the cold-water hand-wash cycle, both had the side seams come apart which resulted in stuffing all over the washing machine. I returned them and they sent me two new ones.
''')
    demo_review20 = Review(userId=4, itemId=4, score=3,
                           review='''Cool toy, BUT BEWARE of STRONG laser, reflective floors and animal's eyes''')
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
    db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE TABLE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
