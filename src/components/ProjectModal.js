import Link from 'next/link'

const ProjectModal = ({
  showModal,
  setShowModal,
  project: { name, description, url, feature_image, tech, screenshots },
}) => {
  const exitModalHandler = (e) => {
    document.body.style.overflowY = 'auto'
    setShowModal(!showModal)
  }
  return (
    <>
      {showModal && (
        <div
          onClick={exitModalHandler}
          className='fixed top-0 left-0 z-10 grid w-full h-full p-0 bg-black bg-opacity-50 place-items-center'
        >
          <div
            id='modal'
            className='relative flex flex-col items-center justify-start w-5/6 mx-auto overflow-y-scroll bg-white shadow-xl md:w-4/6 h-5/6'
          >
            {/*  */}
            <div className='max-w-full px-0 py-0 '>
              <img
                src={feature_image}
                alt=''
                className='object-contain w-full '
                style={{ maxHeight: '800px' }}
              />
            </div>
            {/*  */}
            <div className='relative w-full p-4 text-left lg:p-12 '>
              <h1 className='text-4xl font-semibold '>{name}</h1>
              <h2 className='my-1 font-medium text-yellow-600'>{tech}</h2>
              <hr className='w-full mx-auto mt-1 mb-3 border border-gray-400' />
              <p className='mb-8 font-medium'>{description}</p>
              <Link href={`${url}`}>
                <a
                  target='_blank'
                  rel='noreferrer'
                  className='px-8 py-3 ml-1 text-white transition-all bg-yellow-600 border rounded-full hover:text-gray-800 hover:border-yellow-600 hover:bg-transparent'
                >
                  Visit Site
                </a>
              </Link>
            </div>

            {screenshots && (
              <div
                className='relative grid w-full grid-cols-1'
                style={{ minHeight: '300px' }}
              >
                {screenshots.map((screen, index) => (
                  <picture key={index}>
                    <source type='image/webp' srcSet={screen} />
                    <img
                      src={screen}
                      alt='project'
                      className='object-contain object-top w-full p-4'
                      style={{ maxHeight: '800px' }}
                    />
                  </picture>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectModal
