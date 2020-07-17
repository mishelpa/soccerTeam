<template>
  <v-container fluid>
    <v-row class="d-flex justify-center">
      <v-col md="6" sm="8">
        <v-text-field
            solo
            label="Ingresa un nombre"
            v-model="nameTeam"
          ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="3" sm="12" v-for="team of filteredTeam" v-bind:key="team.id" >
    <v-card  max-width="400"
      >
      <v-card-title dark>

        <h3>{{team.name}}</h3>
        </v-card-title>

      <v-card-subtitle>
        <ul>
          <li>ID: {{team.id}}</li>
          <li>AREA: {{team.area.name}}</li>
          <li>DIRECCIÓN: {{team.address}}</li>
        </ul>
      </v-card-subtitle>

      <v-card-actions>
        <v-spacer></v-spacer>
        <router-link :to = "{name: 'DetailTeam', params: {id: team.id}}">
        <v-btn class="btn-start" color="warning">
          Ver más
        </v-btn>
        </router-link>
      </v-card-actions>
    </v-card>
    </v-col>
    </v-row>

  </v-container>
</template>

<script>
import http from '../http.common';

export default {
  name: 'Teams',
  data: () => ({
    teamsList: [],
    nameTeam: '',
  }),
  methods: {
    getTeams() {
      http
        .get('/teams')
        .then((response) => {
          this.teamsList = response.data.teams;
        });
    },
  },
  mounted() {
    this.getTeams();
  },
  computed: {
    filteredTeam() {
      let teams = this.teamsList;
      let search = this.nameTeam;

      if (search === '') {
        return this.teamsList;
      }

      search = search.trim().toLowerCase();

      teams = teams.filter((i) => i.name.toLowerCase().indexOf(search) !== -1);
      return teams;
    },
  },
};
</script>

<style scoped>
</style>
