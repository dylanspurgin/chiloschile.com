<style lang="scss" scoped>
    $header-shadow: 0px 3px 5px 0px rgba(0,0,0,0.25);
    // $header-logo-shadow: rgba(0, 0, 0, 0.25) 0px 3px 5px 5px;
    $header-logo-shadow: rgba(0, 0, 0, 0.25) 0px 3px 5px -2px;

    header {
        z-index: 1;
        // background-color: $red;

        display: flex;
        flex-direction: column;

        position: relative;
        width: 100%;
        margin: 0 auto;

        box-shadow: $header-shadow;

        h1 {
            margin: 0;
            padding: 0;
        }
    }
    section.header-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        height: 110px;

    }
    section.branding {
        height: 180px;
        width: 180px;
        position: relative;
        top: 8px;
        left: 40px;
        border-radius: 90px;
        background-color: $yellow-x-light;
        display: flex;
        align-items: center;
        justify-content: center;
        -webkit-box-shadow: $header-logo-shadow;
        -moz-box-shadow: $header-logo-shadow;
        box-shadow: $header-logo-shadow;
        border: 6px $red solid;

        img.header-logo {
            height: 120px;
            margin-top: -16px;
        }
    }
    nav {

        display: block;
        position: absolute;
        bottom: 0;
        width: 100%;
        z-index: -1;
        text-align: right;
        left: 0;
        padding-right: 80px;

        // display: flex;
        line-height: $font-size-xxl;
        background-color: $red;
        a.menu-item {
            text-decoration: none;
            margin-left: 20px;
            align-self: flex-end;
            color: $yellow-x-light;
            text-transform: uppercase;
            margin-bottom: 1px;
            font-weight: bold;
        }
        a.menu-item:hover {
            &::after {
                content: '';
                position: relative;
                display: block;
                border-bottom: solid 1px $yellow;
            }
        }
    }
</style>

<template>
    <header>
        <section class="header-content boxed">
            <section class="branding">
                <img v-bind:src="logoImage" class="header-logo" />
            </section>
            <nav>
                <a class="menu-item" href="https://store.chiloschile.com">Shop Salsa</a>
                <router-link class="menu-item" :to="{name: 'Contact'}">
                    Contact
                </router-link>
            </nav>
        </section>
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
