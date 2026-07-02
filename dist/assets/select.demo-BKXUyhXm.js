import{o as e,t}from"./jsx-runtime-9YgKe2Eq.js";import{t as n}from"./react-JjZAc9W2.js";import{t as r}from"./ChevronDown-CAS-0PZj.js";import{t as i}from"./SearchLg-DphicK6c.js";import{t as a}from"./User01-Dzq7VIFF.js";import{t as o}from"./cx-CmQqEIOd.js";import{r as s,t as c}from"./RSPContexts-q0oaBbDK.js";import{C as l,D as u,E as d,G as f,N as p,P as m,S as h,T as g,X as _,Y as v,Z as y,b,ct as x,et as S,f as C,it as ee,ot as w,q as T,tt as E,u as D,ut as O,x as k}from"./useFocusRing-4APusEXv.js";import{a as A,r as j}from"./SelectionIndicator-CfShDQMg.js";import{t as te}from"./useLabels-BrVcMoLu.js";import{t as M}from"./ListBox-DeUFjt3X.js";import{A as N,I as ne,N as re,O as ie,P as ae,R as oe,j as se,k as ce}from"./SelectionManager-CfT0IipC.js";import{d as le}from"./Separator-Czodg5iP.js";import{t as P}from"./useControlledState-CNhbt48L.js";import{a as F,c as ue,i as I,n as L,o as R,r as de,s as fe,t as z}from"./select-CzMzZYc8.js";import{n as pe,t as B}from"./Button-jZwNXweQ.js";import{t as V}from"./useFilter-C1Z3LWmS.js";import{n as me,t as he,u as ge}from"./Dialog-Do4s70sg.js";import{n as _e,t as ve}from"./Form-ByWIpLCz.js";import{a as ye,i as be,n as xe,r as Se,t as Ce}from"./Input-CGJWwTkN.js";import{r as we,t as Te}from"./Label-gDPjsdJN.js";import{n as Ee}from"./Text-p6OihxEA.js";import{t as De}from"./avatar-C8HKx6Bv.js";import{t as Oe}from"./featured-icon-b1H97RDX.js";import{t as H}from"./dot-icon-BvmixOaX.js";import{t as U}from"./button-C8hO_E61.js";import{n as ke,t as Ae}from"./label-BViWFIap.js";import{t as je}from"./tag-close-x-1_F4OeU6.js";import{t as Me}from"./select-native-CLPsp-nx.js";var Ne={};Ne={"Clear search":`مسح البحث`};var Pe={};Pe={"Clear search":`Изчистване на търсене`};var Fe={};Fe={"Clear search":`Vymazat hledání`};var Ie={};Ie={"Clear search":`Ryd søgning`};var Le={};Le={"Clear search":`Suche zurücksetzen`};var Re={};Re={"Clear search":`Απαλοιφή αναζήτησης`};var ze={};ze={"Clear search":`Clear search`};var Be={};Be={"Clear search":`Borrar búsqueda`};var Ve={};Ve={"Clear search":`Tühjenda otsing`};var He={};He={"Clear search":`Tyhjennä haku`};var Ue={};Ue={"Clear search":`Effacer la recherche`};var We={};We={"Clear search":`נקה חיפוש`};var Ge={};Ge={"Clear search":`Obriši pretragu`};var Ke={};Ke={"Clear search":`Keresés törlése`};var qe={};qe={"Clear search":`Cancella ricerca`};var Je={};Je={"Clear search":`検索をクリア`};var Ye={};Ye={"Clear search":`검색 지우기`};var Xe={};Xe={"Clear search":`Išvalyti iešką`};var Ze={};Ze={"Clear search":`Notīrīt meklēšanu`};var Qe={};Qe={"Clear search":`Tøm søk`};var $e={};$e={"Clear search":`Zoekactie wissen`};var et={};et={"Clear search":`Wyczyść zawartość wyszukiwania`};var tt={};tt={"Clear search":`Limpar pesquisa`};var nt={};nt={"Clear search":`Limpar pesquisa`};var rt={};rt={"Clear search":`Ştergeţi căutarea`};var it={};it={"Clear search":`Очистить поиск`};var at={};at={"Clear search":`Vymazať vyhľadávanie`};var ot={};ot={"Clear search":`Počisti iskanje`};var st={};st={"Clear search":`Obriši pretragu`};var ct={};ct={"Clear search":`Rensa sökning`};var lt={};lt={"Clear search":`Aramayı temizle`};var W={};W={"Clear search":`Очистити пошук`};var ut={};ut={"Clear search":`清除搜索`};var dt={};dt={"Clear search":`清除搜尋條件`};var ft={};ft={"ar-AE":Ne,"bg-BG":Pe,"cs-CZ":Fe,"da-DK":Ie,"de-DE":Le,"el-GR":Re,"en-US":ze,"es-ES":Be,"et-EE":Ve,"fi-FI":He,"fr-FR":Ue,"he-IL":We,"hr-HR":Ge,"hu-HU":Ke,"it-IT":qe,"ja-JP":Je,"ko-KR":Ye,"lt-LT":Xe,"lv-LV":Ze,"nb-NO":Qe,"nl-NL":$e,"pl-PL":et,"pt-BR":tt,"pt-PT":nt,"ro-RO":rt,"ru-RU":it,"sk-SK":at,"sl-SI":ot,"sr-SP":st,"sv-SE":ct,"tr-TR":lt,"uk-UA":W,"zh-CN":ut,"zh-TW":dt};function pt(e){return e&&e.__esModule?e.default:e}function mt(e,t,n){let r=le(pt(ft),`@react-aria/searchfield`),{isDisabled:i,isReadOnly:a,onSubmit:o,onClear:s,type:c=`search`}=e,l=e=>{let r=e.key;r===`Enter`&&(i||a)&&e.preventDefault(),!(i||a)&&(r===`Enter`&&o&&(e.preventDefault(),o(t.value)),r===`Escape`&&(t.value===``&&(!n.current||n.current.value===``)?e.continuePropagation():(e.preventDefault(),t.setValue(``),s&&s())))},u=()=>{t.setValue(``),s&&s()},d=()=>{var e;(e=n.current)==null||e.focus()},{labelProps:f,inputProps:p,descriptionProps:m,errorMessageProps:h,...g}=ye({...e,value:t.value,onChange:t.setValue,onKeyDown:a?e.onKeyDown:w(l,e.onKeyDown),type:c},n);return{labelProps:f,inputProps:{...p,defaultValue:void 0},clearButtonProps:{"aria-label":r.format(`Clear search`),excludeFromTabOrder:!0,preventFocusOnPress:!0,isDisabled:i||a,onPress:u,onPressStart:d},descriptionProps:m,errorMessageProps:h,...g}}var ht={};ht={collectionLabel:`مقترحات`};var gt={};gt={collectionLabel:`Предложения`};var _t={};_t={collectionLabel:`Návrhy`};var vt={};vt={collectionLabel:`Forslag`};var yt={};yt={collectionLabel:`Empfehlungen`};var bt={};bt={collectionLabel:`Προτάσεις`};var xt={};xt={collectionLabel:`Suggestions`};var St={};St={collectionLabel:`Sugerencias`};var Ct={};Ct={collectionLabel:`Soovitused`};var wt={};wt={collectionLabel:`Ehdotukset`};var Tt={};Tt={collectionLabel:`Suggestions`};var Et={};Et={collectionLabel:`הצעות`};var Dt={};Dt={collectionLabel:`Prijedlozi`};var Ot={};Ot={collectionLabel:`Javaslatok`};var kt={};kt={collectionLabel:`Suggerimenti`};var At={};At={collectionLabel:`候補`};var jt={};jt={collectionLabel:`제안`};var Mt={};Mt={collectionLabel:`Pasiūlymai`};var Nt={};Nt={collectionLabel:`Ieteikumi`};var Pt={};Pt={collectionLabel:`Forslag`};var Ft={};Ft={collectionLabel:`Suggesties`};var It={};It={collectionLabel:`Sugestie`};var Lt={};Lt={collectionLabel:`Sugestões`};var Rt={};Rt={collectionLabel:`Sugestões`};var zt={};zt={collectionLabel:`Sugestii`};var Bt={};Bt={collectionLabel:`Предложения`};var Vt={};Vt={collectionLabel:`Návrhy`};var Ht={};Ht={collectionLabel:`Predlogi`};var Ut={};Ut={collectionLabel:`Predlozi`};var Wt={};Wt={collectionLabel:`Förslag`};var Gt={};Gt={collectionLabel:`Öneriler`};var Kt={};Kt={collectionLabel:`Пропозиції`};var qt={};qt={collectionLabel:`建议`};var Jt={};Jt={collectionLabel:`建議`};var Yt={};Yt={"ar-AE":ht,"bg-BG":gt,"cs-CZ":_t,"da-DK":vt,"de-DE":yt,"el-GR":bt,"en-US":xt,"es-ES":St,"et-EE":Ct,"fi-FI":wt,"fr-FR":Tt,"he-IL":Et,"hr-HR":Dt,"hu-HU":Ot,"it-IT":kt,"ja-JP":At,"ko-KR":jt,"lt-LT":Mt,"lv-LV":Nt,"nb-NO":Pt,"nl-NL":Ft,"pl-PL":It,"pt-BR":Lt,"pt-PT":Rt,"ro-RO":zt,"ru-RU":Bt,"sk-SK":Vt,"sl-SI":Ht,"sr-SP":Ut,"sv-SE":Wt,"tr-TR":Gt,"uk-UA":Kt,"zh-CN":qt,"zh-TW":Jt};var G=e(n(),1);function Xt(e){return e&&e.__esModule?e.default:e}function Zt(e,t){let{inputRef:n,collectionRef:r,filter:i,disableAutoFocusFirst:a=!1,disableVirtualFocus:o=!1}=e,s=x(),c=(0,G.useRef)(void 0),l=(0,G.useRef)(!1),u=(0,G.useRef)(null),[d,h]=(0,G.useState)(!(D()===`virtual`&&(T()||f()))&&!o),[g,v]=(0,G.useState)(!1);(0,G.useEffect)(()=>()=>clearTimeout(c.current),[]);let b=p(e=>{!e.isTrusted&&d&&n.current&&S(ee(n.current))!==n.current&&C()!==`touch`&&n.current.focus();let i=E(e);e.isTrusted||!i||u.current===i.id||(clearTimeout(c.current),i===r.current?u.current&&!document.getElementById(u.current)&&(u.current=null,t.setFocusedNodeId(null)):l.current?(u.current=i.id,c.current=setTimeout(()=>{t.setFocusedNodeId(i.id)},500)):(u.current=i.id,t.setFocusedNodeId(i.id)),l.current=!1)}),[w,k]=(0,G.useState)(null),A=(0,G.useCallback)(e=>{k(e),e==null?v(!1):(e.getAttribute(`tabindex`)!=null&&h(!1),v(!0))},[]);O(()=>(w?.addEventListener(`focusin`,b),()=>{w?.removeEventListener(`focusin`,b)}),[w]);let j=m((0,G.useMemo)(()=>y(r,A),[r,A])),M=(0,G.useCallback)(()=>{var e;l.current=!0,(e=r.current)==null||e.dispatchEvent(new CustomEvent(`react-aria-focus`,{cancelable:!0,bubbles:!0,detail:{focusStrategy:`first`}}))},[r]),P=(0,G.useCallback)(e=>{var n;se(S()),u.current=null,t.setFocusedNodeId(null);let i=new CustomEvent(re,{cancelable:!0,bubbles:!0,detail:{clearFocusKey:e}});clearTimeout(c.current),l.current=!1,(n=r.current)==null||n.dispatchEvent(i)},[r,t]),F=(0,G.useRef)(``);ne(n,`input`,e=>{let{inputType:t}=e;F.current=t});let ue=e=>{F.current===`insertText`&&!a?M():F.current&&(F.current.includes(`insert`)||F.current.includes(`delete`)||F.current.includes(`history`))&&(P(!0),N(document)===n.current&&ie(n.current,null)),t.setInputValue(e)},I=(0,G.useRef)(null),L=e=>{if(I.current=E(e),e.nativeEvent.isComposing)return;let t=u.current;switch(e.key){case`a`:if(oe(e))return;break;case`Escape`:if(e.isDefaultPrevented())return;break;case` `:return;case`Tab`:`continuePropagation`in e&&e.continuePropagation();return;case`Home`:case`End`:case`PageDown`:case`PageUp`:case`ArrowUp`:case`ArrowDown`:{var n;if((e.key===`Home`||e.key===`End`)&&t==null&&e.shiftKey)return;e.preventDefault();let i=new CustomEvent(ae,{cancelable:!0,bubbles:!0});(n=r.current)==null||n.dispatchEvent(i);break}}e.isPropagationStopped()||e.stopPropagation();let i=!0;if(r.current!==null)if(t==null)i=r.current?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type,e.nativeEvent))||!1;else{let n=document.getElementById(t);n&&(i=n?.dispatchEvent(new KeyboardEvent(e.nativeEvent.type,e.nativeEvent))||!1)}if(i)switch(e.key){case`ArrowLeft`:case`ArrowRight`:P();break;case`Enter`:t!=null&&document.getElementById(t)?.dispatchEvent(new PointerEvent(`click`,e.nativeEvent));break}else e.preventDefault()},R=p(e=>{if(E(e)===I.current){var t;e.stopImmediatePropagation();let n=u.current;n==null?(t=r.current)==null||t.dispatchEvent(new KeyboardEvent(e.type,e)):document.getElementById(n)?.dispatchEvent(new KeyboardEvent(e.type,e))}});(0,G.useEffect)(()=>(document.addEventListener(`keyup`,R,!0),()=>{document.removeEventListener(`keyup`,R,!0)}),[]);let de=te({id:s,"aria-label":le(Xt(Yt),`@react-aria/autocomplete`).format(`collectionLabel`)}),fe=(0,G.useCallback)((e,n)=>i?i(e,t.inputValue,n):!0,[t.inputValue,i]),z=e=>{if(!e.isTrusted)return;let t=u.current?document.getElementById(u.current):null;t&&ce(t,e.relatedTarget)},pe=e=>{if(e.isTrusted&&u.current&&document.getElementById(u.current)){let t=E(e);queueMicrotask(()=>{ce(t,r.current),ie(r.current,t)})}},B={value:t.inputValue,onChange:ue},V={onKeyDown:L,"aria-activedescendant":t.focusedNodeId??void 0,onBlur:z,onFocus:pe};return g&&(B={...B,...d&&V,enterKeyHint:`go`,"aria-controls":s,"aria-autocomplete":`list`,autoCorrect:`off`,spellCheck:`false`,autoComplete:`off`}),{inputProps:B,collectionProps:_(de,{shouldUseVirtualFocus:d,disallowTypeAhead:d}),collectionRef:j,filter:i==null?void 0:fe}}function Qt(e){let{onInputChange:t,inputValue:n,defaultInputValue:r=``}=e,i=e=>{t&&t(e)},[a,o]=(0,G.useState)(null),[s,c]=P(n,r,i);return{inputValue:s,setInputValue:c,focusedNodeId:a,setFocusedNodeId:o}}var $t=(0,G.createContext)(null),en=(0,G.createContext)(null);function tn(e){e=_(u($t,e.slot),e);let{filter:t,disableAutoFocusFirst:n}=e,r=Qt(e),i=(0,G.useRef)(null),a=(0,G.useRef)(null),{inputProps:o,collectionProps:l,collectionRef:f,filter:p}=Zt({...d(e),filter:t,disableAutoFocusFirst:n,inputRef:i,collectionRef:a},r);return G.createElement(b,{values:[[en,r],[c,{...o,ref:i}],[s,{...l,filter:p,ref:f}]]},e.children)}function nn(e){let{initialItems:t=[],initialSelectedKeys:n,getKey:r=e=>e.id??e.key,filter:i,initialFilterText:a=``}=e,[o,s]=(0,G.useState)({items:t,selectedKeys:n===`all`?`all`:new Set(n||[]),filterText:a}),c=(0,G.useMemo)(()=>i?o.items.filter(e=>i(e,o.filterText)):o.items,[o.items,o.filterText,i]);return{...o,items:c,...rn({getKey:r},s),getItem(e){return o.items.find(t=>r(t)===e)}}}function rn(e,t){let{cursor:n,getKey:r}=e;return{setSelectedKeys(e){t(t=>({...t,selectedKeys:e}))},addKeysToSelection(e){t(t=>t.selectedKeys===`all`?t:e===`all`?{...t,selectedKeys:`all`}:{...t,selectedKeys:new Set([...t.selectedKeys,...e])})},removeKeysFromSelection(e){t(t=>{if(e===`all`)return{...t,selectedKeys:new Set};let n=t.selectedKeys===`all`?new Set(t.items.map(r)):new Set(t.selectedKeys);for(let t of e)n.delete(t);return{...t,selectedKeys:n}})},setFilterText(e){t(t=>({...t,filterText:e}))},insert(e,...n){t(t=>K(t,e,...n))},insertBefore(e,...n){t(t=>{let i=t.items.findIndex(t=>r?.(t)===e);if(i===-1)if(t.items.length===0)i=0;else return t;return K(t,i,...n)})},insertAfter(e,...n){t(t=>{let i=t.items.findIndex(t=>r?.(t)===e);if(i===-1)if(t.items.length===0)i=0;else return t;return K(t,i+1,...n)})},prepend(...e){t(t=>K(t,0,...e))},append(...e){t(t=>K(t,t.items.length,...e))},remove(...e){t(t=>{let i=new Set(e),a=t.items.filter(e=>!i.has(r(e))),o=`all`;if(t.selectedKeys!==`all`){o=new Set(t.selectedKeys);for(let t of e)o.delete(t)}return n==null&&a.length===0&&(o=new Set),{...t,items:a,selectedKeys:o}})},removeSelectedItems(){t(e=>{if(e.selectedKeys===`all`)return{...e,items:[],selectedKeys:new Set};let t=e.selectedKeys,n=e.items.filter(e=>!t.has(r(e)));return{...e,items:n,selectedKeys:new Set}})},move(e,n){t(t=>{let i=t.items.findIndex(t=>r(t)===e);if(i===-1)return t;let a=t.items.slice(),[o]=a.splice(i,1);return a.splice(n,0,o),{...t,items:a}})},moveBefore(e,n){t(t=>{let i=t.items.findIndex(t=>r(t)===e);return i===-1?t:an(t,(Array.isArray(n)?n:[...n]).map(e=>t.items.findIndex(t=>r(t)===e)).sort((e,t)=>e-t),i)})},moveAfter(e,n){t(t=>{let i=t.items.findIndex(t=>r(t)===e);return i===-1?t:an(t,(Array.isArray(n)?n:[...n]).map(e=>t.items.findIndex(t=>r(t)===e)).sort((e,t)=>e-t),i+1)})},update(e,n){t(t=>{let i=t.items.findIndex(t=>r(t)===e);if(i===-1)return t;let a;return a=typeof n==`function`?n(t.items[i]):n,{...t,items:[...t.items.slice(0,i),a,...t.items.slice(i+1)]}})}}}function K(e,t,...n){return{...e,items:[...e.items.slice(0,t),...n,...e.items.slice(t)]}}function an(e,t,n){n-=t.filter(e=>e<n).length;let r=t.map(e=>({from:e,to:n++}));for(let e=0;e<r.length;e++){let t=r[e].from;for(let n=e;n<r.length;n++)r[n].from>t&&r[n].from--}for(let e=0;e<r.length;e++){let t=r[e];for(let n=r.length-1;n>e;n--){let e=r[n];e.from<t.to?t.to++:e.from++}}let i=e.items.slice();for(let e of r){let[t]=i.splice(e.from,1);i.splice(e.to,0,t)}return{...e,items:i}}function on(e){let[t,n]=P(sn(e.value),sn(e.defaultValue)||``,e.onChange);return{value:t,setValue:n}}function sn(e){if(e!=null)return e.toString()}var cn=(0,G.createContext)(null),ln=we(function(e,t){[e,t]=k(e,t,cn);let{validationBehavior:n}=u(ve)||{},r=e.validationBehavior??n??`native`,i=(0,G.useRef)(null);[e,i]=k(e,i,c);let[a,o]=l(!e[`aria-label`]&&!e[`aria-labelledby`]),s=on({...e,validationBehavior:r}),{labelProps:f,inputProps:p,clearButtonProps:m,descriptionProps:_,errorMessageProps:y,...x}=mt({...d(e),label:o,validationBehavior:r},s,i),S=h({...e,values:{isEmpty:s.value===``,isDisabled:e.isDisabled||!1,isInvalid:x.isInvalid||!1,isReadOnly:e.isReadOnly||!1,isRequired:e.isRequired||!1,state:s},defaultClassName:`react-aria-SearchField`}),C=v(e,{global:!0});return delete C.id,G.createElement(g.div,{...C,...S,ref:t,slot:e.slot||void 0,"data-empty":s.value===``||void 0,"data-disabled":e.isDisabled||void 0,"data-invalid":x.isInvalid||void 0,"data-readonly":e.isReadOnly||void 0,"data-required":e.isRequired||void 0},G.createElement(b,{values:[[Te,{...f,ref:a}],[Ce,{...p,ref:i}],[B,m],[Ee,{slots:{description:_,errorMessage:y}}],[be,{isInvalid:x.isInvalid,isDisabled:e.isDisabled||!1}],[_e,x]]},S.children))}),q=t(),J={sm:{wrapper:`py-1`,root:`px-3 py-2 gap-2 *:data-icon:size-4 *:data-icon:stroke-[2.25px]`,text:`text-sm`},md:{wrapper:`py-0.5`,root:`px-3 py-2 gap-2 *:data-icon:size-5`,text:`text-md`},lg:{wrapper:`py-0.5`,root:`px-3.5 py-2.5 gap-2 *:data-icon:size-5`,text:`text-md`}},un={sm:`xs`,md:`sm`,lg:`sm`},dn={sm:`max-h-68`,md:`max-h-76`,lg:`max-h-92`},fn=({size:e=`sm`,onReset:t,onSelectAll:n,className:r})=>{let i=un[e];return(0,q.jsxs)(`div`,{className:o(`flex items-center justify-between border-t border-secondary p-3`,r),children:[(0,q.jsx)(U,{size:i,color:`secondary`,onClick:t,children:`Reset`}),(0,q.jsx)(U,{size:i,color:`secondary`,onClick:n,children:`Select all`})]})},pn=({title:e=`No results found`,description:t=`Please try a different search term.`,onClearSearch:n,className:r})=>(0,q.jsxs)(`div`,{className:o(`flex flex-col items-center gap-3 px-4 py-4`,r),children:[(0,q.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,q.jsx)(Oe,{icon:i,size:`sm`,color:`gray`,theme:`modern`}),(0,q.jsxs)(`div`,{className:`flex flex-col items-center gap-0.5 text-center text-sm`,children:[(0,q.jsx)(`p`,{className:`font-semibold text-primary`,children:e}),(0,q.jsx)(`p`,{className:`text-tertiary`,children:t})]})]}),n&&(0,q.jsx)(U,{size:`sm`,color:`link-color`,onClick:n,children:`Clear search`})]}),Y=({items:e,children:t,size:n=`md`,selectedKeys:a,defaultSelectedKeys:s,onSelectionChange:c,isDisabled:l,isRequired:u,isInvalid:d,placeholder:f=`Select`,label:p,hint:m,tooltip:h,hideRequiredIndicator:g,popoverClassName:_,className:v,onReset:y,onSelectAll:b,showFooter:x=!0,showSearch:S=!0,emptyStateTitle:C,emptyStateDescription:ee,selectedCountFormatter:w,supportingText:T})=>{let{contains:E}=V({sensitivity:`base`}),[D,O]=(0,G.useState)(``),k=(0,G.useRef)(null),[A,j]=(0,G.useState)(``),te=(0,G.useCallback)(()=>{k.current&&j(k.current.getBoundingClientRect().width+`px`)},[]),N=a instanceof Set?a.size:a===`all`?e?.length??0:0,ne=N>0,re=(0,G.useCallback)(()=>{O(``)},[]);return(0,q.jsx)(I.Provider,{value:{size:n},children:(0,q.jsxs)(`div`,{className:o(`flex flex-col gap-1.5`,v),children:[p&&(0,q.jsx)(Ae,{isRequired:g?!1:u,isInvalid:d,tooltip:h,children:p}),(0,q.jsxs)(he,{children:[(0,q.jsx)(pe,{ref:k,isDisabled:l,onClick:te,className:e=>o(`relative flex w-full cursor-pointer items-center rounded-lg bg-primary shadow-xs ring-1 ring-primary outline-hidden transition duration-100 ease-linear ring-inset`,(e.isFocusVisible||e.isPressed)&&`ring-2 ring-brand`,e.isDisabled&&`cursor-not-allowed opacity-50`),children:(0,q.jsxs)(`span`,{className:o(`flex w-full items-center truncate text-left`,F[n].root,`*:data-icon:shrink-0 *:data-icon:text-fg-quaternary`),children:[ne?(0,q.jsxs)(`span`,{className:o(`flex items-center`,F[n].textContainer),children:[(0,q.jsx)(`span`,{className:o(`font-medium text-primary`,F[n].text),children:w?w(N):`${N} selected`}),T&&(0,q.jsx)(`span`,{className:o(`text-tertiary`,F[n].text),children:T})]}):(0,q.jsx)(`span`,{className:o(`text-placeholder`,F[n].text),children:f}),(0,q.jsx)(r,{"aria-hidden":`true`,className:o(`ml-auto shrink-0 text-fg-quaternary`,n===`lg`?`size-5`:`size-4 stroke-[2.25px]`)})]})}),(0,q.jsx)(ge,{placement:`bottom`,offset:4,containerPadding:0,style:{width:A||void 0},className:e=>o(`w-(--trigger-width) origin-(--trigger-anchor-point) overflow-hidden rounded-lg bg-primary shadow-lg ring-1 ring-secondary_alt outline-hidden will-change-transform`,e.isEntering&&`duration-150 ease-out animate-in fade-in placement-top:slide-in-from-bottom-0.5 placement-bottom:slide-in-from-top-0.5`,e.isExiting&&`duration-100 ease-in animate-out fade-out placement-top:slide-out-to-bottom-0.5 placement-bottom:slide-out-to-top-0.5`,_),children:(0,q.jsxs)(me,{className:`outline-hidden`,children:[(0,q.jsxs)(tn,{filter:E,inputValue:D,onInputChange:O,children:[S&&(0,q.jsx)(`div`,{className:o(`border-b border-secondary`,J[n].wrapper),children:(0,q.jsx)(ln,{"aria-label":`Search`,value:D,onChange:O,autoFocus:!0,children:(0,q.jsxs)(`div`,{className:o(`flex items-center`,J[n].root),children:[(0,q.jsx)(i,{"data-icon":!0,"aria-hidden":`true`,className:`shrink-0 text-fg-quaternary`}),(0,q.jsx)(xe,{placeholder:`Search`,className:o(`w-full appearance-none bg-transparent text-primary caret-alpha-black/90 outline-hidden placeholder:text-placeholder`,J[n].text)})]})})}),(0,q.jsx)(M,{"aria-label":p||`Options`,items:e,selectionMode:`multiple`,selectedKeys:a,defaultSelectedKeys:s,onSelectionChange:c,renderEmptyState:()=>(0,q.jsx)(pn,{title:C,description:ee,onClearSearch:D?re:void 0}),className:o(`overflow-y-auto py-1 outline-hidden`,dn[n]),children:t})]}),x&&(0,q.jsx)(fn,{size:n,onReset:y,onSelectAll:b})]})})]}),m&&(0,q.jsx)(ke,{isInvalid:d,className:o(n===`sm`&&`text-xs`),children:m})]})})};Y.Item=L,Y.Footer=fn,Y.EmptyState=pn;var X=(0,G.createContext)({size:`sm`,selectedKeys:[],selectedItems:{},onRemove:()=>{},onInputChange:()=>{}}),mn=({items:e,children:t,size:n=`sm`,selectedItems:r,onItemCleared:i,onItemInserted:a,valueFormatter:s,shortcut:c,placeholder:l=`Search`,icon:u,name:d,className:f,...p})=>{let{contains:m}=V({sensitivity:`base`}),h=r.items.map(e=>e.id),g=nn({initialItems:e,filter:(0,G.useCallback)((e,t)=>!h.includes(e.id)&&m(e.label||e.supportingText||``,t),[m,h])}),_=(0,G.useCallback)(e=>{let t=e.values().next().value;t&&(r.remove(t),i?.(t))},[r,i]),v=e=>{if(!e)return;let t=g.getItem(e);t&&(h.includes(e)||(r.append(t),a?.(e)),g.setFilterText(``))},y=e=>{g.setFilterText(e)},b=(0,G.useRef)(null),[x,S]=(0,G.useState)(``),C=(0,G.useCallback)(()=>{if(!b.current)return;let e=b.current?.getBoundingClientRect();S(e.width+`px`)},[b,S]);return de({ref:b,onResize:C,box:`border-box`}),(0,q.jsx)(X.Provider,{value:{size:n,selectedKeys:h,selectedItems:r,onInputChange:y,onRemove:_,valueFormatter:s},children:(0,q.jsx)(fe,{allowsEmptyCollection:!0,menuTrigger:`focus`,items:g.items,onInputChange:y,inputValue:g.filterText,value:null,onChange:v,className:e=>o(`flex flex-col gap-1.5`,typeof f==`function`?f(e):f),...p,children:e=>(0,q.jsxs)(q.Fragment,{children:[p.label&&(0,q.jsx)(Ae,{isRequired:e.isRequired,tooltip:p.tooltip,children:p.label}),(0,q.jsx)(gn,{size:n,shortcut:c,ref:b,placeholder:l,icon:u,onFocus:C,onPointerEnter:C}),(0,q.jsx)(R,{size:n,triggerRef:b,style:{width:x},className:p?.popoverClassName,children:(0,q.jsx)(M,{selectionMode:`multiple`,className:`size-full outline-hidden`,children:t})}),p.hint&&(0,q.jsx)(ke,{isInvalid:e.isInvalid,className:o(n===`sm`&&`text-xs`),children:p.hint})]})})})},hn=({isDisabled:e,shortcut:t,shortcutClassName:n,placeholder:r,size:i=`sm`})=>{let a=j(),s=(0,G.useContext)(X),c=(0,G.useContext)(ue),l=e=>{if(!(!(e.currentTarget.selectionStart===0&&e.currentTarget.selectionEnd===0)&&e.currentTarget.value!==``))switch(e.key){case`Backspace`:case`ArrowLeft`:a?.focusPrevious({wrap:!1,tabbable:!1});break;case`ArrowRight`:a?.focusNext({wrap:!1,tabbable:!1});break}},u=e=>{c&&!c.isOpen&&c.open()},d=(e,t)=>{if(e.key===`Tab`)return;e.preventDefault();let n=s?.selectedItems?.items?.[0]?.id===t;switch(e.key){case` `:case`Enter`:case`Backspace`:n?a?.focusNext({wrap:!1,tabbable:!1}):a?.focusPrevious({wrap:!1,tabbable:!1}),s.onRemove(new Set([t]));break;case`ArrowLeft`:a?.focusPrevious({wrap:!1,tabbable:!1});break;case`ArrowRight`:a?.focusNext({wrap:!1,tabbable:!1});break;case`Escape`:c?.close();break}},f=s?.selectedItems?.items?.length===0;return(0,q.jsxs)(`div`,{className:`relative flex w-full min-w-0 flex-1 flex-row flex-wrap items-center justify-start gap-1.5`,children:[!f&&s?.selectedItems?.items?.map(t=>(0,q.jsxs)(`span`,{className:o(`flex min-w-0 items-center rounded-md bg-primary ring-1 ring-primary ring-inset`,i===`sm`?`px-1 py-0.75`:`py-0.5 pr-1 pl-1.25`),children:[(0,q.jsx)(De,{size:`xs`,alt:t?.label,src:t?.avatarUrl,className:`size-4`}),(0,q.jsx)(`p`,{className:o(`truncate font-medium whitespace-nowrap text-secondary select-none`,i===`sm`?`ml-1 text-xs`:`ml-1.25 text-sm`),children:s.valueFormatter?s.valueFormatter(t):t?.label}),(0,q.jsx)(je,{size:i===`sm`?`sm`:`md`,isDisabled:e,className:`ml-0.75`,onKeyDown:e=>d(e,t.id),onPress:()=>s.onRemove(new Set([t.id]))})]},t.id)),(0,q.jsxs)(`div`,{className:o(`relative flex min-w-12 flex-1 flex-row items-center`,!f&&`ml-0.5`,t&&`min-w-[30%]`),children:[(0,q.jsx)(xe,{placeholder:r,onKeyDown:l,onMouseDown:u,className:o(`w-full flex-[1_0_0] appearance-none bg-transparent text-ellipsis text-primary caret-alpha-black/90 outline-hidden placeholder:text-placeholder focus:outline-hidden disabled:cursor-not-allowed`,F[i].text)}),t&&(0,q.jsx)(`div`,{"aria-hidden":`true`,className:o(`absolute inset-y-0.5 right-0.5 z-10 hidden items-center rounded-r-[inherit] bg-linear-to-r from-transparent to-bg-primary to-40% pl-8 md:flex`,n,F[i].shortcut),children:(0,q.jsx)(`span`,{className:o(`pointer-events-none rounded px-1 py-px text-xs font-medium text-quaternary ring-1 ring-secondary select-none ring-inset`,e&&`bg-transparent`),children:`⌘K`})})]})]})},gn=({size:e=`sm`,shortcut:t,placeholder:n,shortcutClassName:r,icon:a=i,isDisabled:s,...c})=>{let l=(0,G.useContext)(X).selectedKeys.length;return(0,q.jsx)(Se,{...c,className:({isFocusWithin:t,isDisabled:n})=>o(`relative flex w-full items-center rounded-lg bg-primary shadow-xs ring-1 ring-primary outline-hidden transition duration-100 ease-linear ring-inset`,n&&`cursor-not-allowed opacity-50`,t&&`ring-2 ring-brand`,`*:data-icon:shrink-0 *:data-icon:text-fg-quaternary`,F[e].root,e===`sm`&&l>0&&`py-1.5`),children:({isDisabled:i})=>(0,q.jsxs)(q.Fragment,{children:[a&&(0,q.jsx)(a,{"data-icon":!0,className:`pointer-events-none`}),(0,q.jsx)(A,{contain:!1,autoFocus:!1,restoreFocus:!1,children:(0,q.jsx)(hn,{isDisabled:i,size:e,shortcut:t,shortcutClassName:r,placeholder:n})})]})})},Z=mn;Z.Item=L;var _n=()=>(0,q.jsx)(z,{isRequired:!0,label:`Team member`,tooltip:`This is a tooltip`,hint:`This is a hint text to help user.`,placeholder:`Select team member`,items:[{label:`Phoenix Baker`,id:`@phoenix`,supportingText:`@phoenix`},{label:`Olivia Rhye`,id:`@olivia`,supportingText:`@olivia`},{label:`Lana Steiner`,id:`@lana`,supportingText:`@lana`,disabled:!0},{label:`Demi Wilkinson`,id:`@demi`,supportingText:`@demi`},{label:`Candice Wu`,id:`@candice`,supportingText:`@candice`},{label:`Natali Craig`,id:`@natali`,supportingText:`@natali`},{label:`Abraham Baker`,id:`@abraham`,supportingText:`@abraham`},{label:`Adem Lane`,id:`@adem`,supportingText:`@adem`},{label:`Jackson Reed`,id:`@jackson`,supportingText:`@jackson`},{label:`Jessie Meyton`,id:`@jessie`,supportingText:`@jessie`}],children:e=>(0,q.jsx)(z.Item,{id:e.id,supportingText:e.supportingText,isDisabled:e.isDisabled,icon:e.icon,avatarUrl:e.avatarUrl,children:e.label})}),vn=()=>(0,q.jsx)(z,{isRequired:!0,isDisabled:!0,label:`Team member`,tooltip:`This is a tooltip`,hint:`This is a hint text to help user.`,placeholder:`Select team member`,items:[{label:`Phoenix Baker`,id:`@phoenix`,supportingText:`@phoenix`},{label:`Olivia Rhye`,id:`@olivia`,supportingText:`@olivia`},{label:`Lana Steiner`,id:`@lana`,supportingText:`@lana`,disabled:!0},{label:`Demi Wilkinson`,id:`@demi`,supportingText:`@demi`},{label:`Candice Wu`,id:`@candice`,supportingText:`@candice`},{label:`Natali Craig`,id:`@natali`,supportingText:`@natali`},{label:`Abraham Baker`,id:`@abraham`,supportingText:`@abraham`},{label:`Adem Lane`,id:`@adem`,supportingText:`@adem`},{label:`Jackson Reed`,id:`@jackson`,supportingText:`@jackson`},{label:`Jessie Meyton`,id:`@jessie`,supportingText:`@jessie`}],children:e=>(0,q.jsx)(z.Item,{id:e.id,supportingText:e.supportingText,isDisabled:e.isDisabled,icon:e.icon,avatarUrl:e.avatarUrl,children:e.label})}),yn=()=>{let e=[{label:`Phoenix Baker`,id:`@phoenix`,supportingText:`@phoenix`},{label:`Olivia Rhye`,id:`@olivia`,supportingText:`@olivia`},{label:`Lana Steiner`,id:`@lana`,supportingText:`@lana`,disabled:!0},{label:`Demi Wilkinson`,id:`@demi`,supportingText:`@demi`},{label:`Candice Wu`,id:`@candice`,supportingText:`@candice`},{label:`Natali Craig`,id:`@natali`,supportingText:`@natali`},{label:`Abraham Baker`,id:`@abraham`,supportingText:`@abraham`},{label:`Adem Lane`,id:`@adem`,supportingText:`@adem`},{label:`Jackson Reed`,id:`@jackson`,supportingText:`@jackson`},{label:`Jessie Meyton`,id:`@jessie`,supportingText:`@jessie`}];return(0,q.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,q.jsx)(z,{isRequired:!0,size:`sm`,label:`Team member`,tooltip:`This is a tooltip`,hint:`This is a hint text to help user.`,placeholder:`Select team member`,items:e,children:e=>(0,q.jsx)(z.Item,{id:e.id,supportingText:e.supportingText,isDisabled:e.isDisabled,icon:e.icon,avatarUrl:e.avatarUrl,children:e.label})}),(0,q.jsx)(z,{isRequired:!0,size:`md`,label:`Team member`,tooltip:`This is a tooltip`,hint:`This is a hint text to help user.`,placeholder:`Select team member`,items:e,children:e=>(0,q.jsx)(z.Item,{id:e.id,supportingText:e.supportingText,isDisabled:e.isDisabled,icon:e.icon,avatarUrl:e.avatarUrl,children:e.label})})]})},bn=()=>(0,q.jsx)(z,{isRequired:!0,label:`Team member`,tooltip:`This is a tooltip`,hint:`This is a hint text to help user.`,placeholder:`Select team member`,icon:a,items:[{label:`Phoenix Baker`,id:`@phoenix`,supportingText:`@phoenix`,icon:a},{label:`Olivia Rhye`,id:`@olivia`,supportingText:`@olivia`,icon:a},{label:`Lana Steiner`,id:`@lana`,supportingText:`@lana`,icon:a,disabled:!0},{label:`Demi Wilkinson`,id:`@demi`,supportingText:`@demi`,icon:a},{label:`Candice Wu`,id:`@candice`,supportingText:`@candice`,icon:a},{label:`Natali Craig`,id:`@natali`,supportingText:`@natali`,icon:a},{label:`Abraham Baker`,id:`@abraham`,supportingText:`@abraham`,icon:a},{label:`Adem Lane`,id:`@adem`,supportingText:`@adem`,icon:a},{label:`Jackson Reed`,id:`@jackson`,supportingText:`@jackson`,icon:a},{label:`Jessie Meyton`,id:`@jessie`,supportingText:`@jessie`,icon:a}],children:e=>(0,q.jsx)(z.Item,{id:e.id,supportingText:e.supportingText,isDisabled:e.isDisabled,icon:e.icon,avatarUrl:e.avatarUrl,children:e.label})}),xn=()=>(0,q.jsx)(z,{isRequired:!0,label:`Team member`,tooltip:`This is a tooltip`,hint:`This is a hint text to help user.`,placeholder:`Select team member`,icon:a,items:[{label:`Phoenix Baker`,id:`@phoenix`,supportingText:`@phoenix`,avatarUrl:`https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80`},{label:`Olivia Rhye`,id:`@olivia`,supportingText:`@olivia`,avatarUrl:`https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80`},{label:`Lana Steiner`,id:`@lana`,supportingText:`@lana`,avatarUrl:`https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80`},{label:`Demi Wilkinson`,id:`@demi`,supportingText:`@demi`,avatarUrl:`https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80`},{label:`Candice Wu`,id:`@candice`,supportingText:`@candice`,avatarUrl:`https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80`},{label:`Natali Craig`,id:`@natali`,supportingText:`@natali`,avatarUrl:`https://www.untitledui.com/images/avatars/natali-craig?fm=webp&q=80`},{label:`Abraham Baker`,id:`@abraham`,supportingText:`@abraham`,avatarUrl:`https://www.untitledui.com/images/avatars/abraham-baker?fm=webp&q=80`},{label:`Adem Lane`,id:`@adem`,supportingText:`@adem`,avatarUrl:`https://www.untitledui.com/images/avatars/adem-lane?fm=webp&q=80`},{label:`Jackson Reed`,id:`@jackson`,supportingText:`@jackson`,avatarUrl:`https://www.untitledui.com/images/avatars/jackson-reed?fm=webp&q=80`},{label:`Jessie Meyton`,id:`@jessie`,supportingText:`@jessie`,avatarUrl:`https://www.untitledui.com/images/avatars/jessie-meyton?fm=webp&q=80`}],children:e=>(0,q.jsx)(z.Item,{id:e.id,supportingText:e.supportingText,isDisabled:e.isDisabled,icon:e.icon,avatarUrl:e.avatarUrl,children:e.label})}),Sn=()=>(0,q.jsx)(z,{isRequired:!0,label:`Team member`,tooltip:`This is a tooltip`,hint:`This is a hint text to help user.`,placeholder:`Select team member`,icon:(0,q.jsx)(H,{className:`size-2.5 text-fg-success-secondary`}),items:[{label:`Phoenix Baker`,id:`@phoenix`,supportingText:`@phoenix`,icon:(0,q.jsx)(H,{className:`size-2.5 text-fg-success-secondary`})},{label:`Olivia Rhye`,id:`@olivia`,supportingText:`@olivia`,icon:(0,q.jsx)(H,{className:`size-2.5 text-fg-success-secondary`})},{label:`Lana Steiner`,id:`@lana`,supportingText:`@lana`,icon:(0,q.jsx)(H,{className:`size-2.5 text-fg-success-secondary`})},{label:`Demi Wilkinson`,id:`@demi`,supportingText:`@demi`,icon:(0,q.jsx)(H,{className:`size-2.5 text-fg-success-secondary`})},{label:`Candice Wu`,id:`@candice`,supportingText:`@candice`,icon:(0,q.jsx)(H,{className:`size-2.5 text-fg-success-secondary`})},{label:`Natali Craig`,id:`@natali`,supportingText:`@natali`,icon:(0,q.jsx)(H,{className:`size-2.5 text-fg-success-secondary`})},{label:`Abraham Baker`,id:`@abraham`,supportingText:`@abraham`,icon:(0,q.jsx)(H,{className:`size-2.5 text-fg-success-secondary`})},{label:`Adem Lane`,id:`@adem`,supportingText:`@adem`,icon:(0,q.jsx)(H,{className:`size-2.5 text-fg-success-secondary`})},{label:`Jackson Reed`,id:`@jackson`,supportingText:`@jackson`,icon:(0,q.jsx)(H,{className:`size-2.5 text-fg-success-secondary`})},{label:`Jessie Meyton`,id:`@jessie`,supportingText:`@jessie`,icon:(0,q.jsx)(H,{className:`size-2.5 text-fg-success-secondary`})}],children:e=>(0,q.jsx)(z.Item,{id:e.id,supportingText:e.supportingText,isDisabled:e.isDisabled,icon:e.icon,avatarUrl:e.avatarUrl,children:e.label})}),Cn=()=>(0,q.jsx)(z.ComboBox,{isRequired:!0,label:`Search`,tooltip:`This is a tooltip`,hint:`This is a hint text to help user.`,placeholder:`Search`,items:[{label:`Phoenix Baker`,id:`@phoenix`,supportingText:`@phoenix`},{label:`Olivia Rhye`,id:`@olivia`,supportingText:`@olivia`},{label:`Lana Steiner`,id:`@lana`,supportingText:`@lana`,disabled:!0},{label:`Demi Wilkinson`,id:`@demi`,supportingText:`@demi`},{label:`Candice Wu`,id:`@candice`,supportingText:`@candice`},{label:`Natali Craig`,id:`@natali`,supportingText:`@natali`},{label:`Abraham Baker`,id:`@abraham`,supportingText:`@abraham`},{label:`Adem Lane`,id:`@adem`,supportingText:`@adem`},{label:`Jackson Reed`,id:`@jackson`,supportingText:`@jackson`},{label:`Jessie Meyton`,id:`@jessie`,supportingText:`@jessie`}],children:e=>(0,q.jsx)(z.Item,{id:e.id,supportingText:e.supportingText,isDisabled:e.isDisabled,icon:e.icon,avatarUrl:e.avatarUrl,children:e.label})}),wn=()=>(0,q.jsx)(Z,{isRequired:!0,selectedItems:nn({initialItems:[]}),label:`Search`,tooltip:`This is a tooltip`,hint:`This is a hint text to help user.`,placeholder:`Search`,items:[{label:`Phoenix Baker`,id:`@phoenix`,supportingText:`@phoenix`,avatarUrl:`https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80`},{label:`Olivia Rhye`,id:`@olivia`,supportingText:`@olivia`,avatarUrl:`https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80`},{label:`Lana Steiner`,id:`@lana`,supportingText:`@lana`,disabled:!0,avatarUrl:`https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80`},{label:`Demi Wilkinson`,id:`@demi`,supportingText:`@demi`,avatarUrl:`https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80`},{label:`Candice Wu`,id:`@candice`,supportingText:`@candice`,avatarUrl:`https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80`},{label:`Natali Craig`,id:`@natali`,supportingText:`@natali`,avatarUrl:`https://www.untitledui.com/images/avatars/natali-craig?fm=webp&q=80`},{label:`Abraham Baker`,id:`@abraham`,supportingText:`@abraham`,avatarUrl:`https://www.untitledui.com/images/avatars/abraham-baker?fm=webp&q=80`},{label:`Adem Lane`,id:`@adem`,supportingText:`@adem`,avatarUrl:`https://www.untitledui.com/images/avatars/adem-lane?fm=webp&q=80`},{label:`Jackson Reed`,id:`@jackson`,supportingText:`@jackson`,avatarUrl:`https://www.untitledui.com/images/avatars/jackson-reed?fm=webp&q=80`},{label:`Jessie Meyton`,id:`@jessie`,supportingText:`@jessie`,avatarUrl:`https://www.untitledui.com/images/avatars/jessie-meyton?fm=webp&q=80`}],children:e=>(0,q.jsx)(Z.Item,{id:e.id,supportingText:e.supportingText,isDisabled:e.isDisabled,icon:e.icon,avatarUrl:e.avatarUrl,children:e.label})}),Tn=()=>(0,q.jsx)(Me,{label:`Team members`,options:[{label:`Wade Cooper`,value:`@wadecooper`},{label:`Arlene Mccoy`,value:`@arlenemccoy`},{label:`Devon Webb`,value:`@devonwebb`,disabled:!0},{label:`Tom Cook`,value:`@tomcook`},{label:`Tanya Fox`,value:`@tanyafox`},{label:`Hellen Schmidt`,value:`@hellenschmidt`},{label:`Caroline Schultz`,value:`@carolineschultz`},{label:`Mason Heaney`,value:`@masonheaney`},{label:`Claudie Smitham`,value:`@claudiesmitham`},{label:`Emil Schaefer`,value:`@emilschaefer`}],hint:`This is a hint text to help user.`}),Q=[{id:`engineering`,label:`Engineering`,supportingText:`12 users`},{id:`design`,label:`Design`,supportingText:`10 users`},{id:`product`,label:`Product`,supportingText:`6 users`},{id:`marketing`,label:`Marketing`,supportingText:`8 users`},{id:`sales`,label:`Sales`,supportingText:`12 users`},{id:`customer-success`,label:`Customer Success`,supportingText:`4 users`},{id:`operations`,label:`Operations`,supportingText:`2 users`},{id:`finance`,label:`Finance`,supportingText:`2 users`}],$=e=>e===`all`?Q.reduce((e,t)=>e+parseInt(t.supportingText?.split(` `)[0]||`0`),0):Q.filter(t=>e.has(t.id)).reduce((e,t)=>e+parseInt(t.supportingText?.split(` `)[0]||`0`),0),En=()=>{let[e,t]=(0,G.useState)(new Set([`design`,`product`]));return(0,q.jsx)(Y,{isRequired:!0,size:`sm`,label:`Teams`,tooltip:`This is a tooltip`,hint:`This is a hint text to help user.`,placeholder:`Select teams`,items:Q,selectedKeys:e,onSelectionChange:t,supportingText:`${$(e)} users`,onReset:()=>t(new Set),onSelectAll:()=>t(new Set(Q.map(e=>e.id))),children:e=>(0,q.jsx)(Y.Item,{id:e.id,supportingText:e.supportingText,selectionIndicator:`checkbox`,selectionIndicatorAlign:`left`,children:e.label})})},Dn=()=>{let[e,t]=(0,G.useState)(new Set([`design`,`product`]));return(0,q.jsx)(Y,{isRequired:!0,size:`md`,label:`Teams`,tooltip:`This is a tooltip`,hint:`This is a hint text to help user.`,placeholder:`Select teams`,items:Q,selectedKeys:e,onSelectionChange:t,supportingText:`${$(e)} users`,onReset:()=>t(new Set),onSelectAll:()=>t(new Set(Q.map(e=>e.id))),children:e=>(0,q.jsx)(Y.Item,{id:e.id,supportingText:e.supportingText,selectionIndicator:`checkbox`,selectionIndicatorAlign:`left`,children:e.label})})},On=()=>{let[e,t]=(0,G.useState)(new Set([`design`,`product`]));return(0,q.jsx)(Y,{isRequired:!0,size:`lg`,label:`Teams`,tooltip:`This is a tooltip`,hint:`This is a hint text to help user.`,placeholder:`Select teams`,items:Q,selectedKeys:e,onSelectionChange:t,supportingText:`${$(e)} users`,onReset:()=>t(new Set),onSelectAll:()=>t(new Set(Q.map(e=>e.id))),children:e=>(0,q.jsx)(Y.Item,{id:e.id,supportingText:e.supportingText,selectionIndicator:`checkbox`,selectionIndicatorAlign:`left`,children:e.label})})},kn=()=>(0,q.jsx)(Y,{size:`sm`,label:`Teams`,tooltip:`This is a tooltip`,hint:`This is a hint text to help user.`,placeholder:`Select teams`,items:Q,isDisabled:!0,children:e=>(0,q.jsx)(Y.Item,{id:e.id,supportingText:e.supportingText,selectionIndicator:`checkbox`,selectionIndicatorAlign:`left`,children:e.label})}),An=`"use client";

import { useState } from "react";
import { User01 } from "@untitledui/icons";
import type { Selection } from "react-aria-components";
import { useListData } from "react-stately";
import { MultiSelect } from "@/components/base/select/multi-select";
import { Select, type SelectItemType } from "@/components/base/select/select";
import { NativeSelect } from "@/components/base/select/select-native";
import { TagSelect } from "@/components/base/select/tag-select";
import { Dot } from "@/components/foundations/dot-icon";

const items: SelectItemType[] = [
    {
        label: "Phoenix Baker",
        id: "@phoenix",
        supportingText: "@phoenix",
        avatarUrl: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80",
    },
    { label: "Olivia Rhye", id: "@olivia", supportingText: "@olivia", avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" },
    {
        label: "Lana Steiner",
        id: "@lana",
        supportingText: "@lana",

        avatarUrl: "https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80",
    },
    {
        label: "Demi Wilkinson",
        id: "@demi",
        supportingText: "@demi",
        avatarUrl: "https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80",
    },
    { label: "Candice Wu", id: "@candice", supportingText: "@candice", avatarUrl: "https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80" },
    { label: "Natali Craig", id: "@natali", supportingText: "@natali", avatarUrl: "https://www.untitledui.com/images/avatars/natali-craig?fm=webp&q=80" },
    { label: "Abraham Baker", id: "@abraham", supportingText: "@abraham", avatarUrl: "https://www.untitledui.com/images/avatars/abraham-baker?fm=webp&q=80" },
    { label: "Adem Lane", id: "@adem", supportingText: "@adem", avatarUrl: "https://www.untitledui.com/images/avatars/adem-lane?fm=webp&q=80" },
    {
        label: "Jackson Reed",
        id: "@jackson",
        supportingText: "@jackson",
        avatarUrl: "https://www.untitledui.com/images/avatars/jackson-reed?fm=webp&q=80",
    },
    {
        label: "Jessie Meyton",
        id: "@jessie",
        supportingText: "@jessie",
        avatarUrl: "https://www.untitledui.com/images/avatars/jessie-meyton?fm=webp&q=80",
    },
];

export const DefaultDemo = () => {
    const items = [
        { label: "Phoenix Baker", id: "@phoenix", supportingText: "@phoenix" },
        { label: "Olivia Rhye", id: "@olivia", supportingText: "@olivia" },
        { label: "Lana Steiner", id: "@lana", supportingText: "@lana", disabled: true },
        { label: "Demi Wilkinson", id: "@demi", supportingText: "@demi" },
        { label: "Candice Wu", id: "@candice", supportingText: "@candice" },
        { label: "Natali Craig", id: "@natali", supportingText: "@natali" },
        { label: "Abraham Baker", id: "@abraham", supportingText: "@abraham" },
        { label: "Adem Lane", id: "@adem", supportingText: "@adem" },
        { label: "Jackson Reed", id: "@jackson", supportingText: "@jackson" },
        { label: "Jessie Meyton", id: "@jessie", supportingText: "@jessie" },
    ];

    return (
        <Select
            isRequired
            label="Team member"
            tooltip="This is a tooltip"
            hint="This is a hint text to help user."
            placeholder="Select team member"
            items={items}
        >
            {(item) => (
                <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                    {item.label}
                </Select.Item>
            )}
        </Select>
    );
};

export const DisabledDemo = () => {
    const items = [
        { label: "Phoenix Baker", id: "@phoenix", supportingText: "@phoenix" },
        { label: "Olivia Rhye", id: "@olivia", supportingText: "@olivia" },
        { label: "Lana Steiner", id: "@lana", supportingText: "@lana", disabled: true },
        { label: "Demi Wilkinson", id: "@demi", supportingText: "@demi" },
        { label: "Candice Wu", id: "@candice", supportingText: "@candice" },
        { label: "Natali Craig", id: "@natali", supportingText: "@natali" },
        { label: "Abraham Baker", id: "@abraham", supportingText: "@abraham" },
        { label: "Adem Lane", id: "@adem", supportingText: "@adem" },
        { label: "Jackson Reed", id: "@jackson", supportingText: "@jackson" },
        { label: "Jessie Meyton", id: "@jessie", supportingText: "@jessie" },
    ];

    return (
        <Select
            isRequired
            isDisabled
            label="Team member"
            tooltip="This is a tooltip"
            hint="This is a hint text to help user."
            placeholder="Select team member"
            items={items}
        >
            {(item) => (
                <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                    {item.label}
                </Select.Item>
            )}
        </Select>
    );
};

export const SizesDemo = () => {
    const items = [
        { label: "Phoenix Baker", id: "@phoenix", supportingText: "@phoenix" },
        { label: "Olivia Rhye", id: "@olivia", supportingText: "@olivia" },
        { label: "Lana Steiner", id: "@lana", supportingText: "@lana", disabled: true },
        { label: "Demi Wilkinson", id: "@demi", supportingText: "@demi" },
        { label: "Candice Wu", id: "@candice", supportingText: "@candice" },
        { label: "Natali Craig", id: "@natali", supportingText: "@natali" },
        { label: "Abraham Baker", id: "@abraham", supportingText: "@abraham" },
        { label: "Adem Lane", id: "@adem", supportingText: "@adem" },
        { label: "Jackson Reed", id: "@jackson", supportingText: "@jackson" },
        { label: "Jessie Meyton", id: "@jessie", supportingText: "@jessie" },
    ];

    return (
        <div className="flex flex-col gap-8">
            {/* Small */}
            <Select
                isRequired
                size="sm"
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                items={items}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>

            {/* Medium */}
            <Select
                isRequired
                size="md"
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                items={items}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
        </div>
    );
};

export const IconLeadingDemo = () => {
    const items = [
        { label: "Phoenix Baker", id: "@phoenix", supportingText: "@phoenix", icon: User01 },
        { label: "Olivia Rhye", id: "@olivia", supportingText: "@olivia", icon: User01 },
        { label: "Lana Steiner", id: "@lana", supportingText: "@lana", icon: User01, disabled: true },
        { label: "Demi Wilkinson", id: "@demi", supportingText: "@demi", icon: User01 },
        { label: "Candice Wu", id: "@candice", supportingText: "@candice", icon: User01 },
        { label: "Natali Craig", id: "@natali", supportingText: "@natali", icon: User01 },
        { label: "Abraham Baker", id: "@abraham", supportingText: "@abraham", icon: User01 },
        { label: "Adem Lane", id: "@adem", supportingText: "@adem", icon: User01 },
        { label: "Jackson Reed", id: "@jackson", supportingText: "@jackson", icon: User01 },
        { label: "Jessie Meyton", id: "@jessie", supportingText: "@jessie", icon: User01 },
    ];

    return (
        <Select
            isRequired
            label="Team member"
            tooltip="This is a tooltip"
            hint="This is a hint text to help user."
            placeholder="Select team member"
            icon={User01}
            items={items}
        >
            {(item) => (
                <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                    {item.label}
                </Select.Item>
            )}
        </Select>
    );
};

export const AvatarLeadingDemo = () => {
    const items = [
        {
            label: "Phoenix Baker",
            id: "@phoenix",
            supportingText: "@phoenix",
            avatarUrl: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80",
        },
        {
            label: "Olivia Rhye",
            id: "@olivia",
            supportingText: "@olivia",
            avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80",
        },
        {
            label: "Lana Steiner",
            id: "@lana",
            supportingText: "@lana",

            avatarUrl: "https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80",
        },
        {
            label: "Demi Wilkinson",
            id: "@demi",
            supportingText: "@demi",
            avatarUrl: "https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80",
        },
        {
            label: "Candice Wu",
            id: "@candice",
            supportingText: "@candice",
            avatarUrl: "https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80",
        },
        {
            label: "Natali Craig",
            id: "@natali",
            supportingText: "@natali",
            avatarUrl: "https://www.untitledui.com/images/avatars/natali-craig?fm=webp&q=80",
        },
        {
            label: "Abraham Baker",
            id: "@abraham",
            supportingText: "@abraham",
            avatarUrl: "https://www.untitledui.com/images/avatars/abraham-baker?fm=webp&q=80",
        },
        { label: "Adem Lane", id: "@adem", supportingText: "@adem", avatarUrl: "https://www.untitledui.com/images/avatars/adem-lane?fm=webp&q=80" },
        {
            label: "Jackson Reed",
            id: "@jackson",
            supportingText: "@jackson",
            avatarUrl: "https://www.untitledui.com/images/avatars/jackson-reed?fm=webp&q=80",
        },
        {
            label: "Jessie Meyton",
            id: "@jessie",
            supportingText: "@jessie",
            avatarUrl: "https://www.untitledui.com/images/avatars/jessie-meyton?fm=webp&q=80",
        },
    ];

    return (
        <Select
            isRequired
            label="Team member"
            tooltip="This is a tooltip"
            hint="This is a hint text to help user."
            placeholder="Select team member"
            icon={User01}
            items={items}
        >
            {(item) => (
                <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                    {item.label}
                </Select.Item>
            )}
        </Select>
    );
};

export const DotLeadingDemo = () => {
    const items: SelectItemType[] = [
        {
            label: "Phoenix Baker",
            id: "@phoenix",
            supportingText: "@phoenix",
            icon: <Dot className="size-2.5 text-fg-success-secondary" />,
        },
        {
            label: "Olivia Rhye",
            id: "@olivia",
            supportingText: "@olivia",
            icon: <Dot className="size-2.5 text-fg-success-secondary" />,
        },
        {
            label: "Lana Steiner",
            id: "@lana",
            supportingText: "@lana",
            icon: <Dot className="size-2.5 text-fg-success-secondary" />,
        },
        {
            label: "Demi Wilkinson",
            id: "@demi",
            supportingText: "@demi",
            icon: <Dot className="size-2.5 text-fg-success-secondary" />,
        },
        {
            label: "Candice Wu",
            id: "@candice",
            supportingText: "@candice",
            icon: <Dot className="size-2.5 text-fg-success-secondary" />,
        },
        {
            label: "Natali Craig",
            id: "@natali",
            supportingText: "@natali",
            icon: <Dot className="size-2.5 text-fg-success-secondary" />,
        },
        {
            label: "Abraham Baker",
            id: "@abraham",
            supportingText: "@abraham",
            icon: <Dot className="size-2.5 text-fg-success-secondary" />,
        },
        {
            label: "Adem Lane",
            id: "@adem",
            supportingText: "@adem",
            icon: <Dot className="size-2.5 text-fg-success-secondary" />,
        },
        {
            label: "Jackson Reed",
            id: "@jackson",
            supportingText: "@jackson",
            icon: <Dot className="size-2.5 text-fg-success-secondary" />,
        },
        {
            label: "Jessie Meyton",
            id: "@jessie",
            supportingText: "@jessie",
            icon: <Dot className="size-2.5 text-fg-success-secondary" />,
        },
    ];

    return (
        <Select
            isRequired
            label="Team member"
            tooltip="This is a tooltip"
            hint="This is a hint text to help user."
            placeholder="Select team member"
            icon={<Dot className="size-2.5 text-fg-success-secondary" />}
            items={items}
        >
            {(item) => (
                <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                    {item.label}
                </Select.Item>
            )}
        </Select>
    );
};

export const SearchDemo = () => {
    const items = [
        { label: "Phoenix Baker", id: "@phoenix", supportingText: "@phoenix" },
        { label: "Olivia Rhye", id: "@olivia", supportingText: "@olivia" },
        { label: "Lana Steiner", id: "@lana", supportingText: "@lana", disabled: true },
        { label: "Demi Wilkinson", id: "@demi", supportingText: "@demi" },
        { label: "Candice Wu", id: "@candice", supportingText: "@candice" },
        { label: "Natali Craig", id: "@natali", supportingText: "@natali" },
        { label: "Abraham Baker", id: "@abraham", supportingText: "@abraham" },
        { label: "Adem Lane", id: "@adem", supportingText: "@adem" },
        { label: "Jackson Reed", id: "@jackson", supportingText: "@jackson" },
        { label: "Jessie Meyton", id: "@jessie", supportingText: "@jessie" },
    ];

    return (
        <Select.ComboBox isRequired label="Search" tooltip="This is a tooltip" hint="This is a hint text to help user." placeholder="Search" items={items}>
            {(item) => (
                <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                    {item.label}
                </Select.Item>
            )}
        </Select.ComboBox>
    );
};

export const TagsDemo = () => {
    const selectedItems = useListData<SelectItemType>({
        initialItems: [],
    });

    const items: (SelectItemType & { disabled?: boolean })[] = [
        {
            label: "Phoenix Baker",
            id: "@phoenix",
            supportingText: "@phoenix",
            avatarUrl: "https://www.untitledui.com/images/avatars/phoenix-baker?fm=webp&q=80",
        },
        { label: "Olivia Rhye", id: "@olivia", supportingText: "@olivia", avatarUrl: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" },
        {
            label: "Lana Steiner",
            id: "@lana",
            supportingText: "@lana",
            disabled: true,
            avatarUrl: "https://www.untitledui.com/images/avatars/lana-steiner?fm=webp&q=80",
        },
        { label: "Demi Wilkinson", id: "@demi", supportingText: "@demi", avatarUrl: "https://www.untitledui.com/images/avatars/demi-wilkinson?fm=webp&q=80" },
        { label: "Candice Wu", id: "@candice", supportingText: "@candice", avatarUrl: "https://www.untitledui.com/images/avatars/candice-wu?fm=webp&q=80" },
        { label: "Natali Craig", id: "@natali", supportingText: "@natali", avatarUrl: "https://www.untitledui.com/images/avatars/natali-craig?fm=webp&q=80" },
        {
            label: "Abraham Baker",
            id: "@abraham",
            supportingText: "@abraham",
            avatarUrl: "https://www.untitledui.com/images/avatars/abraham-baker?fm=webp&q=80",
        },
        { label: "Adem Lane", id: "@adem", supportingText: "@adem", avatarUrl: "https://www.untitledui.com/images/avatars/adem-lane?fm=webp&q=80" },
        { label: "Jackson Reed", id: "@jackson", supportingText: "@jackson", avatarUrl: "https://www.untitledui.com/images/avatars/jackson-reed?fm=webp&q=80" },
        { label: "Jessie Meyton", id: "@jessie", supportingText: "@jessie", avatarUrl: "https://www.untitledui.com/images/avatars/jessie-meyton?fm=webp&q=80" },
    ];

    return (
        <TagSelect
            isRequired
            selectedItems={selectedItems}
            label="Search"
            tooltip="This is a tooltip"
            hint="This is a hint text to help user."
            placeholder="Search"
            items={items}
        >
            {(item) => (
                <TagSelect.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                    {item.label}
                </TagSelect.Item>
            )}
        </TagSelect>
    );
};

export const Native = () => (
    <NativeSelect
        label="Team members"
        options={[
            { label: "Wade Cooper", value: "@wadecooper" },
            { label: "Arlene Mccoy", value: "@arlenemccoy" },
            { label: "Devon Webb", value: "@devonwebb", disabled: true },
            { label: "Tom Cook", value: "@tomcook" },
            { label: "Tanya Fox", value: "@tanyafox" },
            { label: "Hellen Schmidt", value: "@hellenschmidt" },
            { label: "Caroline Schultz", value: "@carolineschultz" },
            { label: "Mason Heaney", value: "@masonheaney" },
            { label: "Claudie Smitham", value: "@claudiesmitham" },
            { label: "Emil Schaefer", value: "@emilschaefer" },
        ]}
        hint="This is a hint text to help user."
    />
);

export const Default = () => {
    return (
        <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-4">
                <Select
                    isRequired
                    label="Team member"
                    tooltip="This is a tooltip"
                    hint="This is a hint text to help user."
                    placeholder="Select team member"
                    items={items.map(({ avatarUrl: _, ...item }) => item)}
                >
                    {(item) => (
                        <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                            {item.label}
                        </Select.Item>
                    )}
                </Select>
                <Select
                    isDisabled
                    isRequired
                    label="Team member"
                    tooltip="This is a tooltip"
                    hint="This is a hint text to help user."
                    placeholder="Select team member"
                    items={items.map(({ avatarUrl: _, ...item }) => item)}
                >
                    {(item) => (
                        <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                            {item.label}
                        </Select.Item>
                    )}
                </Select>
            </div>
            <div className="flex flex-col gap-4">
                <Select
                    isRequired
                    size="md"
                    label="Team member"
                    tooltip="This is a tooltip"
                    hint="This is a hint text to help user."
                    placeholder="Select team member"
                    items={items.map(({ avatarUrl: _, ...item }) => item)}
                >
                    {(item) => (
                        <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                            {item.label}
                        </Select.Item>
                    )}
                </Select>
                <Select
                    isDisabled
                    isRequired
                    size="md"
                    label="Team member"
                    tooltip="This is a tooltip"
                    hint="This is a hint text to help user."
                    placeholder="Select team member"
                    items={items.map(({ avatarUrl: _, ...item }) => item)}
                >
                    {(item) => (
                        <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                            {item.label}
                        </Select.Item>
                    )}
                </Select>
            </div>
            <div className="flex flex-col gap-4">
                <Select
                    isRequired
                    size="lg"
                    label="Team member"
                    tooltip="This is a tooltip"
                    hint="This is a hint text to help user."
                    placeholder="Select team member"
                    items={items.map(({ avatarUrl: _, ...item }) => item)}
                >
                    {(item) => (
                        <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                            {item.label}
                        </Select.Item>
                    )}
                </Select>
                <Select
                    isDisabled
                    isRequired
                    size="lg"
                    label="Team member"
                    tooltip="This is a tooltip"
                    hint="This is a hint text to help user."
                    placeholder="Select team member"
                    items={items.map(({ avatarUrl: _, ...item }) => item)}
                >
                    {(item) => (
                        <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                            {item.label}
                        </Select.Item>
                    )}
                </Select>
            </div>
        </div>
    );
};

export const IconLeading = () => (
    <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
            <Select
                isRequired
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                icon={User01}
                items={items.map(({ avatarUrl: _, ...item }) => ({ ...item, icon: User01 }))}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
            <Select
                isRequired
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                icon={User01}
                isDisabled
                items={items.map(({ avatarUrl: _, ...item }) => ({ ...item, icon: User01 }))}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
        </div>
        <div className="flex flex-col gap-4">
            <Select
                size="md"
                isRequired
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                icon={User01}
                items={items.map(({ avatarUrl: _, ...item }) => ({ ...item, icon: User01 }))}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
            <Select
                size="md"
                isRequired
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                icon={User01}
                isDisabled
                items={items.map(({ avatarUrl: _, ...item }) => ({ ...item, icon: User01 }))}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
        </div>
        <div className="flex flex-col gap-4">
            <Select
                size="lg"
                isRequired
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                icon={User01}
                items={items.map(({ avatarUrl: _, ...item }) => ({ ...item, icon: User01 }))}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
            <Select
                size="lg"
                isRequired
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                icon={User01}
                isDisabled
                items={items.map(({ avatarUrl: _, ...item }) => ({ ...item, icon: User01 }))}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
        </div>
    </div>
);

export const AvatarLeading = () => (
    <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
            <Select
                isRequired
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                icon={User01}
                items={items}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
            <Select
                isRequired
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                icon={User01}
                isDisabled
                items={items}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
        </div>
        <div className="flex flex-col gap-4">
            <Select
                size="md"
                isRequired
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                icon={User01}
                items={items}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
            <Select
                size="md"
                isRequired
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                icon={User01}
                isDisabled
                items={items}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
        </div>
        <div className="flex flex-col gap-4">
            <Select
                size="lg"
                isRequired
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                icon={User01}
                items={items}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
            <Select
                size="lg"
                isRequired
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                icon={User01}
                isDisabled
                items={items}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
        </div>
    </div>
);

export const DotLeading = () => (
    <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
            <Select
                isRequired
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                icon={<Dot className="size-2 text-fg-success-secondary" />}
                items={items.map(({ avatarUrl: _, ...item }) => ({
                    ...item,
                    icon: <Dot className="size-2 text-fg-success-secondary" />,
                }))}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
            <Select
                isDisabled
                isRequired
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                icon={<Dot className="size-2 text-fg-success-secondary" />}
                items={items.map(({ avatarUrl: _, ...item }) => ({
                    ...item,
                    icon: <Dot className="size-2 text-fg-success-secondary" />,
                }))}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
        </div>
        <div className="flex flex-col gap-4">
            <Select
                size="md"
                isRequired
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                icon={<Dot className="size-2.5 text-fg-success-secondary" />}
                items={items.map(({ avatarUrl: _, ...item }) => ({
                    ...item,
                    icon: <Dot className="size-2.5 text-fg-success-secondary" />,
                }))}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
            <Select
                isDisabled
                isRequired
                size="md"
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                icon={<Dot className="size-2.5 text-fg-success-secondary" />}
                items={items.map(({ avatarUrl: _, ...item }) => ({
                    ...item,
                    icon: <Dot className="size-2.5 text-fg-success-secondary" />,
                }))}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
        </div>
        <div className="flex flex-col gap-4">
            <Select
                size="lg"
                isRequired
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                icon={<Dot className="size-2.5 text-fg-success-secondary" />}
                items={items.map(({ avatarUrl: _, ...item }) => ({
                    ...item,
                    icon: <Dot className="size-2.5 text-fg-success-secondary" />,
                }))}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
            <Select
                isDisabled
                isRequired
                size="lg"
                label="Team member"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Select team member"
                icon={<Dot className="size-2.5 text-fg-success-secondary" />}
                items={items.map(({ avatarUrl: _, ...item }) => ({
                    ...item,
                    icon: <Dot className="size-2.5 text-fg-success-secondary" />,
                }))}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select>
        </div>
    </div>
);

export const Search = () => (
    <div className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
            <Select.ComboBox
                isRequired
                label="Search"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Search"
                items={items.map(({ avatarUrl: _, ...item }) => item)}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select.ComboBox>
            <Select.ComboBox
                isRequired
                label="Search"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Search"
                isDisabled
                items={items.map(({ avatarUrl: _, ...item }) => item)}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select.ComboBox>
        </div>
        <div className="flex flex-col gap-4">
            <Select.ComboBox
                size="md"
                isRequired
                label="Search"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Search"
                items={items.map(({ avatarUrl: _, ...item }) => item)}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select.ComboBox>
            <Select.ComboBox
                size="md"
                isRequired
                label="Search"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Search"
                isDisabled
                items={items.map(({ avatarUrl: _, ...item }) => item)}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select.ComboBox>
        </div>
        <div className="flex flex-col gap-4">
            <Select.ComboBox
                size="lg"
                isRequired
                label="Search"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Search"
                items={items.map(({ avatarUrl: _, ...item }) => item)}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select.ComboBox>
            <Select.ComboBox
                size="lg"
                isRequired
                label="Search"
                tooltip="This is a tooltip"
                hint="This is a hint text to help user."
                placeholder="Search"
                isDisabled
                items={items.map(({ avatarUrl: _, ...item }) => item)}
            >
                {(item) => (
                    <Select.Item id={item.id} supportingText={item.supportingText} isDisabled={item.isDisabled} icon={item.icon} avatarUrl={item.avatarUrl}>
                        {item.label}
                    </Select.Item>
                )}
            </Select.ComboBox>
        </div>
    </div>
);

export const Tags = () => {
    const selectedItems = useListData<SelectItemType>({
        initialItems: [],
    });

    return (
        <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-4">
                <TagSelect
                    shortcut
                    selectedItems={selectedItems}
                    isRequired
                    label="Search"
                    tooltip="This is a tooltip"
                    hint="This is a hint text to help user."
                    placeholder="Search"
                    items={items}
                >
                    {(item) => (
                        <TagSelect.Item
                            id={item.id}
                            supportingText={item.supportingText}
                            isDisabled={item.isDisabled}
                            icon={item.icon}
                            avatarUrl={item.avatarUrl}
                        >
                            {item.label}
                        </TagSelect.Item>
                    )}
                </TagSelect>

                <TagSelect
                    shortcut
                    selectedItems={selectedItems}
                    isRequired
                    label="Search"
                    tooltip="This is a tooltip"
                    hint="This is a hint text to help user."
                    placeholder="Search"
                    items={items}
                    isDisabled
                >
                    {(item) => (
                        <TagSelect.Item
                            id={item.id}
                            supportingText={item.supportingText}
                            isDisabled={item.isDisabled}
                            icon={item.icon}
                            avatarUrl={item.avatarUrl}
                        >
                            {item.label}
                        </TagSelect.Item>
                    )}
                </TagSelect>
            </div>
            <div className="flex flex-col gap-4">
                <TagSelect
                    shortcut
                    selectedItems={selectedItems}
                    size="md"
                    isRequired
                    label="Search"
                    tooltip="This is a tooltip"
                    hint="This is a hint text to help user."
                    items={items}
                    placeholder="Search"
                >
                    {(item) => (
                        <TagSelect.Item
                            id={item.id}
                            supportingText={item.supportingText}
                            isDisabled={item.isDisabled}
                            icon={item.icon}
                            avatarUrl={item.avatarUrl}
                        >
                            {item.label}
                        </TagSelect.Item>
                    )}
                </TagSelect>
                <TagSelect
                    shortcut
                    selectedItems={selectedItems}
                    size="md"
                    isRequired
                    label="Search"
                    tooltip="This is a tooltip"
                    hint="This is a hint text to help user."
                    placeholder="Search"
                    items={items}
                    isDisabled
                >
                    {(item) => (
                        <TagSelect.Item
                            id={item.id}
                            supportingText={item.supportingText}
                            isDisabled={item.isDisabled}
                            icon={item.icon}
                            avatarUrl={item.avatarUrl}
                        >
                            {item.label}
                        </TagSelect.Item>
                    )}
                </TagSelect>
            </div>
            <div className="flex flex-col gap-4">
                <TagSelect
                    shortcut
                    selectedItems={selectedItems}
                    size="lg"
                    isRequired
                    label="Search"
                    tooltip="This is a tooltip"
                    hint="This is a hint text to help user."
                    items={items}
                    placeholder="Search"
                >
                    {(item) => (
                        <TagSelect.Item
                            id={item.id}
                            supportingText={item.supportingText}
                            isDisabled={item.isDisabled}
                            icon={item.icon}
                            avatarUrl={item.avatarUrl}
                        >
                            {item.label}
                        </TagSelect.Item>
                    )}
                </TagSelect>
                <TagSelect
                    shortcut
                    selectedItems={selectedItems}
                    size="lg"
                    isRequired
                    label="Search"
                    tooltip="This is a tooltip"
                    hint="This is a hint text to help user."
                    placeholder="Search"
                    items={items}
                    isDisabled
                >
                    {(item) => (
                        <TagSelect.Item
                            id={item.id}
                            supportingText={item.supportingText}
                            isDisabled={item.isDisabled}
                            icon={item.icon}
                            avatarUrl={item.avatarUrl}
                        >
                            {item.label}
                        </TagSelect.Item>
                    )}
                </TagSelect>
            </div>
        </div>
    );
};

const teamItems: SelectItemType[] = [
    { id: "engineering", label: "Engineering", supportingText: "12 users" },
    { id: "design", label: "Design", supportingText: "10 users" },
    { id: "product", label: "Product", supportingText: "6 users" },
    { id: "marketing", label: "Marketing", supportingText: "8 users" },
    { id: "sales", label: "Sales", supportingText: "12 users" },
    { id: "customer-success", label: "Customer Success", supportingText: "4 users" },
    { id: "operations", label: "Operations", supportingText: "2 users" },
    { id: "finance", label: "Finance", supportingText: "2 users" },
];

const getSelectedUserCount = (selectedKeys: Selection) => {
    if (selectedKeys === "all") return teamItems.reduce((sum, t) => sum + parseInt(t.supportingText?.split(" ")[0] || "0"), 0);
    const selected = teamItems.filter((t) => (selectedKeys as Set<string | number>).has(t.id));
    return selected.reduce((sum, t) => sum + parseInt(t.supportingText?.split(" ")[0] || "0"), 0);
};

export const MultiSelectSmDemo = () => {
    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(["design", "product"]));

    return (
        <MultiSelect
            isRequired
            size="sm"
            label="Teams"
            tooltip="This is a tooltip"
            hint="This is a hint text to help user."
            placeholder="Select teams"
            items={teamItems}
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
            supportingText={\`\${getSelectedUserCount(selectedKeys)} users\`}
            onReset={() => setSelectedKeys(new Set())}
            onSelectAll={() => setSelectedKeys(new Set(teamItems.map((t) => t.id)))}
        >
            {(item) => (
                <MultiSelect.Item id={item.id} supportingText={item.supportingText} selectionIndicator="checkbox" selectionIndicatorAlign="left">
                    {item.label}
                </MultiSelect.Item>
            )}
        </MultiSelect>
    );
};

export const MultiSelectMdDemo = () => {
    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(["design", "product"]));

    return (
        <MultiSelect
            isRequired
            size="md"
            label="Teams"
            tooltip="This is a tooltip"
            hint="This is a hint text to help user."
            placeholder="Select teams"
            items={teamItems}
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
            supportingText={\`\${getSelectedUserCount(selectedKeys)} users\`}
            onReset={() => setSelectedKeys(new Set())}
            onSelectAll={() => setSelectedKeys(new Set(teamItems.map((t) => t.id)))}
        >
            {(item) => (
                <MultiSelect.Item id={item.id} supportingText={item.supportingText} selectionIndicator="checkbox" selectionIndicatorAlign="left">
                    {item.label}
                </MultiSelect.Item>
            )}
        </MultiSelect>
    );
};

export const MultiSelectLgDemo = () => {
    const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set(["design", "product"]));

    return (
        <MultiSelect
            isRequired
            size="lg"
            label="Teams"
            tooltip="This is a tooltip"
            hint="This is a hint text to help user."
            placeholder="Select teams"
            items={teamItems}
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
            supportingText={\`\${getSelectedUserCount(selectedKeys)} users\`}
            onReset={() => setSelectedKeys(new Set())}
            onSelectAll={() => setSelectedKeys(new Set(teamItems.map((t) => t.id)))}
        >
            {(item) => (
                <MultiSelect.Item id={item.id} supportingText={item.supportingText} selectionIndicator="checkbox" selectionIndicatorAlign="left">
                    {item.label}
                </MultiSelect.Item>
            )}
        </MultiSelect>
    );
};

export const MultiSelectDisabledDemo = () => (
    <MultiSelect
        size="sm"
        label="Teams"
        tooltip="This is a tooltip"
        hint="This is a hint text to help user."
        placeholder="Select teams"
        items={teamItems}
        isDisabled
    >
        {(item) => (
            <MultiSelect.Item id={item.id} supportingText={item.supportingText} selectionIndicator="checkbox" selectionIndicatorAlign="left">
                {item.label}
            </MultiSelect.Item>
        )}
    </MultiSelect>
);
`;export{Sn as a,On as c,Tn as d,Cn as f,vn as i,Dn as l,wn as m,xn as n,bn as o,yn as p,_n as r,kn as s,An as t,En as u};