import { useState } from 'react'
import Axios from 'axios'
import classNames from 'classnames'

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(null)
  const [response, setResponse] = useState('')
  const [error, setError] = useState({})

  const sendMessage = async (e) => {
    e.preventDefault()
    const formData = {
      name,
      email,
      phone,
      message,
    }
    await Axios.post(
      'https://us-central1-portfolio-b9639.cloudfunctions.net/api/contact',
      formData
    )
      .then((response) => {
        if (response) {
          setSuccess(true)
          setResponse(response.data.message)
          setName('')
          setEmail('')
          setPhone('')
          setMessage('')
          setError({})
        }
      })
      .catch((error) => {
        console.log(error.response.data)
        setSuccess(false)
        setError(error.response.data)
      })
  }
  return (
    <section
      id='contact'
      className='flex flex-col h-full bg-gray-100 bg-center bg-no-repeat bg-cover md:flex-row md:bg-transparent'
    >
      <div className='flex flex-col items-start justify-start w-full px-5 pt-20 bg-gray-100 md:px-18 lg:px-20 md:w-2/4'>
        <h2 className='font-medium text-yellow-600'>
          <strong className='block text-base text-left text-yellow-600 sm:text-lg'>
            Contact Me
          </strong>
        </h2>
        <h1 className='mb-1 text-5xl font-bold md:mb-3 sm:text-left lg:text-6xl xl:text-7xl'>
          Get In Touch
        </h1>
        <p className='my-3 text-lg md:mb-2 md:px-0'>
          Contact me directly by email or phone or fill out the form below, and
          I'll get back to you promptly.
        </p>
        <a
          href='tel:8582327090'
          className='flex items-center w-full my-5 hover:opacity-50'
        >
          <i className='grid mr-3 text-lg text-white bg-yellow-600 rounded-full w-9 h-9 fal fa-phone-alt place-items-center'></i>{' '}
          (858) 232-7090
        </a>
        <a
          href='mailto:jordanesguerra93@gmail.com'
          className='flex items-center w-full my-5 hover:opacity-50'
        >
          <i className='grid mr-3 text-lg text-white bg-yellow-600 rounded-full w-9 h-9 fal fa-envelope place-items-center'></i>{' '}
          jordanesguerra93@gmail.com
        </a>
      </div>
      <div className='w-full px-5 py-10 md:py-20 md:px-24 md:w-2/4'>
        {success ? (
          <p className='grid my-2 text-2xl font-medium text-yellow-600 place-items-center h-96'>
            {response}
          </p>
        ) : (
          <form className='flex flex-col' onSubmit={sendMessage}>
            <label htmlFor='name' className='hidden'>
              Name
            </label>
            {error?.name && (
              <p className='text-xl font-medium text-red-800 '>{error.name}</p>
            )}
            <input
              id='name'
              type='text'
              name='name'
              autoComplete='name'
              aria-required='true'
              className={classNames(
                'p-2 pl-3 mb-3 text-xl border-2 border-gray-400 rounded-md h-14 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent',
                {
                  'border-red-800': success === false,
                }
              )}
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor='email' className='hidden'>
              Email
            </label>
            {error?.email && (
              <p className='text-xl font-medium text-red-800 '>{error.email}</p>
            )}
            <input
              id='email'
              type='text'
              name='email'
              autoComplete='email'
              className={classNames(
                'p-2 pl-3 mb-3 text-xl border-2 border-gray-400 rounded-md h-14 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent',
                {
                  'border-red-800': success === false,
                }
              )}
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor='phone' className='hidden'>
              Phone
            </label>
            {error?.phone && (
              <p className='text-xl font-medium text-red-800 '>{error.phone}</p>
            )}
            <input
              id='phone'
              type='tel'
              name='tel'
              className={classNames(
                'p-2 pl-3 mb-3 text-xl border-2 border-gray-400 rounded-md h-14 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent',
                {
                  'border-red-800': success === false,
                }
              )}
              placeholder='Phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label htmlFor='message' className='hidden'>
              Message
            </label>
            {error?.message && (
              <p className='text-xl font-medium text-red-800 '>
                {error.message}
              </p>
            )}
            <textarea
              id='message'
              cols='30'
              rows='8'
              placeholder='Message'
              className={classNames(
                'p-2 pl-3 mb-3 text-xl border-2 border-gray-400 rounded-md  focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent h-40',
                {
                  'border-red-800': success === false,
                }
              )}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <input
              type='submit'
              name='submit'
              value='Send Message'
              className='flex items-center justify-center w-2/5 px-20 text-lg text-white bg-yellow-600 border-2 border-yellow-600 rounded-full cursor-pointer hover:bg-transparent hover:border-yellow-600 h-14 hover:text-gray-800 focus:ring-2 focus:outline-none focus:ring-yellow-600 focus:border-transparent'
            />
          </form>
        )}
      </div>
    </section>
  )
}

export default Contact
