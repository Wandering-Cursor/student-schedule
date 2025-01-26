<script setup lang="ts">
import TeacherScheduleList from '@/components/schedule/teacher/TeacherScheduleList.vue'
</script>

<template>
  <main>
    <div class="contained-wrapper">
      <Panel :header="$t('schedule.teacher.title')">
        {{ $t('schedule.teacher.description') }}
      </Panel>
      <Panel>
        <TeacherScheduleList />
      </Panel>
    </div>
  </main>
</template>
