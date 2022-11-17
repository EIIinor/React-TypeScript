import React from 'react'

interface ILinkIconProps {
  link: string
  icon: string
}

const ExternalLinkIcon: React.FC<ILinkIconProps> = ( {link, icon} ) => {
  return (
    <a href= { link } target="_blank" >
        <i className= { icon } ></i>
    </a>
  )
}

export default ExternalLinkIcon
