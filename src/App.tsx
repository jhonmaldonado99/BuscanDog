import { HashRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/pages/HomePage";
import { CatalogPage } from "./components/pages/CatalogPage";
import { PetProfilePage } from "./components/pages/PetProfilePage";
import { LoginPage } from "./components/pages/LoginPage";
import { UserProfilePage } from "./components/pages/UserProfilePage";
import { AdoptionFormPage } from "./components/pages/AdoptionFormPage";
import { SponsorPage } from "./components/pages/SponsorPage";
import { DonatePage } from "./components/pages/DonatePage";
import { SuccessStoriesPage } from "./components/pages/SuccessStoriesPage";
import { AboutPage } from "./components/pages/AboutPage";
import { AdminDashboard } from "./components/pages/admin/AdminDashboard";
import { PetsManagement } from "./components/pages/admin/PetsManagement";
import { AdoptionRequests } from "./components/pages/admin/AdoptionRequests";
import { DonationsManagement } from "./components/pages/admin/DonationsManagement";
import Wireflow from "./components/Wireflow";
import "./styles/globals.css";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Public Routes with Navbar/Footer */}
        <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
        <Route path="/catalogo" element={<MainLayout><CatalogPage /></MainLayout>} />
        <Route path="/mascotas/:id" element={<MainLayout><PetProfilePage /></MainLayout>} />
        <Route path="/apadrinar" element={<MainLayout><SponsorPage /></MainLayout>} />
        <Route path="/donar" element={<MainLayout><DonatePage /></MainLayout>} />
        <Route path="/historias" element={<MainLayout><SuccessStoriesPage /></MainLayout>} />
        <Route path="/nosotros" element={<MainLayout><AboutPage /></MainLayout>} />
        <Route path="/solicitud-adopcion" element={<MainLayout><AdoptionFormPage /></MainLayout>} />
        <Route path="/perfil" element={<MainLayout><UserProfilePage /></MainLayout>} />
        
        {/* Wireflow - Design documentation */}
        <Route path="/wireflow" element={<Wireflow />} />
        
        {/* Auth Routes without Navbar/Footer */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Admin Routes without Navbar/Footer */}
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<PetsManagement />} />
          <Route path="solicitudes" element={<AdoptionRequests />} />
          <Route path="donaciones" element={<DonationsManagement />} />
        </Route>
        
        {/* Catch all route - redirect to home */}
        <Route path="*" element={<MainLayout><HomePage /></MainLayout>} />
      </Routes>
    </HashRouter>
  );
}