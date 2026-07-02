import{t as e}from"./jsx-runtime-9YgKe2Eq.js";import{t}from"./HelpCircle-Dha6L9oG.js";import{n,t as r}from"./tooltip-RmsM74b4.js";import{t as i}from"./preview-code-section-f81Kwt5b.js";var a=e(),o=()=>(0,a.jsx)(r,{title:`This is a tooltip`,children:(0,a.jsx)(n,{className:`group relative flex cursor-pointer flex-col items-center gap-2 text-fg-quaternary transition duration-100 ease-linear hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover`,children:(0,a.jsx)(t,{className:`size-4`})})}),s=`"use client";

import type { Placement } from "@react-types/overlays";
import { HelpCircle } from "@untitledui/icons";
import { Tooltip, TooltipTrigger } from "@/components/base/tooltip/tooltip";

const PLACEMENTS: { label: string; value: Placement }[] = [
    {
        label: "Top left",
        value: "top left",
    },
    {
        label: "Top",
        value: "top",
    },
    {
        label: "Top right",
        value: "top right",
    },
    {
        label: "Bottom left",
        value: "bottom left",
    },
    {
        label: "Bottom",
        value: "bottom",
    },
    {
        label: "Bottom right",
        value: "bottom right",
    },

    {
        label: "Left",
        value: "left",
    },

    {
        label: "Right",
        value: "right",
    },
];

export const DefaultDemo = () => {
    return (
        <Tooltip title="This is a tooltip">
            <TooltipTrigger className="group relative flex cursor-pointer flex-col items-center gap-2 text-fg-quaternary transition duration-100 ease-linear hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover">
                <HelpCircle className="size-4" />
            </TooltipTrigger>
        </Tooltip>
    );
};

export const WithArrowDemo = () => {
    return (
        <Tooltip arrow title="This is a tooltip">
            <TooltipTrigger className="group relative flex cursor-pointer flex-col items-center gap-2 text-fg-quaternary transition duration-100 ease-linear hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover">
                <HelpCircle className="size-4 stroke-[2.25px]" />
            </TooltipTrigger>
        </Tooltip>
    );
};

export const WithSupportingTextDemo = () => {
    return (
        <Tooltip
            title="This is a tooltip"
            description="Tooltips are used to describe or identify an element. In most scenarios, tooltip help the user understand meaning, function or alt-text."
        >
            <TooltipTrigger className="group relative flex cursor-pointer flex-col items-center gap-2 text-fg-quaternary transition duration-100 ease-linear hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover">
                <HelpCircle className="size-4 stroke-[2.25px]" />
            </TooltipTrigger>
        </Tooltip>
    );
};

export const TooltipDemo = () => (
    <div className="grid grid-cols-3 gap-12">
        {PLACEMENTS.map((side, index) => (
            <div key={index} className="flex flex-col items-center justify-center gap-1 text-center">
                <Tooltip placement={side.value} title="This is a tooltip">
                    <TooltipTrigger className="cursor-pointer text-fg-quaternary transition duration-100 ease-linear hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover">
                        <HelpCircle className="size-4 stroke-[2.25px]" />
                    </TooltipTrigger>
                </Tooltip>
                <span className="text-xs whitespace-nowrap text-secondary">{side.label}</span>
            </div>
        ))}
    </div>
);

export const TooltipWithArrow = () => (
    <div className="grid grid-cols-3 gap-12">
        {PLACEMENTS.map((side) => (
            <div key={side.value} className="flex flex-col items-center justify-center gap-1 text-center">
                <Tooltip arrow placement={side.value} title="This is a tooltip">
                    <TooltipTrigger className="cursor-pointer text-fg-quaternary transition duration-100 ease-linear hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover">
                        <HelpCircle className="size-4 stroke-[2.25px]" />
                    </TooltipTrigger>
                </Tooltip>
                <span className="text-xs whitespace-nowrap text-secondary">{side.label}</span>
            </div>
        ))}
    </div>
);

export const TooltipWithArrowSupportingText = () => (
    <div className="grid grid-cols-3 gap-12">
        {PLACEMENTS.map((side) => (
            <div key={side.value} className="flex flex-col items-center justify-center gap-1 text-center">
                <Tooltip
                    arrow
                    placement={side.value}
                    title="This is a tooltip"
                    description="Tooltips are used to describe or identify an element. In most scenarios, tooltip help the user understand meaning, function or alt-text."
                >
                    <TooltipTrigger className="cursor-pointer text-fg-quaternary transition duration-100 ease-linear hover:text-fg-quaternary_hover focus:text-fg-quaternary_hover">
                        <HelpCircle className="size-4 stroke-[2.25px]" />
                    </TooltipTrigger>
                </Tooltip>
                <span className="text-xs whitespace-nowrap text-secondary">{side.label}</span>
            </div>
        ))}
    </div>
);
`,c=()=>(0,a.jsxs)(`div`,{className:`mx-auto max-w-4xl px-4 py-12 md:px-8`,children:[(0,a.jsxs)(`div`,{className:`mb-12`,children:[(0,a.jsx)(`h1`,{className:`text-display-sm font-semibold text-primary`,children:`Tooltips`}),(0,a.jsx)(`p`,{className:`mt-2 text-lg text-tertiary`,children:`Hover-triggered contextual tooltips for additional information.`})]}),(0,a.jsx)(`div`,{className:`flex flex-col gap-8`,children:(0,a.jsx)(i,{title:`Default`,description:`Hover over elements to see tooltip.`,sourceCode:s,exportName:`DefaultDemo`,children:(0,a.jsx)(o,{})})})]});export{c as TooltipsPage};