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
            type="submit">
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
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from 'firebase/auth'
import { app } from '../store/auth';
const auth = getAuth(app)

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
  }
  },
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(4) },
  },
    methods: {
   async submit() {
     const email2 = this.email
     const password2 = this.password
     console.log(email2, password2)
     const userCredential = await signInWithEmailAndPassword(auth, email2, password2)
      console.log(userCredential.user)
      if (this.v$.$invalid) {
        this.v$.$touch()
        this.$router.push('/') 
        } 
          // this.$router.push('/')   
      }
    }
  }
</script>
