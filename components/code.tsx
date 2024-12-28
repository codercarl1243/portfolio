'use client'
import { CodeInputValue } from "@sanity/code-input";
import { Card, Code } from "@sanity/ui";

export type TCodeProps = CodeInputValue;

const languageMap: Record<string, string> = {
    tsx: 'typescript'
}

export default function CodeBlock({ language, code }: TCodeProps) {
if (!language || !code) return ;
    return (
        <Card padding={3}>
<Code language={languageMap[language]} cellPadding={4}>{code} </Code>
            {/* <pre className='bg-gray-50 border p-2'>
                <code className={`language-${language}`}>{code}</code>
            </pre> */}
        </Card>
    )
}