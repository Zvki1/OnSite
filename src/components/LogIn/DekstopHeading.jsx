import Logo from "../../assets/logo.svg"
const DesktopHeading = () => {
  return (
  
         <div className="hidden lg:flex flex-col items-center justify-center gap-10 w-2/5 h-screen bg-[#112377]">
      <img src={Logo} alt="Logo of collabtelecom" />
      <h1 className=' text-5xl font-bold text-white text-Lato'>OnSite</h1>
    
    </div>
  )
}

export default DesktopHeading