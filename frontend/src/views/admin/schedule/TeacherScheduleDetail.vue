<script setup lang="ts">
import type { Components } from '@/api/openapi'
import { getTeachersSchedule } from '@/api/schedule'
import { onMounted, ref, type Ref } from 'vue'
import { useRoute } from 'vue-router'
import PhotoGalleria from '@/components/schedule/photo/PhotoGalleria.vue'
import { getLocalDateFromString } from '@/utils/datetime'

const route = useRoute()

const props = {
  id: route.params.id as string,
}

const loading = ref(true)

const teacherSchedule: Ref<Components.Schemas.TeacherSchedule | undefined> = ref()

const loadTeacherSchedule = async () => {
  loading.value = true
  try {
    const response = await getTeachersSchedule({ id: props.id }, undefined)
    teacherSchedule.value = response.data
  } catch (error) {
    console.error('Error loading teacher schedule', error)
    throw error
  }
  loading.value = false
}

const teacherName = (teacher: Components.Schemas.GeneratedScheduleForTeacher) => {
  return `${teacher.last_name} ${teacher.first_name} ${teacher.middle_name}`
}

onMounted(loadTeacherSchedule)
</script>
<template>
  <main v-if="!loading && teacherSchedule" class="contained-wrapper">
    <Panel :header="$t('schedule.teacher.title')">
      {{
        $t('schedule.teacher.forDate', { date: getLocalDateFromString(teacherSchedule.for_date) })
      }}
    </Panel>
    <Panel :header="$t('schedule.teacher.types.photo')" v-if="teacherSchedule.photos.length > 0">
      <PhotoGalleria :photos="teacherSchedule.photos" />
    </Panel>
    <Panel
      :header="$t('schedule.teacher.types.generated')"
      v-if="teacherSchedule.schedule && teacherSchedule.schedule.teachers.length > 0"
    >
      <Accordion :lazy="true">
        <AccordionPanel
          v-for="teacher in teacherSchedule.schedule.teachers"
          :value="teacherName(teacher)"
        >
          <AccordionHeader>
            {{
              $t('teacher.fullName', {
                lastName: teacher.last_name,
                firstName: teacher.first_name,
                middleName: teacher.middle_name ? teacher.middle_name : '',
              })
            }}
          </AccordionHeader>
          <AccordionContent>
            {{ $t('schedule.teacher.lessonCount', { count: teacher.lessons.length }) }}
            <div class="grid-container">
              <Card
                v-for="lesson in teacher.lessons.sort((a, b) =>
                  a.start_time.localeCompare(b.start_time),
                )"
              >
                <template #title>
                  <!-- Temporary style, since PrimeVue doesn't allow to change JUST the title -->
                  <span style="color: var(--p-primary-color)">
                    {{ $t('lesson.pairTitle', { pairName: lesson.pair }) }}
                  </span>
                </template>
                <template #subtitle>
                  {{
                    $t('lesson.durationShort', {
                      startTime: lesson.start_time,
                      endTime: lesson.end_time,
                    })
                  }}
                </template>
                <template #content>
                  {{ $t('lesson.group', { groupName: lesson.group_name }) }}
                </template>
                <template #footer>
                  {{ $t('lesson.room', { roomName: lesson.room }) }}
                </template>
              </Card>
            </div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </Panel>
  </main>
  <Skeleton v-else width="100%" height="50vh" />
</template>
