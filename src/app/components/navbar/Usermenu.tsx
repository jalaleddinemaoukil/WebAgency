'use client';

import Avatar from '../Avatar';
import { useCallback , useState} from 'react';
import Menuitem from './Menuitem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';
import useRentModal from '@/app/hooks/useRentModal';
import { useRouter } from "next/navigation";

interface UsermenuProps {
    currentUser?: SafeUser | null;
}
const Usermenu:React.FC<UsermenuProps> = ({
    currentUser
}) => {
    const registerModal = useRegisterModal();
    const loginmodal = useLoginModal();
    const router = useRouter();
    const rentmodal = useRentModal();
    const [isOpen , setisOpen] = useState(false);
    const toggleOpen = useCallback (() => {
        setisOpen((value) => !value);
  
    }, [])
    const onRent = useCallback(()=>{
      if (!currentUser) {
        return loginmodal.onOpen();
      }

      rentmodal.onOpen();
    }, [currentUser, loginmodal, rentmodal])
  return (
    <div className="relative">
        <div className="flex flex-row items-center gap-3">
            <div 
            onClick={onRent}
            className="
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:text-blue-800
            transition
            cursor-pointer"
            >
                Publish your home
            </div>
            <div
            onClick={toggleOpen}
            className="
                p-4
                md:py-1
                md:px-2
                flex
                flex-row
                items-center
                gap-3
                rounded-full
                cursor-pointer
                hover:border-blue-800
                transition
            "
            >
                <div
                    className=' md:block'>
                        <Avatar src={currentUser?.image}/>
                </div>
            </div>
        </div>
    {isOpen &&
    (
        <div 
            className='
                absolute 
                rounded-xl 
                shadow-md 
                w-[40vw] 
                md:w-3/4 
                bg-white 
                overflow-hidden 
                right-0 
                top-12 
                text-sm
                '
            >
                <div 
                className='
                    flex
                    flex-col
                    cursor-pointer'>
                        {currentUser ? (
              <>
                <Menuitem 
                  label="My favorites" 
                  onClick={() => router.push('/favorites')}
                />
                <Menuitem 
                  label="My reservations" 
                  onClick={() => router.push('/reservations')}
                />
                <Menuitem 
                  label="My trips" 
                  onClick={() => router.push('/trips')}
                />
                <Menuitem 
                  label="My properties" 
                  onClick={() => router.push('/properties')}
                />
                <Menuitem 
                  label="Publish your home" 
                  onClick={rentmodal.onOpen}
                />
                <hr />
                <Menuitem 
                  label="Logout" 
                  onClick={() => signOut()}
                />
              </>
            ) : (
                        <>
                            <Menuitem 
                                onClick={loginmodal.onOpen}
                                label="Login"
                                />
                            <Menuitem 
                                onClick={registerModal.onOpen}
                                label="Sign up"
                                />
                        </>
                )}
                </div>
        </div>
    )}
    </div>
  )
}

export default Usermenu;