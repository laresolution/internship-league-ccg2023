<template>
    <div class="">
        <button v-on:click="say('hi')">Say hi</button>
        <button v-on:click="say('what')">Say what</button>
        <div class="alert alert-primary" role="alert">
  This is a primary alert—check it out!
</div>
    </div>
</template>

<script>
export default {
    name: 'test1',
    methods: {
    say: function (message) {
      alert(message)
    }
  }
}
</script>

<style scoped>

</style>