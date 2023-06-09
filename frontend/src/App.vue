<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-spacer></v-spacer>
      <template v-if="user">
        {{ user.email }}
        <v-btn @click="logout" icon>
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </template>
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
  }),
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  methods: {
    async logout () {
      try {
        await this.$store.dispatch('logout')
        this.$router.push({ name: 'login' })
      } catch (error) {
        console.log(error)
      }
    }
  },
  async created () {
    try {
      await this.$store.dispatch('autoLogin')
    } catch (error) {
      console.log(error)
    }
  }
}

// X&onw#6TXR#wSnT3q&LnpY

</script>
