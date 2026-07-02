import{t as e}from"./jsx-runtime-9YgKe2Eq.js";import{i as t,n,r,t as i}from"./pie-charts.demo-AlyAUA0u.js";import{t as a}from"./preview-code-section-f81Kwt5b.js";var o=`"use client";

import { Legend, Pie, PieChart as RechartsPieChart, ResponsiveContainer, Tooltip } from "recharts";
import { ChartLegendContent, ChartTooltipContent } from "@/components/application/charts/charts-base";

const pieChartData = [
    // collapse-start
    {
        name: "Series 1",
        value: 200,
        className: "text-utility-brand-600",
    },
    {
        name: "Series 2",
        value: 350,
        className: "text-utility-brand-500",
    },
    {
        name: "Series 3",
        value: 100,
        className: "text-utility-brand-400",
    },
    {
        name: "Series 4",
        value: 120,
        className: "text-utility-brand-300",
    },
    {
        name: "Series 5",
        value: 230,
        className: "text-utility-neutral-200",
    },
    // collapse-end
];

interface PieChartProps {
    data?: { name: string; value: number; className?: string }[];
}

export const PieChartXxs = ({ data = pieChartData }: PieChartProps) => {
    return (
        <ResponsiveContainer initialDimension={{ width: 1, height: 1 }} height={120} className="max-w-52.5">
            <RechartsPieChart
                margin={{
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <Legend verticalAlign="top" align="right" layout="vertical" content={ChartLegendContent} />
                <Tooltip content={<ChartTooltipContent isPieChart />} />

                <Pie
                    isAnimationActive={false}
                    startAngle={-270}
                    endAngle={-630}
                    stroke="none"
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    fill="currentColor"
                    innerRadius={30}
                    outerRadius={60}
                />
            </RechartsPieChart>
        </ResponsiveContainer>
    );
};

export const PieChartXs = ({ data = pieChartData }: PieChartProps) => {
    return (
        <ResponsiveContainer initialDimension={{ width: 1, height: 1 }} height={160} className="max-w-62.5">
            <RechartsPieChart
                margin={{
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <Legend verticalAlign="top" align="right" layout="vertical" content={ChartLegendContent} />
                <Tooltip content={<ChartTooltipContent isPieChart />} />

                <Pie
                    isAnimationActive={false}
                    startAngle={-270}
                    endAngle={-630}
                    stroke="none"
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    fill="currentColor"
                    innerRadius={40}
                    outerRadius={80}
                />
            </RechartsPieChart>
        </ResponsiveContainer>
    );
};

export const PieChartSm = ({ data = pieChartData }: PieChartProps) => {
    return (
        <ResponsiveContainer initialDimension={{ width: 1, height: 1 }} height={200} className="max-w-72.5">
            <RechartsPieChart
                margin={{
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <Legend verticalAlign="top" align="right" layout="vertical" content={ChartLegendContent} />
                <Tooltip content={<ChartTooltipContent isPieChart />} />

                <Pie
                    isAnimationActive={false}
                    startAngle={-270}
                    endAngle={-630}
                    stroke="none"
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    fill="currentColor"
                    innerRadius={50}
                    outerRadius={100}
                />
            </RechartsPieChart>
        </ResponsiveContainer>
    );
};

export const PieChartMd = ({ data = pieChartData }: PieChartProps) => {
    return (
        <ResponsiveContainer initialDimension={{ width: 1, height: 1 }} height={240} className="max-w-96">
            <RechartsPieChart
                margin={{
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <Legend verticalAlign="top" align="right" layout="vertical" content={ChartLegendContent} />
                <Tooltip content={<ChartTooltipContent isPieChart />} />

                <Pie
                    isAnimationActive={false}
                    startAngle={-270}
                    endAngle={-630}
                    stroke="none"
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    fill="currentColor"
                    innerRadius={60}
                    outerRadius={120}
                />
            </RechartsPieChart>
        </ResponsiveContainer>
    );
};

export const PieChartLg = ({ data = pieChartData }: PieChartProps) => {
    return (
        <ResponsiveContainer initialDimension={{ width: 1, height: 1 }} height={280} className="max-w-96">
            <RechartsPieChart
                margin={{
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                }}
            >
                <Legend verticalAlign="top" align="right" layout="vertical" content={ChartLegendContent} />
                <Tooltip content={<ChartTooltipContent isPieChart />} />

                <Pie
                    isAnimationActive={false}
                    startAngle={-270}
                    endAngle={-630}
                    stroke="none"
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    fill="currentColor"
                    innerRadius={70}
                    outerRadius={140}
                />
            </RechartsPieChart>
        </ResponsiveContainer>
    );
};
`,s=e(),c=()=>(0,s.jsxs)(`div`,{className:`mx-auto max-w-6xl px-4 py-12 md:px-8`,children:[(0,s.jsxs)(`div`,{className:`mb-12`,children:[(0,s.jsx)(`h1`,{className:`text-display-sm font-semibold text-primary`,children:`Pie Charts`}),(0,s.jsx)(`p`,{className:`mt-2 text-lg text-tertiary`,children:`Donut and pie chart components for data distribution.`})]}),(0,s.jsxs)(`div`,{className:`grid grid-cols-1 gap-8 md:grid-cols-2`,children:[(0,s.jsx)(a,{title:`XS`,sourceCode:o,exportName:`PieChartXs`,children:(0,s.jsx)(t,{})}),(0,s.jsx)(a,{title:`Small`,sourceCode:o,exportName:`PieChartSm`,children:(0,s.jsx)(r,{})}),(0,s.jsx)(a,{title:`Medium`,sourceCode:o,exportName:`PieChartMd`,children:(0,s.jsx)(n,{})}),(0,s.jsx)(a,{title:`Large`,sourceCode:o,exportName:`PieChartLg`,children:(0,s.jsx)(i,{})})]})]});export{c as PieChartsPage};