import{o as e,t}from"./jsx-runtime-9YgKe2Eq.js";import{t as n}from"./react-JjZAc9W2.js";import{t as r}from"./cx-CmQqEIOd.js";import{n as i,t as a}from"./label-BViWFIap.js";var o=e(n(),1),s=Object.defineProperty,c=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ee=(e,t)=>{for(var n in t||={})d.call(t,n)&&p(e,n,t[n]);if(u)for(var n of u(t))f.call(t,n)&&p(e,n,t[n]);return e},m=(e,t)=>c(e,l(t)),h=(e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&u)for(var r of u(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n};function g(e){return[setTimeout(e,0),setTimeout(e,10),setTimeout(e,50)]}function _(e){let t=o.useRef();return o.useEffect(()=>{t.current=e}),t.current}var v=18,y=40,b=`${y}px`,x=[`[data-lastpass-icon-root]`,`com-1password-button`,`[data-dashlanecreated]`,`[style$="2147483647 !important;"]`].join(`,`);function S({containerRef:e,inputRef:t,pushPasswordManagerStrategy:n,isFocused:r}){let[i,a]=o.useState(!1),[s,c]=o.useState(!1),[l,u]=o.useState(!1),d=o.useMemo(()=>n===`none`?!1:(n===`increase-width`||n===`experimental-no-flickering`)&&i&&s,[i,s,n]),f=o.useCallback(()=>{let r=e.current,i=t.current;if(!r||!i||l||n===`none`)return;let o=r,s=o.getBoundingClientRect().left+o.offsetWidth,c=o.getBoundingClientRect().top+o.offsetHeight/2,d=s-v,f=c;document.querySelectorAll(x).length===0&&document.elementFromPoint(d,f)===r||(a(!0),u(!0))},[e,t,l,n]);return o.useEffect(()=>{let t=e.current;if(!t||n===`none`)return;function r(){c(window.innerWidth-t.getBoundingClientRect().right>=y)}r();let i=setInterval(r,1e3);return()=>{clearInterval(i)}},[e,n]),o.useEffect(()=>{let e=r||document.activeElement===t.current;if(n===`none`||!e)return;let i=setTimeout(f,0),a=setTimeout(f,2e3),o=setTimeout(f,5e3),s=setTimeout(()=>{u(!0)},6e3);return()=>{clearTimeout(i),clearTimeout(a),clearTimeout(o),clearTimeout(s)}},[t,r,n,f]),{hasPWMBadge:i,willPushPWMBadge:d,PWM_BADGE_SPACE_WIDTH:b}}var C=o.createContext({}),w=o.forwardRef((e,t)=>{var n=e,{value:r,onChange:i,maxLength:a,textAlign:s=`left`,pattern:c,placeholder:l,inputMode:u=`numeric`,onComplete:d,pushPasswordManagerStrategy:f=`increase-width`,pasteTransformer:p,containerClassName:v,noScriptCSSFallback:y=E,render:b,children:x}=n,w=h(n,[`value`,`onChange`,`maxLength`,`textAlign`,`pattern`,`placeholder`,`inputMode`,`onComplete`,`pushPasswordManagerStrategy`,`pasteTransformer`,`containerClassName`,`noScriptCSSFallback`,`render`,`children`]),D;let[O,k]=o.useState(typeof w.defaultValue==`string`?w.defaultValue:``),A=r??O,j=_(A),M=o.useCallback(e=>{i?.(e),k(e)},[i]),N=o.useMemo(()=>c?typeof c==`string`?new RegExp(c):c:null,[c]),P=o.useRef(null),F=o.useRef(null),I=o.useRef({value:A,onChange:M,isIOS:typeof window<`u`&&((D=window==null?void 0:window.CSS)?.supports)?.call(D,`-webkit-touch-callout`,`none`)}),L=o.useRef({prev:[P.current?.selectionStart,P.current?.selectionEnd,P.current?.selectionDirection]});o.useImperativeHandle(t,()=>P.current,[]),o.useEffect(()=>{let e=P.current,t=F.current;if(!e||!t)return;I.current.value!==e.value&&I.current.onChange(e.value),L.current.prev=[e.selectionStart,e.selectionEnd,e.selectionDirection];function n(){if(document.activeElement!==e){U(null),G(null);return}let t=e.selectionStart,n=e.selectionEnd,r=e.selectionDirection,i=e.maxLength,a=e.value,o=L.current.prev,s=-1,c=-1,l;if(a.length!==0&&t!==null&&n!==null){let e=t===n,r=t===a.length&&a.length<i;if(e&&!r){let e=t;if(e===0)s=0,c=1,l=`forward`;else if(e===i)s=e-1,c=e,l=`backward`;else if(i>1&&a.length>1){let t=0;if(o[0]!==null&&o[1]!==null){l=e<o[1]?`backward`:`forward`;let n=o[0]===o[1]&&o[0]<i;l===`backward`&&!n&&(t=-1)}s=t+e,c=t+e+1}}s!==-1&&c!==-1&&s!==c&&P.current.setSelectionRange(s,c,l)}let u=s===-1?t:s,d=c===-1?n:c,f=l??r;U(u),G(d),L.current.prev=[u,d,f]}if(document.addEventListener(`selectionchange`,n,{capture:!0}),n(),document.activeElement===e&&V(!0),!document.getElementById(`input-otp-style`)){let e=document.createElement(`style`);if(e.id=`input-otp-style`,document.head.appendChild(e),e.sheet){let t=`background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;`;T(e.sheet,`[data-input-otp]::selection { background: transparent !important; color: transparent !important; }`),T(e.sheet,`[data-input-otp]:autofill { ${t} }`),T(e.sheet,`[data-input-otp]:-webkit-autofill { ${t} }`),T(e.sheet,`@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }`),T(e.sheet,`[data-input-otp] + * { pointer-events: all !important; }`)}}let r=()=>{t&&t.style.setProperty(`--root-height`,`${e.clientHeight}px`)};r();let i=new ResizeObserver(r);return i.observe(e),()=>{document.removeEventListener(`selectionchange`,n,{capture:!0}),i.disconnect()}},[]);let[R,z]=o.useState(!1),[B,V]=o.useState(!1),[H,U]=o.useState(null),[W,G]=o.useState(null);o.useEffect(()=>{g(()=>{var e;(e=P.current)==null||e.dispatchEvent(new Event(`input`));let t=P.current?.selectionStart,n=P.current?.selectionEnd,r=P.current?.selectionDirection;t!==null&&n!==null&&(U(t),G(n),L.current.prev=[t,n,r])})},[A,B]),o.useEffect(()=>{j!==void 0&&A!==j&&j.length<a&&A.length===a&&d?.(A)},[a,d,j,A]);let K=S({containerRef:F,inputRef:P,pushPasswordManagerStrategy:f,isFocused:B}),q=o.useCallback(e=>{let t=e.currentTarget.value.slice(0,a);if(t.length>0&&N&&!N.test(t)){e.preventDefault();return}typeof j==`string`&&t.length<j.length&&document.dispatchEvent(new Event(`selectionchange`)),M(t)},[a,M,j,N]),J=o.useCallback(()=>{var e;if(P.current){let t=Math.min(P.current.value.length,a-1),n=P.current.value.length;(e=P.current)==null||e.setSelectionRange(t,n),U(t),G(n)}V(!0)},[a]),Y=o.useCallback(e=>{let t=P.current;if(!p&&(!I.current.isIOS||!e.clipboardData||!t))return;let n=e.clipboardData.getData(`text/plain`),r=p?p(n):n;e.preventDefault();let i=P.current?.selectionStart,o=P.current?.selectionEnd,s=(i===o?A.slice(0,i)+r+A.slice(i):A.slice(0,i)+r+A.slice(o)).slice(0,a);if(s.length>0&&N&&!N.test(s))return;t.value=s,M(s);let c=Math.min(s.length,a-1),l=s.length;t.setSelectionRange(c,l),U(c),G(l)},[a,M,N,A]),X=o.useMemo(()=>({position:`relative`,cursor:w.disabled?`default`:`text`,userSelect:`none`,WebkitUserSelect:`none`,pointerEvents:`none`}),[w.disabled]),Z=o.useMemo(()=>({position:`absolute`,inset:0,width:K.willPushPWMBadge?`calc(100% + ${K.PWM_BADGE_SPACE_WIDTH})`:`100%`,clipPath:K.willPushPWMBadge?`inset(0 ${K.PWM_BADGE_SPACE_WIDTH} 0 0)`:void 0,height:`100%`,display:`flex`,textAlign:s,opacity:`1`,color:`transparent`,pointerEvents:`all`,background:`transparent`,caretColor:`transparent`,border:`0 solid transparent`,outline:`0 solid transparent`,boxShadow:`none`,lineHeight:`1`,letterSpacing:`-.5em`,fontSize:`var(--root-height)`,fontFamily:`monospace`,fontVariantNumeric:`tabular-nums`}),[K.PWM_BADGE_SPACE_WIDTH,K.willPushPWMBadge,s]),Q=o.useMemo(()=>o.createElement(`input`,m(ee({autoComplete:w.autoComplete||`one-time-code`},w),{"data-input-otp":!0,"data-input-otp-placeholder-shown":A.length===0||void 0,"data-input-otp-mss":H,"data-input-otp-mse":W,inputMode:u,pattern:N?.source,"aria-placeholder":l,style:Z,maxLength:a,value:A,ref:P,onPaste:e=>{var t;Y(e),(t=w.onPaste)==null||t.call(w,e)},onChange:q,onMouseOver:e=>{var t;z(!0),(t=w.onMouseOver)==null||t.call(w,e)},onMouseLeave:e=>{var t;z(!1),(t=w.onMouseLeave)==null||t.call(w,e)},onFocus:e=>{var t;J(),(t=w.onFocus)==null||t.call(w,e)},onBlur:e=>{var t;V(!1),(t=w.onBlur)==null||t.call(w,e)}})),[q,J,Y,u,Z,a,W,H,w,N?.source,A]),$=o.useMemo(()=>({slots:Array.from({length:a}).map((e,t)=>{let n=B&&H!==null&&W!==null&&(H===W&&t===H||t>=H&&t<W),r=A[t]===void 0?null:A[t];return{char:r,placeholderChar:A[0]===void 0?l?.[t]??null:null,isActive:n,hasFakeCaret:n&&r===null}}),isFocused:B,isHovering:!w.disabled&&R}),[B,R,a,W,H,w.disabled,A]),te=o.useMemo(()=>b?b($):o.createElement(C.Provider,{value:$},x),[x,$,b]);return o.createElement(o.Fragment,null,y!==null&&o.createElement(`noscript`,null,o.createElement(`style`,null,y)),o.createElement(`div`,{ref:F,"data-input-otp-container":!0,style:X,className:v},te,o.createElement(`div`,{style:{position:`absolute`,inset:0,pointerEvents:`none`}},Q)))});w.displayName=`Input`;function T(e,t){try{e.insertRule(t)}catch{console.error(`input-otp could not insert CSS rule:`,t)}}var E=`
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`,D=`^\\d+$`,O=t(),k=(0,o.createContext)({size:`sm`,id:``,disabled:!1,invalid:!1}),A=()=>{let e=(0,o.useContext)(k);if(!e)throw Error(`The 'usePinInputContext' hook must be used within a '<PinInput />'`);return e},j=({className:e,size:t=`md`,disabled:n=!1,invalid:i=!1,...a})=>{let s=(0,o.useId)();return(0,O.jsx)(k.Provider,{value:{size:t,disabled:n,id:s,invalid:i},children:(0,O.jsx)(`div`,{role:`group`,className:r(`flex h-max flex-col gap-1.5`,e),...a})})};j.displayName=`Root`;var M={xxxs:{group:`gap-1.5 h-9`,slot:`size-9 px-3 py-2 text-sm rounded-lg font-medium text-placeholder/50`,caret:`text-sm font-medium`},xxs:{group:`gap-2 h-10`,slot:`size-10 px-3 py-2 text-md rounded-lg font-medium text-placeholder/50`,caret:`text-md font-medium`},xs:{group:`gap-2 h-11`,slot:`size-11 px-3.5 py-2.5 text-md rounded-lg font-medium text-placeholder/50`,caret:`text-md font-medium`},sm:{group:`gap-2 h-16.5`,slot:`size-16 px-2 py-0.5 text-display-lg font-medium`,caret:`text-display-lg font-medium`},md:{group:`gap-3 h-20.5`,slot:`size-20 px-2 py-2.5 text-display-lg font-medium`,caret:`text-display-lg font-medium`},lg:{group:`gap-3 h-24.5`,slot:`size-24 px-2 py-3 text-display-xl font-medium`,caret:`text-display-xl font-medium`}},N=({inputClassName:e,containerClassName:t,width:n,maxLength:i=4,...a})=>{let{id:o,size:s,disabled:c}=A();return(0,O.jsx)(w,{...a,size:n,maxLength:i,disabled:c,id:`pin-input-`+o,"aria-label":`Enter your pin`,"aria-labelledby":`pin-input-label-`+o,"aria-describedby":`pin-input-description-`+o,containerClassName:r(`flex flex-row`,M[s].group,t),className:r(`disabled:cursor-not-allowed`,e)})};N.displayName=`Group`;var P=({index:e,className:t,...n})=>{let{size:i,disabled:a,invalid:s}=A(),{slots:c,isFocused:l}=(0,o.useContext)(C),u=c[e];return(0,O.jsx)(`div`,{...n,"aria-invalid":s,"aria-label":`Enter digit `+(e+1)+` of `+c.length,className:r(`relative flex items-center justify-center rounded-xl bg-primary text-center text-placeholder/40 shadow-xs ring-1 ring-primary transition-[box-shadow,background-color] duration-100 ease-linear ring-inset`,M[i].slot,l&&u?.isActive&&`ring-2 ring-brand outline-2 outline-offset-2 outline-brand`,u?.char&&`text-brand-tertiary_alt ring-2 ring-brand`,a&&`opacity-50`,s&&`text-error-primary ring-error_subtle`,t),children:u?.char?u.char:u?.hasFakeCaret?(0,O.jsx)(F,{size:i}):0})};P.displayName=`Slot`;var F=({size:e=`md`})=>(0,O.jsx)(`div`,{className:r(`pointer-events-none h-[1em] w-0.5 animate-caret-blink bg-fg-brand-primary`,M[e].caret)}),I=e=>(0,O.jsx)(`div`,{role:`separator`,...e,className:r(`text-center text-display-xl font-medium text-utility-neutral-300`,e.className),children:`-`});I.displayName=`Separator`;var L=e=>{let{id:t}=A();return(0,O.jsx)(a,{...e,htmlFor:`pin-input-`+t,id:`pin-input-label-`+t})};L.displayName=`Label`;var R=e=>{let{id:t,size:n}=A();return(0,O.jsx)(i,{...e,id:`pin-input-description-`+t,role:`description`,className:r(n===`xxxs`&&`text-xs`)})};R.displayName=`Description`;var z=j;z.Slot=P,z.Label=L,z.Group=N,z.Separator=I,z.Description=R;var B=()=>(0,O.jsxs)(z,{children:[(0,O.jsx)(z.Label,{children:`Secure code`}),(0,O.jsxs)(z.Group,{maxLength:4,pattern:D,children:[(0,O.jsx)(z.Slot,{index:0}),(0,O.jsx)(z.Slot,{index:1}),(0,O.jsx)(z.Slot,{index:2}),(0,O.jsx)(z.Slot,{index:3})]}),(0,O.jsx)(z.Description,{children:`This is a hint text to help user.`})]}),V=()=>(0,O.jsxs)(z,{disabled:!0,children:[(0,O.jsx)(z.Label,{children:`Secure code`}),(0,O.jsxs)(z.Group,{maxLength:4,pattern:D,children:[(0,O.jsx)(z.Slot,{index:0}),(0,O.jsx)(z.Slot,{index:1}),(0,O.jsx)(z.Slot,{index:2}),(0,O.jsx)(z.Slot,{index:3})]}),(0,O.jsx)(z.Description,{children:`This is a hint text to help user.`})]}),H=()=>(0,O.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,O.jsxs)(z,{size:`sm`,children:[(0,O.jsx)(z.Label,{children:`Secure code`}),(0,O.jsxs)(z.Group,{maxLength:4,pattern:D,children:[(0,O.jsx)(z.Slot,{index:0}),(0,O.jsx)(z.Slot,{index:1}),(0,O.jsx)(z.Slot,{index:2}),(0,O.jsx)(z.Slot,{index:3})]}),(0,O.jsx)(z.Description,{children:`This is a hint text to help user.`})]}),(0,O.jsxs)(z,{size:`md`,children:[(0,O.jsx)(z.Label,{children:`Secure code`}),(0,O.jsxs)(z.Group,{maxLength:4,pattern:D,children:[(0,O.jsx)(z.Slot,{index:0}),(0,O.jsx)(z.Slot,{index:1}),(0,O.jsx)(z.Slot,{index:2}),(0,O.jsx)(z.Slot,{index:3})]}),(0,O.jsx)(z.Description,{children:`This is a hint text to help user.`})]}),(0,O.jsxs)(z,{size:`lg`,children:[(0,O.jsx)(z.Label,{children:`Secure code`}),(0,O.jsxs)(z.Group,{maxLength:4,pattern:D,children:[(0,O.jsx)(z.Slot,{index:0}),(0,O.jsx)(z.Slot,{index:1}),(0,O.jsx)(z.Slot,{index:2}),(0,O.jsx)(z.Slot,{index:3})]}),(0,O.jsx)(z.Description,{children:`This is a hint text to help user.`})]})]}),U=`"use client";

import { REGEXP_ONLY_DIGITS } from "input-otp";
import { PinInput } from "@/components/base/input/pin-input";

export const FourDigitsDemo = () => {
    return (
        <PinInput>
            <PinInput.Label>Secure code</PinInput.Label>
            <PinInput.Group maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
                <PinInput.Slot index={0} />
                <PinInput.Slot index={1} />
                <PinInput.Slot index={2} />
                <PinInput.Slot index={3} />
            </PinInput.Group>
            <PinInput.Description>This is a hint text to help user.</PinInput.Description>
        </PinInput>
    );
};

export const DisabledDemo = () => {
    return (
        <PinInput disabled>
            <PinInput.Label>Secure code</PinInput.Label>
            <PinInput.Group maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
                <PinInput.Slot index={0} />
                <PinInput.Slot index={1} />
                <PinInput.Slot index={2} />
                <PinInput.Slot index={3} />
            </PinInput.Group>
            <PinInput.Description>This is a hint text to help user.</PinInput.Description>
        </PinInput>
    );
};

export const SizesDemo = () => {
    return (
        <div className="flex flex-col gap-8">
            <PinInput size="sm">
                <PinInput.Label>Secure code</PinInput.Label>
                <PinInput.Group maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
                    <PinInput.Slot index={0} />
                    <PinInput.Slot index={1} />
                    <PinInput.Slot index={2} />
                    <PinInput.Slot index={3} />
                </PinInput.Group>
                <PinInput.Description>This is a hint text to help user.</PinInput.Description>
            </PinInput>

            <PinInput size="md">
                <PinInput.Label>Secure code</PinInput.Label>
                <PinInput.Group maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
                    <PinInput.Slot index={0} />
                    <PinInput.Slot index={1} />
                    <PinInput.Slot index={2} />
                    <PinInput.Slot index={3} />
                </PinInput.Group>
                <PinInput.Description>This is a hint text to help user.</PinInput.Description>
            </PinInput>

            <PinInput size="lg">
                <PinInput.Label>Secure code</PinInput.Label>
                <PinInput.Group maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
                    <PinInput.Slot index={0} />
                    <PinInput.Slot index={1} />
                    <PinInput.Slot index={2} />
                    <PinInput.Slot index={3} />
                </PinInput.Group>
                <PinInput.Description>This is a hint text to help user.</PinInput.Description>
            </PinInput>
        </div>
    );
};

export const InputOTPSM = () => {
    return (
        <PinInput size="xxxs">
            <PinInput.Label isRequired>Verification code</PinInput.Label>
            <PinInput.Group maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
                <PinInput.Slot index={0} />
                <PinInput.Slot index={1} />
                <PinInput.Slot index={2} />
                <PinInput.Slot index={3} />
            </PinInput.Group>
            <PinInput.Description>This is a hint text to help user.</PinInput.Description>
        </PinInput>
    );
};
export const InputOTPMD = () => {
    return (
        <PinInput size="xxs">
            <PinInput.Label isRequired>Verification code</PinInput.Label>
            <PinInput.Group maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
                <PinInput.Slot index={0} />
                <PinInput.Slot index={1} />
                <PinInput.Slot index={2} />
                <PinInput.Slot index={3} />
            </PinInput.Group>
            <PinInput.Description>This is a hint text to help user.</PinInput.Description>
        </PinInput>
    );
};
export const InputOTPLG = () => {
    return (
        <PinInput size="xs">
            <PinInput.Label isRequired>Verification code</PinInput.Label>
            <PinInput.Group maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
                <PinInput.Slot index={0} />
                <PinInput.Slot index={1} />
                <PinInput.Slot index={2} />
                <PinInput.Slot index={3} />
            </PinInput.Group>
            <PinInput.Description>This is a hint text to help user.</PinInput.Description>
        </PinInput>
    );
};

export const VerificationCodeInputSM = () => {
    return (
        <PinInput size="sm">
            <PinInput.Label>Secure code</PinInput.Label>
            <PinInput.Group maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
                <PinInput.Slot index={0} />
                <PinInput.Slot index={1} />
                <PinInput.Slot index={2} />
                <PinInput.Separator />
                <PinInput.Slot index={3} />
                <PinInput.Slot index={4} />
                <PinInput.Slot index={5} />
            </PinInput.Group>
            <PinInput.Description>This is a hint text to help user.</PinInput.Description>
        </PinInput>
    );
};

export const VerificationCodeInputMD = () => {
    return (
        <PinInput size="md">
            <PinInput.Label>Secure code</PinInput.Label>
            <PinInput.Group maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
                <PinInput.Slot index={0} />
                <PinInput.Slot index={1} />
                <PinInput.Slot index={2} />
                <PinInput.Separator />
                <PinInput.Slot index={3} />
                <PinInput.Slot index={4} />
                <PinInput.Slot index={5} />
            </PinInput.Group>
            <PinInput.Description>This is a hint text to help user.</PinInput.Description>
        </PinInput>
    );
};

export const VerificationCodeInputLG = () => {
    return (
        <PinInput size="lg">
            <PinInput.Label>Secure code</PinInput.Label>
            <PinInput.Group maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
                <PinInput.Slot index={0} />
                <PinInput.Slot index={1} />
                <PinInput.Slot index={2} />
                <PinInput.Separator />
                <PinInput.Slot index={3} />
                <PinInput.Slot index={4} />
                <PinInput.Slot index={5} />
            </PinInput.Group>
            <PinInput.Description>This is a hint text to help user.</PinInput.Description>
        </PinInput>
    );
};
`;export{H as i,V as n,B as r,U as t};