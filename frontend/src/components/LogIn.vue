
<template>
  <v-container fluid fill-height style="background-image: url('/exotic.jpg'); background-size: cover;">
    <v-row justify="center" class="text-center">
      <v-col  cols="12" sm="6" md="4" lg="3" xl="2" >
        <v-card elevation="8" shaped tile>
          <v-card-title>
            {{ title }}
          </v-card-title>
          <v-card-subtitle class="text-left">
            {{ subtitle  }}
          </v-card-subtitle>
          <v-card-text>
            <v-text-field
              v-model ="username"
              label="Username"
              prepend-icon="mdi-account"
              hint="introduceti username-ul">
            </v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              prepend-icon="mdi-lock-outline"
              :append-icon="passViz ? 'mdi-eye' : 'mdi-eye-off'"
              hint="introduceti parola"
              :type="passViz ? 'text' : 'password'"
              @click:append="passViz = !passViz">
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="change" color="accent" text >
              {{ alt }}
            </v-btn>
            <v-btn @click="does" color="primary" :disabled="!primaryButtonEnabled">
              {{ title }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'LogIn',

  data: () => ({
    loading: true,
    title: 'Log In',
    subtitle: 'Please enter your credentials',
    alt: 'Sign Up',
    passViz: false,
    username: '',
    password: ''
  }),

  computed: {
    primaryButtonEnabled () {
      return this.username.length > 0 && this.password.length > 0
    }
  },

  methods: {
    change () {
      if (this.title === 'Sign Up') {
        this.title = 'Log In'
        this.subtitle = 'Please enter your credentials'
        this.alt = 'Sign Up'
      } else {
        this.title = 'Sign Up'
        this.subtitle = 'Please provide your information'
        this.alt = 'Log In'
      }
    },
    does () {

    }
  }
}
</script>
