import Card from "../components/Card";
import Layout from '../components/Layout'

function HomePage() {

  return (
    <Layout>
      <>
        <div className='mainColumn'>
          <div className='mainContent'>
            <Card
              image="https://pic2.zhimg.com/v2-b7f56415c5438f4bce1eb8ae72e01741_b.jpg"
              link="/"
              title="5G 究竟跟我有什么关系？"
              content="5G 标准争夺战，到底争的是什么？应用元年，谁能拿下 5G 话语权？5G 标准是未来数字生活的基石，让普通人读懂 5G 与生活，大到行业影响，小到手机购买，5G 不能错过。
    "
            />
          </div>
        </div>
        <style jsx>{`
            .mainColumn {
              flex-shrink: 0;
              margin-right: 10px;
              margin-bottom: 0;
              width: 694px;
              box-shadow: 0 1px 3px rgba(26,26,26,.1);
            }
          `}
        </style>
      </>
    </Layout>
  );
}

export default HomePage;