<template>
  <v-container fluid>
    <v-row class="d-flex justify-center">
      <v-col md="6" sm="8">
        <v-text-field
            solo
            label="Ingresa un nombre"
            append-icon="mdi-searcher"
            v-model="nameTeam"
          ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="4" sm="12" v-for="team of filteredTeam" v-bind:key="team.id" >
        <v-card
        max-width="344"
        class="mx-auto"
        >
          <v-list-item>
            <v-list-item-avatar color="grey">
              <img
              :src=team.crestUrl
              alt="Team"
              >
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="headline">{{team.name}}</v-list-item-title>
              <v-list-item-subtitle>{{team.area.name}}'s Team - {{team.id}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-text>
            <v-icon>mdi-map-marker</v-icon> Dirección: {{team.address}}
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <router-link :to = "{name: 'DetailTeam', params: {id: team.id}}">
              <v-btn
              text
              color="warning"
              >
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
