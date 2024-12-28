# Generated by Django 5.1.3 on 2024-12-01 10:41

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("schedule_admin", "0012_alter_photoschedulephoto_file"),
    ]

    operations = [
        migrations.RemoveConstraint(
            model_name="groupschedule",
            name="unique_group_schedule",
        ),
        migrations.AddConstraint(
            model_name="groupschedule",
            constraint=models.UniqueConstraint(
                fields=("group", "for_date"), name="unique_group_schedule"
            ),
        ),
    ]
