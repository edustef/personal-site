import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ProjectsPage() {
  const {
    allMarkdownRemark: { nodes: content },
  } = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        nodes {
          frontmatter {
            title
            date
            category
            description
            link
            imageAlt
            image {
              childImageSharp {
                fixed(width: 300) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  `);

  console.log(content);

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Projects"
      />
      <section className="body-font overflow-hidden">
        <h1 className="text-5xl font-bold inline-block ">Projects</h1>
        <div className="container py-24">
          <div className="-my-8">
            {content.map((project, index) => {
              return (
                <div
                  className={`py-8 flex ${
                    index === 0 ? "" : "border-t-2"
                  } border-gray-800 flex-wrap md:flex-no-wrap`}
                  key={index}
                >
                  <div className="flex">
                    <div>
                      <a
                        href={project.frontmatter.link}
                        target="__blank"
                        rel="noopener noreferrer"
                      >
                        <Img
                          fixed={
                            project.frontmatter.image.childImageSharp.fixed
                          }
                          alt={project.frontmatter.imageAlt}
                        />
                      </a>
                    </div>
                    <div className="md:flex-grow ml-8">
                      <a
                        href={project.frontmatter.link}
                        target="__blank"
                        rel="noopener noreferrer"
                      >
                        <h2 className="text-2xl font-medium title-font mb-2">
                          {project.frontmatter.title}
                        </h2>
                      </a>
                      <div className="md:w-64 md:my-2 mb-6 flex-shrink-0 flex flex-col">
                        <span className="tracking-widest font-medium title-font  ">
                          {project.frontmatter.category}
                        </span>
                        <span className="mt-1 text-gray-600 text-sm">
                          {project.frontmatter.date}
                        </span>
                      </div>
                      <p className="leading-relaxed">
                        {project.frontmatter.description}
                      </p>
                      <a
                        href={project.frontmatter.link}
                        target="__blank"
                        rel="noopener noreferrer"
                        className=" text-blue-700 inline-flex items-center mt-4"
                      >
                        GitHub Repository
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ProjectsPage;
