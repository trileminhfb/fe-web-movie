import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <Outlet /> {/* Đây là nơi các page sẽ được render */}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
