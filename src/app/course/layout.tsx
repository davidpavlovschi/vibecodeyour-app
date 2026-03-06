import Sidebar from "@/components/Sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Vibe Code Your App",
    default: "Course | Vibe Code Your App",
  },
};

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 lg:ml-[280px]">
        <div className="mx-auto max-w-3xl px-6 py-12 lg:px-12 lg:py-16">
          {children}
        </div>
      </main>
    </div>
  );
}
