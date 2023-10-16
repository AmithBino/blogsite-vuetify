<template>
        <v-row>
            <v-col cols="12" md="12" sm="10">
                
                <v-app-bar flat color="grey-lighten-5">
                    <v-toolbar-items>
                        <v-btn to="/" class="text-white px-10 mt-n6 d-none d-md-block" >
                        <v-icon :size="120">
                            <v-img src="@/assets/logob.png"></v-img>
                        </v-icon>
                        </v-btn>
                        <v-btn to="/" class="text-white px-12 mt-n0 d-md-none" >
                        <v-icon :size="50">
                            <v-img src="@/assets/logog.png"></v-img>
                        </v-icon>
                        
                        </v-btn>
                        <v-btn class="v-btn text-black mx-2 px-6 d-none d-md-block" v-for="item in toolbarItems" :key="item.id" @click="handleItemClick(item)"> 
                            {{ item.label }}
                        </v-btn>
                        
                        <v-menu>
                        <template v-slot:activator="{ props }">
                            <v-btn icon="mdi mdi-menu" v-bind="props" class="d-md-none"></v-btn>
                        </template>

                        <v-list>
                            <v-list-item v-for="item in toolbarItems" :key="item.id" @click="handleItemClick(item)">
                                <v-list-item-title>{{ item.label}}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                        </v-menu>
                        
                    </v-toolbar-items>
                </v-app-bar>
            </v-col>
        </v-row>

</template>
    
<script>
export default{
    name:"HeaderComp",
    data() {
        return {
            toolbarItems: [
                { id: 1, label: 'Home', route: '/' },
                { id: 2, label: 'About', route: '/about' },
                { id: 3, label: 'Portfolio', route: '/portfolio' },
                { id: 4, label: 'Services', route: '/services' }, 
                { id: 5, label: 'Blog', route: '/blog' },
                { id: 6, label: 'Contact', route: '/contact' },
            ],
        };
    },
    methods: {
        handleItemClick(item) {
            // Navigate to the route associated with the clicked item
            this.$router.push(item.route);
        }
    }
}
</script>

<style>
</style>