import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Docker Ready',
    description: (
      <>
        Core concepts, installation for Ubuntu/Windows/macOS, command
        cheatsheets, and Dockerfile deep-dive—all ready to use.
        <br />
        <Link to="/docs/docker-guide">Go to Docker guide →</Link>
      </>
    ),
  },
  {
    title: 'Kubernetes (Coming Soon)',
    description: (
      <>
        Planned coverage: workloads, services/ingress, Helm, and day-2
        operations so you can ship clusters with confidence.
      </>
    ),
  },
  {
    title: 'CI/CD & Observability',
    description: (
      <>
        Upcoming playbooks for build/test/release pipelines plus metrics, logs,
        traces, and alerting to keep services healthy.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
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
