<template>
  <v-toolbar flat="true" color="warning">
    <v-toolbar-title>TURBODEGA</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text small >
      <router-link to = "/">Teams</router-link>
    </v-btn>
    <v-btn text small>Mishel Paredes</v-btn>
    <v-avatar size="36">
      <img src="https://media.metrolatam.com/2018/08/23/mujer1-234853dc0e0619b7be7317871413304c-600x400.jpg"  alt="">
    </v-avatar>
  </v-toolbar>
</template>
<script>
export default {
  name: 'navbar',
};
</script>
