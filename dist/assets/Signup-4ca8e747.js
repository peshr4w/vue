import{f as a,r as x,o as f,c as _,d as o,h as n,v as r,e as p,b as w,w as b,i as v,g as c}from"./index-cce0b33b.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";const h={setup(){const d=a(""),s=a(""),i=a(""),e=a("");return{signup:async()=>{await c.get("https://laravel.peshraw.xyz/sanctum/csrf-cookie"),await c.post("https://laravel.peshraw.xyz/api/register",{name:d,email:s.value,password:i.value,confirm_password:e.value}).then(l=>{console.log(l.data)}).catch(l=>{console.log(l)})},name:d,email:s,password:i,confirm_password:e}},methods:{},mounted(){}},y={class:"p-3 flex justify-center"},V={class:"flex flex-col mb-2"},k=o("label",{for:"email"},"Name",-1),N={class:"flex flex-col mb-2"},U=o("label",{for:"email"},"Email",-1),B={class:"flex flex-col mb-4"},C=o("label",{for:"password"},"Password",-1),S={class:"flex flex-col mb-4"},z=o("label",{for:"c_password"},"Confirm Password",-1),E=o("div",{class:"block mb-4"},[o("button",{class:"px-2 py-1 rounded-lg text-white bg-slate-900 hover:bg-slate-700"},"Signup")],-1),M=o("span",{class:"text-xs text-slate-700"},"Or",-1);function P(d,s,i,e,m,l){const u=x("router-link");return f(),_("div",y,[o("form",{class:"mt-20 shadow-xl rounded-xl p-3",onSubmit:s[4]||(s[4]=v((...t)=>e.signup&&e.signup(...t),["prevent"]))},[o("div",V,[k,n(o("input",{type:"text",id:"name",class:"p-2 py-1 rounded-xl outline-none border","onUpdate:modelValue":s[0]||(s[0]=t=>e.name=t)},null,512),[[r,e.name]])]),o("div",N,[U,n(o("input",{type:"email",id:"email",class:"p-2 py-1 rounded-xl outline-none border","onUpdate:modelValue":s[1]||(s[1]=t=>e.email=t)},null,512),[[r,e.email]])]),o("div",B,[C,n(o("input",{type:"password",id:"password",class:"p-2 py-1 rounded-xl outline-none border","onUpdate:modelValue":s[2]||(s[2]=t=>e.password=t)},null,512),[[r,e.password]])]),o("div",S,[z,n(o("input",{type:"password",id:"c_password",class:"p-2 py-1 rounded-xl outline-none border","onUpdate:modelValue":s[3]||(s[3]=t=>e.confirm_password=t)},null,512),[[r,e.confirm_password]])]),E,o("div",null,[M,p(),w(u,{to:"/login",class:"text-xs text-slate-700"},{default:b(()=>[p("Login")]),_:1})])],32)])}const D=g(h,[["render",P]]);export{D as default};
