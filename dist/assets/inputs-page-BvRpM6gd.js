import{o as e,t}from"./jsx-runtime-9YgKe2Eq.js";import{t as n}from"./react-JjZAc9W2.js";import{t as r}from"./react-dom-CtFpqvdQ.js";import{t as i}from"./AlertCircle-BGRv-y27.js";import{V as a,g as o,h as s,t as c}from"./input-date-Casnozfg.js";import{t as l}from"./CheckCircle-CYxi1Lxi.js";import{t as u}from"./Check-DjWRQiOq.js";import{t as d}from"./ChevronDown-CAS-0PZj.js";import{t as f}from"./ChevronUp-D4njYxMb.js";import{t as p}from"./Copy01-C41BAV69.js";import{n as m,r as h,t as g}from"./input-lKd3VcB0.js";import{t as _}from"./HelpCircle-Dha6L9oG.js";import{t as v}from"./InfoCircle-DABCF6ev.js";import{t as y}from"./Mail01-DhIDBIGh.js";import{t as b}from"./Minus-BthCQodb.js";import{t as x}from"./Plus-ImW2VinK.js";import{n as S,t as C}from"./cx-CmQqEIOd.js";import{C as w,D as T,E,G as D,N as O,S as k,T as A,V as j,X as M,Y as N,b as P,c as ee,ct as F,et as te,ot as ne,q as re,r as ie,tt as I,x as L}from"./useFocusRing-4APusEXv.js";import{I as R}from"./SelectionManager-CfT0IipC.js";import{d as ae}from"./Separator-Czodg5iP.js";import{t as oe}from"./useFormReset-CwJzp0RQ.js";import{t as se}from"./useControlledState-CNhbt48L.js";import{n as z,t as B}from"./number-B_55jJ2V.js";import{n as V,r as ce,t as le}from"./Button-jZwNXweQ.js";import{t as ue}from"./context-KcobXXcF.js";import{t as de}from"./NumberFormatter-B3_vALwB.js";import{t as fe}from"./useNumberFormatter-Dry1IMsy.js";import{n as pe,t as me}from"./tooltip-RmsM74b4.js";import{a as he,c as ge,n as _e,t as ve}from"./Form-ByWIpLCz.js";import{a as ye,i as be,n as H,r as xe,t as Se}from"./Input-CGJWwTkN.js";import{t as Ce}from"./Label-gDPjsdJN.js";import{n as U,r as W,t as we}from"./tags-BEQmwJJ9.js";import{n as Te}from"./Text-p6OihxEA.js";import{t as G}from"./preview-code-section-f81Kwt5b.js";import{t as K}from"./button-C8hO_E61.js";import{n as q,t as J}from"./label-BViWFIap.js";import{t as Ee}from"./select-native-CLPsp-nx.js";import{r as De,t as Oe}from"./pin-input.demo-CUGBrOzR.js";var Y=e(n(),1),X=({size:e=24,color:t=`currentColor`,...n})=>Y.createElement(`svg`,{viewBox:`0 0 24 24`,width:e,height:e,stroke:t,strokeWidth:`2`,fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`,"aria-hidden":`true`,...n},Y.createElement(`path`,{d:`M17 11V8A5 5 0 0 0 7 8v3m1.8 10h6.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 18.72 20 17.88 20 16.2v-.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C17.72 11 16.88 11 15.2 11H8.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C4 13.28 4 14.12 4 15.8v.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C6.28 21 7.12 21 8.8 21Z`}));X.displayName=`Lock03`;function ke(e,t){let{onScroll:n,isDisabled:r}=e,i=(0,Y.useCallback)(e=>{e.ctrlKey||(e.preventDefault(),e.stopPropagation(),n&&n({deltaX:e.deltaX,deltaY:e.deltaY}))},[n]);R(t,`wheel`,r?void 0:i)}function Ae(){return typeof window<`u`&&window.InputEvent&&typeof InputEvent.prototype.getTargetRanges==`function`}function je(e,t,n){let r=O(e=>{let r=n.current;if(!r)return;let i=null;switch(e.inputType){case`historyUndo`:case`historyRedo`:return;case`insertLineBreak`:return;case`deleteContent`:case`deleteByCut`:case`deleteByDrag`:i=r.value.slice(0,r.selectionStart)+r.value.slice(r.selectionEnd);break;case`deleteContentForward`:i=r.selectionEnd===r.selectionStart?r.value.slice(0,r.selectionStart)+r.value.slice(r.selectionEnd+1):r.value.slice(0,r.selectionStart)+r.value.slice(r.selectionEnd);break;case`deleteContentBackward`:i=r.selectionEnd===r.selectionStart?r.value.slice(0,r.selectionStart-1)+r.value.slice(r.selectionStart):r.value.slice(0,r.selectionStart)+r.value.slice(r.selectionEnd);break;case`deleteSoftLineBackward`:case`deleteHardLineBackward`:i=r.value.slice(r.selectionStart);break;default:e.data!=null&&(i=r.value.slice(0,r.selectionStart)+e.data+r.value.slice(r.selectionEnd));break}(i==null||!t.validate(i))&&e.preventDefault()});(0,Y.useEffect)(()=>{if(!Ae()||!n.current)return;let e=n.current;return e.addEventListener(`beforeinput`,r,!1),()=>{e.removeEventListener(`beforeinput`,r,!1)}},[n]);let i=Ae()?null:e=>{let n=I(e).value.slice(0,I(e).selectionStart)+e.data+I(e).value.slice(I(e).selectionEnd);t.validate(n)||e.preventDefault()},{labelProps:a,inputProps:o,descriptionProps:s,errorMessageProps:c,...l}=ye(e,n),u=(0,Y.useRef)(null);return{inputProps:M(o,{onBeforeInput:i,onCompositionStart(){let{value:e,selectionStart:t,selectionEnd:r}=n.current;u.current={value:e,selectionStart:t,selectionEnd:r}},onCompositionEnd(){if(n.current&&!t.validate(n.current.value)){let{value:e,selectionStart:r,selectionEnd:i}=u.current;n.current.value=e,n.current.setSelectionRange(r,i),t.setInputValue(e)}}}),labelProps:a,descriptionProps:s,errorMessageProps:c,...l}}function Me(e){let{minValue:t,maxValue:n,step:r,formatOptions:i,value:a,defaultValue:s=NaN,onChange:c,locale:l,isDisabled:u,isReadOnly:d}=e;a===null&&(a=NaN),a!==void 0&&!isNaN(a)&&(a=r!==void 0&&!isNaN(r)?z(a,t,n,r):B(a,t,n)),isNaN(s)||(s=r!==void 0&&!isNaN(r)?z(s,t,n,r):B(s,t,n));let[f,p]=se(a,isNaN(s)?NaN:s,c),[m]=(0,Y.useState)(f),[h,g]=(0,Y.useState)(()=>isNaN(f)?``:new de(l,i).format(f)),_=(0,Y.useMemo)(()=>new o(l,i),[l,i]),v=(0,Y.useMemo)(()=>_.getNumberingSystem(h),[_,h]),y=(0,Y.useMemo)(()=>new de(l,{...i,numberingSystem:v}),[l,i,v]),b=(0,Y.useMemo)(()=>y.resolvedOptions(),[y]),x=(0,Y.useCallback)(e=>isNaN(e)||e===null?``:y.format(e),[y]),S=ge({...e,value:f}),C=r!==void 0&&!isNaN(r)?r:1;b.style===`percent`&&(r===void 0||isNaN(r))&&(C=.01);let[w,T]=(0,Y.useState)(f),[E,D]=(0,Y.useState)(l),[O,k]=(0,Y.useState)(i);(!Object.is(f,w)||l!==E||i!==O)&&(g(x(f)),T(f),D(l),k(i));let A=(0,Y.useMemo)(()=>_.parse(h),[_,h]),j=e=>{let i=e===void 0?h:e,o=A;if(e!==void 0&&(o=_.parse(i)),!i.length){p(NaN),g(a===void 0?``:x(f));return}if(isNaN(o)){g(x(f));return}let s;s=r===void 0||isNaN(r)?B(o,t,n):z(o,t,n,r),s=_.parse(x(s)),p(s),g(x(a===void 0?s:f)),S.commitValidation()},M=(e,r=0)=>{let i=A;if(isNaN(i))return z(isNaN(r)?0:r,t,n,C);{let r=z(i,t,n,C);return e===`+`&&r>i||e===`-`&&r<i?r:z(Ne(e,i,C),t,n,C)}},N=()=>{let e=M(`+`,t);e===f&&g(x(e)),p(e),S.commitValidation()},P=()=>{let e=M(`-`,n);e===f&&g(x(e)),p(e),S.commitValidation()},ee=()=>{n!=null&&(p(z(n,t,n,C)),S.commitValidation())},F=()=>{t!=null&&(p(t),S.commitValidation())},te=(0,Y.useMemo)(()=>!u&&!d&&(isNaN(A)||n===void 0||isNaN(n)||z(A,t,n,C)>A||Ne(`+`,A,C)<=n),[u,d,t,n,C,A]),ne=(0,Y.useMemo)(()=>!u&&!d&&(isNaN(A)||t===void 0||isNaN(t)||z(A,t,n,C)<A||Ne(`-`,A,C)>=t),[u,d,t,n,C,A]),re=e=>_.isValidPartialNumber(e,t,n);return{...S,validate:re,increment:N,incrementToMax:ee,decrement:P,decrementToMin:F,canIncrement:te,canDecrement:ne,minValue:t,maxValue:n,numberValue:A,defaultNumberValue:isNaN(s)?m:s,setNumberValue:p,setInputValue:g,inputValue:h,commit:j}}function Ne(e,t,n){let r=e===`+`?t+n:t-n;if(t%1!=0||n%1!=0){let i=t.toString().split(`.`),a=n.toString().split(`.`),o=i[1]&&i[1].length||0,s=a[1]&&a[1].length||0,c=10**Math.max(o,s);t=Math.round(t*c),n=Math.round(n*c),r=e===`+`?t+n:t-n,r/=c}return r}var Pe={};Pe={decrease:e=>`\u{62E}\u{641}\u{636} ${e.fieldLabel}`,increase:e=>`\u{632}\u{64A}\u{627}\u{62F}\u{629} ${e.fieldLabel}`,numberField:`حقل رقمي`};var Fe={};Fe={decrease:e=>`\u{41D}\u{430}\u{43C}\u{430}\u{43B}\u{44F}\u{432}\u{430}\u{43D}\u{435} ${e.fieldLabel}`,increase:e=>`\u{423}\u{441}\u{438}\u{43B}\u{432}\u{430}\u{43D}\u{435} ${e.fieldLabel}`,numberField:`Номер на полето`};var Ie={};Ie={decrease:e=>`Sn\xed\u{17E}it ${e.fieldLabel}`,increase:e=>`Zv\xfd\u{161}it ${e.fieldLabel}`,numberField:`Číselné pole`};var Le={};Le={decrease:e=>`Reducer ${e.fieldLabel}`,increase:e=>`\xd8g ${e.fieldLabel}`,numberField:`Talfelt`};var Re={};Re={decrease:e=>`${e.fieldLabel} verringern`,increase:e=>`${e.fieldLabel} erh\xf6hen`,numberField:`Nummernfeld`};var ze={};ze={decrease:e=>`\u{39C}\u{3B5}\u{3AF}\u{3C9}\u{3C3}\u{3B7} ${e.fieldLabel}`,increase:e=>`\u{391}\u{3CD}\u{3BE}\u{3B7}\u{3C3}\u{3B7} ${e.fieldLabel}`,numberField:`Πεδίο αριθμού`};var Be={};Be={decrease:e=>`Decrease ${e.fieldLabel}`,increase:e=>`Increase ${e.fieldLabel}`,numberField:`Number field`};var Ve={};Ve={decrease:e=>`Reducir ${e.fieldLabel}`,increase:e=>`Aumentar ${e.fieldLabel}`,numberField:`Campo de número`};var He={};He={decrease:e=>`V\xe4henda ${e.fieldLabel}`,increase:e=>`Suurenda ${e.fieldLabel}`,numberField:`Numbri väli`};var Ue={};Ue={decrease:e=>`V\xe4henn\xe4 ${e.fieldLabel}`,increase:e=>`Lis\xe4\xe4 ${e.fieldLabel}`,numberField:`Numerokenttä`};var We={};We={decrease:e=>`Diminuer ${e.fieldLabel}`,increase:e=>`Augmenter ${e.fieldLabel}`,numberField:`Champ de nombre`};var Ge={};Ge={decrease:e=>`\u{5D4}\u{5E7}\u{5D8}\u{5DF} ${e.fieldLabel}`,increase:e=>`\u{5D4}\u{5D2}\u{5D3}\u{5DC} ${e.fieldLabel}`,numberField:`שדה מספר`};var Ke={};Ke={decrease:e=>`Smanji ${e.fieldLabel}`,increase:e=>`Pove\u{107}aj ${e.fieldLabel}`,numberField:`Polje broja`};var qe={};qe={decrease:e=>`${e.fieldLabel} cs\xf6kkent\xe9se`,increase:e=>`${e.fieldLabel} n\xf6vel\xe9se`,numberField:`Számmező`};var Je={};Je={decrease:e=>`Riduci ${e.fieldLabel}`,increase:e=>`Aumenta ${e.fieldLabel}`,numberField:`Campo numero`};var Ye={};Ye={decrease:e=>`${e.fieldLabel}\u{3092}\u{7E2E}\u{5C0F}`,increase:e=>`${e.fieldLabel}\u{3092}\u{62E1}\u{5927}`,numberField:`数値フィールド`};var Xe={};Xe={decrease:e=>`${e.fieldLabel} \u{AC10}\u{C18C}`,increase:e=>`${e.fieldLabel} \u{C99D}\u{AC00}`,numberField:`번호 필드`};var Ze={};Ze={decrease:e=>`Suma\u{17E}inti ${e.fieldLabel}`,increase:e=>`Padidinti ${e.fieldLabel}`,numberField:`Numerio laukas`};var Qe={};Qe={decrease:e=>`Samazin\u{101}\u{161}ana ${e.fieldLabel}`,increase:e=>`Palielin\u{101}\u{161}ana ${e.fieldLabel}`,numberField:`Skaitļu lauks`};var $e={};$e={decrease:e=>`Reduser ${e.fieldLabel}`,increase:e=>`\xd8k ${e.fieldLabel}`,numberField:`Tallfelt`};var et={};et={decrease:e=>`${e.fieldLabel} verlagen`,increase:e=>`${e.fieldLabel} verhogen`,numberField:`Getalveld`};var tt={};tt={decrease:e=>`Zmniejsz ${e.fieldLabel}`,increase:e=>`Zwi\u{119}ksz ${e.fieldLabel}`,numberField:`Pole numeru`};var nt={};nt={decrease:e=>`Diminuir ${e.fieldLabel}`,increase:e=>`Aumentar ${e.fieldLabel}`,numberField:`Campo de número`};var rt={};rt={decrease:e=>`Diminuir ${e.fieldLabel}`,increase:e=>`Aumentar ${e.fieldLabel}`,numberField:`Campo numérico`};var it={};it={decrease:e=>`Sc\u{103}dere ${e.fieldLabel}`,increase:e=>`Cre\u{219}tere ${e.fieldLabel}`,numberField:`Câmp numeric`};var at={};at={decrease:e=>`\u{423}\u{43C}\u{435}\u{43D}\u{44C}\u{448}\u{435}\u{43D}\u{438}\u{435} ${e.fieldLabel}`,increase:e=>`\u{423}\u{432}\u{435}\u{43B}\u{438}\u{447}\u{435}\u{43D}\u{438}\u{435} ${e.fieldLabel}`,numberField:`Числовое поле`};var ot={};ot={decrease:e=>`Zn\xed\u{17E}i\u{165} ${e.fieldLabel}`,increase:e=>`Zv\xfd\u{161}i\u{165} ${e.fieldLabel}`,numberField:`Číselné pole`};var st={};st={decrease:e=>`Upadati ${e.fieldLabel}`,increase:e=>`Pove\u{10D}ajte ${e.fieldLabel}`,numberField:`Številčno polje`};var ct={};ct={decrease:e=>`Smanji ${e.fieldLabel}`,increase:e=>`Pove\u{107}aj ${e.fieldLabel}`,numberField:`Polje broja`};var lt={};lt={decrease:e=>`Minska ${e.fieldLabel}`,increase:e=>`\xd6ka ${e.fieldLabel}`,numberField:`Nummerfält`};var ut={};ut={decrease:e=>`${e.fieldLabel} azalt`,increase:e=>`${e.fieldLabel} artt\u{131}r`,numberField:`Sayı alanı`};var dt={};dt={decrease:e=>`\u{417}\u{43C}\u{435}\u{43D}\u{448}\u{438}\u{442}\u{438} ${e.fieldLabel}`,increase:e=>`\u{417}\u{431}\u{456}\u{43B}\u{44C}\u{448}\u{438}\u{442}\u{438} ${e.fieldLabel}`,numberField:`Поле номера`};var ft={};ft={decrease:e=>`\u{964D}\u{4F4E} ${e.fieldLabel}`,increase:e=>`\u{63D0}\u{9AD8} ${e.fieldLabel}`,numberField:`数字字段`};var pt={};pt={decrease:e=>`\u{7E2E}\u{5C0F} ${e.fieldLabel}`,increase:e=>`\u{653E}\u{5927} ${e.fieldLabel}`,numberField:`數字欄位`};var mt={};mt={"ar-AE":Pe,"bg-BG":Fe,"cs-CZ":Ie,"da-DK":Le,"de-DE":Re,"el-GR":ze,"en-US":Be,"es-ES":Ve,"et-EE":He,"fi-FI":Ue,"fr-FR":We,"he-IL":Ge,"hr-HR":Ke,"hu-HU":qe,"it-IT":Je,"ja-JP":Ye,"ko-KR":Xe,"lt-LT":Ze,"lv-LV":Qe,"nb-NO":$e,"nl-NL":et,"pl-PL":tt,"pt-BR":nt,"pt-PT":rt,"ro-RO":it,"ru-RU":at,"sk-SK":ot,"sl-SI":st,"sr-SP":ct,"sv-SE":lt,"tr-TR":ut,"uk-UA":dt,"zh-CN":ft,"zh-TW":pt};var ht=e(r(),1);function gt(e){return e&&e.__esModule?e.default:e}function _t(e,t,n){let{id:r,decrementAriaLabel:i,incrementAriaLabel:a,isDisabled:o,isReadOnly:c,isRequired:l,minValue:u,maxValue:d,autoFocus:f,label:p,formatOptions:m,onBlur:h=()=>{},onFocus:g,onFocusChange:_,onKeyDown:v,onKeyUp:y,description:b,errorMessage:x,isWheelDisabled:S,...C}=e,{increment:w,incrementToMax:T,decrement:E,decrementToMin:O,numberValue:k,inputValue:A,commit:P,commitValidation:L}=t,R=ae(gt(mt),`@react-aria/numberfield`),se=(0,Y.useCallback)(()=>{let e=n.current?.value??``;(0,ht.flushSync)(()=>{P()}),n.current?.value!==e&&ce(n.current?.value??``,`assertive`)},[P,n]),z=F(r),{focusProps:B}=ee({onBlur(){se()}}),V=fe(m),le=(0,Y.useMemo)(()=>V.resolvedOptions(),[V]),ue=fe({...m,currencySign:void 0}),{spinButtonProps:de,incrementButtonProps:pe,decrementButtonProps:me}=s({isDisabled:o,isReadOnly:c,isRequired:l,maxValue:d,minValue:u,onIncrement:w,onIncrementToMax:T,onDecrement:E,onDecrementToMin:O,value:k,textValue:(0,Y.useMemo)(()=>isNaN(k)?``:ue.format(k),[ue,k])}),[ge,_e]=(0,Y.useState)(!1),{focusWithinProps:ve}=ie({isDisabled:o,onFocusWithinChange:_e});ke({onScroll:(0,Y.useCallback)(e=>{Math.abs(e.deltaY)<=Math.abs(e.deltaX)||(e.deltaY>0?w():e.deltaY<0&&E())},[E,w]),isDisabled:S||o||c||!ge},n);let ye=(le.maximumFractionDigits??0)>0,be=t.minValue===void 0||isNaN(t.minValue)||t.minValue<0,H=`numeric`;j()?be?H=`text`:ye&&(H=`decimal`):D()&&(be?H=`numeric`:ye&&(H=`decimal`));let xe=e=>{t.validate(e)&&t.setInputValue(e)},Se=t=>{var n;(n=e.onPaste)==null||n.call(e,t);let r=I(t);if(r&&(r.selectionEnd??-1)-(r.selectionStart??0)===r.value.length){var i,a;t.preventDefault(),P(((a=t.clipboardData)==null||(i=a.getData)==null?void 0:i.call(a,`text/plain`)?.trim())??``)}},Ce=N(e),U=(0,Y.useCallback)(e=>{e.nativeEvent.isComposing||(e.key===`Enter`?(P(),L()):e.continuePropagation())},[P,L]),{isInvalid:W,validationErrors:we,validationDetails:Te}=t.displayValidation,{labelProps:G,inputProps:K,descriptionProps:q,errorMessageProps:J}=je({...C,...Ce,name:void 0,form:void 0,label:p,autoFocus:f,isDisabled:o,isReadOnly:c,isRequired:l,validate:void 0,[he]:t,value:A,defaultValue:`!`,autoComplete:`off`,"aria-label":e[`aria-label`]||void 0,"aria-labelledby":e[`aria-labelledby`]||void 0,id:z,type:`text`,inputMode:H,onChange:xe,onBlur:h,onFocus:g,onFocusChange:_,onKeyDown:(0,Y.useMemo)(()=>ne(U,v),[U,v]),onKeyUp:y,onPaste:Se,description:b,errorMessage:x},t,n);oe(n,t.defaultNumberValue,t.setNumberValue);let Ee=M(de,B,K,{role:null,"aria-roledescription":re()?null:R.format(`numberField`),"aria-valuemax":null,"aria-valuemin":null,"aria-valuenow":null,"aria-valuetext":null,autoCorrect:`off`,spellCheck:`false`});e.validationBehavior===`native`&&(Ee[`aria-required`]=void 0);let De=e=>{var t;te()!==n.current&&(e.pointerType===`mouse`?(t=n.current)==null||t.focus():e.target.focus())},Oe=e[`aria-label`]||(typeof e.label==`string`?e.label:``),X;Oe||(X=e.label==null?e[`aria-labelledby`]:G.id);let Ae=F(),Me=F(),Ne=M(pe,{"aria-label":a||R.format(`increase`,{fieldLabel:Oe}).trim(),id:X&&!a?Ae:null,"aria-labelledby":X&&!a?`${Ae} ${X}`:null,"aria-controls":z,excludeFromTabOrder:!0,preventFocusOnPress:!0,allowFocusWhenDisabled:!0,isDisabled:!t.canIncrement,onPressStart:De}),Pe=M(me,{"aria-label":i||R.format(`decrease`,{fieldLabel:Oe}).trim(),id:X&&!i?Me:null,"aria-labelledby":X&&!i?`${Me} ${X}`:null,"aria-controls":z,excludeFromTabOrder:!0,preventFocusOnPress:!0,allowFocusWhenDisabled:!0,isDisabled:!t.canDecrement,onPressStart:De});return{groupProps:{...ve,role:`group`,"aria-disabled":o,"aria-invalid":W?`true`:void 0},labelProps:G,inputProps:Ee,incrementButtonProps:Ne,decrementButtonProps:Pe,errorMessageProps:J,descriptionProps:q,isInvalid:W,validationErrors:we,validationDetails:Te}}var vt=(0,Y.createContext)(null),yt=(0,Y.createContext)(null),bt=(0,Y.forwardRef)(function(e,t){[e,t]=L(e,t,vt);let{validationBehavior:n}=T(ve)||{},r=e.validationBehavior??n??`native`,{locale:i}=ue(),a=Me({...e,locale:i,validationBehavior:r}),o=(0,Y.useRef)(null),[s,c]=w(!e[`aria-label`]&&!e[`aria-labelledby`]),{labelProps:l,groupProps:u,inputProps:d,incrementButtonProps:f,decrementButtonProps:p,descriptionProps:m,errorMessageProps:h,...g}=_t({...E(e),label:c,validationBehavior:r},a,o),_=k({...e,values:{state:a,isDisabled:e.isDisabled||!1,isInvalid:g.isInvalid||!1,isRequired:e.isRequired||!1},defaultClassName:`react-aria-NumberField`}),v=N(e,{global:!0});return delete v.id,Y.createElement(P,{values:[[yt,a],[be,u],[Se,{...d,ref:o}],[Ce,{...l,ref:s}],[le,{slots:{increment:f,decrement:p}}],[Te,{slots:{description:m,errorMessage:h}}],[_e,g]]},Y.createElement(A.div,{...v,..._,ref:t,slot:e.slot||void 0,"data-disabled":e.isDisabled||void 0,"data-required":e.isRequired||void 0,"data-invalid":g.isInvalid||void 0}),e.name&&Y.createElement(`input`,{type:`hidden`,name:e.name,form:e.form,value:isNaN(a.numberValue)?``:a.numberValue,disabled:e.isDisabled||void 0}))}),Z=t(),xt=({children:e,...t})=>(0,Z.jsx)(`span`,{...t,className:C(`flex text-tertiary shadow-xs ring-1 ring-border-primary ring-inset`,`in-data-input-wrapper:in-data-leading:-mr-px in-data-input-wrapper:in-data-leading:rounded-l-lg`,`in-data-input-wrapper:in-data-trailing:-ml-px in-data-input-wrapper:in-data-trailing:rounded-r-lg`,`px-3 py-2 text-md`,`in-data-input-wrapper:in-data-[input-size=sm]:px-3 in-data-input-wrapper:in-data-[input-size=sm]:py-2 in-data-input-wrapper:in-data-[input-size=sm]:text-sm`,`in-data-input-wrapper:in-data-[input-size=lg]:py-2.5 in-data-input-wrapper:in-data-[input-size=lg]:pr-3 in-data-input-wrapper:in-data-[input-size=lg]:pl-3.5`,t.className),children:e}),Q=({size:e=`md`,prefix:t,leadingAddon:n,trailingAddon:r,label:i,hint:a,hideRequiredIndicator:o,children:s,...c})=>{let l=!!n,u=!!r,d=S({sm:{input:C(l&&`group-has-[&>select]:pr-9 group-has-[&>select]:pl-2`,u&&(t?`group-has-[&>select]:pr-6 group-has-[&>select]:pl-0`:`group-has-[&>select]:pr-6 group-has-[&>select]:pl-3`)),leadingText:`pr-1.5 pl-3`},md:{input:C(l&&`group-has-[&>select]:pr-9 group-has-[&>select]:pl-2.5`,u&&(t?`group-has-[&>select]:pr-6 group-has-[&>select]:pl-0`:`group-has-[&>select]:pr-6 group-has-[&>select]:pl-3`)),leadingText:`pr-2 pl-3`},lg:{input:C(l&&`group-has-[&>select]:pr-9.5 group-has-[&>select]:pl-3`,u&&(t?`group-has-[&>select]:pr-6 group-has-[&>select]:pl-0`:`group-has-[&>select]:pr-6 group-has-[&>select]:pl-3`)),leadingText:`pr-2 pl-3.5`}});return(0,Z.jsx)(h,{size:e,"aria-label":i||void 0,inputClassName:C(d[e].input),tooltipClassName:C(u&&!l&&`group-has-[&>select]:right-0`),wrapperClassName:C(`z-10`,l&&`rounded-l-none`,u&&`rounded-r-none`,`group-has-[&>select]:bg-transparent group-has-[&>select]:shadow-none group-has-[&>select]:ring-0 group-has-[&>select]:focus-within:ring-0`),...c,children:({isDisabled:c,isInvalid:f,isRequired:p})=>(0,Z.jsxs)(Z.Fragment,{children:[i&&(0,Z.jsx)(J,{isRequired:o?!1:p,children:i}),(0,Z.jsxs)(`div`,{"data-input-size":e,className:C(`group relative flex h-max w-full flex-row justify-center rounded-lg bg-primary transition-all duration-100 ease-linear`,`has-[&>select]:shadow-xs has-[&>select]:ring-1 has-[&>select]:ring-border-primary has-[&>select]:ring-inset has-[&>select]:has-[input:focus]:ring-2 has-[&>select]:has-[input:focus]:ring-border-brand`,c&&`cursor-not-allowed`,f&&`has-[&>select]:ring-border-error_subtle has-[&>select]:has-[input:focus]:ring-border-error`),children:[n&&(0,Z.jsx)(`section`,{"data-leading":l||void 0,className:`group-disabled:opacity-50`,children:n}),t&&(0,Z.jsx)(`span`,{className:C(`my-auto grow group-disabled:opacity-50`,d[e].leadingText),children:(0,Z.jsx)(`p`,{className:C(`text-md text-tertiary`,e===`sm`&&`text-sm`),children:t})}),s,r&&(0,Z.jsx)(`section`,{"data-trailing":u||void 0,className:`group-disabled:opacity-50`,children:r})]}),a&&(0,Z.jsx)(q,{isInvalid:f,className:C(e===`sm`&&`text-xs`),children:a})]})})};Q.Prefix=xt,Q.displayName=`InputGroup`;var St=({size:e=`sm`,label:t,hint:n,placeholder:r=`Choose a file`,isDisabled:i,isInvalid:a,isRequired:o,hideRequiredIndicator:s,isLoading:c,acceptedFileTypes:l,allowsMultiple:u,onChange:d,className:f,buttonText:p=`Upload`})=>{let h=(0,Y.useRef)(null),[g,_]=(0,Y.useState)(``),v=()=>{h.current?.value&&(h.current.value=``),h.current?.click()};return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Q,{size:e,label:t,hint:n,isDisabled:i,isInvalid:a,isRequired:o,hideRequiredIndicator:s,className:f,trailingAddon:(0,Z.jsx)(K,{size:e,color:`secondary`,onClick:v,isDisabled:i,children:p}),children:(0,Z.jsxs)(`div`,{className:`relative flex min-w-0 flex-1`,children:[(0,Z.jsx)(m,{placeholder:r,value:g,readOnly:!0,inputClassName:C(`cursor-pointer`,c&&`pr-9`),wrapperClassName:`cursor-pointer`,onClick:v}),c&&(0,Z.jsxs)(`svg`,{fill:`none`,viewBox:`0 0 16 16`,className:`pointer-events-none absolute top-1/2 right-3 z-20 size-4 -translate-y-1/2 text-fg-quaternary`,children:[(0,Z.jsx)(`circle`,{className:`stroke-current opacity-30`,cx:`8`,cy:`8`,r:`6.5`,strokeWidth:`1.5`}),(0,Z.jsx)(`circle`,{className:`origin-center animate-spin stroke-current`,cx:`8`,cy:`8`,r:`6.5`,strokeWidth:`1.5`,strokeDasharray:`10 40`,strokeLinecap:`round`})]})]})}),(0,Z.jsx)(`input`,{ref:h,type:`file`,className:`hidden`,disabled:i,accept:l?.toString(),multiple:u,onChange:()=>{let e=h.current?.files??null;e&&e.length>0?_(Array.from(e).map(e=>e.name).join(`, `)):_(``),d?.(e)}})]})};St.displayName=`InputFile`;var Ct=e=>(0,Z.jsxs)(`svg`,{width:`34`,height:`24`,viewBox:`0 0 34 24`,fill:`none`,...e,children:[(0,Z.jsx)(`path`,{d:`M0 4C0 1.79086 1.79086 0 4 0H30C32.2091 0 34 1.79086 34 4V20C34 22.2091 32.2091 24 30 24H4C1.79086 24 0 22.2091 0 20V4Z`,fill:`#1F72CD`}),(0,Z.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M6.09517 8.5L2.91406 15.7467H6.7223L7.19441 14.5913H8.27355L8.74566 15.7467H12.9375V14.8649L13.311 15.7467H15.4793L15.8528 14.8462V15.7467H24.5706L25.6307 14.6213L26.6232 15.7467L31.1009 15.7561L27.9097 12.1436L31.1009 8.5H26.6927L25.6608 9.60463L24.6995 8.5H15.2156L14.4013 10.3704L13.5678 8.5H9.7675V9.35186L9.34474 8.5H6.09517ZM6.83205 9.52905H8.68836L10.7984 14.4431V9.52905H12.8319L14.4617 13.0524L15.9637 9.52905H17.987V14.7291H16.7559L16.7458 10.6544L14.9509 14.7291H13.8495L12.0446 10.6544V14.7291H9.51179L9.03162 13.5633H6.43745L5.95827 14.728H4.60123L6.83205 9.52905ZM24.1196 9.52905H19.1134V14.726H24.0421L25.6307 13.0036L27.1618 14.726H28.7624L26.436 12.1426L28.7624 9.52905H27.2313L25.6507 11.2316L24.1196 9.52905ZM7.73508 10.4089L6.8804 12.4856H8.58876L7.73508 10.4089ZM20.3497 11.555V10.6057V10.6048H23.4734L24.8364 12.1229L23.413 13.6493H20.3497V12.613H23.0808V11.555H20.3497Z`,fill:`white`})]}),wt=e=>(0,Z.jsxs)(`svg`,{width:`34`,height:`24`,viewBox:`0 0 34 24`,fill:`none`,...e,children:[(0,Z.jsx)(`path`,{d:`M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z`,fill:`white`}),(0,Z.jsx)(`path`,{d:`M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z`,className:`stroke-border-secondary`,strokeWidth:`0.75`}),(0,Z.jsx)(`path`,{d:`M14 23L33 17.25V20C33 21.6569 31.6569 23 30 23H14Z`,fill:`#FD6020`}),(0,Z.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M29.3937 9.11084C30.439 9.11084 31.0139 9.59438 31.0139 10.5077C31.0662 11.2062 30.5958 11.7972 29.9686 11.9046L31.3797 13.8925H30.2822L29.0801 11.9584H28.9756V13.8925H28.0871V9.11084H29.3937ZM28.9756 11.3137H29.2369C29.8118 11.3137 30.0731 11.045 30.0731 10.5615C30.0731 10.1317 29.8118 9.86304 29.2369 9.86304H28.9756V11.3137ZM25.0034 13.8925H27.5122V13.0866H25.8919V11.7972H27.4599V10.9913H25.8919V9.91674H27.5122V9.11084H25.0034V13.8925ZM22.3902 12.3345L21.1881 9.11084H20.2474L22.1812 14H22.6515L24.5853 9.11084H23.6446L22.3902 12.3345ZM11.7805 11.5286C11.7805 12.8717 12.8258 14 14.1324 14C14.5505 14 14.9164 13.8925 15.2822 13.7314V12.6568C15.0209 12.9792 14.655 13.1941 14.2369 13.1941C13.4007 13.1941 12.7212 12.5494 12.7212 11.6897V11.5823C12.669 10.7227 13.3484 9.97048 14.1847 9.91675C14.6028 9.91675 15.0209 10.1317 15.2822 10.454V9.37948C14.9686 9.16458 14.5505 9.11085 14.1847 9.11085C12.8258 9.0034 11.7805 10.1317 11.7805 11.5286ZM10.1603 10.9376C9.63762 10.7227 9.48082 10.6152 9.48082 10.3466C9.53309 10.0242 9.79441 9.75557 10.108 9.8093C10.3693 9.8093 10.6306 9.97048 10.8397 10.1854L11.3101 9.54066C10.9442 9.2183 10.4739 9.00339 10.0035 9.00339C9.27176 8.94967 8.64459 9.54066 8.59232 10.2928V10.3466C8.59232 10.9913 8.85365 11.3674 9.68988 11.636C9.89894 11.6897 10.108 11.7972 10.3171 11.9046C10.4739 12.0121 10.5784 12.1733 10.5784 12.3882C10.5784 12.7643 10.2648 13.0866 9.95121 13.0866H9.89894C9.48082 13.0866 9.11497 12.818 8.95818 12.4419L8.38326 13.0329C8.69685 13.6239 9.32403 13.9463 9.95121 13.9463C10.7874 14 11.4669 13.3553 11.5191 12.4956V12.3345C11.4669 11.6897 11.2056 11.3674 10.1603 10.9376ZM7.12892 13.8925H8.01742V9.11084H7.12892V13.8925ZM3 9.11086H4.30662H4.56794C5.8223 9.16458 6.81532 10.2391 6.76306 11.5286C6.76306 12.227 6.44947 12.8717 5.92682 13.3553C5.45644 13.7314 4.88153 13.9463 4.30662 13.8926H3V9.11086ZM4.14983 13.0866C4.56794 13.1404 5.03833 12.9792 5.35191 12.7105C5.6655 12.3882 5.8223 11.9584 5.8223 11.4748C5.8223 11.045 5.6655 10.6152 5.35191 10.2928C5.03833 10.0242 4.56794 9.86302 4.14983 9.91674H3.8885V13.0866H4.14983Z`,fill:`black`}),(0,Z.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M17.9481 9C16.6415 9 15.5439 10.0745 15.5439 11.4714C15.5439 12.8146 16.5892 13.9429 17.9481 13.9966C19.307 14.0503 20.3523 12.9221 20.4046 11.5252C20.3523 10.1283 19.307 9 17.9481 9V9Z`,fill:`#FD6020`})]}),Tt=e=>(0,Z.jsxs)(`svg`,{width:`34`,height:`24`,viewBox:`0 0 34 24`,fill:`none`,...e,children:[(0,Z.jsx)(`path`,{d:`M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z`,fill:`white`}),(0,Z.jsx)(`path`,{d:`M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z`,className:`stroke-border-secondary`,strokeWidth:`0.75`}),(0,Z.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M17.179 16.8294C15.9949 17.8275 14.459 18.43 12.7807 18.43C9.03582 18.43 6 15.4303 6 11.73C6 8.02966 9.03582 5.02997 12.7807 5.02997C14.459 5.02997 15.9949 5.63247 17.179 6.63051C18.363 5.63247 19.8989 5.02997 21.5773 5.02997C25.3221 5.02997 28.358 8.02966 28.358 11.73C28.358 15.4303 25.3221 18.43 21.5773 18.43C19.8989 18.43 18.363 17.8275 17.179 16.8294Z`,fill:`#ED0006`}),(0,Z.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M17.1787 16.8294C18.6366 15.6005 19.5611 13.7719 19.5611 11.73C19.5611 9.68801 18.6366 7.85941 17.1787 6.63051C18.3628 5.63247 19.8987 5.02997 21.577 5.02997C25.3219 5.02997 28.3577 8.02966 28.3577 11.73C28.3577 15.4303 25.3219 18.43 21.577 18.43C19.8987 18.43 18.3628 17.8275 17.1787 16.8294Z`,fill:`#F9A000`}),(0,Z.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M17.1793 16.8294C18.6372 15.6005 19.5616 13.7719 19.5616 11.73C19.5616 9.68805 18.6372 7.85946 17.1793 6.63055C15.7213 7.85946 14.7969 9.68805 14.7969 11.73C14.7969 13.7719 15.7213 15.6005 17.1793 16.8294Z`,fill:`#FF5E00`})]}),Et=[{name:`Visa`,pattern:/^4[0-9]{3,}$/,card:`visa`,icon:e=>(0,Z.jsxs)(`svg`,{width:`34`,height:`24`,viewBox:`0 0 34 24`,fill:`none`,...e,children:[(0,Z.jsx)(`path`,{d:`M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z`,fill:`white`}),(0,Z.jsx)(`path`,{d:`M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z`,className:`stroke-border-secondary`,strokeWidth:`0.75`}),(0,Z.jsx)(`path`,{fillRule:`evenodd`,clipRule:`evenodd`,d:`M10.7501 15.8582H8.69031L7.14576 9.79235C7.07245 9.51332 6.91679 9.26664 6.68782 9.15038C6.11639 8.85821 5.48672 8.62568 4.7998 8.50841V8.27487H8.11789C8.57583 8.27487 8.91929 8.62568 8.97653 9.0331L9.77793 13.4086L11.8367 8.27487H13.8392L10.7501 15.8582ZM14.984 15.8582H13.0388L14.6406 8.27487H16.5858L14.984 15.8582ZM19.1025 10.3757C19.1597 9.96725 19.5032 9.73372 19.9039 9.73372C20.5336 9.67508 21.2195 9.79235 21.7919 10.0835L22.1354 8.45079C21.5629 8.21725 20.9333 8.09998 20.3619 8.09998C18.4738 8.09998 17.1 9.15038 17.1 10.6082C17.1 11.7173 18.0731 12.2996 18.7601 12.6504C19.5032 13.0002 19.7894 13.2337 19.7322 13.5835C19.7322 14.1082 19.1597 14.3418 18.5883 14.3418C17.9014 14.3418 17.2145 14.1669 16.5858 13.8747L16.2424 15.5084C16.9293 15.7996 17.6724 15.9169 18.3594 15.9169C20.4763 15.9745 21.7919 14.9251 21.7919 13.35C21.7919 11.3664 19.1025 11.2502 19.1025 10.3757ZM28.5998 15.8582L27.0553 8.27487H25.3962C25.0528 8.27487 24.7093 8.50841 24.5948 8.85821L21.7347 15.8582H23.7372L24.1369 14.7502H26.5973L26.8263 15.8582H28.5998ZM25.6824 10.3171L26.2539 13.1751H24.6521L25.6824 10.3171Z`,fill:`#172B85`})]})},{name:`MasterCard`,pattern:/^5[1-5][0-9]{2,}$/,card:`mastercard`,icon:Tt},{name:`American Express`,pattern:/^3[47][0-9]{2,}$/,card:`amex`,icon:Ct},{name:`Discover`,pattern:/^6(?:011|5[0-9]{2}|4[4-9][0-9])[0-9]{12}$/,card:`discover`,icon:wt},{name:`UnionPay`,pattern:/^(62|88)[0-9]{14,17}$/,card:`unionpay`,icon:e=>(0,Z.jsxs)(`svg`,{width:`34`,height:`24`,viewBox:`0 0 34 24`,fill:`none`,...e,children:[(0,Z.jsx)(`path`,{d:`M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z`,fill:`white`}),(0,Z.jsx)(`path`,{d:`M0.5 4C0.5 2.067 2.067 0.5 4 0.5H30C31.933 0.5 33.5 2.067 33.5 4V20C33.5 21.933 31.933 23.5 30 23.5H4C2.067 23.5 0.5 21.933 0.5 20V4Z`,className:`stroke-border-secondary`,strokeWidth:`0.75`}),(0,Z.jsx)(`path`,{d:`M10.5185 5.00073H15.8767C16.6247 5.00073 17.0899 5.62831 16.9154 6.40082L14.4208 17.4262C14.2447 18.196 13.4959 18.8241 12.7474 18.8241H7.38973C6.64282 18.8241 6.17657 18.196 6.35106 17.4262L8.84672 6.40082C9.0212 5.62831 9.76968 5.00073 10.5185 5.00073Z`,fill:`#E21836`}),(0,Z.jsx)(`path`,{d:`M15.4303 5H21.5921C22.3399 5 22.0027 5.62758 21.8268 6.40009L19.3326 17.4255C19.1576 18.1953 19.2121 18.8234 18.4628 18.8234H12.301C11.5516 18.8234 11.0878 18.1953 11.2639 17.4255L13.758 6.40009C13.9351 5.62758 14.682 5 15.4303 5Z`,fill:`#00447C`}),(0,Z.jsx)(`path`,{d:`M21.348 5H26.7062C27.4552 5 27.9204 5.62758 27.7445 6.40009L25.2503 17.4255C25.0742 18.1953 24.3248 18.8234 23.576 18.8234H18.2203C17.4709 18.8234 17.0061 18.1953 17.1816 17.4255L19.6762 6.40009C19.8507 5.62758 20.5986 5 21.348 5Z`,fill:`#007B84`}),(0,Z.jsx)(`path`,{d:`M11.9181 8.53326C11.3671 8.53904 11.2043 8.53326 11.1524 8.52062C11.1324 8.61836 10.7605 10.384 10.7595 10.3855C10.6794 10.7427 10.6212 10.9973 10.4233 11.1617C10.311 11.2573 10.1799 11.3035 10.0279 11.3035C9.78352 11.3035 9.64116 11.1786 9.61726 10.9417L9.61269 10.8603C9.61269 10.8603 9.68714 10.3818 9.68714 10.3792C9.68714 10.3792 10.0774 8.77015 10.1472 8.55746C10.1509 8.54536 10.1519 8.53904 10.1529 8.53326C9.39328 8.54012 9.25863 8.53326 9.24936 8.52062C9.24427 8.53797 9.22546 8.63772 9.22546 8.63772L8.82699 10.4512L8.79278 10.605L8.72656 11.1081C8.72656 11.2573 8.75503 11.3791 8.81171 11.4821C8.99325 11.8087 9.51108 11.8576 9.80402 11.8576C10.1815 11.8576 10.5355 11.7751 10.7748 11.6244C11.1901 11.3717 11.2988 10.9769 11.3957 10.626L11.4406 10.446C11.4406 10.446 11.8426 8.77485 11.9109 8.55746C11.9135 8.54536 11.9145 8.53904 11.9181 8.53326ZM13.2858 9.88137C13.1889 9.88137 13.0118 9.90557 12.8527 9.98583C12.795 10.0164 12.7404 10.0516 12.6828 10.0867L12.7348 9.89347L12.7063 9.86094C12.369 9.93125 12.2935 9.94066 11.9819 9.98583L11.9558 10.0037C11.9196 10.3125 11.8875 10.5447 11.7533 11.1517C11.7023 11.3754 11.6493 11.6013 11.5961 11.8245L11.6105 11.8528C11.9298 11.8355 12.0267 11.8355 12.3042 11.8402L12.3267 11.8151C12.3619 11.6291 12.3665 11.5856 12.4446 11.209C12.4813 11.0305 12.5578 10.6381 12.5956 10.4985C12.6649 10.4654 12.7334 10.4329 12.7987 10.4329C12.9542 10.4329 12.9353 10.5725 12.9293 10.6282C12.9226 10.7216 12.8659 11.0268 12.8078 11.2888L12.769 11.458C12.742 11.5829 12.7123 11.7043 12.6853 11.8281L12.6971 11.8528C13.0118 11.8355 13.1078 11.8355 13.3766 11.8402L13.4082 11.8151C13.4568 11.5247 13.471 11.447 13.5572 11.0241L13.6006 10.8299C13.6848 10.4497 13.7271 10.2569 13.6634 10.0998C13.596 9.92385 13.4343 9.88137 13.2858 9.88137ZM14.8137 10.2794C14.6464 10.3125 14.5397 10.3346 14.4337 10.3488C14.3286 10.3662 14.226 10.3819 14.0644 10.405L14.0516 10.417L14.0398 10.4265C14.023 10.5505 14.0112 10.6576 13.9889 10.7836C13.9699 10.9139 13.9408 11.0619 13.8934 11.2746C13.8567 11.4374 13.8378 11.4941 13.8169 11.5514C13.7965 11.6087 13.774 11.6643 13.7328 11.8245L13.7424 11.8392L13.7505 11.8528C13.9016 11.8454 14.0005 11.8402 14.1021 11.8392C14.2036 11.8355 14.3087 11.8392 14.4714 11.8402L14.4857 11.8282L14.501 11.815C14.5245 11.6707 14.528 11.6318 14.5424 11.5614C14.5566 11.4858 14.5811 11.3812 14.6414 11.1018C14.6698 10.9706 14.7016 10.8398 14.7311 10.7059C14.7618 10.5725 14.7939 10.4412 14.8245 10.31L14.8199 10.2941L14.8137 10.2794ZM14.8173 9.74272C14.6653 9.65036 14.3985 9.67967 14.2189 9.80725C14.0398 9.93228 14.0195 10.1097 14.171 10.2033C14.3204 10.2931 14.5882 10.2664 14.7662 10.1377C14.9449 10.01 14.9672 9.83414 14.8173 9.74272ZM15.7367 11.8818C16.0442 11.8818 16.3595 11.7945 16.5968 11.5356C16.7794 11.3256 16.8631 11.0131 16.8921 10.8845C16.9865 10.458 16.913 10.2589 16.8207 10.1376C16.6804 9.95279 16.4325 9.8935 16.1754 9.8935C16.0207 9.8935 15.6524 9.90923 15.3647 10.1823C15.1581 10.3792 15.0626 10.6465 15.0051 10.9028C14.9469 11.1638 14.8801 11.6339 15.3 11.8088C15.4295 11.866 15.6163 11.8818 15.7367 11.8818ZM15.7127 10.9223C15.7836 10.5993 15.8673 10.3283 16.0809 10.3283C16.2484 10.3283 16.2605 10.5299 16.1861 10.854C16.1728 10.9259 16.1116 11.1933 16.029 11.3072C15.9712 11.3912 15.9029 11.4421 15.8275 11.4421C15.805 11.4421 15.6714 11.4421 15.6693 11.2379C15.6682 11.1371 15.6882 11.0341 15.7127 10.9223ZM17.661 11.8402L17.685 11.8151C17.7191 11.6292 17.7247 11.5855 17.8002 11.209C17.8379 11.0305 17.916 10.6382 17.9527 10.4985C18.0222 10.4653 18.0895 10.4328 18.1569 10.4328C18.3114 10.4328 18.2926 10.5724 18.2864 10.6281C18.2808 10.7217 18.2241 11.0267 18.165 11.2888L18.1283 11.4579C18.1002 11.5829 18.0696 11.7042 18.0426 11.8281L18.0543 11.8529C18.3701 11.8355 18.4625 11.8355 18.7328 11.8402L18.7655 11.8151C18.8129 11.5246 18.8257 11.4469 18.9145 11.0242L18.9568 10.8298C19.0414 10.4496 19.0843 10.2569 19.0216 10.0999C18.9522 9.92389 18.7895 9.88141 18.6431 9.88141C18.546 9.88141 18.368 9.90548 18.2099 9.98587C18.1533 10.0164 18.0967 10.0515 18.041 10.0867L18.0895 9.89351L18.0635 9.86084C17.7263 9.93129 17.6492 9.9407 17.338 9.98587L17.3141 10.0038C17.2763 10.3126 17.2457 10.5446 17.1115 11.1518C17.0605 11.3755 17.0074 11.6013 16.9544 11.8245L16.9686 11.8529C17.2885 11.8355 17.384 11.8355 17.661 11.8402ZM19.9812 11.8528C20.001 11.7531 20.1189 11.1618 20.12 11.1618C20.12 11.1618 20.2204 10.7279 20.2266 10.7122C20.2266 10.7122 20.2582 10.667 20.2898 10.6491H20.3363C20.775 10.6491 21.2703 10.6491 21.6586 10.3551C21.9228 10.1535 22.1034 9.85567 22.184 9.49375C22.2049 9.40501 22.2203 9.29948 22.2203 9.19394C22.2203 9.05533 22.1933 8.9182 22.1152 8.81105C21.9172 8.52589 21.5229 8.52065 21.0678 8.5185C21.0663 8.5185 20.8434 8.52065 20.8434 8.52065C20.2608 8.52804 20.0271 8.52589 19.9311 8.51379C19.923 8.55749 19.9078 8.6352 19.9078 8.6352C19.9078 8.6352 19.6991 9.63088 19.6991 9.63249C19.6991 9.63249 19.1996 11.7494 19.1761 11.8492C19.6848 11.8429 19.8934 11.8429 19.9812 11.8528ZM20.3679 10.0841C20.3679 10.0841 20.5898 9.09042 20.5887 9.09418L20.5959 9.04323L20.599 9.00437L20.6877 9.01379C20.6877 9.01379 21.1453 9.05425 21.1561 9.05533C21.3367 9.12726 21.4111 9.31265 21.3591 9.55465C21.3117 9.77581 21.1724 9.96174 20.9933 10.0515C20.8459 10.1276 20.6653 10.134 20.4791 10.134H20.3587L20.3679 10.0841ZM21.7494 10.9407C21.6908 11.198 21.6234 11.668 22.0412 11.8355C22.1744 11.8939 22.2938 11.9112 22.4151 11.9049C22.5432 11.8978 22.6619 11.8316 22.7719 11.7364C22.762 11.7755 22.7521 11.8147 22.7421 11.8539L22.7611 11.8791C23.0616 11.866 23.1548 11.866 23.4804 11.8686L23.5099 11.8455C23.5575 11.5577 23.6023 11.2784 23.7258 10.728C23.786 10.4643 23.8461 10.2032 23.9079 9.94067L23.8982 9.91177C23.562 9.9759 23.4722 9.98961 23.1488 10.0368L23.1243 10.0574C23.121 10.0841 23.1176 10.1098 23.1145 10.1355C23.0642 10.0519 22.9913 9.98047 22.8789 9.93597C22.7351 9.87775 22.3973 9.95277 22.107 10.2249C21.903 10.4192 21.8051 10.6854 21.7494 10.9407ZM22.4555 10.9564C22.5274 10.6392 22.6101 10.3709 22.8243 10.3709C22.9597 10.3709 23.031 10.4996 23.0165 10.719C23.005 10.7737 22.9926 10.8314 22.9779 10.8966C22.9564 10.9908 22.9332 11.0842 22.9106 11.1778C22.8876 11.2418 22.8608 11.3022 22.8315 11.3424C22.7763 11.4228 22.6452 11.4726 22.5697 11.4726C22.5483 11.4726 22.4161 11.4726 22.4116 11.2721C22.4105 11.1722 22.4305 11.0693 22.4555 10.9564ZM26.1424 9.9092L26.1164 9.87868C25.7838 9.94805 25.7236 9.95908 25.418 10.0016L25.3955 10.0247C25.3944 10.0285 25.3935 10.0342 25.392 10.0395L25.3909 10.0342C25.1634 10.5746 25.1701 10.458 24.9849 10.8834C24.9838 10.864 24.9838 10.8519 24.9828 10.8313L24.9364 9.9092L24.9073 9.87868C24.5589 9.94805 24.5506 9.95908 24.2288 10.0016L24.2038 10.0247C24.2002 10.0357 24.2002 10.0478 24.1981 10.061L24.2002 10.0657C24.2405 10.2773 24.2308 10.2301 24.2711 10.5641C24.2899 10.728 24.315 10.8928 24.3338 11.0547C24.3656 11.3256 24.3833 11.4589 24.4221 11.8723C24.2048 12.2415 24.1533 12.3812 23.9441 12.7052L23.9456 12.7084L23.7982 12.9483C23.7814 12.9735 23.7661 12.9909 23.7447 12.9983C23.7212 13.0103 23.6906 13.0124 23.6482 13.0124H23.5665L23.4452 13.4278L23.8614 13.4352C24.1058 13.4342 24.2594 13.3165 24.3421 13.1584L24.6038 12.6967H24.5996L24.6272 12.6642C24.8032 12.274 26.1424 9.9092 26.1424 9.9092ZM21.7494 15.3652H21.5728L22.2264 13.1401H22.4432L22.512 12.9108L22.5187 13.1657C22.5106 13.3233 22.631 13.463 22.9473 13.4399H23.3131L23.439 13.0114H23.3013C23.2222 13.0114 23.1855 12.9908 23.1901 12.9467L23.1834 12.6874H22.506V12.6887C22.287 12.6934 21.6329 12.7104 21.5005 12.7467C21.3402 12.7892 21.1714 12.9142 21.1714 12.9142L21.2377 12.6847H20.604L20.472 13.1401L19.8097 15.3992H19.6812L19.5552 15.8246H20.8173L20.775 15.9664H21.3969L21.4382 15.8246H21.6127L21.7494 15.3652ZM21.2316 13.5922C21.1301 13.6211 20.9413 13.7087 20.9413 13.7087L21.1092 13.1401H21.6127L21.4912 13.5544C21.4912 13.5544 21.3357 13.5638 21.2316 13.5922ZM21.2412 14.4046C21.2412 14.4046 21.0831 14.4251 20.979 14.4493C20.8765 14.4813 20.6842 14.5821 20.6842 14.5821L20.8577 13.9903H21.3637L21.2412 14.4046ZM20.9591 15.3705H20.4541L20.6005 14.871H21.104L20.9591 15.3705ZM22.1754 13.9903H22.9034L22.7987 14.339H22.0611L21.9504 14.7203H22.5958L22.1071 15.4287C22.0729 15.4807 22.0422 15.4991 22.0081 15.5138C21.9739 15.5317 21.9289 15.5526 21.877 15.5526H21.6979L21.5749 15.9702H22.0432C22.2867 15.9702 22.4304 15.8562 22.5366 15.7066L22.8717 15.2344L22.9437 15.7138C22.959 15.8036 23.0217 15.8562 23.0641 15.8766C23.111 15.9008 23.1595 15.9424 23.2279 15.9486C23.3013 15.9518 23.3543 15.9543 23.3896 15.9543H23.6197L23.7579 15.487H23.6671C23.615 15.487 23.5253 15.478 23.51 15.4612C23.4947 15.4408 23.4947 15.4093 23.4865 15.3615L23.4135 14.881H23.1145L23.2457 14.7203H23.9819L24.0951 14.339H23.4135L23.5197 13.9903H24.1992L24.3252 13.5602H22.2993L22.1754 13.9903ZM16.0269 15.4676L16.1968 14.8857H16.8951L17.0227 14.4529H16.3238L16.4305 14.0948H17.1135L17.2401 13.6757H15.531L15.4071 14.0948H15.7953L15.6918 14.4529H15.3025L15.1734 14.8931H15.5616L15.3351 15.6629C15.3045 15.7648 15.3495 15.8037 15.3779 15.851C15.4071 15.8971 15.4366 15.9276 15.5029 15.945C15.5714 15.9607 15.6183 15.9701 15.682 15.9701H16.4693L16.6095 15.4907L16.2606 15.54C16.1932 15.54 16.0065 15.5317 16.0269 15.4676ZM16.107 12.6821L15.93 13.0113C15.8922 13.0833 15.8581 13.1279 15.8274 13.1485C15.8004 13.1658 15.7468 13.1731 15.6692 13.1731H15.5769L15.4535 13.5943H15.7601C15.9076 13.5943 16.0208 13.5386 16.0749 13.5108C16.133 13.4788 16.1483 13.4971 16.1932 13.4524L16.2968 13.3601H17.2543L17.3814 12.9215H16.6805L16.8028 12.6821H16.107ZM17.5207 15.476C17.5044 15.4518 17.5161 15.4092 17.5411 15.3205L17.8028 14.4287H18.7338C18.8695 14.4267 18.9675 14.4251 19.0312 14.4204C19.0997 14.413 19.1741 14.3878 19.2552 14.3427C19.3389 14.2953 19.3818 14.2455 19.4179 14.1882C19.4583 14.1311 19.5231 14.006 19.5787 13.8132L19.9077 12.6847L18.9415 12.6905C18.9415 12.6905 18.644 12.7357 18.513 12.7856C18.3808 12.8412 18.192 12.9966 18.192 12.9966L18.2792 12.6873H17.6824L16.8468 15.54C16.8171 15.6508 16.7973 15.7312 16.7927 15.7795C16.7911 15.8315 16.8564 15.883 16.8988 15.9218C16.9488 15.9607 17.0227 15.9544 17.0936 15.9607C17.1682 15.9665 17.2742 15.9701 17.4206 15.9701H17.8793L18.0201 15.4807L17.6095 15.5207C17.5656 15.5207 17.5339 15.4965 17.5207 15.476ZM17.9717 13.8264H18.9496L18.8874 14.027C18.8787 14.0317 18.8578 14.0171 18.7583 14.0292H17.9114L17.9717 13.8264ZM18.1676 13.1537H19.1537L19.0828 13.3953C19.0828 13.3953 18.618 13.3906 18.5436 13.4047C18.216 13.463 18.0247 13.6432 18.0247 13.6432L18.1676 13.1537ZM18.9093 14.6987C18.9012 14.7287 18.8884 14.747 18.8705 14.7607C18.8507 14.7739 18.8185 14.7786 18.7706 14.7786H18.6313L18.6395 14.5343H18.0599L18.0364 15.7285C18.0355 15.8147 18.0436 15.8646 18.1048 15.9045C18.1661 15.9544 18.3548 15.9607 18.6088 15.9607H18.972L19.1031 15.5137L18.7869 15.5316L18.6818 15.5379C18.6674 15.5316 18.6537 15.5258 18.6384 15.5101C18.6251 15.4965 18.6027 15.5048 18.6063 15.4187L18.6088 15.1125L18.9404 15.0984C19.1195 15.0984 19.196 15.0385 19.2613 14.9813C19.3236 14.9266 19.344 14.8637 19.3675 14.7786L19.4231 14.5075H18.9674L18.9093 14.6987Z`,fill:`#FEFEFE`})]})},{name:`Unknown`,pattern:/.*/,card:`unknown`,icon:Tt}],Dt=e=>{let t=e.replace(/\D/g,``);return Et.find(e=>e.pattern.test(t))||Et[Et.length-1]},Ot=e=>{let t=e.replace(/\D/g,``),n=t.match(/\d{1,4}/g);return n?n.join(` `):t},kt=({onChange:e,value:t,defaultValue:n,maxLength:r=19,size:i=`md`,placeholder:a,label:o,hint:s,shortcut:c,hideRequiredIndicator:l,className:u,ref:d,groupRef:f,tooltip:p,iconClassName:g,inputClassName:_,wrapperClassName:v,tooltipClassName:y,type:b=`text`,...x})=>{let[S,w]=se(t,n||``,t=>{t=t.replace(/\D/g,``),e?.(t||``)}),T=Dt(S);return(0,Z.jsx)(h,{"aria-label":o?void 0:a,...x,size:i,className:u,inputMode:`numeric`,maxLength:r,value:Ot(S),onChange:w,children:({isInvalid:e,isRequired:t})=>(0,Z.jsxs)(Z.Fragment,{children:[o&&(0,Z.jsx)(J,{isRequired:l?!l:t,isInvalid:e,children:o}),(0,Z.jsx)(m,{ref:d,groupRef:f,size:i,placeholder:a,shortcut:c,wrapperClassName:v,tooltipClassName:y,tooltip:p,type:b,icon:T.icon,inputClassName:C(i===`sm`&&`pl-12`,i===`md`&&`pl-12.5`,i===`lg`&&`pl-13`,_),iconClassName:C(`h-6 w-8.5`,i===`sm`&&`left-1.5`,i===`md`&&`left-2`,i===`lg`&&`left-2.5`,g)}),s&&(0,Z.jsx)(q,{isInvalid:e,className:C(i===`sm`&&`text-xs`),children:s})]})})};kt.displayName=`PaymentInput`;var At=({size:e=`md`,label:t,hint:n,tooltip:r,placeholder:i,isRequired:a,isDisabled:o,isInvalid:s,allowDuplicates:c=!1,maxTags:l,value:u,defaultValue:d,onChange:f,onTagAdded:p,onTagRemoved:m,validate:h,className:g,hideRequiredIndicator:y})=>{let b=u!==void 0,x=(0,Y.useRef)(0),w=()=>x.current++,T=(0,Y.useRef)(null),E=(0,Y.useRef)(null),[D,O]=(0,Y.useState)(``),[k,A]=(0,Y.useState)(()=>(d??[]).map(e=>({id:w(),label:e}))),j=(0,Y.useRef)([]),M=(0,Y.useRef)([]),N=(()=>{if(!b)return k;if(j.current===u)return M.current;let e=M.current,t=[],n=new Set;for(let r of u){let i=e.findIndex((e,t)=>e.label===r&&!n.has(t));i===-1?t.push({id:w(),label:r}):(n.add(i),t.push(e[i]))}return j.current=u,M.current=t,t})(),P=N.map(e=>e.label),ee=(0,Y.useCallback)(e=>{let t=e.trim();if(!t||!c&&P.includes(t)||l&&P.length>=l||h&&!h(t))return!1;let n={id:w(),label:t},r=[...N,n];return b||A(r),f?.(r.map(e=>e.label)),p?.(t),!0},[P,N,b,c,l,h,f,p]),F=(0,Y.useCallback)(e=>{let t=N.find(t=>t.id===e);if(!t)return;let n=N.filter(t=>t.id!==e);b||A(n),f?.(n.map(e=>e.label)),m?.(t.label)},[N,b,f,m]),te=(0,Y.useCallback)(e=>{for(let t of e)F(t);N.length-e.size<=0&&setTimeout(()=>T.current?.focus(),0)},[F,N.length]),ne=(0,Y.useCallback)(()=>{let e=E.current?.querySelectorAll(`[role="row"]`);e&&e.length>0&&e[e.length-1].focus()},[]),re=e=>{let t=e.currentTarget,n=t.selectionStart===0&&t.selectionEnd===0;switch(e.key){case`Enter`:e.preventDefault(),ee(D)&&O(``);break;case`Backspace`:n&&D===``&&ne();break;case`ArrowLeft`:n&&ne();break}},ie=e=>{if(e.key===`ArrowRight`){let e=E.current?.querySelectorAll(`[role="row"]`);if(e&&e.length>0){let t=e[e.length-1];(document.activeElement===t||t.contains(document.activeElement))&&T.current?.focus()}}},I=N.length===0,L=r||s,R=S({sm:{root:C(`gap-2 px-3 py-2 text-sm`,!I&&`py-1.5 pl-2`,L&&`pr-9`),iconTrailing:`right-3`},md:{root:C(`gap-2 px-3 py-2 text-md`,!I&&`pl-2`,L&&`pr-9`),iconTrailing:`right-3`},lg:{root:C(`gap-2 px-3.5 py-2.5 text-md`,!I&&`pl-2.5`,L&&`pr-9.5`),iconTrailing:`right-3.5`}});return(0,Z.jsxs)(`div`,{className:C(`flex flex-col gap-1.5`,g),children:[t&&(0,Z.jsx)(J,{isRequired:y?!1:a,children:t}),(0,Z.jsx)(xe,{isDisabled:o,isInvalid:s,className:({isFocusWithin:t,isDisabled:n,isInvalid:r})=>C(`group/input relative flex w-full items-center rounded-lg bg-primary shadow-xs ring-1 ring-primary outline-hidden transition duration-100 ease-linear ring-inset`,n&&`cursor-not-allowed opacity-50`,t&&!n&&`ring-2 ring-brand`,r&&!t&&`ring-error_subtle`,r&&t&&`ring-2 ring-error`,R[e].root),children:({isDisabled:n})=>(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(`div`,{className:C(`relative flex w-full flex-1 flex-row flex-wrap items-center justify-start`,e===`sm`?`gap-1.5`:`gap-2`),children:[!I&&(0,Z.jsx)(`div`,{ref:E,onKeyDown:ie,className:`contents`,children:(0,Z.jsx)(U,{label:t||`Tags`,size:e===`lg`?`md`:e,onRemove:te,className:`contents`,children:(0,Z.jsx)(W,{className:`flex flex-wrap gap-1.5 focus:outline-hidden`,items:N,children:e=>(0,Z.jsx)(we,{id:e.id,isDisabled:n,className:`focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-[-2px] focus-visible:outline-hidden`,children:e.label})})})}),(0,Z.jsx)(`div`,{className:`relative flex min-w-[20%] flex-1 flex-row items-center`,children:(0,Z.jsx)(H,{ref:T,type:`text`,value:D,disabled:n,placeholder:I?i:void 0,onChange:e=>O(e.target.value),onKeyDown:re,className:`w-full flex-[1_0_0] appearance-none bg-transparent text-ellipsis text-primary caret-alpha-black/90 outline-hidden placeholder:text-placeholder focus:outline-hidden disabled:cursor-not-allowed`})})]}),r&&(0,Z.jsx)(me,{title:r,placement:`top`,children:(0,Z.jsx)(pe,{className:C(`absolute cursor-pointer text-fg-quaternary transition duration-100 ease-linear group-invalid/input:hidden hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover`,R[e].iconTrailing),children:(0,Z.jsx)(_,{className:`size-4 stroke-[2.25px]`})})}),(0,Z.jsx)(v,{className:C(`pointer-events-none absolute hidden size-4 stroke-[2.25px] text-fg-error-secondary group-invalid/input:block`,R[e].iconTrailing)})]})}),n&&(0,Z.jsx)(q,{isInvalid:s,className:C(e===`sm`&&`text-xs`),children:n})]})},jt=({size:e=`md`,label:t,hint:n,tooltip:r,placeholder:i,isRequired:a,isDisabled:o,isInvalid:s,allowDuplicates:c=!1,maxTags:l,value:u,defaultValue:d,onChange:f,onTagAdded:p,onTagRemoved:h,validate:g,className:_,hideRequiredIndicator:v})=>{let y=u!==void 0,b=(0,Y.useRef)(0),x=()=>`tag-${b.current++}`,[S,w]=(0,Y.useState)(``),[T,E]=(0,Y.useState)(()=>(d??[]).map(e=>({id:x(),label:e}))),D=(0,Y.useRef)([]),O=(0,Y.useRef)([]),k=(()=>{if(!y)return T;if(D.current===u)return O.current;let e=O.current,t=[],n=new Set;for(let r of u){let i=e.findIndex((e,t)=>e.label===r&&!n.has(t));i===-1?t.push({id:x(),label:r}):(n.add(i),t.push(e[i]))}return D.current=u,O.current=t,t})(),A=k.map(e=>e.label),j=(0,Y.useCallback)(e=>{let t=e.trim();if(!t||!c&&A.includes(t)||l&&A.length>=l||g&&!g(t))return!1;let n={id:x(),label:t},r=[...k,n];return y||E(r),f?.(r.map(e=>e.label)),p?.(t),!0},[A,k,y,c,l,g,f,p]),M=(0,Y.useCallback)(e=>{let t=k.find(t=>t.id===e);if(!t)return;let n=k.filter(t=>t.id!==e);y||E(n),f?.(n.map(e=>e.label)),h?.(t.label)},[k,y,f,h]),N=(0,Y.useCallback)(e=>{for(let t of e)M(t.toString())},[M]);return(0,Z.jsxs)(`div`,{className:C(`flex flex-col`,e===`sm`?`gap-1.5`:`gap-2`,_),children:[(0,Z.jsxs)(`div`,{className:`flex flex-col gap-1.5`,children:[t&&(0,Z.jsx)(J,{isRequired:v?!1:a,children:t}),(0,Z.jsx)(m,{size:e,tooltip:r,placeholder:i,isInvalid:s,isDisabled:o,value:S,onChange:e=>w(e.currentTarget.value),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),j(S)&&w(``))}})]}),k.length>0&&(0,Z.jsx)(U,{label:t||`Tags`,size:e===`lg`?`md`:e,onRemove:N,children:(0,Z.jsx)(W,{className:`flex flex-wrap gap-1.5 focus:outline-hidden`,items:k,children:e=>(0,Z.jsx)(we,{id:e.id,isDisabled:o,children:e.label})})}),n&&A.length===0&&(0,Z.jsx)(q,{isInvalid:s,className:C(e===`sm`&&`text-xs`),children:n})]})},Mt=2e3,Nt=()=>{let[e,t]=(0,Y.useState)(!1),n=(e,n)=>{try{let r=document.createElement(`textarea`);r.value=e,r.style.position=`absolute`,r.style.left=`-99999px`,document.body.appendChild(r),r.select();let i=document.execCommand(`copy`);return r.remove(),t(n||!0),setTimeout(()=>t(!1),Mt),i?{success:!0}:{success:!1,error:Error(`execCommand returned false`)}}catch(e){return{success:!1,error:e instanceof Error?e:Error(`Fallback copy failed`)}}};return{copied:e,copy:(0,Y.useCallback)(async(e,r)=>{if(navigator.clipboard&&window.isSecureContext)try{return await navigator.clipboard.writeText(e),t(r||!0),setTimeout(()=>t(!1),Mt),{success:!0}}catch{return n(e,r)}return n(e)},[])}},Pt=(0,Y.createContext)({}),Ft={sm:`px-3 py-2 text-sm`,md:`px-3 py-2 text-md`,lg:`px-3.5 py-2.5 text-md`},It=({ref:e,groupRef:t,size:n=`md`,isInvalid:r,isDisabled:i,placeholder:a,wrapperClassName:o,inputClassName:s,orientation:c=`vertical`,isRequired:l,...u})=>{let p=(0,Y.useContext)(Pt),m=p?.size||n;return(0,Z.jsxs)(xe,{isDisabled:i,isInvalid:r,ref:t,className:({isFocusWithin:e,isDisabled:t,isInvalid:n})=>C(`relative flex w-full flex-row items-stretch rounded-lg bg-primary shadow-xs outline-1 -outline-offset-1 outline-primary transition-all duration-100 ease-linear`,e&&!t&&`outline-2 -outline-offset-2 outline-brand`,t&&`cursor-not-allowed opacity-50 in-data-input-wrapper:opacity-100`,`group-disabled:cursor-not-allowed group-disabled:opacity-50 in-data-input-wrapper:group-disabled:opacity-100`,n&&`outline-error_subtle`,`group-invalid:outline-error_subtle`,n&&e&&`outline-2 -outline-offset-2 outline-error`,e&&`group-invalid:outline-2 group-invalid:-outline-offset-2 group-invalid:outline-error`,p?.wrapperClassName,o),children:[c===`horizontal`&&(0,Z.jsx)(K,{size:n,iconLeading:b,slot:`decrement`,color:`tertiary`,className:`static h-full rounded-r-none`}),(0,Z.jsx)(H,{...u,ref:e,placeholder:a,className:C(`m-0 w-full bg-transparent text-primary ring-0 outline-hidden placeholder:text-placeholder autofill:rounded-lg autofill:text-primary disabled:cursor-not-allowed`,Ft[m],p?.inputClassName,s)}),c===`horizontal`&&(0,Z.jsx)(K,{size:n,iconLeading:x,slot:`increment`,color:`tertiary`,className:`static h-full rounded-l-none`}),c===`vertical`&&(0,Z.jsxs)(`div`,{className:C(`flex w-7 shrink-0 flex-col border-l border-primary`,n===`lg`&&`w-7.5`),children:[(0,Z.jsx)(V,{slot:`increment`,className:`flex flex-1 cursor-pointer items-center justify-center text-fg-quaternary outline-brand transition duration-100 ease-linear hover:bg-primary_hover hover:text-fg-quaternary_hover disabled:cursor-not-allowed disabled:opacity-50`,children:(0,Z.jsx)(f,{className:C(`size-3 stroke-3`,n===`lg`&&`size-3.5 stroke-[2.57px]`)})}),(0,Z.jsx)(V,{slot:`decrement`,className:`flex flex-1 cursor-pointer items-center justify-center border-t border-primary text-fg-quaternary outline-brand transition duration-100 ease-linear hover:bg-primary_hover hover:text-fg-quaternary_hover disabled:cursor-not-allowed disabled:opacity-50`,children:(0,Z.jsx)(d,{className:C(`size-3 stroke-3`,n===`lg`&&`size-3.5 stroke-[2.57px]`)})})]})]})},Lt=({size:e=`md`,placeholder:t,label:n,hint:r,hideRequiredIndicator:i,className:a,ref:o,groupRef:s,inputClassName:c,wrapperClassName:l,orientation:u=`vertical`,...d})=>(0,Z.jsx)(bt,{...d,className:e=>C(`group flex h-max w-full flex-col items-start justify-start gap-1.5`,typeof a==`function`?a(e):a),children:({isInvalid:a,isRequired:d})=>(0,Z.jsxs)(Z.Fragment,{children:[n&&(0,Z.jsx)(J,{isRequired:i?!i:d,isInvalid:a,children:n}),(0,Z.jsx)(It,{ref:o,groupRef:s,size:e,placeholder:t,inputClassName:c,wrapperClassName:l,orientation:u}),r&&(0,Z.jsx)(q,{isInvalid:a,className:C(e===`sm`&&`text-xs`),children:r})]})}),Rt=()=>(0,Z.jsx)(g,{isRequired:!0,label:`Email`,hint:`This is a hint text to help user.`,placeholder:`olivia@untitledui.com`,tooltip:`This is a tooltip`}),zt=()=>(0,Z.jsx)(g,{isRequired:!0,isDisabled:!0,label:`Email`,hint:`This is a hint text to help user.`,placeholder:`olivia@untitledui.com`,tooltip:`This is a tooltip`}),Bt=()=>(0,Z.jsx)(g,{isRequired:!0,isInvalid:!0,label:`Email`,hint:`This is an error message.`,placeholder:`olivia@untitledui.com`,tooltip:`This is a tooltip`}),Vt=()=>(0,Z.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,Z.jsx)(g,{isRequired:!0,label:`Email`,hint:`This is a hint text to help user.`,placeholder:`olivia@untitledui.com`,tooltip:`This is a tooltip`}),(0,Z.jsx)(g,{isRequired:!0,size:`lg`,label:`Email`,hint:`This is a hint text to help user.`,placeholder:`olivia@untitledui.com`,tooltip:`This is a tooltip`}),(0,Z.jsx)(g,{isRequired:!0,size:`lg`,label:`Email`,hint:`This is a hint text to help user.`,placeholder:`olivia@untitledui.com`,tooltip:`This is a tooltip`})]}),Ht=()=>(0,Z.jsx)(g,{isRequired:!0,icon:y,label:`Email`,hint:`This is a hint text to help user.`,placeholder:`olivia@untitledui.com`,tooltip:`This is a tooltip`}),Ut=()=>(0,Z.jsx)(Q,{isRequired:!0,label:`Phone number`,hint:`This is a hint text to help user.`,leadingAddon:(0,Z.jsx)(Ee,{"aria-label":`Country`,options:[{value:`US`,label:`US`},{value:`CA`,label:`CA`},{value:`EU`,label:`EU`}]}),children:(0,Z.jsx)(m,{type:`tel`,placeholder:`+1 (555) 000-0000`,tooltip:`This is a tooltip`})}),Wt=()=>(0,Z.jsx)(Q,{isRequired:!0,prefix:`$`,label:`Sale amount`,hint:`This is a hint text to help user.`,trailingAddon:(0,Z.jsx)(Ee,{"aria-label":`Sale amount`,options:[{value:`USD`,label:`USD`},{value:`CAD`,label:`CAD`},{value:`EUR`,label:`EUR`}]}),children:(0,Z.jsx)(m,{type:`tel`,placeholder:`1,000.00`,tooltip:`This is a tooltip`})}),Gt=()=>(0,Z.jsx)(Q,{isRequired:!0,label:`Website`,hint:`This is a hint text to help user.`,leadingAddon:(0,Z.jsx)(Q.Prefix,{children:`https://`}),children:(0,Z.jsx)(m,{placeholder:`www.untitledui.com`,tooltip:`This is a tooltip`})}),Kt=()=>(0,Z.jsx)(kt,{isRequired:!0,label:`Card number`,placeholder:`0000 0000 0000 0000`,hint:`This is a hint text to help user.`,tooltip:`This is a tooltip`}),qt=()=>{let{copy:e,copied:t}=Nt(),[n,r]=(0,Y.useState)(``);return(0,Z.jsx)(Q,{isRequired:!0,label:`Website`,hint:`This is a hint text to help user.`,onChange:r,trailingAddon:(0,Z.jsx)(K,{color:`secondary`,iconLeading:t?u:p,onClick:()=>e(n||`www.untitledui.com`),children:`Copy`}),children:(0,Z.jsx)(m,{placeholder:`www.untitledui.com`,tooltip:`This is a tooltip`})})},Jt=()=>{let[e,t]=(0,Y.useState)(``);return(0,Z.jsxs)(h,{isRequired:!0,minLength:8,name:`password`,autoComplete:`new-password`,onChange:t,children:[(0,Z.jsx)(J,{children:`Password`}),(0,Z.jsx)(m,{icon:X,type:`password`,placeholder:`••••••••••••`}),(0,Z.jsxs)(q,{className:`flex items-center gap-1`,children:[(0,Z.jsx)(l,{className:C(`size-4 stroke-[2.25px] text-fg-quaternary transition duration-100 ease-linear in-invalid:hidden`,e.length>=8&&`text-fg-success-primary`)}),(0,Z.jsx)(i,{className:`hidden size-4 stroke-[2.25px] text-fg-error-secondary in-invalid:inline-block`}),`Must be at least 8 characters.`]})]})},Yt=()=>(0,Z.jsx)(c,{isRequired:!0,label:`Date`,hint:`This is a hint text to help user.`,placeholder:`Select a date`,tooltip:`This is a tooltip`,granularity:`minute`,icon:a}),Xt=()=>(0,Z.jsx)(Lt,{isRequired:!0,orientation:`horizontal`,label:`Number`,hint:`This is a hint text to help user.`,placeholder:`100`}),Zt=()=>(0,Z.jsx)(Lt,{isRequired:!0,label:`Number`,hint:`This is a hint text to help user.`,placeholder:`100`}),Qt=()=>(0,Z.jsx)(At,{isRequired:!0,label:`Tags`,hint:`This is a hint text to help user.`,tooltip:`This is a tooltip.`,placeholder:`Type and press Enter`,defaultValue:[`Design`,`Engineering`]}),$t=()=>(0,Z.jsx)(jt,{isRequired:!0,label:`Tags`,hint:`This is a hint text to help user.`,tooltip:`This is a tooltip.`,placeholder:`Add tag`,defaultValue:[`Design`,`Marketing`]}),en=({size:e=`sm`})=>{let[t,n]=(0,Y.useState)(!1);return(0,Z.jsx)(St,{isRequired:!0,size:e,label:`Upload file`,hint:`SVG, PNG, JPG or GIF (max. 800x400px).`,onChange:e=>{!e||e.length===0||(n(!0),setTimeout(()=>n(!1),3e3))},isLoading:t})},$=`"use client";

import { useState } from "react";
import React from "react";
import { AlertCircle, Calendar, Check, CheckCircle, Copy01, Lock03, Mail01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Input, InputBase, TextField } from "@/components/base/input/input";
import { InputFile } from "@/components/base/input/input-file";
import { InputGroup } from "@/components/base/input/input-group";
import { PaymentInput } from "@/components/base/input/input-payment";
import { InputTags } from "@/components/base/input/input-tags";
import { InputTagsOuter } from "@/components/base/input/input-tags-outer";
import { NativeSelect } from "@/components/base/select/select-native";
import { useClipboard } from "@/hooks/use-clipboard";
import { cx } from "@/utils/cx";
import { HintText } from "./hint-text";
import { InputDate } from "./input-date";
import { InputNumber } from "./input-number";
import { Label } from "./label";

export const DefaultDemo = () => {
    return <Input isRequired label="Email" hint="This is a hint text to help user." placeholder="olivia@untitledui.com" tooltip="This is a tooltip" />;
};

export const DisabledDemo = () => {
    return (
        <Input isRequired isDisabled label="Email" hint="This is a hint text to help user." placeholder="olivia@untitledui.com" tooltip="This is a tooltip" />
    );
};

export const InvalidDemo = () => {
    return <Input isRequired isInvalid label="Email" hint="This is an error message." placeholder="olivia@untitledui.com" tooltip="This is a tooltip" />;
};

export const SizesDemo = () => {
    return (
        <div className="flex flex-col gap-8">
            {/* Small */}
            <Input isRequired label="Email" hint="This is a hint text to help user." placeholder="olivia@untitledui.com" tooltip="This is a tooltip" />

            {/* Medium */}
            <Input
                isRequired
                size="lg"
                label="Email"
                hint="This is a hint text to help user."
                placeholder="olivia@untitledui.com"
                tooltip="This is a tooltip"
            />

            {/* Large */}
            <Input
                isRequired
                size="lg"
                label="Email"
                hint="This is a hint text to help user."
                placeholder="olivia@untitledui.com"
                tooltip="This is a tooltip"
            />
        </div>
    );
};

export const LeadingIconDemo = () => {
    return (
        <Input
            isRequired
            icon={Mail01}
            label="Email"
            hint="This is a hint text to help user."
            placeholder="olivia@untitledui.com"
            tooltip="This is a tooltip"
        />
    );
};

export const LeadingDropdownDemo = () => {
    return (
        <InputGroup
            isRequired
            label="Phone number"
            hint="This is a hint text to help user."
            leadingAddon={
                <NativeSelect
                    aria-label="Country"
                    options={[
                        { value: "US", label: "US" },
                        { value: "CA", label: "CA" },
                        { value: "EU", label: "EU" },
                    ]}
                />
            }
        >
            <InputBase type="tel" placeholder="+1 (555) 000-0000" tooltip="This is a tooltip" />
        </InputGroup>
    );
};

export const TrailingDropdownDemo = () => {
    return (
        <InputGroup
            isRequired
            prefix="$"
            label="Sale amount"
            hint="This is a hint text to help user."
            trailingAddon={
                <NativeSelect
                    aria-label="Sale amount"
                    options={[
                        { value: "USD", label: "USD" },
                        { value: "CAD", label: "CAD" },
                        { value: "EUR", label: "EUR" },
                    ]}
                />
            }
        >
            <InputBase type="tel" placeholder="1,000.00" tooltip="This is a tooltip" />
        </InputGroup>
    );
};

export const LeadingTextDemo = () => {
    return (
        <InputGroup isRequired label="Website" hint="This is a hint text to help user." leadingAddon={<InputGroup.Prefix>https://</InputGroup.Prefix>}>
            <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
        </InputGroup>
    );
};

export const PaymentInputDemo = () => {
    return (
        <PaymentInput isRequired label="Card number" placeholder="0000 0000 0000 0000" hint="This is a hint text to help user." tooltip="This is a tooltip" />
    );
};

export const TrailingButtonDemo = () => {
    const { copy, copied } = useClipboard();
    const [value, setValue] = useState("");

    return (
        <InputGroup
            isRequired
            label="Website"
            hint="This is a hint text to help user."
            onChange={setValue}
            trailingAddon={
                <Button color="secondary" iconLeading={copied ? Check : Copy01} onClick={() => copy(value || "www.untitledui.com")}>
                    Copy
                </Button>
            }
        >
            <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
        </InputGroup>
    );
};

export const PasswordInputDemo = () => {
    const [password, setPassword] = useState("");

    return (
        <TextField isRequired minLength={8} name="password" autoComplete="new-password" onChange={setPassword}>
            <Label>Password</Label>
            <InputBase icon={Lock03} type="password" placeholder="••••••••••••" />
            <HintText className="flex items-center gap-1">
                <CheckCircle
                    className={cx(
                        "size-4 stroke-[2.25px] text-fg-quaternary transition duration-100 ease-linear in-invalid:hidden",
                        password.length >= 8 && "text-fg-success-primary",
                    )}
                />
                <AlertCircle className="hidden size-4 stroke-[2.25px] text-fg-error-secondary in-invalid:inline-block" />
                Must be at least 8 characters.
            </HintText>
        </TextField>
    );
};

export const DateInputDemo = () => {
    return (
        <InputDate
            isRequired
            label="Date"
            hint="This is a hint text to help user."
            placeholder="Select a date"
            tooltip="This is a tooltip"
            granularity="minute"
            icon={Calendar}
        />
    );
};

export const NumberInputHorizontalDemo = () => {
    return <InputNumber isRequired orientation="horizontal" label="Number" hint="This is a hint text to help user." placeholder="100" />;
};

export const NumberInputVerticalDemo = () => {
    return <InputNumber isRequired label="Number" hint="This is a hint text to help user." placeholder="100" />;
};

export const TagInputDemo = () => {
    return (
        <InputTags
            isRequired
            label="Tags"
            hint="This is a hint text to help user."
            tooltip="This is a tooltip."
            placeholder="Type and press Enter"
            defaultValue={["Design", "Engineering"]}
        />
    );
};

export const TagInputOuterDemo = () => {
    return (
        <InputTagsOuter
            isRequired
            label="Tags"
            hint="This is a hint text to help user."
            tooltip="This is a tooltip."
            placeholder="Add tag"
            defaultValue={["Design", "Marketing"]}
        />
    );
};

export const Default = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <Input
                    isRequired
                    size="sm"
                    label="Email"
                    hint="This is a hint text to help user."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
                <Input
                    isRequired
                    isDisabled
                    size="sm"
                    label="Email"
                    hint="This is a hint text to help user."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
                <Input
                    isRequired
                    isInvalid
                    size="sm"
                    label="Email"
                    hint="This is an error message."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
            </div>
            <div className="flex flex-col gap-4">
                <Input
                    isRequired
                    size="md"
                    label="Email"
                    hint="This is a hint text to help user."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
                <Input
                    isRequired
                    size="md"
                    isDisabled
                    label="Email"
                    hint="This is a hint text to help user."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
                <Input
                    isRequired
                    size="md"
                    isInvalid
                    label="Email"
                    hint="This is an error message."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
            </div>
            <div className="flex flex-col gap-4">
                <Input
                    isRequired
                    size="lg"
                    label="Email"
                    hint="This is a hint text to help user."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
                <Input
                    isRequired
                    size="lg"
                    isDisabled
                    label="Email"
                    hint="This is a hint text to help user."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
                <Input
                    isRequired
                    size="lg"
                    isInvalid
                    label="Email"
                    hint="This is an error message."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
            </div>
        </div>
    );
};

export const LeadingIcon = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <Input
                    isRequired
                    size="sm"
                    icon={Mail01}
                    label="Email"
                    hint="This is a hint text to help user."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
                <Input
                    isRequired
                    isDisabled
                    size="sm"
                    icon={Mail01}
                    label="Email"
                    hint="This is a hint text to help user."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
                <Input
                    isRequired
                    isInvalid
                    size="sm"
                    icon={Mail01}
                    label="Email"
                    hint="This is an error message."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
            </div>
            <div className="flex flex-col gap-4">
                <Input
                    isRequired
                    size="md"
                    icon={Mail01}
                    label="Email"
                    hint="This is a hint text to help user."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
                <Input
                    isRequired
                    isDisabled
                    size="md"
                    icon={Mail01}
                    label="Email"
                    hint="This is a hint text to help user."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
                <Input
                    isRequired
                    isInvalid
                    size="md"
                    icon={Mail01}
                    label="Email"
                    hint="This is an error message."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
            </div>
            <div className="flex flex-col gap-4">
                <Input
                    isRequired
                    size="lg"
                    icon={Mail01}
                    label="Email"
                    hint="This is a hint text to help user."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
                <Input
                    isRequired
                    isDisabled
                    size="lg"
                    icon={Mail01}
                    label="Email"
                    hint="This is a hint text to help user."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
                <Input
                    isRequired
                    isInvalid
                    size="lg"
                    icon={Mail01}
                    label="Email"
                    hint="This is an error message."
                    placeholder="olivia@untitledui.com"
                    tooltip="This is a tooltip"
                />
            </div>
        </div>
    );
};

