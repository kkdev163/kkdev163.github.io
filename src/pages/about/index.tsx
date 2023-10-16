import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import avatar from "../profile-pic.jpg";

export default function Hello() {
  return (
    <Layout title="About" description="about me">
      <div className={styles.page}>
        <img
          src={avatar}
          alt="logo"
          width="400"
          height="400"
        />
        <div className={styles.content}>
          <p>朱坤坤，网易资深前端开发工程师，有多年大前端性能监控平台的全栈开发经验。创建并主导了网易云音乐前端性能监控平台、网易云音乐客户端性能监控平台，在云音乐及网易集团有大规模的落地。</p>
          <hr />
          <p>邮箱: kkdev163@163.com</p>
        </div>
      </div>
    </Layout>
  );
}
