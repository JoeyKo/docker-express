import React from "react";
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Card from "components/Card";
import Loading from 'components/Loading'
import cover from '../../assets/images/v2-ba0ca8a1ee3b92d76b1758e07e98be13_b.jpg';

import styles from "./Home.module.scss";

function HomePage() {

  const { loading, error, data } = useQuery(gql`
    {
      rates(currency: "USD") {
        currency
        rate
      }
    }
  `)

  if (loading) return <Loading />
  if (error) return <p>Error :(</p>

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
      {data.rates.map(({ currency, rate}) => (
        <div key={currency}>
          {currency}: { rate}
        </div>
      ))}
    </div>
  );
}

export default HomePage;
