# Generated by Django 4.0.5 on 2022-07-15 13:51

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('wishlist', '0002_remove_wishlistmodel_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='wishlistmodel',
            name='item',
        ),
    ]