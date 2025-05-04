import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Pluggable } from "unified";

interface Props {
  markdown: string;
}

const MarkdownRenderer = ({ markdown }: Props) => {
  return (
    <div
      className="prose prose-pre:bg-transparent prose-pre:px-0 prose-pre:py-1 prose-lg prose-invert max-w-none p-6 rounded-2xl 
                    prose-headings:text-primary prose-p:text-muted-foreground 
                    prose-a:text-primary prose-strong:text-foreground 
                    prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4
                    prose-ul:list-disc prose-ol:list-decimal prose-li:marker:text-primary
                    prose-code:rounded-xl prose-code:px-1 prose-code:py-0.5 prose-code:text-sm prose-code:bg-muted
                    prose-img:rounded-xl prose-img:shadow-lg prose-table:border prose-th:bg-muted prose-td:border-muted/30"
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw as Pluggable]}
        components={{
          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter
                style={oneDark}
                language={match[1]}
                PreTag="div"
                className="rounded-xl my-4 bg-muted text-sm px-4 py-3 overflow-x-auto"
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code className="px-1 py-0.5 text-sm text-foreground" {...props}>
                {children}
              </code>
            );
          },
          iframe({ node, ...props }) {
            return (
              <div className="my-6 aspect-video">
                <iframe
                  {...props}
                  className="w-full h-full rounded-xl shadow-lg"
                  allowFullScreen
                />
              </div>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
