<template>
  <div id="app" class="container">
    <h2>{{title}}</h2>
    <Result></Result>
    <Counter></Counter>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Result from "@/components/Result";
import Counter from "@/components/Counter";

export default {
  name: 'App',
  components: {
    Result,
    Counter
  },
  computed: {
    ...mapGetters({
      title: 'title'
    })
  }
}
</script>

<style>

</style>
