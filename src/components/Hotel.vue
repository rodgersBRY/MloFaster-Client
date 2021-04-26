<template>
    <div class="hotel">
        <div class="details" v-for="i in hotels" :key="i.id">
            <div v-if="id === i.id">
                <div class="image">
                    <v-img width="100%" height="320" :src="require('../assets/ba.jpg')"></v-img>
                </div>
                <!-- <div class="breadcrumbs">
                    <v-breadcrumbs
                    :items="items"
                    divider="-"
                    ></v-breadcrumbs>
                </div> -->

                <div class="footer">
                    <app-footer />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.Hid,
            hotels: [
                {id: 1, name: 'Black Africa', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime nobis, ullam eaque consequatur rem veniam.', gps: 'Nairobi-CBD' },
                {id: 2, name: 'Art Cafe`', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime nobis, ullam eaque consequatur rem veniam.', gps: 'Westgate - Westlands' },
                {id: 3, name: 'Java House', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime nobis, ullam eaque consequatur rem veniam.', gps: 'Sarit Centre - Westlands' },
                {id: 4, name: 'Da\' Place', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime nobis, ullam eaque consequatur rem veniam.', gps: 'Juja' },
                {id: 5, name: 'Moyo\'s', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime nobis, ullam eaque consequatur rem veniam.', gps: 'Kahawa Sukari' },
                {id: 6, name: 'Buma', desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maxime nobis, ullam eaque consequatur rem veniam.', gps: 'Nkubu - Meru' }
            ]
        }
    }
}
</script>

<style scoped>

</style>