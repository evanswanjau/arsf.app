import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PartnerModal from "./PartnerModal";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isPartnerOpen, setIsPartnerOpen] = React.useState(false);

  React.useEffect(() => {
    window.openPartnerModal = () => setIsPartnerOpen(true);
    return () => {
      try {
        delete window.openPartnerModal;
      } catch {
        window.openPartnerModal = undefined;
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header onOpenPartner={() => setIsPartnerOpen(true)} />
      <main>{children}</main>
      <Footer onOpenPartner={() => setIsPartnerOpen(true)} />
      <PartnerModal
        open={isPartnerOpen}
        onClose={() => setIsPartnerOpen(false)}
      />
    </div>
  );
};

export default Layout;
