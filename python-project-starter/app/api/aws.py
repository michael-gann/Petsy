from flask import Blueprint
import logging
from aws_keys import access_key, secret_access_key
from botocore.exceptions import ClientError


import boto3
import os

aws = Blueprint('aws', __name__)

s3 = boto3.resource('s3',
                    aws_access_key_id=access_key,
                    aws_secret_access_key=secret_access_key)

# # Print out bucket names
# for bucket in s3.buckets.all():
#     print(bucket.name)


@aws.route('/', methods=['POST'])
def upload_file(file_name, bucket='petsy-bucket', object_name=None):
    """
    :param file_name: File to upload
    :param bucket: Bucket to upload to
    :param object_name: S3 object name. If not specified then file_name is used
    :return: True if file was uploaded, else False
    """

    # If S3 object_name was not specified, use file_name
    if object_name is None:
        object_name = file_name

    # Upload the file
    s3_client = boto3.client('s3',
                             aws_access_key_id=access_key,
                             aws_secret_access_key=secret_access_key)
    try:
        response = s3_client.upload_file(file_name, bucket, object_name)
    except ClientError as e:
        logging.error(e)
        return False
    return True
