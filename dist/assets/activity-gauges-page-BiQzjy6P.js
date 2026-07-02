import{t as e}from"./jsx-runtime-9YgKe2Eq.js";import{i as t,n,r,t as i}from"./activity-gauges.demo-Dgly67JF.js";import{t as a}from"./preview-code-section-f81Kwt5b.js";var o=`"use client";

import { Legend, PolarAngleAxis, RadialBar, RadialBarChart, ResponsiveContainer, Tooltip } from "recharts";
import { ChartLegendContent, ChartTooltipContent } from "@/components/application/charts/charts-base";
import { cx } from "@/utils/cx";

const radialData = [
    // collapse-start
    {
        name: "Series 3",
        value: 660,
        className: "text-utility-brand-400",
    },
    {
        name: "Series 2",
        value: 774,
        className: "text-utility-brand-600",
    },
    {
        name: "Series 1",
        value: 866,
        className: "text-utility-brand-700",
    },
    // collapse-end
];

interface ActivityGaugeProps {
    title?: string;
    subtitle?: string;
    data?: {
        name: string;
        value: number;
        className?: string;
    }[];
}

export const ActivityGaugeXs = ({ title = "1,000", subtitle = "Active users", data = radialData }: ActivityGaugeProps) => {
    return (
        <ResponsiveContainer initialDimension={{ width: 1, height: 1 }} height={220}>
            <RadialBarChart
                data={data}
                accessibilityLayer
                innerRadius={52}
                outerRadius={86}
                // This is needed to start the chart at the top and go clockwise
                startAngle={90}
                endAngle={360 + 90}
                className="font-medium text-tertiary [&_.recharts-polar-grid]:text-utility-neutral-100 [&_.recharts-text]:text-sm"
                margin={{
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <PolarAngleAxis tick={false} domain={[0, 1000]} type="number" reversed />

                <Legend verticalAlign="bottom" align="center" layout="horizontal" content={<ChartLegendContent />} />

                <Tooltip content={<ChartTooltipContent isRadialChart />} />

                <RadialBar
                    isAnimationActive={false}
                    dataKey="value"
                    cornerRadius={99}
                    fill="currentColor"
                    background={{
                        className: "fill-utility-neutral-100",
                    }}
                />

                {(title || subtitle) && (
                    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
                        {subtitle && (
                            <tspan x="50%" dy={title ? "-1.175em" : "1%"} className={cx("fill-current text-tertiary", "text-xs font-medium")}>
                                {subtitle}
                            </tspan>
                        )}
                        {title && (
                            <tspan x="50%" dy={subtitle ? "1.25em" : "1%"} className={cx("fill-current text-primary", "text-xl font-semibold")}>
                                {title}
                            </tspan>
                        )}
                    </text>
                )}
            </RadialBarChart>
        </ResponsiveContainer>
    );
};

export const ActivityGaugeSm = ({ title = "1,000", subtitle = "Active users", data = radialData }: ActivityGaugeProps) => {
    return (
        <ResponsiveContainer initialDimension={{ width: 1, height: 1 }} height={268}>
            <RadialBarChart
                data={data}
                accessibilityLayer
                innerRadius={61}
                outerRadius={110}
                // This is needed to start the chart at the top and go clockwise
                startAngle={90}
                endAngle={360 + 90}
                className="font-medium text-tertiary [&_.recharts-polar-grid]:text-utility-neutral-100 [&_.recharts-text]:text-sm"
                margin={{
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <PolarAngleAxis tick={false} domain={[0, 1000]} type="number" reversed />

                <Legend verticalAlign="bottom" align="center" layout="horizontal" content={<ChartLegendContent />} />

                <Tooltip content={<ChartTooltipContent isRadialChart />} />

                <RadialBar
                    isAnimationActive={false}
                    dataKey="value"
                    cornerRadius={99}
                    fill="currentColor"
                    background={{
                        className: "fill-utility-neutral-100",
                    }}
                />

                {(title || subtitle) && (
                    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
                        {subtitle && (
                            <tspan x="50%" dy={title ? "-1.35em" : "1%"} className={cx("fill-current text-tertiary", "text-xs font-medium")}>
                                {subtitle}
                            </tspan>
                        )}
                        {title && (
                            <tspan x="50%" dy={subtitle ? "1.15em" : "1%"} className={cx("fill-current text-primary", "text-display-xs font-semibold")}>
                                {title}
                            </tspan>
                        )}
                    </text>
                )}
            </RadialBarChart>
        </ResponsiveContainer>
    );
};

export const ActivityGaugeMd = ({ title = "1,000", subtitle = "Active users", data = radialData }: ActivityGaugeProps) => {
    return (
        <ResponsiveContainer initialDimension={{ width: 1, height: 1 }} height={312}>
            <RadialBarChart
                data={data}
                accessibilityLayer
                innerRadius={74}
                outerRadius={132}
                // This is needed to start the chart at the top and go clockwise
                startAngle={90}
                endAngle={360 + 90}
                className="font-medium text-tertiary [&_.recharts-polar-grid]:text-utility-neutral-100 [&_.recharts-text]:text-sm"
                margin={{
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <PolarAngleAxis tick={false} domain={[0, 1000]} type="number" reversed />

                <Legend verticalAlign="bottom" align="center" layout="horizontal" content={<ChartLegendContent />} />

                <Tooltip content={<ChartTooltipContent isRadialChart />} />

                <RadialBar
                    isAnimationActive={false}
                    dataKey="value"
                    cornerRadius={99}
                    fill="currentColor"
                    background={{
                        className: "fill-utility-neutral-100",
                    }}
                />

                {(title || subtitle) && (
                    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
                        {subtitle && (
                            <tspan x="50%" dy={title ? "-1.45em" : "1%"} className={cx("fill-current text-tertiary", "text-sm font-medium")}>
                                {subtitle}
                            </tspan>
                        )}
                        {title && (
                            <tspan x="50%" dy={subtitle ? "1.075em" : "1%"} className={cx("fill-current text-primary", "text-display-sm font-semibold")}>
                                {title}
                            </tspan>
                        )}
                    </text>
                )}
            </RadialBarChart>
        </ResponsiveContainer>
    );
};

export const ActivityGaugeLg = ({ title = "1,000", subtitle = "Active users", data = radialData }: ActivityGaugeProps) => {
    return (
        <ResponsiveContainer initialDimension={{ width: 1, height: 1 }} height={356}>
            <RadialBarChart
                data={data}
                accessibilityLayer
                innerRadius={84}
                outerRadius={154}
                // This is needed to start the chart at the top and go clockwise
                startAngle={90}
                endAngle={360 + 90}
                className="font-medium text-tertiary [&_.recharts-polar-grid]:text-utility-neutral-100 [&_.recharts-text]:text-sm"
                margin={{
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <PolarAngleAxis tick={false} domain={[0, 1000]} type="number" reversed />

                <Legend verticalAlign="bottom" align="center" layout="horizontal" content={<ChartLegendContent />} />

                <Tooltip content={<ChartTooltipContent isRadialChart />} />

                <RadialBar
                    isAnimationActive={false}
                    dataKey="value"
                    cornerRadius={99}
                    fill="currentColor"
                    background={{
                        className: "fill-utility-neutral-100",
                    }}
                />

                {(title || subtitle) && (
                    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
                        {subtitle && (
                            <tspan x="50%" dy={title ? "-1.4em" : "1%"} className={cx("fill-current text-tertiary", "text-sm font-medium")}>
                                {subtitle}
                            </tspan>
                        )}
                        {title && (
                            <tspan x="50%" dy={subtitle ? "1em" : "1%"} className={cx("fill-current text-primary", "text-display-md font-semibold")}>
                                {title}
                            </tspan>
                        )}
                    </text>
                )}
            </RadialBarChart>
        </ResponsiveContainer>
    );
};
`,s=e(),c=()=>(0,s.jsxs)(`div`,{className:`mx-auto max-w-6xl px-4 py-12 md:px-8`,children:[(0,s.jsxs)(`div`,{className:`mb-12`,children:[(0,s.jsx)(`h1`,{className:`text-display-sm font-semibold text-primary`,children:`Activity Gauges`}),(0,s.jsx)(`p`,{className:`mt-2 text-lg text-tertiary`,children:`Radial bar charts for displaying activity metrics at different sizes.`})]}),(0,s.jsxs)(`div`,{className:`grid grid-cols-1 gap-8 md:grid-cols-2`,children:[(0,s.jsx)(a,{title:`Activity Gauge — XS`,description:`Extra small variant, ideal for compact dashboards.`,sourceCode:o,exportName:`ActivityGaugeXs`,children:(0,s.jsx)(`div`,{className:`flex items-center justify-center`,children:(0,s.jsx)(`div`,{className:`w-full max-w-[240px]`,children:(0,s.jsx)(t,{})})})}),(0,s.jsx)(a,{title:`Activity Gauge — SM`,description:`Small variant with slightly larger radii.`,sourceCode:o,exportName:`ActivityGaugeSm`,children:(0,s.jsx)(`div`,{className:`flex items-center justify-center`,children:(0,s.jsx)(`div`,{className:`w-full max-w-[300px]`,children:(0,s.jsx)(r,{})})})}),(0,s.jsx)(a,{title:`Activity Gauge — MD`,description:`Medium variant, the default balanced size.`,sourceCode:o,exportName:`ActivityGaugeMd`,children:(0,s.jsx)(`div`,{className:`flex items-center justify-center`,children:(0,s.jsx)(`div`,{className:`w-full max-w-[360px]`,children:(0,s.jsx)(n,{})})})}),(0,s.jsx)(a,{title:`Activity Gauge — LG`,description:`Large variant for prominent metric displays.`,sourceCode:o,exportName:`ActivityGaugeLg`,children:(0,s.jsx)(`div`,{className:`flex items-center justify-center`,children:(0,s.jsx)(`div`,{className:`w-full max-w-[400px]`,children:(0,s.jsx)(i,{})})})})]}),(0,s.jsxs)(`div`,{className:`mt-12`,children:[(0,s.jsx)(l,{title:`Custom Data Examples`,description:`Activity gauges with custom titles, subtitles, and data.`}),(0,s.jsxs)(`div`,{className:`grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4`,children:[(0,s.jsx)(`div`,{className:`flex items-center justify-center rounded-xl border border-secondary p-4 shadow-xs`,children:(0,s.jsx)(`div`,{className:`w-full`,children:(0,s.jsx)(t,{title:`85%`,subtitle:`CPU Usage`,data:[{name:`System`,value:350,className:`text-utility-red-400`},{name:`User`,value:500,className:`text-utility-red-600`},{name:`Idle`,value:850,className:`text-utility-red-700`}]})})}),(0,s.jsx)(`div`,{className:`flex items-center justify-center rounded-xl border border-secondary p-4 shadow-xs`,children:(0,s.jsx)(`div`,{className:`w-full`,children:(0,s.jsx)(t,{title:`2.4k`,subtitle:`Page views`,data:[{name:`Mobile`,value:420,className:`text-utility-green-400`},{name:`Tablet`,value:680,className:`text-utility-green-600`},{name:`Desktop`,value:920,className:`text-utility-green-700`}]})})}),(0,s.jsx)(`div`,{className:`flex items-center justify-center rounded-xl border border-secondary p-4 shadow-xs`,children:(0,s.jsx)(`div`,{className:`w-full`,children:(0,s.jsx)(t,{title:`$12.8k`,subtitle:`Revenue`,data:[{name:`Q1`,value:300,className:`text-utility-yellow-400`},{name:`Q2`,value:600,className:`text-utility-yellow-500`},{name:`Q3`,value:780,className:`text-utility-yellow-700`}]})})}),(0,s.jsx)(`div`,{className:`flex items-center justify-center rounded-xl border border-secondary p-4 shadow-xs`,children:(0,s.jsx)(`div`,{className:`w-full`,children:(0,s.jsx)(t,{title:`142`,subtitle:`Tasks done`,data:[{name:`Bug fixes`,value:450,className:`text-utility-indigo-400`},{name:`Features`,value:700,className:`text-utility-indigo-600`},{name:`Refactors`,value:900,className:`text-utility-indigo-700`}]})})})]})]})]}),l=({title:e,description:t})=>(0,s.jsxs)(`div`,{className:`mb-4`,children:[(0,s.jsx)(`h2`,{className:`text-lg font-semibold text-primary`,children:e}),(0,s.jsx)(`p`,{className:`text-sm text-tertiary`,children:t})]});export{c as ActivityGaugesPage};