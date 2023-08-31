import { createContext,useState } from "react";
const AppContext=createContext({
    homeIsIntersecting:false,
    setIsHomeIntersecting:()=>{},
    setHomeIsNotIntersecting:()=>{},
    showSideBar:false,
    showSideBarHandler:()=>{},
    hideSideBar:()=>{}
    

})
export  function AppContextProvider({children}){
  const [homeIsIntersecting, setHomeIsIntersecting] = useState(false);
  const [showSideBar,setShowSidebar]=useState(false)
  function setIsHomeIntersecting(){
    setHomeIsIntersecting(true)
  }
  function setHomeIsNotIntersecting(){
    setHomeIsIntersecting(false)
  }
  function showSideBarHandler(){
    setShowSidebar(true)
  }
  function hideSideBar(){
    setShowSidebar(false)
  }
const value={
    homeIsIntersecting,
    setIsHomeIntersecting,
    setHomeIsNotIntersecting,
    showSideBar,
    showSideBarHandler,
    hideSideBar
}

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
export default AppContext