webpackJsonp([0],[,,function(e,t,a){"use strict";var s=a(1),n=a(46),i=a(35),o=a.n(i),r=a(31),l=a.n(r),c=a(34),d=a.n(c),h=a(36),v=a.n(h),u=a(37),m=a.n(u);s.a.use(n.a),t.a=new n.a({mode:"history",routes:[{path:"/",name:"Home",component:o.a},{path:"/about",name:"About",component:l.a},{path:"/contact",name:"Contact",component:d.a},{path:"/policies",name:"Policies",component:v.a},{path:"/trivia",name:"Trivia",component:m.a}]})},function(e,t){},,function(e,t,a){a(22);var s=a(0)(a(8),a(44),null,null);e.exports=s.exports},,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(1),n=a(5),i=a.n(n),o=a(2),r=a(6),l=a(4),c=a.n(l);a(3),s.a.use(r.a),s.a.use(c.a,{enableAutoClasses:!0}),s.a.config.productionTip=!1,new s.a({el:"#app",router:o.a,template:"<App/>",components:{App:i.a}})},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(33),n=a.n(s),i=a(32),o=a.n(i);t.default={name:"app",components:{CcHeader:n.a,CcFooter:o.a}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(27);t.default={name:"about",data:function(){return{mapImage:s}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"cc-footer",computed:{year:function(){return(new Date).getFullYear()}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(24),n=a(30);t.default={name:"cc-header",data:function(){return{logoImage:s,trimImage:n}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"contact",data:function(){return{name:"",email:"",message:"",maxLength:500,formSubmitted:!1,formSuccess:!1}},methods:{isValid:function(){return this.email.indexOf("@")>0},submitForm:function(){var e=this;this.$validator.validateAll().then(function(){e.$http({url:"http://chiloschile.com/static/server/contact.php",method:"POST",body:{name:e.name,email:e.email,message:e.message}}).then(function(e){"success"===e.body.result.toLowerCase()?(this.formSuccess=!0,this.formSubmitted=!0):(this.formSuccess=!1,this.formSubmitted=!0)},function(){this.formSuccess=!1,this.formSubmitted=!0})}).catch(function(){})},resetForm:function(){this.name="",this.email="",this.message="",this.formSubmitted=!1,this.formSuccess=!1},showForm:function(){this.formSubmitted=!1}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a(25),n=a(29),i=a(28),o=a(26);t.default={name:"home",data:function(){return{ctaBgImage:s,salsaRedImage:n,salsaGreenImage:i,jalapenoImage:o}}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"policies"}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"trivia"}},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t,a){e.exports=a.p+"static/img/chilos-logo.94a47b9.png"},function(e,t,a){e.exports=a.p+"static/img/cta-bg.553b8bd.jpg"},function(e,t,a){e.exports=a.p+"static/img/jalapeno.9fe550d.jpg"},function(e,t,a){e.exports=a.p+"static/img/map.cfe4a20.png"},function(e,t,a){e.exports=a.p+"static/img/salsa-green.b7aad6b.jpg"},function(e,t,a){e.exports=a.p+"static/img/salsa-red.c7e1736.jpg"},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAACkCAYAAADfXNO9AAAFA0lEQVR42u3bX4iUVRjH8aOmprWpaUst1Zqb227Uuv7BEPojFlFdZBZRYVgXEUGJFBThjd2JV0VkQQheiIQQ5UXURSFFBIXQX6Fy3XI1N8tK29I113za39GVaWpm33nnfc95R78XP5ad2T0z8+Gc8z7n2X2du9sZSRgQwAILLLDAIiCABRZYYIFFQAALLLDAAouAABZYYIEFFgEBLLDAAgssAgJYYIEFFlgEBLDAAgsssAgIYIEFFlhgERDAAgsssMAiIIAFFlhggUVAAAsssMACi4AAFlhggQUWAQEssMACCywCAlhgRc+3XfONJAtYYIEVH4uNm6shWGCBBRYBASywwAILLFK0N9T6iLPnNzvb9v6/o8f0HFinIpCDu5xZ//9Hz+lnznqsp16qjFSeh9adxVjrtySHigoWG0ofulaoaGAxoTa+kR4qClgjQwUHC400Zbmzzz7JDioo2JkAFQwsFNSclc56v8gPKghYKKhqxWbDgIUoDUJC5QpW1BqqkGB5Qa3ZEBcqF7Ci11CFAsu6NHjznWJBZQrWKDVUIcCyathlDaUr6NI12S/pusCKWENpPI2b1x6YGqweqJueyR5KVX4pVKHAilRDaSlr7wt1la0ZrChQ+qNENahCgBWhhtKYMd9DYrBGg4oK1sgNu+Bgjd7ZDAoWumFXXkM1FFjMYrPhwEI17LSU8/5fhdzBilBsKgtva7LVN15mmxa2/yd6/OZbp8YHy7thpzdfDUpIWxd0+ts9ehZ12+6lV9ueB66yvSva/Vd9v+uGOf757d3dtmJJczywmDXU2utneoS++zvswNoWG3htmg2+d5799fG5dmz7RP9V3//x+lT79YWLbd+jbbZz/jyPNtpMywUsr4adZmm1D7Psluke6qfVl9vhty6woS/Hm/0wpuJ4x785xwY/mGwHX73I+u7tsG3zrrWmu8YFBXMxaqiOOyZ5qP3PttqRd8+3E9+PTTz20I7xNrD5Qr9EtXxDgrk8Gnaj7SnatHcv6/TLSzOmptcZnn1aor+93Gw91821JxZfEmwPc6FrKG3omlW/rGuxoc8npHu9YTAtyf1Pt/qxWu6cEATM5dmwq7Sp9y7psj+3TrETfWNSv+bfPeP8ctTsUmkRoqxwIWqo0mhjVlmgpVTvax/9aJJ9dd9sv3eFKFxdiIZdabRs+lfO8jOjXiztd/2Pzzp5S26ASt+F7kPpg/345MyaroAVl2LvWOtfdUXNWGnBXEiorGeWxtBYabDSgLnQfSjtL1ntWRpDY9WyZ9UD5kI37HQ1/O72a+zw2011Y2kMjaUxQ3QrXOg+1MgxR0VlPUtRv6sxNJbGDNHecaEbdjqe6CCsvUaX/rRF6dEPJ/sxNNZoR56swFyMhp2OKGrHHNo4w5/1aoXSofvQhhmJjztZgbmsis00s2vPg+2+LXPs04lVOw4jUcWvI9LAlmm2Y/mVmc6qJGAuTcMui6gfpQ+79+HZfpaod1Wt9tIe5Vs0rzSfhkraPU37n4vlrXVXfsYLeYuaDsC67Pcu7rKfn7vUnxdVDpxGG55tx78+2cf6fdN0X8xq6el38oQq/aNNaa/Pjdz8uOrF/GdTpSW5flGbv6rpgK26SSjqdamrsO+xNuu7p9N2LpjrZ1PSQ/MZfb+hGoIjbebyaCap956kFcM90twjDRZYBCywwAILLLDIqQweOWAkWcACC6z4WGzcyfMP/Go48CIr+yMAAAAASUVORK5CYII="},function(e,t,a){a(21);var s=a(0)(a(9),a(43),"data-v-7fa26b90",null);e.exports=s.exports},function(e,t,a){a(18);var s=a(0)(a(10),a(40),"data-v-3b99b880",null);e.exports=s.exports},function(e,t,a){a(16);var s=a(0)(a(11),a(38),"data-v-036587b2",null);e.exports=s.exports},function(e,t,a){a(20);var s=a(0)(a(12),a(42),"data-v-7221f08b",null);e.exports=s.exports},function(e,t,a){a(23);var s=a(0)(a(13),a(45),"data-v-cdb301f8",null);e.exports=s.exports},function(e,t,a){a(17);var s=a(0)(a(14),a(39),"data-v-344ee716",null);e.exports=s.exports},function(e,t,a){a(19);var s=a(0)(a(15),a(41),"data-v-60ecab68",null);e.exports=s.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{style:{backgroundImage:"url("+e.trimImage+")"}},[a("section",{staticClass:"header-content boxed"},[a("section",{staticClass:"branding"},[a("router-link",{attrs:{to:{name:"Home"}}},[a("img",{staticClass:"header-logo",attrs:{src:e.logoImage}})])],1),e._v(" "),a("nav",[e._m(0),e._v(" "),a("router-link",{staticClass:"menu-item",attrs:{to:{name:"About"}}},[e._v("\n                About")]),e._v(" "),a("router-link",{staticClass:"menu-item",attrs:{to:{name:"Contact"}}},[e._v("\n                Contact")])],1)])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"menu-item",attrs:{href:"https://shop.chiloschile.com"}},[e._v("Shop"),a("span",{staticClass:"hidden-mobile"},[e._v(" Salsa")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"site-content boxed header-padding"},[a("section",{staticClass:"content-row content-padding"},[a("h2",{staticClass:"section-header"},[e._v("Policies")]),e._v(" "),a("span",{staticClass:"strong"},[e._v("Chilo's Chile")]),e._v(" provides website features to you subject to the following conditions. If you visit or shop at chiloschile.com, you accept these conditions.\n\n        "),a("h3",{attrs:{id:"shipping"}},[e._v("Shipping")]),e._v(" "),a("p",[e._v("Please be aware of any specific delivery policies at your\n            shipping destination. Once your Chilo’s Chile product leaves\n            our facility they are at the mercy of the carrier. Chilo’s Chile\n            cannot be held responsible for orders delayed by events or\n            incidents beyond our carrier's control, including severe weather\n            conditions and incorrect addresses. We do not require signatures\n            upon reciept of any shipping order. However, due to the\n            perishable nature of our products, it is best for someone to be\n            present to receive delivery.")]),e._v(" "),a("h3",{attrs:{id:"returns"}},[e._v("Returns")]),e._v(" "),a("p",[e._v("If you are not completely satisfied with a Chilo's Chile order,\n            please return it for an exchange or merchandise credit. Returns\n            with the original purchase receipt will be exchanged or credited\n            for the original amount.")]),e._v(" "),a("p",[e._v("To inquire about a return please send us a message via our\n            "),a("router-link",{attrs:{to:{name:"Contact"}}},[e._v("contact page")]),e._v("\n            and include the following information.")],1),e._v(" "),e._m(0),e._v(" "),a("h3",{attrs:{id:"privacy"}},[e._v("Privacy Notice")]),e._v(" "),a("p",[e._v("All of the information collected via this web site is used\n            exclusively for the purpose of fulfilling our customers' orders,\n            managing their accounts, and to inform customers directly about\n            site updates and periodic specials. If the need arises, we may\n            call the contact number customers provided to resolve an issue,\n            however customers will never receive any sort of phone\n            solicitation from Chilo’s Chile. We do not share any of the\n            information provided by our customers with any other business or\n            organization for any purposes or reasons whatsoever.")]),e._v(" "),a("p",[e._v("If at any time you no longer wish to receive emails or wish to\n            have your account terminated, please let us know. Please include\n            as much info as possible with your request such as your name,\n            address, and telephone number. Upon the receipt of your request\n            we will promptly delete you from our systems.")]),e._v(" "),a("h3",{attrs:{id:"warranty"}},[e._v("Warranty")]),e._v(" "),a("p",[e._v("There is no warranty, representation or condition of any kind;\n            and any warranty, express or implied, is herby excluded and\n            disclaimed including the implied warranty of merchantability and\n            of fitness for a particular purpose.")]),e._v(" "),a("p",[e._v("It is understood and agreed that seller's liability and\n            purchaser's sole remedy, whether in contract, under any\n            warranty, in tort (including negligence), in strict liability or\n            otherwise shall not exceed the return of the amount of the\n            purchase price paid by the purchaser, and under no circumstances\n            shall seller be liable for any special, incidental or\n            consequential damages, including, but not limited to, personal\n            injury (arising from food or other allergies) or other claims,\n            even if seller has been advised of the possibility of such\n            damages. The price stated for the merchandise is a consideration\n            in limiting seller's liability and purchaser's remedy.")]),e._v(" "),a("p",[e._v("Seller will not be liable for any damages, losses or expenses as\n            a result for purchaser's negligence, whether deemed active or\n            passive and whether or not such negligence is the sole cause of\n            any such damage, loss or expense.")])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("Your name")]),e._v(" "),a("li",[e._v("Address")]),e._v(" "),a("li",[e._v("Phone number")]),e._v(" "),a("li",[e._v("Order number")]),e._v(" "),a("li",[e._v("Item name/description")]),e._v(" "),a("li",[e._v("Reason for return")]),e._v(" "),a("li",[e._v("Action to be taken (replacement or merchandise credit)")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"content-padding boxed stacked-on-mobile"},[a("nav",[a("router-link",{staticClass:"menu-item",attrs:{to:{name:"Home"}}},[e._v("\n            Home")]),e._v(" "),a("router-link",{staticClass:"menu-item",attrs:{to:{name:"Policies"}}},[e._v("\n            Policies")]),e._v(" "),a("router-link",{staticClass:"menu-item",attrs:{to:{name:"Trivia"}}},[e._v("\n            Chile Trivia")]),e._v(" "),a("a",{staticClass:"menu-item",attrs:{href:"https://shop.chiloschile.com"}},[e._v("\n            Store")]),e._v(" "),a("router-link",{staticClass:"menu-item",attrs:{to:{name:"Contact"}}},[e._v("\n            Contact")])],1),e._v(" "),a("section",{staticClass:"copyright"},[e._v("\n        All content © ChilosChile "+e._s(e.year)+"\n    ")])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"site-content boxed header-padding"},[a("section",{staticClass:"content-row content-padding"},[a("h2",{staticClass:"section-header"},[e._v("New Mexico Chile Trivia")]),e._v(" "),a("h3",[e._v("Our Chiles")]),e._v(" "),a("h4",[e._v("Sandia")]),e._v(" "),a("p",[e._v("Originally Sandia A, Dr Roy Harper released this cultivar in\n            1956. Sandia is a cross between New Mexico No. 9 and Anaheim.\n            1,500-2000 SHU.")]),e._v(" "),a("h4",[e._v("NuMex Big Jim")]),e._v(" "),a("p",[e._v("Dr. Nakayama released this cultivar in 1975. Big Jim's are\n            sometimes referred to as the Russian Roulette of Long Green\n            Chile. The SHU's can vary widely between plants in the same\n            crop. 1,000 - 2,000 SHU.")]),e._v(" "),a("h4",[e._v("NuMex Joe E. Parker")]),e._v(" "),a("p",[e._v("Released in 1990 and is named after Mr Joe E. parker of Las\n            Cruces, New Mexico. 800-900 SHU.")]),e._v(" "),a("h3",[e._v("Chile Facts")]),e._v(" "),a("p",[e._v("Chile has been grown in New Mexico for at least four centuries.\n            It is said that Don Juan de Oñate grew chiles.")]),e._v(" "),a("p",[e._v("The three major pod types grown in New Mexico are New Mexican, Cayenne, and Jalapeño.")]),e._v(" "),a("p",[e._v("The most common pod type grown in the United States is the Bell Pepper.")]),e._v(" "),a("p",[e._v("Anaheim seed originated in New Mexico and was taken to California.")]),e._v(" "),a("p",[e._v('The word "Paprika" means "Chile" in Hungarian.')]),e._v(" "),a("p",[e._v("Chile is normally planted in the Mesilla Valley between March 1st and April 1st.")]),e._v(" "),a("p",[e._v("Between 2 and 10 lbs of chile seed is planted per acre.")]),e._v(" "),a("p",[e._v("The seeds are planted about one inch deep.")]),e._v(" "),a("p",[e._v("The row widths are 30 to 40 inches.")]),e._v(" "),a("p",[e._v("The green crop will be ready for harvest in about 120 days, at the begening of August.")]),e._v(" "),a("p",[e._v("The red crop will take about 165 days, ready in early October prior to the first frost.")]),e._v(" "),a("p",[e._v("The plants are thinned resulting in one plant every 10 to 12 inches.")]),e._v(" "),a("p",[e._v("Chile is a shallow rooted crop and uses about 5 acre feet of water during its life time.")]),e._v(" "),a("p",[e._v("A good harvest of Long Green Chile is about 17 tons per acre.")]),e._v(" "),a("p",[e._v("When the Long Green Chile turns red and is harvested and dried, it results in about 3,500 lbs per acre.")]),e._v(" "),a("h3",[e._v("Chilo's Dictionary")]),e._v(" "),a("dl",[a("dt",[e._v("BTT (Blind Taste Test)")]),e._v(" "),a("dd",[e._v('Invented by locals for their "friends" new to the Mesilla Valley. (See Taster)')]),e._v(" "),a("dt",[e._v("Capsaicin")]),e._v(" "),a("dd",[e._v("One of the alkaloids in chile that makes it hot.")]),e._v(" "),a("dt",[e._v("Capsaicinoids")]),e._v(" "),a("dd",[e._v("One of the groups of alkaloids in chile that makes it hot.")]),e._v(" "),a("dt",[e._v("Capsicum")]),e._v(" "),a("dd",[e._v("The genus name for chiles. Genus capsicum is a member of the solanaceae family that includes tomato, potato, tobacco, and petunia.")]),e._v(" "),a("dt",[e._v("Chile")]),e._v(" "),a("dd",[e._v("Anything consisting of the capsicum plant or the fruit from the plant.")]),e._v(" "),a("dt",[e._v("Chili")]),e._v(" "),a("dd",[e._v("A culinary dish consisting of red chile powder and ground beef. Chili does not contain beans.")]),e._v(" "),a("dt",[e._v("NuMex")]),e._v(" "),a("dd",[e._v("Indicates a chile was developed at New Mexico State University.")]),e._v(" "),a("dt",[e._v("Pungency")]),e._v(" "),a("dd",[e._v("The heat of chiles.")]),e._v(" "),a("dt",[e._v("SHU (Scoville Heat Unit)")]),e._v(" "),a("dd",[e._v('A measure of chile pungency named after Wilbur Scoville, based on the dilution of chile samples until heat is no longer detected by a "Taster".')]),e._v(" "),a("dt",[e._v("Taster")]),e._v(" "),a("dd",[e._v("A person new to the Mesilla Valley.")]),e._v(" "),a("dt",[e._v("TOT (Test Osterone Test)")]),e._v(" "),a("dd",[e._v('AKA the "Mucho Macho" or "Poco Loco Test"; used to verify length of resedency in the Mesilla Valley - or sanity.')])]),e._v(" "),a("h3",[e._v("Dr. Fabian Garcia")]),e._v(" "),a("p",[e._v("The Patron of New Mexico Chile.")]),e._v(" "),a("p",[e._v('Dr. Garcia developed "New Mexico No. 9" and released it in 1913,\n            (Garcia 1921). New Mexico No. 9 is a cross breed of Mexican\n            pesilla and chile pepper Colorado. This was important\n            historically because it was the first chile cultivar released\n            from New Mexico State University, and it introduced a new pod\n            type, "New Mexico", to the world. Pungency of "New Mexico No. 9"\n            is estimated to have been around 1,000-1,500 Scoville Heat Units.')]),e._v(" "),a("p",[e._v("Today the New Mexico pod type is also called Long Green and is\n            now a 400+ million dollar industry in New Mexico.")]),e._v(" "),a("p",[e._v('New Mexico State University has the longest continuous program of\n            chile improvement in the world. All "New Mexican" type chiles\n            grown today gained their genetic base from cultivars developed\n            at NMSU.')]),e._v(" "),a("p",[e._v("Born in 1871 in Chihuahua, Mexico. Died August 6, 1948 in New\n            Mexico. Dr. Garcia's grandmother brought him to New Mexico as a\n            child. Dr. Garcia was known to be astute with finances and had\n            the reputation of a gentleman. He willed his estate to NMSU with\n            a directve that the funds where to be used to educate poor\n            youths, as he knew their plight.")]),e._v(" "),a("h3",[e._v("Pungency Chart")]),e._v(" "),a("section",{staticClass:"stacked-on-mobile"},[a("section",{staticStyle:{"min-width":"50%"}},[a("table",{staticClass:"cc-table"},[a("tr",[a("th",[e._v("Chile")]),e._v(" "),a("th",[e._v("SHU")])]),e._v(" "),a("tr",[a("td",[e._v("Bhut Jolokia")]),e._v(" "),a("td",[e._v("1,001,304")])]),e._v(" "),a("tr",[a("td",[e._v("Orange Habanero")]),e._v(" "),a("td",[e._v("210,000")])]),e._v(" "),a("tr",[a("td",[e._v("Red Habanero")]),e._v(" "),a("td",[e._v("150,000")])]),e._v(" "),a("tr",[a("td",[e._v("Tabasco")]),e._v(" "),a("td",[e._v("120,000")])]),e._v(" "),a("tr",[a("td",[e._v("Thai Hot")]),e._v(" "),a("td",[e._v("60,000")])]),e._v(" "),a("tr",[a("td",[e._v("Jalapeno M")]),e._v(" "),a("td",[e._v("25,000")])]),e._v(" "),a("tr",[a("td",[e._v("Cayenne")]),e._v(" "),a("td",[e._v("23,000")])]),e._v(" "),a("tr",[a("td",[e._v("Pasilla")]),e._v(" "),a("td",[e._v("5,500")])]),e._v(" "),a("tr",[a("td",[e._v("Jalapeno")]),e._v(" "),a("td",[e._v("4,000")])]),e._v(" "),a("tr",[a("td",[e._v("Sandia")]),e._v(" "),a("td",[e._v("2,000")])]),e._v(" "),a("tr",[a("td",[e._v("NuMex Big Jim")]),e._v(" "),a("td",[e._v("1,500")])]),e._v(" "),a("tr",[a("td",[e._v("NuMex Joe E Parker")]),e._v(" "),a("td",[e._v("800")])])])]),e._v(" "),a("section",{},[a("p",[e._v("This list is a ball park example. Scoville Heat Units can\n                    vary widely (in a class as well as between the different\n                    varieties).")]),e._v(" "),a("p",[e._v("For example, Jalapenos can vary between 4,000 SHU and 50,000 SHU.\n                    Pasilla can be pleasantly mild.")]),e._v(" "),a("p",[e._v("The pungency levels are a result of two factors; the plant's\n                    genetics and the environment in which it grows. The ambient\n                    temperature and the amount of water the plant receives during\n                    it's life are factors.")])])])])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"site-content boxed"},[e._m(0),e._v(" "),a("section",{staticClass:"content-row content-padding"},[a("section",{staticClass:"stacked-on-mobile"},[e._m(1),e._v(" "),a("section",{staticClass:"contact-form cc-panel"},[e.formSubmitted?e._e():a("form",{on:{submit:function(t){t.preventDefault(),e.submitForm(t)}}},[a("div",{staticClass:"form-group form-group-vertical"},[a("label",{attrs:{for:"name"}},[e._v("Name")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",attrs:{name:"name",type:"text"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group form-group-vertical"},[a("label",{attrs:{for:"email"}},[e._v("Email"),a("sup",[e._v("*")]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("email"),expression:"errors.has('email')"}],staticClass:"small help"},[e._v(e._s(e.errors.first("email")))])]),e._v(" "),a("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"},{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{"data-vv-delay":"1500",name:"email",type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"form-group form-group-vertical"},[a("label",{attrs:{for:"message"}},[e._v("Message "),a("small",[e._v("("),a("span",[e._v(e._s(e.message.length))]),e._v(" / "),a("span",[e._v(e._s(e.maxLength))]),e._v(")")])]),e._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"form-control",attrs:{rows:"5",name:"message"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}})]),e._v(" "),a("button",{staticClass:"button button-submit",attrs:{type:"submit"}},[e._v("Send")])]),e._v(" "),e.formSubmitted&&e.formSuccess?a("div",{staticClass:"thanks"},[a("h3",[e._v("Thanks!")]),e._v(" "),a("p",[e._v("We'll use "+e._s(e.email)+" when responding.")]),e._v(" "),a("a",{attrs:{href:"#"},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.resetForm()}}},[e._v("Send another message")])]):e._e(),e._v(" "),e.formSubmitted&&!e.formSuccess?a("div",{staticClass:"thanks"},[a("h3",[e._v("Uh Oh!")]),e._v(" "),a("p",[e._v("There was a problem submitting the contact form. Please "),a("a",{attrs:{href:"#"},on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.showForm()}}},[e._v("try again")]),e._v(".")]),e._v(" "),e._m(2)]):e._e()])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"header-image"},[a("h1",{staticClass:"page-title"},[e._v("Contact")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"contact-info"},[a("section",[a("h3",[e._v("We'd love to hear from you.")]),e._v(" "),a("p",[e._v("We always value hearing from our customers. Use the\n                        contact info or form to get in touch and we'll\n                        respond as quickly as possible!")]),e._v(" "),a("p",[e._v("We'll never share your information with anyone,\n                        for any purpose or reason.")])]),e._v(" "),a("address",[a("strong",[e._v("Chilo's Chile Inc.")]),a("br"),e._v("\n                    P.O. Box D"),a("br"),e._v("\n                    Mesilla, NM 88046"),a("br"),e._v("\n                    (575) 640-3351\n                ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("If the problem persists, send us an email to "),a("span",{staticClass:"strong"},[e._v("info"),a("span",[e._v("@")]),e._v("chiloschile.com")]),e._v(".")])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"site-content boxed"},[e._m(0),e._v(" "),a("section",{staticClass:"content-row content-padding"},[a("section",{staticClass:"two-columns"},[a("section",[a("h3",[e._v("Mesilla, NM")]),e._v(" "),a("p",[e._v("If you draw a triangle between Mesilla, Deming, and Hatch, NM\n                    you will find the area where approximately 70% of all domestic\n                    chile production and processing occurs. This area, known\n                    as the Mesilla Valley, is where our salsa is made and where\n                    the ingredients that goes in to it are grown.")]),e._v(" "),a("img",{staticClass:"map hidden-tablet",attrs:{src:e.mapImage,width:"100%"}}),e._v(" "),a("h3",[e._v("Our Salsa")]),e._v(" "),a("p",[e._v("Chilo's Chile was formed in 2004 when a love for cooking\n                    and chile turned into a hobby that never stopped\n                    growing.")]),e._v(" "),a("p",[e._v("The products we ship are the same we sell locally.\n                    Our customers from New Mexico to New York, choose Chilo's\n                    because it is the real deal. Those local to the area have\n                    many choices and they choose Chilo's for it's quality.\n                    And now even the New Mexico expatriats can enjoy the\n                    same fresh salsa they used to get back home.")]),e._v(" "),a("p",[e._v("No secrets. Just tomatoes, jalepenos, garlic and salt.\n                    You get fresh salsa delivered to you in every jar.")])]),e._v(" "),a("section",{staticClass:"hidden-mobile"},[a("h3",[e._v("The Mesilla Valley")]),e._v(" "),a("img",{staticClass:"map",attrs:{src:e.mapImage,width:"100%"}})])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"header-image"},[a("h1",{staticClass:"page-title"},[e._v("Chilo's Story")])])}]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("cc-header"),e._v(" "),a("router-view"),e._v(" "),a("cc-footer")],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"site-content boxed"},[e._m(0),e._v(" "),a("section",{staticClass:"content-row content-padding"},[a("h2",{staticClass:"section-header"},[e._v("Highway 28 Salsa")]),e._v(" "),e._m(1),e._v(" "),a("section",{staticClass:"salsa-ctas-container stacked-on-mobile"},[a("section",{staticClass:"salsa-cta"},[a("img",{staticClass:"salsa-cta-image",attrs:{src:e.salsaRedImage}}),e._v(" "),e._m(2),e._v(" "),e._m(3)]),e._v(" "),a("section",{staticClass:"salsa-cta salsa-cta--green hidden-mobile"},[a("img",{staticClass:"salsa-cta-image",attrs:{src:e.salsaGreenImage}}),e._v(" "),e._m(4)]),e._v(" "),a("section",{staticClass:"salsa-cta salsa-cta--green hidden-tablet"},[e._m(5),e._v(" "),a("img",{staticClass:"salsa-cta-image",attrs:{src:e.salsaGreenImage}})])]),e._v(" "),a("h2",{staticClass:"section-header"},[e._v("Did you know?")]),e._v(" "),a("p",[a("img",{staticClass:"inline-image",attrs:{src:e.jalapenoImage}}),e._v("\n            The chile pepper is the fruit of plants from the genus\n            "),a("span",{staticClass:"italic"},[e._v("Capsicum")]),e._v(", members of the nightshade\n            family. "),a("span",{staticClass:"italic"},[e._v("Capsicum annuum")]),e._v(" is\n            the most common and extensively cultivated species and includes\n            many common varieties such as bell peppers, wax, cayenne,\n            jalapeños, chiltepin, and all forms of New Mexico chile.")]),e._v(" "),a("p",[e._v("Want to know more? Check out our\n            "),a("router-link",{attrs:{to:{name:"Trivia"}}},[e._v("chile\n                trivia page")]),e._v(".")],1)])])},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"hero"},[a("section",{staticClass:"hero-lead-in"},[a("h1",[e._v("Authentic salsa made from fresh ingredients in Mesilla, NM")]),e._v(" "),a("a",{staticClass:"button button-lg button-cta button-yellow",attrs:{href:"http://shop.chiloschile.com/category.sc?categoryId=2"}},[e._v("Shop Now")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"cc-panel cc-align-center cc-panel--yellow"},[a("h3",[e._v("Our salsa is made in Mesilla, NM from ingredients grown right\n                here in the Mesilla Valley along Highway 28.")]),e._v(" "),a("p",[e._v("We offer two pungency levels to suite your taste; Hot and\n                Not-quite-as-hot. Both are made with the same honest ingredients.\n                Choose your favorite or grab a\n                "),a("a",{attrs:{href:"http://shop.chiloschile.com/Highway-28-Salsa-Red-Green-Mix-Case-of-12-x-16oz-Jars-0016.htm"}},[e._v("mixed case")]),e._v(" containing\n                half red and half green.")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"salsa-cta-copy cc-panel hidden-mobile"},[a("h2",{staticClass:"salsa-cta-heading red shadowed-text--black"},[e._v("Red Lid")]),e._v(" "),a("h3",{staticClass:"red shadowed-text--yellow"},[e._v("Original Red Hot")]),e._v(" "),a("a",{staticClass:"button button-cta button-red yellow",attrs:{href:"http://shop.chiloschile.com/Highway-28-Salsa-Red-Lid-Case-of-12-x-16oz-Jars-0005.htm"}},[e._v("Shop"),a("span",{staticClass:"hidden-mobile"},[e._v(" Now")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"salsa-cta-copy hidden-tablet"},[a("h2",{staticClass:"salsa-cta-heading red shadowed-text--black"},[e._v("Red Lid")]),e._v(" "),a("h3",{staticClass:"red shadowed-text--yellow"},[e._v("Original Red Hot")]),e._v(" "),a("a",{staticClass:"button button-cta button-red yellow",attrs:{href:"http://shop.chiloschile.com/Highway-28-Salsa-Red-Lid-Case-of-12-x-16oz-Jars-0005.htm"}},[e._v("Shop"),a("span",{staticClass:"hidden-mobile"},[e._v(" Now")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"salsa-cta-copy cc-panel green-xdark"},[a("h2",{staticClass:"salsa-cta-heading green shadowed-text--black"},[e._v("Green Lid")]),e._v(" "),a("h3",{staticClass:"hidden-mobile green shadowed-text--yellow"},[e._v("Milder but not Mild")]),e._v(" "),a("h3",{staticClass:"hidden-tablet green shadowed-text--yellow"},[e._v("Milder, not Mild")]),e._v(" "),a("a",{staticClass:"button button-cta button-green yellow",attrs:{href:"http://shop.chiloschile.com/Highway-28-Salsa-Green-Lid-Case-of-12-x-16oz-Jars-0010.htm"}},[e._v("Shop"),a("span",{staticClass:"hidden-mobile"},[e._v(" Now")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"salsa-cta-copy green-xdark"},[a("h2",{staticClass:"salsa-cta-heading green shadowed-text--black"},[e._v("Green Lid")]),e._v(" "),a("h3",{staticClass:"hidden-mobile green shadowed-text--yellow"},[e._v("Milder but not Mild")]),e._v(" "),a("h3",{staticClass:"hidden-tablet green shadowed-text--yellow"},[e._v("Milder, not Mild")]),e._v(" "),a("a",{staticClass:"button button-cta button-green yellow",attrs:{href:"http://shop.chiloschile.com/Highway-28-Salsa-Green-Lid-Case-of-12-x-16oz-Jars-0010.htm"}},[e._v("Shop"),a("span",{staticClass:"hidden-mobile"},[e._v(" Now")])])])}]}},,,,function(e,t){}],[7]);
//# sourceMappingURL=app.b657039f83b11b62d0d8.js.map