webpackJsonp([35783957827783],{11:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(){return"undefined"==typeof _&&"undefined"!=typeof window&&window.IntersectionObserver&&(_=new window.IntersectionObserver(function(e){e.forEach(function(e){L.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(_.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),_}t.__esModule=!0;var a=n(9),i=o(a),l=n(14),s=o(l),u=n(13),c=o(u),f=n(29),d=o(f),p=n(28),h=o(p),y=n(2),m=o(y),b=n(3),g=o(b),w=function(e){var t=(0,h.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},E={},v=function(e){var t=w(e),n=t.sizes?t.sizes.src:t.resolutions.src;return!!E[n]||(E[n]=!0,!1)},_=void 0,L=[],j=function(e,t){r().observe(e),L.push([e,t])},O=null,S=function(){if(null!==O)return O;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return O=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},T=function(e){var t=e.opacity,n=void 0===t?"1":t,o=e.src,r=e.srcSet,a=e.sizes,i=void 0===a?"":a,l=e.title,s=void 0===l?"":l,u=e.alt,c=void 0===u?"":u,f=e.width,d=void 0===f?"":f,p=e.height,h=void 0===p?"":p,y=e.transitionDelay,m=void 0===y?"0.5s":y;return'<img width="'+d+'" height="'+h+'" src="'+o+'" srcset="'+r+'" alt="'+c+'" title="'+s+'" sizes="'+i+'" style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+m+";opacity:"+n+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},M=function(e){var t=e.style,n=e.onLoad,o=(0,d.default)(e,["style","onLoad"]);return m.default.createElement("img",(0,h.default)({},o,{onLoad:n,style:(0,h.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};M.propTypes={style:g.default.object,onLoad:g.default.func};var C=function(e){function t(n){(0,i.default)(this,t);var o=(0,s.default)(this,e.call(this,n)),r=!0,a=!0,l=!1,u=v(n);return!u&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,a=!1,l=!0),"undefined"==typeof window&&(r=!1,a=!1),o.state={isVisible:r,imgLoaded:a,IOSupported:l},o.handleRef=o.handleRef.bind(o),o}return(0,c.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&j(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=w(this.props),n=t.title,o=t.alt,r=t.className,a=t.outerWrapperClassName,i=t.style,l=void 0===i?{}:i,s=t.imgStyle,u=void 0===s?{}:s,c=t.sizes,f=t.resolutions,d=t.backgroundColor,p=t.Tag,y=void 0;y="boolean"==typeof d?"lightgray":d;var b=(0,h.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},u),g=(0,h.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},u);if(c){var E=c;return E.srcWebp&&E.srcSetWebp&&S()&&(E.src=E.srcWebp,E.srcSet=E.srcSetWebp),m.default.createElement(p,{className:(a?a:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===l.position?"initial":"relative"}},m.default.createElement(p,{className:(r?r:"")+" gatsby-image-wrapper",style:(0,h.default)({position:"relative",overflow:"hidden"},l),ref:this.handleRef},m.default.createElement(p,{style:{width:"100%",paddingBottom:100/E.aspectRatio+"%"}}),E.base64&&m.default.createElement(M,{alt:o,title:n,src:E.base64,style:b}),E.tracedSVG&&m.default.createElement(M,{alt:o,title:n,src:E.tracedSVG,style:b}),y&&m.default.createElement(p,{title:n,style:{backgroundColor:y,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&m.default.createElement(M,{alt:o,title:n,srcSet:E.srcSet,src:E.src,sizes:E.sizes,style:g,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),m.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:T((0,h.default)({alt:o,title:n},E))}})))}if(f){var v=f,_=(0,h.default)({position:"relative",overflow:"hidden",display:"inline-block",width:v.width,height:v.height},l);return"inherit"===l.display&&delete _.display,v.srcWebp&&v.srcSetWebp&&S()&&(v.src=v.srcWebp,v.srcSet=v.srcSetWebp),m.default.createElement(p,{className:(a?a:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===l.position?"initial":"relative"}},m.default.createElement(p,{className:(r?r:"")+" gatsby-image-wrapper",style:_,ref:this.handleRef},v.base64&&m.default.createElement(M,{alt:o,title:n,src:v.base64,style:b}),v.tracedSVG&&m.default.createElement(M,{alt:o,title:n,src:v.tracedSVG,style:b}),y&&m.default.createElement(p,{title:n,style:{backgroundColor:y,width:v.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:v.height}}),this.state.isVisible&&m.default.createElement(M,{alt:o,title:n,width:v.width,height:v.height,srcSet:v.srcSet,src:v.src,style:g,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),m.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:T((0,h.default)({alt:o,title:n,width:v.width,height:v.height},v))}})))}return null},t}(m.default.Component);C.defaultProps={fadeIn:!0,alt:"",Tag:"div"},C.propTypes={responsiveResolution:g.default.object,responsiveSizes:g.default.object,resolutions:g.default.object,sizes:g.default.object,fadeIn:g.default.bool,title:g.default.string,alt:g.default.string,className:g.default.oneOfType([g.default.string,g.default.object]),outerWrapperClassName:g.default.oneOfType([g.default.string,g.default.object]),style:g.default.object,imgStyle:g.default.object,position:g.default.string,backgroundColor:g.default.oneOfType([g.default.string,g.default.bool]),onLoad:g.default.func,Tag:g.default.string},t.default=C},49:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(2),s=o(l),u=n(12),c=o(u),f=n(11),d=o(f),p=n(3),h=o(p),y=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.post,n=e.defaultImage,o=t.featuredImage?s.default.createElement(d.default,{sizes:t.featuredImage.sizes}):s.default.createElement(d.default,{sizes:n}),r=t.category&&Array.prototype.map.call(t.category,function(e){return e.category}).toString();return s.default.createElement("div",{className:"post other"},o,s.default.createElement("div",{className:"wrap"},r&&s.default.createElement("div",{className:"categories"},r),s.default.createElement("h3",null,t.title),s.default.createElement(c.default,{to:t.slug,className:"read-more"},"READ ARTICLE"),s.default.createElement("p",null,t.createdAt)))},t}(l.Component);t.default=y,y.propTypes={post:h.default.object,defaultImage:h.default.object},e.exports=t.default},132:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(2),s=o(l),u=n(12),c=o(u),f=n(3),d=o(f),p=n(87),h=o(p),y=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.post,t=e.category&&Array.prototype.map.call(e.category,function(e){return e.category}).toString();return s.default.createElement("div",{className:"post small-featured"},s.default.createElement("div",{className:"secondary-heading"},s.default.createElement("h2",null,s.default.createElement(c.default,{to:e.slug},e.title)),s.default.createElement(h.default,null),s.default.createElement("p",null,"Article about:",t)))},t}(l.Component);t.default=y,y.propTypes={post:d.default.object},e.exports=t.default},133:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(2),s=o(l),u=n(12),c=o(u),f=n(3),d=o(f),p=n(87),h=o(p),y=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.post;return s.default.createElement("div",{className:"post featured"},s.default.createElement("div",{className:"post-heading"},s.default.createElement("h1",null,e.title),s.default.createElement(h.default,null)),s.default.createElement("div",null,s.default.createElement("div",{className:"excerpt"},e.content.childMarkdownRemark.excerpt),s.default.createElement(c.default,{to:e.slug,className:"read-more"},"READ ARTICLE")))},t}(l.Component);t.default=y,y.propTypes={post:d.default.object},e.exports=t.default},134:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(2),s=o(l),u=n(3),c=o(u),f=n(133),d=o(f),p=n(132),h=o(p),y=n(49),m=o(y),b=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props,t=e.node,n=e.index,o=e.defaultImage,r=0===n&&s.default.createElement(d.default,{post:t}),a=n<4&&0!==n&&s.default.createElement(h.default,{post:t}),i=n>4&&s.default.createElement(m.default,{post:t,defaultImage:o});return s.default.createElement(l.Fragment,null,r,a,i)},t}(l.Component);t.default=b,b.propTypes={node:c.default.object,index:c.default.number,defaultImage:c.default.object},e.exports=t.default},87:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var l=n(2),s=o(l),u=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return s.default.createElement("svg",{width:"85",height:"10",viewBox:"0 0 85 10",xmlns:"http://www.w3.org/2000/svg",className:"heading-line"},s.default.createElement("g",{id:"Welcome",fill:"none",fillRule:"evenodd",strokeLinecap:"square"},s.default.createElement("g",{id:"Home-Page",transform:"translate(-175 -341)",stroke:"#FB3053"},s.default.createElement("g",{id:"Group",transform:"translate(175 341)"},s.default.createElement("path",{d:"M0.346153846,8.69230769 L8.6826424,1.28209564",id:"Line-3"}),s.default.createElement("path",{d:"M17.2652738,8.67362413 L8.77950127,0.813452374 L17.2652738,8.67362413 Z",id:"Line-3"}),s.default.createElement("path",{d:"M17.3461538,8.69230769 L25.6826424,1.28209564",id:"Line-3"}),s.default.createElement("path",{d:"M34.1781951,8.67362413 L25.6924226,0.813452374 L34.1781951,8.67362413 Z",id:"Line-3"}),s.default.createElement("path",{d:"M34.3461538,8.69230769 L42.6826424,1.28209564",id:"Line-3"}),s.default.createElement("path",{d:"M51.0911164,8.67362413 L42.6053439,0.813452374 L51.0911164,8.67362413 Z",id:"Line-3"}),s.default.createElement("path",{d:"M51.3461538,8.69230769 L59.6826424,1.28209564",id:"Line-3"}),s.default.createElement("path",{d:"M68.0040377,8.67362413 L59.5182652,0.813452374 L68.0040377,8.67362413 Z",id:"Line-3"}),s.default.createElement("path",{d:"M68.3461538,8.69230769 L76.6826424,1.28209564",id:"Line-3"}),s.default.createElement("path",{d:"M84.916959,8.67362413 L76.4311865,0.813452374 L84.916959,8.67362413 Z",id:"Line-3"})))))},t}(l.Component);t.default=u,e.exports=t.default},145:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var l=n(2),s=o(l),u=n(3),c=o(u),f=n(134),d=o(f);n(80);var p=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.data;return s.default.createElement("div",{className:"post-list"},e.allContentfulBlogPost.edges.map(function(t,n){return s.default.createElement(d.default,{key:t.node.id,node:t.node,defaultImage:e.imageDefault.sizes,index:n})}))},t}(l.Component);t.default=p,p.propTypes={data:c.default.object};t.pageQuery="** extracted graphql fragment **"},80:function(e,t){}});
//# sourceMappingURL=component---src-pages-index-js-4527fc55ce48c7132de8.js.map