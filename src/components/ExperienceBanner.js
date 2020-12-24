const ExperienceBanner = () => {
  return (
    <div className='items-center hidden h-32 mx-auto overflow-hidden transform translate-y-6 bg-gray-100 rounded-full shadow-lg md:flex sm:w-11/12 md:-translate-y-14 md:h-48 lg:w-3/4'>
      <div className='flex items-center justify-center w-1/3 mx-1 border-r-2 border-gray-300 h-3/4'>
        <i className='grid w-10 h-10 text-gray-100 bg-yellow-600 border-2 rounded-full md:text-3xl place-items-center md:h-14 md:w-14 fal fa-award'></i>
        <h2 className='ml-2 font-bold leading-6 text-gray-800 sm:text-md md:text-lg'>
          4+ Years
          <span className='block font-medium text-yellow-600'>Experience</span>
        </h2>
      </div>
      <div className='flex items-center justify-center w-1/3 mx-1 h-3/4'>
        <i className='grid w-10 h-10 text-gray-100 bg-yellow-600 border-2 rounded-full md:text-2xl place-items-center md:w-14 md:h-14 fal fa-laptop-code'></i>
        <h2 className='ml-2 font-bold leading-6 text-gray-800 sm:text-md md:text-lg'>
          Multiple Projects
          <span className='block font-medium text-yellow-600'>Completed</span>
        </h2>
      </div>
      <div className='flex items-center justify-center w-1/3 mx-1 border-l-2 border-gray-300 h-3/4'>
        <i className='grid w-10 h-10 text-gray-100 bg-yellow-600 border-2 rounded-full md:text-3xl place-items-center md:w-14 md:h-14 fal fa-user-headset '></i>
        <h2 className='ml-2 font-bold leading-6 text-gray-800 sm:text-md md:text-lg'>
          Support Online
          <span className='block font-medium text-yellow-600'>24/7</span>
        </h2>
      </div>
    </div>
  )
}

export default ExperienceBanner
