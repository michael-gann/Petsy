from flask.cli import AppGroup
from .users import seed_users, undo_users
from .items import seed_items, undo_items
from .pets import seed_pets, undo_pets
from .reviews import seed_reviews, undo_reviews
from .categories import seed_categories, undo_categories

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_categories()
    seed_users()
    seed_items()
    seed_reviews()
    seed_pets()
    # Add other seed functions here

# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_categories()
    undo_users()
    undo_items()
    undo_reviews()
    undo_pets()


    # Add other undo functions here
