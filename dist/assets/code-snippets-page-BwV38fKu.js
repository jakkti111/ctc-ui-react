import{o as e,t}from"./jsx-runtime-9YgKe2Eq.js";import{t as n}from"./react-JjZAc9W2.js";import{t as r}from"./Check-DjWRQiOq.js";import{t as i}from"./Copy01-C41BAV69.js";import{t as a}from"./cx-CmQqEIOd.js";var o=e(n()),s=t(),c=({title:e,language:t,code:n})=>{let[c,l]=(0,o.useState)(!1);return(0,s.jsxs)(`div`,{className:`overflow-hidden rounded-xl border border-secondary shadow-xs`,children:[(0,s.jsxs)(`div`,{className:`flex items-center justify-between border-b border-secondary bg-secondary px-4 py-2.5`,children:[(0,s.jsx)(`span`,{className:`text-sm font-medium text-secondary`,children:e}),(0,s.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,s.jsx)(`span`,{className:`text-xs text-quaternary`,children:t}),(0,s.jsx)(`button`,{type:`button`,onClick:()=>{navigator.clipboard.writeText(n),l(!0),setTimeout(()=>l(!1),2e3)},className:a(`cursor-pointer rounded-md p-1.5 transition duration-100`,c?`text-fg-success-primary`:`text-fg-quaternary hover:text-fg-quaternary_hover`),children:c?(0,s.jsx)(r,{className:`size-4`}):(0,s.jsx)(i,{className:`size-4`})})]})]}),(0,s.jsx)(`pre`,{className:`overflow-x-auto bg-primary_alt p-4 text-sm leading-relaxed text-secondary`,children:(0,s.jsx)(`code`,{children:n})})]})},l=()=>(0,s.jsxs)(`div`,{className:`mx-auto max-w-4xl px-4 py-12 md:px-8`,children:[(0,s.jsxs)(`div`,{className:`mb-12`,children:[(0,s.jsx)(`h1`,{className:`text-display-sm font-semibold text-primary`,children:`Code Snippets`}),(0,s.jsx)(`p`,{className:`mt-2 text-lg text-tertiary`,children:`Styled code blocks with syntax display and copy functionality.`})]}),(0,s.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,s.jsx)(c,{title:`Install dependencies`,language:`bash`,code:`npm install @untitledui/react tailwindcss`}),(0,s.jsx)(c,{title:`Button component`,language:`tsx`,code:`import { Button } from "@untitledui/react";

export const MyButton = () => (
  <Button color="primary" size="md">
    Click me
  </Button>
);`}),(0,s.jsx)(c,{title:`API configuration`,language:`typescript`,code:`const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
  retries: 3,
  headers: {
    "Content-Type": "application/json",
    Authorization: \`Bearer \${token}\`,
  },
};`})]})]});export{l as CodeSnippetsPage};