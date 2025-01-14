from schedule_admin.models.group import Group
from schedule_admin.models.specialty import Specialty

specialties = (
    {
        "name": "G10",
        "full_name": "Комп’ютерно-інтегровані технології, дистанційне керування та робототехніка",
    },
    {
        "name": "G13",
        "full_name": "Машинобудування",
    },
    {
        "name": "C8",
        "full_name": "Бібліотечна, музейна та архівна справа",
    },
    {
        "name": "F1",
        "full_name": "Інженерія програмного забезпечення",
    },
    {
        "name": "F2",
        "full_name": "Комп'ютерні науки",
    },
)

groups = (
    {
        "specialty__name": "F1",
        "name": "КП-241",
    },
    {
        "specialty__name": "F1",
        "name": "КП-242",
    },
    {
        "specialty__name": "F1",
        "name": "КП-231",
    },
    {
        "specialty__name": "F1",
        "name": "КП-232",
    },
    {
        "specialty__name": "F1",
        "name": "КП-221",
    },
    {
        "specialty__name": "F1",
        "name": "КП-222",
    },
    {
        "specialty__name": "F1",
        "name": "КП-211",
    },
    {
        "specialty__name": "F1",
        "name": "КП-212",
    },
    # КС
    {
        "specialty__name": "F2",
        "name": "КС-241",
    },
    {
        "specialty__name": "F2",
        "name": "КС-231",
    },
    {
        "specialty__name": "F2",
        "name": "КС-221",
    },
    {
        "specialty__name": "F2",
        "name": "КС-211",
    },
    # КД
    {
        "specialty__name": "C8",
        "name": "КД-241",
    },
    {
        "specialty__name": "C8",
        "name": "КД-231",
    },
    {
        "specialty__name": "C8",
        "name": "КД-221",
    },
    {
        "specialty__name": "C8",
        "name": "КД-211",
    },
    # АК
    {
        "specialty__name": "G10",
        "name": "АК-241",
    },
    {
        "specialty__name": "G10",
        "name": "АК-231",
    },
    {
        "specialty__name": "G10",
        "name": "АК-221",
    },
    {
        "specialty__name": "G10",
        "name": "АК-211",
    },
    # АМ
    {
        "specialty__name": "G13",
        "name": "АМ-241",
    },
    {
        "specialty__name": "G13",
        "name": "АМ-231",
    },
    {
        "specialty__name": "G13",
        "name": "АМ-221",
    },
    {
        "specialty__name": "G13",
        "name": "АМ-211",
    },
)

specialty_map = {}
group_map = {}

for specialty in specialties:
    obj, _ = Specialty.objects.get_or_create(
        name=specialty["name"],
        defaults={"full_name": specialty["full_name"]},
    )
    specialty_map[specialty["name"]] = obj

for group in groups:
    obj, _ = Group.objects.get_or_create(
        name=group["name"],
        specialty=specialty_map[group["specialty__name"]],
    )
    group_map[group["name"]] = obj
