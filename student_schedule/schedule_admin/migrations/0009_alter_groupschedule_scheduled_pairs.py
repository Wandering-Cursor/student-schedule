# Generated by Django 5.1.3 on 2024-11-30 09:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('schedule_admin', '0008_groupschedule_for_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='groupschedule',
            name='scheduled_pairs',
            field=models.ManyToManyField(blank=True, to='schedule_admin.scheduledpair', verbose_name='Scheduled Pairs'),
        ),
    ]
