# Generated by Django 5.1.3 on 2024-11-23 14:24

import schedule_admin.models.schedule
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('schedule_admin', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='PhotoSchedulePhoto',
            fields=[
                ('uuid', models.UUIDField(primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created At')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Updated At')),
                ('file', models.FileField(upload_to='schedule/photos/', verbose_name='File')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='PhotoSchedule',
            fields=[
                ('uuid', models.UUIDField(primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created At')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Updated At')),
                ('photos', models.ManyToManyField(related_name='photo_schedule_photos', to='schedule_admin.photoschedulephoto', verbose_name='Photos')),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Schedule',
            fields=[
                ('uuid', models.UUIDField(primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='Created At')),
                ('updated_at', models.DateTimeField(auto_now=True, verbose_name='Updated At')),
                ('for_date', models.DateField(default=schedule_admin.models.schedule.get_tomorrow, verbose_name='For Date')),
                ('photo_schedules', models.ManyToManyField(related_name='schedules', to='schedule_admin.photoschedule', verbose_name='Photo Schedules')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
