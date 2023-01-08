import React from "react";
import './ContactForm.css';
import Section from "./Section";

const ContactForm = (
    {
        save = (value) => {
            return value;
        }
    }
) => {

const ValidateEmail = (mail) =>
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}

    const getFormData = (code) => {
        
       if(code === 1)
       {
            const Name = document.getElementById("Name")
            const Mail = document.getElementById("Email")
            const Message = document.getElementById("Message")

            if(!Name.value)
            {
                alert("You have to enter a name");
            }

            if(!Message.value)
            {
                alert("You have to enter a Message");
            }

            const isValid = ValidateEmail(Mail);
            
            if(isValid && Name.value && Message.value)
            {
                save(code);
            }

       }
   
    }

    const Send = () => {
        let code = 1;
        getFormData(code);
    }

    const Cancel = () => {
        let code = 2;
        save(code);
        alert("The form was cancel");
    }

    return(
        <div className="ContactFormContainer">
            
            <div className="ContactForm-Info">
                <Section name={"Contact"} /> 
                <form>
                    <div className="Name fields">
                        <label htmlFor="Name">Name </label>
                        <input  id="Name">
                        </input>
                    </div>
                    <div className="Email fields">
                        <label htmlFor="Email">Email </label>
                        <input type="email" id="Email">
                        </input>
                    </div>
                    <div className="Message fields">
                        <label htmlFor="Message">Message </label>
                        <textarea id="Message" type="text"></textarea>
                    </div>
                </form>
                <div className="Submit">
                    <button  onClick={()=> Send()} className="ButtoSave" type="submit">
                        Send
                    </button>
                    <button onClick={()=> Cancel()}className="ButonCancel" type="button">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;