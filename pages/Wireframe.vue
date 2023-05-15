<template>
    <CardList>
        <Card v-for="n in 5" :key="n"></Card>
    </CardList>
</template>
<script>
import Card from '~/components/Card.vue'
import CardList from '~/components/CardList.vue';

export default {
    name: 'Wireframe',
    components: { Card, CardList },

}
</script>
<style scoped>
</style>