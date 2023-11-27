import{u as m,W as l,a as t,j as e,b as n}from"./app.293a78a2.js";import{c as u}from"./index.0579b088.js";import{A as d}from"./AuthenticationCard.e586ea24.js";import{I as c}from"./InputLabel.8542de9e.js";import{P as p}from"./PrimaryButton.9495eb81.js";import{T as f}from"./TextInput.acc7a464.js";import{I as h}from"./InputError.68b75152.js";import"./AuthenticationCardLogo.73459c8e.js";function I({status:s}){const o=m(),a=l({email:""});function i(r){r.preventDefault(),a.post(o("password.email"))}return t(d,{children:[e(n,{title:"Forgot Password"}),e("div",{className:"mb-4 text-sm text-gray-600",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),s&&e("div",{className:"mb-4 font-medium text-sm text-green-600",children:s}),t("form",{onSubmit:i,children:[t("div",{children:[e(c,{htmlFor:"email",children:"Email"}),e(f,{id:"email",type:"email",className:"mt-1 block w-full",value:a.data.email,onChange:r=>a.setData("email",r.currentTarget.value),required:!0,autoFocus:!0}),e(h,{className:"mt-2",message:a.errors.email})]}),e("div",{className:"flex items-center justify-end mt-4",children:e(p,{className:u({"opacity-25":a.processing}),disabled:a.processing,children:"Email Password Reset Link"})})]})]})}export{I as default};