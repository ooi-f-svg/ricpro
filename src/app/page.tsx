import { Header } from "@/components/Header";
import { MainVisual } from "@/components/MainVisual";
import { CntContact } from "@/components/CntContact";
import { Reasons } from "@/components/Reasons";
import { Message } from "@/components/Message";
import { Voices } from "@/components/Voices";
import { Flow } from "@/components/Flow";
import { Faq } from "@/components/Faq";
import { Recruit } from "@/components/Recruit";
import { Company } from "@/components/Company";
import { Footer } from "@/components/Footer";
import { FloatFooter } from "@/components/FloatFooter";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ paddingBottom: "100px" }}>
        <MainVisual />
        <CntContact />
        <Reasons />
        <Message />
        <Voices />
        <Flow />
        <Faq />
        <Recruit />
        <Company />
        <Footer />
      </main>
      <FloatFooter />
    </>
  );
}
