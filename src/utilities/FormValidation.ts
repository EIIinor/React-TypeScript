export const validate_name = (elementName:string, value:string, minLength:number = 2) => {
    if (value.length == 0)
        return `Tell us your ${elementName} please`
    else if (value.length < minLength)
        return ` ${elementName} too short darling, give us at least ${minLength} characters`
    else   
        return ''
}

export const validate_comments = (elementName:string, value:string, minLength:number = 5 , maxLength: number = 300) => {
    if (value.length == 0)
        return `Leave a ${elementName} would you`
    else if (value.length < minLength)
        return ` ${elementName} too short darling, give us at least ${minLength} characters`
    else if (value.length > maxLength)
        return ` Oh my, ${elementName} too long, maximum ${maxLength} characters`
    else   
        return ''
}

export const validate_email = (elementName:string, value:string, regEx:RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ) => {
    if (value.length == 0)
        return `We need your ${elementName} address, don't be shy`
    else if (!regEx.test(value))
        return `You must enter a valid ${elementName} address (eg. name@domain.com)`
    else
        return ''
}
