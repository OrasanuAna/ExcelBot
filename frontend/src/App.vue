<template>
  <v-app>
    <v-app-bar app color="primary" dark>

    </v-app-bar>

    <v-main style="background-image: url(/bg-excel.jpg); background-size: cover;">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>
