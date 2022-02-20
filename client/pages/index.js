import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./Section/Header";
import Presentation from "./Section/Presentations";
import Menus from "./Section/Menus";
import Categories from "./Section/Categories";
import Announcement from "./Section/Announcement";
import Services from "./Section/Services";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fast food e-commerce</title>
        <meta name="description" content="Mangez fast food en ligne" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="container">
          <Presentation />
          <Menus />
          <Categories />
        </div>
        <Announcement />
        <div className="container">
          <Services />
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
}
