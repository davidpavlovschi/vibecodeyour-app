import { MDXRemote } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import Callout from "./Callout";

const components = {
  Callout,
};

export default function LessonContent({ source }: { source: string }) {
  return (
    <div className="lesson-content">
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            rehypePlugins: [
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
  );
}
