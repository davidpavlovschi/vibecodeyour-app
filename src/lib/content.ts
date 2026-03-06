import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content", "modules");

function getModuleDir(moduleSlug: string): string | undefined {
  if (!fs.existsSync(CONTENT_DIR)) return undefined;
  const dirs = fs.readdirSync(CONTENT_DIR);
  return dirs.find((d) => d.replace(/^\d+-/, "") === moduleSlug);
}

function getLessonFile(moduleDir: string, lessonSlug: string): string | undefined {
  const fullDir = path.join(CONTENT_DIR, moduleDir);
  if (!fs.existsSync(fullDir)) return undefined;
  const files = fs.readdirSync(fullDir);
  return files.find((f) => f.replace(/^\d+-/, "").replace(/\.mdx$/, "") === lessonSlug);
}

export interface LessonContent {
  content: string;
  frontmatter: {
    title: string;
    description: string;
    [key: string]: unknown;
  };
}

export function getLessonContent(moduleSlug: string, lessonSlug: string): LessonContent | null {
  const moduleDir = getModuleDir(moduleSlug);
  if (!moduleDir) return null;

  const lessonFile = getLessonFile(moduleDir, lessonSlug);
  if (!lessonFile) return null;

  const filePath = path.join(CONTENT_DIR, moduleDir, lessonFile);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(raw);

  return {
    content,
    frontmatter: {
      title: (data.title as string) || lessonSlug,
      description: (data.description as string) || "",
      ...data,
    },
  };
}

export function hasLessonContent(moduleSlug: string, lessonSlug: string): boolean {
  const moduleDir = getModuleDir(moduleSlug);
  if (!moduleDir) return false;
  const lessonFile = getLessonFile(moduleDir, lessonSlug);
  return !!lessonFile;
}
