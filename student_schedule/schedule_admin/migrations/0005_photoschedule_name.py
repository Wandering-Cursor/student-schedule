# Generated by Django 5.1.3 on 2024-11-23 14:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('schedule_admin', '0004_alter_photoschedule_uuid_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='photoschedule',
            name='name',
            field=models.CharField(blank=True, verbose_name='Name'),
        ),
    ]
