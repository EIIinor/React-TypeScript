import React, { useState } from 'react'



const ContactFormSection= () => {
    let currentPage = "Contact Us"
    document.title = `${currentPage} || Fixxo` 

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [comments, setComments] = useState('')
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e: any) => {
        const {id, value} = e.target

        switch(id) {
            case 'name':
                setName(value)
                break
            case 'email':
                setEmail(value)
                break
            case 'comments':
                setComments(value)
                break
        }

        setErrors({...errors, [id]: validate(e, null)})
    }




    const handleSubmit= (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setErrors(validate(e, {name, email, comments}))

        if (errors!.name === null && errors.email === null && errors.comments === null) {

            let json = JSON.stringify({name, email, comments})

            setName('')
            setEmail('')
            setComments('')
            setErrors({})


            fetch('https://win22-webapi.azurewebsites.net/api/contactform', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: json
            })
            .then(res => {
                if (res.status === 200) {
                    setSubmitted(true)
                }
                else {
                    setSubmitted(false)
                }
            })

        } else {
            setSubmitted(false)
        }
    }

    return (
        <section className="contact-form">
            <div className="container">

                {
                    submitted ? (
                    <div className="alert alert-success text-center mb-5" role="alert">
                        <h3>Thank you for your comments</h3> 
                        <p>We will contact you as soon as possible.</p>
                        </div>  ) : (<></>)
                }
            

                <h2>Come in Contact with Us</h2>
                <form onSubmit={handleSubmit} noValidate>
                    <div>
                        <input id="name" className={(errors?.name? 'error': '')} value={name} onChange={handleChange} type="text" placeholder="Your Name" />
                        <div className="errorMessage">{errors?.name}</div>
                    </div>
                    <div>
                        <input id="email" className={(errors?.email? 'error': '')} value={email} onChange={handleChange} type="email" placeholder="Your Mail" />
                        <div className="errorMessage">{errors?.email}</div>
                    </div>
                    <div className="textarea">
                        <textarea id="comments" className={(errors?.comments? 'error': '')} style={(errors.comments? {border: '1px solid #FF7373'}: {} )} value={comments} onChange={handleChange} placeholder="Comments"></textarea>
                        <div className="errorMessage">{errors?.comments}</div>
                    </div>
                    <div className="formBtn">
                        <button type="submit" className="btn-theme">Post Comments</button>
                    </div>
                </form>
            </div>
        </section>
    )
}


interface IForm {
    name: string
    email: string
    comments: string
}

interface IErrors {
    comments: string | null
    name: string | null
    email: string | null

}

const validate = (e: any, form: IForm | null) => {
    if (e.type === 'submit') {
        const errors : IErrors = {name: null, email: null, comments: null}
        errors.name = validate_name(form!.name)
        errors.email = validate_email(form!.email)
        errors.comments = validate_comments(form!.comments)
        return errors
    
        } else {
            const {id, value} = e.target
            switch(id) {
                case 'name':
                    return validate_name(value)
                case 'email':
                    return validate_email(value)
                case 'comments':
                    return validate_comments(value)
            }
    }
}
    
    const validate_name = (value: string) => {
        const regex_name = /^[A-Za-z]+$/

        if (!value)
            return 'Tell us your name please'
        else if (value.length < 2)
            return 'Too short darling, minimum two characters'
        else if (value.length > 15)
            return 'Damn that is a long name, maximum 15 characters'
        else if (!regex_name.test(value))
            return 'Ony letters in your name, thank u'
        else
            return null
    }

    const validate_email = (value: string) => {
        const regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
        if (!value)
            return "We need your e-mail address, don't be shy"
        else if (!regex_email.test(value))
            return 'You must enter a valid e-mail address (eg. name@domain.com)'
        else
            return null
    }
    
    const validate_comments = (value: string) => {
        if (!value)
            return 'Leave a comment would you'
        else if (value.length < 5)
            return 'Give us at least five characters please'
        else if (value.length > 300)
            return "That is too long, ain't nobody got time for that, maximum 300 characters"
        else
            return null
    }



export default ContactFormSection