import { createContext } from "react";

export const PostContext = createContext()

export const postContextProvider = ({ children}) => {

  return (
    <PostContext.Provider value={{}}>
      {children}
    </PostContext.Provider>
  )
}