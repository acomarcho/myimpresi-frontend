import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

type MarkdownProps = {
  children: string;
};

const CustomMarkdown = ({ children }: MarkdownProps) => {
  return (
    <Markdown
      rehypePlugins={[rehypeRaw]}
      components={{
        p(props) {
          const { children, ...rest } = props;

          return (
            <p className="font-inter text-neutral-60 mt-[1rem]" {...rest}>
              {children}
            </p>
          );
        },
        a(props) {
          const { children, ...rest } = props;

          return (
            <a className="font-inter text-primary-default underline" {...rest}>
              {children}
            </a>
          );
        },
      }}
    >
      {children}
    </Markdown>
  );
};

export default CustomMarkdown;
