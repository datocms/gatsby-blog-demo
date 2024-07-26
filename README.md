<!--datocms-autoinclude-header start-->

<a href="https://www.datocms.com/"><img src="https://www.datocms.com/images/full_logo.svg" height="60"></a>

👉 [Visit the DatoCMS homepage](https://www.datocms.com) or see [What is DatoCMS?](#what-is-datocms)

---

<!--datocms-autoinclude-header end-->

# Gatsby Blog Website

This repo contains a static website written with [GatsbyJS](https://www.gatsbyjs.org/), integrated with content coming from [DatoCMS](https://www.datocms.com).

[See the live demo](https://datocms-gatsby-blog-demo.netlify.app/)

If you want to use try this out yourself, you first need to set up a project on DatoCMS which will host your data.

You can [sign up for a free account](https://dashboard.datocms.com/signup) and then you can simply click this button:

[![Deploy with DatoCMS](https://dashboard.datocms.com/deploy/button.svg)](https://dashboard.datocms.com/deploy?repo=datocms/gatsby-blog-demo:main)

## Repo usage

First, install the dependencies of this project:

```
yarn install
```

Add an `.env` file containing the read-only API token of your DatoCMS site:

```
echo 'DATO_API_TOKEN=abc123' >> .env
```

Then, to run this website in development mode (with live-reload):

```
yarn develop
```

To build the final, production ready static website:

```
yarn build
```

The final result will be saved in the `public` directory.

## About

The goal of this project is to show how easily you can create static sites using the content (text, images, links, etc.) stored on [DatoCMS](https://www.datocms.com). This project is configured to fetch data from a specific administrative area using [the API DatoCMS provides](https://www.datocms.com/docs/content-management-api).

You can find further information about how to integrate DatoCMS with Gatsby in [our documentation](https://www.datocms.com/docs/static-generators/gatsbyjs).

This websites uses:

- [GatsbyJS](https://github.com/gatsbyjs/gatsby) as website generator;
- [gatsby-source-datocms](https://github.com/datocms/gatsby-source-datocms) to integrate the website with DatoCMS.
  
<!--datocms-autoinclude-footer start-->

---

# What is DatoCMS?
<a href="https://www.datocms.com/"><img src="https://www.datocms.com/images/full_logo.svg" height="60"></a>

[DatoCMS](https://www.datocms.com/) is the REST & GraphQL Headless CMS for the modern web.

Trusted by over 25,000 enterprise businesses, agency partners, and individuals across the world, DatoCMS users create online content at scale from a central hub and distribute it via API. We ❤️ our [developers](https://www.datocms.com/team/best-cms-for-developers), [content editors](https://www.datocms.com/team/content-creators) and [marketers](https://www.datocms.com/team/cms-digital-marketing)!

**Quick links:**

- ⚡️ Get started with a [free DatoCMS account](https://dashboard.datocms.com/signup)
- 🔖 Go through the [docs](https://www.datocms.com/docs)
- ⚙️ Get [support from us and the community](https://community.datocms.com/)
- 🆕 Stay up to date on new features and fixes on the [changelog](https://www.datocms.com/product-updates)

**Our featured repos:**
- [datocms/react-datocms](https://github.com/datocms/react-datocms): React helper components for images, Structured Text rendering, and more
- [datocms/js-rest-api-clients](https://github.com/datocms/js-rest-api-clients): Node and browser JavaScript clients for updating and administering your content. For frontend fetches, we recommend using our [GraphQL Content Delivery API](https://www.datocms.com/docs/content-delivery-api) instead.
- [datocms/cli](https://github.com/datocms/cli): Command-line interface that includes our [Contentful importer](https://github.com/datocms/cli/tree/main/packages/cli-plugin-contentful) and [Wordpress importer](https://github.com/datocms/cli/tree/main/packages/cli-plugin-wordpress)
- [datocms/plugins](https://github.com/datocms/plugins): Example plugins we've made that extend the editor/admin dashboard
- [DatoCMS Starters](https://www.datocms.com/marketplace/starters) has examples for various Javascript frontend frameworks

Or see [all our public repos](https://github.com/orgs/datocms/repositories?q=&type=public&language=&sort=stargazers)

<!--datocms-autoinclude-footer end-->
