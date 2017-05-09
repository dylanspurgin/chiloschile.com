<style lang="scss" scoped>
footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    height: 60px;
    line-height: 60px;

    font-size: $font-size-sm;

    nav {
        .menu-item {
            margin-right: 20px;
        }
    }
}
</style>

<template>
    <footer>
        <nav>
            <router-link class="menu-item" :to="{name: 'Home'}">
                Home</router-link>
            <router-link class="menu-item" :to="{name: 'Policies'}">
                Policies</router-link>
            <router-link class="menu-item" :to="{name: 'Trivia'}">
                Chile Trivia</router-link>
            <a class="menu-item" href="https://store.chiloschile.com">
                Store</a>
            <router-link class="menu-item" :to="{name: 'Contact'}">
                Contact</router-link>
        </nav>
        <section class="copyright">
            All content &copy; ChilosChile {{year}}
        </section>
    </footer>
</template>

<script>
export default {
    name: 'cc-footer',
    computed: {
        year: function () {
            return new Date().getFullYear()
        }
    }
}
</script>
