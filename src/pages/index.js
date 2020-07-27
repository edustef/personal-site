import React, { Component } from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import TextWriter from "../utils/TextWriter";

class IndexPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.hideLoader();

    let textWriter;
    let element = document.querySelector(".txt-rotate");
    let toRotate = element.getAttribute("data-rotate");
    let period = element.getAttribute("data-period");

    if (toRotate) {
      textWriter = new TextWriter(element, JSON.parse(toRotate), period);
    }

    return function cleanup() {
      clearTimeout(textWriter.startTimeout);
    };
  }

  hideLoader = () => {
    document.querySelector(".loader").classList.add("loader-hide");
  };

  render() {
    return (
      <Layout>
        <SEO
          keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
          title="Home"
        />
        <section className="text-left flex flex-col">
          <div className="flex items-center justify-around w-full">
            <div>
              <h2 className="text-2xl font-semibold font-mono">
                {" "}
                &lt;FRONT-END CREATOR /&gt;
              </h2>
              <h1 className="text-6xl font-bold inline-block max-w-lg text-writer">
                Developing your{" "}
                <span
                  className="inline-block px-2 italic txt-rotate"
                  data-period="1000"
                  data-rotate='[ "ideas", "aspirations", "goals", "expectations" ]'
                ></span>
                !
              </h1>
              <div>
                <Link
                  className="inline-block text-xl no-underline text-left text-center mx-2 mt-4 p-5 md:p-2 slideUpBtn self-start"
                  data-content="Projects"
                  to="/projects"
                >
                  <span>Projects </span>
                </Link>
                <Link
                  className="inline-block text-xl no-underline text-left text-center mx-2 mt-4 p-5 md:p-2 snapLeftBtn self-start bg-teal-500"
                  data-content="Contact me"
                  to="/contact"
                >
                  <span>Contact me</span>
                </Link>
              </div>
            </div>
            <div className="latest-posts w-1/3">
              <h2>Latest blog posts</h2>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

export default IndexPage;
