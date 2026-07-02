import{t as e}from"./jsx-runtime-9YgKe2Eq.js";import{t}from"./toggle-DvTIwfpY.js";import{t as n}from"./preview-code-section-f81Kwt5b.js";var r=e(),i=()=>(0,r.jsx)(t,{label:`Remember me`,hint:`Save my login details for next time.`,size:`sm`}),a=()=>(0,r.jsx)(t,{size:`sm`}),o=()=>(0,r.jsx)(t,{label:`Remember me`,size:`sm`}),s=()=>(0,r.jsx)(t,{label:`Remember me`,hint:`Save my login details for next time.`,size:`sm`}),c=()=>(0,r.jsx)(t,{isDisabled:!0,label:`Remember me`,hint:`Save my login details for next time.`,size:`sm`}),l=()=>(0,r.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,r.jsx)(t,{label:`Remember me`,hint:`Save my login details for next time.`,size:`sm`}),(0,r.jsx)(t,{label:`Remember me`,hint:`Save my login details for next time.`,size:`md`})]}),u=()=>(0,r.jsx)(t,{slim:!0,size:`sm`}),d=()=>(0,r.jsx)(t,{slim:!0,label:`Remember me`,hint:`Save my login details for next time.`,size:`sm`}),f=`"use client";

import { Toggle } from "@/components/base/toggle/toggle";

export const DefaultDemo = () => <Toggle label="Remember me" hint="Save my login details for next time." size="sm" />;

export const BaseDemo = () => <Toggle size="sm" />;

export const WithLabelDemo = () => <Toggle label="Remember me" size="sm" />;

export const WithLabelAndHintDemo = () => <Toggle label="Remember me" hint="Save my login details for next time." size="sm" />;

export const DisabledDemo = () => <Toggle isDisabled label="Remember me" hint="Save my login details for next time." size="sm" />;

export const SizesDemo = () => (
    <div className="flex flex-col gap-8">
        <Toggle label="Remember me" hint="Save my login details for next time." size="sm" />
        <Toggle label="Remember me" hint="Save my login details for next time." size="md" />
    </div>
);

export const SlimBaseDemo = () => <Toggle slim size="sm" />;

export const SlimWithLabelAndHintDemo = () => <Toggle slim label="Remember me" hint="Save my login details for next time." size="sm" />;

export const Toggles = () => (
    <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
            <Toggle label="Remember me" hint="Save my login details for next time." size="sm" />
            <Toggle isDisabled label="Remember me" hint="Save my login details for next time." size="sm" />
        </div>
        <div className="flex flex-col gap-4">
            <Toggle label="Remember me" hint="Save my login details for next time." size="md" />
            <Toggle isDisabled label="Remember me" hint="Save my login details for next time." size="md" />
        </div>
    </div>
);

export const ToggleBase = () => (
    <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
            <Toggle size="sm" />
            <Toggle isDisabled size="sm" />
        </div>
        <div className="flex flex-col gap-4">
            <Toggle size="md" />
            <Toggle isDisabled size="md" />
        </div>
    </div>
);

export const TogglesSlim = () => (
    <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
            <Toggle slim label="Remember me" hint="Save my login details for next time." size="sm" />
            <Toggle slim isDisabled label="Remember me" hint="Save my login details for next time." size="sm" />
        </div>
        <div className="flex flex-col gap-4">
            <Toggle slim label="Remember me" hint="Save my login details for next time." size="md" />
            <Toggle slim isDisabled label="Remember me" hint="Save my login details for next time." size="md" />
        </div>
    </div>
);

export const ToggleSlimBase = () => (
    <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
            <Toggle slim size="sm" />
            <Toggle slim isDisabled size="sm" />
        </div>
        <div className="flex flex-col gap-4">
            <Toggle slim size="md" />
            <Toggle slim isDisabled size="md" />
        </div>
    </div>
);
`,p=()=>(0,r.jsxs)(`div`,{className:`mx-auto max-w-4xl px-4 py-12 md:px-8`,children:[(0,r.jsxs)(`div`,{className:`mb-12`,children:[(0,r.jsx)(`h1`,{className:`text-display-sm font-semibold text-primary`,children:`Toggles`}),(0,r.jsx)(`p`,{className:`mt-2 text-lg text-tertiary`,children:`Switch toggle controls for boolean settings.`})]}),(0,r.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,r.jsx)(n,{title:`Default`,description:`Basic toggle states.`,sourceCode:f,exportName:`DefaultDemo`,children:(0,r.jsx)(i,{})}),(0,r.jsx)(n,{title:`Base`,description:`Base toggle variant.`,sourceCode:f,exportName:`BaseDemo`,children:(0,r.jsx)(a,{})}),(0,r.jsx)(n,{title:`With Label`,description:`Toggle with text label.`,sourceCode:f,exportName:`WithLabelDemo`,children:(0,r.jsx)(o,{})}),(0,r.jsx)(n,{title:`With Label & Hint`,description:`Toggle with label and description.`,sourceCode:f,exportName:`WithLabelAndHintDemo`,children:(0,r.jsx)(s,{})}),(0,r.jsx)(n,{title:`Disabled`,description:`Disabled toggle states.`,sourceCode:f,exportName:`DisabledDemo`,children:(0,r.jsx)(c,{})}),(0,r.jsx)(n,{title:`Sizes`,description:`Small and medium toggle sizes.`,sourceCode:f,exportName:`SizesDemo`,children:(0,r.jsx)(l,{})}),(0,r.jsx)(n,{title:`Slim Base`,description:`Compact slim toggle variant.`,sourceCode:f,exportName:`SlimBaseDemo`,children:(0,r.jsx)(u,{})}),(0,r.jsx)(n,{title:`Slim with Label & Hint`,description:`Slim toggle with label and description.`,sourceCode:f,exportName:`SlimWithLabelAndHintDemo`,children:(0,r.jsx)(d,{})})]})]});export{p as TogglesPage};