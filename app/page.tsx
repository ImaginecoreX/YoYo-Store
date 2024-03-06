import ColorSeparator from "@/components/ColorSeparator";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import PersonalizedProducts from "@/components/PersonalizedProducts";


export default function Home() {
  return (
    <main className="flex min-h-screen overflow-x-hidden flex-col items-center justify-between">
      <Navbar/>

      <Hero/>
      <ColorSeparator text="😍Personalized To You!!🔥"/>

      <PersonalizedProducts/>

    </main>
  );
}
