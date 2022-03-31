<template>
         <div class="card light-blue bill-card">
        <div class="card-content white-text">
          <span class="card-title">Счет в валюте</span>
            <p class="currency-line"
            v-for="(cur, currens) in form"
            :key="cur">
            <span>{{ currens }}: {{ cur }}</span>
            </p>
        </div>
      </div>
</template>
<script>

export default {
  data: () => ({
    form: [],
  }),
  async mounted() {
    
    this.currency = await this.$store.dispatch('fetchCurrency')
    this.form = this.currency.quotes
    
  },
  
}
</script>