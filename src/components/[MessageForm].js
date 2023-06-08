import React, { useState } from 'react';

const MessageForm = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the message to the server or perform any desired action
    console.log('Message sent:', message);
    // Clear the input field after submitting the message
    setMessage('');
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
       <div className='chat '>
       <div className='x-ray text-[#FFFFFF]'>
       That is how it looks, it looks normal to me but the patient claims having body ache.
      <div className='inner_x-ray '></div>
    
     </div>
     <div className='local_doctor bg-[#2B4360] w-[300px] text-[#FFFFFF] rounded-[1rem] ml-[32rem] mt-[5rem] text-[13px] p-[1rem]'>
     Morning Dr. Angelie, The patient is not feeling well and I can’t figure out the problem.
     </div>
     <div className='abroad_doctor bg-[#FFFFFF] w-[300px] text-[black] border rounded-[1rem] mt-[5rem] text-[13px] p-[1rem]'>
     Morning Dr. Angelie, The patient is not feeling well and I can’t figure out the problem.
     </div>
     <div className='abroad_doctor bg-[#FFFFFF] w-[300px] text-[black] border rounded-[1rem] mt-[12rem] text-[13px] p-[1rem]'>
     Morning Dr. Angelie, The patient is not feeling well and I can’t figure out the problem.
     </div>
     <div className='today text-[#FFFFFF]  center'>Today</div>
  </div>
   
    </form>
  );
};

export default MessageForm;

