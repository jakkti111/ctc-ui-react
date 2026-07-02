import{o as e,t}from"./jsx-runtime-9YgKe2Eq.js";import{t as n}from"./react-JjZAc9W2.js";import{t as r}from"./CheckCircle-CYxi1Lxi.js";import{t as i}from"./Trash01-VyPoyJs0.js";import{t as a}from"./UploadCloud02-Com2PkD2.js";import{t as o}from"./XCircle-DsG3v4O0.js";import{t as s}from"./cx-CmQqEIOd.js";import{t as c}from"./preview-code-section-f81Kwt5b.js";import{t as l}from"./featured-icon-b1H97RDX.js";import{t as u}from"./button-C8hO_E61.js";import{t as d}from"./button-utility-B5thiiGc.js";import{t as f}from"./FileIcon-BN3HGMWv.js";import{t as p}from"./progress-indicators-CwwHQj34.js";import{n as m,t as h}from"./proxy-D6RGvOqw.js";var g=e(n()),_=t(),v=e=>{if(e===0)return`0 KB`;let t=[`B`,`KB`,`MB`,`GB`,`TB`,`PB`,`EB`,`ZB`,`YB`],n=Math.floor(Math.log(e)/Math.log(1024));return Math.floor(e/1024**n)+` `+t[n]},y={Root:e=>(0,_.jsx)(`div`,{...e,className:s(`flex flex-col gap-4`,e.className),children:e.children}),List:e=>(0,_.jsx)(`ul`,{...e,className:s(`flex flex-col gap-3`,e.className),children:(0,_.jsx)(m,{initial:!1,children:e.children})}),DropZone:({className:e,hint:t,isDisabled:n,accept:r,allowsMultiple:i=!0,maxSize:o,onDropFiles:c,onDropUnacceptedFiles:d,onSizeLimitExceed:f})=>{let p=(0,g.useId)(),m=(0,g.useRef)(null),[h,v]=(0,g.useState)(!1),[y,b]=(0,g.useState)(!1),x=e=>r?r.split(`,`).map(e=>e.trim()).some(t=>{if(t.startsWith(`.`))return`.${e.name.split(`.`).pop()?.toLowerCase()}`===t.toLowerCase();if(t.endsWith(`/*`)){let n=t.split(`/`)[0];return e.type.startsWith(`${n}/`)}return e.type===t}):!0,S=e=>{n||(e.preventDefault(),e.stopPropagation(),b(!0))},C=e=>{n||(e.preventDefault(),e.stopPropagation(),b(!1))},w=e=>{v(!1);let t=[],n=[],r=[];if((i?e:e.slice(0,1)).forEach(e=>{if(o&&e.size>o){r.push(e);return}x(e)?t.push(e):n.push(e)}),r.length>0&&typeof f==`function`){let e=new DataTransfer;r.forEach(t=>e.items.add(t)),v(!0),f(e.files)}if(t.length>0&&typeof c==`function`){let e=new DataTransfer;t.forEach(t=>e.items.add(t)),c(e.files)}if(n.length>0&&typeof d==`function`){let e=new DataTransfer;n.forEach(t=>e.items.add(t)),v(!0),d(e.files)}m.current&&(m.current.value=``)};return(0,_.jsxs)(`div`,{"data-dropzone":!0,onDragOver:S,onDragEnter:S,onDragLeave:C,onDragEnd:C,onDrop:e=>{n||(C(e),w(Array.from(e.dataTransfer.files)))},className:s(`relative flex flex-col items-center gap-3 rounded-xl bg-primary px-6 py-4 text-tertiary ring-1 ring-secondary transition duration-100 ease-linear ring-inset`,y&&`ring-2 ring-brand`,n&&`cursor-not-allowed bg-secondary`,e),children:[(0,_.jsx)(l,{icon:a,color:`gray`,theme:`modern`,size:`md`,className:s(n&&`opacity-50`)}),(0,_.jsxs)(`div`,{className:`flex flex-col gap-1 text-center`,children:[(0,_.jsxs)(`div`,{className:`flex justify-center gap-1 text-center`,children:[(0,_.jsx)(`input`,{ref:m,id:p,type:`file`,className:`peer sr-only`,disabled:n,accept:r,multiple:i,onChange:e=>{w(Array.from(e.target.files||[]))}}),(0,_.jsx)(`label`,{htmlFor:p,className:`flex cursor-pointer`,children:(0,_.jsxs)(u,{color:`link-color`,size:`md`,isDisabled:n,onClick:()=>m.current?.click(),children:[`Click to upload `,(0,_.jsx)(`span`,{className:`md:hidden`,children:`and attach files`})]})}),(0,_.jsx)(`span`,{className:`text-sm max-md:hidden`,children:`or drag and drop`})]}),(0,_.jsx)(`p`,{className:s(`text-xs transition duration-100 ease-linear`,h&&`text-error-primary`),children:t||`SVG, PNG, JPG or GIF (max. 800x400px)`})]})]})},ListItemProgressBar:({name:e,size:t,progress:n,failed:c,type:l,fileIconVariant:m,onDelete:g,onRetry:y,className:b})=>{let x=n===100;return(0,_.jsxs)(h.li,{layout:`position`,className:s(`relative flex gap-3 rounded-xl bg-primary p-4 ring-1 ring-secondary transition-shadow duration-100 ease-linear ring-inset`,c&&`ring-2 ring-error`,b),children:[(0,_.jsx)(f,{className:`size-10 shrink-0 dark:hidden`,type:l??`empty`,theme:`light`,variant:m??`default`}),(0,_.jsx)(f,{className:`size-10 shrink-0 not-dark:hidden`,type:l??`empty`,theme:`dark`,variant:m??`default`}),(0,_.jsxs)(`div`,{className:`flex min-w-0 flex-1 flex-col items-start`,children:[(0,_.jsxs)(`div`,{className:`flex w-full max-w-full min-w-0 flex-1`,children:[(0,_.jsxs)(`div`,{className:`min-w-0 flex-1`,children:[(0,_.jsx)(`p`,{className:`truncate text-sm font-medium text-secondary`,children:e}),(0,_.jsxs)(`div`,{className:`mt-0.5 flex items-center gap-2`,children:[(0,_.jsx)(`p`,{className:`truncate text-sm whitespace-nowrap text-tertiary`,children:v(t)}),(0,_.jsx)(`hr`,{className:`h-3 w-px rounded-t-full rounded-b-full border-none bg-border-primary`}),(0,_.jsxs)(`div`,{className:`flex items-center gap-1`,children:[x&&(0,_.jsx)(r,{className:`size-4 stroke-[2.5px] text-fg-success-primary`}),x&&(0,_.jsx)(`p`,{className:`text-sm font-medium text-success-primary`,children:`Complete`}),!x&&!c&&(0,_.jsx)(a,{className:`size-4 stroke-[2.5px] text-fg-quaternary`}),!x&&!c&&(0,_.jsx)(`p`,{className:`text-sm font-medium text-quaternary`,children:`Uploading...`}),c&&(0,_.jsx)(o,{className:`size-4 text-fg-error-primary`}),c&&(0,_.jsx)(`p`,{className:`text-sm font-medium text-error-primary`,children:`Failed`})]})]})]}),(0,_.jsx)(d,{color:`tertiary`,tooltip:`Delete`,icon:i,size:`xs`,className:`-mt-2 -mr-2 self-start`,onClick:g})]}),!c&&(0,_.jsx)(`div`,{className:`mt-1 w-full`,children:(0,_.jsx)(p,{labelPosition:`right`,max:100,min:0,value:n})}),c&&(0,_.jsx)(u,{color:`link-destructive`,size:`sm`,onClick:y,className:`mt-1.5`,children:`Try again`})]})]})},ListItemProgressFill:({name:e,size:t,progress:n,failed:o,type:c,fileIconVariant:l,onDelete:p,onRetry:m,className:g})=>{let y=n===100;return(0,_.jsxs)(h.li,{layout:`position`,className:s(`relative flex gap-3 overflow-hidden rounded-xl bg-primary p-4`,g),children:[(0,_.jsx)(`div`,{style:{transform:`translateX(-${100-n}%)`},className:s(`absolute inset-0 size-full bg-secondary transition duration-75 ease-linear`,y&&`opacity-0`),role:`progressbar`,"aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100}),(0,_.jsx)(`div`,{className:s(`absolute inset-0 size-full rounded-[inherit] ring-1 ring-secondary transition duration-100 ease-linear ring-inset`,o&&`ring-2 ring-error`)}),(0,_.jsx)(f,{className:`relative size-10 shrink-0 dark:hidden`,type:c??`empty`,theme:`light`,variant:l??`solid`}),(0,_.jsx)(f,{className:`relative size-10 shrink-0 not-dark:hidden`,type:c??`empty`,theme:`dark`,variant:l??`solid`}),(0,_.jsxs)(`div`,{className:`relative flex min-w-0 flex-1`,children:[(0,_.jsxs)(`div`,{className:`relative flex min-w-0 flex-1 flex-col items-start`,children:[(0,_.jsxs)(`div`,{className:`w-full min-w-0 flex-1`,children:[(0,_.jsx)(`p`,{className:`truncate text-sm font-medium text-secondary`,children:e}),(0,_.jsxs)(`div`,{className:`mt-0.5 flex items-center gap-2`,children:[(0,_.jsx)(`p`,{className:`text-sm text-tertiary`,children:o?`Upload failed, please try again`:v(t)}),!o&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(`hr`,{className:`h-3 w-px rounded-t-full rounded-b-full border-none bg-border-primary`}),(0,_.jsxs)(`div`,{className:`flex items-center gap-1`,children:[y&&(0,_.jsx)(r,{className:`size-4 stroke-[2.5px] text-fg-success-primary`}),!y&&(0,_.jsx)(a,{className:`size-4 stroke-[2.5px] text-fg-quaternary`}),(0,_.jsxs)(`p`,{className:`text-sm text-tertiary`,children:[n,`%`]})]})]})]})]}),o&&(0,_.jsx)(u,{color:`link-destructive`,size:`sm`,onClick:m,className:`mt-1.5`,children:`Try again`})]}),(0,_.jsx)(d,{color:`tertiary`,tooltip:`Delete`,icon:i,size:`xs`,className:`-mt-2 -mr-2 self-start`,onClick:p})]})]})}},b=(e,t)=>{let n=0,r=setInterval(()=>{t(++n),n===100&&clearInterval(r)},100)},x=()=>{let[e,t]=(0,g.useState)([]),n=n=>{let r=Array.from(n).map(e=>({id:Math.random().toString(),name:e.name,size:e.size,type:e.type,progress:0,fileObject:e}));t([...r.map(({fileObject:e,...t})=>t),...e]),r.forEach(({id:e,fileObject:n})=>{b(n,n=>{t(t=>t.map(t=>t.id===e?{...t,progress:n}:t))})})},r=e=>{console.log(`Unaccepted files`,e)},i=e=>{t(t=>t.filter(t=>t.id!==e))},a=n=>{let r=e.find(e=>e.id===n);r&&b(new File([],r.name,{type:r.type}),e=>{t(t=>t.map(t=>t.id===n?{...t,progress:e,failed:!1}:t))})};return(0,_.jsxs)(y.Root,{children:[(0,_.jsx)(y.DropZone,{accept:`image/*`,hint:`Please upload PNG or JPEG images only.`,onDropFiles:n,onDropUnacceptedFiles:r}),(0,_.jsx)(y.List,{children:e.map(e=>(0,_.jsx)(y.ListItemProgressBar,{...e,size:e.size,onDelete:()=>i(e.id),onRetry:()=>a(e.id)},e.id))})]})},S=()=>{let[e,t]=(0,g.useState)([]),n=n=>{let r=Array.from(n).map(e=>({id:Math.random().toString(),name:e.name,size:e.size,type:e.type,progress:0,fileObject:e}));t([...r.map(({fileObject:e,...t})=>t),...e]),r.forEach(({id:e,fileObject:n})=>{b(n,n=>{t(t=>t.map(t=>t.id===e?{...t,progress:n}:t))})})},r=e=>{console.log(`Max size exceeded`,e)},i=e=>{t(t=>t.filter(t=>t.id!==e))},a=n=>{let r=e.find(e=>e.id===n);r&&b(new File([],r.name,{type:r.type}),e=>{t(t=>t.map(t=>t.id===n?{...t,progress:e,failed:!1}:t))})},o=1024*1024*1;return(0,_.jsxs)(y.Root,{children:[(0,_.jsx)(y.DropZone,{maxSize:o,hint:`Upload files to add to this project (max. ${v(o)}).`,onDropFiles:n,onSizeLimitExceed:r}),(0,_.jsx)(y.List,{children:e.map(e=>(0,_.jsx)(y.ListItemProgressBar,{...e,size:e.size,onDelete:()=>i(e.id),onRetry:()=>a(e.id)},e.id))})]})},C=[{id:`file-01`,name:`Example dashboard screenshot.jpg`,type:`jpg`,size:720*1024,progress:50},{id:`file-02`,name:`Tech design requirements_2.pdf`,type:`pdf`,size:720*1024,progress:100},{id:`file-03`,name:`Tech design requirements.pdf`,type:`pdf`,failed:!0,size:1024*1024*1,progress:0}],w=e=>{let[t,n]=(0,g.useState)(C),r=e=>{let r=Array.from(e).map(e=>({id:Math.random().toString(),name:e.name,size:e.size,type:e.type,progress:0,fileObject:e}));n([...r.map(({fileObject:e,...t})=>t),...t]),r.forEach(({id:e,fileObject:t})=>{b(t,t=>{n(n=>n.map(n=>n.id===e?{...n,progress:t}:n))})})},i=e=>{n(t=>t.filter(t=>t.id!==e))},a=e=>{let r=t.find(t=>t.id===e);r&&b(new File([],r.name,{type:r.type}),t=>{n(n=>n.map(n=>n.id===e?{...n,progress:t,failed:!1}:n))})};return(0,_.jsxs)(y.Root,{children:[(0,_.jsx)(y.DropZone,{isDisabled:e.isDisabled,onDropFiles:r}),(0,_.jsx)(y.List,{children:t.map(e=>(0,_.jsx)(y.ListItemProgressBar,{...e,size:e.size,onDelete:()=>i(e.id),onRetry:()=>a(e.id)},e.id))})]})},T=e=>{let[t,n]=(0,g.useState)(C),r=e=>{let r=Array.from(e).map(e=>({id:Math.random().toString(),name:e.name,size:e.size,type:e.type,progress:0,fileObject:e}));n([...r.map(({fileObject:e,...t})=>t),...t]),r.forEach(({id:e,fileObject:t})=>{b(t,t=>{n(n=>n.map(n=>n.id===e?{...n,progress:t}:n))})})},i=e=>{n(t=>t.filter(t=>t.id!==e))},a=e=>{let r=t.find(t=>t.id===e);r&&b(new File([],r.name,{type:r.type}),t=>{n(n=>n.map(n=>n.id===e?{...n,progress:t,failed:!1}:n))})};return(0,_.jsxs)(y.Root,{children:[(0,_.jsx)(y.DropZone,{isDisabled:e.isDisabled,onDropFiles:r}),(0,_.jsx)(y.List,{children:t.map(e=>(0,_.jsx)(y.ListItemProgressFill,{...e,size:e.size,onDelete:()=>i(e.id),onRetry:()=>a(e.id)},e.id))})]})},E=`"use client";

import { useState } from "react";
import { FileUpload, getReadableFileSize } from "@/components/application/file-upload/file-upload-base";

const uploadFile = (file: File, onProgress: (progress: number) => void) => {
    // Add your upload logic here...

    // This is dummy upload logic
    let progress = 0;
    const interval = setInterval(() => {
        onProgress(++progress);
        if (progress === 100) {
            clearInterval(interval);
        }
    }, 100);
};

type UploadedFile = { id: string; name: string; size: number; progress: number; type?: string; failed?: boolean };

export const ImagesOnlyDemo = () => {
    const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

    const handleDropFiles = (files: FileList) => {
        const newFiles = Array.from(files);
        const newFilesWithIds = newFiles.map((file) => ({
            id: Math.random().toString(),
            name: file.name,
            size: file.size,
            type: file.type,
            progress: 0,
            fileObject: file,
        }));

        setUploadedFiles([...newFilesWithIds.map(({ fileObject: _, ...file }) => file), ...uploadedFiles]);

        newFilesWithIds.forEach(({ id, fileObject }) => {
            uploadFile(fileObject, (progress) => {
                setUploadedFiles((prev) => prev.map((uploadedFile) => (uploadedFile.id === id ? { ...uploadedFile, progress } : uploadedFile)));
            });
        });
    };

    const handleDropUnacceptedFiles = (files: FileList) => {
        console.log("Unaccepted files", files);
    };

    const handleDeleteFile = (id: string) => {
        setUploadedFiles((prev) => prev.filter((file) => file.id !== id));
    };

    const handleRetryFile = (id: string) => {
        const file = uploadedFiles.find((file) => file.id === id);
        if (!file) return;

        uploadFile(new File([], file.name, { type: file.type }), (progress) => {
            setUploadedFiles((prev) => prev.map((uploadedFile) => (uploadedFile.id === id ? { ...uploadedFile, progress, failed: false } : uploadedFile)));
        });
    };

    return (
        <FileUpload.Root>
            <FileUpload.DropZone
                accept="image/*"
                hint="Please upload PNG or JPEG images only."
                onDropFiles={handleDropFiles}
                onDropUnacceptedFiles={handleDropUnacceptedFiles}
            />

            <FileUpload.List>
                {uploadedFiles.map((file) => (
                    <FileUpload.ListItemProgressBar
                        key={file.id}
                        {...file}
                        size={file.size}
                        onDelete={() => handleDeleteFile(file.id)}
                        onRetry={() => handleRetryFile(file.id)}
                    />
                ))}
            </FileUpload.List>
        </FileUpload.Root>
    );
};

export const MaxSizeLimitDemo = () => {
    const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

    const handleDropFiles = (files: FileList) => {
        const newFiles = Array.from(files);
        const newFilesWithIds = newFiles.map((file) => ({
            id: Math.random().toString(),
            name: file.name,
            size: file.size,
            type: file.type,
            progress: 0,
            fileObject: file,
        }));

        setUploadedFiles([...newFilesWithIds.map(({ fileObject: _, ...file }) => file), ...uploadedFiles]);

        newFilesWithIds.forEach(({ id, fileObject }) => {
            uploadFile(fileObject, (progress) => {
                setUploadedFiles((prev) => prev.map((uploadedFile) => (uploadedFile.id === id ? { ...uploadedFile, progress } : uploadedFile)));
            });
        });
    };

    const handleMaxSizeExceed = (files: FileList) => {
        console.log("Max size exceeded", files);
    };

    const handleDeleteFile = (id: string) => {
        setUploadedFiles((prev) => prev.filter((file) => file.id !== id));
    };

    const handleRetryFile = (id: string) => {
        const file = uploadedFiles.find((file) => file.id === id);
        if (!file) return;

        uploadFile(new File([], file.name, { type: file.type }), (progress) => {
            setUploadedFiles((prev) => prev.map((uploadedFile) => (uploadedFile.id === id ? { ...uploadedFile, progress, failed: false } : uploadedFile)));
        });
    };

    const MAX_SIZE = 1024 * 1024 * 1;

    return (
        <FileUpload.Root>
            <FileUpload.DropZone
                maxSize={MAX_SIZE}
                hint={\`Upload files to add to this project (max. \${getReadableFileSize(MAX_SIZE)}).\`}
                onDropFiles={handleDropFiles}
                onSizeLimitExceed={handleMaxSizeExceed}
            />

            <FileUpload.List>
                {uploadedFiles.map((file) => (
                    <FileUpload.ListItemProgressBar
                        key={file.id}
                        {...file}
                        size={file.size}
                        onDelete={() => handleDeleteFile(file.id)}
                        onRetry={() => handleRetryFile(file.id)}
                    />
                ))}
            </FileUpload.List>
        </FileUpload.Root>
    );
};

export const DisabledDemo = () => {
    return (
        <FileUpload.Root>
            <FileUpload.DropZone isDisabled />
        </FileUpload.Root>
    );
};

const placeholderFiles = [
    {
        id: "file-01",
        name: "Example dashboard screenshot.jpg",
        type: "jpg",
        size: 720 * 1024,
        progress: 50,
    },
    {
        id: "file-02",
        name: "Tech design requirements_2.pdf",
        type: "pdf",
        size: 720 * 1024,
        progress: 100,
    },
    {
        id: "file-03",
        name: "Tech design requirements.pdf",
        type: "pdf",
        failed: true,
        size: 1024 * 1024 * 1,
        progress: 0,
    },
];

export const FileUploadProgressBar = (props: { isDisabled?: boolean }) => {
    const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>(placeholderFiles);

    const handleDropFiles = (files: FileList) => {
        const newFiles = Array.from(files);
        const newFilesWithIds = newFiles.map((file) => ({
            id: Math.random().toString(),
            name: file.name,
            size: file.size,
            type: file.type,
            progress: 0,
            fileObject: file,
        }));

        setUploadedFiles([...newFilesWithIds.map(({ fileObject: _, ...file }) => file), ...uploadedFiles]);

        newFilesWithIds.forEach(({ id, fileObject }) => {
            uploadFile(fileObject, (progress) => {
                setUploadedFiles((prev) => prev.map((uploadedFile) => (uploadedFile.id === id ? { ...uploadedFile, progress } : uploadedFile)));
            });
        });
    };

    const handleDeleteFile = (id: string) => {
        setUploadedFiles((prev) => prev.filter((file) => file.id !== id));
    };

    const handleRetryFile = (id: string) => {
        const file = uploadedFiles.find((file) => file.id === id);
        if (!file) return;

        uploadFile(new File([], file.name, { type: file.type }), (progress) => {
            setUploadedFiles((prev) => prev.map((uploadedFile) => (uploadedFile.id === id ? { ...uploadedFile, progress, failed: false } : uploadedFile)));
        });
    };

    return (
        <FileUpload.Root>
            <FileUpload.DropZone isDisabled={props.isDisabled} onDropFiles={handleDropFiles} />

            <FileUpload.List>
                {uploadedFiles.map((file) => (
                    <FileUpload.ListItemProgressBar
                        key={file.id}
                        {...file}
                        size={file.size}
                        onDelete={() => handleDeleteFile(file.id)}
                        onRetry={() => handleRetryFile(file.id)}
                    />
                ))}
            </FileUpload.List>
        </FileUpload.Root>
    );
};

export const FileUploadProgressFill = (props: { isDisabled?: boolean }) => {
    const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>(placeholderFiles);

    const handleDropFiles = (files: FileList) => {
        const newFiles = Array.from(files);
        const newFilesWithIds = newFiles.map((file) => ({
            id: Math.random().toString(),
            name: file.name,
            size: file.size,
            type: file.type,
            progress: 0,
            fileObject: file,
        }));

        setUploadedFiles([...newFilesWithIds.map(({ fileObject: _, ...file }) => file), ...uploadedFiles]);

        newFilesWithIds.forEach(({ id, fileObject }) => {
            uploadFile(fileObject, (progress) => {
                setUploadedFiles((prev) => prev.map((uploadedFile) => (uploadedFile.id === id ? { ...uploadedFile, progress } : uploadedFile)));
            });
        });
    };

    const handleDeleteFile = (id: string) => {
        setUploadedFiles((prev) => prev.filter((file) => file.id !== id));
    };

    const handleRetryFile = (id: string) => {
        const file = uploadedFiles.find((file) => file.id === id);
        if (!file) return;

        uploadFile(new File([], file.name, { type: file.type }), (progress) => {
            setUploadedFiles((prev) => prev.map((uploadedFile) => (uploadedFile.id === id ? { ...uploadedFile, progress, failed: false } : uploadedFile)));
        });
    };

    return (
        <FileUpload.Root>
            <FileUpload.DropZone isDisabled={props.isDisabled} onDropFiles={handleDropFiles} />

            <FileUpload.List>
                {uploadedFiles.map((file) => (
                    <FileUpload.ListItemProgressFill
                        key={file.id}
                        {...file}
                        size={file.size}
                        onDelete={() => handleDeleteFile(file.id)}
                        onRetry={() => handleRetryFile(file.id)}
                    />
                ))}
            </FileUpload.List>
        </FileUpload.Root>
    );
};
`,D=()=>(0,_.jsxs)(`div`,{className:`mx-auto max-w-4xl px-4 py-12 md:px-8`,children:[(0,_.jsxs)(`div`,{className:`mb-12`,children:[(0,_.jsx)(`h1`,{className:`text-display-sm font-semibold text-primary`,children:`File Uploaders`}),(0,_.jsx)(`p`,{className:`mt-2 text-lg text-tertiary`,children:`Drag-and-drop file upload components with progress indicators.`})]}),(0,_.jsxs)(`div`,{className:`flex flex-col gap-8`,children:[(0,_.jsx)(c,{title:`Images Only`,description:`File upload restricted to image types.`,sourceCode:E,exportName:`ImagesOnlyDemo`,children:(0,_.jsx)(x,{})}),(0,_.jsx)(c,{title:`Max Size Limit`,description:`Upload with file size validation.`,sourceCode:E,exportName:`MaxSizeLimitDemo`,children:(0,_.jsx)(S,{})}),(0,_.jsx)(c,{title:`Progress Bar`,description:`Upload progress with bar indicator.`,sourceCode:E,exportName:`FileUploadProgressBar`,children:(0,_.jsx)(w,{})}),(0,_.jsx)(c,{title:`Progress Fill`,description:`Upload progress with fill animation.`,sourceCode:E,exportName:`FileUploadProgressFill`,children:(0,_.jsx)(T,{})})]})]});export{D as FileUploadersPage};