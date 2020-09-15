<template>
  <div>
    <div class="row">
      <div class="col-md-2">
        <button class="btn btn-danger" @click="decrement">Decrement</button>
      </div>
      <div class="col-md-2">
        <button class="btn btn-primary" @click="increment">Increment</button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <form class="form-inline">
          <label for="add-or-subtract">Add or Subtract:</label>
          <input type="text" id="add-or-subtract" class="form-control m-2" v-model="addOrSubValue">
          <button type="button" class="btn btn-success" @click="addOrSubtract(addOrSubValue)">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Counter",
  data() {
    return {
      addOrSubValue: 0
    }
  },
  methods: {
    ...mapActions({
      increment: 'counter/increment_counter',
      decrement: 'counter/decrement_counter',
      addOrSubtract: 'counter/add_counter'
    })
  }
}
</script>

<style scoped>

</style>
