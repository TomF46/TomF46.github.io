(function(){"use strict";var e={7149:function(e,t,s){var a=s(144),o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("header-bar"),s("router-view")],1)},i=[],n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header"},[s("svg",{staticClass:"mobile-nav-icon mobile-nav-icon-open",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},on:{click:function(t){return e.setMobileNavigation(!0)}}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"}})]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12 col-sm-1"},[s("img",{staticClass:"logo pointer",attrs:{src:"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/Other/InitialsLogoDarkScheme.png",alt:"Personal Logo"},on:{click:function(t){return e.navigate("/")}}})]),s("div",{staticClass:"nav col-xs-12 col-sm-11 xs-hidden"},[s("div",{staticClass:"row"},[e._m(0),s("div",{staticClass:"col-xs-12 col-sm-6"},[s("ul",{staticClass:"social-nav-links"},[s("li",[s("svg",{staticClass:"social-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},on:{click:function(t){return e.externalNavigate("mailto:fyles1994@outlook.com")}}},[s("title",[e._v("Email")]),s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}})])]),s("li",[s("svg",{staticClass:"social-icon fill",attrs:{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(t){return e.externalNavigate("https://github.com/TomF46")}}},[s("title",[e._v("GitHub")]),s("path",{attrs:{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}})])]),s("li",[s("svg",{staticClass:"social-icon fill",attrs:{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(t){return e.externalNavigate("https://www.linkedin.com/in/tomfyles/")}}},[s("title",[e._v("LinkedIn")]),s("path",{attrs:{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"}})])])])])])])]),s("transition",{attrs:{name:"fade"}},[e.showMobileNavigation?s("div",{staticClass:"mobile-navigation-overlay"},[s("svg",{staticClass:"mobile-nav-icon mobile-nav-icon-close",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},on:{click:function(t){return e.setMobileNavigation(!1)}}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z","clip-rule":"evenodd"}})]),s("div",{staticClass:"row links"},[s("div",{staticClass:"col-xs-12 center-xs link"},[s("a",{attrs:{href:"/"}},[e._v("Home")])]),s("div",{staticClass:"col-xs-12 center-xs link"},[s("a",{attrs:{href:"/projects"}},[e._v("Projects")])]),s("div",{staticClass:"col-xs-12 center-xs link"},[s("a",{attrs:{href:"https://personal-website-images-tom.s3-eu-west-1.amazonaws.com/documents/ThomasFylesCV.pdf"}},[e._v("CV")])]),s("div",{staticClass:"col-xs-12 center-xs link"},[s("a",{attrs:{href:"/#contact-page"},on:{click:function(t){return e.setMobileNavigation(!1)}}},[e._v("About me")])])]),s("div",{staticClass:"row social-mobile-links"},[s("div",{staticClass:"col-xs-12 center-xs social-link"},[s("svg",{staticClass:"social-icon fill",attrs:{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(t){return e.externalNavigate("https://www.linkedin.com/in/tomfyles/")}}},[s("title",[e._v("LinkedIn")]),s("path",{attrs:{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"}})])]),s("div",{staticClass:"col-xs-12 center-xs social-link"},[s("svg",{staticClass:"social-icon fill",attrs:{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(t){return e.externalNavigate("https://github.com/TomF46")}}},[s("title",[e._v("GitHub")]),s("path",{attrs:{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}})])]),s("div",{staticClass:"col-xs-12 center-xs social-link"},[s("svg",{staticClass:"social-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},on:{click:function(t){return e.externalNavigate("mailto:fyles1994@outlook.com")}}},[s("title",[e._v("Email")]),s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}})])])])]):e._e()])],1)},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-xs-12 col-sm-6"},[s("ul",[s("li",[s("a",{attrs:{href:"/"}},[e._v("Home")])]),s("li",[s("a",{attrs:{href:"/projects"}},[e._v("Projects")])]),s("li",[s("a",{attrs:{href:"https://personal-website-images-tom.s3-eu-west-1.amazonaws.com/documents/ThomasFylesCV.pdf"}},[e._v("CV")])]),s("li",[s("a",{attrs:{href:"/#contact-page"}},[e._v("About me")])])])])}],l=(s(7658),{name:"header-bar",data:()=>({showMobileNavigation:!1}),methods:{navigate(e){this.$router.push(e)},externalNavigate(e){window.location.href=e},setMobileNavigation(e){this.showMobileNavigation=e}}}),c=l,p=s(3736),m=(0,p.Z)(c,n,r,!1,null,null,null),u=m.exports,d={name:"app",components:{"header-bar":u},data:function(){return{}},computed:{},mounted(){}},h=d,g=(0,p.Z)(h,o,i,!1,null,null,null),w=g.exports,v=s(5205);(0,v.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var b=s(8345),f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"main"},[s("intro-section"),s("projects-section"),s("contact-section")],1)},C=[],k=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"intro page"},[e._m(0),s("div",{staticClass:"intro-body"},[s("div",{staticClass:"row center-xs"},[s("div",{staticClass:"col-xs-12 col-sm-4 col-md-3"},[s("button",{staticClass:"button-right",on:{click:function(t){return e.navigate("/projects")}}},[e._v("Example projects")])]),s("div",{staticClass:"col-xs-12 col-sm-4 col-md-3"},[s("button",{attrs:{download:""},on:{click:function(t){return e.externalNavigate("https://personal-website-images-tom.s3-eu-west-1.amazonaws.com/documents/ThomasFylesCV.pdf")}}},[e._v("Download CV")])]),s("div",{staticClass:"col-xs-12 col-sm-4 col-md-3"},[s("button",{staticClass:"button-left",on:{click:function(t){return e.scrollToHash("#contact-page")}}},[e._v("Find out more")])])])])])},x=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"intro-logo"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("h1",[e._v("Tom Fyles "),s("br"),e._v(" "),s("span",[e._v("Web Developer")])]),s("p",{staticClass:"intro-copy"},[e._v(" Web application developer with multi year experience in developing applications using .NET, Laravel, and cutting edge front end technologies and frameworks. ")])])])])}],y={name:"Intro",methods:{navigate(e){this.$router.push(e)},scrollToHash(e){window.location.hash="",window.location.hash=e},externalNavigate(e){window.location.href=e}}},_=y,A=(0,p.Z)(_,k,x,!1,null,null,null),z=A.exports,j=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"projects page",attrs:{id:"projects-section"}},[s("div",{staticClass:"row center-xs"},e._l(e.gridItems,(function(e,t){return s("div",{key:t,staticClass:"col-xs-12 col-sm-6 col-md-4 project-tile"},[s("project-grid-item",{attrs:{item:e}})],1)})),0)])},W=[],I=JSON.parse('[{"name":"Watched It","link":"/projects/watchedIt","images":["https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/WatchedItWeb/WatchedItLogo1.png","https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/WatchedItWeb/WatchedItDetail.png"]},{"name":"Mentior Corp Finance Tool","link":"/projects/finance-app","images":["https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/MentiorCorp/MentiorCorpLogo.png","https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/MentiorCorp/MentiorCorpOverview.png"]},{"name":"Untitled quiz app","link":"/projects/untitled-quiz-app","images":["https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/QApp/QAppWebsiteLogo.png","https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/QApp/QAppOverview.png"]},{"name":"League Administration App","link":"/projects/league-administration-app","images":["https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/LeagueApp/LeagueAdminWebsiteLogo.png","https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/LeagueApp/LeagueAppOverview.png"]},{"name":"Appathematics","link":"/projects/appathematics","images":["https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/Appathematics/AppathematicsWebsiteLogo.png","https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/Appathematics/AppathemticsOverview.png"]},{"name":"More","link":"/projects","images":["https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/Other/ViewMoreBlue.png","https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/Other/ViewMoreBlueLarge.png"]}]'),M=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{on:{click:function(t){return e.navigate(e.item.link)}}},[s("crossfade-image",{attrs:{topImage:e.item.images[0],bottomImage:e.item.images[1],title:e.item.name}})],1)},L=[],N=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"crossfade pointer",style:{backgroundImage:"url("+e.bottomImage+")"}},[s("img",{attrs:{src:e.topImage,alt:e.title}})])},P=[],T={name:"crossfade-image",props:["topImage","bottomImage","title"],data:()=>({})},E=T,F=(0,p.Z)(E,N,P,!1,null,null,null),H=F.exports,R={name:"project-grid-item",props:["item"],components:{"crossfade-image":H},data:()=>({}),methods:{navigate(e){this.$router.push(e)}}},V=R,D=(0,p.Z)(V,M,L,!1,null,null,null),S=D.exports,O={name:"projects-section",components:{"project-grid-item":S},data:()=>({gridItems:I}),methods:{navigate(e){this.$router.push(e)}}},Q=O,G=(0,p.Z)(Q,j,W,!1,null,null,null),$=G.exports,B=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"contact page",attrs:{id:"contact-page"}},[s("div",{staticClass:"row center-xs"},[e._m(0),s("div",{staticClass:"col-xs-12"},[s("div",{staticClass:"row center-xs"},[s("div",{staticClass:"col-xs-12"},[s("div",{staticClass:"row section center-xs"},[s("div",{staticClass:"col-xs-12 col-sm-2"},[s("svg",{staticClass:"social-icon fill",attrs:{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(t){return e.externalNavigate("https://www.linkedin.com/in/tomfyles/")}}},[s("title",[e._v("LinkedIn")]),s("path",{attrs:{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"}})])]),s("div",{staticClass:"col-xs-12 col-sm-2"},[s("svg",{staticClass:"social-icon fill",attrs:{role:"img",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},on:{click:function(t){return e.externalNavigate("https://github.com/TomF46")}}},[s("title",[e._v("GitHub")]),s("path",{attrs:{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}})])]),s("div",{staticClass:"col-xs-12 col-sm-2"},[s("svg",{staticClass:"social-icon",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},on:{click:function(t){return e.externalNavigate("mailto:fyles1994@outlook.com")}}},[s("title",[e._v("Email")]),s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}})])])])])])])])])},Z=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-xs-12 center-xs"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12"},[s("h1",{staticClass:"page-title"},[e._v("About")])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3  card"},[s("p",{staticClass:"about-text"},[e._v(" I'm Tom a Web application developer with multiyear experience in developing applications using .NET and cutting edge modern front end technologies and frameworks (e.g. VueJS, modern JavaScript, HTML5, CSS3). Keen interest in the implementation of the latest browser/ front end features to create the best possible interfaces and experience for users as the web evolves. "),s("br"),s("br"),e._v(" I have worked with and take an interest in the use of PWA and Hybrid web apps to produce native like mobile experiences for users and have worked on apps that have been released on both the Apple App store and Google Play Store and have a good understanding of the processes required to release an application to the public and following the app store processes "),s("br"),s("br"),e._v(" I also have knowledge in a range of AWS services and how to use these to host websites, store files and data and run web services to support applications. Services I have heavily used include, S3, Amplify, Lambda, and Route53 and a number of these have been used in the projects on my projects page. "),s("br"),s("br"),e._v(" I also have experience with Laravel, examples of which can be found in the projects section of this site. "),s("br"),s("br"),e._v(" Outside of work I'm a keen runner, hockey player and occasionally play bass guitar. ")])])])])}],q={name:"Contact",methods:{externalNavigate(e){window.location.href=e}}},U=q,J=(0,p.Z)(U,B,Z,!1,null,null,null),K=J.exports,Y={name:"Main",components:{"intro-section":z,"projects-section":$,"contact-section":K}},X=Y,ee=(0,p.Z)(X,f,C,!1,null,null,null),te=ee.exports,se=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"projects page",attrs:{id:"projects-page"}},[e._m(0),s("div",{staticClass:"row"},e._l(e.projects,(function(t,a){return s("div",{key:a,staticClass:"col-xs-12 col-sm-6 col-md-4 project-card"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12",on:{click:function(s){return e.navigate("/projects/"+t.slug)}}},[s("crossfade-image",{attrs:{topImage:t.images[0].src,bottomImage:t.images[1].src,title:t.name}})],1),s("div",{staticClass:"col-xs-12"},[s("h3",{staticClass:"title pointer",on:{click:function(s){return e.navigate("/projects/"+t.slug)}}},[e._v(" "+e._s(t.name)+" ")])]),s("div",{staticClass:"col-xs-12"},[s("p",[e._v(e._s(t.description))])]),null!=t.link?s("div",{staticClass:"col-xs-12"},[s("a",{staticClass:"project-external-link",attrs:{href:t.link}},[e._v("Project website")])]):e._e(),null!=t.githubLink?s("div",{staticClass:"col-xs-12"},[null!=t.githubLink?s("a",{staticClass:"project-external-link",attrs:{href:t.githubLink}},[e._v("Github page")]):e._e()]):e._e()])])})),0)])},ae=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row center-xs"},[s("div",{staticClass:"col-xs-12"},[s("h1",{staticClass:"page-title"},[e._v("Example Projects")])])])}],oe=JSON.parse('[{"name":"Watched It","slug":"watchedIt","link":null,"githubLink":"https://github.com/TomF46/WatchedIt","readMeLink":"https://github.com/TomF46/WatchedIt/blob/master/README.md","description":"Watched It is a site inspired by Letterbox and Imdb which allows users to rate, review, and make lists of your favourite films, it contains various ways to find films, people, credits, read reviews, find ratings and more. It is built using .Net core Web Api and React with Typescript using the Vite build system","images":[{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/WatchedItWeb/WatchedItLogo1.png","title":"Watched It logo"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/WatchedItWeb/WatchedItDetail.png","title":"Watched It Detail"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/WatchedItWeb/DesktopHomeNotLoggedIn.png","title":"Desktop not logged in"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/WatchedItWeb/HomeDesktop.png","title":"Home on desktop"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/WatchedItWeb/HomeHover.png","title":"Home when hovering over item."},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/WatchedItWeb/FilmsDesktop.png","title":"Films page on desktop"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/WatchedItWeb/FilmDesktop.png","title":"Film page on desktop"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/WatchedItWeb/PeopleTablet.png","title":"People page on tablet"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/WatchedItWeb/PersonMobile.png","title":"Person page on mobile"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/WatchedItWeb/FilmCreditsMobile.png","title":"Film credits page on mobile"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/WatchedItWeb/PersonAddCreditMobile1.png","title":"Add credit for a person on mobile - Part 1"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/WatchedItWeb/PersonAddCreditMobile2.png","title":"Add credit for a person on mobile - Part 2"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/WatchedItWeb/ProfileDesktop.png","title":"User profile on desktop"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/WatchedItWeb/ReviewTablet.png","title":"Film review page on tablet"}],"videos":[],"technology":[".Net Core web api","Entity framework core","React","Typescript","Vite build system","Redux","React-query"]},{"name":"Mentior Corp Finance Tool","slug":"finance-app","link":null,"githubLink":"https://github.com/TomF46/FinanceApp","readMeLink":"https://github.com/TomF46/FinanceApp/blob/main/README.md","description":"Mentior Corp Finance Tool is an end of year funding application app for a fictitious company. This application was created using a React front end wrapped within a Laravel application acting as an API. In depth information about the business case and technical information can be found in the ReadMe by following the link to Github.","images":[{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/MentiorCorp/MentiorCorpLogo.png","title":"Mentior Corp Fianance Tool logo"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/MentiorCorp/MentiorCorpOverview.png","title":"Mentior Corp Fianance Tool detail"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/MentiorCorp/AreaManagerDashboard.PNG","title":"Area manager dashboard"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/MentiorCorp/RetailManagerDashboard.PNG","title":"Retail manager dashboard"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/MentiorCorp/Application.PNG","title":"Retailer application view"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/MentiorCorp/ApplicationReadOnly.PNG","title":"Read only application view"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/MentiorCorp/YearOverview.PNG","title":"Year overview"}],"videos":[{"title":"Admin - Employee creation","link":"https://www.youtube.com/watch?v=WCDHkjoU5WI","src":"https://www.youtube.com/embed/WCDHkjoU5WI"},{"title":"Admin - Product creation","link":"https://www.youtube.com/watch?v=lNrl2kBRAVE","src":"https://www.youtube.com/embed/lNrl2kBRAVE"},{"title":"Application year creation","link":"https://www.youtube.com/watch?v=1kHOFyMa_6A","src":"https://www.youtube.com/embed/1kHOFyMa_6A"},{"title":"Retail manager application","link":"https://www.youtube.com/watch?v=YlqPyZKBnks","src":"https://www.youtube.com/embed/YlqPyZKBnks"},{"title":"Area manager review","link":"https://www.youtube.com/watch?v=0WcvZku3F4A","src":"https://www.youtube.com/embed/0WcvZku3F4A"},{"title":"Head office overview","link":"https://www.youtube.com/watch?v=opaKzj7ZPV4","src":"https://www.youtube.com/embed/opaKzj7ZPV4"}],"technology":["Laravel","React","Tailwind css","SASS","Webpack mix","PHP unit testing","Docker with Laravel Sail"]},{"name":"Untitled quiz app","slug":"untitled-quiz-app","link":null,"githubLink":"https://github.com/TomF46/UntitledQuizApp","readMeLink":"https://github.com/TomF46/UntitledQuizApp/blob/master/README.md","description":"This application consists of a Laravel API and a React frontend and allows users to create quizzes, take other peoples quizzes and more, see the Github ReadMe for a compehensive list. This application was undertaken as i have been learning laravel recently and wanted to do a slightly larger project using it.","images":[{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/QApp/QAppWebsiteLogo.png","title":"QApp logo"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/QApp/QAppOverview.png","title":"QApp detail"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/QApp/Dashboard.PNG","title":"Dashboard page"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/QApp/ExplorePage.PNG","title":"Quiz explore page"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/QApp/QuizDetailPage.PNG","title":"Quiz Detail page"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/QApp/Question.PNG","title":"Quiz question"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/QApp/VideoQuestion.PNG","title":"Quiz video question"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/QApp/ProfilePage.PNG","title":"User profile page"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/QApp/Challenges.PNG","title":"Challenges page"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/QApp/EventPage.PNG","title":"Event page"}],"videos":[{"title":"Example flow","link":"https://youtu.be/FWkT055tgB4","src":"https://www.youtube.com/embed/FWkT055tgB4"},{"title":"Search example","link":"https://youtu.be/a6fTz8RVsVI","src":"https://www.youtube.com/embed/a6fTz8RVsVI"},{"title":"Quiz creation example","link":"https://youtu.be/50Did_lvNck","src":"https://www.youtube.com/embed/50Did_lvNck"},{"title":"Events","link":"https://youtu.be/fJd1TL-xnCE","src":"https://www.youtube.com/embed/fJd1TL-xnCE"}],"technology":["Laravel","React","Tailwind css","SASS","Webpack mix","PHP unit testing","Laravel forge deployment with AWS"]},{"name":"League Administration App","slug":"league-administration-app","link":null,"githubLink":"https://github.com/TomF46/LeagueSite","readMeLink":"https://github.com/TomF46/LeagueSite/blob/master/README.md","description":"This is a hockey (or football) league administration app which includes a .Net Core API and react front end, normal users can view league fixtures, results, and league tables as well as informarion about teams, special admin users can configure all this data in management view. The idea for this demonstration app came about as the websites used by most leagues are pretty bad and i wondered if i could make a better one.","images":[{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/LeagueApp/LeagueAdminWebsiteLogo.png","title":"League admin app logo"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/LeagueApp/LeagueAppOverview.png","title":"League admin app detail"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/LeagueApp/LeagueAppFixtures.PNG","title":"Fixtures page"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/LeagueApp/LeagueAppLeagueTable.PNG","title":"League table page"},{"src":"https://personal-website-images-tom.s3-eu-west-1.amazonaws.com/LeagueApp/LeagueAppTeams.PNG","title":"Team page"},{"src":"https://personal-website-images-tom.s3-eu-west-1.amazonaws.com/LeagueApp/LeagueAppDivision.PNG","title":"Division page"}],"videos":[],"technology":[".NET Core Api","ER Core","React","Webpack / Babel","Bulma css framework","SASS","NUnit testing","JWT Authentication"]},{"name":"Appathematics","slug":"appathematics","link":"https://tomf46.github.io/Appathematics/","githubLink":"https://github.com/TomF46/Appathematics","readMeLink":"https://github.com/TomF46/Appathematics/blob/master/README.md","description":"Appathemtatics is a mobile first progressive web app designed to gameify basic maths skills for children, race against the clock to set new high scores and try to complete the levels as fast as possible, the game contains a number of levels which differ in the number of questions, operators used (addition, subtraction, multiplication, division, powers, roots), as well as a question set creation tool to create your own. This application can be installed as an app on the phone or played in a standard browser. Please see the Github page for more technical information.","images":[{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/Appathematics/AppathematicsWebsiteLogo.png","title":"Appathematics logo"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/Appathematics/AppathemticsOverview.png","title":"Appathematics detail"},{"src":"https://personal-website-images-tom.s3-eu-west-1.amazonaws.com/Appathematics/appathematics.PNG","title":"Mobile screens"}],"videos":[],"technology":["React","TailwindCss","Vite build system","PWA features (Manifest / Service workers)","Redux state management","Vitest testing"]},{"name":"WatchedIt React Native","slug":"watchedItNative","link":null,"githubLink":"https://github.com/TomF46/WatchedIt-Mobile","readMeLink":"https://github.com/TomF46/WatchedIt-Mobile/blob/master/README.md","description":"Watched IT mobile is a simple app where you can find, view and explore films and create a watched list to track the films you have seen. This is inspired by apps such as Letteboxd. The purpose of this application is to learn React Native and how it compares to other tech I have used such as Quasar, Ionic, and Cordova. Due to this I have tried to keep all development concentrated on visible elements such as design and user interaction and decided to mock the data with JSON as opposed to creating a real API though I may add this in the future. See Github link for Download instructions.","images":[{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/WatchedIt/WatchedItWebsiteLogo.png","title":"Watched It Native logo"},{"src":"https://personal-website-images-tom.s3.eu-west-1.amazonaws.com/WatchedIt/WatchedItOverview.png","title":"Watched It Native detail"},{"src":"https://personal-website-images-tom.s3-eu-west-1.amazonaws.com/WatchedIt/WatchedIt.jpg","title":"Watched It Native screens"},{"src":"https://personal-website-images-tom.s3-eu-west-1.amazonaws.com/WatchedIt/Home.jpg","title":"Home page"},{"src":"https://personal-website-images-tom.s3-eu-west-1.amazonaws.com/WatchedIt/ViewFilm.jpg","title":"View film page"},{"src":"https://personal-website-images-tom.s3-eu-west-1.amazonaws.com/WatchedIt/Explore.jpg","title":"Explore page"},{"src":"https://personal-website-images-tom.s3-eu-west-1.amazonaws.com/WatchedIt/ExploreSearching.jpg","title":"Searching"},{"src":"https://personal-website-images-tom.s3-eu-west-1.amazonaws.com/WatchedIt/MyFilms.jpg","title":"My films"}],"videos":[],"technology":["React","React Native","Redux"]}]'),ie={name:"ProjectsPage",components:{"crossfade-image":H},data:()=>({projects:oe}),methods:{navigate(e){this.$router.push(e)}}},ne=ie,re=(0,p.Z)(ne,se,ae,!1,null,null,null),le=re.exports,ce=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"projects page project-detail",attrs:{id:"project-page"}},[e.project?s("div",[s("div",{staticClass:"row project-row no-border-b"},[s("div",{staticClass:"col-xs-12 mb-16"},[s("div",{staticClass:"row"},[s("div",{staticClass:"card"},[s("div",{staticClass:"col-xs-12 center-xs start-sm"},[s("h1",{staticClass:"page-title"},[e._v(" "+e._s(e.project.name)+" ")])]),s("div",{staticClass:"col-xs-12"},[s("p",[s("span",{staticClass:"bold"},[e._v("Description:")]),e._v(" "+e._s(e.project.description)+" ")])]),e.project.technology.length>0?s("div",{staticClass:"col-xs-12"},[s("p",{staticClass:"bold"},[e._v("Technology used:")]),s("ul",{staticClass:"tech-list"},e._l(e.project.technology,(function(t,a){return s("li",{key:a},[e._v(" "+e._s(t)+" ")])})),0)]):e._e(),s("div",{staticClass:"col-xs-12 button-row"},[null!=e.project.link?s("button",{staticClass:"button",on:{click:function(t){return e.externalNavigate(e.project.link)}}},[e._v(" Project website ")]):e._e(),null!=e.project.githubLink?s("button",{staticClass:"button",on:{click:function(t){return e.externalNavigate(e.project.githubLink)}}},[e._v(" Github ")]):e._e(),null!=e.project.readMeLink?s("button",{staticClass:"button",on:{click:function(t){return e.externalNavigate(e.project.readMeLink)}}},[e._v(" Detailed ReadMe ")]):e._e()]),e.project.images.length>0?s("div",{staticClass:"col-xs-12"},[e._m(0),s("div",{staticClass:"row center-xs start-sm image-preview-row"},[e._l(e.project.images,(function(t,a){return s("img",{key:a,staticClass:"image",attrs:{src:t.src,alt:"project image"},on:{click:function(t){e.index=a}}})})),s("gallery",{attrs:{images:e.project.images,index:e.index,options:e.options},on:{close:function(t){e.index=null}}})],2)]):e._e(),e.project.videos.length>0?s("div",{staticClass:"col-xs-12"},[e._m(1),s("div",{staticClass:"row"},e._l(e.project.videos,(function(t,a){return s("div",{key:a,staticClass:"col-xs-12 col-md-6 col-lg-4 video-container"},[s("p",{staticClass:"video-title"},[e._v(" "+e._s(t.title)+" ")]),s("iframe",{staticClass:"video",attrs:{src:t.src,title:t.title,frameborder:"0",allow:"accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])})),0)]):e._e()])])])])]):s("div",{staticClass:"project-not-found-page"},[s("p",{staticClass:"text-center"},[e._v(" No project is found with the chosen identifier. ")]),s("button",{on:{click:function(t){return e.navigate("/")}}},[e._v("Homepage")])])])},pe=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row center-xs start-sm"},[s("h2",{staticClass:"page-subtitle"},[e._v(" Images ")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row center-xs start-sm"},[s("h2",{staticClass:"page-subtitle"},[e._v("Videos")])])}],me=s(3292),ue=s.n(me),de={name:"Projects-Detail",props:["slug"],components:{gallery:ue()},data:()=>({projects:oe,index:null,options:{urlProperty:"src"}}),computed:{project(){return this.projects.find((e=>e.slug==this.slug))}},methods:{navigate(e){this.$router.push(e)},externalNavigate(e){window.location.href=e}}},he=de,ge=(0,p.Z)(he,ce,pe,!1,null,null,null),we=ge.exports;a.Z.use(b.Z);const ve=[{path:"/",name:"Home",component:te},{path:"/projects",component:le,name:"Projects"},{path:"/projects/:slug",component:we,name:"Project",props:!0}],be=new b.Z({mode:"history",base:"/",routes:ve});var fe=be;a.Z.config.productionTip=!1,new a.Z({router:fe,render:e=>e(w)}).$mount("#app")}},t={};function s(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={exports:{}};return e[a].call(i.exports,i,i.exports,s),i.exports}s.m=e,function(){var e=[];s.O=function(t,a,o,i){if(!a){var n=1/0;for(p=0;p<e.length;p++){a=e[p][0],o=e[p][1],i=e[p][2];for(var r=!0,l=0;l<a.length;l++)(!1&i||n>=i)&&Object.keys(s.O).every((function(e){return s.O[e](a[l])}))?a.splice(l--,1):(r=!1,i<n&&(n=i));if(r){e.splice(p--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var p=e.length;p>0&&e[p-1][2]>i;p--)e[p]=e[p-1];e[p]=[a,o,i]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,i,n=a[0],r=a[1],l=a[2],c=0;if(n.some((function(t){return 0!==e[t]}))){for(o in r)s.o(r,o)&&(s.m[o]=r[o]);if(l)var p=l(s)}for(t&&t(a);c<n.length;c++)i=n[c],s.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return s.O(p)},a=self["webpackChunktom_f"]=self["webpackChunktom_f"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(7149)}));a=s.O(a)})();
//# sourceMappingURL=app.e1679de4.js.map