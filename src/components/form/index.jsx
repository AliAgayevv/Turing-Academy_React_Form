import { useState } from "react"

export default function Form()
{

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")


    function handleNameChange(e)
    {
        setName(e.target.value)
    }
    
    function handleEmailChange(e)
    {
        setEmail(e.target.value)
    }

    function handleMessageChange(e)
    {
        setMessage(e.target.value)
    }

    function handleSubmit(e)
    {
        e.preventDefault()
        alert(`Name: ${name} \nEmail: ${email}\nMessage: ${message}`)
    }
    return(
        <div id="form-section">
            <form>
                <label className="form-section--label">Name:
                    <input onChange={handleNameChange} className="form-section--input" type="text" value={name}/>
                </label>
                <label className="form-section--label">Email:
                    <input onChange={handleEmailChange} className="form-section--input" type="email" value={email}/>
                </label>
                <label className="form-section--label">Message:
                    <textarea id="form-section--text-area" onChange={handleMessageChange} value={message}/>
                </label>

                <button type="submit" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
        </div>
    )
}