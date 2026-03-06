export interface TOCItem {
  level: number;
  text: string;
  slug: string;
}

export function extractHeadings(content: string): TOCItem[] {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: TOCItem[] = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[2].replace(/[`*_~]/g, "");
    headings.push({
      level: match[1].length,
      text,
      slug: text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/(^-|-$)/g, ""),
    });
  }
  return headings;
}
