(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),l=r(a("8OQS")),o=r(a("pVnL")),c=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=k([].concat(t.fluid))),t.fixed&&(t.fixed=k([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed;return m(t||a).src},m=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),g=function(e){var t=u(e),a=p(t);return h[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,b=y&&window.IntersectionObserver,E=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return c.default.createElement(c.default.Fragment,{key:t},r&&c.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),c.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function k(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return c.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},_=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",c=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+c+s+l+a+r+t+n+i+o+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=c.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,l=c.default.createElement(x,(0,o.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?c.default.createElement("picture",null,i(r),l):l})),x=c.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,m=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return c.default.createElement("img",(0,o.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},m,{onLoad:s,onError:d,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));x.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(v||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=c.default.createRef(),a.placeholderRef=t.placeholderRef||c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=p(t),h[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,h=e.fluid,g=e.fixed,v=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,E=e.itemProp,k=e.loading,I=e.draggable,L=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,C=(0,o.default)({opacity:L?1:0,transition:R?"opacity "+y+"ms":"none"},l),P="boolean"==typeof v?"lightgray":v,V={transitionDelay:y+"ms"},T=(0,o.default)({opacity:this.state.imgLoaded?0:1},R&&V,{},l,{},f),z={title:t,alt:this.state.isVisible?"":a,style:T,className:p,itemProp:E};if(h){var j=h,q=m(h);return c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},c.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),P&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:P,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&V)}),q.base64&&c.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:z,imageVariants:j,generateSources:N}),q.tracedSVG&&c.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:z,imageVariants:j,generateSources:w}),this.state.isVisible&&c.default.createElement("picture",null,S(j),c.default.createElement(x,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:k,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,o.default)({alt:a,title:t,loading:k},q,{imageVariants:j}))}}))}if(g){var M=g,W=m(g),B=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete B.display,c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},P&&c.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,o.default)({backgroundColor:P,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},R&&V)}),W.base64&&c.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:z,imageVariants:M,generateSources:N}),W.tracedSVG&&c.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:z,imageVariants:M,generateSources:w}),this.state.isVisible&&c.default.createElement("picture",null,S(M),c.default.createElement(x,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:C,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:k,draggable:I})),this.addNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:_((0,o.default)({alt:a,title:t,loading:k},W,{imageVariants:M}))}}))}return null},t}(c.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var C=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),P=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string});R.propTypes={resolutions:C,sizes:P,fixed:d.default.oneOfType([C,d.default.arrayOf(C)]),fluid:d.default.oneOfType([P,d.default.arrayOf(P)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var V=R;t.default=V},EK0E:function(e,t,a){"use strict";var r,i=a("dyZX"),n=a("CkkT")(0),s=a("KroJ"),l=a("Z6vF"),o=a("czNK"),c=a("ZD67"),d=a("0/R4"),u=a("s5qY"),f=a("s5qY"),p=!i.ActiveXObject&&"ActiveXObject"in i,m=l.getWeak,h=Object.isExtensible,g=c.ufstore,v=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},y={get:function(e){if(d(e)){var t=m(e);return!0===t?g(u(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return c.def(u(this,"WeakMap"),e,t)}},b=e.exports=a("4LiD")("WeakMap",v,y,c,!0,!0);f&&p&&(o((r=c.getConstructor(v,"WeakMap")).prototype,y),l.NEED=!0,n(["delete","has","get","set"],(function(e){var t=b.prototype,a=t[e];s(t,e,(function(t,i){if(d(t)&&!h(t)){this._f||(this._f=new r);var n=this._f[e](t,i);return"set"==e?this:n}return a.call(this,t,i)}))})))},INYr:function(e,t,a){"use strict";var r=a("XKFU"),i=a("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(n)},OGtf:function(e,t,a){var r=a("XKFU"),i=a("eeVq"),n=a("vhPU"),s=/"/g,l=function(e,t,a,r){var i=String(n(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return f}));a("0mN4");var r=a("q1tI"),i=a.n(r),n=a("9eSz"),s=a.n(n),l=a("wuON"),o=a("Bl7J"),c=a("vrFN"),d=(a("vs8Z"),a("se3C")),u=a.n(d);t.default=function(e){var t=e.data;return i.a.createElement(o.a,null,i.a.createElement(c.a,{title:"Cardo: Free Android app for greeting card messages, ideas and inspiration",keywords:u.a.app_keywords}),i.a.createElement("div",{className:"imageWrapper",style:{backgroundImage:"url("+t.headerImage.childImageSharp.fluid.src+")"}},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"iphonePreview",style:{backgroundImage:"url("+t.iphoneScreen.childImageSharp.fluid.src+")"}},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 0 0",style:{position:"absolute"}},i.a.createElement("clipPath",{id:"screenMask",clipPathUnits:"objectBoundingBox",transform:"scale(.00257 .00119)"},i.a.createElement("path",{d:"M6490.24,1234.36H6216.28c-2.57,0-10.55-.07-12.07-0.07a87.524,87.524,0,0,1-12-1.03,40.051,40.051,0,0,1-11.4-3.79,38.315,38.315,0,0,1-16.82-16.84,39.948,39.948,0,0,1-3.78-11.42,72.257,72.257,0,0,1-1.04-12.02c-0.06-1.83-.06-5.56-0.06-5.56V452.125h0s0.06-11.391.06-12.086a87.9,87.9,0,0,1,1.04-12.025,39.843,39.843,0,0,1,3.78-11.413,38.283,38.283,0,0,1,16.82-16.847,39.762,39.762,0,0,1,11.4-3.785,71.909,71.909,0,0,1,12-1.037c16.99-.567,36.32-0.061,34.51-0.061,5.02,0,6.5,3.439,6.63,6.962a35.611,35.611,0,0,0,1.2,8.156,21.326,21.326,0,0,0,19.18,15.592c2.28,0.192,6.78.355,6.78,0.355H6433.7s4.5-.059,6.79-0.251a21.348,21.348,0,0,0,19.18-15.591,35.582,35.582,0,0,0,1.19-8.154c0.13-3.523,1.61-6.962,6.64-6.962-1.81,0,17.52-.5,34.5.061a71.923,71.923,0,0,1,12.01,1.038,39.832,39.832,0,0,1,11.4,3.784,38.283,38.283,0,0,1,16.82,16.844,40.153,40.153,0,0,1,3.78,11.413,87.844,87.844,0,0,1,1.03,12.023c0,0.695.06,12.084,0.06,12.084h0V1183.64s0,3.72-.06,5.55a72.366,72.366,0,0,1-1.03,12.03,40.2,40.2,0,0,1-3.78,11.41,38.315,38.315,0,0,1-16.82,16.84,40.155,40.155,0,0,1-11.4,3.79,87.669,87.669,0,0,1-12.01,1.03c-1.52,0-9.5.07-12.07,0.07",transform:"translate(-6159.12 -394.656)"}))),i.a.createElement(s.a,{fluid:t.iphoneScreen.childImageSharp.fluid,className:"iphoneScreen",style:{opacity:0}})),i.a.createElement("div",{className:"appInfo"},i.a.createElement("div",{className:"appIconShadow"},i.a.createElement("svg",{width:"0",height:"0"},i.a.createElement("defs",null,i.a.createElement("clipPath",{id:"shape120"},i.a.createElement("path",{id:"shape",d:"M6821,495.533v-4.281c0-1.2-.04-2.4-0.04-3.642a57.7,57.7,0,0,0-.68-7.882,26.144,26.144,0,0,0-2.48-7.483,25.115,25.115,0,0,0-11.04-11.044,26.118,26.118,0,0,0-7.49-2.481,47.28,47.28,0,0,0-7.88-.68c-1.2-.04-2.4-0.04-3.64-0.04h-53.5c-1.2,0-2.4.04-3.64,0.04a57.813,57.813,0,0,0-7.88.68,26.323,26.323,0,0,0-7.49,2.481,25.115,25.115,0,0,0-11.04,11.044,26.144,26.144,0,0,0-2.48,7.483,47.313,47.313,0,0,0-.68,7.882c-0.04,1.2-.04,2.4-0.04,3.642v53.5c0,1.2.04,2.4,0.04,3.641a57.7,57.7,0,0,0,.68,7.883,26.137,26.137,0,0,0,2.48,7.482,25.115,25.115,0,0,0,11.04,11.044,26.261,26.261,0,0,0,7.49,2.481,47.28,47.28,0,0,0,7.88.68c1.2,0.04,2.4.04,3.64,0.04h53.5c1.2,0,2.4-.04,3.64-0.04a57.654,57.654,0,0,0,7.88-.68,26.057,26.057,0,0,0,7.49-2.481,25.115,25.115,0,0,0,11.04-11.044,26.137,26.137,0,0,0,2.48-7.482,47.316,47.316,0,0,0,.68-7.883c0.04-1.2.04-2.4,0.04-3.641V495.533h0Z",transform:"translate(-6701 -458)",filter:"url(#f1)"})))),i.a.createElement(s.a,{fluid:t.appIconLarge.childImageSharp.fluid,className:"appIconLarge"})),i.a.createElement("div",{className:"appNamePriceContainer"},i.a.createElement("h1",{className:"appName"},u.a.app_name),i.a.createElement("h2",{className:"appPrice"},u.a.app_price)),i.a.createElement("div",{className:"appDescriptionContainer"},i.a.createElement("p",{className:"appDescription"},u.a.app_description)),i.a.createElement("div",{className:"downloadButtonsContainer"},u.a.playstore_link&&i.a.createElement(l.OutboundLink,{className:"playStoreLink",href:u.a.playstore_link},i.a.createElement(s.a,{fixed:t.playStore.childImageSharp.fixed,className:"playStore"})),u.a.appstore_link&&i.a.createElement(l.OutboundLink,{className:"appStoreLink",href:u.a.appstore_link},i.a.createElement(s.a,{fixed:t.appStore.childImageSharp.fixed,className:"appStore"})))),i.a.createElement("div",{className:"features"},u.a.features.map((function(e){return e.title?i.a.createElement("div",{className:"feature",key:e.title},i.a.createElement("div",null,i.a.createElement("span",{className:"fa-stack fa-1x"},i.a.createElement("i",{className:"iconBack fas fa-circle fa-stack-2x"}),i.a.createElement("i",{className:"iconTop fas fa-"+e.fontawesome_icon_name+" fa-stack-1x"}))),i.a.createElement("div",{className:"featureText"},i.a.createElement("h3",null,e.title),i.a.createElement("p",null,e.description))):null}))),i.a.createElement("footer",null,i.a.createElement("p",{className:"footerText"},"Made by"," ",u.a.your_link?i.a.createElement(l.OutboundLink,{href:u.a.your_link},u.a.your_name):""+u.a.your_name,u.a.your_city&&" in "+u.a.your_city),i.a.createElement("div",{className:"footerIcons"},u.a.github_username&&i.a.createElement(l.OutboundLink,{href:"https://github.com/"+u.a.github_username,"aria-label":"GitHub"},i.a.createElement("span",{className:"fa-stack fa-1x"},i.a.createElement("i",{className:"socialIconBack fas fa-circle fa-stack-2x"}),i.a.createElement("i",{className:"socialIconTop fab fa-github fa-stack-1x"}))),u.a.email_address&&i.a.createElement(l.OutboundLink,{href:"mailto:"+u.a.email_address,"aria-label":"Email"},i.a.createElement("span",{className:"fa-stack fa-1x"},i.a.createElement("i",{className:"socialIconBack fas fa-circle fa-stack-2x"}),i.a.createElement("i",{className:"socialIconTop fas fa-envelope fa-stack-1x"}))),i.a.createElement("a",{href:"/privacy-policy/","aria-label":"Privacy Policy"},i.a.createElement("span",{className:"fa-stack fa-1x"},i.a.createElement("i",{className:"socialIconBack fas fa-circle fa-stack-2x"}),i.a.createElement("i",{className:"socialIconTop fas fa-lock fa-stack-1x"}))))))))};var f="930666771"},ZD67:function(e,t,a){"use strict";var r=a("3Lyj"),i=a("Z6vF").getWeak,n=a("y3w9"),s=a("0/R4"),l=a("9gX7"),o=a("SlkY"),c=a("CkkT"),d=a("aagx"),u=a("s5qY"),f=c(5),p=c(6),m=0,h=function(e){return e._l||(e._l=new g)},g=function(){this.a=[]},v=function(e,t){return f(e.a,(function(e){return e[0]===t}))};g.prototype={get:function(e){var t=v(this,e);if(t)return t[1]},has:function(e){return!!v(this,e)},set:function(e,t){var a=v(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var c=e((function(e,r){l(e,c,t,"_i"),e._t=t,e._i=m++,e._l=void 0,null!=r&&o(r,a,e[n],e)}));return r(c.prototype,{delete:function(e){if(!s(e))return!1;var a=i(e);return!0===a?h(u(this,t)).delete(e):a&&d(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=i(e);return!0===a?h(u(this,t)).has(e):a&&d(a,this._i)}}),c},def:function(e,t,a){var r=i(n(t),!0);return!0===r?h(e).set(t,a):r[e._i]=a,e},ufstore:h}},vs8Z:function(e,t,a){},wuON:function(e,t,a){"use strict";a("91GP"),Object.defineProperty(t,"__esModule",{value:!0}),t.OutboundLink=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i=s(a("q1tI")),n=s(a("17x9"));function s(e){return e&&e.__esModule?e:{default:e}}function l(e){return i.default.createElement("a",r({},e,{onClick:function(t){"function"==typeof e.onClick&&e.onClick();var a=!0;return(0!==t.button||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||t.defaultPrevented)&&(a=!1),e.target&&"_self"!==e.target.toLowerCase()&&(a=!1),window.gtag?window.gtag("event","click",{event_category:"outbound",event_label:e.href,transport_type:"beacon",event_callback:function(){a&&(document.location=e.href)}}):a&&(document.location=e.href),!1}}))}l.propTypes={href:n.default.string,target:n.default.string,onClick:n.default.func},t.OutboundLink=l}}]);
//# sourceMappingURL=component---src-pages-index-js-c45d832f7080b01db3bb.js.map