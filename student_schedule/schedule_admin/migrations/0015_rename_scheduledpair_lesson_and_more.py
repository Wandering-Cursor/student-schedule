# Generated by Django 5.1.4 on 2024-12-28 11:40

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("schedule_admin", "0014_user_related_group"),
    ]

    operations = [
        migrations.RenameModel(
            old_name="ScheduledPair",
            new_name="Lesson",
        ),
        migrations.RenameModel(
            old_name="PhotoSchedulePhoto",
            new_name="SchedulePhoto",
        ),
        migrations.AlterModelOptions(
            name="lesson",
            options={
                "ordering": ["pair", "teacher", "room", "name"],
                "verbose_name": "Lesson",
                "verbose_name_plural": "Lessons",
            },
        ),
        migrations.RemoveConstraint(
            model_name="lesson",
            name="unique_scheduled_pair",
        ),
        migrations.RenameField(
            model_name="schedule",
            old_name="photo_schedules",
            new_name="photo_schedule",
        ),
        migrations.RemoveField(
            model_name="groupschedule",
            name="scheduled_pairs",
        ),
        migrations.AddField(
            model_name="groupschedule",
            name="lessons",
            field=models.ManyToManyField(
                blank=True, to="schedule_admin.lesson", verbose_name="Lessons"
            ),
        ),
        migrations.AddConstraint(
            model_name="lesson",
            constraint=models.UniqueConstraint(
                fields=("pair", "name", "teacher", "room"), name="unique_lesson"
            ),
        ),
    ]
