import Image from "next/image";
import SectionHeader from "./components/SectionHeader";
import { FilledButton } from "./components/Buttons";
import Container from "./components/Container";
import imgAsset from "./icons/linkedin.ico";
import me from "./icons/IMG_1204.JPG";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div class="bg-pink-50 bg-cover border-4 border-pink-200 mx-32 ">
      <HeroSection />
      <section class="bg-primary-100">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400 font-sans">
                <h2 class="mb-4 text-4xl tracking-tight  text-gray-900 dark:text-white">Current 
                <span class="font-extrabold"> Involvements</span> @ UW</h2>
                <p class="mb-4 font-light">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
                <p class="mb-4 font-medium">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
                <Link href="/projects" class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
                    More About My Projects
                    <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                </Link>
            </div>
        </div>
      </section>
    </div>
    
    <Footer />
    </div>
    
    


    
    
  );
}


