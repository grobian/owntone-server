import{_,r as n,o as l,c as r,a as s,z as t,d as a,w as p,k as m,q as v}from"./index.js";const f={name:"ContentWithHeading",data(){return{options_visible:!1}},computed:{icon_name(){return this.options_visible?"chevron-up":"chevron-down"},position(){return{hash:this.options_visible?"#top":"#app"}}},mounted(){this.$slots.options&&(this.observer=new IntersectionObserver(this.onElementObserved,{rootMargin:"-82px 0px 0px 0px",threshold:1}),this.observer.observe(this.$refs.options_ref))},methods:{onElementObserved(e){e.forEach(({target:c,isIntersecting:o})=>{this.options_visible=o})},visibilityChanged(e){this.options_visible=e}}},u={class:"section"},b={class:"container"},g={class:"columns is-centered"},$={class:"column is-four-fifths"},k={key:0},C={ref:"options_ref",style:{height:"1px"}},x={class:"buttons is-centered mt-4 mb-2"},w={id:"top",class:"level is-clipped"},E={class:"level-left is-flex-shrink-1"},y={class:"level-item is-flex-shrink-1 has-text-centered-mobile"},z={class:"level-right has-text-centered-mobile"},B={class:"mt-4"};function N(e,c,o,O,V,i){const d=n("mdicon"),h=n("router-link");return l(),r("section",u,[s("div",b,[s("div",g,[s("div",$,[e.$slots.options?(l(),r("section",k,[s("div",C,null,512),t(e.$slots,"options"),s("nav",x,[a(h,{class:"button is-small is-white",to:i.position},{default:p(()=>[a(d,{class:"icon is-small",name:i.icon_name,size:"16"},null,8,["name"])]),_:1},8,["to"])])])):m("",!0),s("div",{class:v({"is-full-height":e.$slots.options})},[s("nav",w,[s("div",E,[s("div",y,[s("div",null,[t(e.$slots,"heading-left")])])]),s("div",z,[t(e.$slots,"heading-right")])]),t(e.$slots,"content"),s("div",B,[t(e.$slots,"footer")])],2)])])])])}const W=_(f,[["render",N]]);export{W as C};