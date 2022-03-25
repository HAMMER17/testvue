<template>
     <nav class="navbar orange lighten-1">
      <div class="nav-wrapper">
        <div class="navbar-left">
          <a href="#" @click.prevent="$emit('toggle')">
            <i class="material-icons black-text">dehaze</i>
          </a>
          <span class="black-text">{{dateFilter('datetime')}}</span>
        </div>

        <ul class="right hide-on-small-and-down">
          <li>
            <a
              class="dropdown-trigger black-text"
              href="#"
              data-target="dropdown"
              ref="drop"
            >
              USER NAME
              <i class="material-icons right">arrow_drop_down</i>
            </a>

            <ul id="dropdown" class="dropdown-content">
              <li>
                <router-link to="/profile" class="black-text">
                  <i class="material-icons">account_circle</i>Профиль
                </router-link>
              </li>
              <li class="divider" tabindex="-1"></li>
              <li>
                <a href="/login" class="black-text" @click.prevent="logout">
                  <i class="material-icons">assignment_return</i>Выйти
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
  data:() => ({
   date: new Date(),
   interval: null,
   drop: null,
  }),
  mounted() {
  this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000)
    M.Dropdown.init(this.$refs.drop, {
      constrainWidth: false
    })
  },
  beforeDestroy() {
   this.drop = clearInterval(this.interval)
  },
  methods: {
 dateFilter(value, format = 'date') {
        value = this.date
        const options= {}

        if (format.includes('date')) {
          options.day = '2-digit'
          options.month = 'long'
          options.year = 'numeric'
          options.hour = '2-digit'
          options.minute = '2-digit'
          options.second = '2-digit'
        }

        return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value))
      },
      logout(){
      this.$router.push('/login')
    },
}
}
</script>