export const LeadingDropdown = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <InputGroup
                    isRequired
                    size="sm"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    leadingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "US", label: "US" },
                                { value: "CA", label: "CA" },
                                { value: "EU", label: "EU" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="+1 (555) 000-0000" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isDisabled
                    size="sm"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    leadingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "US", label: "US" },
                                { value: "CA", label: "CA" },
                                { value: "EU", label: "EU" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="+1 (555) 000-0000" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isInvalid
                    size="sm"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    leadingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "US", label: "US" },
                                { value: "CA", label: "CA" },
                                { value: "EU", label: "EU" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="+1 (555) 000-0000" tooltip="This is a tooltip" />
                </InputGroup>
            </div>
            <div className="flex flex-col gap-4">
                <InputGroup
                    isRequired
                    size="md"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    leadingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "US", label: "US" },
                                { value: "CA", label: "CA" },
                                { value: "EU", label: "EU" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="+1 (555) 000-0000" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isDisabled
                    size="md"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    leadingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "US", label: "US" },
                                { value: "CA", label: "CA" },
                                { value: "EU", label: "EU" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="+1 (555) 000-0000" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isInvalid
                    size="md"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    leadingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "US", label: "US" },
                                { value: "CA", label: "CA" },
                                { value: "EU", label: "EU" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="+1 (555) 000-0000" tooltip="This is a tooltip" />
                </InputGroup>
            </div>
            <div className="flex flex-col gap-4">
                <InputGroup
                    isRequired
                    size="lg"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    leadingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "US", label: "US" },
                                { value: "CA", label: "CA" },
                                { value: "EU", label: "EU" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="+1 (555) 000-0000" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isDisabled
                    size="lg"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    leadingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "US", label: "US" },
                                { value: "CA", label: "CA" },
                                { value: "EU", label: "EU" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="+1 (555) 000-0000" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isInvalid
                    size="lg"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    leadingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "US", label: "US" },
                                { value: "CA", label: "CA" },
                                { value: "EU", label: "EU" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="+1 (555) 000-0000" tooltip="This is a tooltip" />
                </InputGroup>
            </div>
        </div>
    );
};

