# Generated by Django 5.1.3 on 2024-12-01 10:31

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("schedule_admin", "0011_alter_schedule_options"),
    ]

    operations = [
        migrations.AlterField(
            model_name="photoschedulephoto",
            name="file",
            field=models.FileField(
                max_length=255, upload_to="schedule/photos/", verbose_name="File"
            ),
        ),
    ]
