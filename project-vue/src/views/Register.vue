<template>
    <div class="grey darken-1 empty-layout">
<form class="card auth-card" @submit.prevent="submit">
  <div class="card-content">
    <span class="card-title">Домашняя бухгалтерия</span>
    <div class="input-field">
      <input
          id="email"
          type="text"
          v-model="email" @blur="v$.email.$touch"
      >
      <label for="email">Email</label>
      <small class="helper-text invalid" v-for="error of v$.$errors" :key="error.$uid">
        {{error.$message}}
        </small>
    </div>
    <div class="input-field">
      <input
          id="password"
          type="password"
          v-model="password" @blur="v$.password.$touch"
      >
      <label for="password">Пароль</label>
      <small class="helper-text invalid" v-for="error of v$.$errors" :key="error.$uid">Password</small>
    </div>
    <div class="input-field">
      <input
          id="name"
          type="text"
          v-model="name" @blur="v$.name.$touch"
      >
      <label for="name">Имя</label>
      <small class="helper-text invalid" v-for="error of v$.$errors" :key="error.$uid">Name</small>
    </div>
    <p>
      <label>
        <input type="checkbox" v-model="agree"/>
        <span>С правилами согласен</span>
      </label>
    </p>
  </div>
  <div class="card-action">
    <div>
      <button
          class="btn waves-effect waves-light auth-submit"
          type="submit" 
      >
        Зарегистрироваться
        <i class="material-icons right">send</i>
      </button>
    </div>

    <p class="center">
      Уже есть аккаунт?
      <router-link to="/login">Войти!</router-link>
    </p>
  </div>
</form>
</div>
</template>

<script>
import useVuelidate from '@vuelidate/core';
import { email, required, minLength } from '@vuelidate/validators';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../store/auth';
const auth = getAuth(app)

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  name: 'register',
  data() {
    return {
      email: '',
      password: '',
      name: '',
      agree: false,
    }
  },
  validations: {
      email: { email, required },
      password: { required, minLength: minLength(4) },
      name: { required },
      agree: { checked: v => v },
  },
  methods: {
   async submit() {
     const email2 = this.email
     const password2 = this.password
     const name2 = this.name
     
     console.log(email2, password2)
     const userCredential = await createUserWithEmailAndPassword(auth, email2, password2, name2)
      console.log(userCredential.user)
      this.v$.$touch()
      if(this.v$.$invalid) {
        this.v$.$touch()
        return;
      }
      this.$router.push('/')
    }
  }
};
</script>
