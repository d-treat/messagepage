import React from 'react';

const ChatNames = () => {
  const divData = ['Angela : Thank you very much. I’m glad ...','lYou : Sure! let me tell you about w…',
'Dr.Jeremy : Thank’s. You are very helpful...s','You : Sure! let me teach you about  ...','Is there anything I can help? Just ...','You : Sure! let me share about...','Okay. I know very well about it...']; // Data for the repeated divs

  return (
    <div>
      {divData.map((data, index) => (
        <div  className= ' chatnames mt-[0.5rem] hover:bg-[#F5F5F7] border-b p-[1.5rem] font-thin'  key={index}><span className='name font-semibold'>lois</span><span className='float-right text-[10px]'>1 m Ago</span><br></br>{data}</div>
      ))}
    </div>
  );
};

export default ChatNames;