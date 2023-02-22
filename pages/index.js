import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function Home() {
  const { user } = useUser();
  // const picture = "https://picsum.photos/200/300";

  console.log("User: ", user);
  return (
    <div>
      <h1>this is the homepage</h1>
      <div>
        {!!user ? (
          <>
            <div>
              <Image
                src={user.picture}
                alt={user.name}
                height={100}
                width={100}
              />
              <div>{user.picture}</div>
              <div>{user.email}</div>
            </div>
            <Link href="/api/auth/logout">Logout</Link>
          </>
        ) : (
          <Link href="/api/auth/login">Login</Link>
        )}
      </div>
    </div>
  );
}
