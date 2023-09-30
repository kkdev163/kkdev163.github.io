import React, { useEffect } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";
import avatar from "./profile-pic.jpg";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={styles.container}>
        <img
          className={styles.heroLogo}
          src={avatar}
          alt="logo"
          width="200"
          height="200"
        />
        <div>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {}, []);
  return (
    <Layout title="home">
      <HomepageHeader />
      <div className={styles.main}>
        <div className={styles.description}>
          本站点收录了个人职业生涯中发表的&nbsp;
          <Link to={"/blog"}>文章</Link>、
          <Link to={"/presentation"}> 演讲</Link>、
          <Link to={"/resume"}> 履历</Link>&nbsp;等
        </div>
      </div>
    </Layout>
  );
}
