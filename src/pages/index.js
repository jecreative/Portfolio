import Head from 'next/head'

import BackToTopButton from '../components/BackToTop'
import Hero from '../components/Hero'
import Experience from '../components/ExperienceBanner'
import About from '../components/About'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'

const getProjects = async () => {
  const projects = await fetch(
    `https://us-central1-portfolio-b9639.cloudfunctions.net/api/projects`
  ).then((res) => res.json())

  return projects
}

export const getStaticProps = async ({ params }) => {
  const projects = await getProjects()

  return {
    props: { projects },
    revalidate: 10,
  }
}

const Home = (props) => {
  const { projects } = props

  return (
    <>
      <Head>
        <title>
          Jordan Esguerra | Software Developer & Multimedia Designer
        </title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          property='og:title'
          content='Jordan Esguerra | Software Developer & Multimedia Designer'
          key='title'
        />
        <meta
          name='description'
          content="Software Developer and Multimedia Designer. Jordan Esguerra's portfolio featuring high-quality applications and solutions
          using the latest tools & technology."
        />
        <meta name='author' content='Jordan Esguerra' />
        <meta name='robots' content='index, follow' />
      </Head>
      <BackToTopButton />
      <Hero />
      <Experience />
      <About />
      <Services />
      <Portfolio projects={projects} />
      <Contact />
    </>
  )
}

export default Home
