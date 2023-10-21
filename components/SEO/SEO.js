import Head from "next/head";
import PropTypes from "prop-types";

export const defaultMetadata = {
  title: "Jonathon Carlyon - Full Stack Engineer & Tech Enthusiast",
  description:
    "Discover the tech journey of Jonathon Carlyon, a seasoned Full Stack Engineer with a knack for turning visions into reality. From his early days with Flash to co-founding CannMenus.com, explore his rich portfolio, projects, and more.",
};
const SEO = ({ title, description, image, url }) => {
  const defaultTitle = defaultMetadata.title;
  const defaultDescription = defaultMetadata.description;
  const defaultImage = "/jonathoncarlyon.jpeg";
  const defaultUrl = "https://jcar.dev";

  return (
    <>
      <meta name="image" content={image || defaultImage} />
      <meta property="og:url" content={url || defaultUrl} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:image" content={image || defaultImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || defaultTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      <meta name="twitter:image" content={image || defaultImage} />
    </>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
};

export default SEO;
