import { Link } from 'react-scroll'

const BackToTop = () => {
  return (
    <Link
      to='header'
      spy={true}
      smooth={true}
      duration={600}
      exact='true'
      offset={0}
      id='backToTopBtn'
    >
      <div className='fixed z-10 grid text-2xl transition-all bg-yellow-600 rounded-full shadow-lg opacity-75 cursor-pointer bottom-14 right-10 hover:transform transform-gpu w-14 h-14 place-items-center hover:scale-110 '>
        <i className='text-white fas fa-long-arrow-alt-up'></i>
      </div>
    </Link>
  )
}

export default BackToTop
