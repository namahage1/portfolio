import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const Contact = () => {
  // the different state variables
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [textMsg, setTextMsg] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'subject') {
      setSubject(inputValue);
    } else {
      setTextMsg(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();
    
    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      submitHandler(e,'email',"");
      return;
    }
    if(fullName == "") {
      setErrorMessage('Full name cannot be empty!');
      submitHandler(e,'name',fullName);
      return;
    }
    if(subject == "") {
      setErrorMessage('fill in the Subject field');
      submitHandler(e,'subject',subject);
      return;
    }
    if(textMsg == "") {
      setErrorMessage('fill in the text field');
      submitHandler(e,'message',textMsg);
      return;
    }
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setFullName('');
    setTextMsg('');
    setSubject('');
    setEmail('');
    setErrorMessage('');

    hideAllWarnings();
  };

//additional error message on each field
  function submitHandler(event,element,value) {

    if(value == "") {
      document.querySelector("#warning-"+`${element}`).classList.remove("hidden")
    } else {
      document.querySelector("#"+`${element}`).classList.add("hidden")
    }
  }
  const hideAllWarnings = () => {
    document.querySelectorAll('.warning').forEach(el => {
      el.classList.add("hidden");
    });
  };
  return (
    <>
      <div className="container flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleFormSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={fullName}
                onChange={function(event){
                  setFullName(event.target.value)
                }}
                onBlur={function(){
                  if(fullName == "") {
                    document.querySelector("#warning-name").classList.remove("hidden")
                  } else {
                    document.querySelector("#warning-name").classList.add("hidden")
                  }
                }}
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              <p id="warning-name" className="text-red-400 hidden">Full name cannot be empty!</p>
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleInputChange}
                onBlur={function(){
                  if(email == "") {
                    document.querySelector("#warning-email").classList.remove("hidden")
                  } else {
                    document.querySelector("#warning-email").classList.add("hidden")
                  }
                }}
                placeholder="example@domain.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              <p id="warning-email" className="warning text-red-400 hidden">Invalid Email!</p>
            </div>
            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Subject
              </label>
              <input 
                type="text"
                name="subject"
                id="subject"
                value={subject}
                onChange={handleInputChange}
                onBlur={function(){
                  if(subject == "") {
                    document.querySelector("#warning-subject").classList.remove("hidden")
                  } else {
                    document.querySelector("#warning-subject").classList.add("hidden")
                  }
                }}
                placeholder="Enter your subject"
                className=" w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
              <p id="warning-subject" className="warning text-red-400 hidden">Enter theSubject!</p>
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="warning mb-3 block text-base font-medium text-[#07074D]"
              >
                Message
              </label>
              <textarea
                rows="4"
                name="textMsg"
                id="message"
                value={textMsg}
                onChange={handleInputChange}
                onBlur={function(){
                  if(textMsg == "") {
                    document.querySelector("#warning-message").classList.remove("hidden")
                  } else {
                    document.querySelector("#warning-message").classList.add("hidden")
                  }
                }}
                placeholder="Type your message"
                className=" w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
              <p id="warning-message" className="warning text-red-400 hidden">Enter the message!</p>
            </div>
            <div>
              <button
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
          {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
        </div>
      </div>
    </>
  );
};

export default Contact ;
