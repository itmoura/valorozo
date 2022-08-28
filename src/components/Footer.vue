<template>
  <div class="footer">
    <p>
      <v-icon dense color="#fff">mdi-copyright</v-icon> OMILDE & NAPUM, todos os direitos reservados.
    </p>
  </div>
</template>


<style>
  .footer {
    bottom: 0;
    position: absolute;
    text-align: right;
    right: 20px;
    color: #fff;
  }
  .footer p {
    font-size: 12px;
  }
</style>

<script>

export default {
  name: 'Footer',
}
</script>