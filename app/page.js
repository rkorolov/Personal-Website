import Image from "next/image";
import SectionHeader from "./components/SectionHeader";
import { FilledButton } from "./components/Buttons";
import Container from "./components/Container";
import imgAsset from "./icons/linkedin.ico";
import me from "./icons/IMG_1204.JPG";

export default function Home() {
  return (
    <div class="flex flex-row flex-wrap bg-pink-50">
      <div className="p-8">
        <SectionHeader title="welcome to my page!" text="text text"  />
      </div>

      <div className="p-8 right-0">
        <Image class="rounded-full m-auto" src={me} alt="" width={200} height={200}/>
      </div>

    </div>

    
    
  );
}


