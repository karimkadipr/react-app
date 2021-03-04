import React, { useEffect, useState } from 'react'
import './styles/EmailForm.css'
import { Input, InputLabel, FormControl } from '@material-ui/core'
import Aos from 'aos'
import 'aos/dist/aos.css'
import emailjs from 'emailjs-com'

function EmailForm() {
  const [emailChecker, setEmailChecker] = useState(false)
  const [errorChecker, setErrorChecker] = useState(false)

  useEffect(() => {
    if (emailChecker) {
      setTimeout(() => {
        setEmailChecker(false)
      }, 4000)
    }

    if (errorChecker) {
      setTimeout(() => {
        setErrorChecker(false)
      }, 4000)
    }
  }, [emailChecker, errorChecker])

  useEffect(() => {
    Aos.init({})
  }, [])

  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        'karimus',
        'template_ggok7mh',
        e.target,
        'user_ga54M4v4eVB9dBHTDHQi6'
      )
      .then(
        (result) => {
          setEmailChecker(true)
        },
        (error) => {
          setErrorChecker(true)
        }
      )
    e.target.reset()
  }

  return (
    <div
      id='contact'
      className='EmailForm'
      data-aos-once='true'
      data-aos='fade-up'
      data-aos-duration='1000'>
      <h1>Get in touch</h1>
      <hr style={{ width: 50 }} />

      <form onSubmit={sendEmail} className='email'>
        <div className='name'>
          <div className='name_holder'>
            <FormControl fullWidth={true}>
              <InputLabel>First Name</InputLabel>
              <Input
                required
                name='FirstName'
                type='text'
                placeholder='Enter your First Name'
              />
            </FormControl>
          </div>
          <div className='name_holder'>
            <FormControl fullWidth={true}>
              <InputLabel>Last Name</InputLabel>
              <Input
                required
                name='LastName'
                type='text'
                placeholder='Enter your Last Name'
              />
            </FormControl>
          </div>
        </div>{' '}
        <div className='input2' style={{ paddingBottom: '2rem' }}>
          <FormControl fullWidth={true}>
            <InputLabel>Email</InputLabel>
            <Input
              required
              type='email'
              multiline={true}
              name='Email'
              placeholder='Enter your Email'
            />
          </FormControl>
        </div>
        <div className='input2'>
          <FormControl fullWidth={true}>
            <InputLabel>Comments</InputLabel>
            <Input
              required
              type='text'
              multiline={true}
              name='Comments'
              placeholder='Enter your comments'
            />
          </FormControl>
        </div>
        {emailChecker && (
          <div className='success_message'>
            {' '}
            Success , your email has been sent!
          </div>
        )}
        {errorChecker && (
          <div className='warn_message'>Oops , an error occured !</div>
        )}
        <div className='btn_container'>
          <button className='submit_email_btn'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default EmailForm
