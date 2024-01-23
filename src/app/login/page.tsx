"use client";
import { Button, Stack } from "@mantine/core";
import { IconBrandDiscordFilled } from "@tabler/icons-react";
import { signIn } from "next-auth/react";

export default function Login() {

    return (
        <Stack>
            Would you like to login with Discord ?

            <Button
                color="blue"
                leftSection={<IconBrandDiscordFilled />}
                onClick={() => signIn('discord')}
                variant="filled"
            >
                Login with Discord
            </Button>

        </Stack>
    )
}