import React from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import { useForm } from "react-hook-form";
import { useState, useEffect, useRef } from 'react';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = ({ showcontact, setshowcontact }) => {
  const contactRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (contactRef.current && !contactRef.current.contains(event.target)) {
        setshowcontact(false);
      }
    };

    if (showcontact) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showcontact]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      toast.dismiss();
      const response = await fetch('http://localhost:8000/api/User', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Message Sent Successfully", { autoClose: 3000 });
        setshowcontact(false);
      } else {
        toast.error("Submission Failed!", { autoClose: 3000 });
      }
    } catch (error) {
      toast.error("Error submitting form!", { autoClose: 3000 });
    }
  };

  return (
    <div className='home'>
      <div className='BackgroundNoise_noise__8TyGc'></div>
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        closeOnClick 
        pauseOnHover 
        draggable 
        closeButton 
      />
      <div ref={contactRef} style={{ visibility: showcontact ? "visible" : "hidden" }} className='contactcard'>
        <div className='cc1'>Contact</div>
        <form className='cc2' onSubmit={handleSubmit(onSubmit)}> 
          <div style={{ color: "white", marginBottom: "7px" }}>Name</div>
          <input
            className='username'
            placeholder='Name' 
            type='text'
            {...register("Name", {
              required: { value: true, message: "This field is mandatory" },
              minLength: { value: 5, message: "Min Length should be 5" },
              maxLength: { value: 20, message: "Max Length should be 20" }
            })}
          />
          {errors.Name && <div>{errors.Name.message}</div>}
          <div style={{ color: "white", marginBottom: "7px" }}>Mail</div>
          <input
            className='username'
            placeholder='Email'
            type='text'
            {...register("Email", {
              required: { value: true, message: "Email is required" },
              minLength: { value: 6, message: "Min Length should be 6" }
            })}
          />
          {errors.Email && <div>{errors.Email.message}</div>}
          <div style={{ color: "white", marginBottom: "7px" }}>Message</div>
          <textarea
            className='message1'
            placeholder='Message'
            type='text'
            {...register("Message", {
              required: { value: true, message: "Message is required" },
              minLength: { value: 6, message: "Min Length should be 6" }
            })}
          />
          {errors.Message && <div>{errors.Message.message}</div>}
          <input className='submitbtn' disabled={isSubmitting} type='submit' value="Submit" />
        </form>
      </div>
      <Page1 showcontact={showcontact} setshowcontact={setshowcontact} />
      <Page2 />
      <Page3 />
      <Page4 />
    </div>
  );
};

export default Home;
