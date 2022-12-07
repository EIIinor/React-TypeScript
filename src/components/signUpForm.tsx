import React from 'react'

const handleSignUp = async (e:any) => {
    e.preventDefault()

    const user = {
        firstName: e.target[0].value,
        lastName: e.target[1].value,
        email: e.target[2].value,
        password: e.target[3].value
    }
    const result = await fetch('http://localhost:1234/api/authentication/signup', {
    method: 'post',
    headers: {
        'content-Type': 'application/json'
    },
    body: JSON.stringify(user)
    })
    const data = await result.json()
    console.log(data)
    
}

const signUpForm: React.FC = () => {
  return (
    <div className='container'>
        <form onSubmit={handleSignUp}>
            <input type="text" className="form-controle" placeholder='Ange förnamn'/>
            <input type="text" className="form-controle" placeholder='Ange efternamn'/>
            <input type="text" className="form-controle" placeholder='Ange e-postadress'/>
            <input type="text" className="form-controle" placeholder='Ange lösenord'/>
            <button type="submit" className='btn btn-theme'>REGISTRERA</button>
        </form>
    </div>
  )
}

export default signUpForm