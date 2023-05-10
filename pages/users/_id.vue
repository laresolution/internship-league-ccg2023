<template>
    <div>
        {{ userId }}
    </div>
</template>

<script>

export default {
    name: "ExampleForm",
    layout: "newlayout",
    data() {
        return {};
    },
    computed: {
        userId() {
            return this.$route.params?.id;
        }
    },
    methods: {}
}
</script>

<style scoped>
</style>