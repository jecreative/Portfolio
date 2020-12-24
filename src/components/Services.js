const Services = () => {
  return (
    <section
      id='services'
      className='h-full p-10 px-4 pt-20 bg-gray-100 md:p-32'
    >
      <h2>
        <strong className='block text-base text-center text-yellow-600 sm:text-lg md:text-left'>
          Areas Of Specialization
        </strong>
      </h2>
      <h1 className='mt-2 mb-20 text-5xl font-bold text-center md:text-left lg:text-6xl xl:text-7xl'>
        What I Offer
      </h1>
      <div
        id='services-grid'
        className='grid grid-flow-col grid-cols-1 grid-rows-6 gap-4 lg:grid-rows-2 lg:grid-cols-3 sm:grid-rows-3 sm:grid-cols-2'
      >
        {/*  */}
        <div className='px-10 mb-10 border-2 border-gray-300 rounded-sm rounded-tr-2xl'>
          <i className='grid w-20 h-20 text-3xl text-white transform -translate-y-10 bg-yellow-600 border-8 border-gray-100 rounded-md place-items-center fas fa-code'></i>
          <h3 className='text-lg font-semibold transform -translate-y-6'>
            Web Application Development
          </h3>
          <p className='text-sm transform -translate-y-6'>
            Web application development utilizing the latest tools &
            technologies, including HTML5, CSS, Javascript, React, NextJS, and
            more.
          </p>
        </div>
        <div className='px-10 mb-10 border-2 border-gray-300 rounded-sm rounded-tr-2xl'>
          <i className='grid w-20 h-20 text-3xl text-white transform -translate-y-10 bg-yellow-600 border-8 border-gray-100 rounded-md place-items-center fas fa-pencil-ruler'></i>
          <h3 className='text-lg font-semibold transform -translate-y-6'>
            Graphic Design
          </h3>
          <p className='text-sm transform -translate-y-6'>
            Create visual concepts to help inspire, inform, and captivate
            consumers. Develop the overall layout and production design for both
            print and digital applications.
          </p>
        </div>
        <div className='px-10 mb-10 border-2 border-gray-300 rounded-sm rounded-tr-2xl'>
          <i className='grid w-20 h-20 text-3xl text-white transform -translate-y-10 bg-yellow-600 border-8 border-gray-100 rounded-md place-items-center fal fa-clouds'></i>
          <h3 className='text-lg font-semibold transform -translate-y-6'>
            Cloud Application Development
          </h3>
          <p className='text-sm transform -translate-y-6'>
            Development using cloud-based solutions, including Google Cloud
            Platform and MongoDB Atlas to create fully managed cloud databases
            and applications.
          </p>
        </div>
        <div className='px-10 mb-10 border-2 border-gray-300 rounded-sm rounded-tr-2xl'>
          <i className='grid w-20 h-20 text-3xl text-white transform -translate-y-10 bg-yellow-600 border-8 border-gray-100 rounded-md place-items-center fal fa-pencil-alt'></i>
          <h3 className='text-lg font-semibold transform -translate-y-6'>
            Content Writing
          </h3>
          <p className='text-sm transform -translate-y-6'>
            Providing relevant content for websites focusing on specific target
            audiences and keywords aimed towards improving overall SEO.
          </p>
        </div>

        <div className='px-10 mb-10 border-2 border-gray-300 rounded-sm rounded-tr-2xl'>
          <i className='grid w-20 h-20 text-3xl text-white transform -translate-y-10 bg-yellow-600 border-8 border-gray-100 rounded-md place-items-center fal fa-ruler-combined'></i>

          <h3 className='text-lg font-semibold transform -translate-y-6'>
            Responsive Design
          </h3>
          <p className='text-sm transform -translate-y-6'>
            Use of latest tools and technologies in creating accessible and
            responsive content that adjusts smoothly to various screen sizes.
          </p>
        </div>
        <div className='px-10 mb-10 border-2 border-gray-300 rounded-sm rounded-tr-2xl'>
          <i className='grid w-20 h-20 text-3xl text-white transform -translate-y-10 bg-yellow-600 border-8 border-gray-100 rounded-md place-items-center fal fa-tachometer-alt-fast'></i>
          <h3 className='text-lg font-semibold transform -translate-y-6'>
            SEO
          </h3>
          <p className='text-sm transform -translate-y-6'>
            Improve website rankings on major search engines, ensuring on-page
            optimization to produce relevant search results and a positive user
            experience.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services
