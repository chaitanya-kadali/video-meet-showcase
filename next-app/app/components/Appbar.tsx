'use client';
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

export function Appbar() {
    const session = useSession();

  return (
    <header className="sticky top-0 z-50 dark:bg-zinc-900 shadow-md">
      <div className="w-full flex items-center justify-between py-3" style={{ paddingLeft: '10%',paddingRight:"10%" }}>
        
        {/* Left: Logo + Company Name */}
        <div className="flex items-center gap-2">
          
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" strokeWidth="0" fill="currentColor" stroke="currentColor" className="video-icon">
          <path d="M464 384.39a32 32 0 01-13-2.77 15.77 15.77 0 01-2.71-1.54l-82.71-58.22A32 32 0 01352 295.7v-79.4a32 32 0 0113.58-26.16l82.71-58.22a15.77 15.77 0 012.71-1.54 32 32 0 0145 29.24v192.76a32 32 0 01-32 32zM268 400H84a68.07 68.07 0 01-68-68V180a68.07 68.07 0 0168-68h184.48A67.6 67.6 0 01336 179.52V332a68.07 68.07 0 01-68 68z"></path>
        </svg>
          <span className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            VideoMeet
          </span>
        
        </div>

        {/* Right: Sign In Button */}
        <div> 

       <div> 
            { session.data?.user && <Button variant="destructive" onClick={ ()=> signOut()  }> Log Out </Button> }
            { !session.data?.user && <Button onClick={ ()=> signIn()  }> Sign In </Button> }
        </div>
        </div>
      </div>
    </header>
  );
}
