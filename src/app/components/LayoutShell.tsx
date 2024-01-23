"use client";
import { ActionIcon, AppShell, Burger, Group, NavLink } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconHome2, IconLogout } from "@tabler/icons-react";
import { signOut, useSession } from "next-auth/react";
import { PropsWithChildren } from "react"

export const LayoutShell = ({ children }: PropsWithChildren) => {

    const [opened, { toggle }] = useDisclosure();
    const { data: session } = useSession();

    const hasActiveSession = session && session.user;

    const navbarSettings = hasActiveSession ? {
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened }
    } : undefined

    return (
        <AppShell
            header={{ height: 35 }}
            navbar={navbarSettings}
            padding="md"
        >
            <AppShell.Header>
                <Group>
                    {
                        hasActiveSession && (
                            <Burger
                                opened={opened}
                                onClick={toggle}
                                aria-label="Toggle sidebar"
                                size="sm"
                                color="gray"
                            />
                        )
                    }

                    <span>Logo</span>

                    {
                        hasActiveSession && (
                            <ActionIcon
                                aria-label="Logout"
                                onClick={() => signOut()}
                                variant="filled"
                            >
                                <IconLogout />
                            </ActionIcon>
                        )
                    }
                </Group>

            </AppShell.Header>

            {
                hasActiveSession && (
                    <AppShell.Navbar>
                        <NavLink

                            href=""
                            label="With icon"
                            leftSection={<IconHome2 size="1rem" stroke={1.5} />}
                        />
                    </AppShell.Navbar>
                )
            }

            <AppShell.Main>
                {children}
            </AppShell.Main>

        </AppShell>
    );
}