<template>
  <v-container>
    <h2 class="text-center">{{infoTeam.name}}</h2>
    <p class="text-center">Más conocida como {{infoTeam.shortName}},
      sus siglas son {{infoTeam.tla}}.
      Fundada en {{infoTeam.founded}}, su estadio es el {{infoTeam.venue}}</p>
    <p class="text-center"><a :href=infoTeam.website>{{infoTeam.website}}</a></p>

    <v-row>
      <v-col md="6">
        <v-img contain max-height="320" :src=infoTeam.crestUrl alt=""/>
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
          this.itemsTeam = [`N°: ${team.id}`, `Pais: ${team.area.name}`,
            `Dirección: ${team.address}`, `Telefóno: ${team.phone}`,
            `Email: ${team.email}`, `Colores del club: ${team.clubColors}`,
          ];
        });
    },
  },
  mounted() {
    this.getTeams();
  },
};
</script>
