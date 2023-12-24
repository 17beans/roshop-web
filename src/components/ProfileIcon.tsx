"use client";

import { signIn, signOut, useSession} from "next-auth/react";

export default function ProfileIcon({platformName}: {platformName: string}) {
    const {data: session, status} = useSession();

    if (status === "authenticated") {
        return (
            <div>
                <button onClick={() => signOut()}>Sign Out</button>
            </div>
        )
    }
    
    return <button onClick={() => signIn(platformName)}>Sign In</button>
}