import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "./head";

export default function Layout({ children }) {
  return (
    <>
      <Head />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
