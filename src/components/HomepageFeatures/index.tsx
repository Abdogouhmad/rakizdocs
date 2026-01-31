import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    description: (
      <>
        Rakiz is designed to be simple and intuitive from the very first launch,
        so you can focus on your tasks without friction.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    description: (
      <>
        Rakiz helps you eliminate distractions and structure your time,
        letting you stay focused on what truly matters.
      </>
    ),
  },
  {
    title: 'Powered by Flutter',
    description: (
      <>
        Built with Flutter, Rakiz delivers a fast, smooth, and beautiful
        experience across platforms.
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <Heading as="h3" className={styles.featureTitle}>
          {title}
        </Heading>
        <p className={styles.featureDescription}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
