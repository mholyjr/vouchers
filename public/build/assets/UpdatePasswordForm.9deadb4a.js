import{u as i,W as w,r as m,a as o,F as f,j as r}from"./app.293a78a2.js";import{c as g}from"./index.0579b088.js";import{A as h}from"./ActionMessage.7d06ce1d.js";import{F as _}from"./FormSection.b1cb34bc.js";import{I as e}from"./InputError.68b75152.js";import{I as t}from"./InputLabel.8542de9e.js";import{P as N}from"./PrimaryButton.9495eb81.js";import{T as n}from"./TextInput.acc7a464.js";import"./transition.b3d540a8.js";import"./SectionTitle.713e09e5.js";function T(){const l=i(),s=w({current_password:"",password:"",password_confirmation:""}),c=m.exports.useRef(null),d=m.exports.useRef(null);function u(){s.put(l("user-password.update"),{errorBag:"updatePassword",preserveScroll:!0,onSuccess:()=>s.reset(),onError:()=>{var a,p;s.errors.password&&(s.reset("password","password_confirmation"),(a=c.current)==null||a.focus()),s.errors.current_password&&(s.reset("current_password"),(p=d.current)==null||p.focus())}})}return o(_,{onSubmit:u,title:"Update Password",description:"Ensure your account is using a long, random password to stay secure.",renderActions:()=>o(f,{children:[r(h,{on:s.recentlySuccessful,className:"mr-3",children:"Saved."}),r(N,{className:g({"opacity-25":s.processing}),disabled:s.processing,children:"Save"})]}),children:[o("div",{className:"col-span-6 sm:col-span-4",children:[r(t,{htmlFor:"current_password",children:"Current Password"}),r(n,{id:"current_password",type:"password",className:"mt-1 block w-full",ref:d,value:s.data.current_password,onChange:a=>s.setData("current_password",a.currentTarget.value),autoComplete:"current-password"}),r(e,{message:s.errors.current_password,className:"mt-2"})]}),o("div",{className:"col-span-6 sm:col-span-4",children:[r(t,{htmlFor:"password",children:"New Password"}),r(n,{id:"password",type:"password",className:"mt-1 block w-full",value:s.data.password,onChange:a=>s.setData("password",a.currentTarget.value),autoComplete:"new-password",ref:c}),r(e,{message:s.errors.password,className:"mt-2"})]}),o("div",{className:"col-span-6 sm:col-span-4",children:[r(t,{htmlFor:"password_confirmation",children:"Confirm Password"}),r(n,{id:"password_confirmation",type:"password",className:"mt-1 block w-full",value:s.data.password_confirmation,onChange:a=>s.setData("password_confirmation",a.currentTarget.value),autoComplete:"new-password"}),r(e,{message:s.errors.password_confirmation,className:"mt-2"})]})]})}export{T as default};
