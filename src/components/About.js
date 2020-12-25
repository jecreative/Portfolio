import Image from 'next/image'

const About = () => {
  return (
    <section
      id='about'
      className='relative flex flex-col w-screen h-full px-4 pt-10 mt-20 bg-center bg-no-repeat bg-cover md:pt-0 md:bg-about-pattern md:h-screen sm:px-10 lg:px-16 xl:px-20 md:mt-0 md:flex-row'
    >
      <div
        id='about_left'
        className='relative order-2 hidden w-full h-full md:block md:w-5/12 md:order-1'
        style={{ minHeight: '30vh' }}
      >
        <Image
          src='/images/about_img.svg'
          layout='fill'
          className='object-contain'
        />
      </div>
      <div
        id='about_right'
        className='flex flex-col justify-center order-1 w-full mb-16 md:w-7/12 md:order-2 md:pr-10 md:pl-12 md:h-full'
      >
        <h2 className='font-medium text-yellow-600'>
          <strong className='block text-base text-left text-yellow-600 sm:text-lg'>
            Introduction
          </strong>
        </h2>
        <h1 className='mb-3 text-5xl font-bold sm:text-left lg:text-6xl xl:text-7xl'>
          About Me
        </h1>
        <p className='my-3 mb-10 text-lg tracking-wide md:mb-2 md:px-0 md:text-base'>
          I'm a <strong>software developer</strong> &{' '}
          <strong>multimedia designer</strong> from San Diego, CA. I have a
          strong passion for developing high-quality applications and solutions
          using the latest tools & technology. I'm currently looking for new
          opportunities and ways to expand my portfolio and improve my current
          skill set. As I continue to grow in my technical career, I look
          forward to taking on more increasingly complex and exciting
          challenges.
        </p>
        <div className='w-full h-full mb-5 md:hidden'>
          <Image
            src='/images/about_img.svg'
            width={500}
            height={500}
            className='object-contain'
          />
        </div>

        <h2 className='mt-3 mb-5 text-lg font-bold tracking-wide text-gray-800 md:text-left xl:text-xl'>
          Technical Skills
        </h2>
        <div
          id='technical-skills'
          className='grid w-full grid-cols-3 gap-4 md:gap-8 lg:grid-rows-1 lg:grid-cols-12 mb-7 md:mb-1 md:grid-rows-2 md:grid-cols-6'
        >
          <i className='flex justify-center mr-4 text-5xl font-thin text-yellow-600 md:text-3xl md:justify-start tooltip devicon-html5-plain'>
            <span className='p-3 -mt-5 -ml-2 text-xs font-bold text-gray-200 bg-gray-800 rounded tooltip-text'>
              HTML5
            </span>
          </i>
          <i className='flex justify-center mr-4 text-5xl font-thin text-yellow-600 md:text-3xl md:justify-start devicon-css3-plain tooltip'>
            <span className='p-3 -mt-5 -ml-2 text-xs font-bold text-gray-200 bg-gray-800 rounded tooltip-text'>
              CSS3
            </span>
          </i>
          <i className='flex justify-center mr-4 text-5xl font-thin text-yellow-600 md:text-3xl md:justify-start devicon-javascript-plain tooltip'>
            <span className='p-3 -mt-5 -ml-4 text-xs font-bold text-gray-200 bg-gray-800 rounded tooltip-text'>
              Javascript
            </span>
          </i>
          <i className='flex justify-center mr-4 text-5xl font-thin text-yellow-600 md:text-3xl md:justify-start devicon-typescript-plain tooltip'>
            <span className='p-3 -mt-5 -ml-4 text-xs font-bold text-gray-200 bg-gray-800 rounded tooltip-text'>
              Typescript
            </span>
          </i>
          <i className='flex justify-center mr-4 text-5xl font-thin text-yellow-600 md:text-3xl md:justify-start fab fa-react tooltip'>
            <span className='p-3 -mt-5 -ml-2 text-xs font-bold text-gray-200 bg-gray-800 rounded tooltip-text'>
              React
            </span>
          </i>
          <i className='flex justify-center mr-4 text-5xl font-thin text-yellow-600 md:text-3xl md:justify-start devicon-redux-original tooltip'>
            <span className='p-3 -mt-5 -ml-2 text-xs font-bold text-gray-200 bg-gray-800 rounded tooltip-text'>
              Redux
            </span>
          </i>
          <i className='flex justify-center mr-4 text-5xl font-thin text-yellow-600 md:text-3xl md:justify-start devicon-nodejs-plain tooltip'>
            <span className='p-3 -mt-5 -ml-3 text-xs font-bold text-gray-200 bg-gray-800 rounded tooltip-text'>
              Node JS
            </span>
          </i>
          <i className='flex justify-center mr-4 text-5xl font-thin text-yellow-600 md:text-3xl md:justify-start devicon-express-original tooltip'>
            <span className='p-3 -mt-5 -ml-2 text-xs font-bold text-gray-200 bg-gray-800 rounded tooltip-text'>
              Express
            </span>
          </i>

          <i className='flex justify-center mr-4 text-5xl font-thin text-yellow-600 md:text-3xl md:justify-start devicon-git-plain tooltip'>
            <span className='p-3 -mt-5 text-xs font-bold text-gray-200 bg-gray-800 rounded tooltip-text'>
              Git
            </span>
          </i>
          <i className='flex justify-center mr-4 text-5xl font-thin text-yellow-600 md:text-3xl md:justify-start devicon-mongodb-plain tooltip'>
            <span className='p-3 -mt-5 -ml-4 text-xs font-bold text-gray-200 bg-gray-800 rounded tooltip-text'>
              Mongo DB
            </span>
          </i>
          <i className='flex justify-center mr-4 text-5xl font-thin text-yellow-600 md:text-3xl md:justify-start devicon-materialui-plain tooltip'>
            <span className='p-3 -mt-5 -ml-5 text-xs font-bold text-gray-200 bg-gray-800 rounded tooltip-text'>
              Material UI
            </span>
          </i>
          <i className='flex justify-center mr-4 text-5xl font-thin text-yellow-600 md:text-3xl md:justify-start devicon-bootstrap-plain tooltip'>
            <span className='p-3 -mt-5 -ml-4 text-xs font-bold text-gray-200 bg-gray-800 rounded tooltip-text'>
              Bootstrap
            </span>
          </i>
        </div>
        <h2 className='mt-3 mb-4 text-lg font-bold tracking-wide md:text-left xl:text-xl'>
          My Interests
        </h2>
        <div id='interests' className='grid grid-cols-3'>
          <p className='flex items-center justify-center mr-1 font-medium md:justify-start'>
            <i className='mr-3 text-3xl font-thin text-yellow-600 fal fa-headphones'></i>
            Music
          </p>
          <p className='flex items-center justify-center mr-1 font-medium md:justify-start'>
            <i className='mr-3 text-3xl font-thin text-yellow-600 fal fa-suitcase'></i>
            Travel
          </p>
          <p className='flex items-center justify-center mr-1 font-medium md:justify-start'>
            <i className='mr-3 text-3xl font-thin text-yellow-600 fal fa-snowboarding'></i>
            Surfing
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
