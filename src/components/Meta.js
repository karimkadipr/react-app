import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keyword }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keyword' content={keyword} />
      </Helmet>
    </div>
  )
}
Meta.defaultProps = {
  title: 'Welcome to my Portfolio',
  description: 'best Portfolio',
  keyword: 'best Portfolio',
}

export default Meta
