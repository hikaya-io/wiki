<template>
  <div class="login-form">
    <div class="form-header">Password</div>
    <div>
      <input type="password" class="form-control" v-model="password">
    </div>

    <div class="btn-row">
      <button class="btn" @click="login">
        OK
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      password: ''
    }
  },
  methods: {
    login () {
      if (this.password) {
        const data = JSON.stringify({
          time: new Date().getTime()
        })
        if(this.password === process.env.PASSWORD) {
          window.localStorage.setItem("auth", data)
          this.$emit('close', true)
        }
        else {
          console.warn("Wrong credentials")
        }
      } else {
        console.warn("Please fill the form")
      }
    }
  }
}
</script>

<style lang="stylus">
.login-form
  padding: 1rem
  display flex
  flex-direction column
  box-sizing border-box
  .btn-row
    margin-top 1rem
  .btn
    padding 0.6rem 2rem
    outline none
    background-color #6633FF
    color white
    border 0
  .form-header
    color #666
    margin-bottom 0.5rem
  .form-control
    padding 0.6rem
    border 2px solid #ddd
    width 100%
    margin-bottom 0.5rem
    box-sizing border-box
    outline none
    transition border 0.2s ease
    &:focus
      border 2px solid #aaa
</style>