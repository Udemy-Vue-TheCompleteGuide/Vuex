<template>
  <div id="app" class="container">
    <h2>Vuex - The global manage store</h2>
    <Result></Result>
    <Counter></Counter>
  </div>
</template>

<script>
import Result from "@/components/Result";
import Counter from "@/components/Counter";

export default {
  name: 'App',
  components: {
    Result,
    Counter
  }
}
</script>

<style>
/*#app {*/
/*  font-family: Avenir, Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
