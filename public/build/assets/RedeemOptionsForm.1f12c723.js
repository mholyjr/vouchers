import{I as i}from"./InputError.68b75152.js";import{I as s}from"./InputLabel.8542de9e.js";import{p as l,i as c}from"./Tracker.e31da2e8.js";import{a,F as m,j as t}from"./app.293a78a2.js";import"./transition.b3d540a8.js";import"./use-root-containers.dc5aea37.js";const g=({form:e})=>a(m,{children:[a("div",{children:[t(s,{htmlFor:"title",children:"Product Title"}),t(l,{id:"title",type:"text",className:"mt-1 block w-full",value:e.data.title,onChange:r=>e.setData("title",r.currentTarget.value),required:!0,autoFocus:!0}),t(i,{className:"mt-2",message:e.errors.title})]}),a("div",{className:"mt-4",children:[t(s,{htmlFor:"price",children:"Product Price"}),t(c,{id:"price",step:"1",className:"mt-1 block w-full",value:e.data.price,onChange:r=>e.setData("price",r.currentTarget.value),required:!0}),t(i,{className:"mt-2",message:e.errors.price})]})]});export{g as RedeemOptionsForm};
