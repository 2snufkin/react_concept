import {useState} from "react";

function EmailComp() {
    const [formData, setFormData] = useState({
        email: ''
    });
    console.log(formData.email.includes("@"))
 const warning = !formData.email.includes("@") ? <p> opsss</p> : null
    console.log(warning)
    const checkEmail = (event) => {
        event.preventDefault()
        const emailInput = event.target[0].value;
        setFormData({
            email: emailInput
        })
        console.log(formData.email)
    }

    return (
        <form onSubmit={checkEmail}>
            <label>Your Email</label>
            <input type="text"/>
            <button type="submit">Submit</button>
            <div>
                {warning}

            </div>
        </form>


    )


}

export default EmailComp