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

#app {    
    // sticky footer
    min-height: 100%;
    display: flex;
    flex-direction: column;

    position: relative;
    width: 100%;
    margin: 0 auto;
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
