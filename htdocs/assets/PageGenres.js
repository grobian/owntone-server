import{G as d,a as f}from"./GroupByList.js";import{C as h}from"./ContentWithHeading.js";import{I as b}from"./IndexButtonList.js";import{L as x}from"./ListGenres.js";import{T as w}from"./TabsMusic.js";import{_ as C,r as a,o as B,c as G,d as r,w as c,e as L,a as l,t as _}from"./index.js";import"./ModalDialogGenre.js";const i={load(e){return L.library_genres("music")},set(e,n){e.genres=n.data,e.genres=new d(n.data),e.genres.group(f("name_sort"))}},y={name:"PageGenres",components:{ContentWithHeading:h,IndexButtonList:b,ListGenres:x,TabsMusic:w},beforeRouteEnter(e,n,s){i.load(e).then(o=>{s(t=>i.set(t,o))})},beforeRouteUpdate(e,n,s){const o=this;i.load(e).then(t=>{i.set(o,t),s()})},data(){return{genres:new d}}},k={class:"fd-page-with-tabs"},N=["textContent"],$=["textContent"];function E(e,n,s,o,t,I){const m=a("tabs-music"),p=a("index-button-list"),g=a("list-genres"),u=a("content-with-heading");return B(),G("div",k,[r(m),r(u,null,{options:c(()=>[r(p,{index:t.genres.indexList},null,8,["index"])]),"heading-left":c(()=>[l("p",{class:"title is-4",textContent:_(e.$t("page.genres.title"))},null,8,N),l("p",{class:"heading",textContent:_(e.$t("page.genres.count",{count:t.genres.total}))},null,8,$)]),content:c(()=>[r(g,{genres:t.genres,media_kind:"music"},null,8,["genres"])]),_:1})])}const H=C(y,[["render",E]]);export{H as default};