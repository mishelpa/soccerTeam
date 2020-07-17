<template>
  <div>
    <h2>{{tittle}}</h2>
    <div class="card-course">
    <v-card  max-width="400" v-for="course of coursesList"
      v-bind:key="course" >
      <v-img :src="`${course.img_course}`" height="120px" class="image-course">
        <v-row align="end" class="lightbox white--text pa-2 fill-height">
          <v-col>
            <v-avatar class="body-1">
              <img :src="`${course.img}`" alt="">
            </v-avatar>
            <span class="subheading" dark>{{course.teacher}}</span>
          </v-col>
        </v-row>
      </v-img>
      <v-progress-linear height="16px"
      v-model="power"
    >
    <strong>Progreso {{ Math.ceil(power) }}%</strong></v-progress-linear >
      <v-card-title dark>

        <h3>{{course.title}}</h3>
        </v-card-title>

      <v-card-subtitle>
        1,000 miles of wonder
      </v-card-subtitle>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="btn-start" @click="postCourse(course)">
          Iniciar
        </v-btn>
      </v-card-actions>
    </v-card>
    </div>
  </div>
</template>

<script>
import ax from 'axios';
import { mapMutations } from 'vuex';

export default {
  name: 'home',

  data: () => ({
    tittle: 'Hola Mari',
    coursesList: [],
    course: {},
    power: 50,
  }),
  methods: {
    getCourses() {
      ax
        .get('courses.json')
        .then((response) => {
          this.coursesList = response.data;
        });
    },
    ...mapMutations(['postCourse']),
  },
  mounted() {
    this.getCourses();
  },
};
</script>

<style scoped>

</style>
