<style lang="scss" scoped>
    $header-shadow: 0px 3px 5px 0px rgba(0,0,0,0.25);
    $header-logo-shadow: $black 0px 0px 3px 1px;

    $header-logo-border: one; // 4px $red solid;

    header {
        z-index: 1;

        display: flex;
        flex-direction: column;

        position: relative;
        width: 100%;
        margin: 0 auto;

        background-color: $white;
        box-shadow: $header-shadow;

        background-color: $red;
        background-position: top;
        background-size: auto 70px;
        background-repeat: repeat-x;

        h1 {
            margin: 0;
            padding: 0;
        }
    }
    section.header-content {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        height: 110px;

    }
    section.branding {
        z-index: 1;
        height: 240px;
        width: 240px;
        position: relative;
        top: 8px;
        left: 40px;
        border-radius: 140px;
        background-color: $yellow-x-light;
        display: flex;
        align-items: center;
        justify-content: center;
        -webkit-box-shadow: $header-logo-shadow;
        -moz-box-shadow: $header-logo-shadow;
        box-shadow: $header-logo-shadow;
        border: $header-logo-border;

        img.header-logo {
            height: 170px;
            margin-top: -16px;

        }
    }
    nav {

        display: block;
        position: absolute;
        bottom: 0;
        width: 100%;

        text-align: right;
        left: 0;
        padding-right: 40px;

        line-height: $font-size-xxl;

        height: 40px;

        a.menu-item {
            text-decoration: none;
            margin-top: 40px;
            margin-left: 20px;
            align-self: flex-end;
            color: $yellow-x-light;
            text-transform: uppercase;
            border-bottom: solid 2px $red;
            font-weight: bold;
        }
        a.menu-item:hover {
            border-bottom: solid 2px $yellow;
        }
        a.menu-item.router-link-active {
            border-bottom: solid 2px $yellow;
            color: $yellow;
        }
    }

    // Mobile specific styling
    @media (max-width: $mobile-max-width) {

        header {
            background-position: 0px -30px;

            nav {
                display: block;
                position: absolute;
                bottom: 0;
                width: 100%;
                text-align: right;
                left: 0;
                padding-right: 10px;
            }
        }

        section.header-content {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            height: 80px;

        }

        section.branding {
            height: 100px;
            width: 100px;
            position: relative;
            top: 8px;
            left: 10px;
            border-radius: 50px;

            img.header-logo {
                height: 66px;
                margin-top: -6px;
            }
        }
    }
</style>

<template>
    <header v-bind:style="{ backgroundImage: 'url(' + trimImage + ')' }">
        <section class="header-content boxed">
            <section class="branding">
                <router-link :to="{name: 'Home'}">
                    <img v-bind:src="logoImage" class="header-logo" />
                </router-link>
            </section>
            <nav>
                <a class="menu-item" href="https://shop.chiloschile.com">Shop<span class="hidden-mobile"> Salsa</span></a>
                <router-link class="menu-item" :to="{name: 'About'}">
                    About</router-link>
                <router-link class="menu-item" :to="{name: 'Contact'}">
                    Contact</router-link>
            </nav>
        </section>
    </header>
</template>

<script>
const logoImage = require('../assets/chilos-logo.png')
const trimImage = require('../assets/trim.png')

export default {
    name: 'cc-header',
    data: () => {
        return {
            logoImage,
            trimImage
        }
    }
}
</script>
