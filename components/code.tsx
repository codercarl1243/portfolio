'use client'
import { CodeInputValue } from "@sanity/code-input";

export type TCodeProps = CodeInputValue;

export default function CodeBlock({ language, code }: TCodeProps) {
    if (!language || !code) return;
    return (
        <pre className='bg-gray-50 border p-2'>
            <code className={`language-${language}`}>{code}</code>
        </pre>
    )
}