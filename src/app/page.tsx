import { Button } from "@/components/ui/button";
// import Image from "next/image";
import CircularGallery from "./../components/CircularGallery";

export default function Home() {
  const items = [
    { image: "/Alex.jpg", text: "Alexandroupoli" },
    { image: "/Athens.jpg", text: "Athens" },
    { image: "/Thess.jpg", text: "Thessaloniki" },
    { image: "/Giannena.jpg", text: "Ioannena" },
    { image: "/Hrakleio.jpg", text: "Hrakleio" },
    { image: "/Volos.jpg", text: "Volos" },
  ];
  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col  items-center sm:items-start">
        Hello Worlds
        <div>{user ? `Hello, ${user.displayName ?? "anon"}` : 'You are not logged in'}</div>
      </main>
    </div>
  );
}
