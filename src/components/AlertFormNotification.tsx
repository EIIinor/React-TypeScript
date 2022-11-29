import React from 'react'

interface IAlertFormNotificationProps {
    alertType: string
    title: string
    text: string
}


const AlertFormNotification: React.FC<IAlertFormNotificationProps> = ({ alertType = "warning", title, text }) => {
  return (
    <div className={'alert alert-${alertType} text-center'} role='alert'>
        <h3>{title}</h3>
        <p>{text}</p>
    </div>
  )
}

export default AlertFormNotification