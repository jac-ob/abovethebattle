webpackJsonp([35783957827783],{223:function(e,t,a){var n,o;!function(){"use strict";function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n))e.push(a.apply(null,n));else if("object"===o)for(var i in n)r.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}var r={}.hasOwnProperty;"undefined"!=typeof e&&e.exports?e.exports=a:(n=[],o=function(){return a}.apply(t,n),!(void 0!==o&&(e.exports=o)))}()},38:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(){return"undefined"==typeof L&&"undefined"!=typeof window&&window.IntersectionObserver&&(L=new window.IntersectionObserver(function(e){e.forEach(function(e){S.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(L.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),L}t.__esModule=!0;var r=a(22),i=n(r),l=a(27),s=n(l),u=a(26),d=n(u),c=a(59),f=n(c),p=a(58),h=n(p),m=a(4),y=n(m),b=a(7),g=n(b),v=function(e){var t=(0,h.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},E=function(e){var t=v(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!w[a]||(w[a]=!0,!1)},L=void 0,S=[],_=function(e,t){o().observe(e),S.push([e,t])},j=null,O=function(){if(null!==j)return j;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return j=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},M=function(e){var t=e.opacity,a=void 0===t?"1":t,n=e.src,o=e.srcSet,r=e.sizes,i=void 0===r?"":r,l=e.title,s=void 0===l?"":l,u=e.alt,d=void 0===u?"":u,c=e.width,f=void 0===c?"":c,p=e.height,h=void 0===p?"":p,m=e.transitionDelay,y=void 0===m?"0.5s":m;return'<img width="'+f+'" height="'+h+'" src="'+n+'" srcset="'+o+'" alt="'+d+'" title="'+s+'" sizes="'+i+'" style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+y+";opacity:"+a+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},R=function(e){var t=e.style,a=e.onLoad,n=(0,f.default)(e,["style","onLoad"]);return y.default.createElement("img",(0,h.default)({},n,{onLoad:a,style:(0,h.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};R.propTypes={style:g.default.object,onLoad:g.default.func};var x=function(e){function t(a){(0,i.default)(this,t);var n=(0,s.default)(this,e.call(this,a)),o=!0,r=!0,l=!1,u=E(a);return!u&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=!1,r=!1,l=!0),"undefined"==typeof window&&(o=!1,r=!1),n.state={isVisible:o,imgLoaded:r,IOSupported:l},n.handleRef=n.handleRef.bind(n),n}return(0,d.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&_(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),a=t.title,n=t.alt,o=t.className,r=t.outerWrapperClassName,i=t.style,l=void 0===i?{}:i,s=t.imgStyle,u=void 0===s?{}:s,d=t.sizes,c=t.resolutions,f=t.backgroundColor,p=t.Tag,m=void 0;m="boolean"==typeof f?"lightgray":f;var b=(0,h.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},u),g=(0,h.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},u);if(d){var w=d;return w.srcWebp&&w.srcSetWebp&&O()&&(w.src=w.srcWebp,w.srcSet=w.srcSetWebp),y.default.createElement(p,{className:(r?r:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===l.position?"initial":"relative"}},y.default.createElement(p,{className:(o?o:"")+" gatsby-image-wrapper",style:(0,h.default)({position:"relative",overflow:"hidden"},l),ref:this.handleRef},y.default.createElement(p,{style:{width:"100%",paddingBottom:100/w.aspectRatio+"%"}}),w.base64&&y.default.createElement(R,{alt:n,title:a,src:w.base64,style:b}),w.tracedSVG&&y.default.createElement(R,{alt:n,title:a,src:w.tracedSVG,style:b}),m&&y.default.createElement(p,{title:a,style:{backgroundColor:m,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&y.default.createElement(R,{alt:n,title:a,srcSet:w.srcSet,src:w.src,sizes:w.sizes,style:g,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),y.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:M((0,h.default)({alt:n,title:a},w))}})))}if(c){var E=c,L=(0,h.default)({position:"relative",overflow:"hidden",display:"inline-block",width:E.width,height:E.height},l);return"inherit"===l.display&&delete L.display,E.srcWebp&&E.srcSetWebp&&O()&&(E.src=E.srcWebp,E.srcSet=E.srcSetWebp),y.default.createElement(p,{className:(r?r:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===l.position?"initial":"relative"}},y.default.createElement(p,{className:(o?o:"")+" gatsby-image-wrapper",style:L,ref:this.handleRef},E.base64&&y.default.createElement(R,{alt:n,title:a,src:E.base64,style:b}),E.tracedSVG&&y.default.createElement(R,{alt:n,title:a,src:E.tracedSVG,style:b}),m&&y.default.createElement(p,{title:a,style:{backgroundColor:m,width:E.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:E.height}}),this.state.isVisible&&y.default.createElement(R,{alt:n,title:a,width:E.width,height:E.height,srcSet:E.srcSet,src:E.src,style:g,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),y.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:M((0,h.default)({alt:n,title:a,width:E.width,height:E.height},E))}})))}return null},t}(y.default.Component);x.defaultProps={fadeIn:!0,alt:"",Tag:"div"},x.propTypes={responsiveResolution:g.default.object,responsiveSizes:g.default.object,resolutions:g.default.object,sizes:g.default.object,fadeIn:g.default.bool,title:g.default.string,alt:g.default.string,className:g.default.oneOfType([g.default.string,g.default.object]),outerWrapperClassName:g.default.oneOfType([g.default.string,g.default.object]),style:g.default.object,imgStyle:g.default.object,position:g.default.string,backgroundColor:g.default.oneOfType([g.default.string,g.default.bool]),onLoad:g.default.func,Tag:g.default.string},t.default=x},203:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=a(4),s=n(l),u=a(69),d=n(u),c=a(38),f=n(c),p=a(7),h=n(p),m=a(223),y=n(m),b=a(204),g=n(b),v=function(e){function t(){return o(this,t),r(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.node,a=e.index,n=t.featuredImage&&s.default.createElement(f.default,{sizes:t.featuredImage.sizes}),o=(0,y.default)("post",{featured:0===a,"small-featured":a<4&&0!==a,other:a>4,"margin-top":5===a}),r=t.category&&Array.prototype.map.call(t.category,function(e){return e.category}).toString();return s.default.createElement("div",{className:o},a>4&&n,a>4&&s.default.createElement("div",{className:"wrap"},a>4&&s.default.createElement("div",{className:"categories"},r),a>4&&s.default.createElement("h3",null,t.title),a>4&&0!==a&&s.default.createElement(d.default,{to:t.slug,className:"read-more"},"READ ARTICLE"),a>4&&s.default.createElement("p",null,t.createdAt)),0===a&&s.default.createElement("div",{className:"post-heading"},s.default.createElement("h1",null,t.title),s.default.createElement(g.default,null)),a<4&&0!==a&&s.default.createElement("div",{className:"secondary-heading"},s.default.createElement("h2",null,s.default.createElement(d.default,{to:t.slug},t.title)),s.default.createElement(g.default,null),s.default.createElement("p",null,"Article about:",r)),s.default.createElement("div",null,a<1&&s.default.createElement("div",{className:"excerpt"},t.content.childMarkdownRemark.excerpt),0===a&&s.default.createElement(d.default,{to:t.slug,className:"read-more"},"READ ARTICLE")))},t}(l.Component);t.default=v,v.propTypes={node:h.default.object,index:h.default.number},e.exports=t.default},204:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=a(4),s=n(l),u=function(e){function t(){return o(this,t),r(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return s.default.createElement("svg",{width:"85",height:"10",viewBox:"0 0 85 10",xmlns:"http://www.w3.org/2000/svg",className:"heading-line"},s.default.createElement("g",{id:"Welcome",fill:"none",fillRule:"evenodd",strokeLinecap:"square"},s.default.createElement("g",{id:"Home-Page",transform:"translate(-175 -341)",stroke:"#FB3053"},s.default.createElement("g",{id:"Group",transform:"translate(175 341)"},s.default.createElement("path",{d:"M0.346153846,8.69230769 L8.6826424,1.28209564",id:"Line-3"}),s.default.createElement("path",{d:"M17.2652738,8.67362413 L8.77950127,0.813452374 L17.2652738,8.67362413 Z",id:"Line-3"}),s.default.createElement("path",{d:"M17.3461538,8.69230769 L25.6826424,1.28209564",id:"Line-3"}),s.default.createElement("path",{d:"M34.1781951,8.67362413 L25.6924226,0.813452374 L34.1781951,8.67362413 Z",id:"Line-3"}),s.default.createElement("path",{d:"M34.3461538,8.69230769 L42.6826424,1.28209564",id:"Line-3"}),s.default.createElement("path",{d:"M51.0911164,8.67362413 L42.6053439,0.813452374 L51.0911164,8.67362413 Z",id:"Line-3"}),s.default.createElement("path",{d:"M51.3461538,8.69230769 L59.6826424,1.28209564",id:"Line-3"}),s.default.createElement("path",{d:"M68.0040377,8.67362413 L59.5182652,0.813452374 L68.0040377,8.67362413 Z",id:"Line-3"}),s.default.createElement("path",{d:"M68.3461538,8.69230769 L76.6826424,1.28209564",id:"Line-3"}),s.default.createElement("path",{d:"M84.916959,8.67362413 L76.4311865,0.813452374 L84.916959,8.67362413 Z",id:"Line-3"})))))},t}(l.Component);t.default=u,e.exports=t.default},213:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var l=a(4),s=n(l),u=a(7),d=n(u),c=a(203),f=n(c);a(411);var p=function(e){function t(){return o(this,t),r(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.data;return s.default.createElement("div",{className:"post-list"},e.allContentfulBlogPost.edges.map(function(e,t){return s.default.createElement(f.default,{key:e.node.id,node:e.node,index:t})}))},t}(l.Component);t.default=p,p.propTypes={data:d.default.object};t.pageQuery="** extracted graphql fragment **"},411:function(e,t){}});
//# sourceMappingURL=component---src-pages-index-js-781f57c8517a96b74d9d.js.map