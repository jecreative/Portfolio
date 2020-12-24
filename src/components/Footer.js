const Footer = () => {
  return (
    <footer className='h-12 px-4 bg-gray-800 md:px-20'>
      {/* <div className='h-20 px-4 bg-white'></div> */}
      <div className='flex items-center justify-between h-12 text-xs text-white bg-gray-800'>
        <p>© 2020 Jordan Esguerra. All rights reserved.</p>
        <div>
          <a href='https://www.linkedin.com/in/jordanesguerra/'>
            <i className='mx-3 text-lg cursor-pointer sm:mx-5 fab fa-linkedin-in hover:text-gray-400'></i>
          </a>
          <a href='https://github.com/jecreative'>
            <i className='ml-3 text-lg cursor-pointer fab fa-github hover:text-gray-400'></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
