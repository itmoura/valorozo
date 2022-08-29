<template>
  <div>
    <div class="header">
      <div class="header-beta">
        <p>Pré cadastro - BETA</p>
      </div>
    </div>
    <div class="home">
      <h1 class="screenName">Obrigado </h1>
      <div class="box">
        <div class="thanks">
          Olá, <strong>{{nickname}}</strong>
          <br/>
          <strong>Obrigado por se cadastrar.</strong>
          <br/>
          <br/>
          Estamos dando nosso melhor para que o sistema esteja pronto até o início da Champions.
          <br/>
          <br/>
          Se quiser ajudar com ideias fique à vontade para entrar no nosso Discord:
          <br/>
          <a href="https://discord.gg/nk7VEnAQ">https://discord.gg/nk7VEnAQ</a>
          <br/>
          <br/>
          <strong>Como irá funcionar?</strong>
          <br/>
          Certo, a gente vai ter dar uma breve explicação. Você deve escalar seu time, escolhendo os jogadores no qual você julga que irá ganhar mais pontos.
          <br/><br/>
          <strong>Como funciona a pontuação?</strong>
          <br/>
          A pontuação será baseada no ACS de cada jogador, ou seja, quanto melhor for o ACS daquele jogador, mais pontos você faz, consequentemente mais <strong>Coins</strong> terá.
          <br/><br/>
          <strong>A você não sabe o que é coins?</strong>
          <br/>
          Certo, coins é a nossa moeda, com ela você pode comprar os jogadores para seu time.
          <br/><br/>
          <strong>Mas como assim comprar?</strong>
          <br/>
          Então, cada pró player tem seu preço, então com seus <strong>Coins</strong> disponiveis você deverá escolher qual jogador irá comprar.
          <br/><br/>
          <strong>É possível dar Game Over?</strong>
          <br/>
          Sim, é possível, se você não conseguir mais comprar jogadores, você chegou ao <strong>Game Over.</strong>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<style scoped>
strong {
  color: #FF3E48;
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
.home{
  background: linear-gradient(180deg, #0F0D14 0%, #07040E 34.9%);
  height: 100vh;
}
.screenName {
  display: inline-block;
  background: rgba(255, 255, 255, 0.05);
  border-radius:  0px 30px 30px 0px;
  padding: 15px 35px 15px 45px;
  position: absolute;
  top: 8vh;
  left: 0;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.5rem;
}

.box {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box .thanks {
  background: #ffffff;
  border-radius: 1rem;
  border: 0.5px solid rgba(171, 170, 170, 0.3);
  padding: 30px 20px;
  width: 35vw;
  max-width: 420px;
  height: 80vh;
  overflow-y: scroll;
  text-align: justify;
}
.box .thanks::-webkit-scrollbar {
  width: 8px;
}

.box .thanks::-webkit-scrollbar-thumb {
  background-color: #FF3E48;    /* color of the scroll thumb */
  border-radius: 8px;
}

@media screen and (max-width: 910px) {
  .box {
    width: 100%;
  }
  .box form {
    width: 90%;
  }
}
</style>

<script>

import Footer from "@/components/Footer";

export default {
  name: 'Thanks',
  data: () => ({
    nickname: '',
  }),
  components: {
    Footer,
  },
  methods: { },
  mounted() {
    if (localStorage.getItem("nickname")){
      this.nickname = localStorage.getItem("nickname")
    }
  }
}
</script>
