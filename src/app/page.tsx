import { stackServerApp } from "@/stack/server";


export default async function Home() {
  const user = await stackServerApp.getUser()
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col  items-center sm:items-start">
        Hello Worlds
        <div>{user ? `Hello, ${user.displayName ?? "anon"}` : 'You are not logged in'}</div>
      </main>
    </div>
  );
}
