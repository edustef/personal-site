import React, { Component } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import TextWriter from "../components/textWriter";

class IndexPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <SEO
          keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
          title="Home"
        />
        <section className="text-left flex flex-col">
          <div className="flex flex-col md:flex-row items-start justify-around w-full">
            <div className="w-8/12">
              <h2 className="text-lg md:text-2xl font-semibold font-mono">
                {" "}
                &lt;FrontEndCreator /&gt;
              </h2>
              <h1 className="text-2xl md:text-6xl font-bold inline-block max-w-lg text-writer">
                Developing your{" "}
                <TextWriter
                  period={1000}
                  words={["ideas", "aspirations", "goals", "expectations"]}
                />
                !
              </h1>
              <div>
                <Link
                  className="inline-block md:text-xl no-underline text-left mt-4 mr-4 p-2 slideUpBtn self-start"
                  data-content="Projects"
                  to="/projects"
                >
                  <span>Projects </span>
                </Link>
                <Link
                  className="inline-block md:text-xl no-underline text-left mt-4 p-2 snapLeftBtn self-start bg-teal-500"
                  data-content="Contact me"
                  to="/contact"
                >
                  <span>Contact me</span>
                </Link>
              </div>
            </div>
            <div className="latest-posts mt-12 md:w-1/3">
              <h2 className="text-4xl font-bold">Latest blog posts</h2>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default IndexPage;
