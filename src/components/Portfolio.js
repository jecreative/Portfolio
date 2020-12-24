import { useState } from 'react'

import Project from '../components/Project'
import ProjectModal from '../components/ProjectModal'

const Portfolio = ({ projects }) => {
  const [showModal, setShowModal] = useState(false)
  const [project, setProject] = useState({})

  return (
    <section
      id='portfolio'
      className='h-full p-10 px-4 py-20 bg-center bg-no-repeat bg-cover md:px-20 xl:px-32 md:bg-portfolio-pattern'
    >
      {showModal && (
        <ProjectModal
          showModal={showModal}
          setShowModal={setShowModal}
          project={project}
        />
      )}
      <h2 className='font-medium text-yellow-600'>
        <strong className='block text-base text-center text-yellow-600 md:text-left sm:text-lg'>
          Showcase
        </strong>
      </h2>
      <h1 className='mb-6 text-5xl font-bold text-center md:text-left lg:text-6xl xl:text-7xl'>
        Portfolio
      </h1>
      <div className='grid gap-4 lg:grid-cols-3 md:grid-cols-2'>
        {projects?.map((project) => (
          <Project
            project={project}
            key={project.id}
            setShowModal={setShowModal}
            setProject={setProject}
          />
        ))}
      </div>
    </section>
  )
}

export default Portfolio
