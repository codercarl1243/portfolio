'use client'
import { CodeInputValue } from "@sanity/code-input";
import { Highlight, themes } from "prism-react-renderer"
import { Italic } from ".";

export type TCodeProps = CodeInputValue;

export default function CodeBlock({ language, code, filename, highlightedLines }: TCodeProps) {

    if (!code) return;


    return (
        <div className="bg-[#0b1b35] px-4 rounded">
            <div className="flex justify-between text-white/60">
                <p>
                    {filename}
                </p>
                <p>
                    <Italic>language:</Italic> {language}
                </p>
            </div>
            <Highlight
                theme={themes.vsDark}
                code={code}
                language={language || "tsx"}
            >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre
                        className={`${className} !bg-transparent px-2 text-wrap`}
                        style={style}>
                        {tokens.map((line, i) => {

                            const {style, className} = getLineProps({ line, key: i })

                            return (
                                <div key={i} style={style} className={className}>
                                    {line.map((token, key) => {
                                        const {style, className, children} = getTokenProps({ token, key });
                                        return <span style={style} className={className} children={children} key={key}/>
                                    })}
                                </div>
                            )
                        })}
                    </pre>
                )}
            </Highlight>
        </div>
    )
}