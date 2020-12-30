from app.models import db, Item


def seed_items():

    demo1 = Item(sellerId=1,
                 name='''Modern Dog House, Wooden Pet House, Dog Bed, Dog
                      Crate, Dog Kennel, Wood Dog House, Pet House, Pet
                      Furniture, Dog Furniture, WLO''',
                 description='''
                      All our productions are manufactured under
                      high level Hygiene environment

                      -Orders
                      I usually keep the raw wood of my products in stock. I
                      complete your orders within 2 - 7 business days from the
                      time I receive your order. I make every one of my
                      products with care in my house. I have limited help
                      therefore occasionally orders maybe delayed by a few
                      days. In such a case, I will inform you right away.
                      Please see photos for product sizes and color options.
                      You can request products in different sizes non-standard,
                      but I will charge an additional fee due to need of
                      expensive preparation of new molds. Additional fee
                      mostly 10% to the total value of the product.

                      Thank you very much for choosing me!

                      Gazenfer''',
                 price=199.00,
                 imgurl='https://source.unsplash.com/random/300x200',
                 categoryId=2)

    demo2 = Item(sellerId=1,
                 name='''Engraved leather dog collar, Personalized dog collar,
                      Personalized leather dog collar, cat collar, leather cat
                      collar, personalized collar''',
                 description='''✦Nice to know
                      Designed to be classy, but outstandingly beautiful.
                      Buckle and unbuckle with ease.
                      Free machine engraving of the buckle.
                      For boys and girls.
                      Ready for heavy-duty service, every day!

                      ✦Add some extra cuteness with a custom dog tag:
                      https://www.etsy.com/listing/792364477/personalized-picture-dog-tag-name-dog


                      ✦Details that matter
                      It's super easy to unbuckle, unlike other leather collars
                      which are belt-like.
                      The light metal buckle with the personal information is
                      beautifully machined, not cheaply engraved with the
                      laser. I'm fascinated with the concept of precision
                      machining, so I strove to deliver the best quality here.
                      All hardware is designed specifically to the highest
                      quality standards.

                      ✦Size - IMPORTANT.
                      This is the total girth/circumference of the collar.
                      Make sure the neck girth is smaller than the size of the
                      collar. If the neck girth and collar girth is the same -
                      the collar won't fit. Always choose a size bigger if in
                      between sizes.

                      You'll be able to easily adjust the collar to find
                      the most comfortable fit.''',
                 price=14.62,
                 imgurl='https://source.unsplash.com/random/300x200',
                 categoryId=2)

    demo3 = Item(sellerId=1,
                 name='''Personalized Dog Bandana - Custom Dog Bandana -
                      Buffalo Plaid Dog Bandana - Pet Bandana - Flannel Dog
                      Bandana - Dog Bandana - Dog Scarf''',
                 description='''Red/Black Buffalo Plaid tie dog Bandana
                      Personalized with your Dog’s Name or Nickname!

                      100% soft cotton / Snuggle Flannel

                      Handmade and hand sewn! All bandanas have a finished
                      over lock edge.''',
                 price=15.00,
                 imgurl='https://source.unsplash.com/random/300x200',
                 categoryId=2)

    demo4 = Item(sellerId=1,
                 name='''5 Large Yak Cheese Dog Treat - Long Lasting, Natural
                      Dental Chew, Large(5-packs variety stick), 1 POUND oz.
                      for most dogs under 55 lbs''',
                 description='''Himalayan Cheese Dog Treat, Long Lasting, Hard
                      Cheese Bone, Natural Dental Chew, Large Size, Suitable
                      for Dogs under 55 lbs. Tibetan Dog Chew Yak Cheese
                      Himalayan Chew - Himalayan Yak Milk - Natural Yak Chew,
                      Long Lasting Dog Treats for Aggressive Chewers ,
                      5 stick per pack''',
                 price=25.00,
                 imgurl='https://source.unsplash.com/random/300x200',
                 categoryId=2)

    demo5 = Item(sellerId=2,
                 name='''Cat Toys Baguette Catnip Cat Toys Birthday Cat Gifts
                      Cat Toys Cat Gifts for Cat Lover Gifts Cat Toy Cat Toy
                      Crazy Cat Lady Gifts Cat Treats''',
                 description='''Felt baguette cat toy filled with organic
                      catnip, handmade with love in Canada. This adorable
                      catnip toy will make a purrfect gift for cats
                      and cat lovers. :)''',
                 price=13.00,
                 imgurl='https://source.unsplash.com/random/300x200',
                 categoryId=2)

    demo6 = Item(sellerId=2,
                 name='''Adjustable Scratching Climbing Tree |Cat Toy
                      Protecting Furniture| Floor to Ceiling Climbing Pole''',
                 description='''Climbing tree features a 3 tier activity
                      platform in varying forms including scratching areas
                      offering endless fun time to climb, play and rest.
                      Perfect for kittens or smaller cats.''',
                 price=95.20,
                 imgurl='https://source.unsplash.com/random/300x200',
                 categoryId=2)

    demo7 = Item(sellerId=2,
                 name='''Cat toy ,Realistic flipping fish cat toy,
                      rechargeable simulation fish''',
                 description='''Keep your cat active with this gift that keeps
                      on giving: A realistic, rechargeable flipping fish.
                      The tail moves when your cat touches the fish.
                      A simulation cat toy made with cotton and a refillable
                      catnip pouch.
                      Washable but battery inside needs
                      to be removed first.''',
                 price=18.90,
                 imgurl='https://source.unsplash.com/random/300x200',
                 categoryId=2)

    demo8 = Item(sellerId=2,
                 name='''Soft Long Plush Cat Dog Bed, Marshmellow Donut Cat
                      Bed Fall and Winter Self Warming Indoor Round Pet Perch
                      House Cushion Bed''',
                 description='''The fall and winter months are coming, and
                      with the chilly winds, it's time for you to get a plush
                      bed for your pet. Make your cat feel warm and cozy like
                      spring even on cold winter days.''',
                 price=48.60,
                 imgurl='https://source.unsplash.com/random/300x200',
                 categoryId=2)

    demo9 = Item(sellerId=3,
                 name='''Customized Dog Socks - Put Your Cute Dog on Custom
                      Socks, Dog Lovers, Dog GIft, Cute Dog Personalized, Dog
                      Gift Socks, Fathers Day''',
                 description='''Get custom socks with your very own fur babies
                      face on them! They make the perfect gift for anyone who
                      loves their dog! Perfect for any holiday, birthday, or
                      anniversary! Handmade by local part time moms in
                      Portland, Oregon every pair is made to order.''',
                 price=24.99,
                 imgurl='https://source.unsplash.com/random/300x200',
                 categoryId=2)

    demo10 = Item(sellerId=3,
                  name='''HEAVY DUTY Dog Tactical Collar with Handle K9
                      Military Training Width 1.5"
                      for Medium Large Pet M - XXL''',
                  description='''HEAVY DUTY: High quality durable materials
                      which include ITW Nexus buckles used in most military
                      gear around the world. 1.5 inch wide military grade
                      polyamide webbing sewn into two layers for extra
                      toughness. This tactical collar near-unbreakable collar:
                      tear and wear proof, break and snap proof. Machine
                      washing at low temp would not do it any damage!''',
                  price=25.00,
                  imgurl='https://source.unsplash.com/random/300x200',
                  categoryId=2)

    db.session.add(demo1)
    db.session.add(demo2)
    db.session.add(demo3)
    db.session.add(demo4)
    db.session.add(demo5)
    db.session.add(demo6)
    db.session.add(demo7)
    db.session.add(demo8)
    db.session.add(demo9)
    db.session.add(demo10)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_items():
    db.session.execute('TRUNCATE TABLE items RESTART IDENTITY CASCADE;')
    db.session.commit()
