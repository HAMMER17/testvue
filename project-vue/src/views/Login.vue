<template>
  <div class="grey darken-1 empty-layout">
    <form class="card auth-card" @submit.prevent="submit">
      <div class="card-content">
        <span class="card-title">Домашняя бухгалтерия</span>
          <div class="input-field">
          <input id="email" type="email" v-model="email" @blur="v$.email.$touch" />
          <label for="email">Email</label>
          <small class="helper-text invalid" v-for="error of v$.$errors" :key="error.$uid">
            {{ error.$message }}
          </small>
        </div>

        <div class="input-field">
          <input id="password" type="password" v-model="password" @blur="v$.password.$touch"/>
          <label for="password">Пароль</label>
           <small class="helper-text invalid" v-for="error of v$.$errors" :key="error.$uid">
             {{ error.$message }}</small>
        </div> 
      </div>
      <div class="card-action">
        <div>
          <button
            class="btn waves-effect waves-light auth-submit"
            type="submit"

            :disabled="submitStatus === 'PENDING'"
          >
            Войти
            <i class="material-icons right">send</i>
          </button>
        </div>

        <p class="center">
          Нет аккаунта?
          <router-link to="/registr">Зарегистрироваться</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { email, required, minLength } from '@vuelidate/validators';

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
      submitStatus: null,
  }
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(4) },
  },
    methods: {
    submit() {
      this.v$.$touch()
      if (this.v$.$invalid) {
       console.log(this.submitStatus)
      } else {
        console.log(this.email, this.password)
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = this.$router.push('/')
        }, 1000)
      }
    }
  }
}
</script>
