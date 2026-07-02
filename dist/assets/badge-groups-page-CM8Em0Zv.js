import{o as e,t}from"./jsx-runtime-9YgKe2Eq.js";import{t as n}from"./react-JjZAc9W2.js";import{t as r}from"./ArrowRight-Ywk9cALt.js";import{n as i,t as a}from"./cx-CmQqEIOd.js";import{t as o}from"./preview-code-section-f81Kwt5b.js";import{t as s}from"./is-react-component-Bht3OsO3.js";var c=e(n()),l=t(),u={light:{root:`rounded-full ring-1 ring-inset`,addon:`rounded-full ring-1 ring-inset`},modern:{root:`rounded-[10px] bg-primary text-secondary shadow-xs ring-1 ring-inset ring-primary hover:bg-secondary`,addon:`flex items-center rounded-md bg-primary shadow-xs ring-1 ring-inset ring-primary`,icon:`text-utility-neutral-500`}},d=(e,t,n)=>({leading:{md:{root:a(`py-1 pr-2 pl-1 text-xs font-medium`,!t&&!n&&`pr-1`),addon:a(`px-2 py-0.5`,e===`modern`&&`gap-1 px-1.5`,t&&`mr-2`),icon:`ml-1 size-4`},lg:{root:a(`py-1 pr-2 pl-1 text-sm font-medium`,!t&&!n&&`pr-1`),addon:a(`px-2.5 py-0.5`,e===`modern`&&`gap-1.5 px-2`,t&&`mr-2`),icon:`ml-1 size-4`}},trailing:{md:{root:a(`py-1 pr-1 pl-3 text-xs font-medium`,e===`modern`&&`pl-2.5`),addon:a(`py-0.5 pr-1.5 pl-2`,e===`modern`&&`pr-1.5 pl-2`,t&&`ml-2`),icon:`ml-0.5 size-3 stroke-[3px]`,dot:`mr-1.5`},lg:{root:`py-1 pr-1 pl-3 text-sm font-medium`,addon:a(`py-0.5 pr-2 pl-2.5`,e===`modern`&&`pr-1.5 pl-2`,t&&`ml-2`),icon:`ml-1 size-3 stroke-[3px]`,dot:`mr-2`}}}),f=i({light:{brand:{root:`bg-utility-brand-50 text-utility-brand-700 ring-utility-brand-200 hover:bg-utility-brand-100`,addon:`bg-primary text-current ring-utility-brand-200`,icon:`text-utility-brand-500`},gray:{root:`bg-utility-neutral-50 text-utility-neutral-700 ring-utility-neutral-200 hover:bg-utility-neutral-100`,addon:`bg-primary text-current ring-utility-neutral-200`,icon:`text-utility-neutral-500`},error:{root:`bg-utility-red-50 text-utility-red-700 ring-utility-red-200 hover:bg-utility-red-100`,addon:`bg-primary text-current ring-utility-red-200`,icon:`text-utility-red-500`},warning:{root:`bg-utility-yellow-50 text-utility-yellow-700 ring-utility-yellow-200 hover:bg-utility-yellow-100`,addon:`bg-primary text-current ring-utility-yellow-200`,icon:`text-utility-yellow-500`},success:{root:`bg-utility-green-50 text-utility-green-700 ring-utility-green-200 hover:bg-utility-green-100`,addon:`bg-primary text-current ring-utility-green-200`,icon:`text-utility-green-500`}},modern:{brand:{dot:`bg-utility-brand-500 outline-3 -outline-offset-1 outline-utility-brand-100`},gray:{dot:`bg-utility-neutral-500 outline-3 -outline-offset-1 outline-utility-neutral-100`},error:{dot:`bg-utility-red-500 outline-3 -outline-offset-1 outline-utility-red-100`},warning:{dot:`bg-utility-yellow-500 outline-3 -outline-offset-1 outline-utility-yellow-100`},success:{dot:`bg-utility-green-500 outline-3 -outline-offset-1 outline-utility-green-100`}}}),p=({children:e,addonText:t,size:n=`md`,color:i=`brand`,theme:o=`light`,align:p=`leading`,className:m,iconTrailing:h=r})=>{let g=f[o][i],_=d(o,!!e,!!h)[p][n],v=a(`inline-flex w-max cursor-pointer items-center transition duration-100 ease-linear`,u[o].root,_.root,g.root,m),y=a(`inline-flex items-center`,u[o].addon,_.addon,g.addon),b=a(`inline-block size-2 shrink-0 rounded-full`,_.dot,g.dot),x=a(u[o].icon,_.icon,g.icon);return p===`trailing`?(0,l.jsxs)(`div`,{className:v,children:[o===`modern`&&(0,l.jsx)(`span`,{className:b}),e,(0,l.jsxs)(`span`,{className:y,children:[t,s(h)&&(0,l.jsx)(h,{className:x}),(0,c.isValidElement)(h)&&h]})]}):(0,l.jsxs)(`div`,{className:v,children:[(0,l.jsxs)(`span`,{className:y,children:[o===`modern`&&(0,l.jsx)(`span`,{className:b}),t]}),e,s(h)&&(0,l.jsx)(h,{className:x}),(0,c.isValidElement)(h)&&h]})},m=[{color:`gray`,text:`We've just released a new feature`,addonText:`New feature`},{color:`brand`,text:`We've just released a new feature`,addonText:`New feature`},{color:`error`,text:`There was a problem with that action`,addonText:`Error`},{color:`warning`,text:`Just to let you know this might be a problem`,addonText:`Warning`},{color:`success`,text:`You've updated your profile and details`,addonText:`New feature`}],h=[`md`,`lg`],g=()=>(0,l.jsx)(`div`,{className:`grid grid-cols-2 content-start gap-x-8 gap-y-4`,children:m.map(e=>h.map(t=>(0,l.jsx)(`div`,{className:`flex flex-col gap-3.5`,children:(0,l.jsx)(p,{...e,theme:`light`,align:`leading`,size:t,children:e.text})},`${e.color}-${t}`)))}),_=()=>(0,l.jsx)(`div`,{className:`grid grid-cols-2 content-start gap-x-8 gap-y-4`,children:m.map(e=>h.map(t=>(0,l.jsx)(`div`,{className:`flex flex-col gap-3.5`,children:(0,l.jsx)(p,{...e,theme:`light`,align:`trailing`,size:t,children:e.text})},`${e.color}-${t}`)))}),v=()=>(0,l.jsx)(`div`,{className:`grid grid-cols-2 content-start gap-x-8 gap-y-4`,children:m.map(e=>h.map(t=>(0,l.jsx)(`div`,{className:`flex flex-col gap-3.5`,children:(0,l.jsx)(p,{...e,theme:`modern`,align:`leading`,size:t,children:e.text})},`${e.color}-${t}`)))}),y=()=>(0,l.jsx)(`div`,{className:`grid grid-cols-2 content-start gap-x-8 gap-y-4`,children:m.map(e=>h.map(t=>(0,l.jsx)(`div`,{className:`flex flex-col gap-3.5`,children:(0,l.jsx)(p,{...e,theme:`modern`,align:`trailing`,size:t,children:e.text})},`${e.color}-${t}`)))}),b=`"use client";

import { BadgeGroup } from "@/components/base/badges/badge-groups";

const variants = [
    {
        color: "gray",
        text: "We've just released a new feature",
        addonText: "New feature",
    },
    {
        color: "brand",
        text: "We've just released a new feature",
        addonText: "New feature",
    },
    {
        color: "error",
        text: "There was a problem with that action",
        addonText: "Error",
    },
    {
        color: "warning",
        text: "Just to let you know this might be a problem",
        addonText: "Warning",
    },
    {
        color: "success",
        text: "You've updated your profile and details",
        addonText: "New feature",
    },
] as const;

const sizes = ["md", "lg"] as const;

export const PillColorLeadingGray = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="New feature" color="gray" theme="light" align="leading" size="md">
                We've just released a new feature
            </BadgeGroup>
            <BadgeGroup addonText="New feature" color="gray" theme="light" align="leading" size="lg">
                We've just released a new feature
            </BadgeGroup>
        </div>
    );
};

export const PillColorLeadingBrand = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="New feature" color="brand" theme="light" align="leading" size="md">
                We've just released a new feature
            </BadgeGroup>
            <BadgeGroup addonText="New feature" color="brand" theme="light" align="leading" size="lg">
                We've just released a new feature
            </BadgeGroup>
        </div>
    );
};

export const PillColorLeadingError = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="Error" color="error" theme="light" align="leading" size="md">
                There was a problem with that action
            </BadgeGroup>
            <BadgeGroup addonText="Error" color="error" theme="light" align="leading" size="lg">
                There was a problem with that action
            </BadgeGroup>
        </div>
    );
};

export const PillColorLeadingWarning = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="Warning" color="warning" theme="light" align="leading" size="md">
                Just to let you know this might be a problem
            </BadgeGroup>
            <BadgeGroup addonText="Warning" color="warning" theme="light" align="leading" size="lg">
                Just to let you know this might be a problem
            </BadgeGroup>
        </div>
    );
};

export const PillColorLeadingSuccess = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="Success" color="success" theme="light" align="leading" size="md">
                You've updated your profile and details
            </BadgeGroup>
            <BadgeGroup addonText="Success" color="success" theme="light" align="leading" size="lg">
                You've updated your profile and details
            </BadgeGroup>
        </div>
    );
};

export const PillColorTrailingGray = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="New feature" color="gray" theme="light" align="trailing" size="md">
                We've just released a new feature
            </BadgeGroup>
            <BadgeGroup addonText="New feature" color="gray" theme="light" align="trailing" size="lg">
                We've just released a new feature
            </BadgeGroup>
        </div>
    );
};

export const PillColorTrailingBrand = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="New feature" color="brand" theme="light" align="trailing" size="md">
                We've just released a new feature
            </BadgeGroup>
            <BadgeGroup addonText="New feature" color="brand" theme="light" align="trailing" size="lg">
                We've just released a new feature
            </BadgeGroup>
        </div>
    );
};

export const PillColorTrailingError = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="Error" color="error" theme="light" align="trailing" size="md">
                There was a problem with that action
            </BadgeGroup>
            <BadgeGroup addonText="Error" color="error" theme="light" align="trailing" size="lg">
                There was a problem with that action
            </BadgeGroup>
        </div>
    );
};

export const PillColorTrailingWarning = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="Warning" color="warning" theme="light" align="trailing" size="md">
                Just to let you know this might be a problem
            </BadgeGroup>
            <BadgeGroup addonText="Warning" color="warning" theme="light" align="trailing" size="lg">
                Just to let you know this might be a problem
            </BadgeGroup>
        </div>
    );
};

export const PillColorTrailingSuccess = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="Success" color="success" theme="light" align="trailing" size="md">
                You've updated your profile and details
            </BadgeGroup>
            <BadgeGroup addonText="Success" color="success" theme="light" align="trailing" size="lg">
                You've updated your profile and details
            </BadgeGroup>
        </div>
    );
};

export const BadgeModernLeadingGray = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="New feature" color="gray" theme="modern" align="leading" size="md">
                We've just released a new feature
            </BadgeGroup>
            <BadgeGroup addonText="New feature" color="gray" theme="modern" align="leading" size="lg">
                We've just released a new feature
            </BadgeGroup>
        </div>
    );
};

export const BadgeModernLeadingBrand = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="New feature" color="brand" theme="modern" align="leading" size="md">
                We've just released a new feature
            </BadgeGroup>
            <BadgeGroup addonText="New feature" color="brand" theme="modern" align="leading" size="lg">
                We've just released a new feature
            </BadgeGroup>
        </div>
    );
};

export const BadgeModernLeadingError = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="Error" color="error" theme="modern" align="leading" size="md">
                There was a problem with that action
            </BadgeGroup>
            <BadgeGroup addonText="Error" color="error" theme="modern" align="leading" size="lg">
                There was a problem with that action
            </BadgeGroup>
        </div>
    );
};

export const BadgeModernLeadingWarning = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="Warning" color="warning" theme="modern" align="leading" size="md">
                Just to let you know this might be a problem
            </BadgeGroup>
            <BadgeGroup addonText="Warning" color="warning" theme="modern" align="leading" size="lg">
                Just to let you know this might be a problem
            </BadgeGroup>
        </div>
    );
};

export const BadgeModernLeadingSuccess = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="Success" color="success" theme="modern" align="leading" size="md">
                You've updated your profile and details
            </BadgeGroup>
            <BadgeGroup addonText="Success" color="success" theme="modern" align="leading" size="lg">
                You've updated your profile and details
            </BadgeGroup>
        </div>
    );
};

export const BadgeModernTrailingGray = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="New feature" color="gray" theme="modern" align="trailing" size="md">
                We've just released a new feature
            </BadgeGroup>
            <BadgeGroup addonText="New feature" color="gray" theme="modern" align="trailing" size="lg">
                We've just released a new feature
            </BadgeGroup>
        </div>
    );
};

export const BadgeModernTrailingBrand = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="New feature" color="brand" theme="modern" align="trailing" size="md">
                We've just released a new feature
            </BadgeGroup>
            <BadgeGroup addonText="New feature" color="brand" theme="modern" align="trailing" size="lg">
                We've just released a new feature
            </BadgeGroup>
        </div>
    );
};

export const BadgeModernTrailingError = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="Error" color="error" theme="modern" align="trailing" size="md">
                There was a problem with that action
            </BadgeGroup>
            <BadgeGroup addonText="Error" color="error" theme="modern" align="trailing" size="lg">
                There was a problem with that action
            </BadgeGroup>
        </div>
    );
};

export const BadgeModernTrailingWarning = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="Warning" color="warning" theme="modern" align="trailing" size="md">
                Just to let you know this might be a problem
            </BadgeGroup>
            <BadgeGroup addonText="Warning" color="warning" theme="modern" align="trailing" size="lg">
                Just to let you know this might be a problem
            </BadgeGroup>
        </div>
    );
};

export const BadgeModernTrailingSuccess = () => {
    return (
        <div className="flex flex-col items-start gap-4">
            <BadgeGroup addonText="Success" color="success" theme="modern" align="trailing" size="md">
                You've updated your profile and details
            </BadgeGroup>
            <BadgeGroup addonText="Success" color="success" theme="modern" align="trailing" size="lg">
                You've updated your profile and details
            </BadgeGroup>
        </div>
    );
};

export const PillColorLeading = () => {
    return (
        <div className="grid grid-cols-2 content-start gap-x-8 gap-y-4">
            {variants.map((variant) =>
                sizes.map((size) => (
                    <div key={\`\${variant.color}-\${size}\`} className="flex flex-col gap-3.5">
                        <BadgeGroup {...variant} theme="light" align="leading" size={size}>
                            {variant.text}
                        </BadgeGroup>
                    </div>
                )),
            )}
        </div>
    );
};

export const PillColorTrailing = () => {
    return (
        <div className="grid grid-cols-2 content-start gap-x-8 gap-y-4">
            {variants.map((variant) =>
                sizes.map((size) => (
                    <div key={\`\${variant.color}-\${size}\`} className="flex flex-col gap-3.5">
                        <BadgeGroup {...variant} theme="light" align="trailing" size={size}>
                            {variant.text}
                        </BadgeGroup>
                    </div>
                )),
            )}
        </div>
    );
};

export const BadgeModernLeading = () => {
    return (
        <div className="grid grid-cols-2 content-start gap-x-8 gap-y-4">
            {variants.map((variant) =>
                sizes.map((size) => (
                    <div key={\`\${variant.color}-\${size}\`} className="flex flex-col gap-3.5">
                        <BadgeGroup {...variant} theme="modern" align="leading" size={size}>
                            {variant.text}
                        </BadgeGroup>
                    </div>
                )),
            )}
        </div>
    );
};

export const BadgeModernTrailing = () => {
    return (
        <div className="grid grid-cols-2 content-start gap-x-8 gap-y-4">
            {variants.map((variant) =>
                sizes.map((size) => (
                    <div key={\`\${variant.color}-\${size}\`} className="flex flex-col gap-3.5">
                        <BadgeGroup {...variant} theme="modern" align="trailing" size={size}>
                            {variant.text}
                        </BadgeGroup>
                    </div>
                )),
            )}
        </div>
    );
};
`,x=()=>(0,l.jsxs)(`div`,{className:`mx-auto max-w-4xl px-4 py-12 md:px-8`,children:[(0,l.jsxs)(`div`,{className:`mb-12`,children:[(0,l.jsx)(`h1`,{className:`text-display-sm font-semibold text-primary`,children:`Badge Groups`}),(0,l.jsx)(`p`,{className:`mt-2 text-lg text-tertiary`,children:`Grouped badge combinations with leading and trailing icons.`})]}),(0,l.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,l.jsx)(o,{title:`Pill Color — Leading`,description:`Pill color badge group with leading icon.`,sourceCode:b,exportName:`PillColorLeading`,children:(0,l.jsx)(g,{})}),(0,l.jsx)(o,{title:`Pill Color — Trailing`,description:`Pill color badge group with trailing icon.`,sourceCode:b,exportName:`PillColorTrailing`,children:(0,l.jsx)(_,{})}),(0,l.jsx)(o,{title:`Badge Modern — Leading`,description:`Modern badge group with leading icon.`,sourceCode:b,exportName:`BadgeModernLeading`,children:(0,l.jsx)(v,{})}),(0,l.jsx)(o,{title:`Badge Modern — Trailing`,description:`Modern badge group with trailing icon.`,sourceCode:b,exportName:`BadgeModernTrailing`,children:(0,l.jsx)(y,{})})]})]});export{x as BadgeGroupsPage};