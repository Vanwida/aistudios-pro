import Callout from "./Callout";
import CodeBlock from "./CodeBlock";
import Image from "next/image";

export const mdxComponents = {
    Callout,
    pre: ({ children, ...props }: any) => {
        return <>{children}</>;
    },
    code: ({ children, className, ...props }: any) => {
        // If it's a block of code (has className like language-js), wrap in CodeBlock
        const match = /language-(\w+)/.exec(className || "");
        if (match || typeof children === 'string' && children.includes('\n')) {
            return (
                <CodeBlock language={match?.[1]} className={className} {...props}>
                    {children}
                </CodeBlock>
            );
        }
        // Otherwise inline code
        return (
            <code className="bg-white/10 text-primary-light px-1.5 py-0.5 rounded-md font-mono text-sm" {...props}>
                {children}
            </code>
        );
    },
    img: (props: any) => (
        <div className="my-8 rounded-xl overflow-hidden border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-full h-auto" {...props} alt={props.alt || ""} />
        </div>
    ),
    h2: ({ children, ...props }: any) => {
        const id = props.id || children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return <h2 id={id} className="text-3xl font-bold mt-12 mb-6 text-white group flex items-center gap-2" {...props}>
            <a href={`#${id}`} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary absolute -ml-6 text-2xl font-normal no-underline">#</a>
            {children}
        </h2>;
    },
    h3: ({ children, ...props }: any) => {
        const id = props.id || children?.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return <h3 id={id} className="text-2xl font-bold mt-8 mb-4 text-white uppercase tracking-tight" {...props}>{children}</h3>;
    },
    a: ({ href, children, ...props }: any) => {
        const isExternal = href?.startsWith('http');
        return (
            <a
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="text-primary hover:text-primary-light underline decoration-primary/30 underline-offset-4 transition-colors"
                {...props}
            >
                {children}
            </a>
        );
    },
    blockquote: (props: any) => (
        <blockquote className="border-l-4 border-primary pl-6 my-6 italic text-gray-300 bg-white/5 py-4 pr-4 rounded-r-xl" {...props} />
    ),
};
