import styles from "@/styles/Home.module.css";
import Head from "next/head";

import Table from "./components/Table";
import SearchFields from "./components/Table/SearchFields";

const Home = () => {
  return (
    <>
      <Head>
        <title>Suhaib Ahmad - Estarta Assignment</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div style={{ width: "100%" }}>
          <SearchFields />

          <Table />
        </div>
      </main>
    </>
  );
};

export default Home;
