from flask_wtf import FlaskForm
from wtforms import IntegerField, TextAreaField
from wtforms.validators import DataRequired
from app.models import Review


class ReviewForm(FlaskForm):
    userId = IntegerField("userId", validators=[DataRequired()])
    itemId = IntegerField("itemId", validators=[DataRequired()])
    score = IntegerField("score", validators=[DataRequired()])
    review = TextAreaField("review", validators=[DataRequired()])
