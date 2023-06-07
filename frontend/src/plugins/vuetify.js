import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#00838F',
        secondary: '#9575CD',
        accent: '#7E57C2',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',

        'price-1': '#607D8B',
        'price-2': '#8BC34A',
        'price-3': '#3F51B5'
      }
    }
  }
})
