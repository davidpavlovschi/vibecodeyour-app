export interface Lesson {
  slug: string;
  title: string;
  description: string;
  order: number;
}

export interface Module {
  slug: string;
  title: string;
  description: string;
  order: number;
  part: number;
  partTitle: string;
  lessons: Lesson[];
  free: boolean;
}

export interface Part {
  number: number;
  title: string;
  free: boolean;
  modules: Module[];
}

const parts: Part[] = [
  {
    number: 1,
    title: "The Business of Vibecoding",
    free: true,
    modules: [
      {
        slug: "app-factory-mindset",
        title: "The App Factory Mindset",
        description: "Why iOS, portfolio strategy, and what vibecoding really means",
        order: 1,
        part: 1,
        partTitle: "The Business of Vibecoding",
        free: true,
        lessons: [
          { slug: "why-ios", title: "Why iOS", description: "Revenue reality, ecosystem quality, focus advantage", order: 1 },
          { slug: "portfolio-strategy", title: "The Portfolio Strategy", description: "33 apps, one developer, suite thinking", order: 2 },
          { slug: "what-is-vibecoding", title: "What Vibecoding Actually Is", description: "AI as engineer, you as PM. CLAUDE.md as onboarding docs", order: 3 },
          { slug: "your-two-stacks", title: "Your Two Stacks", description: "Native SwiftUI + AuraKit vs Flutter + Firebase", order: 4 },
        ],
      },
      {
        slug: "idea-discovery",
        title: "Idea Discovery & Validation",
        description: "Keyword research, scoring, and finding profitable niches",
        order: 2,
        part: 1,
        partTitle: "The Business of Vibecoding",
        free: true,
        lessons: [
          { slug: "keyword-research", title: "Keyword Research", description: "Finding profitable niches with free tools", order: 1 },
          { slug: "scoring-engine", title: "The Weighted Scoring Engine", description: "Keyword 30%, Competition 25%, Trends 25%, Revenue 20%", order: 2 },
          { slug: "competition-analysis", title: "Competition Analysis", description: "Finding weak spots in the App Store", order: 3 },
          { slug: "suite-discovery", title: "The Suite Discovery Method", description: "How to find 5+ apps in one niche", order: 4 },
        ],
      },
      {
        slug: "toolkit",
        title: "The Vibecoder's Toolkit",
        description: "Mac setup, AI tools, CLAUDE.md, and PATTERNS.md",
        order: 3,
        part: 1,
        partTitle: "The Business of Vibecoding",
        free: true,
        lessons: [
          { slug: "mac-setup", title: "Mac Setup", description: "Xcode, Apple Developer Account, XcodeGen, Fastlane", order: 1 },
          { slug: "ai-tools", title: "AI Tools", description: "Claude Code CLI, Cursor, DeepSeek API", order: 2 },
          { slug: "first-claude-md", title: "Your First CLAUDE.md", description: "The most important file in any project", order: 3 },
          { slug: "patterns-md", title: "PATTERNS.md", description: "Your institutional knowledge base", order: 4 },
        ],
      },
    ],
  },
  {
    number: 2,
    title: "Building Your First App",
    free: false,
    modules: [
      {
        slug: "architecture-patterns",
        title: "Architecture Patterns for Vibecoding",
        description: "Project structure, XcodeGen, @Observable, persistence",
        order: 4,
        part: 2,
        partTitle: "Building Your First App",
        free: false,
        lessons: [
          { slug: "project-structure", title: "Project Structure", description: "Feature-first organization, one file per type", order: 1 },
          { slug: "xcodegen", title: "XcodeGen", description: "Never touch .xcodeproj again", order: 2 },
          { slug: "observable-revolution", title: "The @Observable Revolution", description: "MVVM with Swift 6 concurrency", order: 3 },
          { slug: "persistence", title: "Persistence", description: "SwiftData, offline-first, iCloud sync", order: 4 },
        ],
      },
      {
        slug: "build-with-ai",
        title: "Build with AI",
        description: "Scaffolding, prompting, the build-fix loop, design systems",
        order: 5,
        part: 2,
        partTitle: "Building Your First App",
        free: false,
        lessons: [
          { slug: "scaffolding", title: "Scaffolding", description: "Template manager, project generation", order: 1 },
          { slug: "prompting-for-features", title: "Prompting for Features", description: "How to describe what you want", order: 2 },
          { slug: "build-fix-loop", title: "The Build-Fix Loop", description: "Generate, build, parse errors, fix, repeat", order: 3 },
          { slug: "design-system", title: "Design System", description: "Making it look native with Theme, SF Symbols, haptics", order: 4 },
        ],
      },
      {
        slug: "monetization",
        title: "Monetization",
        description: "Subscriptions, StoreKit 2, paywall design, premium gating",
        order: 6,
        part: 2,
        partTitle: "Building Your First App",
        free: false,
        lessons: [
          { slug: "subscription-strategy", title: "Subscription Strategy", description: "Weekly + annual + lifetime, pricing psychology", order: 1 },
          { slug: "storekit-revenucat", title: "StoreKit 2 / RevenueCat", description: "Implementation patterns", order: 2 },
          { slug: "paywall-design", title: "Paywall Design", description: "The 6-section anatomy that converts", order: 3 },
          { slug: "premium-gating", title: "Premium Gating", description: "What's free vs paid, win-back flows", order: 4 },
        ],
      },
      {
        slug: "onboarding",
        title: "Onboarding",
        description: "Hook users in 3 seconds, convert in 30",
        order: 7,
        part: 2,
        partTitle: "Building Your First App",
        free: false,
        lessons: [
          { slug: "why-onboarding-matters", title: "Why Onboarding Matters", description: "3 seconds to hook, 30 seconds to convert", order: 1 },
          { slug: "building-the-flow", title: "Building the Flow", description: "Page-based vs coordinator patterns", order: 2 },
          { slug: "paywall-placement", title: "Hard vs Soft Paywall", description: "A/B testing strategies with Remote Config", order: 3 },
        ],
      },
    ],
  },
  {
    number: 3,
    title: "Scaling to a Suite",
    free: false,
    modules: [
      {
        slug: "shared-frameworks",
        title: "Shared Frameworks",
        description: "Swift Package Architecture, building shared libraries",
        order: 8,
        part: 3,
        partTitle: "Scaling to a Suite",
        free: false,
        lessons: [
          { slug: "swift-package-architecture", title: "Swift Package Architecture", description: "AuraKit's 13-library structure", order: 1 },
          { slug: "first-shared-library", title: "Building Your First Shared Library", description: "Extract, abstract, reuse", order: 2 },
          { slug: "domain-specific-kits", title: "Domain-Specific Kits", description: "AuraBeautyKit, CombatOS packages", order: 3 },
        ],
      },
      {
        slug: "one-codebase-multi-app",
        title: "One-Codebase Multi-App",
        description: "15 apps from one XcodeGen project",
        order: 9,
        part: 3,
        partTitle: "Scaling to a Suite",
        free: false,
        lessons: [
          { slug: "combatos-case-study", title: "CombatOS Case Study", description: "15 apps from one XcodeGen project", order: 1 },
          { slug: "content-differentiation", title: "Content Differentiation", description: "Same features, different skin", order: 2 },
          { slug: "launching-your-suite", title: "Launching Your Suite", description: "Sequence strategy, cross-promotion", order: 3 },
        ],
      },
      {
        slug: "multi-app-shared-framework",
        title: "Multi-App Shared Framework",
        description: "Beauty Suite architecture with shared AuraBeautyKit",
        order: 10,
        part: 3,
        partTitle: "Scaling to a Suite",
        free: false,
        lessons: [
          { slug: "beauty-suite-architecture", title: "Beauty Suite Architecture", description: "11 apps, shared AuraBeautyKit", order: 1 },
          { slug: "choosing-architecture", title: "Choosing Your Architecture", description: "One codebase vs shared framework decision tree", order: 2 },
        ],
      },
    ],
  },
  {
    number: 4,
    title: "Automation & Deployment",
    free: false,
    modules: [
      {
        slug: "fastlane",
        title: "Fastlane",
        description: "Multi-app setup, beta & release lanes, batch operations",
        order: 11,
        part: 4,
        partTitle: "Automation & Deployment",
        free: false,
        lessons: [
          { slug: "multi-app-setup", title: "Multi-App Setup", description: "app_configs.json, ASC API key", order: 1 },
          { slug: "beta-release-lanes", title: "Beta & Release Lanes", description: "TestFlight, App Store submission", order: 2 },
          { slug: "batch-operations", title: "Batch Operations", description: "15 apps deployed in one command", order: 3 },
        ],
      },
      {
        slug: "app-factory-pipeline",
        title: "The App Factory Pipeline",
        description: "19-stage pipeline from discovery to posted",
        order: 12,
        part: 4,
        partTitle: "Automation & Deployment",
        free: false,
        lessons: [
          { slug: "pipeline-stages", title: "Pipeline Stages", description: "Discovered through posted (19 stages)", order: 1 },
          { slug: "automated-provisioning", title: "Automated Provisioning", description: "Bundle IDs, IAPs, RevenueCat mirroring", order: 2 },
          { slug: "screenshot-pipeline", title: "Screenshot Pipeline", description: "Capture, compose, translate, upload", order: 3 },
          { slug: "localization-at-scale", title: "Localization at Scale", description: "35 locales from one English source", order: 4 },
        ],
      },
      {
        slug: "aso-growth",
        title: "ASO & Growth",
        description: "Keyword optimization, screenshots, analytics",
        order: 13,
        part: 4,
        partTitle: "Automation & Deployment",
        free: false,
        lessons: [
          { slug: "keyword-optimization", title: "Keyword Optimization", description: "Title, subtitle, keyword field", order: 1 },
          { slug: "screenshot-optimization", title: "Screenshot Optimization", description: "First 3 screenshots matter most", order: 2 },
          { slug: "analytics-keep-kill", title: "Analytics & Keep/Kill", description: "Firebase Analytics, Remote Config, 90-day kill decision", order: 3 },
        ],
      },
    ],
  },
  {
    number: 5,
    title: "Advanced Vibecoding",
    free: false,
    modules: [
      {
        slug: "ai-app-development",
        title: "AI App Development",
        description: "On-device AI, building AI chat apps, differentiation",
        order: 14,
        part: 5,
        partTitle: "Advanced Vibecoding",
        free: false,
        lessons: [
          { slug: "on-device-ai", title: "On-Device AI", description: "MLX, AuraLLMEngine, AuraDiffusionEngine", order: 1 },
          { slug: "building-ai-chat-app", title: "Building an AI Chat App", description: "Same engine, different personality", order: 2 },
          { slug: "differentiating-ai-apps", title: "Differentiating AI Apps", description: "8 apps from one kit", order: 3 },
        ],
      },
      {
        slug: "flutter-second-stack",
        title: "Flutter as Second Stack",
        description: "When Flutter makes sense, golden template, case studies",
        order: 15,
        part: 5,
        partTitle: "Advanced Vibecoding",
        free: false,
        lessons: [
          { slug: "when-flutter-makes-sense", title: "When Flutter Makes Sense", description: "Complex state, real-time, Firebase", order: 1 },
          { slug: "flutter-golden-template", title: "Riverpod 3.x + Freezed + GoRouter", description: "The Flutter golden template", order: 2 },
          { slug: "flutter-case-studies", title: "Case Studies", description: "Glean, Roamie, Draw Heroes", order: 3 },
        ],
      },
      {
        slug: "building-app-factory",
        title: "Building Your Own App Factory",
        description: "Daemon architecture, CLI automation, end-to-end pipeline",
        order: 16,
        part: 5,
        partTitle: "Advanced Vibecoding",
        free: false,
        lessons: [
          { slug: "daemon-architecture", title: "Daemon Architecture", description: "Always-on pipeline poller", order: 1 },
          { slug: "validation-build-commands", title: "Validation & Build Commands", description: "CLI automation", order: 2 },
          { slug: "complete-pipeline", title: "Your Complete Pipeline", description: "End-to-end automation", order: 3 },
        ],
      },
    ],
  },
];

