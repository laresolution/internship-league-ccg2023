<template>
    <v-text-field label="Email" type="email" v-model="email"
                    :rules="emailRules" required></v-text-field>
</template>

<script>
export default {
    name: 'Email',
    data: () => ({        
        email: '',
        emailRules: [
            value => !!value || 'Email is required.',
            value => value.indexOf('@') !== 0 || 'Email should have a username',
            value => value.includes('@') || 'Email must include @ symbol.',
            value => value.indexOf('.')-value.indexOf('@')>1 || 'Email should contain a valid domain.',
            value => value.indexOf('.') <= value.length - 3 || 'Email should contain a valid damain extension.'
        ]
    }),
    methods: {
        
    }
}
</script>

<style scoped>
</style>