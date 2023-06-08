import Image from 'next/image'
import { Inter } from 'next/font/google'
import React, { useState } from 'react';
import SearchInput from '../components/SearchInput';
import ChatNames from '../components/ChatNames';
import MessageForm from '../components/[MessageForm]';
import {GiProtectionGlasses} from "react-icons/gi";
import {LuPhoneCall} from "react-icons/lu";
import {BsCameraVideo} from "react-icons/bs";
import {GrNotification} from "react-icons/gr";
import {AiOutlineQuestionCircle} from "react-icons/ai";
import {BsArrowBarRight} from "react-icons/bs";
import {AiOutlineSend} from "react-icons/ai";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // Perform search or filtering logic here
  };
  return (
    <main >
      <div className='left_bar '>
        <div className='flex'>
      <Image src='/logo.svg' alt="SVG Image" width={100} height={100} />
      <span className='mt-[2rem] text-[#2B4360]
'>D-TREAT</span>
      </div>
      </div>
     <div className='top_bar'>
      <div className='ml-[4rem] flex'>
     <SearchInput onChange={handleSearchChange} />
     <div className='ml-[50rem] flex  space-around text-[#959ACB] '>
     <GrNotification className=' w-[3vh] h-[3vh] ml-[2rem] border rounded-[1rem]'/>
     <AiOutlineQuestionCircle className='w-[3vh] h-[3vh] ml-[2rem] border rounded-[1rem]'/>
     <BsArrowBarRight  className='w-[3vh] h-[3vh] ml-[2rem] border rounded-[1rem]'/>
     </div>
     </div>
     </div>
     <div className='chat_bar'>
      <SearchInput onChange={handleSearchChange} />
     <ChatNames />
     </div>
    <div className='online_person flex ml-[5rem] '>
      <div>
    <span className='font-bold'>Case Planompia</span> <br></br>
<span className='mr-[2rem]'>Online  -  Dr.Jeremy , Dr.Angelie</span>
</div>
<div className='flex ml-[20rem]'>
 <div className='border h-[3rem] p-[10px] rounded-[2rem]'>
  <GiProtectionGlasses  className='glasses text-[#959ACB]  w-[4vh] h-[4vh]'/>
  </div>
  <div  className='border h-[3rem] p-[10px] rounded-[3rem] ml-[2rem]' >
  <BsCameraVideo className='video text-[#959ACB] w-[4vh] h-[4vh]  '/>
  </div>
  <div  className='border h-[3rem] p-[5px] rounded-[3rem] ml-[2rem]'>
<LuPhoneCall className='call text-[#959ACB] w-[4vh] h-[4vh] '/>
</div>
</div>


    </div>
     <MessageForm />
     <div className='send_message font-light mt-[2rem] flex'>
     <button type="submit text-black">Send Message</button>
     <div className='icons ml-[40rem] flex'>
     <Image src='icon.svg' alt='svg Image' width={20} height={20}/>
     <Image src='icon2.svg' alt='svg Image' width={20} height={20} className='ml-[0.5rem]'/>

     <AiOutlineSend className='bg-[#F4A28C] text-[#FFFFFF] rounded-[1px] mt-[2rem] ml-[1rem] w-[2rem] h-[2rem]  '/>
     </div>
      </div>

    </main>
  )
}
