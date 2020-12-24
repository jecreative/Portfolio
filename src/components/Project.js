const Project = ({
  setShowModal,
  setProject,
  project: {
    name,
    id,
    feature_image,
    tech,
    description,
    url,
    screenshots,
    repo,
  },
}) => {
  const loadDetailshandler = () => {
    document.body.style.overflow = 'hidden'
    setProject({ name, id, feature_image, tech, description, url, screenshots })
    setShowModal(true)
  }
  return (
    <div className='flex flex-col text-center transition-all shadow-md h-72'>
      <>
        <div
          className='w-full bg-center bg-cover h-3/4'
          style={{ backgroundImage: `url("${feature_image}")` }}
        ></div>
        <div className='flex items-center justify-center w-full bg-white border-t border-gray-300 h-1/4'>
          <a
            className='px-6 py-2 mr-1 transition-all border border-yellow-600 rounded-full cursor-pointer hover:text-white hover:bg-yellow-600'
            onClick={loadDetailshandler}
          >
            <i className='fal fa-info-circle'></i> Details
          </a>
          <a
            href={`${repo}`}
            target='_blank'
            rel='norefferer'
            className='px-6 py-2 ml-1 text-white transition-all bg-yellow-600 border rounded-full hover:text-gray-800 hover:border-yellow-600 hover:bg-transparent'
          >
            <i className='fab fa-github'></i> Github
          </a>
        </div>
      </>
    </div>
  )
}

export default Project
