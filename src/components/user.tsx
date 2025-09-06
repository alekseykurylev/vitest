import { useEffect, useState } from "react";

type User = { id: number; name: string };

export function User({ userId }: { userId: number }) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        async function loadUser() {
            const res = await fetch(`/api/users/${userId}`);
            const data = await res.json();
            setUser(data);
        }
        loadUser();
    }, [userId]);

    if (!user) {
        return <p>Loading...</p>;
    }

    return <h1>User: {user.name}</h1>;
}