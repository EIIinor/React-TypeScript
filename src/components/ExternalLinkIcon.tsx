import React from 'react'

interface IProps {
  link: string
  icon: string
}

const ExternalLinkIcon: React.FC<IProps> = ( {link, icon} ) => {
  return (
    <a href= { link } target="_blank" >
        <i className= { icon } ></i>
    </a>
  )
}

export default ExternalLinkIcon
