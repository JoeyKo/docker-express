import React, { useEffect } from "react";
import Card from "components/Card";
import cover from '../../assets/images/v2-ba0ca8a1ee3b92d76b1758e07e98be13_b.jpg'
import styles from "./Home.module.scss";

export default function HomePage() {
  useEffect(() => {
   
  }, []);

  return (
    <div className={styles.mainColumn}>
      <div className={styles.mainContent}>
        <Card
          image={cover}
          link="/"
          title="5G 究竟跟我有什么关系？"
          content="5G 标准争夺战，到底争的是什么？应用元年，谁能拿下 5G 话语权？5G 标准是未来数字生活的基石，让普通人读懂 5G 与生活，大到行业影响，小到手机购买，5G 不能错过。
"
        />
      </div>
    </div>
  );
}
