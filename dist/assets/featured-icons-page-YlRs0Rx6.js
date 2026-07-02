import{t as e}from"./jsx-runtime-9YgKe2Eq.js";import{t}from"./CheckCircle-CYxi1Lxi.js";import{t as n}from"./preview-code-section-f81Kwt5b.js";import{t as r}from"./featured-icon-b1H97RDX.js";var i=e(),a=()=>(0,i.jsx)(`div`,{className:`flex flex-col items-start gap-8`,children:[`brand`,`gray`,`error`,`warning`,`success`].map(e=>(0,i.jsxs)(`div`,{className:`flex gap-4`,children:[(0,i.jsx)(r,{color:e,icon:t,theme:`light`,size:`sm`}),(0,i.jsx)(r,{color:e,icon:t,theme:`light`,size:`md`}),(0,i.jsx)(r,{color:e,icon:t,theme:`light`,size:`lg`}),(0,i.jsx)(r,{color:e,icon:t,theme:`light`,size:`xl`})]},e))}),o=()=>(0,i.jsx)(`div`,{className:`flex flex-col items-start gap-8`,children:[`brand`,`gray`,`error`,`warning`,`success`].map(e=>(0,i.jsxs)(`div`,{className:`flex gap-4`,children:[(0,i.jsx)(r,{color:e,icon:t,theme:`gradient`,size:`sm`}),(0,i.jsx)(r,{color:e,icon:t,theme:`gradient`,size:`md`}),(0,i.jsx)(r,{color:e,icon:t,theme:`gradient`,size:`lg`}),(0,i.jsx)(r,{color:e,icon:t,theme:`gradient`,size:`xl`})]},e))}),s=()=>(0,i.jsx)(`div`,{className:`flex flex-col items-start gap-8`,children:[`brand`,`gray`,`error`,`warning`,`success`].map(e=>(0,i.jsxs)(`div`,{className:`flex gap-4`,children:[(0,i.jsx)(r,{color:e,icon:t,theme:`dark`,size:`sm`}),(0,i.jsx)(r,{color:e,icon:t,theme:`dark`,size:`md`}),(0,i.jsx)(r,{color:e,icon:t,theme:`dark`,size:`lg`}),(0,i.jsx)(r,{color:e,icon:t,theme:`dark`,size:`xl`})]},e))}),c=()=>(0,i.jsx)(`div`,{className:`flex flex-col items-start gap-8`,children:[`brand`,`gray`,`error`,`warning`,`success`].map(e=>(0,i.jsxs)(`div`,{className:`flex gap-8`,children:[(0,i.jsx)(r,{color:e,icon:t,theme:`outline`,size:`sm`}),(0,i.jsx)(r,{color:e,icon:t,theme:`outline`,size:`md`}),(0,i.jsx)(r,{color:e,icon:t,theme:`outline`,size:`lg`}),(0,i.jsx)(r,{color:e,icon:t,theme:`outline`,size:`xl`})]},e))}),l=()=>(0,i.jsxs)(`div`,{className:`flex items-start gap-4`,children:[(0,i.jsx)(r,{color:`gray`,icon:t,theme:`modern`,size:`sm`}),(0,i.jsx)(r,{color:`gray`,icon:t,theme:`modern`,size:`md`}),(0,i.jsx)(r,{color:`gray`,icon:t,theme:`modern`,size:`lg`}),(0,i.jsx)(r,{color:`gray`,icon:t,theme:`modern`,size:`xl`})]}),u=`"use client";

import { CheckCircle } from "@untitledui/icons";
import { FeaturedIcon } from "@/components/foundations/featured-icon/featured-icon";

export const DefaultDemo = () => {
    return (
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-10">
            <FeaturedIcon color="brand" icon={CheckCircle} theme="light" size="lg" />
            <FeaturedIcon color="brand" icon={CheckCircle} theme="gradient" size="lg" />
            <FeaturedIcon color="brand" icon={CheckCircle} theme="dark" size="lg" />
            <FeaturedIcon color="gray" icon={CheckCircle} theme="modern" size="lg" />
            <FeaturedIcon color="gray" icon={CheckCircle} theme="modern-neue" size="lg" />
            <FeaturedIcon color="brand" icon={CheckCircle} theme="outline" size="lg" />
        </div>
    );
};

export const LightDemo = () => {
    return (
        <div className="flex flex-col items-start gap-8">
            {(["brand", "gray", "error", "warning", "success"] as const).map((color) => (
                <div key={color} className="flex gap-4">
                    <FeaturedIcon color={color} icon={CheckCircle} theme="light" size="sm" />
                    <FeaturedIcon color={color} icon={CheckCircle} theme="light" size="md" />
                    <FeaturedIcon color={color} icon={CheckCircle} theme="light" size="lg" />
                    <FeaturedIcon color={color} icon={CheckCircle} theme="light" size="xl" />
                </div>
            ))}
        </div>
    );
};

export const GradientDemo = () => {
    return (
        <div className="flex flex-col items-start gap-8">
            {(["brand", "gray", "error", "warning", "success"] as const).map((color) => (
                <div key={color} className="flex gap-4">
                    <FeaturedIcon color={color} icon={CheckCircle} theme="gradient" size="sm" />
                    <FeaturedIcon color={color} icon={CheckCircle} theme="gradient" size="md" />
                    <FeaturedIcon color={color} icon={CheckCircle} theme="gradient" size="lg" />
                    <FeaturedIcon color={color} icon={CheckCircle} theme="gradient" size="xl" />
                </div>
            ))}
        </div>
    );
};

export const DarkDemo = () => {
    return (
        <div className="flex flex-col items-start gap-8">
            {(["brand", "gray", "error", "warning", "success"] as const).map((color) => (
                <div key={color} className="flex gap-4">
                    <FeaturedIcon color={color} icon={CheckCircle} theme="dark" size="sm" />
                    <FeaturedIcon color={color} icon={CheckCircle} theme="dark" size="md" />
                    <FeaturedIcon color={color} icon={CheckCircle} theme="dark" size="lg" />
                    <FeaturedIcon color={color} icon={CheckCircle} theme="dark" size="xl" />
                </div>
            ))}
        </div>
    );
};

export const OutlineDemo = () => {
    return (
        <div className="flex flex-col items-start gap-8">
            {(["brand", "gray", "error", "warning", "success"] as const).map((color) => (
                <div key={color} className="flex gap-8">
                    <FeaturedIcon color={color} icon={CheckCircle} theme="outline" size="sm" />
                    <FeaturedIcon color={color} icon={CheckCircle} theme="outline" size="md" />
                    <FeaturedIcon color={color} icon={CheckCircle} theme="outline" size="lg" />
                    <FeaturedIcon color={color} icon={CheckCircle} theme="outline" size="xl" />
                </div>
            ))}
        </div>
    );
};

export const ModernDemo = () => {
    return (
        <div className="flex items-start gap-4">
            <FeaturedIcon color="gray" icon={CheckCircle} theme="modern" size="sm" />
            <FeaturedIcon color="gray" icon={CheckCircle} theme="modern" size="md" />
            <FeaturedIcon color="gray" icon={CheckCircle} theme="modern" size="lg" />
            <FeaturedIcon color="gray" icon={CheckCircle} theme="modern" size="xl" />
        </div>
    );
};

export const ModernNeueDemo = () => {
    return (
        <div className="flex items-start gap-4">
            <FeaturedIcon color="gray" icon={CheckCircle} theme="modern-neue" size="sm" />
            <FeaturedIcon color="gray" icon={CheckCircle} theme="modern-neue" size="md" />
            <FeaturedIcon color="gray" icon={CheckCircle} theme="modern-neue" size="lg" />
            <FeaturedIcon color="gray" icon={CheckCircle} theme="modern-neue" size="xl" />
        </div>
    );
};

export const FeaturedIcons = () => {
    return (
        <div className="grid w-max grid-cols-2 gap-12">
            <div className="flex flex-col items-start gap-8">
                {(["brand", "gray", "error", "warning", "success"] as const).map((color) => (
                    <div key={color} className="flex gap-4">
                        <FeaturedIcon color={color} icon={CheckCircle} theme="light" size="sm" />
                        <FeaturedIcon color={color} icon={CheckCircle} theme="light" size="md" />
                        <FeaturedIcon color={color} icon={CheckCircle} theme="light" size="lg" />
                        <FeaturedIcon color={color} icon={CheckCircle} theme="light" size="xl" />
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-start gap-8">
                {(["brand", "gray", "error", "warning", "success"] as const).map((color) => (
                    <div key={color} className="flex gap-4">
                        <FeaturedIcon color={color} icon={CheckCircle} theme="gradient" size="sm" />
                        <FeaturedIcon color={color} icon={CheckCircle} theme="gradient" size="md" />
                        <FeaturedIcon color={color} icon={CheckCircle} theme="gradient" size="lg" />
                        <FeaturedIcon color={color} icon={CheckCircle} theme="gradient" size="xl" />
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-start gap-8">
                {(["brand", "gray", "error", "warning", "success"] as const).map((color) => (
                    <div key={color} className="flex gap-4">
                        <FeaturedIcon color={color} icon={CheckCircle} theme="dark" size="sm" />
                        <FeaturedIcon color={color} icon={CheckCircle} theme="dark" size="md" />
                        <FeaturedIcon color={color} icon={CheckCircle} theme="dark" size="lg" />
                        <FeaturedIcon color={color} icon={CheckCircle} theme="dark" size="xl" />
                    </div>
                ))}
            </div>

            <div className="flex items-start gap-4">
                <FeaturedIcon color="gray" icon={CheckCircle} theme="modern" size="sm" />
                <FeaturedIcon color="gray" icon={CheckCircle} theme="modern" size="md" />
                <FeaturedIcon color="gray" icon={CheckCircle} theme="modern" size="lg" />
                <FeaturedIcon color="gray" icon={CheckCircle} theme="modern" size="xl" />
            </div>
        </div>
    );
};

export const FeaturedIconsOutline = () => {
    return (
        <div className="flex flex-col gap-8">
            {(["brand", "gray", "error", "warning", "success"] as const).map((color) => (
                <div key={color} className="flex gap-8">
                    <FeaturedIcon color={color} icon={CheckCircle} theme="outline" size="sm" />
                    <FeaturedIcon color={color} icon={CheckCircle} theme="outline" size="md" />
                    <FeaturedIcon color={color} icon={CheckCircle} theme="outline" size="lg" />
                    <FeaturedIcon color={color} icon={CheckCircle} theme="outline" size="xl" />
                </div>
            ))}
        </div>
    );
};
`,d=()=>(0,i.jsxs)(`div`,{className:`mx-auto max-w-4xl px-4 py-12 md:px-8`,children:[(0,i.jsxs)(`div`,{className:`mb-12`,children:[(0,i.jsx)(`h1`,{className:`text-display-sm font-semibold text-primary`,children:`Featured Icons`}),(0,i.jsx)(`p`,{className:`mt-2 text-lg text-tertiary`,children:`Decorative icon containers in multiple themes and sizes.`})]}),(0,i.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,i.jsx)(n,{title:`Light`,description:`Light-themed featured icons.`,sourceCode:u,exportName:`LightDemo`,children:(0,i.jsx)(a,{})}),(0,i.jsx)(n,{title:`Gradient`,description:`Gradient circle icons.`,sourceCode:u,exportName:`GradientDemo`,children:(0,i.jsx)(o,{})}),(0,i.jsx)(n,{title:`Dark`,description:`Solid dark-themed icons.`,sourceCode:u,exportName:`DarkDemo`,children:(0,i.jsx)(s,{})}),(0,i.jsx)(n,{title:`Outline`,description:`Outline ring icons.`,sourceCode:u,exportName:`OutlineDemo`,children:(0,i.jsx)(c,{})}),(0,i.jsx)(n,{title:`Modern`,description:`Modern card-style icons.`,sourceCode:u,exportName:`ModernDemo`,children:(0,i.jsx)(l,{})})]})]});export{d as FeaturedIconsPage};