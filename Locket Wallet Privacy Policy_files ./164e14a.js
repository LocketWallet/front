(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{1507:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fa":{"tfaSubtitle":"برای محافظت از دارایی شما لطفا کد شناسایی دوعاملی خود را وارد کنید.","lossTfa":"کد شناسایی دوعاملی خود را از دست دادید؟"},"en":{"tfaSubtitle":"To protect your assets, please enter your two-factor identification code.","lossTfa":"Lost your two-factor ID?"}}'),delete e.options._Ctor}},1508:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"fa":{"pageTitle":"ورود به بازار | نوبیتکس","loginToAccount":"ورود به حساب کاربری","domainWarning":"لطفا مطمئن شوید آدرس مرورگرتان منطبق با آدرس زیر باشد.","rememberMe":"مرا به خاطر بسپار","forgotYourPassword":"گذرواژه خود را فراموش کردید؟","passwordRecovery":"بازیابی گذرواژه ","dontHaveAccount":"هنوز حساب کاربری ندارید؟","freeRegistration":"ثبت نام رایگان","tfaMessage":"در صورت فعال بودن، کد شناسایی دوعاملی را وارد کنید","tfaHint":"اگر کد شناسایی دوعاملی را فعال نکرده‌اید، این قسمت را خالی بگذارید"},"en":{"pageTitle":"Login | Nobitex","loginToAccount":"Log into Account","domainWarning":"Please check that you are visiting the correct URL","rememberMe":"Remember Me","forgotYourPassword":"Forgot your password?","passwordRecovery":"Password Recovery","dontHaveAccount":"Don\'t have an account yet?","freeRegistration":"Free Registration","tfaMessage":"If you have two-factor authentication enabled","tfaHint":"If you have not activated the two-factor authentication code, leave this field blank"}}'),delete e.options._Ctor}},1695:function(e,t,n){var content=n(1955);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("8c35628a",content,!0,{sourceMap:!1})},1696:function(e,t,n){var content=n(1958);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(32).default)("1bba7877",content,!0,{sourceMap:!1})},1954:function(e,t,n){"use strict";n(1695)},1955:function(e,t,n){var o=n(31)(!1);o.push([e.i,"@media only screen and (max-width:767.98px){.tfa-form-wrapper[data-v-07fa2ade]{max-width:464px}}.verified-img[data-v-07fa2ade]{width:3.25rem}.text-decoration-underline[data-v-07fa2ade]{text-decoration:underline}",""]),e.exports=o},1956:function(e,t,n){"use strict";var o=n(1507),r=n.n(o);t.default=r.a},1957:function(e,t,n){"use strict";n(1696)},1958:function(e,t,n){var o=n(31)(!1);o.push([e.i,".input-with-btn[data-v-36c096b6]{position:relative}.input-with-btn .input-btn[data-v-36c096b6]{position:absolute;right:1rem;top:20%;cursor:pointer;padding:0}.current-url[data-v-36c096b6]{font-size:.9375rem;line-height:1.3125rem;height:2.25rem;padding:.375rem 1.5rem}",""]),e.exports=o},1959:function(e,t,n){"use strict";var o=n(1508),r=n.n(o);t.default=r.a},2395:function(e,t,n){"use strict";n.r(t);n(18),n(16),n(17),n(23),n(14),n(24);var o=n(6),r=(n(27),n(9),n(34),n(45),n(10)),l=n(1224),d=n(114),c=n(321),m=n(1377),f=n(1694),v=n(47),h=n(1307),$=n(4),w=n(1836),y=n(1222),_=n(1398),x=n(1223),C=n(1458),O={name:"Tfa",components:{SubmitButton:y.a,BaseIcon:v.a,OtpInputs:C.a},props:{isSubmitting:{type:Boolean,required:!1,default:!1}},data:function(){return{tfaCodeValue:null,canSubmit:!1,isDirty:!1,isOnCompleteFired:!1}},methods:{onChange:function(e){this.canSubmit=!1,this.isDirty=!0,this.tfaCodeValue=e},onComplete:function(e){this.canSubmit=!0,this.isDirty=!1,this.tfaCodeValue=e,this.isOnCompleteFired||(this.isOnCompleteFired=!0,this.$emit("send-tfa",e))},submit:function(){this.$emit("send-tfa",this.tfaCodeValue)},setInvalid:function(){this.$refs.otp.setInvalid(!0)}}},L=(n(1954),n(11)),P=n(1956),component=Object(L.a)(O,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"tfa-form-wrapper text-center"},[n("div",{staticClass:"mx-32-md mx-24"},[n("base-icon",{attrs:{"icon-name":"verified","icon-color":"#00AEA4",viewbox:"0 0 80 80",size:"xLarge"}}),e._v(" "),n("h3",{staticClass:"text-title fs-22-md fs-19 mt-8"},[e._v(e._s(e.$t("panel.tfa")))]),e._v(" "),n("p",{staticClass:"fs-15-md fs-12"},[e._v(e._s(e.$t("tfaSubtitle")))])],1),e._v(" "),n("form",{on:{submit:function(t){return t.preventDefault(),e.submit.apply(null,arguments)}}},[n("div",{staticClass:"tfa-wrapper"},[n("otp-inputs",{ref:"otp",attrs:{"tabindex-start":1,"input-length":6},on:{"on-change":e.onChange,"on-complete":e.onComplete}})],1),e._v(" "),n("p",{staticClass:"fs-12 mt-16 text-center",class:{"text-danger":e.isDirty}},[e._v("\n        "+e._s(e.$t("panel.tfaDescription"))+"\n      ")]),e._v(" "),n("submit-button",{attrs:{tabindex:"7",type:"submit","is-submitting":e.isSubmitting,"is-disabled":!e.canSubmit,"custom-classes":"btn-primary mt-40-md mt-16 w-100 fs-15 fs-19-lg"}},[n("span",{staticClass:"text-white",attrs:{slot:""},slot:"default"},[e._v(e._s(e.$t("panel.confirm")))])])],1)])])}),[],!1,null,"07fa2ade",null);"function"==typeof P.default&&Object(P.default)(component);var T=component.exports,j=n(1378),S=n(25);function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function A(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var I={name:"Login",components:{BaseCaptcha:_.a,CheckBox:h.a,BaseIcon:v.a,TFA:T,SubmitButton:y.a,GoogleSignIn:w.a},layout:"auth",mixins:[c.a,m.a,f.a,x.a,j.a],data:function(){return{username:"",password:"",isPasswordHidden:!0,rememberMe:!1,isSubmitting:!1,isGoogleLogin:!1,googleUser:null,origin:S.b.origin,FORGET_PASSWORD_LINK:$.B,SIGNUP_LINK:$.ib,tfaCodeValue:null}},validations:{username:{required:l.required,pattern:function(e){return Object(l.email)(e)||/^09(\d{9})$/.test(e)}},password:{required:l.required},tfaCodeValue:{integer:l.integer,minLength:Object(l.minLength)(6)}},computed:A(A({},Object(r.c)("panel",["panelUrl"])),Object(r.c)("app",["isPwaMode"])),mounted:function(){this.isPwaMode&&(this.rememberMe=!0)},methods:A(A(A({},Object(r.b)("users",["userLogin","setUsernameToLocalStorage"])),Object(r.d)("app",["setCaptchaTypes"])),{},{manageGoogleAccountTfa:function(e){this.googleUser=e,this.isGoogleLogin=!0},sendGoogleTfa:function(e){this.loginHeaders={"x-totp":e},this.loginUser({token:this.googleUser},d.f)},loginUser:function(e,t){var n=this;this.isSubmitting=!0;var o=this.$storage.getItem("device");o&&(e.device=o),this.userLogin({endpoint:t,payload:e,headers:this.loginHeaders}).then((function(e){var t=e.successful,o=e.error,r=e.isCaught;if(t)n.notifySuccess(n.$t("messages.successfulLogin")),n.locationChange(Object($.Lb)());else if(r){var l,d,c,m,f,v,h,w=null==o||null===(l=o.response)||void 0===l?void 0:l.status,y=null==o||null===(d=o.response)||void 0===d?void 0:d.data.code,_=null==o||null===(c=o.response)||void 0===c||null===(m=c.data)||void 0===m||null===(f=m.non_field_errors)||void 0===f?void 0:f[0];if(_&&n.notifyError(n.loginErrors(w,y,_||"")),429===w&&(n.requiresCheckedLogin=!0),"InvalidOTP"===y&&(n.isGoogleLogin&&n.$refs.tfa?n.$refs.tfa.setInvalid(!0):n.tfaCodeValue=""),"CaptchaTypeUnacceptable"===y)n.setCaptchaTypes(null==o||null===(v=o.response)||void 0===v||null===(h=v.data)||void 0===h?void 0:h.acceptableTypes);w&&500!==w||n.notifyError(n.$t("messages.validation.networkError"))}else n.notifyError(n.$t("messages.apiResponses.".concat(o)))})).finally((function(){n.isSubmitting=!1,n.resetCaptcha()}))},loginForm:function(){this.username=this.username.toLowerCase();var e=this.requiresCheckedLogin?d.c:d.d,t=A({username:this.username,password:this.password,remember:this.rememberMe?"yes":"no"},this.captchaData);this.loginHeaders={"x-totp":this.tfaCodeValue||0},this.setUsernameToLocalStorage(this.username),this.loginUser(t,e)},loginErrors:function(e,t,n){var o;return"Unable to log in with provided credentials."===n&&(t="InvalidCredential"),"You do not have permission to perform this action."===n&&(t="Error"),{400:{Error:this.$t("messages.validation.tryAgainLater"),InvalidCaptcha:this.$t("messages.validation.captchaVerification"),MissingCaptcha:this.$t("messages.validation.captcha"),CaptchaTypeUnacceptable:this.$t("messages.apiResponses.captchaTypeUnacceptable"),MissingOTP:this.$t("messages.validation.required.twoFA"),RedundantOTP:this.$t("messages.validation.inactiveItemAccount",{item:this.$t("panel.tfa")}),InvalidOTP:this.$t("messages.validation.wrongData",{item:this.$t("panel.tfa")}),LoginIranOnly:this.$t("messages.validation.required.LoginIranOnly"),LoginDisabled:this.$t("messages.validation.required.LoginDisabled")},403:{Error:this.$t("messages.validation.tryAgainLater"),InvalidCredential:this.$t("messages.apiResponses.invalidCredential",{type:null!==(o=this.username)&&void 0!==o&&o.includes("@")?this.$t("panel.email"):this.$t("panel.mobileNumber")})},405:{Error:this.$t("messages.validation.tryAgainLater")},429:{Error:this.$t("messages.validation.loginRedundantRequest"),requiresCheckedLogin:!0}}[e||400][t||"Error"]}}),head:function(){return{title:this.$t("pageTitle"),meta:[{hid:"description",name:"description",content:"برای خرید و فروش ارزهای دیجیتال وارد حساب کاربری خود در نوبیتکس شوید یا ثبت‌نام کنید"},{itemprop:"description",content:"برای خرید و فروش ارزهای دیجیتال وارد حساب کاربری خود در نوبیتکس شوید یا ثبت‌نام کنید"},{property:"og:title",content:this.$t("pageTitle")},{property:"og:description",content:"برای خرید و فروش ارزهای دیجیتال وارد حساب کاربری خود در نوبیتکس شوید یا ثبت‌نام کنید"}]}}},M=(n(1957),n(1959)),D=Object(L.a)(I,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"login-container"},[e.isGoogleLogin?n("TFA",{ref:"tfa",attrs:{"is-submitting":e.isSubmitting},on:{"send-tfa":e.sendGoogleTfa}}):[n("div",{staticClass:"d-flex flex-column justify-content-around align-items-center"},[n("h1",{staticClass:"text-center fw-bold fs-19-sm fs-22 mb-0"},[e._v("\n        "+e._s(e.$t("loginToAccount"))+"\n      ")]),e._v(" "),n("p",{staticClass:"text-subtitle text-center fs-12 mt-24"},[e._v("\n        "+e._s(e.$t("domainWarning"))+"\n      ")]),e._v(" "),n("div",{staticClass:"current-url border btn-pill ltr text-title"},[n("base-icon",{staticClass:"mt-1",attrs:{"icon-name":"lock","icon-color":"#15D1C6"}}),e._v("\n        "+e._s(e.origin)+"\n      ")],1)]),e._v(" "),n("form",{on:{submit:function(t){return t.preventDefault(),e.loginForm.apply(null,arguments)}}},[n("div",{staticClass:"d-flex flex-column justify-content-around align-items-stretch my-8"},[n("div",{staticClass:"input-wrapper d-flex flex-column align-items-stretch my-8"},[n("label",{staticClass:"fs-15 fs-12-sm text-aligned",attrs:{for:"email-mobile-input"}},[e._v("\n            "+e._s(e.$t("user.emailOrMobile"))+"\n          ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.username.$model,expression:"$v.username.$model",modifiers:{trim:!0}},{name:"focus",rawName:"v-focus"}],staticClass:"form-control shadow-none ltr",class:{"border-default":!e.$v.username.$dirty,"border-danger":e.$v.username.$error,"border-primary":!e.$v.username.$invalid},attrs:{id:"email-mobile-input",name:"username","aria-describedby":"sign-in-username",autocomplete:"email",tabindex:"1"},domProps:{value:e.$v.username.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.username,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:e.$v.username.$dirty,expression:"$v.username.$dirty"}],staticClass:"validation-feedback text-aligned fs-10 fs-12-md mt-8 mb-0"},[e.$v.username.required?e._e():n("span",{staticClass:"text-danger"},[e._v("\n              "+e._s(e.$t("messages.validation.required.field",{field:e.$t("user.emailOrMobile")}))+"\n            ")]),e._v(" "),e.$v.username.pattern?e._e():n("span",{staticClass:"text-danger"},[e._v("\n              "+e._s(e.$t("messages.validation.emailOrMobile"))+"\n            ")])])]),e._v(" "),n("div",{staticClass:"input-wrapper d-flex flex-column align-items-stretch my-8"},[n("label",{staticClass:"fs-15 fs-12-sm text-aligned",attrs:{for:"password-input"}},[e._v("\n            "+e._s(e.$t("user.password"))+"\n          ")]),e._v(" "),n("div",{staticClass:"input-with-btn"},["checkbox"==(e.isPasswordHidden?"password":"text")?n("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.password.$model,expression:"$v.password.$model"}],staticClass:"form-control shadow-none ltr",class:{"border-default":!e.$v.password.$dirty,"border-danger":e.$v.password.$error,"border-primary":!e.$v.password.$invalid},attrs:{id:"password-input",name:"password","aria-describedby":"sign-in-password",autocomplete:"current-password",tabindex:"2",type:"checkbox"},domProps:{checked:Array.isArray(e.$v.password.$model)?e._i(e.$v.password.$model,null)>-1:e.$v.password.$model},on:{change:function(t){var n=e.$v.password.$model,o=t.target,r=!!o.checked;if(Array.isArray(n)){var l=e._i(n,null);o.checked?l<0&&e.$set(e.$v.password,"$model",n.concat([null])):l>-1&&e.$set(e.$v.password,"$model",n.slice(0,l).concat(n.slice(l+1)))}else e.$set(e.$v.password,"$model",r)}}}):"radio"==(e.isPasswordHidden?"password":"text")?n("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.password.$model,expression:"$v.password.$model"}],staticClass:"form-control shadow-none ltr",class:{"border-default":!e.$v.password.$dirty,"border-danger":e.$v.password.$error,"border-primary":!e.$v.password.$invalid},attrs:{id:"password-input",name:"password","aria-describedby":"sign-in-password",autocomplete:"current-password",tabindex:"2",type:"radio"},domProps:{checked:e._q(e.$v.password.$model,null)},on:{change:function(t){return e.$set(e.$v.password,"$model",null)}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:e.$v.password.$model,expression:"$v.password.$model"}],staticClass:"form-control shadow-none ltr",class:{"border-default":!e.$v.password.$dirty,"border-danger":e.$v.password.$error,"border-primary":!e.$v.password.$invalid},attrs:{id:"password-input",name:"password","aria-describedby":"sign-in-password",autocomplete:"current-password",tabindex:"2",type:e.isPasswordHidden?"password":"text"},domProps:{value:e.$v.password.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.password,"$model",t.target.value)}}}),e._v(" "),n("span",{staticClass:"input-btn btn",on:{click:function(t){e.isPasswordHidden=!e.isPasswordHidden}}},[n("base-icon",{attrs:{"icon-name":e.isPasswordHidden?"visibility":"visibility_off","icon-color":"#A3A5A8",size:"large"}})],1)]),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:e.$v.password.$dirty,expression:"$v.password.$dirty"}],staticClass:"validation-feedback text-aligned fs-10 fs-12-md mt-8 mb-0"},[e.$v.password.required?e._e():n("span",{staticClass:"text-danger"},[e._v("\n              "+e._s(e.$t("messages.validation.required.field",{field:e.$t("user.password")}))+"\n            ")])])]),e._v(" "),n("div",{staticClass:"input-wrapper d-flex flex-column align-items-stretch my-8"},[n("check-box",{attrs:{tabindex:"3"},model:{value:e.rememberMe,callback:function(t){e.rememberMe=t},expression:"rememberMe"}},[e._v("\n            "+e._s(e.$t("rememberMe"))+"\n          ")])],1),e._v(" "),n("base-captcha",{ref:"captcha",staticClass:"input-wrapper d-flex flex-column justify-content-center align-items-center mt-24 mb-8",attrs:{name:"cp",tabindex:"4"},on:{"update-captcha-data":e.updateCaptchaData}}),e._v(" "),n("div",{staticClass:"input-wrapper d-flex flex-column align-items-stretch my-8"},[n("label",{staticClass:"fs-15 fs-12-sm text-aligned",attrs:{for:"tfa"}},[e._v("\n            "+e._s(e.$t("tfaMessage"))+"\n          ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.tfaCodeValue.$model,expression:"$v.tfaCodeValue.$model",modifiers:{trim:!0}},{name:"mask",rawName:"v-mask",value:"######",expression:"'######'"},{name:"english-digit",rawName:"v-english-digit.allowLeadingZero",modifiers:{allowLeadingZero:!0}}],staticClass:"form-control bg-transparent shadow-none text-center",class:{"border-default":!e.$v.tfaCodeValue.$dirty,"border-danger":e.$v.tfaCodeValue.$error,"border-primary":!e.$v.tfaCodeValue.$invalid},attrs:{tabindex:"5",name:"tfa",maxlength:"6",type:"text",autocomplete:"off"},domProps:{value:e.$v.tfaCodeValue.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.tfaCodeValue,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),n("p",{staticClass:"fs-10 fs-12-md mt-8 text-aligned"},[e._v(e._s(e.$t("tfaHint")))])])],1),e._v(" "),n("div",{staticClass:"d-flex flex-column justify-content-around align-items-stretch my-16"},[n("submit-button",{attrs:{"is-submitting":e.isSubmitting,"is-disabled":e.$v.$invalid,type:"submit",tabindex:"5","custom-classes":"btn-primary btn-block my-16 fs-15 fs-19-lg"}},[e._v("\n          "+e._s(e.isSubmitting?e.$t("panel.submitting"):e.$t("user.signIn"))+"\n        ")]),e._v(" "),n("div",{staticClass:"d-flex justify-content-between align-items-center mt-8 fs-15 fs-12-sm"},[n("p",{staticClass:"m-0 text-title"},[e._v(e._s(e.$t("forgotYourPassword")))]),e._v(" "),n("hybrid-link",{attrs:{to:e.FORGET_PASSWORD_LINK,tabindex:"6","css-class":"btn btn-text-primary btn-sm px-0 fs-15 fs-12-sm"}},[e._v("\n            "+e._s(e.$t("passwordRecovery"))+"\n          ")])],1),e._v(" "),n("div",{staticClass:"d-flex justify-content-between align-items-center mt-8 fs-15 fs-12-sm"},[n("p",{staticClass:"m-0 text-title"},[e._v(e._s(e.$t("dontHaveAccount")))]),e._v(" "),n("hybrid-link",{attrs:{to:e.SIGNUP_LINK,tabindex:"7","css-class":"btn btn-text-primary btn-sm px-0 fs-15 fs-12-sm"}},[e._v("\n            "+e._s(e.$t("freeRegistration"))+"\n          ")])],1)],1)]),e._v(" "),n("google-sign-in",{attrs:{tabindex:"8"},on:{"manage-tfa":e.manageGoogleAccountTfa}})]],2)}),[],!1,null,"36c096b6",null);"function"==typeof M.default&&Object(M.default)(D);t.default=D.exports}}]);