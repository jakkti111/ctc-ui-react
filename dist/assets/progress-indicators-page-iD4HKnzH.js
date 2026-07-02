import{t as e}from"./jsx-runtime-9YgKe2Eq.js";import{t}from"./preview-code-section-f81Kwt5b.js";import{t as n}from"./progress-indicators-CwwHQj34.js";import{n as r,t as i}from"./progress-circles-ALk8P1fx.js";var a=e(),o=()=>(0,a.jsx)(n,{min:0,max:100,value:40}),s=()=>(0,a.jsx)(n,{labelPosition:`right`,min:0,max:100,value:40}),c=()=>(0,a.jsx)(n,{labelPosition:`bottom`,min:0,max:100,value:40}),l=()=>(0,a.jsx)(n,{labelPosition:`top-floating`,min:0,max:100,value:40}),u=()=>(0,a.jsx)(n,{labelPosition:`bottom-floating`,min:0,max:100,value:40}),d=()=>(0,a.jsxs)(`div`,{className:`flex flex-col items-start gap-10 md:flex-row`,children:[(0,a.jsx)(i,{size:`xxs`,min:0,max:100,value:40}),(0,a.jsx)(i,{size:`xs`,min:0,max:100,value:40}),(0,a.jsx)(i,{size:`sm`,min:0,max:100,value:40})]}),f=()=>(0,a.jsxs)(`div`,{className:`flex flex-col items-start gap-10 md:flex-row`,children:[(0,a.jsx)(i,{size:`xxs`,label:`Users`,min:0,max:100,value:40}),(0,a.jsx)(i,{size:`xs`,label:`Active users`,min:0,max:100,value:40}),(0,a.jsx)(i,{size:`sm`,label:`Active users`,min:0,max:100,value:40})]}),p=()=>(0,a.jsxs)(`div`,{className:`flex flex-col items-start gap-10 md:flex-row`,children:[(0,a.jsx)(r,{size:`xxs`,min:0,max:100,value:40}),(0,a.jsx)(r,{size:`xs`,min:0,max:100,value:40}),(0,a.jsx)(r,{size:`sm`,min:0,max:100,value:40})]}),m=()=>(0,a.jsxs)(`div`,{className:`flex flex-col items-start gap-10 md:flex-row`,children:[(0,a.jsx)(r,{size:`xxs`,label:`Users`,min:0,max:100,value:40}),(0,a.jsx)(r,{size:`xs`,label:`Active users`,min:0,max:100,value:40}),(0,a.jsx)(r,{size:`sm`,label:`Active users`,min:0,max:100,value:40})]}),h=`"use client";

import { ProgressBarCircle, ProgressBarHalfCircle } from "@/components/base/progress-indicators/progress-circles";
import { ProgressBar } from "@/components/base/progress-indicators/progress-indicators";

export const ProgressBarDefault = () => <ProgressBar min={0} max={100} value={40} />;

export const ProgressBarTextRight = () => <ProgressBar labelPosition="right" min={0} max={100} value={40} />;

export const ProgressBarTextBottom = () => <ProgressBar labelPosition="bottom" min={0} max={100} value={40} />;

export const ProgressBarTextTopFloating = () => <ProgressBar labelPosition="top-floating" min={0} max={100} value={40} />;

export const ProgressBarTextBottomFloating = () => <ProgressBar labelPosition="bottom-floating" min={0} max={100} value={40} />;

export const CircleProgressBar = () => (
    <div className="flex flex-col items-start gap-10 md:flex-row">
        <ProgressBarCircle size="xxs" min={0} max={100} value={40} />
        <ProgressBarCircle size="xs" min={0} max={100} value={40} />
        <ProgressBarCircle size="sm" min={0} max={100} value={40} />
        {/* <ProgressBarCircle size="md" min={0} max={100} value={40} /> */}
        {/* <ProgressBarCircle size="lg" min={0} max={100} value={40} /> */}
    </div>
);

export const CircleProgressBarLabel = () => (
    <div className="flex flex-col items-start gap-10 md:flex-row">
        <ProgressBarCircle size="xxs" label="Users" min={0} max={100} value={40} />
        <ProgressBarCircle size="xs" label="Active users" min={0} max={100} value={40} />
        <ProgressBarCircle size="sm" label="Active users" min={0} max={100} value={40} />
        {/* <ProgressBarCircle size="md" label="Active users" min={0} max={100} value={40} /> */}
        {/* <ProgressBarCircle size="lg" label="Active users" min={0} max={100} value={40} /> */}
    </div>
);

export const HalfCircleProgressBar = () => (
    <div className="flex flex-col items-start gap-10 md:flex-row">
        <ProgressBarHalfCircle size="xxs" min={0} max={100} value={40} />
        <ProgressBarHalfCircle size="xs" min={0} max={100} value={40} />
        <ProgressBarHalfCircle size="sm" min={0} max={100} value={40} />
        {/* <ProgressBarHalfCircle size="md" min={0} max={100} value={40} /> */}
        {/* <ProgressBarHalfCircle size="lg" min={0} max={100} value={40} /> */}
    </div>
);

export const HalfCircleProgressBarLabel = () => (
    <div className="flex flex-col items-start gap-10 md:flex-row">
        <ProgressBarHalfCircle size="xxs" label="Users" min={0} max={100} value={40} />
        <ProgressBarHalfCircle size="xs" label="Active users" min={0} max={100} value={40} />
        <ProgressBarHalfCircle size="sm" label="Active users" min={0} max={100} value={40} />
        {/* <ProgressBarHalfCircle size="md" label="Active users" min={0} max={100} value={40} /> */}
        {/* <ProgressBarHalfCircle size="lg" label="Active users" min={0} max={100} value={40} /> */}
    </div>
);
`,g=()=>(0,a.jsxs)(`div`,{className:`mx-auto max-w-4xl px-4 py-12 md:px-8`,children:[(0,a.jsxs)(`div`,{className:`mb-12`,children:[(0,a.jsx)(`h1`,{className:`text-display-sm font-semibold text-primary`,children:`Progress Indicators`}),(0,a.jsx)(`p`,{className:`mt-2 text-lg text-tertiary`,children:`Linear and circular progress bars, spinners, and skeletons.`})]}),(0,a.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,a.jsx)(t,{title:`Progress Bar — Default`,description:`Basic linear progress bar.`,sourceCode:h,exportName:`ProgressBarDefault`,children:(0,a.jsx)(o,{})}),(0,a.jsx)(t,{title:`Progress Bar — Text Right`,description:`Progress bar with percentage on the right.`,sourceCode:h,exportName:`ProgressBarTextRight`,children:(0,a.jsx)(s,{})}),(0,a.jsx)(t,{title:`Progress Bar — Text Bottom`,description:`Progress bar with text below.`,sourceCode:h,exportName:`ProgressBarTextBottom`,children:(0,a.jsx)(c,{})}),(0,a.jsx)(t,{title:`Progress Bar — Text Top Floating`,description:`Progress bar with floating text above.`,sourceCode:h,exportName:`ProgressBarTextTopFloating`,children:(0,a.jsx)(l,{})}),(0,a.jsx)(t,{title:`Progress Bar — Text Bottom Floating`,description:`Progress bar with floating text below.`,sourceCode:h,exportName:`ProgressBarTextBottomFloating`,children:(0,a.jsx)(u,{})}),(0,a.jsx)(t,{title:`Circle Progress`,description:`Circular progress indicator.`,sourceCode:h,exportName:`CircleProgressBar`,children:(0,a.jsx)(`div`,{className:`flex flex-wrap items-center gap-8`,children:(0,a.jsx)(d,{})})}),(0,a.jsx)(t,{title:`Circle Progress — With Label`,description:`Circular progress with percentage label.`,sourceCode:h,exportName:`CircleProgressBarLabel`,children:(0,a.jsx)(`div`,{className:`flex flex-wrap items-center gap-8`,children:(0,a.jsx)(f,{})})}),(0,a.jsx)(t,{title:`Half Circle`,description:`Semi-circular progress gauge.`,sourceCode:h,exportName:`HalfCircleProgressBar`,children:(0,a.jsx)(`div`,{className:`flex flex-wrap items-center gap-8`,children:(0,a.jsx)(p,{})})}),(0,a.jsx)(t,{title:`Half Circle — With Label`,description:`Semi-circular progress with label.`,sourceCode:h,exportName:`HalfCircleProgressBarLabel`,children:(0,a.jsx)(`div`,{className:`flex flex-wrap items-center gap-8`,children:(0,a.jsx)(m,{})})})]})]});export{g as ProgressIndicatorsPage};