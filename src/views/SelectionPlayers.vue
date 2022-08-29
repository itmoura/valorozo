<template>
  <div>
    <div class="header">
      <div class="header-beta">
        <p>Pré cadastro - BETA</p>
      </div>
    </div>
    <div class="selection">
      <h1 class="screenName">Selection </h1>
      <div class="boxEsq">
        <h1 class="titleBorder">Picks</h1>
        <div style="position: relative" v-for="(i) in 5" :key="i">
          <img src="../../src/assets/RedPoly.svg" alt="">
          <div class="boxSelect">
            <v-menu offset-y >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  dark
                  v-bind="attrs"
                  v-on="on"
                  style="background-color:transparent"
                >
                  {{funcs[i-1] ? funcs[i-1] : 'Função'}}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg"><path d="M7,10L12,15L17,10H7Z"></path></svg>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-for="(item, index) in items"
                  :key="index"
                >
                  <v-list-item-title @click="funcs[i-1] = item.title, teste()" style="cursor: pointer;">{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
        <div style="position: relative">
          <img src="../../src/assets/GreyPoly.svg" alt="">
          <div class="boxSelect">
            <v-btn
              dark
              style="background-color:transparent"
            >
              {{ funcs[5] }}
            </v-btn>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<style scoped>
p {
  margin: 0;
}
.header {
  width: 100vw;
  position: absolute;
}

.header-beta {
  background-color: #3EFF51;
  color: #000;
  text-align: center;
  line-height: 40px;
}

.selection{ 
  background: linear-gradient(180deg, #0F0D14 0%, #07040E 34.9%);
  height: 100vh;
}

.titleBorder {
  color: #fff;
  font-family: 'Industry-Medium';
  position: relative;
  margin-bottom: 15px;
}

.titleBorder:after {
  content: "";
  display: inline-block;
  height: 4px;
  width: 85%;
  border-top: 3px solid #fff;
  border-radius: 2rem;
  position: absolute;
  bottom: -5px;
  left: 40px;
}

.boxEsq {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 16vh;
  padding-left: 3vw;
  width: 170px;
}

.boxEsq img {
  width: 100%;
  max-width: 110px;
}

.boxSelect {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 0px 15px 15px 0px;
  padding: 15px;
  position: absolute;
  top: 42px;
  left: 106px;
  width: 160px;
}
</style>

<script>

import Footer from "@/components/Footer";

export default {
  name: 'Home',
  data: () => ({
    items: [
      { title: 'Duelista' },
      { title: 'Sentinela' },
      { title: 'Controlador' },
      { title: 'Iniciador' },
    ],
    funcs: ['', '', '', '', '', 'Coach'],
  }),
  components: {
    Footer,
  },
  mounted: function(){
    console.log(this.funcs)
  },
  methods: {
      teste () {
        console.log(this.funcs)
      },
  }
}
</script>
