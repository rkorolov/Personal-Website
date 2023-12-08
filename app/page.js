import Image from "next/image";
import SectionHeader from "./components/SectionHeader";
import { FilledButton } from "./components/Buttons";
import Container from "./components/Container";
import imgAsset from "./icons/linkedin.ico";

export default function Home() {
  return (
    <div>

      <Container>
      <SectionHeader title="welcome to my page!" text="text text"  />
      <div className="p-8">
      <Image src={imgAsset} alt="" width={80} height={200}/>
      </div>
      
      </Container>
      
      
      


    </div>
    
    
  );
}


