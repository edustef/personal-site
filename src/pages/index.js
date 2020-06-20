import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center">
        <img
          alt="Cat and human sitting on a couch"
          className="block mx-auto w-1/2 scale-in-center"
          src={catAndHumanIllustration}
        />

        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3 scale-in-center">
          Hey there! Welcome to my personal website.
        </h2>
      </section>
    </Layout>
  );
}

export default IndexPage;
