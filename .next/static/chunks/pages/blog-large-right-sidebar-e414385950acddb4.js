(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[166],{7913:function(e,s,a){"use strict";var l=a(5696);Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var i,r=(i=a(7294))&&i.__esModule?i:{default:i},c=a(2199),n=a(1587),t=a(7215);var d={};function o(e,s,a,l){if(e&&c.isLocalURL(s)){e.prefetch(s,a,l).catch((function(e){0}));var i=l&&"undefined"!==typeof l.locale?l.locale:e&&e.locale;d[s+"%"+a+(i?"%"+i:"")]=!0}}var h=function(e){var s,a=!1!==e.prefetch,i=n.useRouter(),h=r.default.useMemo((function(){var s=c.resolveHref(i,e.href,!0),a=l(s,2),r=a[0],n=a[1];return{href:r,as:e.as?c.resolveHref(i,e.as):n||r}}),[i,e.href,e.as]),m=h.href,x=h.as,u=r.default.useRef(m),j=r.default.useRef(x),f=e.children,g=e.replace,p=e.shallow,b=e.scroll,N=e.locale;"string"===typeof f&&(f=r.default.createElement("a",null,f));var v=(s=r.default.Children.only(f))&&"object"===typeof s&&s.ref,w=t.useIntersection({rootMargin:"200px"}),y=l(w,3),k=y[0],M=y[1],_=y[2],I=r.default.useCallback((function(e){j.current===x&&u.current===m||(_(),j.current=x,u.current=m),k(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[x,v,m,_,k]);r.default.useEffect((function(){var e=M&&a&&c.isLocalURL(m),s="undefined"!==typeof N?N:i&&i.locale,l=d[m+"%"+x+(s?"%"+s:"")];e&&!l&&o(i,m,x,{locale:s})}),[x,m,M,N,a,i]);var q={ref:I,onClick:function(e){s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e),e.defaultPrevented||function(e,s,a,l,i,r,n,t){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var s=e.currentTarget.target;return s&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(a))&&(e.preventDefault(),s[i?"replace":"push"](a,l,{shallow:r,locale:t,scroll:n}))}(e,i,m,x,g,p,b,N)},onMouseEnter:function(e){s.props&&"function"===typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),c.isLocalURL(m)&&o(i,m,x,{priority:!0})}};if(e.passHref||"a"===s.type&&!("href"in s.props)){var E="undefined"!==typeof N?N:i&&i.locale,L=i&&i.isLocaleDomain&&c.getDomainLocale(x,E,i&&i.locales,i&&i.domainLocales);q.href=L||c.addBasePath(c.addLocale(x,E,i&&i.defaultLocale))}return r.default.cloneElement(s,q)};s.default=h,("function"===typeof s.default||"object"===typeof s.default&&null!==s.default)&&(Object.assign(s.default,s),e.exports=s.default)},7215:function(e,s,a){"use strict";var l=a(5696);Object.defineProperty(s,"__esModule",{value:!0}),s.useIntersection=function(e){var s=e.rootRef,a=e.rootMargin,d=e.disabled||!c,o=i.useRef(),h=i.useState(!1),m=l(h,2),x=m[0],u=m[1],j=i.useState(s?s.current:null),f=l(j,2),g=f[0],p=f[1],b=i.useCallback((function(e){o.current&&(o.current(),o.current=void 0),d||x||e&&e.tagName&&(o.current=function(e,s,a){var l=function(e){var s,a={root:e.root||null,margin:e.rootMargin||""},l=t.find((function(e){return e.root===a.root&&e.margin===a.margin}));l?s=n.get(l):(s=n.get(a),t.push(a));if(s)return s;var i=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var s=i.get(e.target),a=e.isIntersecting||e.intersectionRatio>0;s&&a&&s(a)}))}),e);return n.set(a,s={id:a,observer:r,elements:i}),s}(a),i=l.id,r=l.observer,c=l.elements;return c.set(e,s),r.observe(e),function(){if(c.delete(e),r.unobserve(e),0===c.size){r.disconnect(),n.delete(i);var s=t.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));s>-1&&t.splice(s,1)}}}(e,(function(e){return e&&u(e)}),{root:g,rootMargin:a}))}),[d,g,a,x]),N=i.useCallback((function(){u(!1)}),[]);return i.useEffect((function(){if(!c&&!x){var e=r.requestIdleCallback((function(){return u(!0)}));return function(){return r.cancelIdleCallback(e)}}}),[x]),i.useEffect((function(){s&&p(s.current)}),[s]),[b,x,N]};var i=a(7294),r=a(8065),c="undefined"!==typeof IntersectionObserver;var n=new Map,t=[];("function"===typeof s.default||"object"===typeof s.default&&null!==s.default)&&(Object.assign(s.default,s),e.exports=s.default)},1093:function(e,s,a){"use strict";a.r(s);var l=a(1190),i=a(2678),r=a(1664),c=a.n(r),n=a(5893);s.default=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.Z,{}),(0,n.jsxs)("div",{className:"page-content bg-white",children:[(0,n.jsx)("div",{className:"dlab-bnr-inr overlay-primary-dark",style:{backgroundImage:"url(images/banner/bnr1.jpg)"},children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"dlab-bnr-inr-entry",children:[(0,n.jsx)("h1",{children:"Blog Large"}),(0,n.jsx)("nav",{"aria-label":"breadcrumb",className:"breadcrumb-row",children:(0,n.jsxs)("ul",{className:"breadcrumb",children:[(0,n.jsx)("li",{className:"breadcrumb-item",children:(0,n.jsx)(c(),{href:"/",children:(0,n.jsx)("a",{children:"Home"})})}),(0,n.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"Blog"})]})})]})})}),(0,n.jsx)("section",{className:"content-inner bg-img-fix",style:{backgroundImage:"url(images/background/bg1.png)"},children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{className:"col-xl-8 col-lg-8 m-b50",children:[(0,n.jsxs)("div",{className:"dlab-blog style-1 bg-white text-center m-b50",children:[(0,n.jsx)("div",{className:"dlab-media dlab-img-effect zoom",children:(0,n.jsx)("img",{src:"images/blog/default/thum1.jpg",alt:""})}),(0,n.jsxs)("div",{className:"dlab-info",children:[(0,n.jsx)("h4",{className:"dlab-title",children:(0,n.jsx)("a",{href:"/blog-details-1",children:"Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor. Vestibulum in ante ut tortor eleifend venenatis."})}),(0,n.jsx)("p",{className:"m-b0",children:"Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor vitae, porttitor quis erat. Donec sit amet semper massa."}),(0,n.jsx)("div",{className:"dlab-meta meta-bottom",children:(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{className:"post-date",children:[(0,n.jsx)("i",{className:"flaticon-clock m-r10"}),"7 March, 2020"]}),(0,n.jsxs)("li",{className:"post-author",children:[(0,n.jsx)("i",{className:"flaticon-user m-r10"}),"By Johne Doe"]}),(0,n.jsx)("li",{className:"post-comment",children:(0,n.jsx)(c(),{href:"#",children:(0,n.jsxs)("a",{children:[(0,n.jsx)("i",{className:"flaticon-speech-bubble"}),(0,n.jsx)("span",{children:"15"})]})})}),(0,n.jsxs)("li",{className:"post-share",children:[(0,n.jsx)("i",{className:"flaticon-share"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{className:"fa fa-facebook",href:"https://en-gb.facebook.com/"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{className:"fa fa-twitter",href:"https://twitter.com/login?lang=en"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{className:"fa fa-linkedin",href:"https://www.linkedin.com/login"})})]})]})]})})]})]}),(0,n.jsxs)("div",{className:"dlab-blog style-1 bg-white text-center m-b50",children:[(0,n.jsx)("div",{className:"dlab-media dlab-img-effect zoom",children:(0,n.jsx)("img",{src:"images/blog/default/thum2.jpg",alt:""})}),(0,n.jsxs)("div",{className:"dlab-info",children:[(0,n.jsx)("h4",{className:"dlab-title",children:(0,n.jsx)("a",{href:"/blog-details-1",children:"Quisque egestas iaculis felis eget placerat ut pulvinar mi elitauctor nec."})}),(0,n.jsx)("p",{className:"m-b0",children:"Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor vitae, porttitor quis erat. Donec sit amet semper massa."}),(0,n.jsx)("div",{className:"dlab-meta meta-bottom",children:(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{className:"post-date",children:[(0,n.jsx)("i",{className:"flaticon-clock m-r10"}),"7 March, 2020"]}),(0,n.jsxs)("li",{className:"post-author",children:[(0,n.jsx)("i",{className:"flaticon-user m-r10"}),"By Johne Doe"]}),(0,n.jsx)("li",{className:"post-comment",children:(0,n.jsx)(c(),{href:"#",children:(0,n.jsxs)("a",{children:[(0,n.jsx)("i",{className:"flaticon-speech-bubble"}),(0,n.jsx)("span",{children:"15"})]})})}),(0,n.jsxs)("li",{className:"post-share",children:[(0,n.jsx)("i",{className:"flaticon-share"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{className:"fa fa-facebook",href:"https://en-gb.facebook.com/"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{className:"fa fa-twitter",href:"https://twitter.com/login?lang=en"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{className:"fa fa-linkedin",href:"https://www.linkedin.com/login"})})]})]})]})})]})]}),(0,n.jsxs)("div",{className:"dlab-blog style-1 bg-white text-center m-b50",children:[(0,n.jsx)("div",{className:"dlab-media dlab-img-effect zoom",children:(0,n.jsx)("img",{src:"images/blog/default/thum3.jpg",alt:""})}),(0,n.jsxs)("div",{className:"dlab-info",children:[(0,n.jsx)("h4",{className:"dlab-title",children:(0,n.jsx)("a",{href:"/blog-details-1",children:"Quisque sem tortor, convallis in arcu eu, accumsan finibus massa donec et sapien risus."})}),(0,n.jsx)("p",{className:"m-b0",children:"Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel. Fusce in rhoncus quam. Integer dolor arcu, ullamcorper sed auctor vitae, porttitor quis erat. Donec sit amet semper massa."}),(0,n.jsx)("div",{className:"dlab-meta meta-bottom",children:(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{className:"post-date",children:[(0,n.jsx)("i",{className:"flaticon-clock m-r10"}),"7 March, 2020"]}),(0,n.jsxs)("li",{className:"post-author",children:[(0,n.jsx)("i",{className:"flaticon-user m-r10"}),"By Johne Doe"]}),(0,n.jsx)("li",{className:"post-comment",children:(0,n.jsx)(c(),{href:"#",children:(0,n.jsxs)("a",{children:[(0,n.jsx)("i",{className:"flaticon-speech-bubble"}),(0,n.jsx)("span",{children:"15"})]})})}),(0,n.jsxs)("li",{className:"post-share",children:[(0,n.jsx)("i",{className:"flaticon-share"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{className:"fa fa-facebook",href:"https://en-gb.facebook.com/"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{className:"fa fa-twitter",href:"https://twitter.com/login?lang=en"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{className:"fa fa-linkedin",href:"https://www.linkedin.com/login"})})]})]})]})})]})]}),(0,n.jsx)("nav",{"aria-label":"Blog Pagination",children:(0,n.jsxs)("ul",{className:"pagination text-center p-t20",children:[(0,n.jsx)("li",{className:"page-item",children:(0,n.jsx)(c(),{href:"#",children:(0,n.jsx)("a",{className:"page-link prev",children:"Prev"})})}),(0,n.jsx)("li",{className:"page-item",children:(0,n.jsx)(c(),{href:"#",children:(0,n.jsx)("a",{className:"page-link active",children:"1"})})}),(0,n.jsx)("li",{className:"page-item",children:(0,n.jsx)(c(),{href:"#",children:(0,n.jsx)("a",{className:"page-link",children:"2"})})}),(0,n.jsx)("li",{className:"page-item",children:(0,n.jsx)(c(),{href:"#",children:(0,n.jsx)("a",{className:"page-link",children:"3"})})}),(0,n.jsx)("li",{className:"page-item",children:(0,n.jsx)(c(),{href:"#",children:(0,n.jsx)("a",{className:"page-link next",children:"Next"})})})]})})]}),(0,n.jsx)("div",{className:"col-xl-4 col-lg-4 m-b30",children:(0,n.jsxs)("aside",{className:"side-bar sticky-top",children:[(0,n.jsx)("div",{className:"widget",children:(0,n.jsx)("div",{className:"search-bx",children:(0,n.jsx)("form",{role:"search",method:"post",children:(0,n.jsxs)("div",{className:"input-group",children:[(0,n.jsx)("div",{className:"input-group-prepend",children:(0,n.jsx)("span",{className:"input-group-text",children:(0,n.jsx)("i",{className:"la la-search"})})}),(0,n.jsx)("input",{name:"text",className:"form-control",placeholder:"Search",type:"text"}),(0,n.jsx)("span",{className:"input-group-btn",children:(0,n.jsx)("button",{type:"submit",className:"btn btn-primary",children:(0,n.jsx)("i",{className:"la la-long-arrow-right"})})})]})})})}),(0,n.jsxs)("div",{className:"widget widget_archive",children:[(0,n.jsx)("h2",{className:"widget-title",children:"Category"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(c(),{href:"#",children:(0,n.jsxs)("a",{children:["Design",(0,n.jsx)("span",{children:"05"})]})})}),(0,n.jsx)("li",{children:(0,n.jsx)(c(),{href:"#",children:(0,n.jsxs)("a",{children:["Development",(0,n.jsx)("span",{children:"25"})]})})}),(0,n.jsx)("li",{children:(0,n.jsx)(c(),{href:"#",children:(0,n.jsxs)("a",{children:["SEO",(0,n.jsx)("span",{children:"20"})]})})}),(0,n.jsx)("li",{children:(0,n.jsx)(c(),{href:"#",children:(0,n.jsxs)("a",{children:["App Design",(0,n.jsx)("span",{children:"08"})]})})}),(0,n.jsx)("li",{children:(0,n.jsx)(c(),{href:"#",children:(0,n.jsxs)("a",{children:["Branding",(0,n.jsx)("span",{children:"22"})]})})})]})]}),(0,n.jsxs)("div",{className:"widget recent-posts-entry",children:[(0,n.jsx)("h2",{className:"widget-title",children:"Recent Posts"}),(0,n.jsxs)("div",{className:"widget-post-bx",children:[(0,n.jsxs)("div",{className:"widget-post clearfix",children:[(0,n.jsx)("div",{className:"dlab-media",children:(0,n.jsx)("img",{src:"images/blog/recent-blog/pic1.jpg",alt:""})}),(0,n.jsxs)("div",{className:"dlab-info",children:[(0,n.jsx)("h4",{className:"title",children:(0,n.jsx)("a",{href:"/blog-details-1",children:"Fusce mollis felis quis tristique"})}),(0,n.jsx)("div",{className:"dlab-meta",children:(0,n.jsx)("ul",{children:(0,n.jsx)("li",{className:"post-date",children:" 7 March, 2020 "})})})]})]}),(0,n.jsxs)("div",{className:"widget-post clearfix",children:[(0,n.jsx)("div",{className:"dlab-media",children:(0,n.jsx)("img",{src:"images/blog/recent-blog/pic2.jpg",alt:""})}),(0,n.jsxs)("div",{className:"dlab-info",children:[(0,n.jsx)("h4",{className:"title",children:(0,n.jsx)("a",{href:"/blog-details-1",children:"Fusce mollis felis quis tristique"})}),(0,n.jsx)("div",{className:"dlab-meta",children:(0,n.jsx)("ul",{children:(0,n.jsx)("li",{className:"post-date",children:" 7 March, 2020 "})})})]})]}),(0,n.jsxs)("div",{className:"widget-post clearfix",children:[(0,n.jsx)("div",{className:"dlab-media",children:(0,n.jsx)("img",{src:"images/blog/recent-blog/pic3.jpg",alt:""})}),(0,n.jsxs)("div",{className:"dlab-info",children:[(0,n.jsx)("h4",{className:"title",children:(0,n.jsx)("a",{href:"/blog-details-1",children:"Fusce mollis felis quis tristique"})}),(0,n.jsx)("div",{className:"dlab-meta",children:(0,n.jsx)("ul",{children:(0,n.jsx)("li",{className:"post-date",children:" 7 March, 2020 "})})})]})]}),(0,n.jsxs)("div",{className:"widget-post clearfix",children:[(0,n.jsx)("div",{className:"dlab-media",children:(0,n.jsx)("img",{src:"images/blog/recent-blog/pic3.jpg",alt:""})}),(0,n.jsxs)("div",{className:"dlab-info",children:[(0,n.jsx)("h4",{className:"title",children:(0,n.jsx)("a",{href:"/blog-details-1",children:"Fusce mollis felis quis tristique"})}),(0,n.jsx)("div",{className:"dlab-meta",children:(0,n.jsx)("ul",{children:(0,n.jsx)("li",{className:"post-date",children:" 7 March, 2020 "})})})]})]})]})]}),(0,n.jsxs)("div",{className:"widget widget_archive",children:[(0,n.jsx)("h2",{className:"widget-title",children:"Archives"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(c(),{href:"#",children:(0,n.jsxs)("a",{children:["January",(0,n.jsx)("span",{children:"05"})]})})}),(0,n.jsx)("li",{children:(0,n.jsx)(c(),{href:"#",children:(0,n.jsxs)("a",{children:["Fabruary",(0,n.jsx)("span",{children:"25"})]})})}),(0,n.jsx)("li",{children:(0,n.jsx)(c(),{href:"#",children:(0,n.jsxs)("a",{children:["March",(0,n.jsx)("span",{children:"20"})]})})}),(0,n.jsx)("li",{children:(0,n.jsx)(c(),{href:"#",children:(0,n.jsxs)("a",{children:["April",(0,n.jsx)("span",{children:"08"})]})})}),(0,n.jsx)("li",{children:(0,n.jsx)(c(),{href:"#",children:(0,n.jsxs)("a",{children:["May",(0,n.jsx)("span",{children:"22"})]})})}),(0,n.jsx)("li",{children:(0,n.jsx)(c(),{href:"#",children:(0,n.jsxs)("a",{children:["Jun",(0,n.jsx)("span",{children:"11"})]})})}),(0,n.jsx)("li",{children:(0,n.jsx)(c(),{href:"#",children:(0,n.jsxs)("a",{children:["July",(0,n.jsx)("span",{children:"19"})]})})})]})]}),(0,n.jsxs)("div",{className:"widget widget_tag_cloud",children:[(0,n.jsx)("h2",{className:"widget-title",children:"Tags"}),(0,n.jsxs)("div",{className:"tagcloud",children:[(0,n.jsx)(c(),{href:"#",children:(0,n.jsx)("a",{children:"Business"})}),(0,n.jsx)(c(),{href:"#",children:(0,n.jsx)("a",{children:"News"})}),(0,n.jsx)(c(),{href:"#",children:(0,n.jsx)("a",{children:"Brand"})}),(0,n.jsx)(c(),{href:"#",children:(0,n.jsx)("a",{children:"Website"})}),(0,n.jsx)(c(),{href:"#",children:(0,n.jsx)("a",{children:"Internal"})}),(0,n.jsx)(c(),{href:"#",children:(0,n.jsx)("a",{children:"Strategy"})}),(0,n.jsx)(c(),{href:"#",children:(0,n.jsx)("a",{children:"Brand"})}),(0,n.jsx)(c(),{href:"#",children:(0,n.jsx)("a",{children:"Mission"})})]})]})]})})]})})}),(0,n.jsx)("section",{style:{backgroundImage:"url(images/background/bg5.jpg)",backgroundSize:"cover"},children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"row action-box style-1 align-items-center",children:[(0,n.jsx)("div",{className:"col-xl-7 col-lg-8 col-md-8 wow fadeIn","data-wow-duration":"2s","data-wow-delay":"0.2s",children:(0,n.jsxs)("div",{className:"section-head style-1",children:[(0,n.jsx)("h6",{className:"sub-title bgl-primary m-b20 text-primary",children:"More With Us"}),(0,n.jsx)("h2",{className:"title",children:"You Want To Showcase Your Website In Top Join With Us"})]})}),(0,n.jsx)("div",{className:"col-xl-5 col-lg-4 col-md-4 text-right m-b30 wow fadeIn","data-wow-duration":"2s","data-wow-delay":"0.4s",children:(0,n.jsx)(c(),{href:"/contact-us-1",children:(0,n.jsxs)("a",{className:"btn btn-link d-inline-flex align-items-center",children:[(0,n.jsx)("i",{className:"fa fa-angle-right m-r10"}),"Join Now"]})})})]})})})]}),(0,n.jsx)(i.Z,{})]})}},3002:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog-large-right-sidebar",function(){return a(1093)}])},1664:function(e,s,a){e.exports=a(7913)}},function(e){e.O(0,[426,774,888,179],(function(){return s=3002,e(e.s=s);var s}));var s=e.O();_N_E=s}]);