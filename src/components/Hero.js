import Image from 'next/image'
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <section
      id='hero'
      className='z-20 flex flex-col justify-center w-screen max-w-full px-4 pt-10 mb-10 bg-gray-100 sm:px-10 md:flex-row lg:px-18 xl:px-20'
    >
      {/* Hero Left */}
      <div className='flex flex-col items-center justify-center h-2/4 md:h-full md:items-start md:w-2/4'>
        <h1 className='w-full text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl'>
          Jordan Esguerra
        </h1>
        <h2 className='flex items-center w-full text-base font-medium text-yellow-600 md:my-1 md:text-lg lg:text-xl'>
          Software Developer{' '}
          <span className='mx-1 text-2xl font-thin lg:mx-2'>|</span> Multimedia
          Designer
        </h2>
        <p className='my-1 mb-4 text-lg tracking-wide md:w-10/12 md:text-left md:mb-2 md:px-0 md:text-base'>
          <strong>Welcome!</strong> This site is a representation of all that
          I've learned and accomplished throughout my studies and career as a
          software developer and multimedia designer. Enjoy!
        </p>
        <div className='flex items-center justify-start w-full mt-6'>
          <a
            href='/Resume.pdf'
            className='px-4 py-3 mr-3 text-sm text-white bg-yellow-600 border rounded-full md:mr-10 hover:bg-transparent hover:text-gray-800 hover:border-yellow-600'
            download
          >
            Download CV
          </a>
          <Link
            to='contact'
            spy={true}
            smooth={true}
            duration={600}
            exact='true'
            offset={-25}
            className='px-4 py-3 text-sm border border-yellow-600 rounded-full cursor-pointer md:mr-10 hover:text-white hover:bg-yellow-600'
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Hero Right */}
      <div className='relative flex items-center justify-end overflow-hidden h-3/4 md:h-full md:w-2/4'>
        <Image
          src='/images/developer.svg'
          height={750}
          width={750}
          alt='graphic of a software developer'
          className='object-contain'
        />
      </div>
    </section>
  )
}

export default Hero
