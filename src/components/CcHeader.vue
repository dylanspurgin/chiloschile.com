<style lang="scss" scoped>
    $header-shadow: 0px 6px 5px -4px rgba(0,0,0,0.75);

    h1 {
        margin: 0;
        padding: 0;
    }
    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 120px;
        box-shadow: $header-shadow;
        z-index: 1;
    }
    section.branding {
        height: 240px;
        width: 240px;
        position: relative;
        top: 0px;
        left: 40px;
        border-radius: 140px;
        background-color: $yellow-x-light;
        display: flex;
        align-items: center;
        justify-content: center;
        -webkit-box-shadow: $header-shadow;
        -moz-box-shadow: $header-shadow;
        box-shadow: $header-shadow;

        img.header-logo {
            height: 160px;
        }
    }
    nav {
        display: flex;
        line-height: $font-size-xxl;
        a.menu-item {
            text-decoration: none;
            margin-left: 20px;
            align-self: flex-end;
        }
    }
</style>

<template>
    <header>
        <section class="branding">
            <img v-bind:src="logoImage" class="header-logo" />
        </section>
        <nav>
            <a class="menu-item" href="https://store.chiloschile.com">Shop Salsa</a>
            <router-link class="menu-item" :to="{name: 'Contact'}">
                Contact
            </router-link>
        </nav>
    </header>
</template>

<script>
const logoImage = require('../assets/chilos-logo.png')

export default {
    name: 'cc-header',
    data: () => {
        return {
            logoImage
        }
    }
}
</script>
