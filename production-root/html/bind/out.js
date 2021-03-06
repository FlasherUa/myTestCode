var ajax={};ajax.x=function(){if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;for(var e,t=["MSXML2.XmlHttp.6.0","MSXML2.XmlHttp.5.0","MSXML2.XmlHttp.4.0","MSXML2.XmlHttp.3.0","MSXML2.XmlHttp.2.0","Microsoft.XmlHttp"],n=0;n<t.length;n++)try{e=new ActiveXObject(t[n]);break}catch(e){}return e},ajax.send=function(e,t,n,r,o){void 0===o&&(o=!0);var a=ajax.x();a.open(n,e,o),a.onreadystatechange=function(){4==a.readyState&&t(a.responseText)},a.send(r)},ajax.get=function(e,t,n,r){var o=[];for(var a in t)o.push(encodeURIComponent(a)+"="+encodeURIComponent(t[a]));ajax.send(e+(o.length?"?"+o.join("&"):""),n,"GET",null,r)},ajax.post=function(e,t,n,r){var o;if(t instanceof FormData)o=t;else{var a=[];for(var i in t)a.push(encodeURIComponent(i)+"="+encodeURIComponent(t[i]));o=a.join("&")}ajax.send(e,n,"POST",o)},window.App||(window.App={});var App=window.App;App.Controllers={},App.Controllers.Pages=function(){function e(e,t){return App.curLang||(App.curLang="EN"),void 0!==App.LANGS[App.curLang][e]?App.LANGS[App.curLang][e]:e}var t=function(t){void 0!==t||(t=n()),App.Template.out({Page:{title:e("welcome1"),description:e("descr1"),nextLang:e("nextLang"),langHint:e("langHint"),contents:{First:{contents:t}}}})},n=function(){var t=App.formModel=[App.models.user[1],App.models.user[2]],n=o(t);return{FormOuter:{title:e("loginForm"),contents:n,action:"login"}}},r=function(){var t=App.formModel=App.models.user,n=o(t);return{FormOuter:{title:e("registerForm"),contents:n,action:"register"}}},o=function(t){for(var n=[],r=0;r<t.length;r++){var o=t[r];for(var i in o)if(o.hasOwnProperty(i)){var p=o[i],s=a(p,i),l=p[1]&&p[1][0]&&p[1][0]>0?"*":"",u={InputOuter:{id:i,title:i,contents:s,errMsg:e("err_"+p[0]),required:l}};n.push(u)}}return n},a=function(e,t){var n;switch(e[0]){case"file":n={input_file:{id:t}};break;default:n={input_text:{title:t,id:t,type:e[0]}}}return n};return{switchLang:function(){"EN"===App.curLang?App.curLang="UA":App.curLang="EN"},printLoading:function(){t({Loading:""})},logout:function(){ajax.get("api/logout",null,App.onResponse)},printLoginPageController:t,printRegisterPageController:function(){t(r())},lang:e}}(),window.App||(window.App={}),App.Controllers.Submit=function(){var e=function(e,t){var n=new FormData(e);ajax.post("api/"+t,n,App.onResponse,!1)},t=function(e){var t=n(e);return App.Validate.validateForm(t,App.formModel)},n=function(e){for(var t={},n=e.elements,r=0;r<n.length;r++)"submit"!==n[r].type&&(t[n[r].name]=n[r].value);return t},r=function(e){for(var t=0;t<e.length;t++){var n=e[t];o(n[1],n[0])}},o=function(e,t){var n=document.getElementById("container_"+e);n.classList.add("alert"),n.classList.add("alert-danger")},a=function(e){e||(e=document.getElementsByTagName("form")[0]);for(var t=e.getElementsByClassName("alert");;){if(void 0===t[0])return;t[0].classList.remove("alert-danger"),t[0].classList.remove("alert")}};return{submit:function(n,o){a(n);var i=t(n);return!1!==i&&r(i.errors),e(n,o),!1},addFormErrors:r,clearAllErrors:a}}(),App.Controllers.Pages.printUserPageController=function(){var e=App.Controllers.Pages.lang,t=function(e){var t=App.models.user;return{userInfo:{contents:n(t,e)}}},n=function(e,t){for(var n=[],o=0;o<e.length;o++){var a=e[o],i=App.helpers.key(a),p=a[i],s=t[i];if(void 0!==s){var l={userInfo_field:{title:i,contents:r(p,i,s)}};n.push(l)}}return n},r=function(e,t,n){var r,o={contents:n};switch(e[0]){case"file":r=""==n?{userInfo_field_photo_not:o}:{userInfo_field_photo:o};break;case"email":r={userInfo_field_email:o};break;default:r={userInfo_field_default:o}}return r};return function(){var n=App.userData;App.Template.out({Page:{title:e("welcome2")+n.Name+"!",description:e("descr1"),nextLang:e("nextLang"),langHint:e("langHint"),contents:{Logged:{Name:n.Name,contents:t(n)}}}})}}(),App.LANGS||(App.LANGS={}),App.LANGS.EN={welcome1:"Welcome to my demo site!",welcome2:"Welcome to my demo site, ",descr1:"Please visit <a href='https://github.com/FlasherUa/myTestCode' target='_blank'>this project GitHub</a> for  documentation and source code",loginForm:"Login Form",registerForm:"Register Form",nextLang:"Укр",langHint:"Ввімкнути Українську мову",err_file:"Please select image of .jpg, .png or .gif type",err_text:"Please enter a value",err_password:"Please enter a value including big and small latin letters and digits, 8-15 symbols",err_email:"Please enter a valid email "},App.LANGS||(App.LANGS={}),App.LANGS.UA={welcome1:"Ласкаво прошу до мого демо сайту!",descr1:"Завітайте на <a href='https://github.com/FlasherUa/myTestCode' target='_blank'>GitHub цього проекту</a> там є документація і вихідний код",loginForm:"Форма входу",registerForm:"Форма реєстрації",nextLang:"En",langHint:"Switch to English",err_file:"Будь-ласка оберіть картинку з типом .jpg, .png чи .gif ",err_text:"Будь-ласка введіть значення",err_password:"Будь-ласка введіть значення з великими,  малими латинськими літерами та цифрами, 8-15 символів",err_email:"Будь-ласка введіть email ","You are not logged":"Ви не зайшли",Please:"Будь-ласка",Register:"Зареєструйтеся",Login:"Ввійдіть",or:"чи",Submit:"Відіслати",Name:"Ім'я",Password:"Пароль","Repeat Password":"Повтор паролю",Phone:"Телефон",Country:"Країна",City:"Місто",Photo:"Фото"},App.helpers={key:function(e){for(var t in e)if(e.hasOwnProperty(t))return t},getResponse:function(e){if("NOT FOUND"===e)return!1;try{var t=JSON.parse(e)}catch(e){return console.error(e),!1}return t}},App.onResponse=function(){var e=function(e){window.location.hash!==e?window.location.hash=e:App.Router(e)};return function(t){var n=App.helpers.getResponse(t);if(n){var r=App.helpers.key(n);switch(r){case"notLogged":"#register"!==App.state&&"#login"!==App.state&&e("#login");break;case"errors":App.Controllers.Submit.clearAllErrors(),App.Controllers.Submit.addFormErrors(n[r]);break;case"registered":case"logged":App.userData=n[r],e("#userInfo")}}}}(),window.App||(window.App={}),App.Router=function(e,t){switch(e){case"submit":return App.Controllers.Submit.submit(t[0],t[1]);case"#register":App.Controllers.Pages.printRegisterPageController();break;case"#userInfo":void 0===App.userData?window.location.hash="#login":App.Controllers.Pages.printUserPageController();break;case"switchLang":App.Controllers.Pages.switchLang(),App.Router(App.state);break;case"#login":App.Controllers.Pages.printLoginPageController();break;case"#logout":App.Controllers.Pages.logout();break;default:App.Controllers.Pages.printLoading()}},window.App||(window.App={}),(App=window.App).Template=function(){function e(e,t){for(var r,o=/%([^%]+)?%/g;r=o.exec(e);){var a=t&&void 0!==t[r[1]]?t[r[1]]:r[1];a="string"==typeof a||a instanceof String?a:n(a),a=App.Controllers.Pages.lang(a),e=e.replace(r[0],a)}return e}function t(e,t){var n=document.getElementById(e),r="";return n&&(r=n.innerHTML),r}function n(r){var o="";if(r.constructor===Array)for(var a=0;a<r.length;a++)o+=n(r[a]);for(var i in r)r.hasOwnProperty(i)&&(o+=e(t(i),r[i]));return o}return{out:function(e,t){var r=n(e);t||(t="main");var o=document.getElementById(t);o&&(o.innerHTML=r)},parseTemplObject:n}}(),App.Validate=function(){var e=function(e,n){var r=n[0],o=!1;return void 0!==t[r]&&(o=t[r](e,n[1])),o},t={text:function(e,t){return!t||(void 0!==t[0]&&t[0]>0&&e.length<t[0]?"notValid":!(t[1]&&t[1]>0&&e.length>t[1])||"notValid")},email:function(e,n){var r=t.text(e,n);return!0!==r?r:!!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)||"notValid"},phone:function(e,n){var r=t.text(e,n);return!0!==r?r:!!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(e)||"notValid"},password:function(e,n){var r=t.text(e,n);if(!0!==r)return r;var o=/[a-z]/,a=/[A-Z]/;return!!(/[0-9]/.test(e)&&o.test(e)&&a.test(e))||"notValid"},file:function(e,t){var n=e.split(".").pop();return n=n.toLowerCase(),!e||-1!==["jpeg","jpg","gif","png"].indexOf(n)||"notValid"}};return{validateField:e,validateForm:function(t,n){for(var r=n.length,o=[],a=0;a<r;a++){var i=n[a];for(var p in i)if(i.hasOwnProperty(p)){var s=void 0!==t[p]?t[p]:"",l=e(s,i[p]);"Repeat Password"===p&&t[p]!==t.Password&&(l=!0),!0!==l&&o.push([l,p])}}return o.length>0&&{errors:o}}}}(),void 0!==App||(window.App={}),function(){var e=function(e){App.state=e,void 0!==App.Router&&App.Router(App.state)};window.onload=function(){App.curLang="EN",ajax.get("api",null,App.onResponse),window.addEventListener("hashchange",function(){e(window.location.hash)}),e(window.location.hash)}}(),window.App||(window.App={}),(App=window.App).models={},App.models.user=[{Name:["text",[3,50]]},{Email:["email",[5,50]]},{Password:["password",[5,25]]},{"Repeat Password":["password",[8,25]]},{Phone:["text",[5,20]]},{Country:["text",[0,25]]},{City:["text",[0,25]]},{Photo:["file",[0]]}];