export function FilledButton({ children }) {
    return (
      <DefaultButton style="bg-sage border-lime text-lime md:hover:bg-transparent md:hover:border-sage md:hover:text-sage">
        {children}
      </DefaultButton>
    );
  }
  
  export function OutlinedButton({ children }) {
    return (
      <DefaultButton style="border-lightsage text-sage   md:hover:border-transparent md:hover:bg-sage md:hover:text-lime">
        {children}
      </DefaultButton>
    );
  }
  
  function DefaultButton({ children, style }) {
    return (
      <button
        className={`inline font-medium  border-2 rounded-full md:px-4 px-3.5 md:py-2 py-1.5 md:text-base text-sm transition-colors ${style}`}
      >
        {children}
      </button>
    );
  }