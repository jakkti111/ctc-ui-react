import{o as e,t}from"./jsx-runtime-9YgKe2Eq.js";import{t as n}from"./react-JjZAc9W2.js";import{n as r,r as i,t as a}from"./tags-BEQmwJJ9.js";import{t as o}from"./preview-code-section-f81Kwt5b.js";var s=e(n()),c=t(),l=()=>(0,c.jsx)(r,{label:`Tags`,size:`md`,children:(0,c.jsxs)(i,{className:`flex gap-4`,children:[(0,c.jsx)(a,{children:`Label`}),(0,c.jsx)(a,{avatarSrc:`https://www.untitledui.com/images/flags/AU.svg`,children:`Label`}),(0,c.jsx)(a,{avatarSrc:`https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80`,children:`Label`}),(0,c.jsx)(a,{dot:!0,children:`Label`})]})}),u=()=>{let[e,t]=(0,s.useState)([{id:`tag-01`,label:`Label`},{id:`tag-02`,label:`Label`,avatarSrc:`https://www.untitledui.com/images/flags/AU.svg`,avatarContrastBorder:!1},{id:`tag-03`,label:`Label`,avatarSrc:`https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80`},{id:`tag-04`,label:`Label`,dot:!0}]);return(0,c.jsx)(r,{label:`Tags`,size:`md`,onRemove:n=>{t(e.filter(e=>!n.has(e.id)))},children:(0,c.jsx)(i,{className:`flex flex-col items-start gap-4 md:flex-row`,items:e,children:e=>(0,c.jsx)(a,{...e,children:e.label})})})},d=()=>(0,c.jsx)(r,{label:`Tags`,size:`md`,children:(0,c.jsxs)(i,{className:`flex flex-col items-start gap-4 md:flex-row`,children:[(0,c.jsx)(a,{count:5,children:`Label`}),(0,c.jsx)(a,{avatarSrc:`https://www.untitledui.com/images/flags/AU.svg`,count:5,children:`Label`}),(0,c.jsx)(a,{avatarSrc:`https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80`,count:5,children:`Label`}),(0,c.jsx)(a,{dot:!0,count:5,children:`Label`})]})}),f=`"use client";

import { useState } from "react";
import type { Selection } from "react-aria-components";
import { Tag, TagGroup, type TagItem, TagList } from "@/components/base/tags/tags";

export const DefaultDemo = () => {
    return (
        <TagGroup label="Tags" size="md">
            <TagList className="flex gap-4">
                <Tag>Label</Tag>
                <Tag avatarSrc="https://www.untitledui.com/images/flags/AU.svg">Label</Tag>
                <Tag avatarSrc="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80">Label</Tag>
                <Tag dot={true}>Label</Tag>
            </TagList>
        </TagGroup>
    );
};

export const CloseXDemo = () => {
    const [tags, setTags] = useState<TagItem[]>([
        { id: "tag-01", label: "Label" },
        { id: "tag-02", label: "Label", avatarSrc: "https://www.untitledui.com/images/flags/AU.svg", avatarContrastBorder: false },
        { id: "tag-03", label: "Label", avatarSrc: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" },
        { id: "tag-04", label: "Label", dot: true },
    ]);

    return (
        <TagGroup
            label="Tags"
            size="md"
            onRemove={(keys) => {
                setTags(tags.filter((tag) => !keys.has(tag.id)));
            }}
        >
            <TagList className="flex flex-col items-start gap-4 md:flex-row" items={tags}>
                {(item) => <Tag {...item}>{item.label}</Tag>}
            </TagList>
        </TagGroup>
    );
};

export const CountDemo = () => {
    return (
        <TagGroup label="Tags" size="md">
            <TagList className="flex flex-col items-start gap-4 md:flex-row">
                <Tag count={5}>Label</Tag>
                <Tag avatarSrc="https://www.untitledui.com/images/flags/AU.svg" count={5}>
                    Label
                </Tag>
                <Tag avatarSrc="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" count={5}>
                    Label
                </Tag>
                <Tag dot={true} count={5}>
                    Label
                </Tag>
            </TagList>
        </TagGroup>
    );
};

export const CheckboxDemo = () => {
    const [selectedTags, setSelectedTags] = useState<Selection>(new Set(["tag-01", "tag-02"]));

    return (
        <TagGroup label="Tags" size="md" selectionMode="multiple" selectedKeys={selectedTags} onSelectionChange={setSelectedTags}>
            <TagList className="flex flex-col items-start gap-4 md:flex-row">
                <Tag id="tag-01">Label</Tag>
                <Tag id="tag-02" avatarSrc="https://www.untitledui.com/images/flags/AU.svg">
                    Label
                </Tag>
                <Tag id="tag-03" avatarSrc="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80">
                    Label
                </Tag>
                <Tag id="tag-04" dot={true}>
                    Label
                </Tag>
            </TagList>
        </TagGroup>
    );
};

export const CheckboxCloseXDemo = () => {
    const [selectedTags, setSelectedTags] = useState<Selection>(new Set(["tag-01", "tag-02"]));
    const [tags, setTags] = useState<TagItem[]>([
        { id: "tag-01", label: "Label" },
        { id: "tag-02", label: "Label", avatarSrc: "https://www.untitledui.com/images/flags/AU.svg", avatarContrastBorder: false },
        { id: "tag-03", label: "Label", avatarSrc: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" },
        { id: "tag-04", label: "Label", dot: true },
    ]);

    return (
        <TagGroup
            label="Tags"
            size="md"
            selectionMode="multiple"
            selectedKeys={selectedTags}
            onSelectionChange={setSelectedTags}
            onRemove={(keys) => {
                setTags(tags.filter((tag) => !keys.has(tag.id)));
            }}
        >
            <TagList className="flex flex-col items-start gap-4 md:flex-row" items={tags}>
                {(item) => <Tag {...item}>{item.label}</Tag>}
            </TagList>
        </TagGroup>
    );
};

export const CheckboxCountDemo = () => {
    const [selectedTags, setSelectedTags] = useState<Selection>(new Set(["tag-01", "tag-02"]));

    return (
        <TagGroup label="Tags" size="md" selectionMode="multiple" selectedKeys={selectedTags} onSelectionChange={setSelectedTags}>
            <TagList className="flex flex-col items-start gap-4 md:flex-row">
                <Tag id="tag-01" count={5}>
                    Label
                </Tag>
                <Tag id="tag-02" avatarSrc="https://www.untitledui.com/images/flags/AU.svg" count={5}>
                    Label
                </Tag>
                <Tag id="tag-03" avatarSrc="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" count={5}>
                    Label
                </Tag>
                <Tag id="tag-04" dot={true} count={5}>
                    Label
                </Tag>
            </TagList>
        </TagGroup>
    );
};

export const SizesDemo = () => {
    return (
        <div className="flex flex-col gap-4">
            {/* Small */}
            <TagGroup label="Tags" size="sm">
                <TagList className="flex gap-4">
                    <Tag>Label</Tag>
                    <Tag avatarSrc="https://www.untitledui.com/images/flags/AU.svg">Label</Tag>
                    <Tag avatarSrc="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80">Label</Tag>
                    <Tag dot={true}>Label</Tag>
                </TagList>
            </TagGroup>

            {/* Medium */}
            <TagGroup label="Tags" size="md">
                <TagList className="flex gap-4">
                    <Tag>Label</Tag>
                    <Tag avatarSrc="https://www.untitledui.com/images/flags/AU.svg">Label</Tag>
                    <Tag avatarSrc="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80">Label</Tag>
                    <Tag dot={true}>Label</Tag>
                </TagList>
            </TagGroup>

            {/* Large */}
            <TagGroup label="Tags" size="lg">
                <TagList className="flex gap-4">
                    <Tag>Label</Tag>
                    <Tag avatarSrc="https://www.untitledui.com/images/flags/AU.svg">Label</Tag>
                    <Tag avatarSrc="https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80">Label</Tag>
                    <Tag dot={true}>Label</Tag>
                </TagList>
            </TagGroup>
        </div>
    );
};

export const Default = () => {
    const tags: TagItem[] = [
        { id: "tag-01", label: "Label" },
        { id: "tag-02", label: "Label", avatarSrc: "https://www.untitledui.com/imagesadas/flags/AU.svg", avatarContrastBorder: false },
        { id: "tag-03", label: "Label", avatarSrc: "https://www.untitledui.com/images/avasdasatars/olivia-rhye?fm=webp&q=80" },
        { id: "tag-04", label: "Label", dot: true },
    ];

    return (
        <div className="flex flex-col gap-4">
            <TagGroup label="Tags" size="sm">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" size="md">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" size="lg">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
        </div>
    );
};

export const CloseX = () => {
    const tags: TagItem[] = [
        { id: "tag-01", label: "Label", onClose: () => {} },
        { id: "tag-02", label: "Label", onClose: () => {}, avatarSrc: "https://www.untitledui.com/images/flags/AU.svg", avatarContrastBorder: false },
        { id: "tag-03", label: "Label", onClose: () => {}, avatarSrc: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" },
        { id: "tag-04", label: "Label", onClose: () => {}, dot: true },
    ];

    return (
        <div className="flex flex-col gap-4">
            <TagGroup label="Tags" size="sm">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" size="md">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" size="lg">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
        </div>
    );
};

export const Count = () => {
    const tags: TagItem[] = [
        { id: "tag-01", label: "Label", count: 5 },
        { id: "tag-02", label: "Label", count: 5, avatarSrc: "https://www.untitledui.com/images/flags/AU.svg", avatarContrastBorder: false },
        { id: "tag-03", label: "Label", count: 5, avatarSrc: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" },
        { id: "tag-04", label: "Label", count: 5, dot: true },
    ];

    return (
        <div className="flex flex-col gap-4">
            <TagGroup label="Tags" size="sm">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" size="md">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" size="lg">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
        </div>
    );
};

export const CheckboxDefault = () => {
    const tags: TagItem[] = [
        { id: "tag-01", label: "Label" },
        { id: "tag-02", label: "Label", avatarSrc: "https://www.untitledui.com/images/flags/AU.svg", avatarContrastBorder: false },
        { id: "tag-03", label: "Label", avatarSrc: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" },
        { id: "tag-04", label: "Label", dot: true },
    ];

    return (
        <div className="flex flex-col gap-4">
            <TagGroup label="Tags" selectionMode="multiple" size="sm">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" selectionMode="multiple" size="md">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" selectionMode="multiple" size="lg">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
        </div>
    );
};

export const CheckboxCloseX = () => {
    const tags: TagItem[] = [
        { id: "tag-01", label: "Label", onClose: () => {} },
        { id: "tag-02", label: "Label", onClose: () => {}, avatarSrc: "https://www.untitledui.com/images/flags/AU.svg", avatarContrastBorder: false },
        { id: "tag-03", label: "Label", onClose: () => {}, avatarSrc: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" },
        { id: "tag-04", label: "Label", onClose: () => {}, dot: true },
    ];

    return (
        <div className="flex flex-col gap-4">
            <TagGroup label="Tags" selectionMode="multiple" size="sm">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" selectionMode="multiple" size="md">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" selectionMode="multiple" size="lg">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
        </div>
    );
};

export const CheckboxCount = () => {
    const tags: TagItem[] = [
        { id: "tag-01", label: "Label", count: 5 },
        { id: "tag-02", label: "Label", count: 5, avatarSrc: "https://www.untitledui.com/images/flags/AU.svg", avatarContrastBorder: false },
        { id: "tag-03", label: "Label", count: 5, avatarSrc: "https://www.untitledui.com/images/avatars/olivia-rhye?fm=webp&q=80" },
        { id: "tag-04", label: "Label", count: 5, dot: true },
    ];

    return (
        <div className="flex flex-col gap-4">
            <TagGroup label="Tags" selectionMode="multiple" size="sm">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" selectionMode="multiple" size="md">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
            <TagGroup label="Tags" selectionMode="multiple" size="lg">
                <TagList className="flex gap-4" items={tags}>
                    {(item) => <Tag {...item}>{item.label}</Tag>}
                </TagList>
            </TagGroup>
        </div>
    );
};
`,p=()=>(0,c.jsxs)(`div`,{className:`mx-auto max-w-4xl px-4 py-12 md:px-8`,children:[(0,c.jsxs)(`div`,{className:`mb-12`,children:[(0,c.jsx)(`h1`,{className:`text-display-sm font-semibold text-primary`,children:`Tags`}),(0,c.jsx)(`p`,{className:`mt-2 text-lg text-tertiary`,children:`Tag components for labels, categories, and removable selections.`})]}),(0,c.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,c.jsx)(o,{title:`Default`,description:`Standard tag variants.`,sourceCode:f,exportName:`DefaultDemo`,children:(0,c.jsx)(l,{})}),(0,c.jsx)(o,{title:`With Close`,description:`Removable tags with close button.`,sourceCode:f,exportName:`CloseXDemo`,children:(0,c.jsx)(u,{})}),(0,c.jsx)(o,{title:`With Count`,description:`Tags with count indicator.`,sourceCode:f,exportName:`CountDemo`,children:(0,c.jsx)(d,{})})]})]});export{p as TagsPage};