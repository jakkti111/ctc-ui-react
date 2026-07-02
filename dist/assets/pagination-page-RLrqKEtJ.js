import{o as e,t}from"./jsx-runtime-9YgKe2Eq.js";import{t as n}from"./react-JjZAc9W2.js";import{t as r}from"./cx-CmQqEIOd.js";import{t as i}from"./preview-code-section-f81Kwt5b.js";import{t as a}from"./pagination-base-D1YCo2Kf.js";import{t as o}from"./pagination-dot-BAkGgRkE.js";import{a as s,i as c,n as l,r as u,t as d}from"./pagination-DiaCwC2U.js";var f=e(n()),p=t(),m=({framed:e,className:t,size:n=`md`,...i})=>{let o={md:{root:r(`gap-2`,e&&`p-2`),button:`h-1.5 w-full after:-inset-x-1.5 after:-inset-y-2`},lg:{root:r(`gap-3`,e&&`p-3`),button:`h-2 w-full after:-inset-x-2 after:-inset-y-3`}};return(0,p.jsx)(a.Root,{...i,className:r(`flex h-max w-max`,o[n].root,e&&`rounded-full bg-alpha-white/90 backdrop-blur`,t),children:(0,p.jsx)(a.Context,{children:({pages:e})=>e.map((e,t)=>e.type===`page`?(0,f.createElement)(a.Item,{...e,asChild:!0,key:t,className:r(`relative cursor-pointer rounded-full bg-quaternary outline-focus-ring after:absolute focus-visible:outline-2 focus-visible:outline-offset-2`,o[n].button,e.isCurrent&&`bg-fg-brand-primary_alt`)}):(0,f.createElement)(a.Ellipsis,{...e,key:t}))})})},h=()=>{let[e,t]=(0,f.useState)(1);return(0,p.jsx)(c,{page:e,onPageChange:t})},g=()=>{let[e,t]=(0,f.useState)(1);return(0,p.jsx)(s,{page:e,onPageChange:t})},_=()=>{let[e,t]=(0,f.useState)(1);return(0,p.jsx)(l,{page:e,onPageChange:t})},v=()=>{let[e,t]=(0,f.useState)(1);return(0,p.jsx)(u,{align:`right`,page:e,onPageChange:t})},y=()=>{let[e,t]=(0,f.useState)(1);return(0,p.jsx)(d,{align:`right`,page:e,onPageChange:t})},b=()=>{let[e,t]=(0,f.useState)(1);return(0,p.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,p.jsx)(o,{total:3,size:`md`,page:e,onPageChange:t}),(0,p.jsx)(o,{total:3,size:`lg`,page:e,onPageChange:t})]})},x=()=>{let[e,t]=(0,f.useState)(1);return(0,p.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,p.jsx)(m,{className:`w-36`,total:3,size:`md`,page:e,onPageChange:t}),(0,p.jsx)(m,{className:`w-38`,total:3,size:`lg`,page:e,onPageChange:t})]})},S=`"use client";

import { useState } from "react";
import * as Paginations from "@/components/application/pagination/pagination";
import { PaginationDot as PaginationDotComponent } from "@/components/application/pagination/pagination-dot";
import { PaginationLine as PaginationLineComponent } from "@/components/application/pagination/pagination-line";

export const PaginationPageDefault = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return <Paginations.PaginationPageDefault page={currentPage} onPageChange={setCurrentPage} />;
};

export const PaginationPageMinimalCenter = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return <Paginations.PaginationPageMinimalCenter page={currentPage} onPageChange={setCurrentPage} />;
};

export const PaginationCardDefault = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return <Paginations.PaginationCardDefault page={currentPage} onPageChange={setCurrentPage} />;
};

export const PaginationCardMinimalRightAligned = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return <Paginations.PaginationCardMinimal align="right" page={currentPage} onPageChange={setCurrentPage} />;
};

export const PaginationCardMinimalCenterAligned = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return <Paginations.PaginationCardMinimal align="center" page={currentPage} onPageChange={setCurrentPage} />;
};

export const PaginationCardMinimalLeftAligned = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return <Paginations.PaginationCardMinimal align="left" page={currentPage} onPageChange={setCurrentPage} />;
};

export const PaginationButtonGroupRightAligned = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return <Paginations.PaginationButtonGroup align="right" page={currentPage} onPageChange={setCurrentPage} />;
};

export const PaginationButtonGroupCenterAligned = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return <Paginations.PaginationButtonGroup align="center" page={currentPage} onPageChange={setCurrentPage} />;
};

export const PaginationButtonGroupLeftAligned = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return <Paginations.PaginationButtonGroup align="left" page={currentPage} onPageChange={setCurrentPage} />;
};

export const PaginationCardAdvanced = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    return (
        <Paginations.PaginationCardAdvanced page={currentPage} total={10} pageSize={pageSize} onPageChange={setCurrentPage} onPageSizeChange={setPageSize} />
    );
};

export const PaginationCardAdvancedCenter = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    return (
        <Paginations.PaginationCardAdvanced
            align="center"
            page={currentPage}
            total={10}
            pageSize={pageSize}
            onPageChange={setCurrentPage}
            onPageSizeChange={setPageSize}
        />
    );
};

export const PaginationDotMd = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className="flex flex-col gap-8">
            <PaginationDotComponent total={3} size="md" page={currentPage} onPageChange={setCurrentPage} />
            <PaginationDotComponent total={3} size="lg" page={currentPage} onPageChange={setCurrentPage} />
        </div>
    );
};

export const PaginationDotLg = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className="flex flex-col gap-8">
            <PaginationDotComponent total={3} size="md" framed page={currentPage} onPageChange={setCurrentPage} />
            <PaginationDotComponent total={3} size="lg" framed page={currentPage} onPageChange={setCurrentPage} />
        </div>
    );
};

export const PaginationLineMd = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className="flex flex-col gap-8">
            <PaginationLineComponent className="w-36" total={3} size="md" page={currentPage} onPageChange={setCurrentPage} />
            <PaginationLineComponent className="w-38" total={3} size="lg" page={currentPage} onPageChange={setCurrentPage} />
        </div>
    );
};

export const PaginationLineLg = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className="flex flex-col gap-8">
            <PaginationLineComponent className="w-40" total={3} size="md" framed page={currentPage} onPageChange={setCurrentPage} />
            <PaginationLineComponent className="w-44" total={3} size="lg" framed page={currentPage} onPageChange={setCurrentPage} />
        </div>
    );
};
`,C=()=>(0,p.jsxs)(`div`,{className:`mx-auto max-w-4xl px-4 py-12 md:px-8`,children:[(0,p.jsxs)(`div`,{className:`mb-12`,children:[(0,p.jsx)(`h1`,{className:`text-display-sm font-semibold text-primary`,children:`Pagination`}),(0,p.jsx)(`p`,{className:`mt-2 text-lg text-tertiary`,children:`Navigation controls for paginated data.`})]}),(0,p.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,p.jsx)(i,{title:`Page Default`,description:`Standard numbered pagination.`,sourceCode:S,exportName:`PaginationPageDefault`,children:(0,p.jsx)(h,{})}),(0,p.jsx)(i,{title:`Page Minimal Center`,description:`Centered minimal pagination.`,sourceCode:S,exportName:`PaginationPageMinimalCenter`,children:(0,p.jsx)(g,{})}),(0,p.jsx)(i,{title:`Card Default`,description:`Pagination inside a card container.`,sourceCode:S,exportName:`PaginationCardDefault`,children:(0,p.jsx)(_,{})}),(0,p.jsx)(i,{title:`Card Minimal`,description:`Minimal right-aligned card pagination.`,sourceCode:S,exportName:`PaginationCardMinimalRightAligned`,children:(0,p.jsx)(v,{})}),(0,p.jsx)(i,{title:`Button Group`,description:`Button group style pagination.`,sourceCode:S,exportName:`PaginationButtonGroupRightAligned`,children:(0,p.jsx)(y,{})}),(0,p.jsx)(i,{title:`Dot Indicator`,description:`Dot-based page indicator.`,sourceCode:S,exportName:`PaginationDotMd`,children:(0,p.jsx)(b,{})}),(0,p.jsx)(i,{title:`Line Indicator`,description:`Line-based progress indicator.`,sourceCode:S,exportName:`PaginationLineMd`,children:(0,p.jsx)(x,{})})]})]});export{C as PaginationPage};