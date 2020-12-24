import { useState } from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll'
import classNames from 'classnames'
import { useRouter } from 'next/router'

const Header = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  return (
    <header id='header' className='w-screen max-w-full overflow-hidden'>
      {/* Preheader */}
      <div
        id='preheader'
        className='flex items-center justify-end h-12 px-4 bg-gray-800 md:px-10 md:justify-between'
      >
        <div
          id='preheader_left'
          className='hidden text-sm text-gray-200 md:inline h-2/4'
        >
          <a
            href='mailto:jordanesguerra93@gmail.com'
            className='hover:text-gray-400'
          >
            <i className='mr-3 text-sm far fa-envelope'></i>{' '}
            jordanesguerra93@gmail.com
          </a>
          <span className='mx-5'>|</span>

          <a href='tel:8582327090' className='hover:text-gray-400'>
            <i className='mr-3 fas fa-phone-alt'></i>(858) 232-7090
          </a>
        </div>
        <div
          id='preheader_right'
          className='flex items-center text-sm text-gray-200 h-2/4'
        >
          <p className='hidden md:inline'>Find me on social media</p>
          <a href='tel:8582327090'>
            <i className='mx-2 text-lg cursor-pointer hover:text-gray-400 md:hidden fas fa-phone-alt'></i>
          </a>
          <a href='mailto:jordanesguerra93@gmail.com'>
            <i className='mx-3 text-lg cursor-pointer hover:text-gray-400 md:hidden far fa-envelope'></i>
          </a>
          <a href='https://www.linkedin.com/in/jordanesguerra/'>
            <i className='mx-3 text-lg cursor-pointer sm:mx-5 fab fa-linkedin-in hover:text-gray-400'></i>
          </a>
          <a href='https://github.com/jecreative'>
            <i className='ml-3 text-lg cursor-pointer fab fa-github hover:text-gray-400'></i>
          </a>
        </div>
      </div>
      {/* Desktop/Tablet Nav */}
      <nav className='flex items-center justify-between h-20 px-4 text-base font-medium tracking-wide text-gray-500 bg-white border border-gray-200 md:px-10'>
        <div
          id='logo'
          className='flex items-center ml-3 text-lg font-black tracking-normal md:ml-0 '
        >
          <Image
            src='/images/logo.svg'
            height={50}
            width={50}
            alt='Jordan Esguerra Logo'
          />
          <h1 className='hidden ml-3 uppercase cursor-default lg:block'>
            Jordan Esguerra
          </h1>
        </div>
        <ul id='nav_links' className='items-center hidden h-full md:flex'>
          <Link
            to='home'
            className={classNames(
              'grid h-full mx-4 cursor-pointer place-items-center hover:text-yellow-600',
              {
                'text-yellow-600': router.pathname === '/',
              }
            )}
          >
            Home
          </Link>

          <Link
            to='about'
            spy={true}
            smooth={true}
            duration={600}
            exact='true'
            offset={0}
            className='grid h-full mx-4 cursor-pointer place-items-center hover:text-yellow-600'
          >
            About
          </Link>

          <Link
            to='services'
            spy={true}
            smooth={true}
            duration={600}
            exact='true'
            offset={50}
            className='grid h-full mx-4 cursor-pointer place-items-center hover:text-yellow-600'
          >
            Services
          </Link>

          <Link
            to='portfolio'
            spy={true}
            smooth={true}
            duration={600}
            exact='true'
            offset={40}
            className='grid h-full mx-4 cursor-pointer place-items-center hover:text-yellow-600'
          >
            Portfolio
          </Link>

          <Link
            to='contact'
            spy={true}
            smooth={true}
            duration={600}
            exact='true'
            offset={-25}
            className='grid py-2 ml-4 text-white transition-all bg-yellow-600 border-2 border-yellow-600 rounded-full cursor-pointer place-items-center px-7 hover:bg-transparent hover:text-yellow-600'
          >
            Hire Me
          </Link>
        </ul>
      </nav>
      {/* Mobile Nav Toggle */}
      <button
        className='absolute px-1 border-transparent rounded-full cursor-pointer right-10 focus:outline-none md:hidden'
        style={{ top: '4.75rem' }}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <i className='text-xl fas fa-times'></i>
        ) : (
          <i className='text-xl fas fa-bars'></i>
        )}
      </button>
      {/* Mobile Nav */}
      <nav
        id='mobile_nav'
        className={
          open
            ? 'fixed w-screen transform bg-gray-800 opacity-100 h-screen md:hidden translate-x-0 transition-all duration-300 z-50 overflow-hidden'
            : 'fixed w-screen transform translate-x-full bg-gray-800 opacity-100 h-screen md:hidden transition-all duration-300 z-50 overflow-hidden'
        }
      >
        <ul
          id='nav_links'
          className='flex flex-col items-center justify-center text-3xl text-center text-gray-500 h-5/6'
        >
          <Link
            to='home'
            spy={true}
            smooth={true}
            duration={600}
            exact='true'
            offset={0}
            className='flex items-center my-4 border-b border-transparent hover:border-gray-800 hover:text-gray-300'
            onClick={() => setOpen(!open)}
          >
            Home
          </Link>

          <Link
            to='about'
            spy={true}
            smooth={true}
            duration={600}
            exact='true'
            offset={-45}
            className='flex items-center my-4 border-b border-transparent hover:border-gray-800 hover:text-gray-300'
            onClick={() => setOpen(!open)}
          >
            About
          </Link>

          <Link
            to='portfolio'
            spy={true}
            smooth={true}
            duration={600}
            exact='true'
            offset={50}
            className='flex items-center my-4 border-b border-transparent hover:border-gray-800 hover:text-gray-300'
            onClick={() => setOpen(!open)}
          >
            Portfolio
          </Link>

          <Link
            to='contact'
            spy={true}
            smooth={true}
            duration={600}
            exact='true'
            offset={0}
            className='flex items-center my-4 border-b border-transparent hover:border-gray-800 hover:text-gray-300'
            onClick={() => setOpen(!open)}
          >
            Contact
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
