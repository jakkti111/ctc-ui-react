import{t as e}from"./jsx-runtime-9YgKe2Eq.js";import{t}from"./checkbox-DpH43NPr.js";import{t as n}from"./preview-code-section-f81Kwt5b.js";var r=e(),i=()=>(0,r.jsx)(t,{label:`Remember me`,hint:`Save my login details for next time.`,size:`sm`}),a=()=>(0,r.jsx)(t,{label:`Remember me`,size:`sm`}),o=()=>(0,r.jsx)(t,{label:`Remember me`,hint:`Save my login details for next time.`,size:`sm`}),s=()=>(0,r.jsx)(t,{isDisabled:!0,label:`Remember me`,hint:`Save my login details for next time.`,size:`sm`}),c=()=>(0,r.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,r.jsx)(t,{label:`Remember me`,hint:`Save my login details for next time.`,size:`sm`}),(0,r.jsx)(t,{label:`Remember me`,hint:`Save my login details for next time.`,size:`md`})]}),l=`"use client";

import { Checkbox } from "@/components/base/checkbox/checkbox";

export const DefaultDemo = () => <Checkbox label="Remember me" hint="Save my login details for next time." size="sm" />;

export const BaseDemo = () => <Checkbox size="sm" />;

export const WithLabelDemo = () => <Checkbox label="Remember me" size="sm" />;

export const WithLabelAndHintDemo = () => <Checkbox label="Remember me" hint="Save my login details for next time." size="sm" />;

export const DisabledDemo = () => <Checkbox isDisabled label="Remember me" hint="Save my login details for next time." size="sm" />;

export const SizesDemo = () => (
    <div className="flex flex-col gap-8">
        <Checkbox label="Remember me" hint="Save my login details for next time." size="sm" />
        <Checkbox label="Remember me" hint="Save my login details for next time." size="md" />
    </div>
);

export const Checkboxes = () => {
    return (
        <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
                <Checkbox label="Remember me" hint="Save my login details for next time." />
                <Checkbox isSelected label="Remember me" hint="Save my login details for next time." />
                <Checkbox isSelected isDisabled label="Remember me" hint="Save my login details for next time." />
                <Checkbox isIndeterminate label="Remember me" hint="Save my login details for next time." />
                <Checkbox isIndeterminate isDisabled label="Remember me" hint="Save my login details for next time." />
            </div>
            <div className="flex flex-col gap-4">
                <Checkbox size="md" label="Remember me" hint="Save my login details for next time." />
                <Checkbox isSelected size="md" label="Remember me" hint="Save my login details for next time." />
                <Checkbox isSelected isDisabled size="md" label="Remember me" hint="Save my login details for next time." />
                <Checkbox isIndeterminate size="md" label="Remember me" hint="Save my login details for next time." />
                <Checkbox isIndeterminate isDisabled size="md" label="Remember me" hint="Save my login details for next time." />
            </div>
        </div>
    );
};

export const CheckboxBase = () => {
    return (
        <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-2">
                <Checkbox />
                <Checkbox isSelected />
                <Checkbox isSelected isDisabled />
                <Checkbox isIndeterminate />
                <Checkbox isIndeterminate isDisabled />
            </div>
            <div className="flex flex-col gap-2">
                <Checkbox size="md" />
                <Checkbox isSelected size="md" />
                <Checkbox isSelected isDisabled size="md" />
                <Checkbox isIndeterminate size="md" />
                <Checkbox isIndeterminate isDisabled size="md" />
            </div>
        </div>
    );
};
`,u=()=>(0,r.jsxs)(`div`,{className:`mx-auto max-w-4xl px-4 py-12 md:px-8`,children:[(0,r.jsxs)(`div`,{className:`mb-12`,children:[(0,r.jsx)(`h1`,{className:`text-display-sm font-semibold text-primary`,children:`Checkboxes`}),(0,r.jsx)(`p`,{className:`mt-2 text-lg text-tertiary`,children:`Checkbox form controls with labels, hints, and various states.`})]}),(0,r.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,r.jsx)(n,{title:`Default`,description:`Basic checkbox states.`,sourceCode:l,exportName:`DefaultDemo`,children:(0,r.jsx)(i,{})}),(0,r.jsx)(n,{title:`With Label`,description:`Checkbox with text label.`,sourceCode:l,exportName:`WithLabelDemo`,children:(0,r.jsx)(a,{})}),(0,r.jsx)(n,{title:`With Label & Hint`,description:`Checkbox with label and hint text.`,sourceCode:l,exportName:`WithLabelAndHintDemo`,children:(0,r.jsx)(o,{})}),(0,r.jsx)(n,{title:`Disabled`,description:`Disabled checkbox states.`,sourceCode:l,exportName:`DisabledDemo`,children:(0,r.jsx)(s,{})}),(0,r.jsx)(n,{title:`Sizes`,description:`Small and medium checkbox sizes.`,sourceCode:l,exportName:`SizesDemo`,children:(0,r.jsx)(c,{})})]})]});export{u as CheckboxesPage};