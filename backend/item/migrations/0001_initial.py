# Generated by Django 4.0.6 on 2022-07-13 14:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('category', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ItemModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('features', models.TextField()),
                ('box_items', models.TextField()),
                ('stock', models.PositiveIntegerField()),
                ('price', models.PositiveIntegerField()),
                ('image', models.ImageField(upload_to='')),
                ('video', models.FileField(upload_to='')),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='category.categorymodel')),
            ],
        ),
    ]
