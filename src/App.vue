<style lang="scss">
body,
html {
    margin: 0;
    padding: 0;
    height: 100%;
    background-color: $yellow-x-light;
}

/* apply a natural box layout model to all elements, but allowing components to change
     * https://www.paulirish.com/2012/box-sizing-border-box-ftw/
     */
html {
    box-sizing: border-box;
}
*,
*:after,
*:before {
    box-sizing: inherit;
}

a {
    color: $red;
}

h1 {
    font-size: $font-size-xxl;
    line-height: $font-size-xxl;
}
h2 {
    font-size: $font-size-xl;
    line-height: $font-size-xl;
}

#app {
    font-family: $font-family;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $black;

    // sticky footer
    min-height: 100%;
    display: flex;
    flex-direction: column;

    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
}

.site-content {
    flex: 1;
    background-color: $brown-x-light;
}
.content-row {
    padding: 40px;
}
</style>

<template>
<div id="app">
    <cc-header></cc-header>
    <router-view></router-view>
    <cc-footer></cc-footer>
</div>
</template>

<script>
import CcHeader from './components/CcHeader'
import CcFooter from './components/CcFooter'
export default {
    name: 'app',
    components: {
        CcHeader,
        CcFooter
    }
}
</script>
