var a=Object.defineProperty,t=Object.prototype.hasOwnProperty,e=Object.getOwnPropertySymbols,o=Object.prototype.propertyIsEnumerable,n=(t,e,o)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,s=(a,s)=>{for(var l in s||(s={}))t.call(s,l)&&n(a,l,s[l]);if(e)for(var l of e(s))o.call(s,l)&&n(a,l,s[l]);return a};import{r as l,o as i,c as r,a as c,b as d,i as p,d as u,w as m,v as g,t as f,e as h,f as w,g as x,p as v,h as b,j as y,F as C,k as A,l as k,m as _,n as P,q as I,s as D,u as T,x as V,y as B,z as E,A as U,B as L,C as j,D as F}from"./vendor.c4936e4e.js";!function(a=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(e){const o=new URL(a,location),n=a=>{URL.revokeObjectURL(a.src),a.remove()};self[t]=a=>new Promise(((e,s)=>{const l=new URL(a,o);if(self[t].moduleMap[l])return e(self[t].moduleMap[l]);const i=new Blob([`import * as m from '${l}';`,`${t}.moduleMap['${l}']=m;`],{type:"text/javascript"}),r=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){s(new Error(`Failed to import: ${a}`)),n(r)},onload(){e(self[t].moduleMap[l]),n(r)}});document.head.appendChild(r)})),self[t].moduleMap={}}}("/assets/");var W={name:"Main",components:{},setup(){}};const S={class:"p-2 bg-albank-1 min-h-screen"},M=c("div",{class:"rounded-2xl"},null,-1),R={class:"rounded-2xl mt-2"},O={class:""};W.render=function(a,t,e,o,n,s){const d=l("router-view");return i(),r("div",S,[M,c("div",R,[c("div",O,[c(d)])])])};class z{constructor(){this.token=localStorage.getItem("token"),this.backApiUrl="https://goalbank.alvitre.com.br",console.log(this.backApiUrl),this.axios=d,this.axiosImage=this.axios.create({baseURL:this.backApiUrl,headers:{Accept:"application/json","Content-Type":"multipart/form-data"}}),this.axiosWithoutToken=this.axios.create({baseURL:this.backApiUrl}),this.axiosInstance=this.axios.create({baseURL:this.backApiUrl,headers:{Authorization:"Bearer "+this.token,"Content-Type":"application/json"}})}async get(a){return this.axiosInstance.get(a)}async post(a,t){return this.axiosInstance.post(a,t)}async put(a,t){return this.axiosInstance.put(a,t)}async patch(a,t){return this.axiosInstance.patch(a,t)}async delet(a){return this.axiosInstance.delete(a)}async postimage(a,t){return this.axiosImage.post(a,t)}async getWithoutToken(a){return this.axiosWithoutToken.get(a)}async postWithoutToken(a,t){return this.axiosWithoutToken.post(a,t)}async putWithoutToken(a,t){return this.axiosWithoutToken.put(a,t)}}const q=new z;function $(a){if(a){const t=a.split("/")[0],e=a.split("/")[1];return a.split("/")[2]+"-"+("0"+e).slice(-2)+"-"+("0"+t).slice(-2)}return a}var H="/assets/logo_albank.e53be5b3.jpeg";const N={setup(){const a=p("institucional"),{linkWhatsApp:t}=a,e=p("auth"),{registerInputs:o,auth:n,Register:s}=e;return{linkWhatsApp:t,Register:s,auth:n,registerInputs:o}}},G={class:"flex flex-wrap justify-center mt-16"},X={class:"w-full sm:w-full md:w-1/3 lg:w-1/4 mx-auto px-6"},J=c("div",{class:"flex flex-wrap margin-bottom-4 margin-topo justify-center"},[c("div",{class:"w-auto text-center"},[c("img",{class:"img-fluid",width:"150",src:H,alt:""})])],-1),Y={class:"text-white text-center"},K=c("div",{class:"font-bold text-2xl mt-4"},"Cadastre-se",-1),Q={class:"mt-2"},Z={key:0,class:"btn-danger-tail text-sm mt-2 cursor-default"},aa={key:1,class:"btn-success-tail text-sm mt-2 cursor-default"},ta={class:"w-full text-center text-white"},ea={class:"text-xl my-7 font-bold"},oa=x(" Já possui uma conta? "),na=c("span",{class:"text-yellow-500 underline cursor-pointer"},"Faça Login",-1),sa={class:"w-full sm:w-full md:w-1/3 lg:w-1/4 mx-auto px-6"},la={class:"flex flex-wrap row-space justify-center mt-2"},ia={class:"w-auto text-center mr-8"},ra={class:"icon-social text-primary text-2xl text-white"},ca=c("h5",null,[c("i",{class:"bg-white-social fab fa-whatsapp"})],-1),da={class:"w-auto text-center mr-8"},pa={class:"icon-social text-primary text-2xl text-white"},ua=c("h5",null,[c("i",{class:"bg-white-social fab fa-facebook-f"})],-1),ma={class:"w-auto text-center mr-8"},ga={class:"icon-social text-primary text-2xl text-white"},fa=c("h5",null,[c("i",{class:"bg-white-social fas fa-map-marker-alt"})],-1);N.render=function(a,t,e,o,n,s){const d=l("router-link"),p=u("maska");return i(),r("div",G,[c("div",X,[J,c("div",Y,[K,c("div",Q,[m(c("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>o.registerInputs.name=a),class:"form-tail mt-1",placeholder:"Nome Completo"},null,512),[[g,o.registerInputs.name]]),m(c("input",{"onUpdate:modelValue":t[2]||(t[2]=a=>o.registerInputs.cellphone=a),class:"form-tail mt-2",placeholder:"Telefone/Whatsapp ( ) 00000-0000"},null,512),[[g,o.registerInputs.cellphone],[p,"(##) #####-####"]]),m(c("input",{"onUpdate:modelValue":t[3]||(t[3]=a=>o.registerInputs.dtBirth=a),type:"text",class:"form-tail mt-2",placeholder:"Data de nascimento    /  /"},null,512),[[g,o.registerInputs.dtBirth],[p,"##/##/####"]]),m(c("input",{"onUpdate:modelValue":t[4]||(t[4]=a=>o.registerInputs.email=a),type:"email",class:"form-tail mt-2",placeholder:"E-mail"},null,512),[[g,o.registerInputs.email]]),m(c("input",{"onUpdate:modelValue":t[5]||(t[5]=a=>o.registerInputs.password=a),type:"password",class:"form-tail mt-2",placeholder:"Crie sua senha"},null,512),[[g,o.registerInputs.password]]),c("div",{class:"btn-warning-tail mt-4",onClick:t[6]||(t[6]=a=>o.Register())},"Enviar")])]),o.auth.erro?(i(),r("div",Z,f(o.auth.erro),1)):o.auth.data?(i(),r("div",aa,f(o.auth.data),1)):h("",!0)]),c("div",ta,[c("h3",ea,[oa,c(d,{to:"/"},{default:w((()=>[na])),_:1})])]),c("div",sa,[c("div",la,[c("div",ia,[c("div",ra,[c("a",{target:"_blank",href:o.linkWhatsApp},[ca],8,["href"])])]),c("div",da,[c("div",pa,[c("a",{target:"_blank",href:o.linkWhatsApp},[ua],8,["href"])])]),c("div",ma,[c("div",ga,[c("a",{target:"_blank",href:o.linkWhatsApp},[fa],8,["href"])])])])])])};const ha=a=>{if(a){return(a/1).toFixed(2).replace(".",",").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return"0,00"};const wa={setup(){const a=p("financial"),{categoriaContas:t,editandoContaAPagar:e,getCategoriaContas:o,makeBillPayment:n,deleteBillPayment:s,editBillsToPay:l}=a;return y((()=>{o()})),{categoriaContas:t,editandoContaAPagar:e,money:ha,makeBillPayment:n,deleteBillPayment:s,openEditBillsToPay:async function(a){await l(a).then((()=>{he.push("/financeiro/editarconta")}))}}}},xa=k();v("data-v-0598c0f6");const va={class:"flex"},ba={key:0,class:"columns mt-1"},ya={class:"painel w-full"},Ca={class:"painel-title text-sm"},Aa={class:"painel-body w-full px-1"},ka={class:"w-1/3"},_a={class:"flex"},Pa={class:"w-full text-left"},Ia={key:0,class:"relative"},Da=c("span",null,[c("span",{class:"block w-8 h-5 bg-blue-800 rounded-full shadow-inner"}),c("span",{class:"absolute block w-3 h-3 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-blue-300 transform translate-x-full"})],-1),Ta={key:1,class:"relative"},Va=c("span",null,[c("span",{class:"block w-8 h-5 bg-red-800 rounded-full shadow-inner"}),c("span",{class:"absolute block w-3 h-3 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-red-300"})],-1),Ba={class:"w-1/2 pointer text-sm"},Ea={key:0,class:"w-1/2 text-right text-sm"},Ua={key:1,class:"w-1/2"},La={class:"painel-footer flex text-center text-sm justify-between px-2 py-1 text-gray-300 w-full border-t border-gray-700"},ja={class:"w-full h-1"},Fa=c("div",{class:"w-1/2 text-left"},"Total",-1),Wa={class:"w-1/2 text-right"};b();const Sa=xa(((a,t,e,o,n,s)=>(i(),r("div",va,[o.categoriaContas&&o.categoriaContas.CategoriasContasAPagars?(i(),r("div",ba,[(i(!0),r(C,null,A(o.categoriaContas.CategoriasContasAPagars,(a=>(i(),r("div",{key:a.id,class:"mt-2 w-full flex"},[c("div",ya,[c("div",{class:"painel-header categoria-header text-center p-1 rounded-lg w-full",style:{backgroundColor:a.cor}},[c("p",Ca,f(a.nome),1)],4),c("div",Aa,[(i(!0),r(C,null,A(a.ContasAPagar,(a=>(i(),r("div",{key:a.ID,class:"text-center cursor-pointer rounded-lg hover:bg-gray-700 text-gray-100 w-full shadow flex flex-wrap border border-gray-700 p-1 mt-1"},[c("div",ka,[c("div",_a,[c("div",Pa,[a.ContasPagas&&a.ContasPagas.ID>0?(i(),r("div",Ia,[c("label",{for:"checked",class:"cursor-pointer",onClick:t=>o.deleteBillPayment(a.ContasPagas.ID)},[Da],8,["onClick"])])):(i(),r("div",Ta,[c("label",{for:"unchecked",class:"cursor-pointer",onClick:t=>o.makeBillPayment(a.ID)},[Va],8,["onClick"])]))])])]),c("div",{class:"w-2/3",onClick:t=>o.openEditBillsToPay(a.ID)},[c("div",Ba,f(a.favorecido),1),a.ValoresContasAPagar?(i(),r("div",Ea,f(o.money(a.ValoresContasAPagar.valor)),1)):(i(),r("div",Ua,"0"))],8,["onClick"])])))),128))]),c("div",La,[c("div",ja,[Fa,c("div",Wa,f(o.money(a.Soma)),1)])])])])))),128))])):h("",!0)]))));wa.render=Sa,wa.__scopeId="data-v-0598c0f6";const Ma={setup(){const a=p("financial"),{categoriaContas:t}=a;return{money:ha,categoriaContas:t}}},Ra={class:"flex flex-wrap"},Oa={class:"w-full sm:w-1/2 md:w-1/2 lg:w-full p-1"},za={class:"painel mt-1 shadow-md text-white"},qa=c("div",{class:"painel-header text-center p-1 rounded-lg text-white bg-red-500"},[c("p",{class:"painel-title text-sm"},"TOTAIS")],-1),$a={key:0},Ha={class:"flex flex-wrap"},Na={class:"w-2/3"},Ga={key:0,class:"w-1/3 text-right text-sm"},Xa={key:1,class:"w-1/4"},Ja={class:"painel-footer flex border-t mt-1 p-1"},Ya=c("div",{class:"w-2/3"},"Total",-1),Ka={key:0,class:"w-1/3 text-right text-sm"},Qa={class:"w-full sm:w-1/2 md:w-1/2 lg:w-full p-1"},Za={class:"painel mt-1 shadow-md text-white"},at=_('<div class="painel-header text-center p-1 rounded-lg text-white bg-green-500"><p class="painel-title">CAIXA / FREELAS</p></div><div class="painel-body p-1"><div class="flex flex-wrap justify-between text-center mt-1 p-1 text-sm"><div>Ls Star</div><div>750,00</div></div><div class="flex flex-wrap justify-between text-center mt-1 p-1 text-sm"><div>Acolher</div><div>1.400,00</div></div></div>',2),tt={class:"painel-footer flex text-center justify-between border-t mt-1 p-2 text-sm"},et=c("div",{class:"w-1/3"},"Total",-1),ot={class:"w-1/3"};Ma.render=function(a,t,e,o,n,s){return i(),r("div",Ra,[c("div",Oa,[c("div",za,[qa,o.categoriaContas&&o.categoriaContas.SomaFormaPagamento?(i(),r("div",$a,[(i(!0),r(C,null,A(o.categoriaContas.SomaFormaPagamento,((a,t)=>(i(),r("div",{key:a,class:"painel-body p-1"},[c("div",Ha,[c("div",Na,f(t),1),t?(i(),r("div",Ga,f(o.money(a)),1)):(i(),r("div",Xa,f(o.money("0")),1))])])))),128))])):h("",!0),c("div",Ja,[Ya,o.categoriaContas&&o.categoriaContas.TotalCategories?(i(),r("div",Ka,f(o.money(o.categoriaContas.TotalCategories)),1)):h("",!0)])])]),c("div",Qa,[c("div",Za,[at,c("div",tt,[et,c("div",ot,f(o.money("0")),1)])])])])};const nt={setup(){const a=p("financial"),{setDataCalendario:t,Calendario:e}=a;let o=P(e.value.selectedDate);return I(o,(()=>{t(o.value)})),{changeMonth:function(a){console.log(a)},selectedDate:o}}};nt.render=function(a,t,e,o,n,s){return i(),r("div",null,[c("form",null,[m(c("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>o.selectedDate=a),type:"date",name:"calendario",class:"cursor-pointer w-full bg-gray-600 appearance-none border-2 border-gray-600 rounded py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:bg-gray-500 focus:border-purple-500"},null,512),[[g,o.selectedDate]])])])};const st={setup(){},components:{CategoriaContasAPagar:wa,FeedbackFinanceiro:Ma,Calendario:nt}},lt={class:"flex flex-wrap justify-between rounded-xl bg-gray-800 p-2"},it={class:"w-full sm:w-1/2 md:w-1/5 lg:w-1/5 p-1"},rt={class:"w-full sm:w-1/2 md:w-1/2 text-right"},ct=c("button",{class:"mr-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded py-2 px-4 mt-1"}," Adicionar Conta ",-1),dt={class:"flex flex-wrap mt-1"},pt=c("hr",{class:"border-t border-gray-700 w-full mb-1"},null,-1),ut={class:"w-full sm:w-full md:w-full lg:w-4/5 bg-gray-600 p-2 rounded-xl"},mt={class:"w-full sm:w-full md:w-full lg:w-1/5border-l"};st.render=function(a,t,e,o,n,s){const d=l("Calendario"),p=l("router-link"),u=l("CategoriaContasAPagar"),m=l("FeedbackFinanceiro");return i(),r(C,null,[c("div",lt,[c("div",it,[c(d)]),c("div",rt,[c(p,{to:"/financeiro/adicionarconta"},{default:w((()=>[ct])),_:1})])]),c("div",dt,[pt,c("div",ut,[c(u)]),c("div",mt,[c(m)])])],64)};const gt={props:{mode:{type:String,required:!0}},setup(a){const t=p("financial"),{storeBillsToPay:e,setEditAddMode:o,addBillsToPay:n,updateBillsToPay:s,ContaAPagar:l,err:i}=t;return y((()=>{o(a.mode).then((a=>{"add"===a?n():"edit"!==a||l.value.ID||he.push("/financeiro")}))})),{storeBillsToPay:e,updateBillsToPay:s,ContaAPagar:l,err:i}}},ft={class:"flex justify-center mx-4"},ht={class:"w-full sm:w-1/2 md:w-1/3 painel-tail my-4"},wt={key:0,class:"my-1 block text-sm text-gray-300 text-center bg-yellow-800 border border-yellow-900 h-8 items-center p-2 rounded-lg",role:"alert"},xt={class:"p-2 rounded-sm shadow-sm bg-gray-800"},vt={class:"flex flex-wrap"},bt={class:"mt-1 flex flex-wrap pt-2"},yt={class:"mt-1 flex flex-wrap pt-2"},Ct=c("label",{class:"pb-2 text-gray-700 font-semibold"},"Valor",-1),At={class:"mt-1 flex flex-wrap pt-2"},kt=c("label",{for:"inicio_data_pagamento",class:"pb-2 text-gray-700 font-semibold"},"Inicio Pagamento",-1),_t={class:"mt-1 flex flex-wrap pt-2"},Pt=c("label",{for:"fim_data_pagamento",class:"pb-2 text-gray-700 font-semibold"},"Fim Pagamento",-1),It={class:"mt-1 flex flex-wrap pt-2"},Dt=_('<option value="1">Essenciais</option><option value="2">Compras</option><option value="3">Urgencias</option><option value="4">Lazer</option><option value="5">Transporte</option><option value="6">Alimentação</option><option value="7">Estudos</option><option value="8">Avulsos</option><option value="9">Empresa</option>',9),Tt={class:"mt-1 flex flex-wrap pt-2"},Vt=c("option",{disabled:"",selected:"",value:"Tipo de Conta"},"Tipo de Conta",-1),Bt=c("option",{value:"Extra"},"Extra",-1),Et=c("option",{value:"Fixa"},"Fixa",-1),Ut=c("option",{value:"Parcelada"},"Parcelada",-1),Lt={class:"mt-1 flex flex-wrap pt-2"},jt=_('<option disabled selected value="Forma de Pagamento"> Forma de Pagamento </option><option value="Cartão">Cartão</option><option value="Dinheiro">Dinheiro</option><option value="Débito">Débito</option><option value="Débito Automatico">Débito Automatico</option><option value="Terceiro">Terceiro</option>',6),Ft={class:"mt-2 flex flex-wrap justify-between"},Wt={class:"w-1/2"},St=c("button",{class:"btn-warning-tail-rounded"},"Voltar",-1),Mt={class:"w-1/2 text-right"};gt.render=function(a,t,e,o,n,s){const d=l("router-link");return i(),r("div",ft,[c("div",ht,[o.err?(i(),r("div",wt,f(o.err),1)):h("",!0),c("div",xt,[c("div",vt,[m(c("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>o.ContaAPagar.favorecido=a),type:"text",class:"form-tail w-full",name:"favorecido",required:"",placeholder:"Favorecido"},null,512),[[g,o.ContaAPagar.favorecido]])]),c("div",bt,[m(c("input",{"onUpdate:modelValue":t[2]||(t[2]=a=>o.ContaAPagar.descricao=a),type:"text",class:"form-tail",name:"descricao",placeholder:"Descrição"},null,512),[[g,o.ContaAPagar.descricao]])]),c("div",yt,[Ct,m(c("input",{"onUpdate:modelValue":t[3]||(t[3]=a=>o.ContaAPagar.ValoresContasAPagar.valor=a),type:"number",class:"form-tail",name:"valor",required:"",placeholder:"Valor"},null,512),[[g,o.ContaAPagar.ValoresContasAPagar.valor]])]),c("div",At,[kt,m(c("input",{"onUpdate:modelValue":t[4]||(t[4]=a=>o.ContaAPagar.inicio_data_pagamento=a),type:"date",class:"form-tail",placeholder:"dd/mm/aaaa",required:""},null,512),[[g,o.ContaAPagar.inicio_data_pagamento]])]),c("div",_t,[Pt,m(c("input",{"onUpdate:modelValue":t[5]||(t[5]=a=>o.ContaAPagar.fim_data_pagamento=a),type:"date",class:"form-tail",placeholder:"dd/mm/aaaa"},null,512),[[g,o.ContaAPagar.fim_data_pagamento]])]),c("div",It,[m(c("select",{"onUpdate:modelValue":t[6]||(t[6]=a=>o.ContaAPagar.categorias_contas_a_pagar_id=a),name:"categorias_contas_a_pagar_id",required:"",class:"form-tail"},[Dt],512),[[D,o.ContaAPagar.categorias_contas_a_pagar_id]])]),c("div",Tt,[m(c("select",{"onUpdate:modelValue":t[7]||(t[7]=a=>o.ContaAPagar.tipo_conta=a),name:"tipo_conta",required:"",class:"form-tail"},[Vt,Bt,Et,Ut],512),[[D,o.ContaAPagar.tipo_conta]])]),c("div",Lt,[m(c("select",{"onUpdate:modelValue":t[8]||(t[8]=a=>o.ContaAPagar.forma_pagamento=a),name:"forma_pagamento",required:"",class:"form-tail"},[jt],512),[[D,o.ContaAPagar.forma_pagamento]])]),c("div",Ft,[c("div",Wt,[c(d,{to:"/financeiro"},{default:w((()=>[St])),_:1})]),c("div",Mt,["add"===e.mode?(i(),r("button",{key:0,class:"btn-primary-tail-rounded",onClick:t[9]||(t[9]=a=>o.storeBillsToPay())}," Cadastrar ")):(i(),r("button",{key:1,class:"btn-primary-tail-rounded",onClick:t[10]||(t[10]=a=>o.updateBillsToPay())}," Atualizar "))])])])])])};const Rt={name:"AdicionarConta",components:{AddEditContas:gt},data:()=>({})};Rt.render=function(a,t,e,o,n,s){const d=l("AddEditContas");return i(),r("div",null,[c(d,{mode:"add"})])};const Ot={name:"EditarConta",components:{AddEditContas:gt},data:()=>({})};Ot.render=function(a,t,e,o,n,s){const c=l("AddEditContas");return i(),r(c,{mode:"edit"})};const zt={name:"NotFound"},qt=_('<div class="gradient text-white mt-24 flex items-center"><div class="container mx-auto p-4 flex flex-wrap items-center"><div class="w-full md:w-5/12 text-center p-4"><img src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=396&amp;q=80" alt="Not Found"></div><div class="w-full md:w-7/12 text-center md:text-left p-4"><div class="text-6xl font-medium">404</div><div class="text-xl md:text-2xl font-medium mb-4"> Oops. Está pagina não existe. </div><div class="text-lg mb-8"> Você pode ter cometido um erro ou está pagina foi removida. </div><a href="/" class="border border-white rounded p-4">IR PARA A HOME</a></div></div></div>',1);zt.render=function(a,t,e,o,n,s){return i(),r("div",null,[qt])};const $t={setup(){const a=p("institucional"),{linkWhatsApp:t}=a,e=p("auth"),{loginInputs:o,auth:n,Login:s}=e;return{loginInputs:o,auth:n,Login:s,linkWhatsApp:t}}},Ht={class:"flex flex-wrap justify-center mt-16"},Nt={class:"w-full sm:w-full md:w-1/3 lg:w-1/4 mx-auto px-6"},Gt=c("div",{class:"flex flex-wrap margin-bottom-4 margin-topo justify-center"},[c("div",{class:"w-auto text-center"},[c("img",{class:"img-fluid",width:"150",src:H,alt:""})])],-1),Xt={class:"text-white text-center"},Jt=c("div",{class:"font-bold text-2xl mt-6"},"Login",-1),Yt={class:"mt-2"},Kt=c("p",{class:"underline text-right text-sm"},"esqueci minha senha",-1),Qt=c("div",{class:"btn-warning-tail mt-6"},"Entrar",-1),Zt={class:"w-full text-center text-white"},ae={class:"text-xl my-7 font-bold"},te=x(" Não possui uma conta? "),ee=c("span",{class:"text-yellow-500 underline cursor-pointer"},"Cadastre-se",-1),oe={class:"w-full sm:w-full md:w-1/3 lg:w-1/4 mx-auto px-6"},ne={class:"flex flex-wrap row-space justify-center mt-2"},se={class:"w-auto text-center mr-8"},le={class:"icon-social text-primary text-2xl text-white"},ie=c("h5",null,[c("i",{class:"bg-white-social fab fa-whatsapp"})],-1),re={class:"w-auto text-center mr-8"},ce={class:"icon-social text-primary text-2xl text-white"},de=c("h5",null,[c("i",{class:"bg-white-social fab fa-facebook-f"})],-1),pe={class:"w-auto text-center mr-8"},ue={class:"icon-social text-primary text-2xl text-white"},me=c("h5",null,[c("i",{class:"bg-white-social fas fa-map-marker-alt"})],-1);$t.render=function(a,t,e,o,n,s){const d=l("router-link");return i(),r("div",Ht,[c("div",Nt,[Gt,c("div",Xt,[Jt,c("div",Yt,[m(c("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>o.loginInputs.cellphone=a),class:"form-tail mt-2",placeholder:"Telefone/Whatsapp ( ) 00000-0000"},null,512),[[g,o.loginInputs.cellphone]]),m(c("input",{"onUpdate:modelValue":t[2]||(t[2]=a=>o.loginInputs.password=a),type:"password",class:"form-tail mt-2",placeholder:"Digite sua senha"},null,512),[[g,o.loginInputs.password]]),Kt,Qt])])]),c("div",Zt,[c("h3",ae,[te,c(d,{to:"/cadastro"},{default:w((()=>[ee])),_:1})])]),c("div",oe,[c("div",ne,[c("div",se,[c("div",le,[c("a",{target:"_blank",href:o.linkWhatsApp},[ie],8,["href"])])]),c("div",re,[c("div",ce,[c("a",{target:"_blank",href:o.linkWhatsApp},[de],8,["href"])])]),c("div",pe,[c("div",ue,[c("a",{target:"_blank",href:o.linkWhatsApp},[me],8,["href"])])])])])])};const{auth:ge}={auth:async function(a,t,e){return xe().isLogged().then((t=>{if("Login"!==a.name&&t)e();else{if("Login"!==a.name&&!t)return e({name:"Login"});if("Login"===a.name&&t)return e({name:"Financeiro"});"Login"!==a.name||t||e()}}))}},fe=[{path:"/:pathMatch(.*)*",name:"NotFound",component:zt},{path:"/",name:"Home",component:$t,beforeEnter:[ge]},{path:"/cadastro",name:"Cadastro",component:N},{path:"/login",name:"Login",component:$t,beforeEnter:[ge]},{path:"/financeiro",name:"Financeiro",component:st,beforeEnter:[ge]},{path:"/financeiro/adicionarconta",name:"FinanceiroAdd",component:Rt,beforeEnter:[ge]},{path:"/financeiro/editarconta",name:"FinanceiroEdit",component:Ot}],he=T({history:V(),routes:fe}),we=new class{async login(a){return await q.postWithoutToken("/login",a).then((a=>a)).catch((a=>a))}async register(a){return q.postWithoutToken("/user",a)}},xe=()=>{const a=E({ola:"Ola",fields:{email:"",password:""},auth:{erro:"",token:"",data:""},erro:null,loginInputs:{},registerInputs:{type:"",email:"",password:"",birth_date:"",dtBirth:""}});async function t(t){return localStorage.setItem("token",t),a.auth.token=t,!!t&&(a.auth.erro="",!0)}return s(s({},B(a)),{Logout:function(){t(""),he.push({name:"Login"})},Login:async function(){if(a.fields&&a.fields.email&&a.fields.password){const e=we.login(a.fields);e.then((e=>{e&&e.data?t(e.data.token).then((a=>{a&&he.push({name:"Financeiro"})})):a.auth.erro="Erro ao fazer o login"})),e.catch((()=>{a.auth.erro="Erro ao fazer o login"}))}else a.auth.erro="Campos Vazios",t("")},isLogged:async function(){if(localStorage.getItem("token")!==a.auth.token){let e;e="null"!=localStorage.getItem("token")||"undefined"!=localStorage.getItem("token")||null!=localStorage.getItem("token")||null!=localStorage.getItem("token")?String(localStorage.getItem("token")):"",await t(e).then((()=>""!=a.auth.token||(a.auth.erro="Erro ao fazer login",!1)))}return!(!a.auth||!a.auth.token||""==a.auth.token||null==a.auth.token||"undefined"==a.auth.token||"null"==a.auth.token||null==a.auth.token||0==a.auth.token.length)&&(!(!a.auth||""===a.auth.token)||void 0)},Register:async function(){if(a.auth.erro="",a.auth.data="",a.registerInputs&&a.registerInputs.email&&a.registerInputs.password)return a.registerInputs.dtBirth&&(a.registerInputs.birth_date=$(a.registerInputs.dtBirth)),await we.register(a.registerInputs).then((t=>{t&&t.data&&(a.auth.data="Cadastrado com sucesso!",console.log(a.auth.data))})).catch((t=>{console.log("abaixo erro 2"),console.log(t.response.data.erro),a.auth.erro=t.response.data.erro}));a.auth.erro="Campos Vazios",a.registerInputs.birth_date&&(a.registerInputs.birth_date=function(a){if(a){const t=a.split("-")[2],e=a.split("-")[1],o=a.split("-")[0];return("0"+t).slice(-2)+"/"+("0"+e).slice(-2)+"/"+o}return a}(a.registerInputs.birth_date)),t("")}})},ve=new z;const be=new class{async get(a){const t=`/financial/viewcategories/${a}`;return await ve.get(t).then((a=>a)).catch((a=>{console.log(a)}))}async edit(a,t){const e=`/financial/editbills/${a}/${t}`;return await ve.get(e).then((a=>a)).catch((a=>{console.log(a)}))}async store(a){return await ve.post("/financial/billstopay",a).then((a=>a)).catch((a=>{console.log(a)}))}async update(a){const t=`/financial/billstopay/${a.ID}/${a.ValoresContasAPagar.data_pagamento}`;return await ve.put(t,a).then((a=>a)).catch((a=>{console.log(a)}))}async storePaidAccount(a){return await ve.post("/financial/paidbills",a).then((a=>a)).catch((a=>{console.log(a)}))}async deletePaidAccount(a){const t=`/financial/paidbills/${a}`;return await ve.delet(t).then((a=>a)).catch((a=>{console.log(a)}))}},ye=new z,Ce=()=>{L("financial",(()=>{const a=U(),t=E({categoriaContas:{},editarContaAPagar:{},Calendario:{selectedDate:$((new Date).toLocaleDateString("pt-BR",{year:"numeric",month:"2-digit",day:"2-digit"}))},ContaAPagar:{ValoresContasAPagar:{valor:0,data_pagamento:""},categorias_contas_a_pagar_id:0,favorecido:"",inicio_data_pagamento:"",fim_data_pagamento:"",forma_pagamento:"",tipo_conta:""},editAddMode:{mode:""},dataAtual:$((new Date).toLocaleDateString("pt-BR",{year:"numeric",month:"2-digit",day:"2-digit"})),err:""});function e(){t.Calendario.selectedDate&&be.get(t.Calendario.selectedDate).then((a=>{a&&a.data.data&&(t.categoriaContas=a.data.data)}))}function o(){"string"==typeof t.ContaAPagar.categorias_contas_a_pagar_id&&(t.ContaAPagar.categorias_contas_a_pagar_id=parseInt(t.ContaAPagar.categorias_contas_a_pagar_id)),"string"==typeof t.ContaAPagar.ValoresContasAPagar.valor&&(t.ContaAPagar.ValoresContasAPagar.valor=parseFloat(t.ContaAPagar.ValoresContasAPagar.valor)),t.Calendario.selectedDate&&(t.ContaAPagar.ValoresContasAPagar.data_pagamento=t.Calendario.selectedDate)}return s(s({},B(t)),{getCategoriaContas:e,setDataCalendario:function(a){a&&(t.Calendario.selectedDate=a,e())},makeBillPayment:function(a){const o={contas_a_pagar_id:a,data_pagamento:t.Calendario.selectedDate};be.storePaidAccount(o).then((()=>(e(),!0)))},deleteBillPayment:function(a){be.deletePaidAccount(a).then((()=>(e(),!0)))},editBillsToPay:async function(e){e||a.push("/financeiro"),t.Calendario.selectedDate&&be.edit(e,t.Calendario.selectedDate).then((a=>{if(a)return t.ContaAPagar=a.data.data[0],!0}))},storeBillsToPay:async function(){t.ContaAPagar.favorecido&&t.ContaAPagar.inicio_data_pagamento?(o(),be.store(t.ContaAPagar).then((t=>(e(),a.push("/financeiro"),t)))):t.err="Campos Vazios"},addBillsToPay:function(){t.ContaAPagar={ValoresContasAPagar:{valor:0,data_pagamento:""},categorias_contas_a_pagar_id:0,favorecido:"",inicio_data_pagamento:"",fim_data_pagamento:"",forma_pagamento:"",tipo_conta:""},t.ContaAPagar.ValoresContasAPagar.valor=0,t.dataAtual&&(t.ContaAPagar.inicio_data_pagamento=t.dataAtual,t.ContaAPagar.fim_data_pagamento=t.dataAtual),t.ContaAPagar.forma_pagamento="Cartão",t.ContaAPagar.tipo_conta="Extra",t.ContaAPagar.categorias_contas_a_pagar_id=2},updateBillsToPay:function(){t.ContaAPagar.favorecido&&t.ContaAPagar.inicio_data_pagamento?(o(),console.log(typeof t.ContaAPagar.ValoresContasAPagar.valor),be.update(t.ContaAPagar).then((t=>(e(),a.push("/financeiro"),t)))):t.err="Campos Vazios"},setEditAddMode:async function(a){return t.editAddMode.mode=a,a}})})()),L("auth",xe()),L("apiconnect",ye),L("institucional",(()=>{const a=E({bgImagem:"",mobile:!1,linkWhatsApp:"https://web.whatsapp.com/send?phone=5511998068930"});return s(s({},B(a)),{isMobile:async function(){-1!=navigator.userAgent.toLowerCase().search(/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i)?a.linkWhatsApp="whatsapp://send?phone=5511998068930":a.linkWhatsApp="https://web.whatsapp.com/send?phone=5511998068930"}})})())},Ae={name:"App",components:{Main:W},setup(){Ce()}};Ae.render=function(a,t,e,o,n,s){const d=l("router-view"),p=l("Main");return i(),r("div",null,[c(p,null,{main:w((()=>[c(d)])),_:1})])};j(Ae).use(he).use(F).mount("#app");
