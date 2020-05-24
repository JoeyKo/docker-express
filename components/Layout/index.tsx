import Head from 'next/head'
import Navigation from "../Navigation";
import router from 'next/router'

const links = [
  { name: "首页", link: "/" },
  { name: "发现", link: "/explore" },
  { name: "等你来答", link: "/question/waiting" },
];

function Layout({ children, title = 'zhihu' }) {

  const handleSearch = (event) => {
    router.push('/search')
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Navigation links={links} placeholder="iG 不敌TL 无缘 MSI 决赛" onSearch={handleSearch} />
      {children}
    </div>
  )
}

export default Layout