# Generated by Django 3.2.9 on 2023-11-06 07:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0003_course_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='slug',
            field=models.SlugField(default='', unique=True),
        ),
    ]
