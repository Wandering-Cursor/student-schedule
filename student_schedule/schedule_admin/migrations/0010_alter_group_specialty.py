# Generated by Django 5.1.3 on 2024-11-30 09:39

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("schedule_admin", "0009_alter_groupschedule_scheduled_pairs"),
    ]

    operations = [
        migrations.AlterField(
            model_name="group",
            name="specialty",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.PROTECT,
                related_name="groups",
                to="schedule_admin.specialty",
                verbose_name="Specialty",
            ),
        ),
    ]
