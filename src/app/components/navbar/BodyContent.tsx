'use client'

import React from 'react'
import Container from '../Container';
import Image from 'next/image';
import useRegisterModal from '@/app/hooks/useRegisterModal';

export const BodyContent = () => {
    const registerModal = useRegisterModal();
    return (
    <Container>
        <div 
        className='
        flex
        flex-col
        justify-between
        items-center
        mt-10
        gap-12
        text-center
        '>
             <div className=" text-gray-700  text-[30px] md:text-[55px] lg:text-[70px] font-bold font-sans ">
            Discover Morocco with US
            </div> 
            <div className='flex flex-row justify-between items-center mt-7'>
                <div 
                    className='
                     flex flex-col justify-between items-center gap-3'>
                    <Image
                        alt='home icon'
                        className='md:block'
                        height={45}
                        width={45}
                        src='/../public/icons8-smart-home-checked-48.png'
                    />
                    <div className='font-bold text-[11px] md:text-lg lg:text-[xl]'>
                        Vacation Homes
                    </div>
                    <div className='indent-10 text-[10px] md:text-sm lg:text-[15px]'>
                    Morbi purus nibh non purus, eu felis, porttitor. Viverra volutpat,
                    lorem metus, eu.
                    </div>
                </div>
                <div 
                    className='
                     flex flex-col justify-between items-center gap-3 max-w-sm'>
                    <Image
                        alt='condos icon'
                        className='md:block '
                        height={45}
                        width={45}
                        src='/../public/icons8-building-with-rooftop-terrace-48.png'
                    />
                    <div className='font-bold text-[11px] md:text-lg lg:text-[xl]'>
                        Condos
                    </div>
                    <div className='indent-10 text-[10px] md:text-sm lg:text-[15px]'>
                    Morbi purus nibh non purus, eu felis, porttitor. Viverra volutpat,
                    lorem metus, eu.
                    </div>
                </div>
                <div 
                    className='
                     flex flex-col justify-between items-center gap-3 '>
                    <Image
                        alt='traveler icon'
                        className='md:block'
                        height={45}
                        width={45}
                        src='/../public/icons8-traveler-50.png'
                    />
                    <div className='font-bold text-[11px] md:text-lg lg:text-[xl]'>
                        Traveling Options
                    </div>
                    <div className='indent-10 text-[10px] md:text-sm lg:text-[15px]'>
                    Morbi purus nibh non purus, eu felis, porttitor. Viverra volutpat,
                    lorem metus, eu.
                    </div>
                </div>
            </div>
            <div className='
                flex flex-col justify-between items-center gap-4 text-left w-70 mt-10'>
                    
                <div  className="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-4xl dark:bg-white gap-6">
                    <Image className="object-cover w-400  h-400 md:h-auto md:rounded-none md:rounded-l-lg" src="/../public/group-68.png" alt="marrakesh" width={400} height={400}/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-[30px] md:text-[45px] lg:text-6xl   font-bold tracking-tight text-gray-700">See Marrackesh and
                        its architectural wonders</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Nunc ullamcorper faucibus eu nullam at. Blandit sed vel dolor tortor
                            ultrices risus mattis faucibus eu. Massa sit aliquet diam nullam sed
                            ipsum. Dignissim lacus ac amet egestas.</p>
                        <a href=""></a>
                    </div>
                </div>
            </div>
            <div className='
                flex flex-col justify-between items-center gap-4 text-left w-65 mb-3'>
                     <div  className="flex lg:flex-row-reverse md:flex-row-reverse sm:flex-row items-center bg-white rounded-lg  md:max-w-4xl dark:bg-white gap-6">
                    <Image className="object-cover w-[400px] h-[400px] md:h-auto md:rounded-none md:rounded-l-lg" src="/../public/group-67.png" alt="tea in rabat" width={400} height={400}/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-[30px] md:text-[45px] lg:text-6xl  font-bold tracking-tight text-gray-700">Taste delightful traditional Tea in Rabat</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Nunc ullamcorper faucibus eu nullam at. Blandit sed vel dolor tortor
                            ultrices risus mattis faucibus eu. Massa sit aliquet diam nullam sed
                            ipsum. Dignissim lacus ac amet egestas.</p>
                        <a href=""></a>
                    </div>
                </div>
            </div>
            <div className='
                flex flex-col justify-between items-center gap-4 text-left w-65'>
                    <div  className="flex flex-col items-center bg-white rounded-lg md:flex-row md:max-w-4xl dark:bg-white gap-6">
                    <Image className="object-cover w-[290px]  h-[290px] md:h-auto md:rounded-none md:rounded-l-lg" src="/../public/rectangle-71@2x.png" alt="chefchaouen" width={300} height={300}/>
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-[30px] md:text-[45px] lg:text-6xl  font-bold tracking-tight text-gray-700">Fly over the Mountains in
                        Chefchaouen</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Nunc ullamcorper faucibus eu nullam at. Blandit sed vel dolor tortor
                            ultrices risus mattis faucibus eu. Massa sit aliquet diam nullam sed
                            ipsum. Dignissim lacus ac amet egestas.</p>
                        <a href=""></a>
                    </div>
                </div>
            </div>
            <div className='relative flex flex-col bg-white text-center font-sans text-gray-800 gap-3 mt-10'>
                <Image alt='urs' src="/../public/ellipse-29@2x.png" className='hidden md:block lg:absolute lg:right-0 ' width={70} height={70}/>
                <Image alt='urs2' src="/../public/Ellipse 26.png" className='absolute hidden md:block lg:left-0 lg:top-0' height={50} width={50}/>
                <Image alt='urs3' src="/../public/Ellipse 27.png" className='absolute hidden md:block lg:left-10 lg:top-[130px]' height={80} width={80}/>
                <Image alt='urs4' src="/../public/Ellipse 28.png" className='absolute hidden md:block lg:left-0 lg:top-[270px]' height={40} width={40}/>
                <Image alt='urs5' src="/../public/Ellipse 31.png" className='absolute hidden md:block lg:right-10 lg:top-[200px]'  height={50} width={50}/>
                <div className='mb-2 text-30px'>
                    what others think 
                </div>
                <div className='mb-2 text-[30px] md:text-[45px] lg:text-[62px] font-bold'>
                    " Had a great time can truly
                            recommend! "
                </div>
                <div className='text-right mr-[190px] text-[20px] md:text-right lg:text-25px'>
                    -caroline
                </div>
                <div></div>

            </div>
            <div className="w-screen p-4 text-center bg sm:p-8 bg-dark-blue h-4/6">
                <h1 className="mb-2 text-6xl font-bold text-gray-900 dark:text-white mt-7">V Y N E</h1>
                <ul className="flex flex-wrap items-center justify-center mb-6 text-gray-900 dark:text-white gap-9 mt-10">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About Us</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Contact</a>
                    </li>
                    <li>
                        <button onClick={registerModal.onOpen}><a href="#" className="mr-4 hover:underline md:mr-6 ">Sign up</a></button>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">FAQs</a>
                    </li>
                </ul>
                <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center">© 2023 <a href="#" className="hover:underline">V Y N E ™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a href="#" className="text-white dark:hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="#" className="text-white dark:hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                  <span className="sr-only">Instagram page</span>
              </a>
              <a href="#" className="text-white dark:hover:text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                  <span className="sr-only">Twitter page</span>
              </a>
             </div>
          </div>
        </div>
    </div>
</Container>
  )
}
