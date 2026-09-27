import React, { useState, useEffect } from 'react';
import businessConfig from './config/business';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState(businessConfig.defaultLanguage || 'ar');

  const activeContent =
    businessConfig.content[lang] || businessConfig.content.ar;

  useEffect(() => {
    document.documentElement.lang = activeContent.langCode;
    document.documentElement.dir = activeContent.dir;
  }, [activeContent]);

  const handleToggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  return (
    <div dir={activeContent.dir} lang={activeContent.langCode}>
      <Navbar
        content={activeContent}
        contact={businessConfig.contact}
        onToggleLanguage={handleToggleLanguage}
      />

      <main>
        <Hero
          content={activeContent}
          contact={businessConfig.contact}
          images={businessConfig.images}
        />

        <Services
          content={activeContent}
          contact={businessConfig.contact}
          images={businessConfig.images}
        />

        <About
          content={activeContent}
          contact={businessConfig.contact}
          images={businessConfig.images}
        />

        <WhyChooseUs content={activeContent} />

        <Testimonials
          testimonials={businessConfig.testimonials}
          content={activeContent}
        />

        <Faq content={activeContent} />

        <Contact
          content={activeContent}
          contact={businessConfig.contact}
        />
      </main>

      <Footer
        content={activeContent}
        contact={businessConfig.contact}
        onToggleLanguage={handleToggleLanguage}
      />
    </div>
  );
}
