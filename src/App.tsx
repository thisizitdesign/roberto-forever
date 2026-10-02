import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MemorySection from "@/components/MemorySection";
import UpdatesSection from "@/components/UpdatesSection";
import GallerySection from "@/components/GallerySection";
import GalleryPhotos from "@/components/GalleryPhotos";
import GalleryVideos from "@/components/GalleryVideos";
import Footer from "@/components/Footer";
import ParallaxSection from "@/components/ParallaxSectionPages";
import parallaxImage1 from "@/images/assets/parallax-1.jpg";
import parallaxImage2 from "@/images/assets/parallax-2.jpg";

function Home() {
  return (
    <main id="top" className="min-h-screen bg-stone-950">
      <Navbar />
      <Hero />
      <div
        className="relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${parallaxImage1})`,
        }}
      >
        <div className="absolute inset-0 bg-black/20" />

        {/* Parallax image row */}
        <div className="relative h-[800px]" />

        {/* Content scrolling over the parallax image */}
        <div className="relative">
          <MemorySection />
          <UpdatesSection />
        </div>
      </div>
      <GallerySection />
      <ParallaxSection image={parallaxImage2} />
      <Footer />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<GalleryPhotos />} />
        <Route path="/gallery-videos" element={<GalleryVideos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
