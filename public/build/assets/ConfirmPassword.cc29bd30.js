import{u as i,W as n,a as e,j as s,b as m}from"./app.293a78a2.js";import{c}from"./index.0579b088.js";import{A as p}from"./AuthenticationCard.e586ea24.js";import{I as u}from"./InputError.68b75152.js";import{I as d}from"./InputLabel.8542de9e.js";import{P as l}from"./PrimaryButton.9495eb81.js";import{T as f}from"./TextInput.acc7a464.js";import"./AuthenticationCardLogo.73459c8e.js";function C(){const o=i(),r=n({password:""});function t(a){a.preventDefault(),r.post(o("password.confirm"),{onFinish:()=>r.reset()})}return e(p,{children:[s(m,{title:"Secure Area"}),s("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),e("form",{onSubmit:t,children:[e("div",{children:[s(d,{htmlFor:"password",children:"Password"}),s(f,{id:"password",type:"password",className:"mt-1 block w-full",value:r.data.password,onChange:a=>r.setData("password",a.currentTarget.value),required:!0,autoComplete:"current-password",autoFocus:!0}),s(u,{className:"mt-2",message:r.errors.password})]}),s("div",{className:"flex justify-end mt-4",children:s(l,{className:c("ml-4",{"opacity-25":r.processing}),disabled:r.processing,children:"Confirm"})})]})]})}export{C as default};