import '@mantine/core/styles.css';
import { SessionWrapper } from "~/app/components/SessionWrapper";
import { ColorSchemeScript, Container, MantineProvider } from '@mantine/core';
import type { Metadata } from "next";
import { LayoutShell } from '~/app/components/LayoutShell';



export const metadata: Metadata = {
  title: "Explorer's Atlas",
  description: "A Westmarches planning tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
      <html lang="en">
        <head>
          <ColorSchemeScript />
        </head>
        <body>
          <MantineProvider defaultColorScheme='auto'>
            <LayoutShell>
              {children}
            </LayoutShell>
          </MantineProvider>
        </body>
      </html>
    </SessionWrapper>
  );
}
