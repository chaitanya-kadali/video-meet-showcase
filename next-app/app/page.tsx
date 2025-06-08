import { Appbar } from "./components/Appbar";
import { Welcome } from "./components/Welcome";

export default function Home() {
  return (
    <main> 
      <Appbar />
      <div className="mt-25"> </div>

      <div style={{ paddingLeft: '10%',paddingRight:"10%" }} >
         <Welcome/>

      </div>    
    </main>
  );
}
