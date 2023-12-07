

export default function Home() {
  return (
    <div>

      <Footer />


    </div>
    
    
  );
}



function Footer() {
  return (
    <nav className="bg-amber-100 rounded-lg shdow m-4 dark:bg-amber-400 place-content-end absolute inset-x-0 bottom-0">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-pink-400 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Flowbite™</a>. All Rights Reserved.
      </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-pink-400 dark:text-gray-400 sm:mt-0">
          <ul class="list-image-[git.png]">

          </ul>
          <li>

              <a href="#" class="hover:text-pink-600 me-4 md:me-6">About</a>
          </li>
          <li>
              <a href="#" class="hover:text-pink-600 me-4 md:me-6">Privacy Policy</a>
          </li>
          <li>
              <a href="#" class="hover:text-pink-600 me-4 md:me-6">Licensing</a>
          </li>
          <li>
              <a href="#" class="hover:text-pink-600">Contact</a>
          </li>
        </ul>
      </div>
      
    </nav>
  );
}

