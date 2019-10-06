import Head from 'next/head'
import Navigation from "../Navigation";

const links = [
  { name: "首页", link: "/" },
];

function Layout({ children, title = 'This is the default title' }) {
  
  const handleSearch = (event) => {
    console.log(event)
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
      <footer>{'I`m here to stay'}</footer>
    </div>
  )
}

export default Layout