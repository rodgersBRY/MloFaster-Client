<template>
  <div class="home">
    <div v-if="isLoggedIn" class="add-hotel mt-7 d-flex justify-end mx-12">
      <new-hotel />
    </div>
    <!-- list of hotels -->
    <v-layout row wrap class="main-content">
      <v-card max-width="450" class="my-3 mx-10" v-for="i in hotels" :key="i.id" @click="toHotel(i.id)">
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4">
              {{ i.gps }}
            </div>
            <v-list-item-title class="headline mb-1">
              {{ i.name }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ i.desc }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar tile size="100" color="grey">
            <v-img :src="i.img"></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-card>
    </v-layout>

    <!-- footer -->
    <div class="footer">
      <app-footer />
    </div>
  </div>
</template>

<script>
import NewHotel from '@/components/New-hotel'

export default {
  name: 'Home',

  components: {
    'new-hotel': NewHotel
  },

  data() {
    return {
      hotels: [
        {id: 1, img: require('../assets/images/Ugali.jpg'), name: 'Black Africa', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime nobis, ullam eaque consequatur rem veniam.', gps: 'Nairobi-CBD' },
        {id: 2, img: require('../assets/images/avocado.jpg'), name: 'Art Cafe`', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime nobis, ullam eaque consequatur rem veniam.', gps: 'Westgate - Westlands' },
        {id: 3, img: require('../assets/images/beans.jpg'), name: 'Java House', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime nobis, ullam eaque consequatur rem veniam.', gps: 'Sarit Centre - Westlands' },
        {id: 4, img: require('../assets/images/kebab.jpg'), name: 'Da\' Place', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime nobis, ullam eaque consequatur rem veniam.', gps: 'Juja' },
        {id: 5, img: require('../assets/images/peas.jpg'), name: 'Moyo\'s', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime nobis, ullam eaque consequatur rem veniam.', gps: 'Kahawa Sukari' },
        {id: 6, img: require('../assets/images/rice.jpg'), name: 'Buma', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime nobis, ullam eaque consequatur rem veniam.', gps: 'Nkubu - Meru' }
      ]
    }
  },

  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    }
  },

  methods: {
    toHotel(id) {
      this.$router.push({ name: 'Hotel', params: { Hid: id } })
    }
  }
}
</script>

<style scoped>
.main-content {
  padding: 3rem 5rem;
}
</style>