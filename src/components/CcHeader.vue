<style scoped>
    h1 {
        margin: 0;
        padding: 0;
    }
    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>

<template>
    <header>
        <h1>Chilos Chile</h1>
        <nav>
            <a href="https://store.chiloschile.com">Buy Salsa</a>
            <router-link class="menu-item" :to="{name: 'Contact'}">
                Contact
            </router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'cc-header'
}
</script>
