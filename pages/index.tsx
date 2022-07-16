import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const Home = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="prose prose-blue mx-auto">
          <h1>{name}</h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
