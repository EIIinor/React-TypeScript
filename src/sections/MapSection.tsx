import React from 'react'


const MapSection: React.FC = () => {
  return (
    <iframe 
      className='map'
      title='google-map'
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17939.074611463086!2d15.851189693585885!3d61.796394874240576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssv!2sse!4v1666682636825!5m2!1ssv!2sse" 
      allowFullScreen={true}
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
    </iframe>
  )
}

export default MapSection