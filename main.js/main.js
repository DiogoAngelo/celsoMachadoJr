(()=>{"use strict";new class{constructor(t,e){this.btnListen=document.querySelectorAll(t),this.imgColor=document.querySelectorAll(e)}addColor(t){this.imgColor[t].classList.add("ativo")}removeColor(){this.imgColor.forEach((t=>{t.classList.remove("ativo")}))}bindEvents(){this.removeColor=this.removeColor.bind(this)}addEvent(){this.btnListen.forEach(((t,e)=>{t.addEventListener("mouseover",(()=>{this.addColor(e)})),t.addEventListener("mouseleave",this.removeColor)}))}init(){this.bindEvents(),this.btnListen.length&&this.imgColor.length&&this.addEvent()}}(".listen",".img").init(),new class{constructor(t,e){this.btn=document.querySelector(t),this.header=document.querySelector(e)}addColor(){this.header.classList.add("ativo")}removeColor(){this.header.classList.remove("ativo")}bindEvents(){this.addColor=this.addColor.bind(this),this.removeColor=this.removeColor.bind(this)}addEvents(){this.btn.addEventListener("mouseover",this.addColor),this.btn.addEventListener("mouseleave",this.removeColor)}init(){this.bindEvents(),this.btn&&this.header&&this.addEvents()}}(".button",".header-home").init(),new class{constructor(t){this.navBars=document.querySelectorAll(t)}showBar(){this.navBars.forEach((t=>{t.getBoundingClientRect().top<-50&&(t.classList.contains("ativo")||t.classList.add("ativo")),0===window.scrollY&&t.classList.contains("ativo")&&t.classList.remove("ativo")}))}bindEvent(){this.showBar=this.showBar.bind(this)}addEvent(){window.addEventListener("scroll",this.showBar)}init(){this.bindEvent(),this.navBars.length&&this.addEvent()}}(".navegacao").init(),(new class{constructor(){this.burgerTrace=document.querySelectorAll(".trace"),this.menuBurger=document.querySelector(".burger"),this.menu=document.querySelector(".menu-grow"),this.menuGrowItems=document.querySelector(".menu-grow-items")}openMenu(){this.burgerTrace.forEach((t=>{t.classList.toggle("ativo")})),this.menu.classList.toggle("ativo"),this.menuGrowItems.classList.toggle("ativo")}bindEvents(){this.openMenu=this.openMenu.bind(this)}addEvents(){this.menuBurger.addEventListener("click",this.openMenu)}init(){this.bindEvents(),this.addEvents()}}).init(),new class{constructor(t,e){this.frame=document.querySelector(t),this.faixas=document.querySelectorAll(e),this.arraySongs=["https://www.youtube.com/embed/_oI_rZE1UWY","https://www.youtube.com/embed/OjbYDq1ATMc","https://www.youtube.com/embed/U51Ul6iyMAA","https://www.youtube.com/embed/2xhT82R3DkQ","https://www.youtube.com/embed/RrcGvbikMeM","https://www.youtube.com/embed/SJpSu8SVd1E","https://www.youtube.com/embed/JkyczBrrQL8","https://www.youtube.com/embed/4ggZQjtH78U","https://www.youtube.com/embed/RcEmQ2Q7f94","https://www.youtube.com/embed/KH0UEvJ_ES8"]}playSong(t){this.frame.src=this.arraySongs[t]}bindEvents(){this.playSong=this.playSong.bind(this)}addEvents(){this.faixas.forEach(((t,e)=>{t.addEventListener("click",(()=>{this.playSong(e)}))}))}init(){this.bindEvents(),this.frame&&this.faixas.length&&this.addEvents()}}("#video",".track").init(),new class{constructor(t,e,s,i,o){this.elementos=document.querySelectorAll(t),this.modalContainer=document.querySelector(e),this.fechar=document.querySelector(s),this.textoModal=document.querySelector(i),this.textos=document.querySelectorAll(o)}openModal(t){this.modalContainer.classList.add("ativo"),this.textoModal.innerHTML=this.textos[t].innerHTML}closeModal(){this.modalContainer.classList.remove("ativo")}handleBox(t){t.target===this.modalContainer&&this.closeModal()}bindEvents(){this.openModal=this.openModal.bind(this),this.handleBox=this.handleBox.bind(this),this.closeModal=this.closeModal.bind(this)}addEvents(){this.elementos.forEach(((t,e)=>{t.addEventListener("click",(()=>{this.openModal(e)}))})),this.fechar.addEventListener("click",this.closeModal),this.modalContainer.addEventListener("click",this.handleBox)}init(){this.bindEvents(),this.addEvents()}}(".projects-display .listen",".modal-container",".close",".texto-modal",".texto").init(),new class{constructor(t,e,s){this.modalContainer=document.querySelector(t),this.link=document.querySelector(s),this.fechar=document.querySelector(e)}openModal(){this.modalContainer.classList.add("ativo")}closeModal(){this.modalContainer.classList.remove("ativo")}handleBox(t){t.target===this.modalContainer&&this.closeModal()}bindEvents(){this.openModal=this.openModal.bind(this),this.handleBox=this.handleBox.bind(this),this.closeModal=this.closeModal.bind(this)}addEvents(){this.link.addEventListener("click",this.openModal),this.fechar.addEventListener("click",this.closeModal),this.modalContainer.addEventListener("click",this.handleBox)}init(){this.bindEvents(),this.addEvents()}}(".modal-container-contact",".close-contact",".contact").init()})();