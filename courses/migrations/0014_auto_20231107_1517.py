# Generated by Django 3.2.9 on 2023-11-07 12:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0013_course_iscat3'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='course',
            name='isCat1',
        ),
        migrations.RemoveField(
            model_name='course',
            name='isCat2',
        ),
        migrations.RemoveField(
            model_name='course',
            name='isCat3',
        ),
        migrations.AddField(
            model_name='course',
            name='categories',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='courses.category'),
        ),
    ]
