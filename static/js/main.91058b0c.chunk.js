(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(20),o=n.n(s),i=n(8),r=(n(29),n(24)),u=n(2),l=n(3),p=n.p+"static/media/header-logo.c2821b38.svg",d=n(0);function j(e){var t=e.email,n=e.onLogout;return Object(d.jsxs)("header",{className:"page__section header",children:[Object(d.jsx)("img",{className:"header__logo",src:p,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto Russia"}),Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{path:"/react-mesto-auth/",exact:!0,children:Object(d.jsxs)("div",{className:"header__info",children:[Object(d.jsx)("p",{className:"header__mail",children:t}),Object(d.jsx)("button",{className:"header__logout","aria-label":"\u0412\u044b\u0439\u0442\u0438",onClick:n,children:"\u0412\u044b\u0439\u0442\u0438"})]})}),Object(d.jsx)(l.b,{path:"/react-mesto-auth//sign-up",children:Object(d.jsx)("div",{className:"header__info",children:Object(d.jsx)(i.b,{className:"header__navigation-link",to:"sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})})}),Object(d.jsx)(l.b,{path:"/react-mesto-auth//sign-in",children:Object(d.jsx)("div",{className:"header__info",children:Object(d.jsx)(i.b,{className:"header__navigation-link",to:"sign-up",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})})})]})]})}var h=Object(a.createContext)();function b(e){var t=e.card,n=e.onCardClick,c=e.onCardLike,s=e.onCardDelete,o=Object(a.useContext)(h),i=t.owner._id===o._id,r="place-card__delete-button ".concat(i?"place-card__delete-button_visible.css":"place-card__delete-button_hidden"),u=t.likes.some((function(e){return e._id===o._id})),l="place-card__like-button ".concat(u&&"place-card__like-button_active");return Object(d.jsxs)("li",{className:"place-card",children:[Object(d.jsx)("button",{type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",className:r,onClick:function(){s(t)}}),Object(d.jsx)("img",{className:"place-card__photo",src:t.link,alt:t.name,onClick:function(){n(t)}}),Object(d.jsxs)("div",{className:"place-card__photo-description",children:[Object(d.jsx)("h2",{className:"place-card__photo-name",children:t.name}),Object(d.jsxs)("div",{className:"place-card__like-section",children:[Object(d.jsx)("button",{type:"button","aria-label":"\u041f\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043b\u0430\u0439\u043a",className:l,onClick:function(){c(t)}}),Object(d.jsx)("span",{className:"place-card__like-count",children:t.likes.length})]})]})]})}function m(){return Object(d.jsx)("div",{className:"loader",children:Object(d.jsx)("div",{className:"loader__circle"})})}function _(e){var t=e.onEditAvatar,n=e.onEditProfile,c=e.onAddPlace,s=e.cards,o=e.onCardClick,i=e.onCardLike,r=e.onCardDelete,u=e.isCardsLoading,l=Object(a.useContext)(h);return Object(d.jsxs)("main",{className:"content",children:[Object(d.jsx)("section",{className:"profile page__section",children:Object(d.jsxs)("div",{className:"profile__information",children:[Object(d.jsxs)("div",{className:"profile__avatar",children:[Object(d.jsx)("img",{className:"profile__avatar-picture",src:l.avatar,alt:l.name}),Object(d.jsx)("button",{type:"button","aria-label":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f",className:"profile__avatar-edit",onClick:t})]}),Object(d.jsx)("h1",{className:"profile__name",children:l.name}),Object(d.jsx)("p",{className:"profile__description",children:l.about}),Object(d.jsx)("button",{type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043f\u0440\u043e\u0444\u0438\u043b\u044f",className:"profile__edit-button",onClick:n}),Object(d.jsx)("button",{type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",className:"profile__add-button",onClick:c})]})}),Object(d.jsxs)("section",{className:"galery",children:[u&&Object(d.jsx)(m,{}),Object(d.jsx)("ul",{className:"galery__places",children:s.map((function(e){return Object(d.jsx)(b,{card:e,onCardClick:o,onCardLike:i,onCardDelete:r},e._id)}))})]})]})}function f(){return Object(d.jsx)("footer",{className:"footer page__section",children:Object(d.jsxs)("p",{className:"footer__copyright ",children:["\xa9 ",(new Date).getFullYear()," Mesto Russia"]})})}function O(e){var t=e.name,n=e.title,a=e.buttonText,c=e.children,s=e.isOpen,o=e.onClose,i=e.onSubmit;return Object(d.jsx)("section",{className:"popup popup_type_".concat(t," ").concat(s&&"popup_opened"),children:Object(d.jsxs)("div",{className:"popup__container popup__container_profile",children:[Object(d.jsxs)("form",{name:t,noValidate:!0,onSubmit:i,children:[Object(d.jsx)("h3",{className:"popup__title",children:n}),c,Object(d.jsx)("button",{type:"submit",className:"popup__save-button popup__save-button_profile",children:a})]}),Object(d.jsx)("button",{type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e",className:"popup__close-button",onClick:o})]})})}function x(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateUser,s=e.isDataSending,o=Object(a.useState)(""),i=Object(u.a)(o,2),r=i[0],l=i[1],p=Object(a.useState)(""),j=Object(u.a)(p,2),b=j[0],m=j[1],_=Object(a.useContext)(h);return Object(a.useEffect)((function(){l(_.name),m(_.about)}),[_,t]),Object(d.jsx)(O,{name:"profile-edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:s?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:r,about:b})},children:Object(d.jsxs)("div",{className:"popup__inputs",children:[Object(d.jsx)("input",{type:"text",name:"name-of-user",className:"popup__input popup__input_type_name",autoComplete:"off",required:!0,minLength:"2",maxLength:"40",value:void 0===r?"":r,onChange:function(e){l(e.target.value)}}),Object(d.jsx)("span",{className:"popup__error-message",id:"name-of-user-error"}),Object(d.jsx)("input",{type:"text",name:"description",className:"popup__input popup__input_type_description",autoComplete:"off",required:!0,minLength:"2",maxLength:"200",value:void 0===b?"":b,onChange:function(e){m(e.target.value)}}),Object(d.jsx)("span",{className:"popup__error-message",id:"description-error"})]})})}function g(e){var t=e.isOpen,n=e.onClose,c=e.onUpdateAvatar,s=e.isDataSending,o=Object(a.useRef)();return Object(d.jsx)(O,{name:"update-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:s?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c(o.current.value)},children:Object(d.jsxs)("div",{className:"popup__inputs",children:[Object(d.jsx)("input",{type:"url",name:"avatar-url",className:"popup__input popup__input_type_avatar-url",autoComplete:"off",placeholder:"url",required:!0,minLength:"2",maxLength:"",ref:o}),Object(d.jsx)("span",{className:"popup__error-message",id:"avatar-url-error"})]})})}function v(e){var t=e.isOpen,n=e.onClose,c=e.onAddPlace,s=e.isDataSending,o=Object(a.useState)(""),i=Object(u.a)(o,2),r=i[0],l=i[1],p=Object(a.useState)(""),j=Object(u.a)(p,2),h=j[0],b=j[1];return Object(a.useEffect)((function(){l(""),b("")}),[t]),Object(d.jsx)(O,{name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:s?"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435...":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),c({name:r,link:h})},children:Object(d.jsxs)("div",{className:"popup__inputs",children:[Object(d.jsx)("input",{type:"text",name:"name-of-place",className:"popup__input popup__input_type_place-name",autoComplete:"off",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"30",value:r||"",onChange:function(e){l(e.target.value)}}),Object(d.jsx)("span",{className:"popup__error-message",id:"name-of-place-error"}),Object(d.jsx)("input",{type:"url",name:"image-url",className:"popup__input popup__input_type_image-link",autoComplete:"off",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,value:h||"",onChange:function(e){b(e.target.value)}}),Object(d.jsx)("span",{className:"popup__error-message",id:"image-url-error"})]})})}function N(e){var t=e.card,n=e.onClose;return Object(d.jsx)("section",{className:"popup ".concat(t&&"popup_opened"),id:"fullSizeImage",children:Object(d.jsxs)("div",{className:"popup__image-container",children:[Object(d.jsxs)("figure",{className:"popup__image-group",children:[Object(d.jsx)("img",{className:"popup__image",src:null!=t?t.link:void 0,alt:null===t||void 0===t?void 0:t.name}),Object(d.jsx)("figcaption",{className:"popup__image-title",children:null===t||void 0===t?void 0:t.name})]}),Object(d.jsx)("button",{type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e",className:"popup__close-button",onClick:n})]})})}var C=n(11),k=n(9);function y(e){var t=e.onLogin,n=Object(a.useState)({email:"",password:""}),c=Object(u.a)(n,2),s=c[0],o=c[1],i=function(e){var t=e.target,n=t.name,a=t.value;o(Object(k.a)(Object(k.a)({},s),{},Object(C.a)({},n,a)))};return Object(d.jsx)("div",{className:"page__section",children:Object(d.jsxs)("form",{className:"user-auth-form",onSubmit:function(e){e.preventDefault(),s.email&&s.password&&t(s)},children:[Object(d.jsx)("h2",{className:"user-auth-form__title",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsx)("input",{className:"user-auth-form__input",placeholder:"Email",type:"text",name:"email",id:"",value:s.email,onChange:i}),Object(d.jsx)("input",{className:"user-auth-form__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",name:"password",id:"",value:s.password,onChange:i}),Object(d.jsx)("button",{className:"user-auth-form__button",children:"\u0412\u043e\u0439\u0442\u0438"})]})})}function S(e){var t=e.onRegister,n=Object(a.useState)({email:"",password:""}),c=Object(u.a)(n,2),s=c[0],o=c[1],r=function(e){var t=e.target,n=t.name,a=t.value;o(Object(k.a)(Object(k.a)({},s),{},Object(C.a)({},n,a)))};return Object(d.jsx)("div",{className:"page__section",children:Object(d.jsxs)("form",{className:"user-auth-form",onSubmit:function(e){e.preventDefault(),t(s)},children:[Object(d.jsx)("h2",{className:"user-auth-form__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsx)("input",{className:"user-auth-form__input",placeholder:"Email",type:"text",name:"email",id:"",required:!0,value:s.email,onChange:r}),Object(d.jsx)("input",{className:"user-auth-form__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",name:"password",id:"",required:!0,value:s.password,onChange:r}),Object(d.jsx)("button",{className:"user-auth-form__button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(d.jsxs)("p",{className:"user-auth-form__bottom-text",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(d.jsx)(i.b,{className:"user-auth-form__link",to:"/react-mesto-auth/sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})}var L=function(e){var t=e.path,n=e.isLoggedIn,a=e.children;return Object(d.jsx)(l.b,{path:t,exact:!0,children:n?a:Object(d.jsx)(l.a,{to:"./sign-in"})})},w={cross:n.p+"static/media/CrossIcon.d0f413bf.svg",check:n.p+"static/media/CheckIcon.a9eb6caf.svg"};function I(e){var t=e.onClose,n=e.data;return Object(d.jsx)("section",{className:"popup popup_type_info-tool-tip ".concat(n.isOpen&&"popup_opened"),children:Object(d.jsx)("div",{className:"popup__container",children:Object(d.jsxs)("div",{className:"popup__tool-tip-wrapper",children:[Object(d.jsx)("img",{className:"popup__tool-tip-icon",src:w[n.icon],alt:"".concat(n.icon)}),Object(d.jsx)("p",{className:"popup__info-text",children:n.text}),Object(d.jsx)("button",{type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u043e\u043a\u043d\u043e",className:"popup__close-button",onClick:t})]})})})}var T=n(22),D=n(23),E=new(function(){function e(t,n,a){Object(T.a)(this,e),this._token=t,this._url=n,this._cohortId=a}return Object(D.a)(e,[{key:"checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getCards",value:function(){return fetch("".concat(this._url).concat(this._cohortId,"/cards"),{headers:{authorization:this._token}}).then(this.checkResponse)}},{key:"addCard",value:function(e){var t=e.name,n=e.link;return fetch("".concat(this._url).concat(this._cohortId,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:t,link:n})}).then(this.checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url).concat(this._cohortId,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then(this.checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._url,"/").concat(this._cohortId,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this.checkResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url).concat(this._cohortId,"/users/me"),{headers:{authorization:this._token}}).then(this.checkResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._url).concat(this._cohortId,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify(e)}).then(this.checkResponse)}},{key:"updataAvatar",value:function(e){return fetch("".concat(this._url).concat(this._cohortId,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify(e)}).then(this.checkResponse)}}]),e}())("233fa192-0365-43b1-9635-9ca57a07d48d","https://mesto.nomoreparties.co/v1/","cohort-20"),P="https://auth.nomoreparties.co",A=function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status,": ").concat(e.statusText)))},R={Accept:"application/json","Content-Type":"application/json"};var U=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),o=Object(u.a)(s,2),i=o[0],p=o[1],b=Object(a.useState)(!1),m=Object(u.a)(b,2),C=m[0],w=m[1],T=Object(a.useState)({isOpen:!1,icon:"",text:""}),D=Object(u.a)(T,2),U=D[0],z=D[1],q=Object(a.useState)(null),J=Object(u.a)(q,2),F=J[0],B=J[1],M=Object(a.useState)(!1),H=Object(u.a)(M,2),G=H[0],V=H[1],Y=Object(a.useState)(!1),K=Object(u.a)(Y,2),Q=K[0],W=K[1],X=Object(a.useState)(!1),Z=Object(u.a)(X,2),$=Z[0],ee=Z[1],te=Object(a.useState)(""),ne=Object(u.a)(te,2),ae=ne[0],ce=ne[1],se=Object(l.g)(),oe=function(){var e,t=localStorage.getItem("jwt");t&&(e=t,fetch("".concat(P,"/users/me"),{method:"GET",headers:Object(k.a)(Object(k.a)({},R),{},{Authorization:"Bearer ".concat(e)})}).then((function(e){return A(e)}))).then((function(e){ce(e.data.email),ee(!0),se.push("/react-mesto-auth/")}))};Object(a.useEffect)((function(){oe()}),[]);var ie=Object(a.useState)({}),re=Object(u.a)(ie,2),ue=re[0],le=re[1];Object(a.useEffect)((function(){$&&(V(!0),Promise.all([E.getUserInfo(),E.getCards()]).then((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];le(n),be(a)})).catch((function(e){return console.log(e)})).finally((function(){V(!1)})))}),[$]);var pe=function(){c(!1),p(!1),w(!1),z({isOpen:!1,icon:"",text:""}),B(null)},de=Object(a.useState)([]),je=Object(u.a)(de,2),he=je[0],be=je[1];return Object(d.jsx)(h.Provider,{value:ue,children:Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("div",{className:"page",children:Object(d.jsxs)("div",{className:"page__content",children:[Object(d.jsx)(j,{email:ae,onLogout:function(){localStorage.removeItem("jwt"),le({}),be([]),ee(!1),se.push("/react-mesto-auth/sign-in")}}),Object(d.jsxs)(l.d,{children:[Object(d.jsxs)(L,{isLoggedIn:$,path:"/react-mesto-auth/",exact:!0,children:[Object(d.jsx)(_,{onEditAvatar:function(){c(!0)},onEditProfile:function(){p(!0)},onAddPlace:function(){w(!0)},onCardClick:function(e){B(e)},cards:he,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===ue._id}));E.changeLikeCardStatus(e._id,!t).then((function(t){be((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){E.deleteCard(e._id).then((function(){be((function(t){return t.filter((function(t){return t._id!==e._id}))}))})).catch((function(e){return console.log(e)}))},isCardsLoading:G}),Object(d.jsx)(g,{isOpen:n,onClose:pe,onUpdateAvatar:function(e){W(!0),E.updataAvatar({avatar:e}).then((function(e){le(e),pe()})).catch((function(e){return console.log(e)})).finally((function(){W(!1)}))},isDataSending:Q}),Object(d.jsx)(x,{isOpen:i,onClose:pe,onUpdateUser:function(e){W(!0),E.setUserInfo(e).then((function(e){le(e),pe()})).catch((function(e){return console.log(e)})).finally((function(){W(!1)}))},isDataSending:Q}),Object(d.jsx)(v,{isOpen:C,onClose:pe,onAddPlace:function(e){W(!0),E.addCard(e).then((function(e){be([e].concat(Object(r.a)(he)))})).then((function(){pe()})).catch((function(e){return console.log(e)})).finally((function(){W(!1)}))},isDataSending:Q}),Object(d.jsx)(O,{name:"delete-confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430",onClose:pe}),Object(d.jsx)(N,{card:F,onClose:pe})]}),Object(d.jsxs)(l.b,{path:"/react-mesto-auth/sign-up",children:[Object(d.jsx)(S,{onRegister:function(e){return function(e){var t=e.email,n=e.password;return fetch("".concat(P,"/signup"),{headers:R,method:"POST",body:JSON.stringify({email:t,password:n})}).then((function(e){return A(e)}))}(e).then((function(){se.push("/react-mesto-auth/sign-in"),z({isOpen:!0,icon:"check",text:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"})})).catch((function(){z({isOpen:!0,icon:"cross",text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})}))}}),Object(d.jsx)(I,{data:U,onClose:pe})]}),Object(d.jsxs)(l.b,{path:"/react-mesto-auth/sign-in",children:[Object(d.jsx)(y,{onLogin:function(e){var t=e.email,n=e.password;return function(e){var t=e.email,n=e.password;return fetch("".concat(P,"/signin"),{headers:R,method:"POST",body:JSON.stringify({email:t,password:n})}).then((function(e){return A(e)}))}({email:t,password:n}).then((function(e){ee(!0),localStorage.setItem("jwt",e.token),ce(t),se.push("/react-mesto-auth/")})).catch((function(){z({isOpen:!0,icon:"cross",text:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})}))}}),Object(d.jsx)(I,{onClose:pe,data:U})]})]}),Object(d.jsx)(f,{})]})})})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(i.a,{children:Object(d.jsx)(U,{})})}),document.getElementById("root")),z()}},[[36,1,2]]]);
//# sourceMappingURL=main.91058b0c.chunk.js.map