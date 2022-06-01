import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme/index';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Banner from '../container/banner';
import UltimateFeatures from '../container/ultimate-features';
import Features from '../container/features';
import IntroVideo from '../container/intro-video';
import UsefulFeatures from '../container/useful-features';
import Widgets from '../container/widgets';
import Pricing from '../container/pricing';
import Faq from '../container/faq';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Sass Landing Page" />
        <Banner />
        <UltimateFeatures />
        <Features />
        <IntroVideo />
        <UsefulFeatures />
        <Widgets />
        <Pricing />
        <Faq />
      </Layout>
    </ThemeProvider>
  );
}
