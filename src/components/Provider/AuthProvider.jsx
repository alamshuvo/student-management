import {  createContext, useEffect, useState } from "react";
import app from "../../Firebase/Firebase.config";
import {
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    
  } from "firebase/auth";
const auth=getAuth(app)
export const AuthContext=createContext(null);

const AuthProvider=({children})=>{
    const [loading,setLoading]=useState(true);
    const [user,setUser]=useState(null);
    const googleProvider= new GoogleAuthProvider()
    const gogleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
      };
    
      useEffect(()=>{
        const unsubscrive=  onAuthStateChanged(auth,curentUser=>{
              setUser(curentUser);
              console.log("curent user",curentUser);
              const userInfo={
                  email:curentUser?.email
              }
            //   if (curentUser) {
            //       axiosPublic.post("/jwt",userInfo)
            //       .then(res=>{
            //           if (res.data.token) {
            //               localStorage.setItem("access_token",res.data.token)
            //               setLoading(false)
            //           }
            //       })
            //   }
            //   else{
            //       // todo remove token if token store client side 
            //       localStorage.removeItem("access_token")
            //       setLoading(false)
            //   }
              
      
          });
          return ()=>{
              unsubscrive()
          }
      },[])
  
    const authInfo = {
        user,
        gogleSignIn,
        loading
      };
    
    return(
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider