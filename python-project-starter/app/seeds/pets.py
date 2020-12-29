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

    db.session.commit()

def undo_pets():
    db.session.execute('TRUNCATE pets;')
    db.session.commit()
