# Generated by Django 3.2.9 on 2023-11-06 07:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0007_course_slug'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='slug',
            field=models.CharField(max_length=50),
        ),
    ]
