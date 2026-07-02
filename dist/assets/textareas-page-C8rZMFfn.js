import{t as e}from"./jsx-runtime-9YgKe2Eq.js";import{t}from"./react-JjZAc9W2.js";import{t as n}from"./cx-CmQqEIOd.js";import{n as r,t as i}from"./TextField-Di3DAVVU.js";import{t as a}from"./preview-code-section-f81Kwt5b.js";import{n as o,t as s}from"./label-BViWFIap.js";t();var c=e(),l=e=>`url(data:image/svg+xml;base64,${btoa(`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2L2 10" stroke="${e}" stroke-linecap="round"/><path d="M11 7L7 11" stroke="${e}" stroke-linecap="round"/></svg>`)})`,u=({className:e,size:t=`md`,...i})=>(0,c.jsx)(r,{...i,style:{"--resize-handle-bg":l(`#D5D7DA`),"--resize-handle-bg-dark":l(`#373A41`)},className:r=>n(`w-full scroll-py-3 rounded-lg bg-primary text-primary shadow-xs ring-1 ring-primary transition duration-100 ease-linear ring-inset placeholder:text-placeholder autofill:rounded-lg autofill:text-primary focus:outline-hidden`,t===`sm`&&`p-3 text-sm`,t===`md`&&`px-3.5 py-3 text-md`,`[&::-webkit-resizer]:bg-(image:--resize-handle-bg) [&::-webkit-resizer]:bg-contain dark:[&::-webkit-resizer]:bg-(image:--resize-handle-bg-dark)`,r.isFocused&&!r.isDisabled&&`ring-2 ring-brand`,r.isDisabled&&`cursor-not-allowed opacity-50`,r.isInvalid&&`ring-error_subtle`,r.isInvalid&&r.isFocused&&`ring-2 ring-error`,typeof e==`function`?e(r):e)});u.displayName=`TextAreaBase`;var d=({label:e,hint:t,tooltip:r,textAreaRef:a,hideRequiredIndicator:l,textAreaClassName:d,placeholder:f,className:p,rows:m,cols:h,size:g=`md`,..._})=>(0,c.jsx)(i,{..._,className:e=>n(`group flex h-max w-full flex-col items-start justify-start gap-1.5`,typeof p==`function`?p(e):p),children:({isInvalid:n,isRequired:i})=>(0,c.jsxs)(c.Fragment,{children:[e&&(0,c.jsx)(s,{isRequired:l?!l:i,tooltip:r,children:e}),(0,c.jsx)(u,{placeholder:f,className:d,ref:a,rows:m,cols:h,size:g}),t&&(0,c.jsx)(o,{isInvalid:n,size:g,children:t})]})});d.displayName=`TextArea`;var f=()=>(0,c.jsx)(d,{isRequired:!0,placeholder:`This is a placeholder.`,label:`Description`,hint:`This is a hint text to help user.`,rows:5}),p=()=>(0,c.jsx)(d,{isRequired:!0,isDisabled:!0,placeholder:`This is a placeholder.`,label:`Description`,hint:`This is a hint text to help user.`,rows:5}),m=()=>(0,c.jsx)(d,{isRequired:!0,isInvalid:!0,placeholder:`This is a placeholder.`,label:`Description`,hint:`This is an error message.`,rows:5}),h=`"use client";

import { TextArea } from "@/components/base/textarea/textarea";

export const DefaultDemo = () => {
    return <TextArea isRequired placeholder="This is a placeholder." label="Description" hint="This is a hint text to help user." rows={5} />;
};

export const DisabledDemo = () => {
    return <TextArea isRequired isDisabled placeholder="This is a placeholder." label="Description" hint="This is a hint text to help user." rows={5} />;
};

export const InvalidDemo = () => {
    return <TextArea isRequired isInvalid placeholder="This is a placeholder." label="Description" hint="This is an error message." rows={5} />;
};

export const Textarea = () => {
    return (
        <div className="flex w-full max-w-md flex-col gap-8">
            <div className="flex flex-col gap-4">
                <TextArea isRequired size="sm" placeholder="This is a placeholder." label="Description" hint="This is a hint text to help user." rows={5} />
                <TextArea
                    isRequired
                    isDisabled
                    size="sm"
                    placeholder="This is a placeholder."
                    label="Description"
                    hint="This is a hint text to help user."
                    rows={5}
                />
                <TextArea isRequired isInvalid size="sm" placeholder="This is a placeholder." label="Description" hint="This is an error message." rows={5} />
            </div>
            <div className="flex flex-col gap-4">
                <TextArea isRequired size="md" placeholder="This is a placeholder." label="Description" hint="This is a hint text to help user." rows={5} />
                <TextArea
                    isRequired
                    isDisabled
                    size="md"
                    placeholder="This is a placeholder."
                    label="Description"
                    hint="This is a hint text to help user."
                    rows={5}
                />
                <TextArea isRequired isInvalid size="md" placeholder="This is a placeholder." label="Description" hint="This is an error message." rows={5} />
            </div>
        </div>
    );
};
`,g=()=>(0,c.jsxs)(`div`,{className:`mx-auto max-w-4xl px-4 py-12 md:px-8`,children:[(0,c.jsxs)(`div`,{className:`mb-12`,children:[(0,c.jsx)(`h1`,{className:`text-display-sm font-semibold text-primary`,children:`Textareas`}),(0,c.jsx)(`p`,{className:`mt-2 text-lg text-tertiary`,children:`Multi-line text input components with validation states.`})]}),(0,c.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,c.jsx)(a,{title:`Default`,description:`Standard textarea.`,sourceCode:h,exportName:`DefaultDemo`,children:(0,c.jsx)(f,{})}),(0,c.jsx)(a,{title:`Disabled`,description:`Disabled textarea state.`,sourceCode:h,exportName:`DisabledDemo`,children:(0,c.jsx)(p,{})}),(0,c.jsx)(a,{title:`Invalid`,description:`Textarea with error validation.`,sourceCode:h,exportName:`InvalidDemo`,children:(0,c.jsx)(m,{})})]})]});export{g as TextareasPage};