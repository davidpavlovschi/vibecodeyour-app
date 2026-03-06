import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import Callout from "./Callout";
import CodeBlockEnhancer from "./CodeBlockEnhancer";

const components = {
  Callout,
};

export default function LessonContent({ source }: { source: string }) {
  return (
    <CodeBlockEnhancer>
      <div className="lesson-content">
        <MDXRemote
          source={source}
          components={components}
          options={{
            mdxOptions: {
              rehypePlugins: [
                rehypeSlug,
                [
                  rehypePrettyCode,
                  {
                    theme: "github-dark-default",
                    keepBackground: true,
                  },
                ],
              ],
            },
          }}
        />
      </div>
    </CodeBlockEnhancer>
  );
}