export const TrailingDropdown = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <InputGroup
                    isRequired
                    size="sm"
                    prefix="$"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    trailingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "USD", label: "USD" },
                                { value: "CAD", label: "CAD" },
                                { value: "EUR", label: "EUR" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="1,000.00" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isDisabled
                    size="sm"
                    prefix="$"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    trailingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "USD", label: "USD" },
                                { value: "CAD", label: "CAD" },
                                { value: "EUR", label: "EUR" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="1,000.00" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isInvalid
                    size="sm"
                    prefix="$"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    trailingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "USD", label: "USD" },
                                { value: "CAD", label: "CAD" },
                                { value: "EUR", label: "EUR" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="1,000.00" tooltip="This is a tooltip" />
                </InputGroup>
            </div>
            <div className="flex flex-col gap-4">
                <InputGroup
                    isRequired
                    size="md"
                    prefix="$"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    trailingAddon={
                        <NativeSelect
                            options={[
                                { value: "USD", label: "USD" },
                                { value: "CAD", label: "CAD" },
                                { value: "EUR", label: "EUR" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="1,000.00" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isDisabled
                    size="md"
                    prefix="$"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    trailingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "USD", label: "USD" },
                                { value: "CAD", label: "CAD" },
                                { value: "EUR", label: "EUR" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="1,000.00" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isInvalid
                    size="md"
                    prefix="$"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    trailingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "USD", label: "USD" },
                                { value: "CAD", label: "CAD" },
                                { value: "EUR", label: "EUR" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="1,000.00" tooltip="This is a tooltip" />
                </InputGroup>
            </div>
            <div className="flex flex-col gap-4">
                <InputGroup
                    isRequired
                    size="lg"
                    prefix="$"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    trailingAddon={
                        <NativeSelect
                            options={[
                                { value: "USD", label: "USD" },
                                { value: "CAD", label: "CAD" },
                                { value: "EUR", label: "EUR" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="1,000.00" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isDisabled
                    size="lg"
                    prefix="$"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    trailingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "USD", label: "USD" },
                                { value: "CAD", label: "CAD" },
                                { value: "EUR", label: "EUR" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="1,000.00" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isInvalid
                    size="lg"
                    prefix="$"
                    label="Phone number"
                    hint="This is a hint text to help user."
                    trailingAddon={
                        <NativeSelect
                            aria-label="Country"
                            options={[
                                { value: "USD", label: "USD" },
                                { value: "CAD", label: "CAD" },
                                { value: "EUR", label: "EUR" },
                            ]}
                        />
                    }
                >
                    <InputBase type="tel" placeholder="1,000.00" tooltip="This is a tooltip" />
                </InputGroup>
            </div>
        </div>
    );
};

export const LeadingText = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <InputGroup
                    isRequired
                    size="sm"
                    label="Website"
                    hint="This is a hint text to help user."
                    leadingAddon={<InputGroup.Prefix>https://</InputGroup.Prefix>}
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isDisabled
                    size="sm"
                    label="Website"
                    hint="This is a hint text to help user."
                    leadingAddon={<InputGroup.Prefix>https://</InputGroup.Prefix>}
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isInvalid
                    size="sm"
                    label="Website"
                    hint="This is a hint text to help user."
                    leadingAddon={<InputGroup.Prefix>https://</InputGroup.Prefix>}
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
            </div>
            <div className="flex flex-col gap-4">
                <InputGroup
                    isRequired
                    size="md"
                    label="Website"
                    hint="This is a hint text to help user."
                    leadingAddon={<InputGroup.Prefix>https://</InputGroup.Prefix>}
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isDisabled
                    size="md"
                    label="Website"
                    hint="This is a hint text to help user."
                    leadingAddon={<InputGroup.Prefix>https://</InputGroup.Prefix>}
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isInvalid
                    size="md"
                    label="Website"
                    hint="This is a hint text to help user."
                    leadingAddon={<InputGroup.Prefix>https://</InputGroup.Prefix>}
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
            </div>
            <div className="flex flex-col gap-4">
                <InputGroup
                    isRequired
                    size="lg"
                    label="Website"
                    hint="This is a hint text to help user."
                    leadingAddon={<InputGroup.Prefix>https://</InputGroup.Prefix>}
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isDisabled
                    size="lg"
                    label="Website"
                    hint="This is a hint text to help user."
                    leadingAddon={<InputGroup.Prefix>https://</InputGroup.Prefix>}
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isInvalid
                    size="lg"
                    label="Website"
                    hint="This is a hint text to help user."
                    leadingAddon={<InputGroup.Prefix>https://</InputGroup.Prefix>}
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
            </div>
        </div>
    );
};

export const PaymentInputs = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <PaymentInput
                    isRequired
                    size="sm"
                    label="Card number"
                    placeholder="0000 0000 0000 0000"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip"
                />
                <PaymentInput
                    isRequired
                    isDisabled
                    size="sm"
                    label="Card number"
                    placeholder="0000 0000 0000 0000"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip"
                />
                <PaymentInput
                    isInvalid
                    isRequired
                    size="sm"
                    label="Card number"
                    placeholder="0000 0000 0000 0000"
                    hint="This is an error message."
                    tooltip="This is a tooltip"
                />
            </div>
            <div className="flex flex-col gap-4">
                <PaymentInput
                    isRequired
                    size="md"
                    label="Card number"
                    placeholder="0000 0000 0000 0000"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip"
                />
                <PaymentInput
                    isRequired
                    isDisabled
                    size="md"
                    label="Card number"
                    placeholder="0000 0000 0000 0000"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip"
                />
                <PaymentInput
                    isRequired
                    size="md"
                    isInvalid
                    label="Card number"
                    placeholder="0000 0000 0000 0000"
                    hint="This is an error message."
                    tooltip="This is a tooltip"
                />
            </div>
            <div className="flex flex-col gap-4">
                <PaymentInput
                    isRequired
                    size="lg"
                    label="Card number"
                    placeholder="0000 0000 0000 0000"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip"
                />
                <PaymentInput
                    isRequired
                    isDisabled
                    size="lg"
                    label="Card number"
                    placeholder="0000 0000 0000 0000"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip"
                />
                <PaymentInput
                    isRequired
                    isInvalid
                    size="lg"
                    label="Card number"
                    placeholder="0000 0000 0000 0000"
                    hint="This is an error message."
                    tooltip="This is a tooltip"
                />
            </div>
        </div>
    );
};

export const TrailingButton = () => {
    const { copy, copied } = useClipboard();
    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState("");
    const [inputValue3, setInputValue3] = useState("");
    const [inputValue4, setInputValue4] = useState("");
    const [inputValue5, setInputValue5] = useState("");
    const [inputValue6, setInputValue6] = useState("");

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <InputGroup
                    isRequired
                    size="sm"
                    label="Website"
                    hint="This is a hint text to help user."
                    onChange={setInputValue1}
                    trailingAddon={
                        <Button
                            size="sm"
                            color="secondary"
                            iconLeading={copied === "input-1" ? Check : Copy01}
                            onClick={() => copy(inputValue1 || "www.untitledui.com", "input-1")}
                        >
                            Copy
                        </Button>
                    }
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>

                <InputGroup
                    isRequired
                    isDisabled
                    size="sm"
                    label="Website"
                    hint="This is a hint text to help user."
                    onChange={setInputValue2}
                    trailingAddon={
                        <Button
                            isDisabled
                            size="sm"
                            color="secondary"
                            iconLeading={copied === "input-2" ? Check : Copy01}
                            onClick={() => copy(inputValue2 || "www.untitledui.com", "input-2")}
                        >
                            Copy
                        </Button>
                    }
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isInvalid
                    size="sm"
                    label="Website"
                    hint="This is an error message."
                    onChange={setInputValue3}
                    trailingAddon={
                        <Button
                            size="sm"
                            color="secondary"
                            iconLeading={copied === "input-3" ? Check : Copy01}
                            onClick={() => copy(inputValue3 || "www.untitledui.com", "input-3")}
                        >
                            Copy
                        </Button>
                    }
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
            </div>
            <div className="flex flex-col gap-4">
                <InputGroup
                    isRequired
                    label="Website"
                    size="md"
                    hint="This is a hint text to help user."
                    onChange={setInputValue4}
                    trailingAddon={
                        <Button
                            color="secondary"
                            size="md"
                            iconLeading={copied === "input-4" ? Check : Copy01}
                            onClick={() => copy(inputValue4 || "www.untitledui.com", "input-4")}
                        >
                            Copy
                        </Button>
                    }
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isDisabled
                    label="Website"
                    size="md"
                    hint="This is a hint text to help user."
                    onChange={setInputValue5}
                    trailingAddon={
                        <Button
                            isDisabled
                            color="secondary"
                            size="md"
                            iconLeading={copied === "input-5" ? Check : Copy01}
                            onClick={() => copy(inputValue5 || "www.untitledui.com", "input-5")}
                        >
                            Copy
                        </Button>
                    }
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isInvalid
                    label="Website"
                    size="md"
                    hint="This is an error message."
                    onChange={setInputValue6}
                    trailingAddon={
                        <Button
                            color="secondary"
                            size="md"
                            iconLeading={copied === "input-6" ? Check : Copy01}
                            onClick={() => copy(inputValue6 || "www.untitledui.com", "input-6")}
                        >
                            Copy
                        </Button>
                    }
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
            </div>
            <div className="flex flex-col gap-4">
                <InputGroup
                    isRequired
                    label="Website"
                    size="lg"
                    hint="This is a hint text to help user."
                    onChange={setInputValue4}
                    trailingAddon={
                        <Button
                            color="secondary"
                            size="lg"
                            iconLeading={copied === "input-4" ? Check : Copy01}
                            onClick={() => copy(inputValue4 || "www.untitledui.com", "input-4")}
                        >
                            Copy
                        </Button>
                    }
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isDisabled
                    label="Website"
                    size="lg"
                    hint="This is a hint text to help user."
                    onChange={setInputValue5}
                    trailingAddon={
                        <Button
                            isDisabled
                            color="secondary"
                            size="lg"
                            iconLeading={copied === "input-5" ? Check : Copy01}
                            onClick={() => copy(inputValue5 || "www.untitledui.com", "input-5")}
                        >
                            Copy
                        </Button>
                    }
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
                <InputGroup
                    isRequired
                    isInvalid
                    label="Website"
                    size="lg"
                    hint="This is an error message."
                    onChange={setInputValue6}
                    trailingAddon={
                        <Button
                            color="secondary"
                            size="lg"
                            iconLeading={copied === "input-6" ? Check : Copy01}
                            onClick={() => copy(inputValue6 || "www.untitledui.com", "input-6")}
                        >
                            Copy
                        </Button>
                    }
                >
                    <InputBase placeholder="www.untitledui.com" tooltip="This is a tooltip" />
                </InputGroup>
            </div>
        </div>
    );
};

export const PasswordInputs = () => {
    const [password, setPassword] = useState("");

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <TextField isRequired size="sm" minLength={8} name="password" autoComplete="new-password" onChange={setPassword}>
                    <Label>Password</Label>
                    <InputBase icon={Lock03} type="password" placeholder="••••••••••••" />
                    <HintText className="flex items-center gap-1">
                        <CheckCircle
                            className={cx(
                                "size-4 stroke-[2.25px] text-fg-quaternary transition duration-100 ease-linear in-invalid:hidden",
                                password.length >= 8 && "text-fg-success-primary",
                            )}
                        />
                        <AlertCircle className="hidden size-4 stroke-[2.25px] text-fg-error-secondary in-invalid:inline-block" />
                        Must be at least 8 characters.
                    </HintText>
                </TextField>
                <TextField isRequired isDisabled size="sm" minLength={8} name="password" autoComplete="new-password" onChange={setPassword}>
                    <Label>Password</Label>
                    <InputBase icon={Lock03} type="password" placeholder="••••••••••••" />
                    <HintText className="flex items-center gap-1">
                        <CheckCircle
                            className={cx(
                                "size-4 stroke-[2.25px] text-fg-quaternary transition duration-100 ease-linear in-invalid:hidden",
                                password.length >= 8 && "text-fg-success-primary",
                            )}
                        />
                        <AlertCircle className="hidden size-4 stroke-[2.25px] text-fg-error-secondary in-invalid:inline-block" />
                        Must be at least 8 characters.
                    </HintText>
                </TextField>
                <TextField isRequired isInvalid size="sm" minLength={8} name="password" autoComplete="new-password" onChange={setPassword}>
                    <Label>Password</Label>
                    <InputBase icon={Lock03} type="password" placeholder="••••••••••••" />
                    <HintText className="flex items-center gap-1">
                        <CheckCircle
                            className={cx(
                                "size-4 stroke-[2.25px] text-fg-quaternary transition duration-100 ease-linear in-invalid:hidden",
                                password.length >= 8 && "text-fg-success-primary",
                            )}
                        />
                        <AlertCircle className="hidden size-4 stroke-[2.25px] text-fg-error-secondary in-invalid:inline-block" />
                        Must be at least 8 characters.
                    </HintText>
                </TextField>
            </div>
            <div className="flex flex-col gap-4">
                <TextField isRequired size="md" minLength={8} name="password" autoComplete="new-password" onChange={setPassword}>
                    <Label>Password</Label>
                    <InputBase icon={Lock03} type="password" placeholder="••••••••••••" />
                    <HintText className="flex items-center gap-1">
                        <CheckCircle
                            className={cx(
                                "size-4 stroke-[2.25px] text-fg-quaternary transition duration-100 ease-linear in-invalid:hidden",
                                password.length >= 8 && "text-fg-success-primary",
                            )}
                        />
                        <AlertCircle className="hidden size-4 stroke-[2.25px] text-fg-error-secondary in-invalid:inline-block" />
                        Must be at least 8 characters.
                    </HintText>
                </TextField>
                <TextField isRequired isDisabled size="md" minLength={8} name="password" autoComplete="new-password" onChange={setPassword}>
                    <Label>Password</Label>
                    <InputBase icon={Lock03} type="password" placeholder="••••••••••••" />
                    <HintText className="flex items-center gap-1">
                        <CheckCircle
                            className={cx(
                                "size-4 stroke-[2.25px] text-fg-quaternary transition duration-100 ease-linear in-invalid:hidden",
                                password.length >= 8 && "text-fg-success-primary",
                            )}
                        />
                        <AlertCircle className="hidden size-4 stroke-[2.25px] text-fg-error-secondary in-invalid:inline-block" />
                        Must be at least 8 characters.
                    </HintText>
                </TextField>
                <TextField isRequired isInvalid size="md" minLength={8} name="password" autoComplete="new-password" onChange={setPassword}>
                    <Label>Password</Label>
                    <InputBase icon={Lock03} type="password" placeholder="••••••••••••" />
                    <HintText className="flex items-center gap-1">
                        <CheckCircle
                            className={cx(
                                "size-4 stroke-[2.25px] text-fg-quaternary transition duration-100 ease-linear in-invalid:hidden",
                                password.length >= 8 && "text-fg-success-primary",
                            )}
                        />
                        <AlertCircle className="hidden size-4 stroke-[2.25px] text-fg-error-secondary in-invalid:inline-block" />
                        Must be at least 8 characters.
                    </HintText>
                </TextField>
            </div>
            <div className="flex flex-col gap-4">
                <TextField isRequired size="lg" minLength={8} name="password" autoComplete="new-password" onChange={setPassword}>
                    <Label>Password</Label>
                    <InputBase icon={Lock03} type="password" placeholder="••••••••••••" />
                    <HintText className="flex items-center gap-1">
                        <CheckCircle
                            className={cx(
                                "size-4 stroke-[2.25px] text-fg-quaternary transition duration-100 ease-linear in-invalid:hidden",
                                password.length >= 8 && "text-fg-success-primary",
                            )}
                        />
                        <AlertCircle className="hidden size-4 stroke-[2.25px] text-fg-error-secondary in-invalid:inline-block" />
                        Must be at least 8 characters.
                    </HintText>
                </TextField>
                <TextField isRequired isDisabled size="lg" minLength={8} name="password" autoComplete="new-password" onChange={setPassword}>
                    <Label>Password</Label>
                    <InputBase icon={Lock03} type="password" placeholder="••••••••••••" />
                    <HintText className="flex items-center gap-1">
                        <CheckCircle
                            className={cx(
                                "size-4 stroke-[2.25px] text-fg-quaternary transition duration-100 ease-linear in-invalid:hidden",
                                password.length >= 8 && "text-fg-success-primary",
                            )}
                        />
                        <AlertCircle className="hidden size-4 stroke-[2.25px] text-fg-error-secondary in-invalid:inline-block" />
                        Must be at least 8 characters.
                    </HintText>
                </TextField>
                <TextField isRequired isInvalid size="lg" minLength={8} name="password" autoComplete="new-password" onChange={setPassword}>
                    <Label>Password</Label>
                    <InputBase icon={Lock03} type="password" placeholder="••••••••••••" />
                    <HintText className="flex items-center gap-1">
                        <CheckCircle
                            className={cx(
                                "size-4 stroke-[2.25px] text-fg-quaternary transition duration-100 ease-linear in-invalid:hidden",
                                password.length >= 8 && "text-fg-success-primary",
                            )}
                        />
                        <AlertCircle className="hidden size-4 stroke-[2.25px] text-fg-error-secondary in-invalid:inline-block" />
                        Must be at least 8 characters.
                    </HintText>
                </TextField>
            </div>
        </div>
    );
};

export const DateInputs = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <InputDate
                    isRequired
                    label="Date"
                    hint="This is a hint text to help user."
                    placeholder="Select a date"
                    tooltip="This is a tooltip"
                    size="sm"
                    granularity="minute"
                    icon={Calendar}
                />
                <InputDate
                    isRequired
                    isDisabled
                    label="Date"
                    hint="This is a hint text to help user."
                    placeholder="Select a date"
                    tooltip="This is a tooltip"
                    size="sm"
                    granularity="minute"
                    icon={Calendar}
                />
                <InputDate
                    isRequired
                    isInvalid
                    label="Date"
                    hint="This is an error message."
                    placeholder="Select a date"
                    tooltip="This is a tooltip"
                    size="sm"
                    granularity="minute"
                    icon={Calendar}
                />
            </div>
            <div className="flex flex-col gap-4">
                <InputDate
                    isRequired
                    label="Date"
                    hint="This is a hint text to help user."
                    placeholder="Select a date"
                    tooltip="This is a tooltip"
                    size="md"
                    granularity="minute"
                    icon={Calendar}
                />
                <InputDate
                    isRequired
                    isDisabled
                    label="Date"
                    hint="This is a hint text to help user."
                    placeholder="Select a date"
                    tooltip="This is a tooltip"
                    size="md"
                    granularity="minute"
                    icon={Calendar}
                />
                <InputDate
                    isRequired
                    isInvalid
                    label="Date"
                    hint="This is an error message."
                    placeholder="Select a date"
                    tooltip="This is a tooltip"
                    size="md"
                    granularity="minute"
                    icon={Calendar}
                />
            </div>
            <div className="flex flex-col gap-4">
                <InputDate
                    isRequired
                    label="Date"
                    hint="This is a hint text to help user."
                    placeholder="Select a date"
                    tooltip="This is a tooltip"
                    size="lg"
                    granularity="minute"
                    icon={Calendar}
                />
                <InputDate
                    isRequired
                    isDisabled
                    label="Date"
                    hint="This is a hint text to help user."
                    placeholder="Select a date"
                    tooltip="This is a tooltip"
                    size="lg"
                    granularity="minute"
                    icon={Calendar}
                />
                <InputDate
                    isRequired
                    isInvalid
                    label="Date"
                    hint="This is an error message."
                    placeholder="Select a date"
                    tooltip="This is a tooltip"
                    size="lg"
                    granularity="minute"
                    icon={Calendar}
                />
            </div>
        </div>
    );
};

export const NumberInputsHorizontal = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <InputNumber isRequired orientation="horizontal" label="Number" hint="This is a hint text to help user." placeholder="100" size="sm" />
                <InputNumber
                    isRequired
                    orientation="horizontal"
                    isDisabled
                    label="Number"
                    hint="This is a hint text to help user."
                    placeholder="100"
                    size="sm"
                />
                <InputNumber isRequired orientation="horizontal" isInvalid label="Number" hint="This is an error message." placeholder="100" size="sm" />
            </div>
            <div className="flex flex-col gap-4">
                <InputNumber isRequired orientation="horizontal" label="Number" hint="This is a hint text to help user." placeholder="100" size="md" />
                <InputNumber
                    isRequired
                    orientation="horizontal"
                    isDisabled
                    label="Number"
                    hint="This is a hint text to help user."
                    placeholder="100"
                    size="md"
                />
                <InputNumber isRequired orientation="horizontal" isInvalid label="Number" hint="This is an error message." placeholder="100" size="md" />
            </div>
            <div className="flex flex-col gap-4">
                <InputNumber isRequired orientation="horizontal" label="Number" hint="This is a hint text to help user." placeholder="100" size="lg" />
                <InputNumber
                    isRequired
                    orientation="horizontal"
                    isDisabled
                    label="Number"
                    hint="This is a hint text to help user."
                    placeholder="100"
                    size="lg"
                />
                <InputNumber isRequired orientation="horizontal" isInvalid label="Number" hint="This is an error message." placeholder="100" size="lg" />
            </div>
        </div>
    );
};

export const NumberInputsVertical = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <InputNumber isRequired label="Number" hint="This is a hint text to help user." placeholder="100" size="sm" />
                <InputNumber isRequired isDisabled label="Number" hint="This is a hint text to help user." placeholder="100" size="sm" />
                <InputNumber isRequired isInvalid label="Number" hint="This is an error message." placeholder="100" size="sm" />
            </div>
            <div className="flex flex-col gap-4">
                <InputNumber isRequired label="Number" hint="This is a hint text to help user." placeholder="100" size="md" />
                <InputNumber isRequired isDisabled label="Number" hint="This is a hint text to help user." placeholder="100" size="md" />
                <InputNumber isRequired isInvalid label="Number" hint="This is an error message." placeholder="100" size="md" />
            </div>
            <div className="flex flex-col gap-4">
                <InputNumber isRequired label="Number" hint="This is a hint text to help user." placeholder="100" size="lg" />
                <InputNumber isRequired isDisabled label="Number" hint="This is a hint text to help user." placeholder="100" size="lg" />
                <InputNumber isRequired isInvalid label="Number" hint="This is an error message." placeholder="100" size="lg" />
            </div>
        </div>
    );
};

export const TagInputs = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <InputTags
                    isRequired
                    label="Tags"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip."
                    placeholder="Type and press Enter"
                    defaultValue={["Design", "Engineering"]}
                    size="sm"
                />
                <InputTags
                    isRequired
                    isDisabled
                    label="Tags"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip."
                    placeholder="Type and press Enter"
                    defaultValue={["Design", "Engineering"]}
                    size="sm"
                />
                <InputTags
                    isRequired
                    isInvalid
                    label="Tags"
                    tooltip="This is a tooltip."
                    hint="This is an error message."
                    placeholder="Type and press Enter"
                    defaultValue={["Design", "Engineering"]}
                    size="sm"
                />
            </div>
            <div className="flex flex-col gap-4">
                <InputTags
                    isRequired
                    label="Tags"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip."
                    placeholder="Type and press Enter"
                    defaultValue={["Design", "Engineering"]}
                    size="md"
                />
                <InputTags
                    isRequired
                    isDisabled
                    label="Tags"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip."
                    placeholder="Type and press Enter"
                    defaultValue={["Design", "Engineering"]}
                    size="md"
                />
                <InputTags
                    isRequired
                    isInvalid
                    label="Tags"
                    hint="This is an error message."
                    tooltip="This is a tooltip."
                    placeholder="Type and press Enter"
                    defaultValue={["Design", "Engineering"]}
                    size="md"
                />
            </div>
            <div className="flex flex-col gap-4">
                <InputTags
                    isRequired
                    label="Tags"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip."
                    placeholder="Type and press Enter"
                    defaultValue={["Design", "Engineering"]}
                    size="lg"
                />
                <InputTags
                    isRequired
                    isDisabled
                    label="Tags"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip."
                    placeholder="Type and press Enter"
                    defaultValue={["Design", "Engineering"]}
                    size="lg"
                />
                <InputTags
                    isRequired
                    isInvalid
                    label="Tags"
                    hint="This is an error message."
                    tooltip="This is a tooltip."
                    placeholder="Type and press Enter"
                    defaultValue={["Design", "Engineering"]}
                    size="lg"
                />
            </div>
        </div>
    );
};

export const FileUploadInputDemo = ({ size = "sm" as "sm" | "md" | "lg" }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (files: FileList | null) => {
        if (!files || files.length === 0) return;
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 3000);
    };

    return <InputFile isRequired size={size} label="Upload file" hint="SVG, PNG, JPG or GIF (max. 800x400px)." onChange={handleChange} isLoading={isLoading} />;
};

export const FileUploadInputs = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <FileUploadInputDemo size="sm" />
                <InputFile isRequired isDisabled size="sm" label="Upload file" hint="This is a hint text to help user." />
                <InputFile isRequired isInvalid size="sm" label="Upload file" hint="This is an error message." />
            </div>
            <div className="flex flex-col gap-4">
                <FileUploadInputDemo size="md" />
                <InputFile isRequired isDisabled size="md" label="Upload file" hint="This is a hint text to help user." />
                <InputFile isRequired isInvalid size="md" label="Upload file" hint="This is an error message." />
            </div>
            <div className="flex flex-col gap-4">
                <FileUploadInputDemo size="lg" />
                <InputFile isRequired isDisabled size="lg" label="Upload file" hint="This is a hint text to help user." />
                <InputFile isRequired isInvalid size="lg" label="Upload file" hint="This is an error message." />
            </div>
        </div>
    );
};

