import type { NextPage } from "next";
import Layout from "./components/Layout";

const About: NextPage = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#F5F5F5" }}>
      <Layout>
        <div className="d-flex vh-100 justify-content-center align-items-center">
          <h1>404 Not found</h1>
        </div>
      </Layout>
    </div>
  );
};

export default About;
