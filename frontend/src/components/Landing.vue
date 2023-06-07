<template>
  <v-container>
    <v-row justify="center">
      <v-col  cols="12" >
        <v-carousel height="30vh">
          <v-carousel-item
          v-for="(item,i) in carouselItems"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
          >
          <v-sheet color="rgba(0, 0, 0, 0.6)" elevation="24">
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h5 blue-grey--text text--lighten-5 text-center pa-6">
                {{ item.text }}
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12">
      <v-sparkline
      :value="[0, 2, 5, 7, 5, 8, 9, 5, 6, 7, 6, 8, 6, 9, 10]"
      :gradient="['#f72047', '#ffd200', '#1feaea']"
      :smooth="true"
      :padding="8"
      :line-width="2"
      stroke-linecap="round"
      gradient-direction="left"
      :fill="false"
      type="trend"
      :auto-line-width="false"
      auto-draw
      ></v-sparkline>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12">
      <v-item-group>
        <v-container>
          <v-row>
            <v-col cols="4" v-for="subscription in subscriptions" :key="subscription.id">
              <v-item v-slot="{active, toggle}">
                <v-card :color="active ? 'primary' : ''" @click="toggle" outlined shaped>
                  <v-card-title style="justify-content: center;" class="white--text" :class="{ [subscription.class]: true }">
                    {{ subscription.title }}
                  </v-card-title>
                  <v-divider class="my-4 mx-16"></v-divider>
                  <v-card-text>
                    <v-list dense>
                      <v-list-item v-for="feature in subscription.features" :key="feature.id">
                        <v-list-item-icon>
                          <v-icon small color="success">
                            {{ feature.icon }}
                          </v-icon>
                        </v-list-item-icon>
                        <v-list-item-content>
                          <v-list-item-title>{{ feature.description }}</v-list-item-title>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list>
                  </v-card-text>
                  <v-card-actions class="justify-center">
                    <v-btn color="primary" outlined rounded>
                      Alege
                    </v-btn>
                  </v-card-actions>
                  <v-divider class="my-4 mx-16"></v-divider>
                  <v-card-subtitle class="text-center">
                    &euro;
                    {{ subscription.price }}
                    /luna
                  </v-card-subtitle>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  name: 'LandingComponent',
  data () {
    return {
      carouselItems: [{
        src: '/carusel_poze/1.jpg',
        text: 'Descoperă Excel Formula Assistant - Asistentul tău inteligent pentru formulele Excel! Simplifică-ți munca și obține rezultate precise în doar câteva click-uri.'
      }, {
        src: '/carusel_poze/2.jpg',
        text: 'Îmbunătățește-ți productivitatea cu Excel Formula Assistant! Experimentează o modalitate mai rapidă și mai eficientă de a lucra cu formule complexe în Excel.'
      }, {
        src: '/carusel_poze/3.jpg',
        text: 'Formulații mai ușor și mai rapid cu Excel Formula Assistant! Descoperă cum poți obține formulele dorite într-un mod intuitiv și simplu de utilizat.'
      }, {
        src: '/carusel_poze/4.jpg',
        text: 'Soluția ta pentru formule Excel mai inteligente! Cu Excel Formula Assistant, poți explora și înțelege rapid logica din spatele formulelor tale.'
      }, {
        src: '/carusel_poze/5.jpg',
        text: 'Transformă-ți munca cu formule Excel într-o experiență plăcută! Excel Formula Assistant îți oferă ghidare pas cu pas și generare automată de formule pentru a-ți accelera fluxul de lucru.'
      }],
      subscriptions: [{
        id: 1,
        class: 'price-1',
        title: 'Abonament Gratuit',
        price: 9.99,
        features: [{
          id: 1,
          description: 'Acces gratuit la funcționalitățile de bază',
          icon: 'mdi-check'
        }, {
          id: 2,
          description: 'Explicare limitată a formulelor Excel',
          icon: 'mdi-check'
        }, {
          id: 3,
          description: 'Utilizare limitată a generatorului de formule și personalizării opțiunilor',
          icon: 'mdi-check'
        }, {
          id: 4,
          description: 'Acces limitat la istoricul conversațiilor',
          icon: 'mdi-check'
        }, {
          id: 5,
          description: 'Inca ceva aici',
          icon: 'mdi-check'
        }]
      }, {
        id: 2,
        class: 'price-2',
        title: 'Abonament Premium',
        price: 9.99,
        features: [{
          id: 1,
          description: 'Acces complet la toate funcționalitățile',
          icon: 'mdi-check'
        }, {
          id: 2,
          description: 'Explicare nelimitată a formulelor Excel',
          icon: 'mdi-check'
        }, {
          id: 3,
          description: 'Utilizare nelimitată a generatorului de formule și personalizarea opțiunilor',
          icon: 'mdi-check'
        }, {
          id: 4,
          description: 'Acces complet la istoricul conversațiilor',
          icon: 'mdi-check'
        }, {
          id: 5,
          description: 'Suport prioritar prin intermediul unui canal dedicat',
          icon: 'mdi-check'
        }]
      }, {
        id: 3,
        class: 'price-3',
        title: 'Abonament Enterprise',
        price: 9.99,
        features: [{
          id: 1,
          description: 'Toate beneficiile abonamentului Premium',
          icon: 'mdi-check'
        }, {
          id: 2,
          description: 'Personalizare aplicație în funcție de nevoile organizației',
          icon: 'mdi-check'
        }, {
          id: 3,
          description: 'Gestionare centralizată a utilizatorilor și permisiunilor',
          icon: 'mdi-check'
        }, {
          id: 4,
          description: 'Integrare cu alte instrumente și platforme',
          icon: 'mdi-check'
        }, {
          id: 5,
          description: 'Suport tehnic extins și asistență dedicată',
          icon: 'mdi-check'
        }]
      }]
    }
  }
}
</script>