export const TagInputsOuter = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <InputTagsOuter
                    isRequired
                    label="Tags"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip."
                    placeholder="Add tag"
                    defaultValue={["Design", "Marketing"]}
                    size="sm"
                />
                <InputTagsOuter
                    isRequired
                    isDisabled
                    label="Tags"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip."
                    placeholder="Add tag"
                    defaultValue={["Design", "Marketing"]}
                    size="sm"
                />
                <InputTagsOuter
                    isRequired
                    isInvalid
                    label="Tags"
                    tooltip="This is a tooltip."
                    placeholder="Add tag"
                    defaultValue={["Design", "Marketing"]}
                    size="sm"
                />
            </div>
            <div className="flex flex-col gap-4">
                <InputTagsOuter
                    isRequired
                    label="Tags"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip."
                    placeholder="Add tag"
                    defaultValue={["Design", "Marketing"]}
                    size="md"
                />
                <InputTagsOuter
                    isRequired
                    isDisabled
                    label="Tags"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip."
                    placeholder="Add tag"
                    defaultValue={["Design", "Marketing"]}
                    size="md"
                />
                <InputTagsOuter
                    isRequired
                    isInvalid
                    label="Tags"
                    tooltip="This is a tooltip."
                    placeholder="Add tag"
                    defaultValue={["Design", "Marketing"]}
                    size="md"
                />
            </div>
            <div className="flex flex-col gap-4">
                <InputTagsOuter
                    isRequired
                    label="Tags"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip."
                    placeholder="Add tag"
                    defaultValue={["Design", "Marketing"]}
                    size="lg"
                />
                <InputTagsOuter
                    isRequired
                    isDisabled
                    label="Tags"
                    hint="This is a hint text to help user."
                    tooltip="This is a tooltip."
                    placeholder="Add tag"
                    defaultValue={["Design", "Marketing"]}
                    size="lg"
                />
                <InputTagsOuter
                    isRequired
                    isInvalid
                    label="Tags"
                    tooltip="This is a tooltip."
                    placeholder="Add tag"
                    defaultValue={["Design", "Marketing"]}
                    size="lg"
                />
            </div>
        </div>
    );
};
`,tn=()=>(0,Z.jsxs)(`div`,{className:`mx-auto max-w-4xl px-4 py-12 md:px-8`,children:[(0,Z.jsxs)(`div`,{className:`mb-12`,children:[(0,Z.jsx)(`h1`,{className:`text-display-sm font-semibold text-primary`,children:`Inputs`}),(0,Z.jsx)(`p`,{className:`mt-2 text-lg text-tertiary`,children:`Text input fields with icons, validation states, and sizes.`})]}),(0,Z.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,Z.jsx)(G,{title:`Default`,description:`Standard text input.`,sourceCode:$,exportName:`DefaultDemo`,children:(0,Z.jsx)(Rt,{})}),(0,Z.jsx)(G,{title:`Disabled`,description:`Disabled input state.`,sourceCode:$,exportName:`DisabledDemo`,children:(0,Z.jsx)(zt,{})}),(0,Z.jsx)(G,{title:`Invalid`,description:`Input with error validation.`,sourceCode:$,exportName:`InvalidDemo`,children:(0,Z.jsx)(Bt,{})}),(0,Z.jsx)(G,{title:`Sizes`,description:`Input in different sizes.`,sourceCode:$,exportName:`SizesDemo`,children:(0,Z.jsx)(Vt,{})}),(0,Z.jsx)(G,{title:`Leading Icon`,description:`Input with a leading icon.`,sourceCode:$,exportName:`LeadingIconDemo`,children:(0,Z.jsx)(Ht,{})}),(0,Z.jsx)(G,{title:`Leading Dropdown`,description:`Input with a leading dropdown.`,sourceCode:$,exportName:`LeadingDropdownDemo`,children:(0,Z.jsx)(Ut,{})}),(0,Z.jsx)(G,{title:`Trailing Dropdown`,description:`Input with a trailing dropdown.`,sourceCode:$,exportName:`TrailingDropdownDemo`,children:(0,Z.jsx)(Wt,{})}),(0,Z.jsx)(G,{title:`Leading Text`,description:`Input with leading text.`,sourceCode:$,exportName:`LeadingTextDemo`,children:(0,Z.jsx)(Gt,{})}),(0,Z.jsx)(G,{title:`Payment Input`,description:`Payment card input field.`,sourceCode:$,exportName:`PaymentInputDemo`,children:(0,Z.jsx)(Kt,{})}),(0,Z.jsx)(G,{title:`Trailing Button`,description:`Input with a trailing button.`,sourceCode:$,exportName:`TrailingButtonDemo`,children:(0,Z.jsx)(qt,{})}),(0,Z.jsx)(G,{title:`Password Input`,description:`Password input with visibility toggle.`,sourceCode:$,exportName:`PasswordInputDemo`,children:(0,Z.jsx)(Jt,{})}),(0,Z.jsx)(G,{title:`Date Input`,description:`Date picker input.`,sourceCode:$,exportName:`DateInputDemo`,children:(0,Z.jsx)(Yt,{})}),(0,Z.jsx)(G,{title:`Number Input Horizontal`,description:`Horizontal number stepper input.`,sourceCode:$,exportName:`NumberInputHorizontalDemo`,children:(0,Z.jsx)(Xt,{})}),(0,Z.jsx)(G,{title:`Number Input Vertical`,description:`Vertical number stepper input.`,sourceCode:$,exportName:`NumberInputVerticalDemo`,children:(0,Z.jsx)(Zt,{})}),(0,Z.jsx)(G,{title:`Tag Input`,description:`Input for adding tags.`,sourceCode:$,exportName:`TagInputDemo`,children:(0,Z.jsx)(Qt,{})}),(0,Z.jsx)(G,{title:`Tag Input Outer`,description:`Tag input with outer tag display.`,sourceCode:$,exportName:`TagInputOuterDemo`,children:(0,Z.jsx)($t,{})}),(0,Z.jsx)(G,{title:`File Upload Input`,description:`File upload input field.`,sourceCode:$,exportName:`FileUploadInputDemo`,children:(0,Z.jsx)(en,{})}),(0,Z.jsx)(G,{title:`PIN Input`,description:`Four-digit PIN entry.`,sourceCode:Oe,exportName:`FourDigitsDemo`,children:(0,Z.jsx)(De,{})})]})]});export{tn as InputsPage};