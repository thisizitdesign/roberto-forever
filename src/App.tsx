import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MemorySection from "@/components/MemorySection";
import UpdatesSection from "@/components/UpdatesSection";
import GallerySection from "@/components/GallerySection";
import GalleryPhotos from "@/components/GalleryPhotos";
import GalleryVideos from "@/components/GalleryVideos";
import Journal from "@/components/Journal";
import JournalEntry from "@/components/JournalEntry";
import JournalSection from "@/components/JournalSection";
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

      <div
        className="relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url(${parallaxImage2})`,
        }}
      >
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative">
          <JournalSection />
        </div>

        {/* Blank parallax image row */}
        <div className="relative h-[400px]" />
      </div>

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
        <Route path="/journal" element={<Journal />} />
        <Route path="/journal/:slug" element={<JournalEntry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
