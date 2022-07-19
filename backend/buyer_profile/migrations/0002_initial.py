

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('buyer_profile', '0001_initial'),
        ('item', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='buyerprofilemodel',
            name='favourite_items',
            field=models.ManyToManyField(to='item.itemmodel'),
        ),
    ]
