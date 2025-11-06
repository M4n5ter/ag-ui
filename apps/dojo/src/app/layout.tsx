import { Suspense } from "react";
import type { Metadata } from "next";
import "./globals.css";
import "@copilotkit/react-ui/styles.css";
import { ThemeWrapper } from "@/components/theme-wrapper";
import { MainLayout } from "@/components/layout/main-layout";
import { URLParamsProvider } from "@/contexts/url-params-context";

export const metadata: Metadata = {
  title: "Demo Viewer by CopilotKit",
  description: "Demo Viewer by CopilotKit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased font-sans">
        <Suspense>
          <URLParamsProvider>
            <ThemeWrapper>
              <MainLayout>{children}</MainLayout>
            </ThemeWrapper>
          </URLParamsProvider>
        </Suspense>
      </body>
    </html>
  );
}