export function getAllParts(): Part[] {
  return parts;
}

export function getAllModules(): Module[] {
  return parts.flatMap((p) => p.modules);
}

export function getModule(slug: string): Module | undefined {
  return getAllModules().find((m) => m.slug === slug);
}

export function getLesson(moduleSlug: string, lessonSlug: string): { module: Module; lesson: Lesson } | undefined {
  const mod = getModule(moduleSlug);
  if (!mod) return undefined;
  const lesson = mod.lessons.find((l) => l.slug === lessonSlug);
  if (!lesson) return undefined;
  return { module: mod, lesson };
}

export function getAdjacentLessons(moduleSlug: string, lessonSlug: string) {
  const allModules = getAllModules();
  const allLessons: { moduleSlug: string; lessonSlug: string; title: string; moduleTitle: string }[] = [];

  for (const mod of allModules) {
    for (const lesson of mod.lessons) {
      allLessons.push({
        moduleSlug: mod.slug,
        lessonSlug: lesson.slug,
        title: lesson.title,
        moduleTitle: mod.title,
      });
    }
  }

  const currentIndex = allLessons.findIndex(
    (l) => l.moduleSlug === moduleSlug && l.lessonSlug === lessonSlug
  );

  return {
    prev: currentIndex > 0 ? allLessons[currentIndex - 1] : null,
    next: currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null,
  };
}

export function getTotalLessonCount(): number {
  return getAllModules().reduce((sum, m) => sum + m.lessons.length, 0);
}
