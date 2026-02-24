import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import CategoryGrid from './components/CategoryGrid'
import SectionProducts from './components/SectionProducts'
import MiniBanners from './components/MiniBanners'
import Footer from './components/Footer'
import CatalogPage from './pages/CatalogPage'
import ProductDetailPage from './pages/ProductDetailPage'
import PartsGroupPage from './pages/PartsGroupPage'

// Home Page
function HomePage() {
  return (
    <main className="flex-grow">
      <Hero />
      <CategoryGrid />
      <SectionProducts title="Motor Oils" showAllText="All Motor Oils" />
      <MiniBanners />
      <SectionProducts title="Recommended" />
      <SectionProducts title="Best Sellers" />
    </main>
  );
}

function App() {
  useEffect(() => {
    document.title = "ONER.RU - Original Auto Parts & Oils";
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#F8F9FA] flex flex-col font-sans selection:bg-[#6C5DD3] selection:text-white">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/parts" element={<PartsGroupPage />} />
          <Route path="/product" element={<ProductDetailPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
