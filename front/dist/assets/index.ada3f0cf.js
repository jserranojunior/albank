var a=Object.defineProperty,t=Object.prototype.hasOwnProperty,e=Object.getOwnPropertySymbols,o=Object.prototype.propertyIsEnumerable,n=(t,e,o)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,s=(a,s)=>{for(var l in s||(s={}))t.call(s,l)&&n(a,l,s[l]);if(e)for(var l of e(s))o.call(s,l)&&n(a,l,s[l]);return a};import{o as l,c as r,r as i,a as c,b as d,d as u,w as p,u as m,i as g,e as f,f as h,g as x,v as w,t as b,h as v,j as y,p as C,k,l as A,F as _,m as P,n as I,q as S,s as D,x as V,y as L,z as T,A as U,B,C as E,D as j,E as F,G as R,H as W,I as M}from"./vendor.8a3cf020.js";!function(a=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(e){const o=new URL(a,location),n=a=>{URL.revokeObjectURL(a.src),a.remove()};self[t]=a=>new Promise(((e,s)=>{const l=new URL(a,o);if(self[t].moduleMap[l])return e(self[t].moduleMap[l]);const r=new Blob([`import * as m from '${l}';`,`${t}.moduleMap['${l}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(r),onerror(){s(new Error(`Failed to import: ${a}`)),n(i)},onload(){e(self[t].moduleMap[l]),n(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/assets/");const O={components:{},data:()=>({}),methods:{closeSidebar(){if(document.querySelector(".sidebar")){const a=document.querySelector(".sidebar");"sidebar-open"===localStorage.getItem("sidebar")&&a&&(localStorage.sidebar="sidebar-close",a.classList.remove("sidebar-open"),a.classList.add("sidebar-close"))}},closeSidebarBodyClick(){if(console.log("clicandk"),document.querySelector(".sidebar")){console.log("existe sidebar");const a=localStorage.getItem("sidebar");window.screen.width<768&&"sidebar-open"===a&&(console.log("Sidebar aberta e fechando"),this.closeSidebar())}}}},$={class:"dark:bg-gray-900 dark:text-gray-100"},q={key:0,class:"font-sans flex flex-wrap justify-between sm:text-left sm:justify-between py-0 px-4 bg-albank-1 text-white sm:items-baseline w-full dark:bg-gray-800 dark:text-gray-100 shadow-md border-b border-blue-900 dark:border-gray-700 no-print"},z={class:"flex w-full h-screen bg-white text-dark dark:bg-gray-700 dark:text-gray-100"},H={key:0,class:"sidebar w-64 z-10 absolute md:static text-dark p-1 dark:bg-gray-700 dark:text-gray-100 no-print bg-albank-1 border-r-2 border-blue-900"},N={class:"flex flex-wrap items-center p-1 text-sm"};O.render=function(a,t,e,o,n,s){return l(),r("div",$,[this.$slots.header?(l(),r("nav",q,[i(a.$slots,"header")])):c("",!0),d("div",z,[this.$slots.sidebar?(l(),r("div",H,[d("div",N,[i(a.$slots,"sidebar")])])):c("",!0),d("div",{class:"w-full z-0 p-2 absolute md:static bg-albank-1 text-white dark:bg-gray-600 dark:text-gray-100",onClick:t[1]||(t[1]=a=>s.closeSidebarBodyClick())},[i(a.$slots,"mainpage")])])])};class G{constructor(){this.token=localStorage.getItem("token"),this.backApiUrl="https://goalbank.alvitre.com.br",console.log(this.backApiUrl),this.axios=u,this.axiosImage=this.axios.create({baseURL:this.backApiUrl,headers:{Accept:"application/json","Content-Type":"multipart/form-data"}}),this.axiosWithoutToken=this.axios.create({baseURL:this.backApiUrl}),this.axiosInstance=this.axios.create({baseURL:this.backApiUrl,headers:{Authorization:"Bearer "+this.token,"Content-Type":"application/json"}})}async get(a){return this.axiosInstance.get(a)}async post(a,t){return this.axiosInstance.post(a,t)}async put(a,t){return this.axiosInstance.put(a,t)}async patch(a,t){return this.axiosInstance.patch(a,t)}async delet(a){return this.axiosInstance.delete(a)}async postimage(a,t){return this.axiosImage.post(a,t)}async getWithoutToken(a){return this.axiosWithoutToken.get(a)}async postWithoutToken(a,t){return this.axiosWithoutToken.post(a,t)}async putWithoutToken(a,t){return this.axiosWithoutToken.put(a,t)}}const X=new G;function J(a){if(a){const t=a.split("/")[0],e=a.split("/")[1];return a.split("/")[2]+"-"+("0"+e).slice(-2)+"-"+("0"+t).slice(-2)}return a}var Y="/assets/logo_albank.e53be5b3.jpeg";const K={setup(){const a=m(),t=g("institucional"),{linkWhatsApp:e}=t,o=g("auth"),{registerInputs:n,auth:s,Register:l,clearMessages:r}=o;return p((()=>a.name),(()=>{r()})),{linkWhatsApp:e,Register:l,auth:s,registerInputs:n}}},Q={class:"flex flex-wrap justify-center pt-4"},Z={class:"w-full sm:w-full md:w-1/2 lg:w-1/3 mx-auto px-6"},aa=d("div",{class:"flex flex-wrap margin-bottom-4 margin-topo justify-center"},[d("div",{class:"w-auto text-center"},[d("img",{class:"img-fluid",width:"150",src:Y,alt:""})])],-1),ta={class:"text-white text-center"},ea=d("div",{class:"font-bold text-2xl mt-4"},"Cadastre-se",-1),oa={class:"mt-2"},na={key:0,class:"btn-danger-tail text-sm mt-2 cursor-default"},sa={key:1,class:"btn-success-tail text-sm mt-2 cursor-default"},la={class:"w-full text-center text-white"},ra={class:"text-xl my-7 font-bold"},ia=y(" Já possui uma conta? "),ca=d("span",{class:"text-yellow-500 underline cursor-pointer"},"Faça Login",-1),da={class:"w-full sm:w-full md:w-1/3 lg:w-1/4 mx-auto px-6"},ua={class:"flex flex-wrap row-space justify-center mt-2"},pa={class:"w-auto text-center mr-8"},ma={class:"icon-social text-primary text-2xl text-white"},ga=d("h5",null,[d("i",{class:"bg-white-social fab fa-whatsapp"})],-1),fa={class:"w-auto text-center mr-8"},ha={class:"icon-social text-primary text-2xl text-white"},xa=d("h5",null,[d("i",{class:"bg-white-social fab fa-facebook-f"})],-1),wa={class:"w-auto text-center mr-8"},ba={class:"icon-social text-primary text-2xl text-white"},va=d("h5",null,[d("i",{class:"bg-white-social fas fa-map-marker-alt"})],-1);K.render=function(a,t,e,o,n,s){const i=f("router-link"),u=h("maska");return l(),r("div",Q,[d("div",Z,[aa,d("div",ta,[ea,d("div",oa,[x(d("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>o.registerInputs.name=a),class:"form-tail mt-1",placeholder:"Nome Completo"},null,512),[[w,o.registerInputs.name]]),x(d("input",{"onUpdate:modelValue":t[2]||(t[2]=a=>o.registerInputs.cellphone=a),class:"form-tail mt-2",placeholder:"Telefone/Whatsapp ( ) 00000-0000"},null,512),[[w,o.registerInputs.cellphone],[u,"(##) #####-####"]]),x(d("input",{"onUpdate:modelValue":t[3]||(t[3]=a=>o.registerInputs.dtBirth=a),type:"text",class:"form-tail mt-2",placeholder:"Data de nascimento    /  /"},null,512),[[w,o.registerInputs.dtBirth],[u,"##/##/####"]]),x(d("input",{"onUpdate:modelValue":t[4]||(t[4]=a=>o.registerInputs.cpf=a),type:"text",class:"form-tail mt-2",placeholder:"CPF"},null,512),[[w,o.registerInputs.cpf],[u,"###.###.###-##"]]),x(d("input",{"onUpdate:modelValue":t[5]||(t[5]=a=>o.registerInputs.email=a),type:"email",class:"form-tail mt-2",placeholder:"E-mail"},null,512),[[w,o.registerInputs.email]]),x(d("input",{"onUpdate:modelValue":t[6]||(t[6]=a=>o.registerInputs.password=a),type:"password",class:"form-tail mt-2",placeholder:"Crie sua senha"},null,512),[[w,o.registerInputs.password]]),d("div",{class:"btn-warning-tail mt-4",onClick:t[7]||(t[7]=a=>o.Register())},"Enviar")])]),o.auth.erro?(l(),r("div",na,b(o.auth.erro),1)):o.auth.data?(l(),r("div",sa,b(o.auth.data),1)):c("",!0)]),d("div",la,[d("h3",ra,[ia,d(i,{to:"/login"},{default:v((()=>[ca])),_:1})])]),d("div",da,[d("div",ua,[d("div",pa,[d("div",ma,[d("a",{target:"_blank",href:o.linkWhatsApp},[ga],8,["href"])])]),d("div",fa,[d("div",ha,[d("a",{target:"_blank",href:o.linkWhatsApp},[xa],8,["href"])])]),d("div",wa,[d("div",ba,[d("a",{target:"_blank",href:o.linkWhatsApp},[va],8,["href"])])])])])])};const ya=a=>{if(a){return(a/1).toFixed(2).replace(".",",").toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}return"0,00"};const Ca={setup(){const a=g("financial"),{categoriaContas:t,editandoContaAPagar:e,getCategoriaContas:o,makeBillPayment:n,deleteBillPayment:s,editBillsToPay:l}=a;return A((()=>{o()})),{categoriaContas:t,editandoContaAPagar:e,money:ya,makeBillPayment:n,deleteBillPayment:s,openEditBillsToPay:async function(a){await l(a).then((()=>{$e.push("/financeiro/editarconta")}))}}}},ka=I();C("data-v-0598c0f6");const Aa={class:"flex"},_a={key:0,class:"columns mt-1"},Pa={class:"painel w-full"},Ia={class:"painel-title text-sm"},Sa={class:"painel-body w-full px-1"},Da={class:"w-1/3"},Va={class:"flex"},La={class:"w-full text-left"},Ta={key:0,class:"relative"},Ua=d("span",null,[d("span",{class:"block w-8 h-5 bg-blue-800 rounded-full shadow-inner"}),d("span",{class:"absolute block w-3 h-3 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-blue-300 transform translate-x-full"})],-1),Ba={key:1,class:"relative"},Ea=d("span",null,[d("span",{class:"block w-8 h-5 bg-red-800 rounded-full shadow-inner"}),d("span",{class:"absolute block w-3 h-3 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out bg-red-300"})],-1),ja={class:"w-1/2 pointer text-sm"},Fa={key:0,class:"w-1/2 text-right text-sm"},Ra={key:1,class:"w-1/2"},Wa={class:"painel-footer flex text-center text-sm justify-between px-2 py-1 text-gray-300 w-full border-t border-gray-700"},Ma={class:"w-full h-1"},Oa=d("div",{class:"w-1/2 text-left"},"Total",-1),$a={class:"w-1/2 text-right"};k();const qa=ka(((a,t,e,o,n,s)=>(l(),r("div",Aa,[o.categoriaContas&&o.categoriaContas.CategoriasContasAPagars?(l(),r("div",_a,[(l(!0),r(_,null,P(o.categoriaContas.CategoriasContasAPagars,(a=>(l(),r("div",{key:a.id,class:"mt-2 w-full flex"},[d("div",Pa,[d("div",{class:"painel-header categoria-header text-center p-1 rounded-lg w-full",style:{backgroundColor:a.cor}},[d("p",Ia,b(a.nome),1)],4),d("div",Sa,[(l(!0),r(_,null,P(a.ContasAPagar,(a=>(l(),r("div",{key:a.ID,class:"text-center cursor-pointer rounded-lg hover:bg-gray-700 text-gray-100 w-full shadow flex flex-wrap border border-gray-700 p-1 mt-1"},[d("div",Da,[d("div",Va,[d("div",La,[a.ContasPagas&&a.ContasPagas.ID>0?(l(),r("div",Ta,[d("label",{for:"checked",class:"cursor-pointer",onClick:t=>o.deleteBillPayment(a.ContasPagas.ID)},[Ua],8,["onClick"])])):(l(),r("div",Ba,[d("label",{for:"unchecked",class:"cursor-pointer",onClick:t=>o.makeBillPayment(a.ID)},[Ea],8,["onClick"])]))])])]),d("div",{class:"w-2/3",onClick:t=>o.openEditBillsToPay(a.ID)},[d("div",ja,b(a.favorecido),1),a.ValoresContasAPagar?(l(),r("div",Fa,b(o.money(a.ValoresContasAPagar.valor)),1)):(l(),r("div",Ra,"0"))],8,["onClick"])])))),128))]),d("div",Wa,[d("div",Ma,[Oa,d("div",$a,b(o.money(a.Soma)),1)])])])])))),128))])):c("",!0)]))));Ca.render=qa,Ca.__scopeId="data-v-0598c0f6";const za={setup(){const a=g("financial"),{categoriaContas:t}=a;return{money:ya,categoriaContas:t}}},Ha={class:"flex flex-wrap"},Na={class:"w-full sm:w-1/2 md:w-1/2 lg:w-full p-1"},Ga={class:"painel mt-1 shadow-md text-white"},Xa=d("div",{class:"painel-header text-center p-1 rounded-lg text-white bg-red-500"},[d("p",{class:"painel-title text-sm"},"TOTAIS")],-1),Ja={key:0},Ya={class:"flex flex-wrap"},Ka={class:"w-2/3"},Qa={key:0,class:"w-1/3 text-right text-sm"},Za={key:1,class:"w-1/4"},at={class:"painel-footer flex border-t mt-1 p-1"},tt=d("div",{class:"w-2/3"},"Total",-1),et={key:0,class:"w-1/3 text-right text-sm"},ot={class:"w-full sm:w-1/2 md:w-1/2 lg:w-full p-1"},nt={class:"painel mt-1 shadow-md text-white"},st=S('<div class="painel-header text-center p-1 rounded-lg text-white bg-green-500"><p class="painel-title">CAIXA / FREELAS</p></div><div class="painel-body p-1"><div class="flex flex-wrap justify-between text-center mt-1 p-1 text-sm"><div>Ls Star</div><div>750,00</div></div><div class="flex flex-wrap justify-between text-center mt-1 p-1 text-sm"><div>Acolher</div><div>1.400,00</div></div></div>',2),lt={class:"painel-footer flex text-center justify-between border-t mt-1 p-2 text-sm"},rt=d("div",{class:"w-1/3"},"Total",-1),it={class:"w-1/3"};za.render=function(a,t,e,o,n,s){return l(),r("div",Ha,[d("div",Na,[d("div",Ga,[Xa,o.categoriaContas&&o.categoriaContas.SomaFormaPagamento?(l(),r("div",Ja,[(l(!0),r(_,null,P(o.categoriaContas.SomaFormaPagamento,((a,t)=>(l(),r("div",{key:a,class:"painel-body p-1"},[d("div",Ya,[d("div",Ka,b(t),1),t?(l(),r("div",Qa,b(o.money(a)),1)):(l(),r("div",Za,b(o.money("0")),1))])])))),128))])):c("",!0),d("div",at,[tt,o.categoriaContas&&o.categoriaContas.TotalCategories?(l(),r("div",et,b(o.money(o.categoriaContas.TotalCategories)),1)):c("",!0)])])]),d("div",ot,[d("div",nt,[st,d("div",lt,[rt,d("div",it,b(o.money("0")),1)])])])])};const ct={setup(){const a=g("financial"),{setDataCalendario:t,Calendario:e}=a;let o=D(e.value.selectedDate);return p(o,(()=>{t(o.value)})),{changeMonth:function(a){console.log(a)},selectedDate:o}}};ct.render=function(a,t,e,o,n,s){return l(),r("div",null,[d("form",null,[x(d("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>o.selectedDate=a),type:"date",name:"calendario",class:"cursor-pointer w-full bg-gray-600 appearance-none border-2 border-gray-600 rounded py-2 px-3 text-gray-100 leading-tight focus:outline-none focus:bg-gray-500 focus:border-purple-500"},null,512),[[w,o.selectedDate]])])])};const dt={setup(){},components:{CategoriaContasAPagar:Ca,FeedbackFinanceiro:za,Calendario:ct}},ut={class:"flex flex-wrap justify-between rounded-xl bg-gray-800 p-2"},pt={class:"w-full sm:w-1/2 md:w-1/5 lg:w-1/5 p-1"},mt={class:"w-full sm:w-1/2 md:w-1/2 text-right"},gt=d("button",{class:"mr-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded py-2 px-4 mt-1"}," Adicionar Conta ",-1),ft={class:"flex flex-wrap mt-1"},ht=d("hr",{class:"border-t border-gray-700 w-full mb-1"},null,-1),xt={class:"w-full sm:w-full md:w-full lg:w-4/5 bg-gray-600 p-2 rounded-xl"},wt={class:"w-full sm:w-full md:w-full lg:w-1/5border-l"};dt.render=function(a,t,e,o,n,s){const i=f("Calendario"),c=f("router-link"),u=f("CategoriaContasAPagar"),p=f("FeedbackFinanceiro");return l(),r(_,null,[d("div",ut,[d("div",pt,[d(i)]),d("div",mt,[d(c,{to:"/financeiro/adicionarconta"},{default:v((()=>[gt])),_:1})])]),d("div",ft,[ht,d("div",xt,[d(u)]),d("div",wt,[d(p)])])],64)};const bt={props:{mode:{type:String,required:!0}},setup(a){const t=g("financial"),{storeBillsToPay:e,setEditAddMode:o,addBillsToPay:n,updateBillsToPay:s,ContaAPagar:l,err:r}=t;return A((()=>{o(a.mode).then((a=>{"add"===a?n():"edit"!==a||l.value.ID||$e.push("/financeiro")}))})),{storeBillsToPay:e,updateBillsToPay:s,ContaAPagar:l,err:r}}},vt={class:"flex justify-center mx-4"},yt={class:"w-full sm:w-1/2 md:w-1/3 painel-tail my-4"},Ct={key:0,class:"my-1 block text-sm text-gray-300 text-center bg-yellow-800 border border-yellow-900 h-8 items-center p-2 rounded-lg",role:"alert"},kt={class:"p-2 rounded-sm shadow-sm bg-gray-800"},At={class:"flex flex-wrap"},_t={class:"mt-1 flex flex-wrap pt-2"},Pt={class:"mt-1 flex flex-wrap pt-2"},It=d("label",{class:"pb-2 text-gray-700 font-semibold"},"Valor",-1),St={class:"mt-1 flex flex-wrap pt-2"},Dt=d("label",{for:"inicio_data_pagamento",class:"pb-2 text-gray-700 font-semibold"},"Inicio Pagamento",-1),Vt={class:"mt-1 flex flex-wrap pt-2"},Lt=d("label",{for:"fim_data_pagamento",class:"pb-2 text-gray-700 font-semibold"},"Fim Pagamento",-1),Tt={class:"mt-1 flex flex-wrap pt-2"},Ut=S('<option value="1">Essenciais</option><option value="2">Compras</option><option value="3">Urgencias</option><option value="4">Lazer</option><option value="5">Transporte</option><option value="6">Alimentação</option><option value="7">Estudos</option><option value="8">Avulsos</option><option value="9">Empresa</option>',9),Bt={class:"mt-1 flex flex-wrap pt-2"},Et=d("option",{disabled:"",selected:"",value:"Tipo de Conta"},"Tipo de Conta",-1),jt=d("option",{value:"Extra"},"Extra",-1),Ft=d("option",{value:"Fixa"},"Fixa",-1),Rt=d("option",{value:"Parcelada"},"Parcelada",-1),Wt={class:"mt-1 flex flex-wrap pt-2"},Mt=S('<option disabled selected value="Forma de Pagamento"> Forma de Pagamento </option><option value="Cartão">Cartão</option><option value="Dinheiro">Dinheiro</option><option value="Débito">Débito</option><option value="Débito Automatico">Débito Automatico</option><option value="Terceiro">Terceiro</option>',6),Ot={class:"mt-2 flex flex-wrap justify-between"},$t={class:"w-1/2"},qt=d("button",{class:"btn-warning-tail-rounded"},"Voltar",-1),zt={class:"w-1/2 text-right"};bt.render=function(a,t,e,o,n,s){const i=f("router-link");return l(),r("div",vt,[d("div",yt,[o.err?(l(),r("div",Ct,b(o.err),1)):c("",!0),d("div",kt,[d("div",At,[x(d("input",{"onUpdate:modelValue":t[1]||(t[1]=a=>o.ContaAPagar.favorecido=a),type:"text",class:"form-tail w-full",name:"favorecido",required:"",placeholder:"Favorecido"},null,512),[[w,o.ContaAPagar.favorecido]])]),d("div",_t,[x(d("input",{"onUpdate:modelValue":t[2]||(t[2]=a=>o.ContaAPagar.descricao=a),type:"text",class:"form-tail",name:"descricao",placeholder:"Descrição"},null,512),[[w,o.ContaAPagar.descricao]])]),d("div",Pt,[It,x(d("input",{"onUpdate:modelValue":t[3]||(t[3]=a=>o.ContaAPagar.ValoresContasAPagar.valor=a),type:"number",class:"form-tail",name:"valor",required:"",placeholder:"Valor"},null,512),[[w,o.ContaAPagar.ValoresContasAPagar.valor]])]),d("div",St,[Dt,x(d("input",{"onUpdate:modelValue":t[4]||(t[4]=a=>o.ContaAPagar.inicio_data_pagamento=a),type:"date",class:"form-tail",placeholder:"dd/mm/aaaa",required:""},null,512),[[w,o.ContaAPagar.inicio_data_pagamento]])]),d("div",Vt,[Lt,x(d("input",{"onUpdate:modelValue":t[5]||(t[5]=a=>o.ContaAPagar.fim_data_pagamento=a),type:"date",class:"form-tail",placeholder:"dd/mm/aaaa"},null,512),[[w,o.ContaAPagar.fim_data_pagamento]])]),d("div",Tt,[x(d("select",{"onUpdate:modelValue":t[6]||(t[6]=a=>o.ContaAPagar.categorias_contas_a_pagar_id=a),name:"categorias_contas_a_pagar_id",required:"",class:"form-tail"},[Ut],512),[[V,o.ContaAPagar.categorias_contas_a_pagar_id]])]),d("div",Bt,[x(d("select",{"onUpdate:modelValue":t[7]||(t[7]=a=>o.ContaAPagar.tipo_conta=a),name:"tipo_conta",required:"",class:"form-tail"},[Et,jt,Ft,Rt],512),[[V,o.ContaAPagar.tipo_conta]])]),d("div",Wt,[x(d("select",{"onUpdate:modelValue":t[8]||(t[8]=a=>o.ContaAPagar.forma_pagamento=a),name:"forma_pagamento",required:"",class:"form-tail"},[Mt],512),[[V,o.ContaAPagar.forma_pagamento]])]),d("div",Ot,[d("div",$t,[d(i,{to:"/financeiro"},{default:v((()=>[qt])),_:1})]),d("div",zt,["add"===e.mode?(l(),r("button",{key:0,class:"btn-primary-tail-rounded",onClick:t[9]||(t[9]=a=>o.storeBillsToPay())}," Cadastrar ")):(l(),r("button",{key:1,class:"btn-primary-tail-rounded",onClick:t[10]||(t[10]=a=>o.updateBillsToPay())}," Atualizar "))])])])])])};const Ht={name:"AdicionarConta",components:{AddEditContas:bt},data:()=>({})};Ht.render=function(a,t,e,o,n,s){const i=f("AddEditContas");return l(),r("div",null,[d(i,{mode:"add"})])};const Nt={name:"EditarConta",components:{AddEditContas:bt},data:()=>({})};Nt.render=function(a,t,e,o,n,s){const i=f("AddEditContas");return l(),r(i,{mode:"edit"})};const Gt={name:"NotFound"},Xt=S('<div class="gradient text-white mt-24 flex items-center"><div class="container mx-auto p-4 flex flex-wrap items-center"><div class="w-full md:w-5/12 text-center p-4"><img src="https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=396&amp;q=80" alt="Not Found"></div><div class="w-full md:w-7/12 text-center md:text-left p-4"><div class="text-6xl font-medium">404</div><div class="text-xl md:text-2xl font-medium mb-4"> Oops. Está pagina não existe. </div><div class="text-lg mb-8"> Você pode ter cometido um erro ou está pagina foi removida. </div><a href="/" class="border border-white rounded p-4">IR PARA A HOME</a></div></div></div>',1);Gt.render=function(a,t,e,o,n,s){return l(),r("div",null,[Xt])};const Jt={setup(){const a=m(),t=g("institucional"),{linkWhatsApp:e}=t,o=g("auth"),{loginInputs:n,auth:s,Login:l,clearMessages:r}=o;return p((()=>a.name),(()=>{r()})),{loginInputs:n,auth:s,Login:l,linkWhatsApp:e}}},Yt={class:"flex flex-wrap justify-center pt-4"},Kt={class:"w-full sm:w-full md:w-1/2 lg:w-1/3 mx-auto px-6"},Qt=d("div",{class:"flex flex-wrap margin-bottom-4 margin-topo justify-center"},[d("div",{class:"w-auto text-center"},[d("img",{class:"img-fluid",width:"150",src:Y,alt:""})])],-1),Zt={class:"text-white text-center"},ae=d("div",{class:"font-bold text-2xl mt-6"},"Login",-1),te={class:"mt-2"},ee={action:""},oe=d("p",{class:"underline text-right text-sm"},"esqueci minha senha",-1),ne=y("Entrar"),se={key:0,class:"btn-danger-tail text-sm mt-2 cursor-default"},le={key:1,class:"btn-success-tail text-sm mt-2 cursor-default"},re={class:"w-full text-center text-white"},ie={class:"text-xl my-7 font-bold"},ce=y(" Não possui uma conta? "),de=d("span",{class:"text-yellow-500 underline cursor-pointer"},"Cadastre-se",-1),ue={class:"w-full sm:w-full md:w-1/3 lg:w-1/4 mx-auto px-6"},pe={class:"flex flex-wrap row-space justify-center mt-2"},me={class:"w-auto text-center mr-8"},ge={class:"icon-social text-primary text-2xl text-white"},fe=d("h5",null,[d("i",{class:"bg-white-social fab fa-whatsapp"})],-1),he={class:"w-auto text-center mr-8"},xe={class:"icon-social text-primary text-2xl text-white"},we=d("h5",null,[d("i",{class:"bg-white-social fab fa-facebook-f"})],-1),be={class:"w-auto text-center mr-8"},ve={class:"icon-social text-primary text-2xl text-white"},ye=d("h5",null,[d("i",{class:"bg-white-social fas fa-map-marker-alt"})],-1);Jt.render=function(a,t,e,o,n,s){const i=f("SInputT"),u=f("SInputP"),p=f("SBtn"),m=f("router-link");return l(),r("div",Yt,[d("div",Kt,[Qt,d("div",Zt,[ae,d("div",te,[d("form",ee,[d(i,{modelValue:o.loginInputs.email,"onUpdate:modelValue":t[1]||(t[1]=a=>o.loginInputs.email=a),class:"mt-2 form-tail",placeholder:"Digite seu e-mail"},null,8,["modelValue"]),d(u,{modelValue:o.loginInputs.password,"onUpdate:modelValue":t[2]||(t[2]=a=>o.loginInputs.password=a),class:"mt-2 text-black",placeholder:"Digite sua senha"},null,8,["modelValue"])]),oe,d(p,{class:"btn-warning-tail",value:"Entrar",onClick:t[3]||(t[3]=a=>o.Login())},{default:v((()=>[ne])),_:1})])]),o.auth.erro?(l(),r("div",se,b(o.auth.erro),1)):o.auth.data?(l(),r("div",le,b(o.auth.data),1)):c("",!0)]),d("div",re,[d("h3",ie,[ce,d(m,{to:"/cadastro"},{default:v((()=>[de])),_:1})])]),d("div",ue,[d("div",pe,[d("div",me,[d("div",ge,[d("a",{target:"_blank",href:o.linkWhatsApp},[fe],8,["href"])])]),d("div",he,[d("div",xe,[d("a",{target:"_blank",href:o.linkWhatsApp},[we],8,["href"])])]),d("div",be,[d("div",ve,[d("a",{target:"_blank",href:o.linkWhatsApp},[ye],8,["href"])])])])])])};const Ce={setup(){const a=m(),t=g("auth"),{Logout:e}=t;return p((()=>a.name),(()=>{console.log("Ta Rolando")})),{Logout:e}}},ke={class:"flex flex-wrap justify-center pt-4"},Ae=d("div",{class:"w-full"},[d("div",{class:"w-full text-center text-yellow-300"},"EM DESENVOLVIMENTO")],-1),_e={class:"w-full sm:w-full md:w-1/2 lg:w-1/3 mx-auto px-6"},Pe={class:"flex flex-wrap margin-bottom-4 margin-topo justify-center"},Ie={class:"w-full text-center"},Se=d("div",{class:"w-full text-center t text-white mt-12 font"},[y(" SEU SALDO"),d("br"),y(" R$ "),d("span",{class:"text-2xl font-bold"},"0"),y(",00 "),d("i",{class:"ml-4 far fa-eye"})],-1),De={class:"w-full md:w-1/3 mt-4 mx-auto"},Ve=S('<div class="flex flex-wrap margin-bottom-4 margin-topo justify-center mt-10"><div class="w-full md:w-auto text-center"><span class="font-bold">R$ 0,00</span><br> em dinheiro </div><div class="bg-white pt-4 md:pt-0 px-0.5 mx-4 hidden md:block"></div><div class="w-full md:w-auto text-center"><span class="font-bold">R$ 0,00</span><br> em bônus </div></div>',1),Le={class:"flex flex-wrap margin-bottom-4 margin-topo justify-center"},Te={class:"w-full md:w-auto text-center"},Ue={class:"w-full text-center text-2xl text-white mt-6 font"};Ce.render=function(a,t,e,o,n,s){const i=f("SBtn"),c=f("router-link");return l(),r("div",ke,[Ae,d("div",_e,[d("div",Pe,[d("div",Ie,[Se,d("div",De,[d(i,{class:"bg-success-tail bg-white rounded-md text-black",value:"Ver extrato"})])])]),Ve,d("div",Le,[d("div",Te,[d("div",Ue,[d(c,{to:"/cadastro"},{default:v((()=>[d(i,{class:"btn-warning-tail rounded-md text-white",value:"Voltar",onClick:t[1]||(t[1]=a=>o.Logout())})])),_:1})])])])])])};const Be={setup(){const a=g("users"),{users:t,getAllUsers:e}=a;return L((async()=>{await e()})),{users:t}}},Ee=d("span",{class:"font-bold text-center text-gray-600"}," USÁRIOS CADASTRADOS",-1),je={class:"table table-tail table-bordered"},Fe=d("thead",{class:"text-left"},[d("tr",null,[d("th",null,"#"),d("th",null,"Nome"),d("th",null,"Telefone"),d("th",null,"Data de nascimento"),d("th",null,"CPF"),d("th",null,"E-mail")])],-1),Re={class:"text-left"};Be.render=function(a,t,e,o,n,s){const i=f("SCard");return l(),r(i,{class:"text-black"},{header:v((()=>[Ee])),body:v((()=>[d("div",null,[d("table",je,[Fe,d("tbody",Re,[(l(!0),r(_,null,P(o.users,(a=>(l(),r("tr",{key:a.ID},[d("td",null,b(a.ID),1),d("td",null,b(a.name),1),d("td",null,b(a.cellphone),1),d("td",null,b(a.dtBirth),1),d("td",null,b(a.cpf),1),d("td",null,b(a.email),1)])))),128))])])])])),_:1})};const{auth:We,admin:Me}={auth:async function(a,t,e){return ze().isLogged().then((t=>{if("Login"!==a.name&&t)e();else{if("Login"!==a.name&&!t)return e({name:"Login"});if("Login"===a.name&&t)return e({name:"Home"});"Login"!==a.name||t||e()}}))},admin:async function(a,t,e){await ze().isAdmin().then((a=>a?e():e({name:"Home"})))}},Oe=[{path:"/:pathMatch(.*)*",name:"NotFound",component:Gt},{path:"/",name:"Home",component:Ce,beforeEnter:[We]},{path:"/users",name:"Users",component:Be,beforeEnter:[We,Me]},{path:"/inicio",name:"Inicio",component:Ce},{path:"/cadastro",name:"Cadastro",component:K},{path:"/login",name:"Login",component:Jt,beforeEnter:[We]},{path:"/financeiro",name:"Financeiro",component:dt,beforeEnter:[We]},{path:"/financeiro/adicionarconta",name:"FinanceiroAdd",component:Ht,beforeEnter:[We]},{path:"/financeiro/editarconta",name:"FinanceiroEdit",component:Nt}],$e=T({history:U(),routes:Oe}),qe=new class{async login(a){return X.postWithoutToken("/login",a)}async register(a){return X.postWithoutToken("/user",a)}async getUser(){return X.get("/user")}},ze=()=>{const a=E({ola:"Ola",fields:{email:"",password:""},auth:{erro:"",token:"",data:""},erro:null,loginInputs:{email:"",password:""},registerInputs:{type:"",email:"",password:"",cpf:"",birth_date:"",dtBirth:""},admin:!1,logged:!1,userID:null});async function t(){if(localStorage.getItem("token")!==a.auth.token){let t;"null"!=localStorage.getItem("token")||"undefined"!=localStorage.getItem("token")||null!=localStorage.getItem("token")||null!=localStorage.getItem("token")?(t=String(localStorage.getItem("token")),a.logged=!0):(t="",a.logged=!1),await e(t).then((()=>""!=a.auth.token||(a.auth.erro="Erro ao fazer login",!1)))}return!(!a.auth||!a.auth.token||""==a.auth.token||null==a.auth.token||"undefined"==a.auth.token||"null"==a.auth.token||null==a.auth.token||0==a.auth.token.length)&&(!(!a.auth||""===a.auth.token)||void 0)}async function e(t){return localStorage.setItem("token",t),a.auth.token=t,!!t&&(a.auth.erro="",!0)}return s(s({},B(a)),{Logout:function(){e("").then((()=>{a.admin=!1,a.logged=!1,$e.push({name:"Login"})}))},Login:async function(){if(a.auth.erro="",a.auth.data="",a.loginInputs&&a.loginInputs.email&&a.loginInputs.password)return await qe.login(a.loginInputs).then((t=>{t&&t.data&&(a.auth.data="Logado com sucesso!",a.logged=!0,a.admin=!0,console.log(t.data.token),e(t.data.token).then((a=>{a&&$e.push({name:"Home"})})),console.log(a.auth.data))})).catch((t=>{console.log("abaixo erro login"),console.log(t.response.data.erro),a.auth.erro=t.response.data.erro,a.logged=!1,a.admin=!1}));a.auth.erro="Campos Vazios",e("")},isLogged:t,Register:async function(){if(a.auth.erro="",a.auth.data="",a.registerInputs&&a.registerInputs.email&&a.registerInputs.password&&a.registerInputs.cpf)return a.registerInputs.dtBirth&&(a.registerInputs.birth_date=J(a.registerInputs.dtBirth)),await qe.register(a.registerInputs).then((t=>{t&&t.data&&(a.auth.data="Cadastrado com sucesso!",console.log(a.auth.data))})).catch((t=>{console.log("abaixo erro 2"),console.log(t.response.data.erro),a.auth.erro=t.response.data.erro}));a.auth.erro="Campos Vazios",a.registerInputs.birth_date&&(a.registerInputs.birth_date=function(a){if(a){const t=a.split("-")[2],e=a.split("-")[1],o=a.split("-")[0];return("0"+t).slice(-2)+"/"+("0"+e).slice(-2)+"/"+o}return a}(a.registerInputs.birth_date)),e("")},clearMessages:function(){a.auth.erro="",a.auth.data=""},isAdmin:async function(){return await t().then((async t=>{const e=await async function(){return await qe.getUser().then((a=>{if(a)return a.data.data.ID})).catch((a=>{console.log("abaixo erro login"),console.log(a.response.data.erro)}))}();if(t)return(2==e||10==e)&&(a.admin=!0,!0)}))}})},He=new G;const Ne=new class{async getAllUsers(){return He.get("/admin/users")}},Ge=new G;const Xe=new class{async get(a){const t=`/financial/viewcategories/${a}`;return await Ge.get(t).then((a=>a)).catch((a=>{console.log(a)}))}async edit(a,t){const e=`/financial/editbills/${a}/${t}`;return await Ge.get(e).then((a=>a)).catch((a=>{console.log(a)}))}async store(a){return await Ge.post("/financial/billstopay",a).then((a=>a)).catch((a=>{console.log(a)}))}async update(a){const t=`/financial/billstopay/${a.ID}/${a.ValoresContasAPagar.data_pagamento}`;return await Ge.put(t,a).then((a=>a)).catch((a=>{console.log(a)}))}async storePaidAccount(a){return await Ge.post("/financial/paidbills",a).then((a=>a)).catch((a=>{console.log(a)}))}async deletePaidAccount(a){const t=`/financial/paidbills/${a}`;return await Ge.delet(t).then((a=>a)).catch((a=>{console.log(a)}))}},Je=new G,Ye=()=>{F("financial",(()=>{const a=j(),t=E({categoriaContas:{},editarContaAPagar:{},Calendario:{selectedDate:J((new Date).toLocaleDateString("pt-BR",{year:"numeric",month:"2-digit",day:"2-digit"}))},ContaAPagar:{ValoresContasAPagar:{valor:0,data_pagamento:""},categorias_contas_a_pagar_id:0,favorecido:"",inicio_data_pagamento:"",fim_data_pagamento:"",forma_pagamento:"",tipo_conta:""},editAddMode:{mode:""},dataAtual:J((new Date).toLocaleDateString("pt-BR",{year:"numeric",month:"2-digit",day:"2-digit"})),err:""});function e(){t.Calendario.selectedDate&&Xe.get(t.Calendario.selectedDate).then((a=>{a&&a.data.data&&(t.categoriaContas=a.data.data)}))}function o(){"string"==typeof t.ContaAPagar.categorias_contas_a_pagar_id&&(t.ContaAPagar.categorias_contas_a_pagar_id=parseInt(t.ContaAPagar.categorias_contas_a_pagar_id)),"string"==typeof t.ContaAPagar.ValoresContasAPagar.valor&&(t.ContaAPagar.ValoresContasAPagar.valor=parseFloat(t.ContaAPagar.ValoresContasAPagar.valor)),t.Calendario.selectedDate&&(t.ContaAPagar.ValoresContasAPagar.data_pagamento=t.Calendario.selectedDate)}return s(s({},B(t)),{getCategoriaContas:e,setDataCalendario:function(a){a&&(t.Calendario.selectedDate=a,e())},makeBillPayment:function(a){const o={contas_a_pagar_id:a,data_pagamento:t.Calendario.selectedDate};Xe.storePaidAccount(o).then((()=>(e(),!0)))},deleteBillPayment:function(a){Xe.deletePaidAccount(a).then((()=>(e(),!0)))},editBillsToPay:async function(e){e||a.push("/financeiro"),t.Calendario.selectedDate&&Xe.edit(e,t.Calendario.selectedDate).then((a=>{if(a)return t.ContaAPagar=a.data.data[0],!0}))},storeBillsToPay:async function(){t.ContaAPagar.favorecido&&t.ContaAPagar.inicio_data_pagamento?(o(),Xe.store(t.ContaAPagar).then((t=>(e(),a.push("/financeiro"),t)))):t.err="Campos Vazios"},addBillsToPay:function(){t.ContaAPagar={ValoresContasAPagar:{valor:0,data_pagamento:""},categorias_contas_a_pagar_id:0,favorecido:"",inicio_data_pagamento:"",fim_data_pagamento:"",forma_pagamento:"",tipo_conta:""},t.ContaAPagar.ValoresContasAPagar.valor=0,t.dataAtual&&(t.ContaAPagar.inicio_data_pagamento=t.dataAtual,t.ContaAPagar.fim_data_pagamento=t.dataAtual),t.ContaAPagar.forma_pagamento="Cartão",t.ContaAPagar.tipo_conta="Extra",t.ContaAPagar.categorias_contas_a_pagar_id=2},updateBillsToPay:function(){t.ContaAPagar.favorecido&&t.ContaAPagar.inicio_data_pagamento?(o(),console.log(typeof t.ContaAPagar.ValoresContasAPagar.valor),Xe.update(t.ContaAPagar).then((t=>(e(),a.push("/financeiro"),t)))):t.err="Campos Vazios"},setEditAddMode:async function(a){return t.editAddMode.mode=a,a}})})()),F("auth",ze()),F("apiconnect",Je),F("institucional",(()=>{const a=E({bgImagem:"",mobile:!1,linkWhatsApp:"https://web.whatsapp.com/send?phone=5511998068930"});return s(s({},B(a)),{isMobile:async function(){-1!=navigator.userAgent.toLowerCase().search(/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i)?a.linkWhatsApp="whatsapp://send?phone=5511998068930":a.linkWhatsApp="https://web.whatsapp.com/send?phone=5511998068930"}})})()),F("users",(()=>{const a=E({users:{}});return s(s({},B(a)),{getAllUsers:async function(){return console.log("Fazendo get"),await Ne.getAllUsers().then((t=>{t&&(console.log("Puxou algo"),console.log(t.data.data),a.users=t.data.data)})).catch((a=>{console.log("abaixo erro login"),console.log(a.response.data.erro)}))}})})())},Ke={name:"Sidebar",setup(){const a=g("auth"),{Logout:t,admin:e,logged:o,isAdmin:n,isLogged:l}=a;A((()=>{n(),l()}));const r=E({sidebarHeight:0});return s(s({},r),{Logout:t,admin:e,logged:o})}},Qe={class:"w-full"},Ze=d("img",{class:"img-fluid align-middle mx-auto mb-2",width:"46",src:Y,alt:""},null,-1),ao=d("span",null,"Login",-1),to=d("span",null,"Cadastro",-1),eo=d("span",null,"Home",-1),oo=d("span",null,"Saldo",-1),no=d("span",null,"Sair",-1),so={key:5,class:"text-xs mt-4 text-center text-white font-bold mx-auto"},lo=d("span",null,"Clientes",-1);Ke.render=function(a,t,e,o,n,s){const i=f("router-link");return l(),r("div",Qe,[Ze,o.logged?c("",!0):(l(),r(i,{key:0,to:"/login",class:"nav-btn"},{default:v((()=>[ao])),_:1})),o.logged?c("",!0):(l(),r(i,{key:1,to:"/cadastro",class:"nav-btn"},{default:v((()=>[to])),_:1})),o.logged?(l(),r(i,{key:2,to:"/users",class:"nav-btn"},{default:v((()=>[eo])),_:1})):c("",!0),o.logged?(l(),r(i,{key:3,to:"/users",class:"nav-btn bg-gray-200"},{default:v((()=>[oo])),_:1})):c("",!0),o.admin?(l(),r("div",{key:4,class:"nav-btn bg-red-600 cursor-pointer",onClick:t[1]||(t[1]=a=>o.Logout())},[no])):c("",!0),o.admin?(l(),r("span",so,"Administrador")):c("",!0),o.admin?(l(),r(i,{key:6,to:"/users",class:"nav-btn"},{default:v((()=>[lo])),_:1})):c("",!0)])};const ro={name:"App",components:{SliferLayout:O,Sidebar:Ke},setup(){Ye()}},io={class:"w-full"},co={class:"flex justify-between"},uo={class:"text-white"},po=d("div",null,[d("i",{class:"far fa-bell text-white align-middle"})],-1),mo={class:"bg-albank-1 min-h-screen"};ro.render=function(a,t,e,o,n,s){const i=f("STogglesidebar"),c=f("Sidebar"),u=f("router-view"),p=f("SliferLayout");return l(),r(p,null,{header:v((()=>[d("div",io,[d("div",co,[d("div",null,[d("span",uo,[d(i,{class:"text-white align-middle"})])]),po])])])),sidebar:v((()=>[d(c)])),mainpage:v((()=>[d("div",mo,[d(u)])])),_:1})};R(ro).use($e).use(W).use(M).mount("#app");
