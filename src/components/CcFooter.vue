<style scoped>

</style>

<template>
    <footer>
        <nav>
            <router-link class="menu-item" :to="{name: 'Home'}">
                Home
            </router-link>
            <router-link class="menu-item" :to="{name: 'Policies'}">
                Policies
            </router-link>
            <router-link class="menu-item" :to="{name: 'Trivia'}">
                Chile Trivia
            </router-link>
            <a href="https://store.chiloschile.com">
                Store
            </a>
            <router-link class="menu-item" :to="{name: 'Contact'}">
                Contact
            </router-link>
        </nav>
    </footer>
</template>

<script>
export default {
    name: 'cc-footer'
}
</script>
