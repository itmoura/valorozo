<template>
  <div>
    <v-alert
        :dismissible="true"
        outlined
        shaped
        :type="alert.type"
        :value="alert.show"
        elevation="2"
        width="350px"
        class="alert-container"
        transition="expand-x-transition"
    >{{alert.message}}</v-alert>
    <div class="header">
      <div class="header-beta">
        <p>Pré cadastro - BETA</p>
      </div>
    </div>
    <div class="home">
      <h1 class="screenName">Signup </h1>
      <div class="box">
        <v-form ref="form" v-model="valid">
          <v-text-field
            solo
            v-model="nickname"
            label="Nickname"
            required
            prepend-inner-icon="mdi-account"
            :rules="[rules.required, rules.min]"
          ></v-text-field>

          <v-text-field
            solo
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            prepend-inner-icon="mdi-email"
          ></v-text-field>

          <v-text-field
            solo
            v-model="password"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
            label="Password"
            prepend-inner-icon="mdi-lock"
            :rules="[rules.required, rules.min]"
            required
          ></v-text-field>

          <v-text-field
              solo
              v-model="suggestName"
              label="Sugestão de nome para o site"
              prepend-inner-icon="mdi-lightbulb-on"
              messages="Melhor nome sugerido irá ganhar Selo + Brinde"
              class="suggest-name-field"
          ></v-text-field>

          <div class="btnBorder">
            <v-btn
              class="btnSubmit"
              @click="submit"
            >
              Cadastrar
            </v-btn>
          </div>
          <v-btn
            class="btnBack"
            href="/login"
          >
            Já tenho conta.
          </v-btn>
        </v-form>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<style scoped>
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
.alert-container {
  position: absolute;
  top: 5vh;
  right: 2vw;
  z-index: 1;
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

.box form {
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.017) 100%);
  border-radius: 1rem;
  border: 0.5px solid rgba(171, 170, 170, 0.3);
  padding: 70px 30px;
  width: 35vw;
  max-width: 420px;
}
.btnBorder {
  padding: 6px;
  border: 1px solid #FA464F;
  filter: drop-shadow(0px 0px 5px #FA464F);
  margin-top: 20px;
}
.btnSubmit {
  width: 100%;
  height: 50px !important;
  background: #FF3E48 !important;
  color: #fff;
  font-family: 'Industry-Medium';
  letter-spacing: 0.1em;
  font-size: 1.1rem;
  border-radius: 0;
}

.btnBack {
  margin-top: 15px;
  height: 50px !important;
  width: 100%;
  background: transparent !important;
  color: #fff;
  font-family: 'Industry-Medium';
  letter-spacing: 0.1em;
  font-size: 1.1rem;
  border-radius: 0;
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
import Vue from "vue";

export default {
  name: 'Signup',
  data: () => ({
    alert: {
      show: false,
      message: "",
      type: "success"
    },
    valid: true,
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 0 || 'Min 8 characters',
    },
    password: '',
    nickname: '',
    suggestName: '',
    show: false
  }),
  components: {
    Footer,
  },
  methods: {
    submit () {
      if (this.$refs.form.validate()) {;
        Vue.axios.post('http://ec2-54-207-126-182.sa-east-1.compute.amazonaws.com:8080/valorozo-app/api/v1/user/', {
          email: this.email,
          password: this.password,
          nickname: this.nickname,
          suggestionsName: this.suggestName
        }).then(response => {
          localStorage.setItem('nickname', response.data.nickname);
          this.alert.show = true;
          this.alert.type = "success";
          this.alert.message = "Cadastro realizado com sucesso!";
          setTimeout(()=>{
            this.$router.push('/thanks');
            this.alert.show = false;
          },2000)
        }).catch(() => {
          this.alert.show = true;
          this.alert.type = "error";
          this.alert.message = "Erro ao realizar o cadastro! Entre em contanto pelo Discord https://discord.gg/nk7VEnAQ";
        });
      }
    },
  }
}
</script>
