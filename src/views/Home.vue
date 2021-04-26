<template>
  <div class="home">
    <div class="add-hotel mt-7 d-flex justify-end mx-12">
      <v-btn color="teal" dark to="/new-hotel">
        <i class="bx bx-plus bx-sm"></i>
        New Hotel
      </v-btn>
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
            <v-img :src="require('@/assets/ba.jpg')"></v-img>
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
export default {
  name: 'Home',

  data() {
    return {
      hotels: [
        {id: 1, name: 'Black Africa', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime nobis, ullam eaque consequatur rem veniam.', gps: 'Nairobi-CBD' },
        {id: 2, name: 'Art Cafe`', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime nobis, ullam eaque consequatur rem veniam.', gps: 'Westgate - Westlands' },
        {id: 3, name: 'Java House', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime nobis, ullam eaque consequatur rem veniam.', gps: 'Sarit Centre - Westlands' },
        {id: 4, name: 'Da\' Place', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime nobis, ullam eaque consequatur rem veniam.', gps: 'Juja' },
        {id: 5, name: 'Moyo\'s', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime nobis, ullam eaque consequatur rem veniam.', gps: 'Kahawa Sukari' },
        {id: 6, name: 'Buma', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime nobis, ullam eaque consequatur rem veniam.', gps: 'Nkubu - Meru' }
      ]
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