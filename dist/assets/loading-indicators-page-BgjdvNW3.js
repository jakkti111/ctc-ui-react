import{t as e}from"./jsx-runtime-9YgKe2Eq.js";import{t}from"./cx-CmQqEIOd.js";import{t as n}from"./preview-code-section-f81Kwt5b.js";var r=e(),i={sm:{root:`gap-4`,label:`text-sm font-medium`,spinner:`size-8`},md:{root:`gap-4`,label:`text-sm font-medium`,spinner:`size-12`},lg:{root:`gap-4`,label:`text-lg font-medium`,spinner:`size-14`},xl:{root:`gap-5`,label:`text-lg font-medium`,spinner:`size-16`}},a=({type:e=`line-simple`,size:n=`sm`,label:a})=>(0,r.jsxs)(`div`,{className:t(`flex flex-col items-center justify-center`,i[n].root),children:[e===`line-spinner`?(0,r.jsx)(`svg`,{className:t(`animate-spin`,i[n].spinner),viewBox:`0 0 32 32`,fill:`none`,children:(0,r.jsx)(`circle`,{className:`stroke-fg-brand-primary`,cx:`16`,cy:`16`,r:`14`,fill:`none`,strokeWidth:`4`,strokeDashoffset:`40`,strokeDasharray:`100`,strokeLinecap:`round`})}):e===`dot-circle`?(0,r.jsxs)(`svg`,{className:t(`animate-spin text-fg-brand-primary`,i[n].spinner),viewBox:`0 0 36 36`,fill:`none`,children:[(0,r.jsx)(`path`,{d:`M34 18C34 15.8989 33.5861 13.8183 32.7821 11.8771C31.978 9.93586 30.7994 8.17203 29.3137 6.68629C27.828 5.20055 26.0641 4.022 24.1229 3.21793C22.1817 2.41385 20.1011 2 18 2C15.8988 2 13.8183 2.41385 11.8771 3.21793C9.93585 4.022 8.17203 5.20055 6.68629 6.68629C5.20055 8.17203 4.022 9.93586 3.21793 11.8771C2.41385 13.8183 2 15.8989 2 18`,stroke:`url(#paint0)`,strokeWidth:`4`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeDasharray:`0.1 8`}),(0,r.jsx)(`path`,{d:`M3.21793 24.1229C4.022 26.0641 5.20055 27.828 6.68629 29.3137C8.17203 30.7994 9.93585 31.978 11.8771 32.7821C13.8183 33.5861 15.8988 34 18 34C20.1011 34 22.1817 33.5861 24.1229 32.7821C26.0641 31.978 27.828 30.7994 29.3137 29.3137C30.7994 27.828 31.978 26.0641 32.7821 24.1229`,stroke:`url(#paint1)`,strokeWidth:`4`,strokeLinecap:`round`,strokeLinejoin:`round`,strokeDasharray:`0.1 8`}),(0,r.jsxs)(`defs`,{children:[(0,r.jsxs)(`linearGradient`,{id:`paint0`,x1:`34`,y1:`18`,x2:`2`,y2:`18`,gradientUnits:`userSpaceOnUse`,children:[(0,r.jsx)(`stop`,{stopColor:`currentColor`}),(0,r.jsx)(`stop`,{offset:`1`,stopColor:`currentColor`,stopOpacity:`0.5`})]}),(0,r.jsxs)(`linearGradient`,{id:`paint1`,x1:`33`,y1:`23.5`,x2:`3`,y2:`24`,gradientUnits:`userSpaceOnUse`,children:[(0,r.jsx)(`stop`,{stopOpacity:`0`,stopColor:`currentColor`}),(0,r.jsx)(`stop`,{offset:`1`,stopColor:`currentColor`,stopOpacity:`0.48`})]})]})]}):(0,r.jsxs)(`svg`,{className:t(`animate-spin`,i[n].spinner),viewBox:`0 0 32 32`,fill:`none`,children:[(0,r.jsx)(`circle`,{className:`text-bg-tertiary`,cx:`16`,cy:`16`,r:`14`,stroke:`currentColor`,strokeWidth:`4`}),(0,r.jsx)(`circle`,{className:`stroke-fg-brand-primary`,cx:`16`,cy:`16`,r:`14`,fill:`none`,strokeWidth:`4`,strokeDashoffset:`75`,strokeDasharray:`100`,strokeLinecap:`round`})]}),a&&(0,r.jsx)(`span`,{className:t(`text-secondary`,i[n].label),children:a})]}),o=()=>(0,r.jsxs)(`div`,{className:`flex flex-col items-start gap-8 md:flex-row md:gap-16`,children:[(0,r.jsx)(a,{type:`line-simple`,size:`md`,label:`Loading...`}),(0,r.jsx)(a,{type:`line-spinner`,size:`md`,label:`Loading...`}),(0,r.jsx)(a,{type:`dot-circle`,size:`md`,label:`Loading...`})]}),s=()=>(0,r.jsx)(a,{type:`line-simple`,size:`md`}),c=()=>(0,r.jsx)(a,{type:`line-spinner`,size:`md`}),l=()=>(0,r.jsx)(a,{type:`dot-circle`,size:`md`}),u=()=>(0,r.jsxs)(`div`,{className:`flex flex-col items-start gap-8 md:flex-row`,children:[(0,r.jsx)(a,{type:`line-simple`,size:`sm`,label:`Loading...`}),(0,r.jsx)(a,{type:`line-simple`,size:`md`,label:`Loading...`}),(0,r.jsx)(a,{type:`line-simple`,size:`lg`,label:`Loading...`}),(0,r.jsx)(a,{type:`line-simple`,size:`xl`,label:`Loading...`})]}),d=`import { LoadingIndicator } from "@/components/application/loading-indicator/loading-indicator";

export const DefaultDemo = () => {
    return (
        <div className="flex flex-col items-start gap-8 md:flex-row md:gap-16">
            <LoadingIndicator type="line-simple" size="md" label="Loading..." />
            <LoadingIndicator type="line-spinner" size="md" label="Loading..." />
            <LoadingIndicator type="dot-circle" size="md" label="Loading..." />
        </div>
    );
};

export const LineSimpleDemo = () => {
    return <LoadingIndicator type="line-simple" size="md" />;
};

export const LineSimpleWithLabelDemo = () => {
    return <LoadingIndicator type="line-simple" size="md" label="Loading..." />;
};

export const LineSpinnerDemo = () => {
    return <LoadingIndicator type="line-spinner" size="md" />;
};

export const LineSpinnerWithLabelDemo = () => {
    return <LoadingIndicator type="line-spinner" size="md" label="Loading..." />;
};

export const DotCircleDemo = () => {
    return <LoadingIndicator type="dot-circle" size="md" />;
};

export const DotCircleWithLabelDemo = () => {
    return <LoadingIndicator type="dot-circle" size="md" label="Loading..." />;
};

export const SizesDemo = () => {
    return (
        <div className="flex flex-col items-start gap-8 md:flex-row">
            <LoadingIndicator type="line-simple" size="sm" label="Loading..." />
            <LoadingIndicator type="line-simple" size="md" label="Loading..." />
            <LoadingIndicator type="line-simple" size="lg" label="Loading..." />
            <LoadingIndicator type="line-simple" size="xl" label="Loading..." />
        </div>
    );
};

export const LoadingIndicatorLineSimple = () => (
    <div className="flex flex-col items-start gap-8 md:flex-row">
        <LoadingIndicator type="line-simple" size="sm" label="Loading..." />
        <LoadingIndicator type="line-simple" size="md" label="Loading..." />
        <LoadingIndicator type="line-simple" size="lg" label="Loading..." />
        <LoadingIndicator type="line-simple" size="xl" label="Loading..." />
    </div>
);

export const LoadingIndicatorLineSpinner = () => (
    <div className="flex flex-col items-start gap-8 md:flex-row">
        <LoadingIndicator type="line-spinner" size="sm" label="Loading..." />
        <LoadingIndicator type="line-spinner" size="md" label="Loading..." />
        <LoadingIndicator type="line-spinner" size="lg" label="Loading..." />
        <LoadingIndicator type="line-spinner" size="xl" label="Loading..." />
    </div>
);

export const LoadingIndicatorDotCircle = () => (
    <div className="flex flex-col items-start gap-8 md:flex-row">
        <LoadingIndicator type="dot-circle" size="sm" label="Loading..." />
        <LoadingIndicator type="dot-circle" size="md" label="Loading..." />
        <LoadingIndicator type="dot-circle" size="lg" label="Loading..." />
        <LoadingIndicator type="dot-circle" size="xl" label="Loading..." />
    </div>
);
`,f=()=>(0,r.jsxs)(`div`,{className:`mx-auto max-w-4xl px-4 py-12 md:px-8`,children:[(0,r.jsxs)(`div`,{className:`mb-12`,children:[(0,r.jsx)(`h1`,{className:`text-display-sm font-semibold text-primary`,children:`Loading Indicators`}),(0,r.jsx)(`p`,{className:`mt-2 text-lg text-tertiary`,children:`Spinner and loading state components.`})]}),(0,r.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,r.jsx)(n,{title:`Default`,sourceCode:d,exportName:`DefaultDemo`,children:(0,r.jsx)(o,{})}),(0,r.jsx)(n,{title:`Line Simple`,sourceCode:d,exportName:`LineSimpleDemo`,children:(0,r.jsx)(s,{})}),(0,r.jsx)(n,{title:`Line Spinner`,sourceCode:d,exportName:`LineSpinnerDemo`,children:(0,r.jsx)(c,{})}),(0,r.jsx)(n,{title:`Dot Circle`,sourceCode:d,exportName:`DotCircleDemo`,children:(0,r.jsx)(l,{})}),(0,r.jsx)(n,{title:`Sizes`,sourceCode:d,exportName:`SizesDemo`,children:(0,r.jsx)(u,{})})]})]});export{f as LoadingIndicatorsPage};