import { Bold, Italic, Underline } from "@/components";
import { GrBold, GrItalic, GrUnderline } from "react-icons/gr";
import { BlockDecoratorDefinition } from "sanity";


export const decoratorStyles: BlockDecoratorDefinition[] = [
    { title: 'bold', value: 'b', icon: GrBold, component: ({ children }) => <Bold>{children}</Bold> },
    { title: 'italic', value: 'i', icon: GrItalic, component: ({ children }) => <Italic>{children}</Italic> },
    { title: 'Underline', value: 'underline', icon: GrUnderline, component: ({ children }) => <Underline>{children}</Underline> },
]