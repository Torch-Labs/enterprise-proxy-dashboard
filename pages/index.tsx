import getConfig from "next/config";

import Layout from "@/components/Layout";

const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const Home = () => {
  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="prose prose-blue mx-auto">
            <h1>{name}</h1>
            <p>Enterprise Proxy Dashboard</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
