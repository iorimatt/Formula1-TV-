<template>
  <div>
    <b-container class="mt-5" style="padding: 0vh 20vh">
      <b-row class="d-flex">
        <h2 class="f1-font text-white">Horários</h2>
        <p class="f1-font text-white">
          Horários de F2 e F3 serão anunciados mais perto do fim de semana do
          Grande Prêmio
        </p>
      </b-row>
    </b-container>
    <b-container style="padding: 0vh 20vh">
      <div class="text-center">
        <b-spinner
          variant="danger"
          style="width: 10vh; height: 10vh"
          v-if="loadStatus()"
          class="m-5"
        ></b-spinner>
        
      </div>
      <b-row v-for="race in raceUpcoming" :key="race.name" class="d-flex mt-5">
        <h2 class="f1-font text-white">{{ race.name }}</h2>
        <p class="f1-font-regular text-white">
          Data da Corrida | {{ race.date.split("-").reverse().join("/") }}
        </p>
        <b-row class="d-flex mt-5">
          <div>
            <h5 class="f1-font text-white">Agenda da Semana</h5>
            <b-tabs content-class="mt-3" align="end">
              <b-tab title="FÓRMULA 1" active
                ><div class="text-white p-5 bg-black">
                  <div class="container">
                    <b-row class="row">
                      <b-col cols="6" class="d-flex justify-content-center"
                        ><h5>GRANDE PRÊMIO</h5></b-col
                      >
                      <b-col cols="6" class="d-flex justify-content-center"
                        ><h5>{{ race.time }}</h5></b-col
                      >
                    </b-row>
                  </div>
                </div>
              </b-tab>
              <b-tab title="ALL"
                ><div class="text-white p-5 bg-black">
                  I'm the first tab
                </div></b-tab
              >
            </b-tabs>
          </div>
        </b-row>
      </b-row>
    </b-container>
    
  </div>
</template>
<script>
//import axios from "axios";
export default {
  data: function () {
    return {
       roundsRemaining: this.$store.state.roundsRemaining,
       error: this.$store.state.error
    };
  },
  computed: {
    raceList() {
      return this.$store.state.raceList;
    },
    raceUpcoming() {
      return this.raceList.slice("-" + this.roundsRemaining);
    },
  },
  methods: {
    loadStatus() {
        if (this.raceUpcoming.length > 0) {
          return false;
       }
       return true;
       },},
  mounted() {
    this.$store.getters.raceList;
    this.loadStatus();
  },
};
</script>
<style>
</style>