<template>
<div>
  <div class="page-title">
    <h3>Счет</h3>
<button class="btn waves-effect waves-light btn-small">
      <i class="material-icons">refresh</i>
    </button>
  </div>
<div class="row">
    <div class="col s12 m6 l4">
    <HomeBlue />
    </div>
    <div class="col s12 m6 l8">
      <HomeOrange/>
    </div>
  </div>
</div>
</template>
<script>
import HomeBlue from '../components/HomeBlue.vue';
import HomeOrange from '../components/HomeOrange.vue';
export default {
  name: 'home',
  components: {
    HomeBlue, HomeOrange
  },
  data: () => ({
    currency: null,
    form: []
  }),
};
</script>
