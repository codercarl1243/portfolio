'use client'
import { CodeInputValue } from "@sanity/code-input";
import { Highlight, themes } from "prism-react-renderer"
import cx from "classnames";

export type TCodeProps = CodeInputValue;

export default function CodeBlock({ language, code, filename, highlightedLines }: TCodeProps) {
console.log("{ language, code, filename, highlightedLines }", { language, code, filename, highlightedLines })
    if (!code) return;

    const lightTheme = themes.github;
    const darkTheme = themes.vsDark

    const checkLine = (index: number) => {
        if (highlightedLines !== undefined) {
            if (highlightedLines.includes(index)) {
                return true
            } else {
                return false
            }
        } else return null
    }


    return (
        <div className="bg-[#27261c]">
            <div className="flex justify-between ">
                <p className='opacity-70'>
                    {filename}
                </p>
                <p>
                    language: <span className="opacity-70">{language}</span>
                </p>
            </div>
            <Highlight
                theme={lightTheme}
                code={code}
                language={language || "tsx"}
            >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                    <pre
                        className={`${className} !bg-transparent px-2`}
                        style={style}>
                        {tokens.map((line, i) => {

                            const {style, className} = getLineProps({ line, key: i })
                            const classNames = cx(className, 
                                checkLine(i + 1) ? `bg-[#fef3c8] dark:bg-[#27261c]` : ""
                            )

                            return (
                                <div key={i} style={style} className={classNames} data-carl={true}>
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