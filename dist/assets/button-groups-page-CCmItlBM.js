import{t as e}from"./jsx-runtime-9YgKe2Eq.js";import{t}from"./react-JjZAc9W2.js";import{t as n}from"./Archive-BDgRSarh.js";import{t as r}from"./Edit03-BkOt8XzF.js";import{t as i}from"./Trash01-VyPoyJs0.js";import{n as a,t as o}from"./button-group-ChjrqM6_.js";import{t as s}from"./preview-code-section-f81Kwt5b.js";import{t as c}from"./dot-icon-BvmixOaX.js";t();var l=e(),u=()=>(0,l.jsxs)(o,{selectedKeys:[],children:[(0,l.jsx)(a,{id:`archive`,children:`Archive`}),(0,l.jsx)(a,{id:`edit`,children:`Edit`}),(0,l.jsx)(a,{id:`delete`,children:`Delete`})]}),d=()=>(0,l.jsxs)(o,{selectedKeys:[],children:[(0,l.jsx)(a,{id:`archive`,iconLeading:n,children:`Archive`}),(0,l.jsx)(a,{id:`edit`,iconLeading:r,children:`Edit`}),(0,l.jsx)(a,{id:`delete`,iconLeading:i,children:`Delete`})]}),f=()=>(0,l.jsxs)(o,{selectedKeys:[`archive`],children:[(0,l.jsx)(a,{id:`archive`,iconLeading:(0,l.jsx)(c,{className:`mx-0.75 size-2 text-fg-success-secondary`}),children:`Text`}),(0,l.jsx)(a,{id:`edit`,iconLeading:(0,l.jsx)(c,{className:`mx-0.75 size-2 text-fg-success-secondary`}),children:`Text`}),(0,l.jsx)(a,{id:`delete`,isDisabled:!0,iconLeading:(0,l.jsx)(c,{className:`mx-0.75 size-2 text-fg-success-secondary`}),children:`Text`})]}),p=`"use client";

import { useState } from "react";
import { Archive, ArrowLeft, ArrowRight, Edit03, Placeholder, Plus, Trash01 } from "@untitledui/icons";
import type { Key } from "react-aria";
import { ButtonGroup, ButtonGroupItem } from "@/components/base/button-group/button-group";
import { Dot } from "@/components/foundations/dot-icon";

export const Default = () => (
    <ButtonGroup selectedKeys={[]}>
        <ButtonGroupItem id="archive">Archive</ButtonGroupItem>
        <ButtonGroupItem id="edit">Edit</ButtonGroupItem>
        <ButtonGroupItem id="delete">Delete</ButtonGroupItem>
    </ButtonGroup>
);

export const LeadingIcon = () => (
    <ButtonGroup selectedKeys={[]}>
        <ButtonGroupItem id="archive" iconLeading={Archive}>
            Archive
        </ButtonGroupItem>
        <ButtonGroupItem id="edit" iconLeading={Edit03}>
            Edit
        </ButtonGroupItem>
        <ButtonGroupItem id="delete" iconLeading={Trash01}>
            Delete
        </ButtonGroupItem>
    </ButtonGroup>
);

export const ButtonGroupDot = () => (
    <ButtonGroup selectedKeys={["archive"]}>
        <ButtonGroupItem id="archive" iconLeading={<Dot className="mx-0.75 size-2 text-fg-success-secondary" />}>
            Text
        </ButtonGroupItem>
        <ButtonGroupItem id="edit" iconLeading={<Dot className="mx-0.75 size-2 text-fg-success-secondary" />}>
            Text
        </ButtonGroupItem>
        <ButtonGroupItem id="delete" isDisabled iconLeading={<Dot className="mx-0.75 size-2 text-fg-success-secondary" />}>
            Text
        </ButtonGroupItem>
    </ButtonGroup>
);

export const DisabledIndividualButton = () => (
    <ButtonGroup selectedKeys={[]}>
        <ButtonGroupItem id="archive">Archive</ButtonGroupItem>
        <ButtonGroupItem id="edit">Edit</ButtonGroupItem>
        <ButtonGroupItem isDisabled id="delete">
            Delete
        </ButtonGroupItem>
    </ButtonGroup>
);

export const DisabledAll = () => (
    <ButtonGroup isDisabled>
        <ButtonGroupItem id="archive">Archive</ButtonGroupItem>
        <ButtonGroupItem id="edit">Edit</ButtonGroupItem>
        <ButtonGroupItem id="delete">Delete</ButtonGroupItem>
    </ButtonGroup>
);

export const SelectedItem = () => {
    const [selectedKeys, setSelectedKeys] = useState<Set<Key>>(new Set(["today"]));

    return (
        <ButtonGroup selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys}>
            <ButtonGroupItem id="today">Today</ButtonGroupItem>
            <ButtonGroupItem id="tomorrow">Tomorrow</ButtonGroupItem>
            <ButtonGroupItem id="thisweek">This week</ButtonGroupItem>
        </ButtonGroup>
    );
};

export const MultipleSelectedItems = () => {
    const [selectedKeys, setSelectedKeys] = useState<Set<Key>>(new Set(["today"]));

    return (
        <ButtonGroup selectionMode="multiple" selectedKeys={selectedKeys} onSelectionChange={setSelectedKeys}>
            <ButtonGroupItem id="today">Today</ButtonGroupItem>
            <ButtonGroupItem id="tomorrow">Tomorrow</ButtonGroupItem>
            <ButtonGroupItem id="thisweek">This week</ButtonGroupItem>
        </ButtonGroup>
    );
};

export const AllSmall = () => (
    <div className="flex flex-col gap-4">
        <ButtonGroup size="sm" selectedKeys={["archive"]}>
            <ButtonGroupItem id="archive">Archive</ButtonGroupItem>
            <ButtonGroupItem id="edit">Edit</ButtonGroupItem>
            <ButtonGroupItem id="delete" isDisabled>
                Delete
            </ButtonGroupItem>
        </ButtonGroup>

        <ButtonGroup size="sm" selectedKeys={["archive"]}>
            <ButtonGroupItem id="archive" iconLeading={Placeholder}>
                Archive
            </ButtonGroupItem>
            <ButtonGroupItem id="edit" iconLeading={Placeholder}>
                Edit
            </ButtonGroupItem>
            <ButtonGroupItem id="delete" isDisabled iconLeading={Placeholder}>
                Delete
            </ButtonGroupItem>
        </ButtonGroup>

        <ButtonGroup size="sm" selectedKeys={["archive"]}>
            <ButtonGroupItem id="archive" iconLeading={<Dot className="mx-0.75 size-2 text-fg-success-secondary" />}>
                Archive
            </ButtonGroupItem>
            <ButtonGroupItem id="edit" iconLeading={<Dot className="mx-0.75 size-2 text-fg-success-secondary" />}>
                Edit
            </ButtonGroupItem>
            <ButtonGroupItem id="delete" isDisabled iconLeading={<Dot className="mx-0.75 size-2 text-fg-success-secondary" />}>
                Delete
            </ButtonGroupItem>
        </ButtonGroup>

        <ButtonGroup size="sm" selectedKeys={["archive"]}>
            <ButtonGroupItem id="archive" iconLeading={ArrowLeft} aria-label="Previous" />
            <ButtonGroupItem id="edit" iconLeading={Plus} aria-label="Add" />
            <ButtonGroupItem id="delete" isDisabled iconLeading={ArrowRight} aria-label="Next" />
        </ButtonGroup>
    </div>
);

export const All = () => (
    <div className="flex flex-col gap-4">
        <ButtonGroup selectedKeys={["archive"]}>
            <ButtonGroupItem id="archive">Archive</ButtonGroupItem>
            <ButtonGroupItem id="edit">Edit</ButtonGroupItem>
            <ButtonGroupItem id="delete" isDisabled>
                Delete
            </ButtonGroupItem>
        </ButtonGroup>

        <ButtonGroup selectedKeys={["archive"]}>
            <ButtonGroupItem id="archive" iconLeading={Placeholder}>
                Archive
            </ButtonGroupItem>
            <ButtonGroupItem id="edit" iconLeading={Placeholder}>
                Edit
            </ButtonGroupItem>
            <ButtonGroupItem id="delete" isDisabled iconLeading={Placeholder}>
                Delete
            </ButtonGroupItem>
        </ButtonGroup>

        <ButtonGroup selectedKeys={["archive"]}>
            <ButtonGroupItem id="archive" iconLeading={<Dot className="mx-0.75 size-2 text-fg-success-secondary" />}>
                Archive
            </ButtonGroupItem>
            <ButtonGroupItem id="edit" iconLeading={<Dot className="mx-0.75 size-2 text-fg-success-secondary" />}>
                Edit
            </ButtonGroupItem>
            <ButtonGroupItem id="delete" isDisabled iconLeading={<Dot className="mx-0.75 size-2 text-fg-success-secondary" />}>
                Delete
            </ButtonGroupItem>
        </ButtonGroup>

        <ButtonGroup selectedKeys={["archive"]}>
            <ButtonGroupItem id="archive" iconLeading={ArrowLeft} aria-label="Previous" />
            <ButtonGroupItem id="edit" iconLeading={Plus} aria-label="Add" />
            <ButtonGroupItem id="delete" isDisabled iconLeading={ArrowRight} aria-label="Next" />
        </ButtonGroup>
    </div>
);
`,m=()=>(0,l.jsxs)(`div`,{className:`mx-auto max-w-4xl px-4 py-12 md:px-8`,children:[(0,l.jsxs)(`div`,{className:`mb-12`,children:[(0,l.jsx)(`h1`,{className:`text-display-sm font-semibold text-primary`,children:`Button Groups`}),(0,l.jsx)(`p`,{className:`mt-2 text-lg text-tertiary`,children:`Grouped button collections for related actions.`})]}),(0,l.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,l.jsx)(s,{title:`Default`,description:`Standard button group.`,sourceCode:p,exportName:`Default`,children:(0,l.jsx)(u,{})}),(0,l.jsx)(s,{title:`Leading Icon`,description:`Button group with leading icons.`,sourceCode:p,exportName:`LeadingIcon`,children:(0,l.jsx)(d,{})}),(0,l.jsx)(s,{title:`With Dot`,description:`Button group with dot indicators.`,sourceCode:p,exportName:`ButtonGroupDot`,children:(0,l.jsx)(f,{})})]})]});export{m as ButtonGroupsPage};