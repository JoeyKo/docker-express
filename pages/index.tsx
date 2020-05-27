import Card from "../components/Card";
import Layout from '../components/Layout'
import fetch from 'isomorphic-fetch'
import { REACT_APP_API_URL } from '../config'
import styled from 'styled-components'

const TabLink = styled.a`
align-items: center;
display: flex;
font-size: 16px;
margin: 0 22px;
`
function HomePage({ questions }) {

  return (
    <Layout>
      <div className="topStory">
        <div className="Topstory-container">
          <div className="Topstory-mainColumn">
            <div className="Topstory-mainColumnCard">
              <div className="Card Topstory-noMarginCard Topstory-tabCard">
                <nav className="TopstoryTabs Topstory-tabs">
                  <TabLink href="/">推荐</TabLink>
                  <TabLink href="/follow">关注</TabLink>
                  <TabLink href="/hot">热榜</TabLink>
                </nav>
              </div>
              <div className="Topstory-content">
                {
                  questions.map(question => (
                    <Card
                      key={question.id}
                      image="https://pic1.zhimg.com/50/v2-3e15293fe39adb63abe58226197d131e_hd.jpg"
                      link={`/question/${question.id}`}
                      title={question.title}
                      content={question.content}
                    />
                  ))
                }
              </div>
            </div>
         
          </div>
        </div>
        <style jsx>{`
          .Topstory-container {
            display: flex;
            align-items: flex-start;
            width: 1000px;
            padding: 0 16px;
            margin: 10px auto;
          }
          .Topstory-mainColumn {
            flex-shrink: 0;
            margin-right: 10px;
            margin-bottom: 0;
            width: 694px;
          }
          .Topstory-mainColumnCard {
            box-shadow: 0 1px 3px rgba(26,26,26,.1);
          }
          .Card {
            margin-bottom: 10px;
            background: #fff;
            overflow: hidden;
            border-radius: 2px;
            box-sizing: border-box;
          }
          .TopstoryTabs {
            display: flex;
            border-bottom: 1px solid #f6f6f6;
            height: 58px;
          }
          .Topstory-tabs {
            border-bottom: 1px solid #f0f2f7;
          }
        `}</style>
      </div>
    </Layout>
  );
}

HomePage.getInitialProps = async () => {
  const res = await fetch(`${REACT_APP_API_URL}/api/question`)
  const json = await res.json()
  return { questions: json.data || [] }
}

export default HomePage;