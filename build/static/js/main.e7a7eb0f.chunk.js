(this["webpackJsonpanswers-product-search"]=this["webpackJsonpanswers-product-search"]||[]).push([[0],{100:function(e,t,r){"use strict";r.r(t);var c=r(1),s=r(2),n=r.n(s),a=r(7),i=r.n(a),o=r(18),l=r(4),d=(r(57),r(3)),u=r(40),j=r(13),x=r(12),m=r(41),b=r.n(m),h=r(9),f=r.n(h),p=function(e){var t=e.children,r=e.name,n=e.count,a=Object(s.useState)(!0),i=Object(l.a)(a,2),o=i[0],u=i[1];return Object(c.jsxs)("div",{className:" py-2 mb-3",children:[Object(c.jsxs)("div",{className:"flex justify-between items-center cursor-pointer",onClick:function(){return u((function(e){return!e}))},children:[Object(c.jsxs)("div",{className:"text-black font-medium text-sm flex itesm-center",children:[Object(c.jsx)("div",{children:r}),n>0&&Object(c.jsxs)("div",{className:"ml-1",children:["(",n,")"]})]}),Object(c.jsx)("div",{className:f()("text-gray-500 transform ease-in-out transition",{"rotate-90":o}),children:Object(c.jsx)(d.c,{})})]}),o&&Object(c.jsx)("div",{className:"mt-2",children:t})]})},v=function(e){var t=e.facet,r=e.maxOptions,s=void 0===r?10:r,n=e.onSelectFacet,a=t.options.filter((function(e,t){return t<s})).sort((function(e,t){return e.displayName.localeCompare(t.displayName)}));return Object(c.jsx)(p,{name:t.displayName,count:t.options.filter((function(e){return e.selected})).length,children:Object(c.jsx)(j.a,{className:"grid grid-cols-3",children:a.map((function(e){return Object(c.jsxs)("div",{className:"font-light flex flex-col items-center mb-3 group cursor-pointer hover:opacity-75",onClick:function(){return n(e)},children:[Object(c.jsxs)("div",{className:"h-6 w-6 rounded-full mb-1 group-hover:opactiy-75 flex items-center justify-center",style:{backgroundColor:b()(e.displayName)},children:[e.selected&&Object(c.jsx)(x.a,{className:"text-white"}),!e.selected&&Object(c.jsx)("div",{className:"text-white text-xs opacity-60",children:e.count})]}),Object(c.jsx)("div",{className:"text-xs text-light text-gray-600",children:e.displayName})]},e.displayName)}))})})},O=function(e){var t=e.facet,r=e.maxOptions,n=void 0===r?10:r,a=e.onSelectFacet,i=Object(s.useState)(""),o=Object(l.a)(i,2),d=o[0],u=(o[1],t.options.filter((function(e,t){var r=t<n;return(!(d.length>0)||e.displayName.toLocaleLowerCase().includes(d.toLocaleLowerCase()))&&r})).sort((function(e,t){return e.selected&&t.selected?t.count-e.count:e.selected?-1:t.selected?1:t.count-e.count})));return Object(c.jsx)(p,{name:t.displayName,count:t.options.filter((function(e){return e.selected})).length,children:Object(c.jsx)(j.a,{children:u.map((function(e){return Object(c.jsxs)("div",{className:"font-light text-gray-500 flex items-center mb-1 group cursor-pointer",onClick:function(){return a(e)},children:[Object(c.jsx)("div",{className:f()("w-4 h-4 border mr-2 rounded-sm flex items-center justify-center",{"bg-gray-600 border-gray-600":e.selected,"border group-hover:bg-gray-200 ":!e.selected}),children:e.selected&&Object(c.jsx)(x.a,{className:"text-white"})}),e.displayName," ",Object(c.jsx)("span",{className:"text-xs bg-gray-100 px-1 rounded-full text-gray-600 ml-2",children:e.count})]},e.displayName)}))})})},g=r(8),y=r.n(g),N=r(17),w=r(42),S=Object(w.provideCore)({apiKey:"7bce922a5847aff36dc33345921ba700",experienceKey:"dtc_demo",experienceVersion:"PRODUCTION",locale:"en"}),C="products",E=r(14),T=r(5),k=function(e,t){switch(t.type){case"SET_LOADING":return Object(T.a)(Object(T.a)({},e),{},{loading:t.loading});case"SET_QUERY":var r=t.query;return Object(T.a)(Object(T.a)({},e),{},{query:r});case"SET_VERTICAL_RESPONSE":var c=t.response;return Object(T.a)(Object(T.a)({},e),{},{loading:!1,verticalresults:c.verticalResults,entities:c.verticalResults.results.map((function(e){return e.rawData})),facets:c.facets});case"SET_QUERY_SUGGESTIONS":var s=t.querySuggestions;return Object(T.a)(Object(T.a)({},e),{},{querySuggestions:s});case"APPEND_ENTITIES":return Object(T.a)(Object(T.a)({},e),{},{entities:[].concat(Object(E.a)(e.entities),Object(E.a)(t.entities))});case"UPDATE_FACETS":var n=t.facets;return Object(T.a)(Object(T.a)({},e),{},{facets:n});default:return e}},_={loading:!1,query:"",verticalresults:void 0,entities:[],facets:[],querySuggestions:[]},L=Object(s.createContext)({state:_,dispatch:function(){return null}}),A=function(e){var t=e.children,r=Object(s.useReducer)(k,_),n=Object(l.a)(r,2),a=n[0],i=n[1];return Object(c.jsx)(L.Provider,{value:{state:a,dispatch:i},children:t})},I=function(e){return e.map((function(e){return Object(E.a)(e.options.filter((function(e){return e.selected})).map((function(e){return e.filter})))})).flat()},P=function(e,t,r){var c=Object(E.a)(e);return c.forEach((function(e){e.fieldId===t&&e.options.forEach((function(e){e.displayName===r&&(e.selected=!e.selected)}))})),c},q=function(){var e=Object(s.useContext)(L),t=e.state,r=e.dispatch,c=t.query,n=t.facets,a=t.entities;return{state:t,actions:{runSearch:function(){var e=Object(N.a)(y.a.mark((function e(){var t,s,n=arguments;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:c,console.log("Getting Results for ".concat(t)),r({type:"SET_LOADING",loading:!0}),r({type:"SET_QUERY",query:t}),e.next=6,S.verticalSearch({query:t,context:{},verticalKey:C,retrieveFacets:!0});case 6:s=e.sent,console.log(s.verticalResults.results),r({type:"SET_VERTICAL_RESPONSE",response:s});case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),updateAutocomplete:function(){var e=Object(N.a)(y.a.mark((function e(){var t,s,n=arguments;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:c,e.next=3,S.verticalAutoComplete({input:t,verticalKey:C});case 3:s=e.sent,r({type:"SET_QUERY_SUGGESTIONS",querySuggestions:s.results});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),toggleFacet:function(){var e=Object(N.a)(y.a.mark((function e(s,n){var a,i;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=P(t.facets,s,n),r({type:"UPDATE_FACETS",facets:a}),r({type:"SET_LOADING",loading:!0}),e.next=5,S.verticalSearch({query:c,context:{},verticalKey:C,retrieveFacets:!0,facetFilters:I(a)});case 5:i=e.sent,r({type:"SET_VERTICAL_RESPONSE",response:i});case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),loadMore:function(){var e=Object(N.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Loading More"),e.next=3,S.verticalSearch({query:c,context:{},verticalKey:C,retrieveFacets:!0,facetFilters:I(n),offset:a.length});case 3:t=e.sent,r({type:"APPEND_ENTITIES",entities:t.verticalResults.results.map((function(e){return e.rawData}))});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}}},D=function(e){Object(u.a)(e);var t=q(),r=t.state.facets,s=t.actions.toggleFacet;return Object(c.jsx)("div",{className:"flex flex-col px-4 pb-4 mt-4",children:r&&r.map((function(e){return Object(c.jsxs)("div",{children:["c_color"!==e.fieldId&&Object(c.jsx)(O,{facet:e,onSelectFacet:function(t){return s(e.fieldId,t.displayName)}}),"c_color"===e.fieldId&&Object(c.jsx)(v,{facet:e,onSelectFacet:function(t){return s(e.fieldId,t.displayName)}})]},e.fieldId)}))})},F=function(e){var t=e.children;return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"fixed left-0 right-0 top-0 bottom-0 bg-gray-400 opacity-80 z-40"}),Object(c.jsx)("div",{className:"fixed left-0 right-0 top-0 bottom-0 z-50 flex items-center justify-center",children:Object(c.jsx)("div",{className:"w-1/2",children:t})})]})},R=function(e){var t=e.placeholder,r=void 0===t?"Search ...":t,n=Object(s.useRef)(null),a=q(),i=a.state,o=a.actions,u=i.loading,j=i.querySuggestions,m=o.updateAutocomplete,b=o.runSearch,h=Object(s.useState)(""),p=Object(l.a)(h,2),v=p[0],O=p[1],g=Object(s.useState)(!1),y=Object(l.a)(g,2),N=y[0],w=y[1],S=Object(s.useState)(-1),C=Object(l.a)(S,2),E=C[0],T=C[1],k=Object(s.useState)(!1),_=Object(l.a)(k,2),L=_[0],A=_[1],I=N&&j.length>0&&!L;return Object(c.jsxs)("div",{className:"relative mx-2 mt-2",children:[Object(c.jsxs)("form",{className:"py-2 px-4 mb-2 flex items-center focus-within:shodow-lg focus-within:border group text-gray-700 bg-gray-100 rounded-full",onSubmit:function(e){if(e.preventDefault(),E>-1){var t=j[E].value;O(t),b(t)}else b(v);A(!0)},children:[Object(c.jsx)(x.b,{className:"mr-2 text-gray-600 text-xl"}),Object(c.jsx)("input",{onFocus:function(){return w(!0)},onBlur:function(){return w(!1)},ref:n,value:v,placeholder:r,onChange:function(e){O(e.target.value),m(e.target.value),T(-1),A(!1)},className:"w-full focus:outline-none font-light bg-transparent",onKeyDown:function(e){"ArrowDown"===e.key?(e.preventDefault(),T((function(e){return Math.min(e+1,j.length-1)}))):"ArrowUp"===e.key&&(e.preventDefault(),T((function(e){return Math.max(e-1,-1)})))}}),u&&Object(c.jsx)(d.f,{className:"animate-spin text-gray-500"}),!u&&v.length>0&&Object(c.jsx)(d.h,{className:"text-gray-300 cursor-pointer group-hover:opacity-100 opacity-0",onClick:function(){O(""),b(""),m("")}})]}),I&&Object(c.jsx)("div",{className:"absolute top-0 mt-10 left-0 right-0 bg-white text-gray-700 font-light border-b border-l border-r shadow-lg z-50",children:j.map((function(e,t){return Object(c.jsxs)("div",{onMouseDown:function(){O(e.value),b(e.value)},className:f()("py-1 px-4 hover:bg-gray-100 cursor-pointer flex items-center",{"bg-gray-100":E===t}),children:[Object(c.jsx)(x.b,{className:"mr-2 text-gray-600"}),e.value]})}))})]})},M=function(e){var t=e.shoppingCart,r=Object(s.useState)(!1),n=Object(l.a)(r,2),a=n[0],i=n[1],o=q(),u=o.state,j=o.actions;u.loading,u.querySuggestions,j.updateAutocomplete,j.runSearch;return Object(c.jsxs)("div",{className:"border-b flex justify-between items-stretch ",children:[Object(c.jsx)("div",{className:"text-xl font-light px-4 text-green-700 flex items-center",children:"Seaglass"}),Object(c.jsxs)("div",{className:" items-center text-gray-700 px-4 hidden md:flex",children:[Object(c.jsx)("div",{className:"px-4 py-3 hover:underline cursor-pointer",children:"Products"}),Object(c.jsx)("div",{className:"px-4 py-3 hover:underline cursor-pointer",children:"Locations"}),Object(c.jsx)("div",{className:"px-4 py-3 hover:underline cursor-pointer",children:"Support"}),Object(c.jsx)("div",{className:"px-4 py-3 hover:underline cursor-pointer",children:"About Us"})]}),Object(c.jsxs)("div",{className:"flex",children:[Object(c.jsx)(R,{placeholder:"Search for glasses..."}),Object(c.jsxs)("div",{className:"border-l p-4 text-gray-700 flex items-center",onMouseEnter:function(){return i(!0)},onMouseLeave:function(){return i(!1)},children:[Object(c.jsx)(d.e,{}),t.length>0&&Object(c.jsx)("div",{className:"absolute right-0 top-0 m-2 p-1 h-4 w-4 flex items-center rounded-full bg-gray-700 text-gray-100 text-xs",children:t.length}),a&&Object(c.jsx)("div",{className:"flex flex-col absolute top-16 right-0 mr-2 rounded bg-white border shadow-lg z-50",children:t.map((function(e){return Object(c.jsxs)("div",{className:"border-b px-4 py-2 w-64 flex items-center",children:[Object(c.jsx)("div",{className:"w-24 mr-4",children:Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:e.product.photoGallery[2].image.sourceUrl,width:"100%"})})}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"font-medium",children:e.product.name}),Object(c.jsxs)("div",{className:"text-gray-500 text-sm",children:[e.quantity," x $",e.product.c_price]})]})]})}))})]})]})]})},G=function(e){var t=e.product,r=e.onClose,n=e.addToCart,a=Object(s.useState)(t.photoGallery[2].image.url),i=Object(l.a)(a,2),o=i[0],u=i[1],j="px-4 py-3  bg-gray-100 text-gray-500 flex items-center justify-center cursor-pointer hover:bg-gray-200";return Object(c.jsxs)("div",{className:"bg-white rounded shadow-xl relative overflow-hidden",children:[Object(c.jsx)("div",{className:"text-gray-500 p-2 hover:bg-gray-100 absolute top-0 right-0 m-2 rounded cursor-pointer z-50",onClick:r,children:Object(c.jsx)(d.g,{})}),Object(c.jsxs)("div",{className:"p-4",children:[Object(c.jsx)("div",{className:" aspect-w-4 aspect-h-2 z-10 mb-2",children:Object(c.jsx)("div",{className:"flex items-center  p-4 overflow-hidden",children:Object(c.jsx)("img",{src:o,alt:"",width:"100%"})})}),Object(c.jsx)("div",{className:"grid grid-cols-6",children:t.photoGallery.map((function(e,t){return Object(c.jsx)("div",{className:"px-2 flex items-center hover:opactiy-70",onMouseEnter:function(){return u(e.image.url)},children:Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:e.image.url})})},t)}))}),Object(c.jsx)("div",{className:"font-medium text-lg text-black mt-4",children:t.name}),Object(c.jsxs)("div",{className:"text-gray-500 font-light text-sm",children:[t.c_material,", ",t.c_shape]}),Object(c.jsx)("div",{className:"text-gray-500 font-light text-sm",children:"2 colors"}),Object(c.jsxs)("div",{className:" font-medium mt-2 text-sm",children:["$",t.c_price]})]}),Object(c.jsxs)("div",{className:"grid grid-cols-2",children:[Object(c.jsxs)("div",{onClick:n,className:f()(j," border-t border-r border-gray-200"),children:[Object(c.jsx)(d.a,{className:"mr-2"}),"Add To Cart"]}),Object(c.jsxs)("div",{className:f()(j,"border-t border-gray-200"),children:[Object(c.jsx)(d.d,{className:"mr-2"}),"View Details"]})]})]})},U=r(43),z=function(e){var t=e.product,r=e.showQuickLook,n=e.addToCart,a=Object(s.useState)(!1),i=Object(l.a)(a,2),o=(i[0],i[1]);return Object(c.jsxs)("div",{className:"hover:shadow-xl hover:bg-white hover:z-30 hover:z-100 rounded cursor-pointer transform hover:scale-105 transition ease-in-out group overflow-hidden relative",onMouseEnter:function(){return o(!0)},onMouseLeave:function(){return o(!1)},children:[Object(c.jsxs)("div",{className:"p-4",onClick:r,children:[Object(c.jsx)("div",{className:" aspect-w-4 aspect-h-2",children:t.photoGallery.length>0&&Object(c.jsx)("div",{className:"flex items-center  p-4",children:Object(c.jsx)("img",{src:t.photoGallery[2].image.url,alt:"",width:"100%"})})}),Object(c.jsx)("div",{className:"font-medium text-black mt-4",children:t.name}),Object(c.jsxs)("div",{className:"text-gray-500 font-light text-sm",children:[t.c_material,", ",t.c_shape]}),Object(c.jsx)("div",{className:"text-gray-500 font-light text-sm",children:"2 colors"}),Object(c.jsxs)("div",{className:" font-medium mt-2 text-sm",children:["$",t.c_price]})]}),Object(c.jsxs)("div",{className:"flex opacity-0 group-hover:opacity-100 text-gray-500 uppercase text-xs transition ease-in-out  justify-center",children:[Object(c.jsxs)("div",{className:"flex justify-center items-center bg-gray-100 hover:bg-gray-200 px-2 py-2 cursor-pointer flex-grow",onClick:r,children:[Object(c.jsx)(d.d,{className:"mr-2"}),"Look"]}),Object(c.jsxs)("div",{className:"flex justify-center items-center bg-gray-100 hover:bg-gray-200 px-2 py-2 cursor-pointer flex-grow",onClick:n,children:[Object(c.jsx)(d.a,{className:"mr-2"}),"Cart"]})]})]})},Q=function(e){var t=e.onQuickLook,r=e.onAddToCart,s=q(),n=s.state,a=n.verticalresults,i=n.entities,o=s.actions.loadMore;return Object(c.jsx)(U.a,{className:"overflow-x-auto",style:{overflow:"visible"},hasMore:a.resultsCount>i.length,next:o,dataLength:i.length,endMessage:Object(c.jsx)("div",{className:"mt-12 mb-4 text-center text-gray-500 font-light text-sm",children:"that's all..."}),loader:Object(c.jsx)("div",{className:"h-12 flex items-center justify-center",children:Object(c.jsx)(d.f,{className:"animate-spin text-gray-500"})}),children:Object(c.jsx)(j.a,{className:"grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6",children:i.map((function(e,s){return Object(c.jsx)("div",{className:"overflow-visible z-40",children:Object(c.jsx)(z,{product:e,showQuickLook:function(){return t(e)},addToCart:function(){return r(e)}})},e.id)}))})})},K=function(){var e=q().state,t=e.verticalresults,r=e.entities;return Object(c.jsxs)("div",{className:"flex justify-between items-center mb-2",children:[Object(c.jsxs)("div",{className:"text-sm text-gray-500",children:["Showing ",null===t||void 0===t?void 0:t.resultsCount," of ",r.length," glasses"]}),Object(c.jsxs)("div",{className:"text-gray-500 text-sm flex items-center hover:underline cursor-pointer",children:["Sort By ",Object(c.jsx)(d.b,{className:"ml-2"})]})]})},V=function(e){var t=e.addProductToCart,r=e.setQuickLookProduct,s=q().state,n=s.verticalresults;s.entities;return n?Object(c.jsxs)("div",{className:"p-4 flex-grow",children:[Object(c.jsx)(K,{}),Object(c.jsx)(Q,{onAddToCart:t,onQuickLook:function(e){return r(e)}})]}):null};var B=function(){var e,t=Object(s.useState)(null),r=Object(l.a)(t,2),n=r[0],a=r[1],i=function(){var e=Object(s.useState)([]),t=Object(l.a)(e,2),r=t[0],n=t[1],a=Object(o.useToasts)().addToast;return{shoppingCart:r,addProductToCart:function(e){n((function(t){var r=!1,c=t.map((function(t){return t.product.id===e.id?(r=!0,{product:e,quantity:t.quantity+1}):t}));return r||c.push({quantity:1,product:e}),c})),a(Object(c.jsxs)("div",{className:"py-2 px-4 flex items-center font-light bg-gray-600 text-white text-sm  shadow-sm z-50 rounded-sm mb-2 mr-4 mt-4",children:[Object(c.jsx)(d.a,{}),Object(c.jsx)("div",{className:"ml-2",children:"Added"}),Object(c.jsx)("span",{className:"font-medium ml-1",children:e.name}),Object(c.jsx)("div",{className:"ml-1",children:"to cart"})]}),{appearance:"success",autoDismiss:!0})}}}(),u=i.shoppingCart,j=i.addProductToCart,x=q(),m=x.state,b=x.actions.runSearch;return Object(s.useEffect)((function(){b()}),[]),Object(c.jsxs)("div",{className:"mb-12 relative",children:[Object(c.jsx)(M,{shoppingCart:u}),Object(c.jsxs)("div",{className:"flex items-start",children:[Object(c.jsxs)("div",{className:"w-64 xl:w-72 sticky top-0 max-h-screen overflow-y-auto pb-12 hidden md:block",children:[m.query.length>0&&Object(c.jsxs)("div",{className:"px-4 mt-5 flex items-center",children:[Object(c.jsxs)("div",{className:"font-medium",children:[m.query," "]}),!m.loading&&Object(c.jsxs)("div",{className:"ml-1",children:["(",null===(e=m.verticalresults)||void 0===e?void 0:e.resultsCount.toLocaleString(),")"]}),m.loading&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"flex-grow"}),Object(c.jsx)("div",{className:"ml-1",children:Object(c.jsx)(d.f,{className:"animate-spin text-gray-500"})})]})]}),Object(c.jsx)(D,{})]}),Object(c.jsx)(V,{addProductToCart:j,setQuickLookProduct:a}),n&&Object(c.jsx)(F,{children:Object(c.jsx)(G,{addToCart:function(){j(n),a(null)},product:n,onClose:function(){return a(null)}})})]})]})},Y=(r(99),function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,101)).then((function(t){var r=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,a=t.getTTFB;r(e),c(e),s(e),n(e),a(e)}))});i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(o.ToastProvider,{components:{Toast:function(e){var t=e.children;return Object(c.jsx)("div",{className:"",children:t})}},children:Object(c.jsx)(A,{children:Object(c.jsx)(B,{})})})}),document.getElementById("root")),Y()},99:function(e,t,r){}},[[100,1,2]]]);
//# sourceMappingURL=main.e7a7eb0f.chunk.js.map