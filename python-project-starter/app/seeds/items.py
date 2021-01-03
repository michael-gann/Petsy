from app.models import db, Item


def seed_items():

    demo1 = Item(sellerId=1, name='''Modern Dog House, Wooden Pet House, Dog Bed, Dog
Crate, Dog Kennel, Wood Dog House, Pet House, Pet
Furniture, Dog Furniture, WLO''', description='''
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

Gazenfer''', price=199.00, imgurl='https://www.contemporist.com/wp-content/uploads/2018/09/modern-dog-house-wood-green-roof-040918-1255-01-800x534.jpg', categoryId=2)

    demo2 = Item(sellerId=1, name='''Engraved leather dog collar, Personalized dog collar,
Personalized leather dog collar, cat collar, leather cat
collar, personalized collar''', description='''✦Nice to know
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
the most comfortable fit.''', price=14.62, imgurl='https://images-na.ssl-images-amazon.com/images/I/71u57aBUBOL._SL1200_.jpg', categoryId=2)

    demo3 = Item(sellerId=1, name='''Personalized Dog Bandana - Custom Dog Bandana -
Buffalo Plaid Dog Bandana - Pet Bandana - Flannel Dog
Bandana - Dog Bandana - Dog Scarf''', description='''Red/Black Buffalo Plaid tie dog Bandana
Personalized with your Dog’s Name or Nickname!

100% soft cotton / Snuggle Flannel

Handmade and hand sewn! All bandanas have a finished
over lock edge.''', price=15.00, imgurl='https://images-na.ssl-images-amazon.com/images/I/71imNxr9t7L._AC_SY450_.jpg', categoryId=2)

    demo4 = Item(sellerId=1, name='''5 Large Yak Cheese Dog Treat - Long Lasting, Natural
Dental Chew, Large(5-packs variety stick), 1 POUND oz.
for most dogs under 55 lbs''', description='''Himalayan Cheese Dog Treat, Long Lasting, Hard
Cheese Bone, Natural Dental Chew, Large Size, Suitable
for Dogs under 55 lbs. Tibetan Dog Chew Yak Cheese
Himalayan Chew - Himalayan Yak Milk - Natural Yak Chew,
Long Lasting Dog Treats for Aggressive Chewers ,
5 stick per pack''', price=25.00, imgurl='https://www.jimhodgesdogtraining.com/wp-content/uploads/2014/09/Buy-Himalayn-Dog-Chew.jpg', categoryId=2)

    demo5 = Item(sellerId=2, name='''Cat Toys Baguette Catnip Cat Toys Birthday Cat Gifts
Cat Toys Cat Gifts for Cat Lover Gifts Cat Toy Cat Toy
Crazy Cat Lady Gifts Cat Treats''', description='''Felt baguette cat toy filled with organic
catnip, handmade with love in Canada. This adorable
catnip toy will make a purrfect gift for cats
and cat lovers. :)''', price=13.00, imgurl='https://images-na.ssl-images-amazon.com/images/I/61za936W3bL._SY500_.jpg', categoryId=2)

    demo6 = Item(sellerId=2, name='''Adjustable Scratching Climbing Tree |Cat Toy
Protecting Furniture| Floor to Ceiling Climbing Pole''', description='''Climbing tree features a 3 tier activity
platform in varying forms including scratching areas
offering endless fun time to climb, play and rest.
Perfect for kittens or smaller cats.''', price=95.20, imgurl='https://cdn.shopify.com/s/files/1/0584/7261/products/1_d2f11d4a-de8f-4151-affa-c317713bc9cf_large.jpg?v=1541996885', categoryId=2)

    demo7 = Item(sellerId=2, name='''Cat toy ,Realistic flipping fish cat toy,
rechargeable simulation fish''', description='''Keep your cat active with this gift that keeps
on giving: A realistic, rechargeable flipping fish.
The tail moves when your cat touches the fish.
A simulation cat toy made with cotton and a refillable
catnip pouch.
Washable but battery inside needs
to be removed first.''', price=18.90, imgurl='https://x4j5u6e5.rocketcdn.me/wp-content/uploads/2020/01/0-52a33d.jpeg', categoryId=2)

    demo8 = Item(sellerId=2, name='''Soft Long Plush Cat Dog Bed, Marshmellow Donut Cat
Bed Fall and Winter Self Warming Indoor Round Pet Perch
House Cushion Bed''', description='''The fall and winter months are coming, and
with the chilly winds, it's time for you to get a plush
bed for your pet. Make your cat feel warm and cozy like
spring even on cold winter days.''', price=48.60, imgurl='https://images-na.ssl-images-amazon.com/images/I/71RkaSEY0zL._AC_SL1500_.jpg', categoryId=2)

    demo9 = Item(sellerId=3, name='''Customized Dog Socks - Put Your Cute Dog on Custom
Socks, Dog Lovers, Dog GIft, Cute Dog Personalized, Dog
Gift Socks, Fathers Day''', description='''Get custom socks with your very own fur babies
face on them! They make the perfect gift for anyone who
loves their dog! Perfect for any holiday, birthday, or
anniversary! Handmade by local part time moms in
Portland, Oregon every pair is made to order.''', price=24.99, imgurl='https://images-na.ssl-images-amazon.com/images/I/61Y4WZTP5yL._AC_UL1200_.jpg', categoryId=2)

    demo10 = Item(sellerId=3, name='''HEAVY DUTY Dog Tactical Collar with Handle K9
Military Training Width 1.5"
for Medium Large Pet M - XXL''', description='''HEAVY DUTY: High quality durable materials
which include ITW Nexus buckles used in most military
gear around the world. 1.5 inch wide military grade
polyamide webbing sewn into two layers for extra
toughness. This tactical collar near-unbreakable collar:
tear and wear proof, break and snap proof. Machine
washing at low temp would not do it any damage!''', price=25.00, imgurl='https://www.modernicon.us/wp-content/uploads/2018/04/3rigid-blk.jpg', categoryId=2)

    demo11 = Item(sellerId=4, name='''Luxury Pet Harness and Leash''', description='''Handmade
Materials: leather, fabric, denim Harness adjustable and Leash include
4 size available:
Size S for pet 3.3-5.5lbs
Size M for 5.6-8.8lbs
Size L for 8.9-13.2lbs
Size XL for 13.2-18.7lbs''', price=499.00, imgurl='https://i.etsystatic.com/22931559/r/il/8b1ec3/2740830345/il_794xN.2740830345_q4pi.jpg', categoryId=2)

    demo12 = Item(sellerId=4, name='''Flamingo Pet Nest Cat Nest Dog Nest Pet Supplies Pet House''', description='''Flamingo Pet Nest Cat Nest Dog Nest Pet Supplies Pet House

Material: Cloth
Product Category: Pet Nest

size(cm) Bottom length - Bottom width - Inner length - Inner width - Bottom height - Height
S 31 27 16 13 6 30
L 55 45 30 21 8 30

''', price=50.00, imgurl='https://i.etsystatic.com/26796456/r/il/be4c78/2753517670/il_794xN.2753517670_g9cs.jpg', categoryId=2)

    demo13 = Item(sellerId=3, name='''Ethical Pet Laser Exerciser Original 2 in 1 Dog & Cat Toy''', description='''Unleash your pet's inner tiger with the Ethical Pet Laser Exerciser Original 2 in 1 Dog & Cat Toy. Point the laser at the floor or wall and let your pet chase and attempt to capture its elusive prey.

''', price=15.00, imgurl='https://img.chewy.com/is/image/catalog/71427_MAIN._AC_SL400_V1534452176_.jpg', categoryId=2)

    demo14 = Item(sellerId=3, name='''Squeaking Colorful Tennis Ball Dog Toy, 3-Pack''', description='''Whether you’re playing singles or doubles, these squeaking tennis balls are sure to turn up the fun. They provide the bouncing action and loud squeaking dogs love—in fun color combinations! Unlike regular tennis balls though, these are covered with non-abrasive felt that’s gentle on dogs’ teeth and gums when they catch them. Get your pup chasing after them for daily play and exercise.''',
                  price=20.00, imgurl='https://images-na.ssl-images-amazon.com/images/I/81k2i0vdo6L._AC_SX466_.jpg', categoryId=2)

    demo15 = Item(sellerId=4, name='''Rope with 5 Knots Dog Toy''', description='''
Let the games begin with this knotty, twisty, brightly colored fetch toy. This rope toy is made from a cotton/poly blend and is perfect for everyday play, at home or at the park. The knots add the fun variety dogs love, and make it easy to grip, too. Bring out the big dogs—this oversized rope toy is specially sized for larger breeds.''', price=25.00, imgurl='https://cdn.agradiservices.net/products/555x555/hofman-48219.01ed99.jpg', categoryId=2)

    demo16 = Item(sellerId=4, name='''Cactus Cat Scratching Post''', description='''
There’s nothing prickly about this cool Frisco Cactus Cat Scratching Post! This sisal scratching post is designed to stand up to the power of playtime, and the stable baseboard allows your cactus kitty to stretch, paw, scratch, and climb all day with total support. The top and bottom of the cactus feature a moppy fabric plush material that feels great for cats to nuzzle. This fun cactus shape adds a cute design element to your home, plus it’s super easy to assemble.''', price=95.20, imgurl='https://img.chewy.com/is/image/catalog/214357_MAIN._AC_SL400_V1606832412_.jpg', categoryId=2)

    demo17 = Item(sellerId=3, name='''Topi Sisal Cat Scratcher & Condo, Brown''', description='''Trixie Topi Cat Condo & Scratcher is a stylish piece of cat furniture that combines the best of both worlds—a condo hideaway and a scratching surface. Your cat can sharpen her claws on the sisal scratching surface instead of on your furniture or carpet, giving her a healthy outlet for her scratching instincts. If a nap or place to hide is in order, your cat can crawl inside the kitty condo, covered with plush inside and out. And if she’s feeling spunky, there are even dangling plush toys inside the condo your cat will love to bat and bite at. This comfortable cat condo and scratcher combination is suitable for cats of all ages and activity levels.''', price=18.90, imgurl='https://img.chewy.com/is/catalog/107267_MAIN._AC_SL400_V1478031468_.jpg', categoryId=2)

    demo18 = Item(sellerId=3, name='''New Age Pet Ecoflex InnPlace Crate''', description='''It is the perfect place for your pet when indoors. This ecoFLEX Crate End Table can easily do double duty in many houses where it can serve as an end table in the family room''',
                  price=48.60, imgurl='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQdpwcx7ljWSnBJF8o6GIdB6HohvXWNm9vH_yvdIyw_HfAydOB328gDgqTfTb0Ktu_yHg60XUa_3QehF_pwe-KfKiZpG5Gy-fiwbueM3CYhQL00MpfOMpVmkQ&usqp=CAE', categoryId=2)

    demo19 = Item(sellerId=5, name='''Pet Zone IQ Treat Ball''', description='''The Pet Zone IQ Ball provides a challenging way to dispense treats. ''', price=24.99,
                  imgurl='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTBYoApRdSA3DtBEff_2d6eTsZcJ6UUIILAUp-XEEv7bQyZ7WAnRYlp9-xFzYD6Yrc0RduSYtEteLDBqDAitRKwHqndFWTB5S73-aQcOG8yCcLCKN-rAHkq&usqp=CAE', categoryId=2)

    demo20 = Item(sellerId=5, name='''Pet Carrier, Soft Sling Shoulder Bag''', description='''	
YUDODO Pink Pet Carrier, Soft Sling Shoulder Bag for Small Dog Cat,
5.02
LightInTheBox · Carrier · Dog · Small · Soft Sided
Adjuatable strap measures 33-45inchs long. fits small to large sized person. Before purchasing please measure your pet - LENGTH: neck to base of Made of leather and mesh,''', price=25.00, imgurl='https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTmrFLiVk7cq01F9Nz8p632IAnvR7H4aC5H-tzgIo7y279vXPblhbgBPL14QtarPpF9b3RVZfOvDi8Ba3i7QsJGP_GAuXdTPoBuzwkkpwk&usqp=CAE', categoryId=2)
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
    db.session.add(demo11)
    db.session.add(demo12)
    db.session.add(demo13)
    db.session.add(demo14)
    db.session.add(demo15)
    db.session.add(demo16)
    db.session.add(demo17)
    db.session.add(demo18)
    db.session.add(demo19)
    db.session.add(demo20)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_items():
    db.session.execute('TRUNCATE TABLE items RESTART IDENTITY CASCADE;')
    db.session.commit()
