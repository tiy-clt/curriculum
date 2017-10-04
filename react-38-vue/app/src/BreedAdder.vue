<template>
    <div>
        <input type="text" placeholder="Pup type" v-model="breed">
        <button @click="sendPup">Add breed</button>
    </div>
</template>

<script>
export default {
    data() {
        return { 
            breed: '',
        };
    },
    methods: {
        sendPup() {
            // This means 'run the function passed in as @new'
            // passing this.breed as the parameter.
            this.$emit('new', this.breed);
        }
    }
};
</script>

<style lang="scss">

</style>