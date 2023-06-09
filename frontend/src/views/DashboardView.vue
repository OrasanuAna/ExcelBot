<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <Dashboard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Dashboard from '@/components/Dashboard.vue'
export default {
  name: 'DashboardView',
  components: {
    Dashboard
  }
}
</script>
