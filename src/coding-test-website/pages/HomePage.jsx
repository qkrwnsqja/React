import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import NewsSection from '../components/NewsSection';
import GallerySection from '../components/GallerySection';
import MetricsSection from '../components/MetricsSection';
import CTASection from '../components/CTASection';
import SocialFollow from '../components/SocialFollow';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="homepage">
      <Header />
      <Navbar />
      <NewsSection />
      <GallerySection />
      <MetricsSection />
      <CTASection />
      <SocialFollow />
      <ContactForm />
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default HomePage;