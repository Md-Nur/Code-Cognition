import Services from "./components/Services";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <h1 className="text-[#FF5252] text-[40px] text-center uppercase font-semibold mt-16 p-5">Why Choose Us</h1>
    </main>
  )
}
