<template>
  <div id="app">
    <div class="container">
      <h1><span class="header">Single Note</span> <small>(Only One Edition)</small></h1>
      <textarea v-model="noteText" class="noteInput" autofocus rows="4"></textarea>
      <p>by <a href="https://maiker.de">My_Maker</a></p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: { },

  data() {
    return {
      noteText: ""
    }
  },

  watch: {
    noteText: function() {
      this.save()
    }
  },

  methods: {
    start: function () {
      this.noteText = this.$store.state.note
    },
    save: function () {
      this.$store.commit('updateNote', this.noteText)
    }
  },

  created() {
    this.start()
  }
}
</script>

<style lang="scss">
@import "@/sass/app.scss";
</style>