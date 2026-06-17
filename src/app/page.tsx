import SmoothScroll from "@/components/SmoothScroll";
import InvitationGate from "@/components/InvitationGate";
import OrnateFrame from "@/components/OrnateFrame";
import Cursor from "@/components/Cursor";
import Petals from "@/components/Petals";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Events from "@/components/Events";
import Gallery from "@/components/Gallery";
import Countdown from "@/components/Countdown";
import Venue from "@/components/Venue";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <InvitationGate />
      <OrnateFrame />
      <Cursor />
      <Petals />
      <Nav />
      <SmoothScroll>
        <main id="top" className="relative z-20">
          <Hero />
          <Story />
          <Events />
          <Gallery />
          <Countdown />
          <Venue />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
