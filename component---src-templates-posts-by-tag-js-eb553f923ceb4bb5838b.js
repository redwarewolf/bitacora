(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{152:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return m});var r=a(7),i=a.n(r),n=a(0),s=a.n(n),o=a(165),l=a(161),c=a(162),d=a(164),u=a(158),f=a(174),p=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.data.allMarkdownRemark.edges,a=this.props.pageContext.tag;return s.a.createElement(l.a,{location:this.props.location,title:e},s.a.createElement(c.a,{title:a,description:"posts para el tag: "+a}),s.a.createElement("h1",{style:{display:"flex",alignItems:"center"}},"Posts sobre",s.a.createElement(d.a,{style:{height:"25px",marginLeft:"15px",marginTop:"6px",fontWeight:"500"},tag:a})),t.map(function(e,t){var a=e.node;return s.a.createElement(f.a,{key:t,node:a})}),s.a.createElement("hr",{style:{marginBottom:Object(u.a)(1)}}),s.a.createElement(o.a,{style:{marginBottom:"0px"}}))},t}(s.a.Component);t.default=p;var m="624156057"},157:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(159);var c=i.a.createContext({}),d=function(e){return i.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},158:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return c});a(148);var r=a(171),i=a.n(r),n=a(172),s=a.n(n);s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete s.a.googleFonts;var o=new i.a(s.a);var l=o.rhythm,c=o.scale},159:function(e,t,a){var r;e.exports=(r=a(160))&&r.default||r},160:function(e,t,a){"use strict";a.r(t);a(34);var r=a(0),i=a.n(r),n=a(4),s=a.n(n),o=a(56),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},161:function(e,t,a){"use strict";a(34);var r=a(0),i=a.n(r),n=a(157),s=a(158);t.a=function(e){var t,a=e.location,r=e.title,o=e.children;return t="/bitacora/"===a.pathname?i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",{style:Object.assign({},Object(s.b)(1.2),{marginBottom:Object(s.a)(.5),marginTop:0})},i.a.createElement(n.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),i.a.createElement("h5",{style:Object.assign({},Object(s.b)(.3),{fontFamily:"Montserrat, sans-serif",display:"inline-flex",marginTop:0,fontWeight:600})},"pdep-lunes")):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},i.a.createElement(n.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(s.a)(24),padding:Object(s.a)(1.5)+" "+Object(s.a)(.75)}},i.a.createElement("header",null,t),i.a.createElement("main",null,o))}},162:function(e,t,a){"use strict";var r=a(163),i=a(0),n=a.n(i),s=a(4),o=a.n(s),l=a(173),c=a.n(l);function d(e){var t=e.description,a=e.lang,i=e.meta,s=e.keywords,o=e.title,l=r.data.site,d=t||l.siteMetadata.description;return n.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})}d.defaultProps={lang:"es",meta:[],keywords:[]},d.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=d},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Bitácora",description:"Bitácora con resumenes clase a clase",author:"pdep"}}}}},164:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(157);a(149);t.a=function(e){var t=e.tag,a=e.style;return i.a.createElement(n.a,{to:"/tags/"+t,className:"tag tag-"+t,style:a},t)}},165:function(e,t,a){"use strict";a(166),a(34);var r=a(168),i=a(0),n=a.n(i),s=a(157),o=a(169),l=a.n(o),c=a(158);var d="1862278995";t.a=function(e){var t=e.style;return n.a.createElement(s.b,{query:d,render:function(e){var a=e.site.siteMetadata,r=a.author,i=a.social;return n.a.createElement("div",{style:Object.assign({display:"flex",marginBottom:Object(c.a)(2.5)},t)},n.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:r,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,n.a.createElement("a",{href:"https://github.com/"+i.github,target:"_blank",rel:"noopener noreferrer"},"Podes ver nuestro github acá."),n.a.createElement("br",null),n.a.createElement("p",null,"Y saber mas sobre nosotros"," ",n.a.createElement("a",{href:"http://www.pdep.com.ar/Cursos/cursadas-anteriores/2019/2019-man-lunes",target:"_blank",rel:"noopener noreferrer"},"acá"))))},data:r})}},166:function(e,t,a){"use strict";a(167)("fixed",function(e){return function(){return e(this,"tt","","")}})},167:function(e,t,a){var r=a(11),i=a(18),n=a(19),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},168:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACjklEQVQ4y31UXU8TQRTdv2iMgFQqIigIKMYHE1980fiVGJ/0N/hiomBETQQ08miiMXF3Z7rd1rSz0935WqCIUeO5u1uFCk5umunMOXPvnHtmPWusza375ih2nXX2PwOAEmm3LIgemDrWcl3KDSnfSSPN4XxnTWZ6mz1CrknFFfgejsF/f8wPakE4HSqm3Jazmg6uBiaaqtNfNVtg/rjvj/jimXB7riBvyOBUEJ4O2SxTkbJ9yvM3fznfsbqr+RIP62EwHoiVf8nnWfox1ULrlja9qn6TGt3WYGZ+xi8eSkbNZ0IEX+A4HiUkrxLXd27HyU3JLjB+ifNFXmKCk/vJb4vMU7SBg1FCMBqIZVGR1yXQWKQtAKaKzM8H5GQt8Y/7QBBoMgzPFtsvRf4rz3/mULg6ejIsMf4xv/u0S2QorhoK6okXovuky+YYZaiH0fWo/aiNaN5oUlrETNh53BGrAszsS0atIk1gkm1qPZrML/NggvLgF/kpyrSQc45ByHwvBxgUjAEZ1/vuoDC08U/4xKlXEpIEqHaUjiDyjxzggw5bI3slr5PW/VZ8K47vxZC3FI/P8/huHN+mRdQMmHxzlMMaCn6Ah9sP25SwFsR3YqzYbTIJWxw4bHmoz3UySekwLB4g9wuHCU3lTOzv866T7yU7x/gcbyw10k8pMhhhWg9adPNa0LzZ1B2NgMOiqxGf5WyaJasJEnj0XHoG1apYZZ+z6FrE5slPbIaVHQK0tFfjSiP9kKq2woVNQub1KutD+n5VGF1hkixRqV3OJ4pLNZXdLcDuT6v2Pzq0aoTEowuPFVHcHBO0SoWKmjx4sN6B554adAtKwrrDsSLQJ2hR2qMc3vAHY8eRYY6IoY/MbwnN6GSu1YyMAAAAAElFTkSuQmCC",width:50,height:50,src:"/bitacora/static/5e22dec9c19c9d9469d85c4fa9e0b822/58398/profile-pic.png",srcSet:"/bitacora/static/5e22dec9c19c9d9469d85c4fa9e0b822/58398/profile-pic.png 1x,\n/bitacora/static/5e22dec9c19c9d9469d85c4fa9e0b822/fd23f/profile-pic.png 1.5x,\n/bitacora/static/5e22dec9c19c9d9469d85c4fa9e0b822/fc368/profile-pic.png 2x"}}},site:{siteMetadata:{author:"pdep",social:{github:"pdep-lunes"}}}}}},169:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),s=r(a(35)),o=r(a(76)),l=r(a(55)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m=[];var g=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){m.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),m.push([e,t])},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+r+"<img "+o+l+a+i+t+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,d=e.onError,u=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},u,{onLoad:s,onError:d,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});b.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:i,fadeIn:n,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&g(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,g=e.fixed,y=e.backgroundColor,v=e.Tag,S=e.itemProp,E="boolean"==typeof y?"lightgray":y,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),x=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),L={title:t,alt:this.state.isVisible?"":a,style:w,className:p};if(m){var A=m;return c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(A.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/A.aspectRatio+"%"}}),E&&c.default.createElement(v,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),A.base64&&c.default.createElement(b,(0,l.default)({src:A.base64},L)),A.tracedSVG&&c.default.createElement(b,(0,l.default)({src:A.tracedSVG},L)),this.state.isVisible&&c.default.createElement("picture",null,A.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:A.srcSetWebp,sizes:A.sizes}),c.default.createElement(b,{alt:a,title:t,sizes:A.sizes,src:A.src,srcSet:A.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t},A))}}))}if(g){var I=g,R=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:I.width,height:I.height},n);return"inherit"===n.display&&delete R.display,c.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(I.srcSet)},E&&c.default.createElement(v,{title:t,style:{backgroundColor:E,width:I.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:I.height}}),I.base64&&c.default.createElement(b,(0,l.default)({src:I.base64},L)),I.tracedSVG&&c.default.createElement(b,(0,l.default)({src:I.tracedSVG},L)),this.state.isVisible&&c.default.createElement("picture",null,I.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),c.default.createElement(b,{alt:a,title:t,width:I.width,height:I.height,sizes:I.sizes,src:I.src,srcSet:I.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t,width:I.width,height:I.height},I))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),S=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:v,sizes:S,fixed:v,fluid:S,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var E=y;t.default=E},170:function(e,t,a){"use strict";a.d(t,"a",function(){return i});a(75);var r=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],i=function(e){var t=e.split("-"),a=t[0],i=t[1],n=t[2];return a+" de "+r[i-1]+", "+n}},174:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(157),s=a(158),o=a(170),l=a(164);t.a=function(e){var t=e.node,a=t.excerpt,r=t.fields.slug,c=t.frontmatter,d=c.tags,u=c.date,f=c.description,p=t.frontmatter.title||t.fields.slug;return i.a.createElement("div",{key:r},i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",fontSize:"1.75rem",marginBottom:Object(s.a)(.25)}},i.a.createElement(n.a,{style:{boxShadow:"none",color:"#2b2b2b"},to:r},p)),d?i.a.createElement("div",{className:"tags-container"},d.map(function(e,t){return i.a.createElement(l.a,{tag:e,key:t})})):null,i.a.createElement("small",{style:{color:"#929292"}},Object(o.a)(u)),i.a.createElement("p",{style:{color:"#929292"},dangerouslySetInnerHTML:{__html:f||a}}))}}}]);
//# sourceMappingURL=component---src-templates-posts-by-tag-js-eb553f923ceb4bb5838b.js.map