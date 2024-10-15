import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
// import UserCard from "@/components/UserCard"
import Navbar from '@/components/Navbar';
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Cta } from "@/components/Cta";
import { Service } from "@/components/Service";
import { Donate } from "@/components/Donate";
import { Testimonials } from "@/components/Testimonials";
import { Partners } from "@/components/Partners";
import { Events } from "@/components/Events";
import { Insta } from "@/components/Insta";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(options)

  return (
    <div className="relative">
      <div className="px-6 py-2 flex justify-center sticky top-0 bg-white z-50 gap-4">
        <Navbar admin={!!session} />
        <Button variant="lime" asChild>
          <Link href="/trash">Reporta tu basura</Link>
        </Button>
      </div>
      {/* {session ? (
        <UserCard user={session?.user} pagetype={"Home"} />
      ) : (
        <h1 className="text-5xl">You Shall Not Pass!</h1>
      )} */}
      {/* <article className="p-6">
        <h1>Huella Cero</h1>
      </article> */}
      <Hero />
      <About />
      <Cta />
      <Service />
      <Donate />
      <Testimonials />
      <Partners />
      <Events />
      <Insta />
      <Footer />
    </div>
  );
}

// #91be55