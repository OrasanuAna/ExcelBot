
<template>
  <v-container fluid fill-height>
    <v-row justify="center">
      <v-col  cols="12" >
        <v-card elevation="24" shaped tile min-width="500" max-width="80vw" width="50vw" class="ma-auto">
          <v-card-title>
            {{ title }}
          </v-card-title>
          <v-card-subtitle class="text-left">
            {{ subtitle  }}
          </v-card-subtitle>
          <v-card-text>
            <v-alert outlined text type="error" v-if="error">
              {{ error }}
            </v-alert>
            <v-form v-model="formularValid" id="logInForm">
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      id="usernameInput"
                      v-model ="username"
                      :rules="[fieldNotEmpty, usernameIsEmail]"
                      label="Username"
                      prepend-icon="mdi-account"
                      hint="Introduceti username-ul">
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      id="passwordInput"
                      :rules="[fieldNotEmpty, passwordHasNumber, passwordHasUpper, passwordHasLower, passwordHasSpecial, passwordLength]"
                      v-model="password"
                      label="Password"
                      prepend-icon="mdi-lock-outline"
                      :append-icon="passViz ? 'mdi-eye' : 'mdi-eye-off'"
                      :append-outer-icon="title === 'Sign Up'? 'mdi-creation' : ''"
                      hint="Introduceti parola"
                      :type="passViz ? 'text' : 'password'"
                      @click:append="passViz = !passViz"
                      @click:append-outer="generatePassword">
                    </v-text-field>
                  </v-col>
                </v-row>
                <v-row v-if="title === 'Sign Up'">
                  <v-col cols="12" class="d-flex justify-center pl-11 pr-4">
                    <v-progress-linear
                      :value="pwdStength.strength"
                      :color="pwdStength.color"
                      height="24">
                      <template v-slot:default>
                        <strong>{{ pwdStength.text }}</strong>
                      </template>
                    </v-progress-linear>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      id="confirmInput"
                      v-model="confirm"
                      v-if="title === 'Sign Up'"
                      :rules="[fieldNotEmpty, passwordMatch]"
                      label="Confirm Password"
                      prepend-icon="mdi-lock-outline"
                      :append-icon="passViz ? 'mdi-eye' : 'mdi-eye-off'"
                      hint="Confirmati parola"
                      :type="passViz ? 'text' : 'password'"
                      @click:append="passViz = !passViz">
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
            <v-list dense v-if="title === 'Sign Up'">
              <v-subheader>Password must contain the following:
              </v-subheader>
              <v-list-item
                v-for="(passwordMessage, i) in passwordMessages"
                :key="i">
                <v-list-item-icon>
                  <v-icon :color="passwordMessage.checked ? 'success' : 'error'">
                    {{ passwordMessage.checked ? 'mdi-check-circle-outline' : 'mdi-close-circle-outline' }}
                  </v-icon>

                </v-list-item-icon>

                <v-list-item-content>

                  <v-list-item-title>
                    {{ passwordMessage.text }}
                  </v-list-item-title>

                </v-list-item-content>

              </v-list-item>
            </v-list>

          </v-card-text>
          <v-card-actions>
            <v-btn icon :to="{ name: 'home' }" >
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="change" color="accent" text >
              {{ alt }}
            </v-btn>
            <v-btn @click="handleAuthentication" color="primary" :disabled="!primaryButtonEnabled" :loading="loading">
              {{ title }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import password from 'secure-random-password'

export default {
  name: 'LogIn',

  data: () => ({
    title: 'Log In',
    subtitle: 'Please provide your information',
    alt: 'Log In',
    passViz: false,
    username: '',
    password: '',
    confirm: '',
    errorMessages: [
      'Password must be at least 16 characters long',
      'Password must contain at least one number',
      'Password must contain at least one uppercase letter',
      'Password must contain at least one lowercase letter',
      'Password must contain at least one special character',
      'Passwords do not match',
      'Field can\'t be empty',
      'Username must be an email'
    ],
    formularValid: false
  }),

  computed: {
    loading () {
      return this.$store.getters.loading
    },
    error () {
      return this.$store.getters.error
    },

    usernameIsEmail () {
      // returns if the username is an email based on regex
      return /\S+@\S+\.\S+/.test(this.username) || this.errorMessages[7]
    },
    passwordMessages () {
      return [
        {
          text: this.errorMessages[0],
          checked: typeof this.passwordLength === 'boolean'
        },
        {
          text: this.errorMessages[1],
          checked: typeof this.passwordHasNumber === 'boolean'
        },
        {
          text: this.errorMessages[2],
          checked: typeof this.passwordHasUpper === 'boolean'
        },
        {
          text: this.errorMessages[3],
          checked: typeof this.passwordHasLower === 'boolean'
        },
        {
          text: this.errorMessages[4],
          checked: typeof this.passwordHasSpecial === 'boolean'
        },
        {
          text: this.errorMessages[5],
          checked: typeof this.passwordMatch === 'boolean'
        }
      ]
    },
    primaryButtonEnabled () {
      return this.formularValid
    },
    // i verify if the password and confirm are the same
    passwordMatch () {
      return this.password === this.confirm || this.errorMessages[5]
    },
    fieldNotEmpty () {
      return (value) => {
        return value.length > 0 || this.errorMessages[6]
      }
    },
    passwordLength () {
      return this.password.length > 15 || this.errorMessages[0]
    },
    passwordHasNumber () {
      return /\d/.test(this.password) || this.errorMessages[1]
    },
    passwordHasUpper () {
      return /[A-Z]/.test(this.password) || this.errorMessages[2]
    },
    passwordHasLower () {
      return /[a-z]/.test(this.password) || this.errorMessages[3]
    },
    passwordHasSpecial () {
      return /[^A-Za-z0-9]/.test(this.password) || this.errorMessages[4]
    },
    pwdStength () {
      const len = this.password.length
      // count the number of number characters in the password string
      const num = (this.password.match(/\d/g) || []).length
      // count the number of uppercase characters in the password string
      const upper = (this.password.match(/[A-Z]/g) || []).length
      // count the number of lowercase characters in the password string
      const lower = (this.password.match(/[a-z]/g) || []).length
      // count the number of special characters in the password string
      const special = (this.password.match(/[^A-Za-z0-9]/g) || []).length

      // calculate the strength of the password between 0 and 100
      const strength = Math.floor((len + num + upper + lower + special) / 5 * 100 / 20)

      // generate a color based on the strength of the password
      // red for weak (<25), yellow for medium (<50), blue for strong (<75) and green for superstrong (<100)
      const color = strength < 25 ? '1' : strength < 50 ? '2' : strength < 75 ? '3' : '4'
      const text = strength < 25 ? 'weak AF' : strength < 50 ? 'meh' : strength < 75 ? 'ok' : 'yes!'
      // return the strength and the color
      return { strength, color: 'strength-' + color, text }
    }
  },

  methods: {
    generatePassword () {
      const length = Math.floor(Math.random() * 8 + 17)
      const pwd = password.randomPassword({ length: length, characters: [password.lower, password.upper, password.digits, password.symbols] })
      this.password = pwd
      this.confirm = pwd
    },
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
    async handleAuthentication () {
      if (this.title === 'Sign Up') {
        try {
          await this.$store.dispatch('signup', {
            username: this.username,
            password: this.password
          })
          this.$router.push({ name: 'home' })
        } catch (err) {
          console.log(err)
        }
      } else {
        try {
          await this.$store.dispatch('login', {
            username: this.username,
            password: this.password
          })
          this.$router.push({ name: 'home' })
        } catch (err) {
          console.log(err)
        }
      }
    }
  }
}
</script>
