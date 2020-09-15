<template>
  <div class="row">
    <div class="col-md-12">
      <p>Counter is: {{counter}}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {GETTERS} from "@/store/types";

export default {
  name: "Result",
  computed: {
    ...mapGetters({
      counter: GETTERS.COUNTER
    })
  }
}
</script>

<style scoped>

</style>
