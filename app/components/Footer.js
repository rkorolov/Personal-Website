export default function Footer() {
    return (
      <nav className="bg-secondary-200 rounded-lg shdow m-4 dark:bg-amber-400 place-content-end absolute inset-x-0 bottom-0">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        
        <span>
        <p class="text-pink-400">Ruslana K &copy; {new Date().getFullYear()}</p>
        </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-pink-400 dark:text-gray-400 sm:mt-0">
            <ul class="list-image-[git.png]">
  
            </ul>
            <li >
                <div class=" "> 
                <a href="https://github.com/rkorolov" class="hover:text-pink-600 me-4 md:me-6">github</a>
                </div>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/ruslana-korolov/" class="hover:text-pink-600 me-4 md:me-6">lets link!</a>
            </li>
          </ul>
          
        </div>
        
      </nav>
    );
  }