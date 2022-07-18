# Generated by Django 4.0.6 on 2022-07-18 13:02

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('seller_profile', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='sellerprofilemodel',
            name='user',
            field=models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='seller_profile', to=settings.AUTH_USER_MODEL),
        ),
    ]
