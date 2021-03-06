import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Movies from '../components/Movies'
import Nav from '../components/Nav'
import requests from '../utils/requests'

export default function Home({ results }) {
  // console.log("yaha hai result", results);
  return (
    <div >
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <Movies results={results} />
    </div>
  )
}

export async function getServerSideProps({ query }) {
  let genre = query.genre
  console.log("yaha ", query);
  // const genre = context.query.genre;
  if (!genre) {
    const request = await fetch(`https://api.themoviedb.org/3${requests.fetchTrending.url}
    `).then(res => res.json());

  }
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url ||
    requests.fetchTrending.url} `).then(res => res.json());
  console.log(request.results)
  return {
    props: {
      results: request.results,
    }
  }

}

