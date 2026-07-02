import{o as e,t}from"./jsx-runtime-9YgKe2Eq.js";import{t as n}from"./react-JjZAc9W2.js";import{n as r}from"./tabs-CfMDS6Py.js";import{t as i}from"./preview-code-section-f81Kwt5b.js";import{t as a}from"./select-native-CLPsp-nx.js";var o=e(n()),s=t(),c=[{id:`details`,label:`My details`},{id:`profile`,label:`Profile`},{id:`password`,label:`Password`},{id:`team`,label:`Team`},{id:`notifications`,label:`Notifications`,badge:2},{id:`integrations`,label:`Integrations`},{id:`api`,label:`API`}],l=()=>{let[e,t]=(0,o.useState)(`details`);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a,{"aria-label":`Tabs`,value:e,onChange:e=>t(e.target.value),options:c.map(e=>({label:e.label,value:e.id})),className:`w-80 md:hidden`}),(0,s.jsx)(r,{selectedKey:e,onSelectionChange:t,className:`w-max max-md:hidden`,children:(0,s.jsx)(r.List,{type:`button-brand`,items:c,children:e=>(0,s.jsx)(r.Item,{...e})})})]})},u=()=>{let[e,t]=(0,o.useState)(`details`);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a,{size:`sm`,"aria-label":`Tabs`,value:e,onChange:e=>t(e.target.value),options:c.map(e=>({label:e.label,value:e.id})),className:`w-80 md:hidden`}),(0,s.jsx)(r,{selectedKey:e,onSelectionChange:t,className:`w-max max-md:hidden`,children:(0,s.jsx)(r.List,{type:`button-gray`,items:c,children:e=>(0,s.jsx)(r.Item,{...e})})})]})},d=()=>{let[e,t]=(0,o.useState)(`details`);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a,{size:`sm`,"aria-label":`Tabs`,value:e,onChange:e=>t(e.target.value),options:c.map(e=>({label:e.label,value:e.id})),className:`w-80 md:hidden`}),(0,s.jsx)(r,{selectedKey:e,onSelectionChange:t,className:`w-max max-md:hidden`,children:(0,s.jsx)(r.List,{type:`underline`,items:c,children:e=>(0,s.jsx)(r.Item,{...e})})})]})},f=()=>{let[e,t]=(0,o.useState)(`details`);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a,{size:`sm`,"aria-label":`Tabs`,value:e,onChange:e=>t(e.target.value),options:c.map(e=>({label:e.label,value:e.id})),className:`w-80 md:hidden`}),(0,s.jsx)(r,{orientation:`vertical`,selectedKey:e,onSelectionChange:t,className:`w-max max-md:hidden`,children:(0,s.jsx)(r.List,{type:`line`,items:c,children:e=>(0,s.jsx)(r.Item,{...e})})})]})},p=()=>{let[e,t]=(0,o.useState)(`details`);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a,{size:`sm`,"aria-label":`Tabs`,value:e,onChange:e=>t(e.target.value),options:c.map(e=>({label:e.label,value:e.id})),className:`w-80 md:hidden`}),(0,s.jsx)(r,{selectedKey:e,onSelectionChange:t,className:`w-max max-md:hidden`,children:(0,s.jsx)(r.List,{type:`button-border`,items:c,children:e=>(0,s.jsx)(r.Item,{...e})})})]})},m=()=>{let[e,t]=(0,o.useState)(`details`);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a,{size:`sm`,"aria-label":`Tabs`,value:e,onChange:e=>t(e.target.value),options:c.map(e=>({label:e.label,value:e.id})),className:`w-80 md:hidden`}),(0,s.jsx)(r,{selectedKey:e,onSelectionChange:t,className:`w-max max-md:hidden`,children:(0,s.jsx)(r.List,{type:`button-minimal`,items:c,children:e=>(0,s.jsx)(r.Item,{...e})})})]})},h=`"use client";

import { type FC, type ReactNode, useState } from "react";
import { LayersTwo01, Lock01, Rows01, UserSquare, Users01 } from "@untitledui/icons";
import type { Key } from "react-aria-components";
import { Tabs } from "@/components/application/tabs/tabs";
import { NativeSelect } from "@/components/base/select/select-native";

const tabs = [
    { id: "details", label: "My details" },
    { id: "profile", label: "Profile" },
    { id: "password", label: "Password" },
    { id: "team", label: "Team" },
    { id: "notifications", label: "Notifications", badge: 2 },
    { id: "integrations", label: "Integrations" },
    { id: "api", label: "API" },
];

const fullWidthTabs = [
    { id: "details", label: "My details", icon: Rows01 },
    { id: "profile", label: "Profile", icon: UserSquare },
    { id: "password", label: "Password", icon: Lock01 },
    { id: "team", label: "Team", icon: Users01, badge: 2 },
    { id: "notifications", label: "Plan", icon: LayersTwo01 },
];

export const ButtonBrandHorizontalDemo = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState<Key>("details");

    return (
        <>
            <NativeSelect
                aria-label="Tabs"
                value={selectedTabIndex as string}
                onChange={(event) => setSelectedTabIndex(event.target.value)}
                options={tabs.map((tab) => ({ label: tab.label, value: tab.id }))}
                className="w-80 md:hidden"
            />
            <Tabs selectedKey={selectedTabIndex} onSelectionChange={setSelectedTabIndex} className="w-max max-md:hidden">
                <Tabs.List type="button-brand" items={tabs}>
                    {(tab) => <Tabs.Item {...tab} />}
                </Tabs.List>
            </Tabs>
        </>
    );
};

export const ButtonBrandVerticalDemo = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState<Key>("details");

    return (
        <>
            <NativeSelect
                size="sm"
                aria-label="Tabs"
                value={selectedTabIndex as string}
                onChange={(event) => setSelectedTabIndex(event.target.value)}
                options={tabs.map((tab) => ({ label: tab.label, value: tab.id }))}
                className="w-80 md:hidden"
            />
            <Tabs orientation="vertical" selectedKey={selectedTabIndex} onSelectionChange={setSelectedTabIndex} className="w-max max-md:hidden">
                <Tabs.List type="button-brand" items={tabs}>
                    {(tab) => <Tabs.Item {...tab} />}
                </Tabs.List>
            </Tabs>
        </>
    );
};

export const ButtonGrayHorizontalDemo = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState<Key>("details");

    return (
        <>
            <NativeSelect
                size="sm"
                aria-label="Tabs"
                value={selectedTabIndex as string}
                onChange={(event) => setSelectedTabIndex(event.target.value)}
                options={tabs.map((tab) => ({ label: tab.label, value: tab.id }))}
                className="w-80 md:hidden"
            />
            <Tabs selectedKey={selectedTabIndex} onSelectionChange={setSelectedTabIndex} className="w-max max-md:hidden">
                <Tabs.List type="button-gray" items={tabs}>
                    {(tab) => <Tabs.Item {...tab} />}
                </Tabs.List>
            </Tabs>
        </>
    );
};

export const ButtonGrayVerticalDemo = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState<Key>("details");

    return (
        <>
            <NativeSelect
                size="sm"
                aria-label="Tabs"
                value={selectedTabIndex as string}
                onChange={(event) => setSelectedTabIndex(event.target.value)}
                options={tabs.map((tab) => ({ label: tab.label, value: tab.id }))}
                className="w-80 md:hidden"
            />
            <Tabs orientation="vertical" selectedKey={selectedTabIndex} onSelectionChange={setSelectedTabIndex} className="w-max max-md:hidden">
                <Tabs.List type="button-gray" items={tabs}>
                    {(tab) => <Tabs.Item {...tab} />}
                </Tabs.List>
            </Tabs>
        </>
    );
};

export const UnderlineDemo = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState<Key>("details");

    return (
        <>
            <NativeSelect
                size="sm"
                aria-label="Tabs"
                value={selectedTabIndex as string}
                onChange={(event) => setSelectedTabIndex(event.target.value)}
                options={tabs.map((tab) => ({ label: tab.label, value: tab.id }))}
                className="w-80 md:hidden"
            />
            <Tabs selectedKey={selectedTabIndex} onSelectionChange={setSelectedTabIndex} className="w-max max-md:hidden">
                <Tabs.List type="underline" items={tabs}>
                    {(tab) => <Tabs.Item {...tab} />}
                </Tabs.List>
            </Tabs>
        </>
    );
};

export const LineDemo = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState<Key>("details");

    return (
        <>
            <NativeSelect
                size="sm"
                aria-label="Tabs"
                value={selectedTabIndex as string}
                onChange={(event) => setSelectedTabIndex(event.target.value)}
                options={tabs.map((tab) => ({ label: tab.label, value: tab.id }))}
                className="w-80 md:hidden"
            />
            <Tabs orientation="vertical" selectedKey={selectedTabIndex} onSelectionChange={setSelectedTabIndex} className="w-max max-md:hidden">
                <Tabs.List type="line" items={tabs}>
                    {(tab) => <Tabs.Item {...tab} />}
                </Tabs.List>
            </Tabs>
        </>
    );
};

export const ButtonBorderHorizontalDemo = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState<Key>("details");

    return (
        <>
            <NativeSelect
                size="sm"
                aria-label="Tabs"
                value={selectedTabIndex as string}
                onChange={(event) => setSelectedTabIndex(event.target.value)}
                options={tabs.map((tab) => ({ label: tab.label, value: tab.id }))}
                className="w-80 md:hidden"
            />
            <Tabs selectedKey={selectedTabIndex} onSelectionChange={setSelectedTabIndex} className="w-max max-md:hidden">
                <Tabs.List type="button-border" items={tabs}>
                    {(tab) => <Tabs.Item {...tab} />}
                </Tabs.List>
            </Tabs>
        </>
    );
};

export const ButtonBorderVerticalDemo = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState<Key>("details");

    return (
        <>
            <NativeSelect
                size="sm"
                aria-label="Tabs"
                value={selectedTabIndex as string}
                onChange={(event) => setSelectedTabIndex(event.target.value)}
                options={tabs.map((tab) => ({ label: tab.label, value: tab.id }))}
                className="w-80 md:hidden"
            />
            <Tabs orientation="vertical" selectedKey={selectedTabIndex} onSelectionChange={setSelectedTabIndex} className="w-max max-md:hidden">
                <Tabs.List type="button-border" items={tabs}>
                    {(tab) => <Tabs.Item {...tab} />}
                </Tabs.List>
            </Tabs>
        </>
    );
};

export const ButtonMinimalHorizontalDemo = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState<Key>("details");

    return (
        <>
            <NativeSelect
                size="sm"
                aria-label="Tabs"
                value={selectedTabIndex as string}
                onChange={(event) => setSelectedTabIndex(event.target.value)}
                options={tabs.map((tab) => ({ label: tab.label, value: tab.id }))}
                className="w-80 md:hidden"
            />
            <Tabs selectedKey={selectedTabIndex} onSelectionChange={setSelectedTabIndex} className="w-max max-md:hidden">
                <Tabs.List type="button-minimal" items={tabs}>
                    {(tab) => <Tabs.Item {...tab} />}
                </Tabs.List>
            </Tabs>
        </>
    );
};

export const ButtonMinimalVerticalDemo = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState<Key>("details");

    return (
        <>
            <NativeSelect
                size="sm"
                aria-label="Tabs"
                value={selectedTabIndex as string}
                onChange={(event) => setSelectedTabIndex(event.target.value)}
                options={tabs.map((tab) => ({ label: tab.label, value: tab.id }))}
                className="w-80 md:hidden"
            />
            <Tabs orientation="vertical" selectedKey={selectedTabIndex} onSelectionChange={setSelectedTabIndex} className="w-max max-md:hidden">
                <Tabs.List type="button-minimal" items={tabs}>
                    {(tab) => <Tabs.Item {...tab} />}
                </Tabs.List>
            </Tabs>
        </>
    );
};

const GenericTabs = ({
    type,
    fullWidth,
    items = tabs,
    orientation,
    size = "sm",
}: {
    size?: "sm" | "md";
    orientation?: "horizontal" | "vertical";
    type: "underline" | "line" | "button-brand" | "button-gray" | "button-border" | "button-minimal";
    fullWidth?: boolean;
    items?: { id: string; label: string; badge?: number; icon?: FC | ReactNode }[];
}) => {
    const [selectedTabIndex, setSelectedTabIndex] = useState<Key>("details");

    return (
        <>
            <div className="md:hidden">
                <NativeSelect
                    size="sm"
                    aria-label="Tabs"
                    value={selectedTabIndex as string}
                    onChange={(event) => setSelectedTabIndex(event.target.value)}
                    options={items.map((tab) => ({ label: tab.label, value: tab.id }))}
                />
            </div>
            <Tabs orientation={orientation} selectedKey={selectedTabIndex} onSelectionChange={setSelectedTabIndex} className="max-md:hidden">
                <Tabs.List size={size} fullWidth={fullWidth} type={type} items={items}>
                    {(tab) => <Tabs.Item {...tab} />}
                </Tabs.List>
            </Tabs>
        </>
    );
};

export const ButtonBrandHorizontal = () => (
    <div className="flex flex-col gap-16">
        <GenericTabs type="button-brand" size="sm" />
        <GenericTabs type="button-brand" size="md" />
    </div>
);

export const ButtonBrandHorizontalFullWidth = () => (
    <div className="flex w-full flex-col gap-16">
        <GenericTabs type="button-brand" size="sm" items={fullWidthTabs} fullWidth />
        <GenericTabs type="button-brand" size="md" items={fullWidthTabs} fullWidth />
    </div>
);

export const ButtonBrandVertical = () => (
    <div className="flex gap-16">
        <GenericTabs type="button-brand" orientation="vertical" />
        <GenericTabs type="button-brand" orientation="vertical" size="md" />
    </div>
);

export const ButtonGrayHorizontal = () => (
    <div className="flex flex-col gap-16">
        <GenericTabs type="button-gray" />
        <GenericTabs type="button-gray" size="md" />
    </div>
);
export const ButtonGrayHorizontalFullWidth = () => (
    <div className="flex w-full flex-col gap-16">
        <GenericTabs type="button-gray" size="sm" items={fullWidthTabs} fullWidth />
        <GenericTabs type="button-gray" size="md" items={fullWidthTabs} fullWidth />
    </div>
);

export const ButtonGrayVertical = () => (
    <div className="flex gap-16">
        <GenericTabs type="button-gray" orientation="vertical" />
        <GenericTabs type="button-gray" orientation="vertical" size="md" />
    </div>
);

export const UnderlineHorizontal = () => (
    <div className="flex flex-col gap-16">
        <GenericTabs type="underline" />
        <GenericTabs type="underline" size="md" />
    </div>
);

export const UnderlineHorizontalFullWidth = () => (
    <div className="flex w-full flex-col gap-16">
        <GenericTabs type="underline" size="sm" items={fullWidthTabs} fullWidth />
        <GenericTabs type="underline" size="md" items={fullWidthTabs} fullWidth />
    </div>
);

export const UnderlineVertical = () => (
    <div className="flex gap-16">
        <GenericTabs type="line" orientation="vertical" />
        <GenericTabs type="line" orientation="vertical" size="md" />
    </div>
);

export const ButtonBorderHorizontal = () => (
    <div className="flex flex-col gap-16">
        <GenericTabs type="button-border" />
        <GenericTabs type="button-border" size="md" />
    </div>
);

export const ButtonBorderHorizontalFullWidth = () => (
    <div className="flex w-full flex-col gap-16">
        <GenericTabs type="button-border" size="sm" items={fullWidthTabs} fullWidth />
        <GenericTabs type="button-border" size="md" items={fullWidthTabs} fullWidth />
    </div>
);

export const ButtonBorderVertical = () => (
    <div className="flex gap-16">
        <GenericTabs type="button-border" orientation="vertical" />
        <GenericTabs type="button-border" orientation="vertical" size="md" />
    </div>
);

export const ButtonMinimalHorizontal = () => (
    <div className="flex flex-col gap-16">
        <GenericTabs type="button-minimal" />
        <GenericTabs type="button-minimal" size="md" />
    </div>
);

export const ButtonMinimalHorizontalFullWidth = () => (
    <div className="flex w-full flex-col gap-16">
        <GenericTabs type="button-minimal" items={fullWidthTabs} fullWidth />
        <GenericTabs type="button-minimal" size="md" items={fullWidthTabs} fullWidth />
    </div>
);

export const ButtonMinimalVertical = () => (
    <div className="flex gap-16">
        <GenericTabs type="button-minimal" orientation="vertical" />
        <GenericTabs type="button-minimal" orientation="vertical" size="md" />
    </div>
);
`,g=()=>(0,s.jsxs)(`div`,{className:`mx-auto max-w-4xl px-4 py-12 md:px-8`,children:[(0,s.jsxs)(`div`,{className:`mb-12`,children:[(0,s.jsx)(`h1`,{className:`text-display-sm font-semibold text-primary`,children:`Tabs`}),(0,s.jsx)(`p`,{className:`mt-2 text-lg text-tertiary`,children:`Tab navigation components in multiple visual styles.`})]}),(0,s.jsxs)(`div`,{className:`flex flex-col gap-10`,children:[(0,s.jsx)(i,{title:`Button Brand`,description:`Brand-colored button tabs.`,sourceCode:h,exportName:`ButtonBrandHorizontalDemo`,children:(0,s.jsx)(l,{})}),(0,s.jsx)(i,{title:`Button Gray`,description:`Neutral gray button tabs.`,sourceCode:h,exportName:`ButtonGrayHorizontalDemo`,children:(0,s.jsx)(u,{})}),(0,s.jsx)(i,{title:`Underline`,description:`Tabs with underline indicator.`,sourceCode:h,exportName:`UnderlineDemo`,children:(0,s.jsx)(d,{})}),(0,s.jsx)(i,{title:`Line`,description:`Tabs with bottom line indicator.`,sourceCode:h,exportName:`LineDemo`,children:(0,s.jsx)(f,{})}),(0,s.jsx)(i,{title:`Button Border`,description:`Bordered button tabs.`,sourceCode:h,exportName:`ButtonBorderHorizontalDemo`,children:(0,s.jsx)(p,{})}),(0,s.jsx)(i,{title:`Button Minimal`,description:`Minimal button tabs.`,sourceCode:h,exportName:`ButtonMinimalHorizontalDemo`,children:(0,s.jsx)(m,{})})]})]});export{g as TabsPage};