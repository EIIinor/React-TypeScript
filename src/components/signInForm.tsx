import React from 'react'

const handleSignIn = async (e:any) => {
    e.preventDefault()

    const user = {
        email: e.target[0].value,
        password: e.target[1].value
    }
    const result = await fetch('http://localhost:1234/api/authentication/signin', {
    method: 'post',
    headers: {
        'content-Type': 'application/json'
    },
    body: JSON.stringify(user)
    })
    const data = await result.json()
    console.log(data.accessToken)
    localStorage.setItem('accessToken', data.accessToken)
    
}

const signInForm: React.FC = () => {
  return (
    <div className='container'>
        <form onSubmit={handleSignIn}>
            <input type="text" className="form-controle" placeholder='Ange e-postadress'/>
            <input type="text" className="form-controle" placeholder='Ange lösenord'/>
            <button type="submit" className='btn btn-theme'>SIGN IN</button>
        </form>
    </div>
  )
}

export default signInForm