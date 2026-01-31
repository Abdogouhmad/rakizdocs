import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={styles.hero}>
      <div className="container">
        <div className={styles.heroInner}>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>

          <p className={styles.heroSubtitle}>
            {siteConfig.tagline}
          </p>

          <div className={styles.heroActions}>
            <a
              className={clsx(
                'button button--primary button--lg',
                styles.downloadButton
              )}
              href="/assets/apks/rakiz-v0.3.5.apk"
              download
            >
              Download for Android
            </a>

            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.secondaryButton
              )}
              to="/blog"
            >
              Read Blogs
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Rakiz is a minimal and focused timer app built with Flutter.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
