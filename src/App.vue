<style lang="scss">
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
