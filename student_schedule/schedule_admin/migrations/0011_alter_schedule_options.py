# Generated by Django 5.1.3 on 2024-12-01 08:19

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("schedule_admin", "0010_alter_group_specialty"),
    ]

    operations = [
        migrations.AlterModelOptions(
            name="schedule",
            options={
                "ordering": ["for_date"],
                "verbose_name": "Schedule",
                "verbose_name_plural": "Schedules",
            },
        ),
    ]
