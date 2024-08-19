'use client';
import React from 'react';
import Image from 'next/image';
import YoutubeImage from '../../public/images/explorecollections4.png';
import Logo from '../../public/images/Vector.png';
import AboutOurServiceImg1 from '../../public/images/aboutourstory1.jpg';
import AboutOurServiceImg2 from '../../public/images/aboutourstory2.jpg';
import AboutOurServiceImg3 from '../../public/images/aboutourstory3.jpg';
import CEO from '../../public/images/ceo.png';
import one from '../../public/images/01.png';
import two from '../../public/images/02.png';
import three from '../../public/images/03.png';
import AboutMeetOurTeam1 from '../../public/images/aboutmeetourteam1.png'
import AboutMeetOurTeam2 from '../../public/images/aboutmeetourteam2.png'
import AboutMeetOurTeam3 from '../../public/images/aboutmeetourteam3.png'

const About = () => {
  return (
    <div>
        
      <div>
        <div className='w-[90%] mx-auto mt-14 mb-10'>
            <Image src={YoutubeImage} alt='YoutubeImage' priority className='w-[100%]'/>
        </div>

        <div className='w-[90%] mx-auto grid md:grid-cols-3 justify-between items-center gap-7 mb-7'>
          <div className=' flex letterspacing items-center text-[15px] md:text-[16px] cursor-pointer'>
            <span onClick={() => router.push('/')}>SERENE </span>
            <Image src={Logo} priority alt='Logo' onClick={() => router.push('/')} />
            <span className='text-[#FB7902] mx-1' onClick={() => router.push('/')}> BEAUTY</span>
          </div>

        <h2 className='md:text-[20px] text-[18px] font-medium'>If It Makes You Feel <span className='text-[#FB7902]'>Beautiful</span>, <br /> Then <span className='text-[#FB7902]'>Do It</span>.</h2>
        <p className='text-[#4A4A4A]'>Life inside our beauty salon is never a dull moment, and the enthusiasm of wanting to satisfy our customers keeps all of us united.</p>

        </div>
      </div>


      <div className='my-7 w-[90%] mx-auto text-center'>

        <h1 className='md:text-[30px] text-[25px] mb-7 mt-14 font-medium'>Our <span className='text-[#FB7902]'>Story</span></h1>
        <p className='text-[#4A4A4A] my-10'>Since 2012 in a charming Hawaii Town, Serene Beauty emerged as a haven for beauty and tranquility. Founded by Sarah, a passionate hairstylist, the salons simple yet profound vision was to enhance natural beauty while providing a peaceful escape.</p>
        <p className='text-[#4A4A4A] my-10'>With time, Serene Beautys dedicated team grew, offering a range of services from esthetics to makeup. It became a beloved part of the community, known for its serene ambiance and commitment to giving back through charity events.</p>

        <div className=' grid md:grid-cols-3 grid-cols-1 justify-between items-center gap-5'>
          <Image src={AboutOurServiceImg1} alt='AboutOurServiceImg1' priority/>
          <Image src={AboutOurServiceImg2} alt='AboutOurServiceImg2' priority/>
          <Image src={AboutOurServiceImg3} alt='AboutOurServiceImg3' priority/>
        </div>
      </div>


      <div className='grid md:grid-cols-2 grid-cols-1 justify-between items-center lg:items-start w-[90%] mx-auto my-14'>
        <Image src={CEO} alt='CEO' className='md:w-[80%] lg:w-[70%]' priority/>
        
        <div>
          <h1 className='mb-5 mt-5 md:mt-0 text-[#4A4A4A]'>THE LADY OF THE HOUR (CEO)</h1>
          <h1 className='md:text-[30px] text-[20px] mb-5 font-medium'>Sarah Johnson</h1>
          <p className='text-[#4A4A4A] mb-5'>Meet Sarah, a visionary hairstylist with a passion for beauty and a heart full of dreams. As the owner of Serene Beauty, her journey unfolds in the enchanting world of tranquil transformations.</p>

 
          <div className='my-7'>
            <div className='flex justify-center items-start my-5 gap-5'>
              <Image src={one} alt='one' priority/>
              <div>
                <h2 className='text-[18px] font-semibold'>Master Stylist of the Year:</h2>
                <p className='text-[#4A4A4A]'>Sarahs exceptional talent and dedication to her craft earned her the prestigious title of Master Stylist of the Year at the National Beauty Excellence Awards.</p>
              </div>
            </div>


            <div className='flex justify-center items-start my-5 gap-5'>
              <Image src={two} alt='two'/>
              <div>
                <h2 className='text-[18px] font-semibold'>Community Impact Award:</h2>
                <p className='text-[#4A4A4A]'>Recognized for her commitment to giving back, Sarah received the Community Impact Award for her charitable work and contributions to local causes through Serene Beauty.</p>
              </div>
            </div>

            <div className='flex justify-center items-start my-5 gap-5'>
              <Image src={three} alt='three' priority/>
              <div>
                <h2 className='text-[18px] font-semibold'>Green Beauty Innovator:</h2>
                <p className='text-[#4A4A4A]'>Sarahs commitment to eco-friendly and sustainable beauty practices was acknowledged with the Green Beauty Innovator award</p>
              </div>
            </div>


          </div>

        </div>
      </div>


      <div className='w-[90%] mx-auto'>
        <h1 className='text-[25px] font-medium'>Meet <span className='text-[#FB7902]'>Our Team</span></h1>
        <div className='my-10 grid md:grid-cols-[80%_20%]  items-center justify-between'>
                <div >
                    <h1 className='text-[#4A4A4A]'>Allow me to introduce you to the talented individuals who make Serene Beauty <br /> the extraordinary place it is.</h1>
                </div>
                <div>
                <button className='ml-0 bg-[#000] text-white text-center flex py-2 px-6 mt-5 md:mt-0 rounded-sm md:mx-auto '>Explore All Team</button>
                </div>
        </div>


        <div className='my-8 grid md:grid-cols-3 sm:gap-5'>
            <div className='my-5 md:my-0'>
                <Image src={AboutMeetOurTeam1} alt='AboutMeetOurTeam1' className='w-[100%] mx-auto' priority/>
                <h1 className='text-2xl my-2 font-medium'>James Ethan</h1>
                <p className='my-3 text-[#4A4A4A]'>James is the serene soul behind Serene Beautys spa and wellness offerings. With a wealth of experience in esthetics and...</p>
                <p className='text-[#FB7902] cursor-pointer'>Read More &rarr;</p>
            </div>

            <div className='my-5 md:my-0'>
                <Image src={AboutMeetOurTeam2} alt='AboutMeetOurTeam2' className='w-[100%] mx-auto' priority/>
                <h1 className='text-2xl my-2 font-medium'>Cynthia Makafui</h1>
                <p className='my-3 text-[#4A4A4A]'>Cynthia is the visionary artist responsible for the salons stunning makeup transformations. Her creativity knows...</p>
                <p className='text-[#FB7902] cursor-pointer'>Read More &rarr;</p>
            </div>

            <div className='my-5 md:my-0'>
                <Image src={AboutMeetOurTeam3} alt='AboutMeetOurTeam3' className='w-[100%] mx-auto' priority/>
                <h1 className='text-2xl my-2 font-medium'>Angela Goodwill</h1>
                <p className='my-3 text-[#4A4A4A]'>Angela is the nail guru who turns manicures and pedicures into works of art. Her meticulous attention to detail and...</p>
                <p className='text-[#FB7902] cursor-pointer'>Read More &rarr;</p>
            </div>
        </div>

        </div>

    </div>
  )
}

export default About
