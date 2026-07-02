import{o as e,t}from"./jsx-runtime-9YgKe2Eq.js";import{t as n}from"./react-JjZAc9W2.js";import{A as r,L as i,M as a,P as o,V as s,_ as c,i as l,k as u,n as d,w as f,x as p}from"./input-date-Casnozfg.js";import{t as m}from"./ChevronLeft-BOzFC7fe.js";import{t as h}from"./ChevronRight-BfTbpfAx.js";import{t as g}from"./Clock-Xv52XFqQ.js";import{t as _}from"./cx-CmQqEIOd.js";import{i as v}from"./RSPContexts-q0oaBbDK.js";import{D as y,T as b,x}from"./useFocusRing-4APusEXv.js";import{t as S}from"./useControlledState-CNhbt48L.js";import{t as C}from"./select-CzMzZYc8.js";import{t as w}from"./context-KcobXXcF.js";import{n as T,u as E}from"./Dialog-Do4s70sg.js";import{r as D}from"./Input-CGJWwTkN.js";import{a as O,c as k,d as A,f as j,i as M,l as N,n as P,o as F,r as I,s as L,t as R,u as z}from"./date-range-picker-D77SBnr3.js";import{t as B}from"./button-C8hO_E61.js";var V=e(n(),1),H=(0,V.forwardRef)(function(e,t){[e,t]=x(e,t,v);let{children:n,level:r=3,className:i,...a}=e,o=b[`h${r}`];return V.createElement(o,{...a,ref:t,className:i??`react-aria-Heading`},n)}),U=t(),W=({children:e})=>{let[t,n]=(0,V.useState)(null),[r,i]=(0,V.useState)();return(0,U.jsx)(k.Provider,{value:{value:t,onChange:n,focusedValue:r,onFocusChange:i},children:e})},G=({highlightedDates:e,className:t,children:n,...r})=>(0,U.jsx)(y(k)?V.Fragment:W,{children:(0,U.jsx)(j,{...r,className:e=>_(`flex flex-col gap-3`,typeof t==`function`?t(e):t),children:({state:t})=>(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(`header`,{className:`flex items-center justify-between`,children:[(0,U.jsx)(B,{slot:`previous`,iconLeading:m,size:`sm`,color:`tertiary`,className:`size-8`}),(0,U.jsx)(H,{className:`text-sm font-semibold text-fg-secondary`}),(0,U.jsx)(B,{slot:`next`,iconLeading:h,size:`sm`,color:`tertiary`,className:`size-8`})]}),n||(0,U.jsxs)(`div`,{className:`flex gap-3`,children:[(0,U.jsx)(d,{"aria-label":`Date`,size:`sm`,className:`flex-1`}),(0,U.jsx)(B,{slot:null,size:`sm`,color:`secondary`,onClick:()=>{t.setValue(o(a())),t.setFocusedDate(o(a()))},children:`Today`})]}),(0,U.jsxs)(N,{weekdayStyle:`short`,className:`w-max`,children:[(0,U.jsx)(L,{className:`border-b-4 border-transparent`,children:e=>(0,U.jsx)(z,{className:`p-0`,children:(0,U.jsx)(`div`,{className:`flex size-10 items-center justify-center text-sm font-medium text-secondary`,children:e.slice(0,2)})})}),(0,U.jsx)(A,{className:`[&_td]:p-0 [&_tr]:border-b-4 [&_tr]:border-transparent [&_tr:last-of-type]:border-none`,children:t=>(0,U.jsx)(M,{date:t,isHighlighted:e?.some(e=>t.compare(e)===0)})})]})]})})}),K=[o(a())],q=({value:e,defaultValue:t,onChange:n,onApply:r,onCancel:i,size:o=`sm`,...l})=>{let u=c({month:`short`,day:`numeric`,year:`numeric`}),[d,f]=S(e,t||null,n),p=d?u.format(d.toDate(a())):`Select date`;return(0,U.jsxs)(F,{"aria-label":`Date picker`,shouldCloseOnSelect:!1,...l,value:d,onChange:f,children:[(0,U.jsx)(D,{children:(0,U.jsx)(B,{size:o,color:`secondary`,iconLeading:s,children:p})}),(0,U.jsx)(E,{offset:8,placement:`bottom right`,className:({isEntering:e,isExiting:t})=>_(`origin-(--trigger-anchor-point) will-change-transform`,e&&`duration-150 ease-out animate-in fade-in placement-right:slide-in-from-left-0.5 placement-top:slide-in-from-bottom-0.5 placement-bottom:slide-in-from-top-0.5`,t&&`duration-100 ease-in animate-out fade-out placement-right:slide-out-to-left-0.5 placement-top:slide-out-to-bottom-0.5 placement-bottom:slide-out-to-top-0.5`),children:(0,U.jsx)(T,{"aria-label":`Date picker`,className:`rounded-2xl bg-primary shadow-xl ring ring-secondary_alt`,children:({close:e})=>(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(`div`,{className:`flex px-6 py-5`,children:(0,U.jsx)(G,{highlightedDates:K})}),(0,U.jsxs)(`div`,{className:`grid grid-cols-2 gap-3 border-t border-secondary p-4`,children:[(0,U.jsx)(B,{size:`md`,color:`secondary`,onClick:()=>{i?.(),e()},children:`Cancel`}),(0,U.jsx)(B,{size:`md`,color:`primary`,onClick:()=>{r?.(),e()},children:`Apply`})]})]})})})]})},J=o(a()),Y=Array.from({length:27},(e,t)=>{let n=540+t*30,r=Math.floor(n/60),i=n%60,a=r>=12?`PM`:`AM`,o=`${r%12||12}:${String(i).padStart(2,`0`)} ${a}`;return{id:`${r}:${String(i).padStart(2,`0`)}`,hour:r,minute:i,label:o}}),X=()=>(0,U.jsx)(G,{"aria-label":`Calendar`}),Z=()=>(0,U.jsx)(F,{"aria-label":`Calendar card`,defaultValue:J,children:(0,U.jsxs)(T,{className:`rounded-2xl bg-primary shadow-xl ring ring-secondary_alt`,children:[(0,U.jsx)(`div`,{className:`flex px-6 py-5`,children:(0,U.jsx)(G,{})}),(0,U.jsxs)(`div`,{className:`grid grid-cols-2 gap-3 border-t border-secondary p-4`,children:[(0,U.jsx)(B,{size:`sm`,color:`secondary`,children:`Cancel`}),(0,U.jsx)(B,{size:`sm`,color:`primary`,children:`Apply`})]})]})}),Q=()=>(0,U.jsx)(q,{"aria-label":`Date picker`,defaultValue:J}),$=()=>{let[e,t]=(0,V.useState)(()=>p(o(a()))),[n,r]=(0,V.useState)(()=>p(o(a()))),i=c({month:`short`,day:`numeric`,year:`numeric`}),u=c({hour:`numeric`,minute:`numeric`}),f=()=>{let n=o(a()),i=e&&`hour`in e?p(n).set({hour:e.hour,minute:e.minute}):p(n);t(i),r(i)},m=n=>{let r=Y.find(e=>e.id===n);r&&t((e??p(o(a()))).set({hour:r.hour,minute:r.minute}))};return(0,U.jsxs)(F,{shouldCloseOnSelect:!1,"aria-label":`Calendar card`,value:e,onChange:t,children:[(0,U.jsx)(D,{children:(0,U.jsx)(B,{size:`sm`,color:`secondary`,iconLeading:s,children:e?(0,U.jsxs)(U.Fragment,{children:[i.format(e.toDate(a())),` `,(0,U.jsx)(`span`,{className:`text-quaternary`,children:u.format(e.toDate(a()))})]}):`Select date`})}),(0,U.jsx)(E,{offset:8,placement:`bottom right`,className:({isEntering:e,isExiting:t})=>_(`origin-(--trigger-anchor-point) will-change-transform`,e&&`duration-150 ease-out animate-in fade-in placement-right:slide-in-from-left-0.5 placement-top:slide-in-from-bottom-0.5 placement-bottom:slide-in-from-top-0.5`,t&&`duration-100 ease-in animate-out fade-out placement-right:slide-out-to-left-0.5 placement-top:slide-out-to-bottom-0.5 placement-bottom:slide-out-to-top-0.5`),children:(0,U.jsx)(T,{className:`rounded-2xl bg-primary shadow-xl ring ring-secondary_alt`,children:({close:t})=>(0,U.jsxs)(U.Fragment,{children:[(0,U.jsxs)(`div`,{className:`flex`,children:[(0,U.jsx)(`div`,{className:`flex px-6 py-5`,children:(0,U.jsx)(G,{focusedValue:n,onFocusChange:r,children:(0,U.jsxs)(`div`,{className:`flex flex-wrap gap-3 md:hidden`,children:[(0,U.jsxs)(`div`,{className:`flex flex-1 gap-3`,children:[(0,U.jsx)(l,{"aria-label":`Date`,granularity:`day`,className:`flex-1`,children:(0,U.jsx)(d,{size:`sm`,className:`flex-1`})}),(0,U.jsx)(B,{slot:null,size:`sm`,color:`secondary`,onClick:f,children:`Today`})]}),(0,U.jsx)(C,{"aria-label":`Time`,size:`sm`,placeholder:`Time`,icon:g,items:Y,value:e&&`hour`in e?`${e.hour}:${String(e.minute).padStart(2,`0`)}`:null,onChange:m,className:`flex-1`,children:e=>(0,U.jsx)(C.Item,{id:e.id,icon:g,children:e.label})})]})})}),(0,U.jsxs)(`div`,{className:`relative hidden min-h-0 w-50 flex-col gap-4 md:flex`,children:[(0,U.jsx)(`div`,{className:`px-5 pt-6.5 text-center text-sm font-semibold text-fg-secondary`,children:`Available times`}),(0,U.jsx)(`div`,{className:`relative h-full w-full`,children:(0,U.jsx)(`ul`,{className:`absolute inset-0 flex min-h-0 flex-col gap-1.5 overflow-y-auto mask-b-from-80% mask-b-to-98% px-5 pb-5`,children:Y.map(t=>(0,U.jsx)(`li`,{className:`flex-1`,children:(0,U.jsx)(B,{size:`xs`,color:`secondary`,className:_(`w-full`,e&&`hour`in e&&e.hour===t.hour&&e.minute===t.minute&&`bg-primary_hover`),onClick:()=>m(t.id),children:t.label})},t.id))})})]})]}),(0,U.jsxs)(`div`,{className:`flex gap-3 border-t border-secondary p-4`,children:[(0,U.jsxs)(`div`,{className:`mr-auto hidden gap-3 md:flex`,children:[(0,U.jsx)(l,{"aria-label":`Date`,granularity:`day`,className:`flex-1`,children:(0,U.jsx)(d,{size:`sm`})}),(0,U.jsx)(B,{size:`sm`,color:`secondary`,onClick:f,children:`Today`})]}),(0,U.jsx)(B,{size:`sm`,color:`secondary`,className:`max-md:flex-1`,onClick:t,children:`Cancel`}),(0,U.jsx)(B,{size:`sm`,color:`primary`,className:`max-md:flex-1`,onClick:t,children:`Apply`})]})]})})})]})},ee=()=>(0,U.jsx)(P,{"aria-label":`Range calendar`}),te=()=>{let{locale:e}=w(),[t,n]=(0,V.useState)(null),s=(0,V.useMemo)(()=>p(o(a())),[]),[c,l]=(0,V.useState)({start:s.subtract({days:7}),end:s}),m=(0,V.useMemo)(()=>({today:{label:`Today`,value:{start:s,end:s}},yesterday:{label:`Yesterday`,value:{start:s.subtract({days:1}),end:s.subtract({days:1})}},thisWeek:{label:`This week`,value:{start:f(s,e),end:i(s,e)}},lastWeek:{label:`Last week`,value:{start:f(s,e).subtract({weeks:1}),end:i(s,e).subtract({weeks:1})}},thisMonth:{label:`This month`,value:{start:r(s),end:u(s)}},lastMonth:{label:`Last month`,value:{start:r(s).subtract({months:1}),end:u(s).subtract({months:1})}},thisYear:{label:`This year`,value:{start:r(s.set({month:1})),end:u(s.set({month:12}))}},lastYear:{label:`Last year`,value:{start:r(s.set({month:1}).subtract({years:1})),end:u(s.set({month:12}).subtract({years:1}))}},allTime:{label:`All time`,value:{start:s.set({year:2e3,month:1,day:1}),end:s}}}),[e,s]);return(0,U.jsx)(O,{"aria-label":`Range calendar`,value:c,onChange:l,children:(0,U.jsxs)(T,{className:`flex rounded-2xl bg-primary shadow-xl ring ring-secondary_alt focus:outline-hidden`,children:[(0,U.jsx)(`div`,{className:`hidden w-38 flex-col gap-0.5 border-r border-solid border-secondary p-3 lg:flex`,children:Object.values(m).map(e=>(0,U.jsx)(I,{value:e.value,onClick:()=>{n(e.value.start),l(e.value)},children:e.label},e.label))}),(0,U.jsxs)(`div`,{className:`flex flex-col`,children:[(0,U.jsx)(P,{focusedValue:t,onFocusChange:n,presets:{lastWeek:m.lastWeek,lastMonth:m.lastMonth,lastYear:m.lastYear}}),(0,U.jsxs)(`div`,{className:`flex justify-between gap-3 border-t border-secondary p-4`,children:[(0,U.jsxs)(`div`,{className:`hidden items-center gap-2 md:flex`,children:[(0,U.jsx)(d,{slot:`start`,size:`sm`}),(0,U.jsx)(`div`,{className:`text-md text-quaternary`,children:`–`}),(0,U.jsx)(d,{slot:`end`,size:`sm`})]}),(0,U.jsxs)(`div`,{className:`grid w-full grid-cols-2 gap-3 md:flex md:w-auto`,children:[(0,U.jsx)(B,{size:`sm`,color:`secondary`,children:`Cancel`}),(0,U.jsx)(B,{size:`sm`,color:`primary`,children:`Apply`})]})]})]})]})})},ne=()=>{let e=(0,V.useMemo)(()=>p(o(a())),[]);return(0,U.jsx)(R,{"aria-label":`Date range picker`,defaultValue:{start:e.subtract({days:7}),end:e}})},re=`"use client";

import { useMemo, useState } from "react";
import { endOfMonth, endOfWeek, getLocalTimeZone, startOfMonth, startOfWeek, toCalendarDateTime, today } from "@internationalized/date";
import { Calendar as CalendarIcon, Clock } from "@untitledui/icons";
import { useDateFormatter } from "react-aria";
import type { DateValue, Key } from "react-aria-components";
import {
    DatePicker as AriaDatePicker,
    DateRangePicker as AriaDateRangePicker,
    Dialog as AriaDialog,
    Group as AriaGroup,
    Popover as AriaPopover,
    DateField,
    useLocale,
} from "react-aria-components";
import { Button } from "@/components/base/buttons/button";
import { InputDateBase } from "@/components/base/input/input-date";
import { Select } from "@/components/base/select/select";
import { cx } from "@/utils/cx";
import { Calendar } from "./calendar";
import { DatePicker } from "./date-picker";
import { DateRangePicker } from "./date-range-picker";
import { RangeCalendar, RangePresetButton } from "./range-calendar";

const now = today(getLocalTimeZone());

/** 27 slots = 9:00 AM to 10:00 PM in 30-min intervals */
const TIME_SLOTS = Array.from({ length: 27 }, (_, i) => {
    const totalMinutes = 9 * 60 + i * 30; // Start at 9:00 AM (540 min), step by 30
    const hour = Math.floor(totalMinutes / 60);
    const minute = totalMinutes % 60;
    const period = hour >= 12 ? "PM" : "AM";
    const h12 = hour % 12 || 12; // Convert 24h to 12h format
    const label = \`\${h12}:\${String(minute).padStart(2, "0")} \${period}\`;
    return { id: \`\${hour}:\${String(minute).padStart(2, "0")}\`, hour, minute, label };
});

export const CalendarDemo = () => <Calendar aria-label="Calendar" />;

export const CalendarCardDemo = () => (
    <AriaDatePicker aria-label="Calendar card" defaultValue={now}>
        <AriaDialog className="rounded-2xl bg-primary shadow-xl ring ring-secondary_alt">
            <div className="flex px-6 py-5">
                <Calendar />
            </div>
            <div className="grid grid-cols-2 gap-3 border-t border-secondary p-4">
                <Button size="sm" color="secondary">
                    Cancel
                </Button>
                <Button size="sm" color="primary">
                    Apply
                </Button>
            </div>
        </AriaDialog>
    </AriaDatePicker>
);

export const DatePickerDemo = () => <DatePicker aria-label="Date picker" defaultValue={now} />;

export const DatePickerControlledDemo = () => {
    const [value, setValue] = useState<DateValue | null>(now);

    return <DatePicker aria-label="Date picker" value={value} onChange={setValue} />;
};

export const DateTimePickerDemo = () => {
    const [value, setValue] = useState<DateValue | null>(() => toCalendarDateTime(today(getLocalTimeZone())));
    const [focusedValue, setFocusedValue] = useState<DateValue | null>(() => toCalendarDateTime(today(getLocalTimeZone())));
    const dateFormatter = useDateFormatter({ month: "short", day: "numeric", year: "numeric" });
    const timeFormatter = useDateFormatter({ hour: "numeric", minute: "numeric" });

    const handleTodayClick = () => {
        const t = today(getLocalTimeZone());

        // Preserve the existing time when jumping to today
        const date = value && "hour" in value ? toCalendarDateTime(t).set({ hour: value.hour, minute: value.minute }) : toCalendarDateTime(t);

        setValue(date);
        setFocusedValue(date);
    };

    const handleTimeClick = (key: Key | null) => {
        const slot = TIME_SLOTS.find((s) => s.id === key);
        if (!slot) return;

        const date = value ?? toCalendarDateTime(today(getLocalTimeZone()));
        setValue(date.set({ hour: slot.hour, minute: slot.minute }));
    };

    return (
        <AriaDatePicker shouldCloseOnSelect={false} aria-label="Calendar card" value={value} onChange={setValue}>
            <AriaGroup>
                <Button size="sm" color="secondary" iconLeading={CalendarIcon}>
                    {value ? (
                        <>
                            {dateFormatter.format(value.toDate(getLocalTimeZone()))}{" "}
                            <span className="text-quaternary">{timeFormatter.format(value.toDate(getLocalTimeZone()))}</span>
                        </>
                    ) : (
                        "Select date"
                    )}
                </Button>
            </AriaGroup>
            <AriaPopover
                offset={8}
                placement="bottom right"
                className={({ isEntering, isExiting }) =>
                    cx(
                        "origin-(--trigger-anchor-point) will-change-transform",
                        isEntering &&
                            "duration-150 ease-out animate-in fade-in placement-right:slide-in-from-left-0.5 placement-top:slide-in-from-bottom-0.5 placement-bottom:slide-in-from-top-0.5",
                        isExiting &&
                            "duration-100 ease-in animate-out fade-out placement-right:slide-out-to-left-0.5 placement-top:slide-out-to-bottom-0.5 placement-bottom:slide-out-to-top-0.5",
                    )
                }
            >
                <AriaDialog className="rounded-2xl bg-primary shadow-xl ring ring-secondary_alt">
                    {({ close }) => (
                        <>
                            <div className="flex">
                                <div className="flex px-6 py-5">
                                    <Calendar focusedValue={focusedValue} onFocusChange={setFocusedValue}>
                                        <div className="flex flex-wrap gap-3 md:hidden">
                                            <div className="flex flex-1 gap-3">
                                                <DateField aria-label="Date" granularity="day" className="flex-1">
                                                    <InputDateBase size="sm" className="flex-1" />
                                                </DateField>
                                                <Button slot={null} size="sm" color="secondary" onClick={handleTodayClick}>
                                                    Today
                                                </Button>
                                            </div>
                                            <Select
                                                aria-label="Time"
                                                size="sm"
                                                placeholder="Time"
                                                icon={Clock}
                                                items={TIME_SLOTS}
                                                value={value && "hour" in value ? \`\${value.hour}:\${String(value.minute).padStart(2, "0")}\` : null}
                                                onChange={handleTimeClick}
                                                className="flex-1"
                                            >
                                                {(slot) => (
                                                    <Select.Item id={slot.id} icon={Clock}>
                                                        {slot.label}
                                                    </Select.Item>
                                                )}
                                            </Select>
                                        </div>
                                    </Calendar>
                                </div>
                                <div className="relative hidden min-h-0 w-50 flex-col gap-4 md:flex">
                                    <div className="px-5 pt-6.5 text-center text-sm font-semibold text-fg-secondary">Available times</div>
                                    <div className="relative h-full w-full">
                                        <ul className="absolute inset-0 flex min-h-0 flex-col gap-1.5 overflow-y-auto mask-b-from-80% mask-b-to-98% px-5 pb-5">
                                            {TIME_SLOTS.map((slot) => {
                                                const isSelected = value && "hour" in value && value.hour === slot.hour && value.minute === slot.minute;
                                                return (
                                                    <li key={slot.id} className="flex-1">
                                                        <Button
                                                            size="xs"
                                                            color="secondary"
                                                            className={cx("w-full", isSelected && "bg-primary_hover")}
                                                            onClick={() => handleTimeClick(slot.id)}
                                                        >
                                                            {slot.label}
                                                        </Button>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3 border-t border-secondary p-4">
                                <div className="mr-auto hidden gap-3 md:flex">
                                    <DateField aria-label="Date" granularity="day" className="flex-1">
                                        <InputDateBase size="sm" />
                                    </DateField>
                                    <Button size="sm" color="secondary" onClick={handleTodayClick}>
                                        Today
                                    </Button>
                                </div>

                                <Button size="sm" color="secondary" className="max-md:flex-1" onClick={close}>
                                    Cancel
                                </Button>
                                <Button size="sm" color="primary" className="max-md:flex-1" onClick={close}>
                                    Apply
                                </Button>
                            </div>
                        </>
                    )}
                </AriaDialog>
            </AriaPopover>
        </AriaDatePicker>
    );
};

export const RangeCalendarDemo = () => <RangeCalendar aria-label="Range calendar" />;

export const RangeCalendarCardDemo = () => {
    const { locale } = useLocale();
    const [focusedValue, setFocusedValue] = useState<DateValue | null>(null);
    const now = useMemo(() => toCalendarDateTime(today(getLocalTimeZone())), []);
    const [value, setValue] = useState<{ start: DateValue; end: DateValue } | null>({
        start: now.subtract({ days: 7 }),
        end: now,
    });

    const presets = useMemo(
        () => ({
            today: { label: "Today", value: { start: now, end: now } },
            yesterday: { label: "Yesterday", value: { start: now.subtract({ days: 1 }), end: now.subtract({ days: 1 }) } },
            thisWeek: { label: "This week", value: { start: startOfWeek(now, locale), end: endOfWeek(now, locale) } },
            lastWeek: {
                label: "Last week",
                value: {
                    start: startOfWeek(now, locale).subtract({ weeks: 1 }),
                    end: endOfWeek(now, locale).subtract({ weeks: 1 }),
                },
            },
            thisMonth: { label: "This month", value: { start: startOfMonth(now), end: endOfMonth(now) } },
            lastMonth: {
                label: "Last month",
                value: {
                    start: startOfMonth(now).subtract({ months: 1 }),
                    end: endOfMonth(now).subtract({ months: 1 }),
                },
            },
            thisYear: { label: "This year", value: { start: startOfMonth(now.set({ month: 1 })), end: endOfMonth(now.set({ month: 12 })) } },
            lastYear: {
                label: "Last year",
                value: {
                    start: startOfMonth(now.set({ month: 1 }).subtract({ years: 1 })),
                    end: endOfMonth(now.set({ month: 12 }).subtract({ years: 1 })),
                },
            },
            allTime: {
                label: "All time",
                value: {
                    start: now.set({ year: 2000, month: 1, day: 1 }),
                    end: now,
                },
            },
        }),
        [locale, now],
    );

    return (
        <AriaDateRangePicker aria-label="Range calendar" value={value} onChange={setValue}>
            <AriaDialog className="flex rounded-2xl bg-primary shadow-xl ring ring-secondary_alt focus:outline-hidden">
                <div className="hidden w-38 flex-col gap-0.5 border-r border-solid border-secondary p-3 lg:flex">
                    {Object.values(presets).map((preset) => (
                        <RangePresetButton
                            key={preset.label}
                            value={preset.value}
                            onClick={() => {
                                setFocusedValue(preset.value.start);
                                setValue(preset.value);
                            }}
                        >
                            {preset.label}
                        </RangePresetButton>
                    ))}
                </div>
                <div className="flex flex-col">
                    <RangeCalendar
                        focusedValue={focusedValue}
                        onFocusChange={setFocusedValue}
                        presets={{
                            lastWeek: presets.lastWeek,
                            lastMonth: presets.lastMonth,
                            lastYear: presets.lastYear,
                        }}
                    />
                    <div className="flex justify-between gap-3 border-t border-secondary p-4">
                        <div className="hidden items-center gap-2 md:flex">
                            <InputDateBase slot="start" size="sm" />
                            <div className="text-md text-quaternary">–</div>
                            <InputDateBase slot="end" size="sm" />
                        </div>
                        <div className="grid w-full grid-cols-2 gap-3 md:flex md:w-auto">
                            <Button size="sm" color="secondary">
                                Cancel
                            </Button>
                            <Button size="sm" color="primary">
                                Apply
                            </Button>
                        </div>
                    </div>
                </div>
            </AriaDialog>
        </AriaDateRangePicker>
    );
};

export const DateRangePickerDemo = () => {
    const now = useMemo(() => toCalendarDateTime(today(getLocalTimeZone())), []);

    return (
        <DateRangePicker
            aria-label="Date range picker"
            defaultValue={{
                start: now.subtract({ days: 7 }),
                end: now,
            }}
        />
    );
};

export const DateRangePickerControlledDemo = () => {
    const [value, setValue] = useState<{ start: DateValue; end: DateValue } | null>({
        start: now.subtract({ days: 7 }),
        end: now,
    });

    return <DateRangePicker aria-label="Date range picker" shouldCloseOnSelect={false} value={value} onChange={setValue} />;
};

export const DarkModeDemo = () => {
    const [value, setValue] = useState<DateValue | null>(now);
    const [focusedValue, setFocusedValue] = useState<DateValue | null>(now);

    return (
        <div className="relative h-180 w-full max-w-180 [--clip-boundary:50%]">
            <div
                style={{
                    clipPath: "polygon(0 0, var(--clip-boundary) 0, var(--clip-boundary) 100%, 0 100%)",
                    transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
                }}
                className="peer/light absolute inset-0 flex items-center justify-center overflow-hidden rounded-2xl bg-tertiary outline-1 -outline-offset-1 outline-secondary_alt transition-all duration-200 peer-hover/dark:[--clip-boundary:10%] hover:z-10 hover:[--clip-boundary:90%]"
            >
                <AriaDatePicker aria-label="Calendar card" value={value} onChange={setValue}>
                    <AriaDialog className="rounded-2xl bg-primary shadow-xl ring ring-secondary_alt">
                        <div className="flex px-6 py-5">
                            <Calendar focusedValue={focusedValue} onFocusChange={setFocusedValue} />
                        </div>
                        <div className="grid grid-cols-2 gap-3 border-t border-secondary p-4">
                            <Button size="sm" color="secondary">
                                Cancel
                            </Button>
                            <Button size="sm" color="primary">
                                Apply
                            </Button>
                        </div>
                    </AriaDialog>
                </AriaDatePicker>
            </div>
            <div
                style={{
                    clipPath: "polygon(var(--clip-boundary) 0, 100% 0, 100% 100%, var(--clip-boundary) 100%)",
                    transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
                }}
                className="peer/dark dark-mode absolute inset-0 flex items-center justify-center overflow-hidden rounded-2xl bg-tertiary outline-1 -outline-offset-1 outline-secondary_alt transition-all duration-200 peer-hover/light:[--clip-boundary:90%] hover:z-10 hover:[--clip-boundary:10%]"
            >
                <AriaDatePicker aria-label="Calendar card" value={value} onChange={setValue}>
                    <AriaDialog className="rounded-2xl bg-primary shadow-xl ring ring-secondary_alt">
                        <div className="flex px-6 py-5">
                            <Calendar focusedValue={focusedValue} onFocusChange={setFocusedValue} />
                        </div>
                        <div className="grid grid-cols-2 gap-3 border-t border-secondary p-4">
                            <Button size="sm" color="secondary">
                                Cancel
                            </Button>
                            <Button size="sm" color="primary">
                                Apply
                            </Button>
                        </div>
                    </AriaDialog>
                </AriaDatePicker>
            </div>
        </div>
    );
};
`;export{ne as a,ee as c,Q as i,Z as n,$ as o,X as r,te as s,re as t};