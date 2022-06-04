<template>
    <div class="card">
        <img :src="img" />
    </div>
</template>

<script>

export default {
    name: 'CharacterCard',
    props: {
        img: String
    },
}
</script>

<style scoped>
.card {
    height: 100vh;
    width: 25%;
    display: flex;
    align-items: center;
}
</style>