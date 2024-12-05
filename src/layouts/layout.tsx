 import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Landing from "@/components/Landing";

type Props = {
  children: React.ReactNode;
  showHero?: boolean;
  showLanding?:boolean;

};

const Layout = ({ children,showLanding = false, showHero = false }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showHero && <Hero />}
      <div className="container mx-auto flex-1 py-10">{children}</div>
      {showLanding && <Landing/>}
      <Footer />
    </div>
  );
};

export default Layout;
