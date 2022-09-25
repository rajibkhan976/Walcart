import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "./components/Layout";
import HomeScreen from "./components/HomeScreen";

const Home: NextPage = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#F5F5F5" }}>
      <Layout>
        <HomeScreen />
      </Layout>
    </div>
  );
};

export default Home;
