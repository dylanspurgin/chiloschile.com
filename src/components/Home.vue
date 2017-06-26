<style lang="scss" scoped>
    section.hero {
        width: 100%;
        height: 400px;
        background-image: url('/static/hero_002.jpg');
        background-position: center;
        background-size: cover;
        position: relative;

        .hero-lead-in {
            position: absolute;
            right: 0;
            bottom: 0;
            padding: 0 20px 20px 0;
            text-align: center;
            width: 60%;
            display: flex;
            flex-direction: column;
            h1 {
                color: $white;
                font-size: 50px;
                line-height: 112%;
                font-weight: bold;
                text-shadow: $green-x-dark 2px 2px 1px;
                -webkit-text-stroke: $green-x-dark 1px;
                margin-bottom: 20px;
            }
            .button {
                align-self: center;
            }
        }
    }
    section.salsa-ctas-container {
        margin: 40px 0;
    }

    section.salsa-cta {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .salsa-cta-heading {
        }

        img.salsa-cta-image {
            height: 380px;
        }

        .salsa-cta-copy {
            text-align: center;
            margin-left: 20px;
        }

        h2 {
            margin: 10px 0 10px 0;
        }
        h3 {
            margin: 10px 0 20px 0;
            padding: 0;
            font-style: italic;
        }
    }

    // Mobile specific styling
    @media (max-width: $mobile-max-width) {
        section.hero {
            .hero-lead-in {
                position: relative;
                padding: 20px;
                text-align: center;
                width: 100%;
                display: flex;
                flex-direction: column;

                h1 {
                    font-size: 40px;
                }
            }
        }

        section.salsa-cta {
            img.salsa-cta-image {
                height: 80vw;
            }

            &.salsa-cta--green {
                .salsa-cta-copy {
                    margin-left: 0;
                    margin-right: 20px;
                }
            }
        }
    }
</style>

<template>
    <section class="site-content boxed">
        <section class="hero">
            <section class="hero-lead-in">
                <h1>Authentic salsa made from fresh ingredients in Mesilla, NM</h1>
                <a href="http://shop.chiloschile.com/category.sc?categoryId=2" class="button button-lg button-cta button-yellow">Shop Now</a>
            </section>
        </section>

        <section class="content-row content-padding">

            <h2 class="section-header">Highway 28 Salsa</h2>
            <!-- <p>Our salsa is made in Mesilla, NM from ingredients grown right
                here in the Mesilla Valley along Highway 28.</p> -->
            <!-- <p>We offer two pungency levels to suite your taste; Hot and
                Not-quite-as-hot. Both are made with the same honest ingredients.
                Choose your favorite or grab a
                <a href="http://shop.chiloschile.com/">mixed case</a> containing
                half red and half green.</p> -->

            <section class="salsa-ctas-container stacked-on-mobile">

                <!-- red table/desktop -->
                <section class="salsa-cta">
                    <img class="salsa-cta-image" v-bind:src="salsaRedImage" />
                    <section class="salsa-cta-copy cc-panel hidden-mobile">
                        <h2 class="salsa-cta-heading red shadowed-text--black">Red Lid</h2>
                        <h3 class="red shadowed-text--yellow">Original Red Hot</h3>
                        <a class="button button-cta button-red yellow"
                            href="http://shop.chiloschile.com/category.sc?categoryId=2">Shop<span class="hidden-mobile"> Now</span></a>
                    </section>
                    <!-- mobile -->
                    <section class="salsa-cta-copy hidden-tablet">
                        <h2 class="salsa-cta-heading red shadowed-text--black">Red Lid</h2>
                        <h3 class="red shadowed-text--yellow">Original Red Hot</h3>
                        <a class="button button-cta button-red yellow"
                            href="http://shop.chiloschile.com/category.sc?categoryId=2">Shop<span class="hidden-mobile"> Now</span></a>
                    </section>
                </section>

                <!-- green tablet/desktop -->
                <section class="salsa-cta salsa-cta--green hidden-mobile">
                    <img class="salsa-cta-image" v-bind:src="salsaGreenImage" />
                    <section class="salsa-cta-copy cc-panel green-xdark">
                        <h2 class="salsa-cta-heading green shadowed-text--black">Green Lid</h2>
                        <h3 class="hidden-mobile green shadowed-text--yellow">Milder but not Mild</h3>
                        <h3 class="hidden-tablet green shadowed-text--yellow">Milder, not Mild</h3>
                        <a class="button button-cta button-green yellow"
                            href="http://shop.chiloschile.com/category.sc?categoryId=2">Shop<span class="hidden-mobile"> Now</span></a>
                    </section>
                </section>

                <!-- green mobile -->
                <section class="salsa-cta salsa-cta--green hidden-tablet">
                    <section class="salsa-cta-copy green-xdark">
                        <h2 class="salsa-cta-heading green shadowed-text--black">Green Lid</h2>
                        <h3 class="hidden-mobile green shadowed-text--yellow">Milder but not Mild</h3>
                        <h3 class="hidden-tablet green shadowed-text--yellow">Milder, not Mild</h3>
                        <a class="button button-cta button-green yellow"
                            href="http://shop.chiloschile.com/category.sc?categoryId=2">Shop<span class="hidden-mobile"> Now</span></a>
                    </section>
                    <img class="salsa-cta-image" v-bind:src="salsaGreenImage" />
                </section>

            </section>

            <h2 class="section-header">Did you know?</h2>
            <p>
                <img v-bind:src="jalapenoImage" class="inline-image"/>
                The chile (or chili) pepper is the fruit of plants from the genus
                <span class="italic">Capsicum</span>, members of the nightshade
                family. <span class="italic">Capsicum annuum</span> is
                the most common and extensively cultivated species and includes
                many common varieties such as bell peppers, wax, cayenne,
                jalapeños, chiltepin, and all forms of New Mexico chile.</p>
            <p>Want to know more? Check out our
                <router-link :to="{name: 'Trivia'}">chile
                    trivia page</router-link>.</p>

        </section>

    </section>
</template>

<script>
const ctaBgImage = require('../assets/cta-bg.jpg')

const salsaRedImage = require('../assets/salsa-red.jpg')
const salsaGreenImage = require('../assets/salsa-green.jpg')
const jalapenoImage = require('../assets/jalapeno.jpg')

export default {
    name: 'home',
    data: () => {
        return {
            ctaBgImage,
            salsaRedImage,
            salsaGreenImage,
            jalapenoImage
        }
    }
}
</script>
