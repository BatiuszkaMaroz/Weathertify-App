!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="bundled/",n(n.s=0)}([function(e,t,n){"use strict";function o(){const e=new Date;let t="",n=e.getDay(),o=e.getHours(),i=e.getMinutes();i<10&&(i="0"+i),o>12?(o-=12,t="pm"):t="am",n%=7,n=r(n);const c=`${n}, ${o}.${i} ${t}`;document.querySelector(".hinfo__time").textContent=c}function r(e){switch(e){case 0:e="Sun";break;case 1:e="Mon";break;case 2:e="Tue";break;case 3:e="Wen";break;case 4:e="Thu";break;case 5:e="Fri";break;case 6:e="Sat"}return e}n.r(t);class i{constructor(){this.lastInput="",this.input=document.querySelector(".hinfo__city"),this.setListener()}changeIcon(){document.querySelector(".icon__wrap").classList.toggle("icon__change"),this.input.setAttribute("placeholder",this.input.value),this.lastInput=this.input.value,this.input.value=""}changeIcon2(){document.querySelector(".icon__wrap").classList.toggle("icon__change"),""===this.input.value&&""===this.lastInput?this.input.setAttribute("placeholder","Your City"):""===this.input.value&&(this.input.value=this.lastInput),this.lastInput=""}searchCheck(e){"Enter"===e.key&&(this.input.blur(),this.search())}search(){""!==this.input.value&&this.APP.fetcher.fetchNameData.call(this.APP.fetcher,this.input.value)}setListener(){this.input.addEventListener("focus",this.changeIcon.bind(this)),this.input.addEventListener("blur",this.changeIcon2.bind(this)),this.input.addEventListener("keydown",this.searchCheck.bind(this)),document.querySelector(".search").addEventListener("click",this.search.bind(this))}}class c{constructor(){this.setListener(),this.setMap()}setMap(){const e=new Map;e.set("hcity",document.querySelector(".hinfo__city")),e.set("htime",document.querySelector(".hinfo__time")),e.set("tweather",document.querySelector(".today__now--weather")),e.set("ttemp",document.querySelector(".today__now--temperature")),e.set("thigh",document.querySelector(".today__day--highest")),e.set("tlow",document.querySelector(".today__day--lowest")),e.set("ticon",document.querySelector(".today__now--icon")),this.DOMmap=e}updateDOM(e,t,n){document.querySelector(".scroller").classList.add("open-scroller"),document.querySelector("main").style.display="block",n.get("hcity").value=`${e.name}`,n.get("tweather").textContent=`${e.weather[0].main}`,n.get("ttemp").textContent=`${e.main.temp.toFixed(0)}°`,n.get("thigh").textContent=`${e.main.temp_max.toFixed(0)}°`,n.get("tlow").textContent=`${e.main.temp_min.toFixed(0)}°`,n.get("ticon").setAttribute("src",`https://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`);const o=new Date,i=o.getDate(),c=t.list.filter(e=>e.dt_txt.slice(8,10)!=i&&("12"==e.dt_txt.slice(11,13)||"00"==e.dt_txt.slice(11,13)||void 0)),s=document.querySelectorAll(".following__day");for(let e=0;e<8;e+=2){s[e/2].querySelector(".following__temperature").textContent=`${c[e].main.temp.toFixed(0)}° / ${c[e+1].main.temp.toFixed(0)}°`,s[e/2].querySelector(".following__icon").setAttribute("src",`https://openweathermap.org/img/wn/${c[e+1].weather[0].icon}@2x.png`);const t=r((o.getDay()+1+e/2)%7),n=new Date,i=new Date(n);i.setDate(i.getDate()+1+e/2),s[e/2].querySelector(".following__date").textContent=`${t}, ${i.getDate()}.${i.getMonth()+1}`}const a=document.querySelectorAll(".future__day");for(const e of a)e.remove();for(let e=0;e<9;e++){const n=document.importNode(document.querySelector(".future--node").content,!0);n.querySelector(".future__day--temperature").textContent=`${t.list[e].dt_txt.slice(11,16)}`,n.querySelector(".future__day--hour").textContent=`${t.list[e].main.temp.toFixed(0)}°`,n.querySelector(".future__day--icon").setAttribute("src",`https://openweathermap.org/img/wn/${t.list[e].weather[0].icon}@2x.png`),document.querySelector(".future").append(n)}const l=document.querySelectorAll(".side__data"),u=new Date(1e3*e.sys.sunrise),d=new Date(1e3*e.sys.sunset);l[0].textContent=u.toUTCString().slice(17,22),l[1].textContent=d.toUTCString().slice(17,22),l[2].textContent=`${e.main.pressure} hPa`,l[3].textContent=`${e.main.humidity} %`,l[4].textContent=`${e.wind.speed} m/s`,l[5].textContent=`${e.clouds.all} %`;let h=e.weather[0].main;["Mist","Smoke","Haze","Dust","Sand","Dust","Ash","Squall","Tornado"].includes(h)&&(h="Fog");const m=document.createElement("video");m.className="background__video",m.setAttribute("autoplay","true"),m.setAttribute("muted","true"),m.setAttribute("loop","true"),m.innerHTML='<source type="video/mp4" class="video__hook">',m.querySelector("source").setAttribute("src",`videos/${h}.mp4`),document.querySelector(".background").prepend(m),this.videoElement=m}getGeo(){return new Promise((e,t)=>{navigator.geolocation.getCurrentPosition(t=>{e(t)},e=>{alert("Error!"),console.dir(e)})})}callServer(e,t,n=""){let o="";return o=""!=n?`https://api.openweathermap.org/data/2.5/forecast?q=${n}&units=metric&APPID=7fa3cf512c6e4d72224e3dccc9e8cb2b`:`https://api.openweathermap.org/data/2.5/forecast?lat=${e}&lon=${t}&units=metric&APPID=7fa3cf512c6e4d72224e3dccc9e8cb2b`,new Promise((e,t)=>{fetch(o).then(e=>e.json()).then(t=>e(t))})}callServer2(e,t,n=""){let o="";return o=""!=n?`https://api.openweathermap.org/data/2.5/weather?q=${n}&units=metric&APPID=7fa3cf512c6e4d72224e3dccc9e8cb2b`:`https://api.openweathermap.org/data/2.5/weather?lat=${e}&lon=${t}&units=metric&APPID=7fa3cf512c6e4d72224e3dccc9e8cb2b`,new Promise((e,t)=>{fetch(o).then(e=>e.json()).then(t=>e(t))})}fetchData(){this.videoElement&&this.videoElement.remove(),document.querySelector("main").style.display="",document.querySelector(".loader").style.display="block",document.querySelector(".globe").style.pointerEvents="none",this.getGeo.call(this).then(e=>(this.lati=e.coords.latitude,this.long=e.coords.longitude,this.callServer.call(this,this.lati,this.long))).then(e=>(this.longdata=e,this.callServer2.call(this,this.lati,this.long))).then(e=>{document.querySelector(".loader").style.display="",this.updateDOM(e,this.longdata,this.DOMmap)}).catch(e=>{document.querySelector("main").style.display="none",document.querySelector(".hinfo__city").value="",document.querySelector(".hinfo__city").setAttribute("placeholder","Geo Error"),console.log(e),alert("Geolocation Error")}),document.querySelector(".globe").style.pointerEvents=""}fetchNameData(e){this.videoElement&&this.videoElement.remove(),document.querySelector("main").style.display="",document.querySelector(".loader").style.display="block",this.callServer(void 0,void 0,e).then(t=>(this.longdata=t,this.callServer2.call(this,void 0,void 0,e))).then(e=>{document.querySelector(".loader").style.display="",this.updateDOM(e,this.longdata,this.DOMmap)}).catch(e=>{document.querySelector("main").style.display="none",document.querySelector(".hinfo__city").value="",document.querySelector(".hinfo__city").setAttribute("placeholder","Wrong Name")})}setListener(){document.querySelector(".globe").addEventListener("click",this.fetchData.bind(this))}}(class{static init(){this.searcher=new i,this.searcher.APP=this,this.fetcher=new c,setInterval(()=>{o()},1e3)}}).init(),o(),document.querySelector(".menu").addEventListener("click",(function(){document.querySelector(".content--2").classList.toggle("open-menu"),document.querySelector(".menu").classList.toggle("open-hamburger")}))}]);
//# sourceMappingURL=9895cec75c238e490ab5.js.map