<template>
  <div>
    <h1>{{ title }}</h1>
    <breed-adder @new="addPup" />
    
    <ul>
      <breed :key="$index" v-for="(breed, $index) in breeds" :name="breed"></breed>
    </ul>
          <!--
            In HTML, there are three new categories of attributes
            that didn't exist before:

              @click ==> specify event listeners for an event
              :src   ==> 
              v-*    ==> special built-in templating feature
          -->
      </div>
</template>

<script>
import Breed from './Breed.vue';
import BreedAdder from './BreedAdder.vue';

export default {
  components: {
    'breed': Breed,
    'breed-adder': BreedAdder,
  },
  // State is called data
  data() {
    return {
      title: 'Best dog breeds',
      breeds: [],
    };
  },
  methods: { // methods is a reserved name in Vue
    addPup(name) {
      // push the text from the textbox into 'breeds' array
      this.breeds.push(name);
    }
  },
};
</script>

<style lang="scss">
li {
  background-color: red;
  color: orange;
}
</style>
