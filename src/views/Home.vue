<template>
  <div class="home">
    <h1 class="screenName">Signup </h1>
    <div class="box">
      <v-form>
        <v-text-field
          solo
          v-model="password"
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

        <div class="btnBorder">
          <v-btn
            class="btnSubmit"
            @click="submit"
          >
            Cadastrar
          </v-btn>
        </div>
      </v-form>
    </div>
  </div>
</template>

<style scoped>
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
</style>

<script>

export default {
  name: 'Home',
  data: () => ({
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
    show: false
  }),
  components: {},
  methods: {
      submit () {
        console.log("TESTE")
      },
  }
}
</script>
