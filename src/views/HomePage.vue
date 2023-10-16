<template>
    <HeaderComp/>
    <v-row>
        <v-col cols="12" md="5" class="mt-12 ml-16 d-none d-md-block">
            <p class="text-blue-grey-darken-2 text-subtitle-1 ml-16 mt-16" >HEY THERE !</p>
            <p class="text-indigo-darken-4 text-h3 font-weight-bold ml-16 mt-4">I AM LIAM MAX</p>
            <p class="text-blue-grey-darken-1 text-h6 ml-16 mt-4">CREATIVE ART DIRECTOR & DESIGNER</p>
        </v-col>
        <v-col cols="12" md="6" class="mt-8 ml-0 d-none d-md-block">
            <v-img height="350" src="@/assets/dp.png"></v-img>
        </v-col>
        <v-col cols="12" md="6" class="mt-8 ml-2 d-md-none">
            <v-img height="200" src="@/assets/dp.png"></v-img>
        </v-col>
        <v-col cols="12" md="5" class="mt-12 ml-2 d-md-none">
            <p class="text-blue-grey-darken-2 text-subtitle-1 ml-16 mt-16" >HEY THERE !</p>
            <p class="text-indigo-darken-4 text-h3 font-weight-bold ml-16 mt-4">I AM LIAM MAX</p>
            <p class="text-blue-grey-darken-1 text-h6 ml-16 mt-4">CREATIVE ART DIRECTOR & DESIGNER</p>
        </v-col>
        
    </v-row>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue';

export default{
    name: "HomePage",
    components: {
        HeaderComp,
    }
}
</script>

<style>

</style>