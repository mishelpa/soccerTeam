<template>
  <v-container>
    <v-row>
      <v-col md="6">
         <v-img :src=infoTeam.crestUrl alt=""/>
      </v-col>
      <v-col md="6">
        <v-card
    class="mx-auto"
    tile
  >
    <v-list>
      <v-subheader>INFORMACIÓN DEL EQUIPO</v-subheader>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item
          v-for="(item, i) in itemsTeam"
          :key="i"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
      </v-col>
    </v-row>


  </v-container>
</template>

<script>
import http from '../http.common';

export default {
  name: 'Details',
  data: () => ({
    itemsTeam: [],
    infoTeam: null,
  }),
  methods: {
    getTeams() {
      http
        .get(`/teams/${this.$route.params.id}`)
        .then((response) => {
          this.infoTeam = response.data;
          const team = response.data;
          this.itemsTeam = [team.name, team.id, team.area.name,
            team.shortName, team.tla,
            team.address, team.phone,
            team.website, team.email, team.founded, team.clubColors, team.venue,
          ];
        });
    },
  },
  mounted() {
    this.getTeams();
  },
};
</script>
