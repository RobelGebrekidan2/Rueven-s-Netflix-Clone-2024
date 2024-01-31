import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import Rowlist from "../Components/Rowlist/Rowlist"

export default function Home() {
  return (
    <>
      <Header />
      < Banner />
      < Rowlist/>
      <Footer />
    </>
  );
}
