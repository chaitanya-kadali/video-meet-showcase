import { AuroraText } from "@/components/magicui/aurora-text";
import { Button } from "@/components/ui/button";

export function Welcome() {
  
    return (
<div className="flex flex-col items-center"> 
    <div> 
        <h1 className="text-4xl opacity-90 font-bold text-center tracking-tighter md:text-5xl lg:text-7xl">
            Welcome to <AuroraText> VideoMeet </AuroraText>
        </h1>
    </div>
    
    <div className="mt-10"> 
        <p className="text-lg text-gray-700 text-center dark:text-gray-300 max-w-2xl mx-auto">
            Join anyone, anywhere — face to face. VideoMeet helps you connect with people instantly through secure and effortless video calls.
        </p>  
    </div>

    <div className=" mt-4 text-lg font-semibold text-center">
        Just sign in and start talkin'
    </div>

    <Button  className="mt-10 px-6 py-3">
        Get started !
    </Button>

</div>
  )
}
