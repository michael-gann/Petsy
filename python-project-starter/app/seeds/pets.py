from app.models import Pet, db

def seed_pets():

    pet1 = Pet(sellerId=1,
               name='Po the Pug',
               description="She's a wonderful girl, with a sparkling personality & a powerful love of blankets.",
               price=335,
               imgurl="https://cdn.pixabay.com/photo/2016/02/19/11/53/pug-1210025_1280.jpg",
               categoryId=1,
               breed='Pug',
               age=2,
               weight=16
               gender='Female'
               )
    pet2 = Pet(sellerId=1,
               name='Dixie',
               description="He loves the snow, the sun, any place where he can run.",
               price=570,
               imgurl="https://cdn.pixabay.com/photo/2020/11/24/17/54/australian-shepherd-5773397_1280.jpg",
               categoryId=1,
               breed='Australian Shepherd',
               age=1,
               weight=59
               gender='Male'
               )
    

    db.session.add(demo)
    db.session.add(demo2)

    db.session.commit()
