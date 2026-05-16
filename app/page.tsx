"use client";

import { useState } from "react";

import ScrollProgress from "@/components/ScrollProgress/ScrollProgress";
import Header from "@/components/Header/Header";
import Sugaring from "@/components/Sugaring/Sugaring";
import MobilePrise from "@/components/MobilePrise/MobilePrise";

import Services from "@/components/Services/Services";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Popup from "@/components/Popup/Popup";
import FloatingWhatsApp from "@/components/FloatingWhatsApp/FloatingWhatsApp";
import Testimonials from "@/components/Testimonials/Testimonials";
import BackToTop from "@/components/BackToTop/BackToTop";
import FloatingBookButton from "@/components/FloatingBookButton/FloatingBookButton";
import BookingModal from "@/components/BookingModal/BookingModal";

export default function Home() {
  const [bookingOpen, setBookingOpen] =
    useState(false);

  const [
    firstVisitBooking,
    setFirstVisitBooking,
  ] = useState(false);

  return (
    <>
      <ScrollProgress />

      <Header />

      <Hero
        onOpenBooking={() => {
          setFirstVisitBooking(false);

          setBookingOpen(true);
        }}
      />

      <Popup
        onBookNow={() => {
          setFirstVisitBooking(true);

          setBookingOpen(true);
        }}
      />

      <About />

      <Sugaring />

      <Services />

      <MobilePrise />

      <Testimonials />

      <Contact />

      <BookingModal
        open={bookingOpen}
        onClose={() => {
          setBookingOpen(false);

          setFirstVisitBooking(false);
        }}
        firstVisitDefault={
          firstVisitBooking
        }
      />

      <Footer />

      <FloatingBookButton
  onOpenBooking={() => {
    setFirstVisitBooking(false);

    setBookingOpen(true);
  }}
/>

      <FloatingWhatsApp />

      <BackToTop />
    </>
  );
}