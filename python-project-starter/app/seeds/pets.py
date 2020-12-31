from app.models import Pet, db


def seed_pets():

    pet1 = Pet(sellerId=1,
               name='Po the Pug',
               description="She's a wonderful girl, with a sparkling personality & a powerful love of blankets.",
               price=335.00,
               imgurl="https://cdn.pixabay.com/photo/2016/02/19/11/53/pug-1210025_1280.jpg",
               categoryId=1,
               breed='Pug',
               age=2,
               weight=16,
               gender='Female'
               )
    pet2 = Pet(sellerId=1,
               name='Dixon',
               description="He loves the snow, the sun, any place where he can run.",
               price=570.00,
               imgurl="https://cdn.pixabay.com/photo/2020/11/24/17/54/australian-shepherd-5773397_1280.jpg",
               categoryId=1,
               breed='Australian Shepherd',
               age=1,
               weight=59,
               gender='Male'
               )
    pet3 = Pet(sellerId=1,
               name='Fang',
               description="He will eat your children & your heart. But he's very pretty.",
               price=1129.99,
               imgurl="https://cdn.pixabay.com/photo/2018/05/07/10/48/husky-3380548_1280.jpg",
               categoryId=1,
               breed='Siberian Husky',
               age=1,
               weight=113,
               gender='Male'
               )
    pet4 = Pet(sellerId=1,
               name='Luna',
               description="She's as sweet as she looks, great with kids, though not with other dogs. She eats them. Whole.",
               price=934.99,
               imgurl="https://cdn.pixabay.com/photo/2016/02/11/17/00/dog-1194087_1280.jpg",
               categoryId=1,
               breed='Hovawart',
               age=1,
               weight=67,
               gender='Female'
               )
    pet5 = Pet(sellerId=1,
               name='Rusty',
               description="A little fat, a little slow, but man, you seen those eyes? He'll love you to the moon and back.",
               price=235.00,
               imgurl="https://cdn.pixabay.com/photo/2017/06/24/09/13/dog-2437110_1280.jpg",
               categoryId=1,
               breed='Mutt',
               age=1,
               weight=84,
               gender='Male'
               )
    pet6 = Pet(sellerId=1,
               name='Nut (full name Peanut)',
               description="She's hungry all the time, she's great with other dogs, and while she'll take a while to warm up to you, the secret to her heart is pumpkin.",
               price=1349.00,
               imgurl="https://cdn.pixabay.com/photo/2019/05/29/14/16/welsh-corgi-pembroke-4237625_1280.jpg",
               categoryId=1,
               breed='Corgi',
               age=1,
               weight=23,
               gender='Female'
               )
    pet7 = Pet(sellerId=1,
               name='Moxie',
               description="You think honey badger don't care? Moxie gives the phrase a whole new meaning. Pure chill. All awesome.",
               price=649.99,
               imgurl="https://cdn.pixabay.com/photo/2017/09/25/13/14/dog-2785077_1280.jpg",
               categoryId=1,
               breed='Lhasa Apso',
               age=1,
               weight=14,
               gender='Female'
               )
    pet8 = Pet(sellerId=1,
               name='Walter & Bear',
               description="Why would you ever want to own only one of these two magestic boys? They come as a pair, and they'll love you almost as much as they love eachother.",
               price=1459.00,
               imgurl="https://cdn.pixabay.com/photo/2020/04/21/06/41/bulldog-5071407_1280.jpg",
               categoryId=1,
               breed='English Bulldog',
               age=1,
               weight=67,
               gender='Male'
               )
    pet9 = Pet(sellerId=1,
               name='Lola',
               description="High-energy, with heavy tail wags. Anything you do, ever, will be a source of joy for her. If you think you like coming home after a long day now, wait till you can do it with Lola.",
               price=477.00,
               imgurl="https://pixabay.com/photos/dog-face-concentration-cute-canine-1209250/",
               categoryId=1,
               breed='Mutt',
               age=1,
               weight=74,
               gender='Female'
               )
    pet10 = Pet(sellerId=1,
                name='Victoria',
                description="Elegance defined. She enjoys cocktail parties, fine dining, and an occassional fart. Ok, we admit it, she's a gassy girl, but full of love.",
                price=1779.99,
                imgurl="https://cdn.pixabay.com/photo/2017/12/29/10/47/animal-company-3047244_1280.jpg",
                categoryId=1,
                breed='Greyhound',
                age=1,
                weight=59,
                gender='Female'
                )
    pet11 = Pet(sellerId=2,
               name='Myron',
               description="Yappy but full of love! Definitely a people-person, especially if you've got treats!",
               price=1649.99,
               imgurl="https://cdn.pixabay.com/photo/2014/08/10/08/17/dog-414570_960_720.jpg",
               categoryId=1,
               breed='Pomeranian',
               age=1,
               weight=10,
               gender='Male'
               )
    pet12 = Pet(sellerId=2,
               name='Bentley',
               description="Stubborn but who cares? He's adorable! Never quick to get aggressive, and simply wants your love!",
               price=2500.00,
               imgurl="https://cdn.pixabay.com/photo/2018/10/10/20/41/puppy-3738257_960_720.jpg",
               categoryId=1,
               breed='French Bulldog',
               age=1,
               weight=15,
               gender='Male'
               )
    pet13 = Pet(sellerId=2,
               name='Ariel',
               description="With those eyes full of emotion, how could you ever resist not playing with her?",
               price=1229.49,
               imgurl="https://cdn.pixabay.com/photo/2020/12/09/07/17/dog-5816636_960_720.jpg",
               categoryId=1,
               breed='Border Collie',
               age=1,
               weight=27,
               gender='Female'
               )
    pet14 = Pet(sellerId=2,
               name='Kilo',
               description="She may look intimidating, but she's a real big scaredy cat! And she loves blueberries!",
               price=1099.99,
               imgurl="https://cdn.pixabay.com/photo/2020/05/12/17/51/bully-5164227_960_720.jpg",
               categoryId=1,
               breed='Pitbull',
               age=1,
               weight=50,
               gender='Female'
               )
    pet15 = Pet(sellerId=2,
               name='Chewie',
               description="He may seem to growl when you pet him, but that's just his way of saying he loves it!",
               price=720.00,
               imgurl="https://cdn.pixabay.com/photo/2019/09/30/20/54/shi-tzu-4516719_960_720.jpg",
               categoryId=1,
               breed='Shi Tzu',
               age=1,
               weight=15,
               gender='Male'
               )
    pet16 = Pet(sellerId=2,
               name='Henny',
               description="She's charming and she knows it, and she'll get what she wants.. In this case, its dinner.",
               price=1999.99,
               imgurl="https://cdn.pixabay.com/photo/2017/05/21/02/44/labradoodle-2330320_960_720.jpg",
               categoryId=1,
               breed='Labradoodle',
               age=1,
               weight=21,
               gender='Female'
               )
    pet17 = Pet(sellerId=2,
               name='Marshmello',
               description="Meet the world's cutest most smallest pupper in the world! Joking, but you gotta admit he's pretty adorable!",
               price=999.99,
               imgurl="https://cdn.pixabay.com/photo/2015/11/10/20/10/dog-1037702_960_720.jpg",
               categoryId=1,
               breed='Maltese',
               age=0,
               weight=2,
               gender='Male'
               )
    pet18 = Pet(sellerId=3,
               name='Milano',
               description="Shy but longs for attention.. She just wants to open up the right people!",
               price=1799.79,
               imgurl="https://cdn.pixabay.com/photo/2015/12/08/00/52/puppy-1082141_960_720.jpg",
               categoryId=1,
               breed='Labrador Retriever',
               age=0,
               weight=4,
               gender='Female'
               )
    pet19 = Pet(sellerId=3,
               name='Senior',
               description="Hey! Grandpas need love too! Just kidding, he's not that old!",
               price=750.00,
               imgurl="https://cdn.pixabay.com/photo/2016/07/16/20/33/dog-1522644_960_720.jpg",
               categoryId=1,
               breed='Bloodhound',
               age=2,
               weight=60,
               gender='Male'
               )
    pet20 = Pet(sellerId=3,
                name='Marley',
                description="A dog doesnt care if youre rich or poor, educated or illiterate, clever or dull. Give him your heart and he will give you his",
                price=2000.00,
                imgurl="https://cdn.pixabay.com/photo/2019/08/07/14/10/dog-4390884_960_720.jpg",
                categoryId=1,
                breed='Golden Retriever',
                age=1,
                weight=7,
                gender='Male'
                )

    db.session.add(pet1)
    db.session.add(pet2)
    db.session.add(pet3)
    db.session.add(pet4)
    db.session.add(pet5)
    db.session.add(pet6)
    db.session.add(pet7)
    db.session.add(pet8)
    db.session.add(pet9)
    db.session.add(pet10)
    db.session.add(pet11)
    db.session.add(pet12)
    db.session.add(pet13)
    db.session.add(pet14)
    db.session.add(pet15)
    db.session.add(pet16)
    db.session.add(pet17)
    db.session.add(pet18)
    db.session.add(pet19)
    db.session.add(pet20)

    db.session.commit()


def undo_pets():
    db.session.execute('TRUNCATE TABLE pets RESTART IDENTITY CASCADE;')
    db.session.commit()
