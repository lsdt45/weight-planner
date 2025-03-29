import{d as R,s as G,v as M,x as z,c as F,w as n,y as o,e,g as y,n as s,t as O,b as T,o as Y}from"./index-X7_34GNW.js";import{u as j,S as A}from"./StepsNav-UxgXauct.js";import{_ as E}from"./_plugin-vue_export-helper-DlAUqK2U.js";const H=R({__name:"UserInfoView",setup(J){G(()=>{console.log("UserInfoView mounted"),console.log("Initial gender value:",a.gender)});const m=T(),r=j(),_=z(null),a=M({gender:r.userData.gender==="male"||r.userData.gender==="female"?r.userData.gender:"male",age:r.userData.age||null,height:r.userData.height||null,weight:r.userData.weight||null,activityLevel:r.userData.activityLevel||"moderate"}),b=u=>{console.log("Gender changed to:",u),a.gender=u},w=[{label:"久坐不动 (几乎不运动)",value:"sedentary",factor:1.2},{label:"轻度活动 (每周轻度运动1-3天)",value:"light",factor:1.375},{label:"中度活动 (每周中度运动3-5天)",value:"moderate",factor:1.55},{label:"积极活动 (每周剧烈运动6-7天)",value:"active",factor:1.725},{label:"非常活跃 (每天剧烈运动或体力劳动)",value:"very_active",factor:1.9}],x={age:[{type:"number",min:16,max:80,message:"年龄必须在16-80岁之间",trigger:["blur","change"]}],height:[{type:"number",min:140,max:220,message:"身高必须在140-220cm之间",trigger:["blur","change"]}],weight:[{type:"number",min:40,max:150,message:"体重必须在40-150kg之间",trigger:["blur","change"]}]},k=u=>{var t;console.log("提交的表单数据:",a),u.preventDefault(),(t=_.value)==null||t.validate(d=>{d?console.log("表单验证失败:",d):(console.log("表单验证通过，提交数据"),r.updateUserInfo({gender:a.gender,age:a.age,height:a.height,weight:a.weight,activityLevel:a.activityLevel}),m.push("/goal-setting"))})},D=()=>{m.push("/")};return(u,t)=>{const d=o("n-layout-header"),U=o("n-h1"),c=o("n-text"),p=o("n-radio"),f=o("n-space"),L=o("n-radio-group"),i=o("n-form-item"),g=o("n-input-number"),C=o("n-select"),v=o("n-button"),h=o("n-grid-item"),I=o("n-grid"),V=o("n-form"),N=o("n-card"),S=o("n-layout-content"),q=o("n-layout-footer"),B=o("n-layout");return Y(),F(B,{class:"layout"},{default:n(()=>[e(d,{class:"header"},{default:n(()=>t[5]||(t[5]=[y("div",{class:"header-content"},[y("h1",{class:"logo"},"增重计划助手")],-1)])),_:1}),e(S,{class:"content"},{default:n(()=>[e(N,{class:"form-card"},{default:n(()=>[e(f,{vertical:"",size:"large"},{default:n(()=>[e(A,{current:1}),e(U,null,{default:n(()=>t[6]||(t[6]=[s("基本信息")])),_:1}),e(c,{depth:"3"},{default:n(()=>t[7]||(t[7]=[s("请填写您的基本身体数据，以便我们计算您的基础代谢率和能量需求")])),_:1}),e(V,{ref_key:"formRef",ref:_,model:a,rules:x,"label-placement":"left","label-width":"100px","require-mark-placement":"right-hanging"},{default:n(()=>[e(i,{label:"性别",path:"gender"},{default:n(()=>[e(L,{value:a.gender,"onUpdate:value":[t[0]||(t[0]=l=>a.gender=l),b]},{default:n(()=>[e(f,null,{default:n(()=>[e(p,{value:"male"},{default:n(()=>t[8]||(t[8]=[s("男性")])),_:1}),e(p,{value:"female"},{default:n(()=>t[9]||(t[9]=[s("女性")])),_:1})]),_:1})]),_:1},8,["value"])]),_:1}),e(i,{label:"年龄",path:"age",required:""},{default:n(()=>[e(g,{value:a.age,"onUpdate:value":t[1]||(t[1]=l=>a.age=l),min:16,max:80,placeholder:"请输入年龄",style:{width:"100%"}},null,8,["value"])]),_:1}),e(i,{label:"身高 (cm)",path:"height",required:""},{default:n(()=>[e(g,{value:a.height,"onUpdate:value":t[2]||(t[2]=l=>a.height=l),min:140,max:220,placeholder:"请输入身高",style:{width:"100%"}},null,8,["value"])]),_:1}),e(i,{label:"体重 (kg)",path:"weight",required:""},{default:n(()=>[e(g,{value:a.weight,"onUpdate:value":t[3]||(t[3]=l=>a.weight=l),min:40,max:150,placeholder:"请输入体重",style:{width:"100%"}},null,8,["value"])]),_:1}),e(i,{label:"活动水平",path:"activityLevel"},{default:n(()=>[e(C,{value:a.activityLevel,"onUpdate:value":t[4]||(t[4]=l=>a.activityLevel=l),options:w,placeholder:"请选择您的日常活动水平"},null,8,["value"])]),_:1}),e(I,{cols:24,"x-gap":12},{default:n(()=>[e(h,{span:12},{default:n(()=>[e(v,{block:"",onClick:D},{default:n(()=>t[10]||(t[10]=[s("返回")])),_:1})]),_:1}),e(h,{span:12},{default:n(()=>[e(v,{type:"primary",block:"",onClick:k},{default:n(()=>t[11]||(t[11]=[s("下一步")])),_:1})]),_:1})]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})]),_:1}),e(q,{class:"footer"},{default:n(()=>[e(c,null,{default:n(()=>[s("© "+O(new Date().getFullYear())+" 增重计划助手 | 专业健康增重方案",1)]),_:1})]),_:1})]),_:1})}}}),W=E(H,[["__scopeId","data-v-60b2e4bb"]]);export{W as default};
