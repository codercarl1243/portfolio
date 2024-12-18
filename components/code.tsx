import { CodeInputValue } from "@sanity/code-input";

export default function CodeBlock({ language, code }: CodeInputValue) {

    return (
            <pre className='bg-gray-50 border p-2'>
                <code className={`language-${language}`}>{code}</code>
            </pre>
    )
}