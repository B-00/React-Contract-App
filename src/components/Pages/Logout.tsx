import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Logout() {

  const nav = useNavigate()

  useEffect(() => {

    const redirectTimeout = setTimeout(() => {
      nav('/')
    }, 3000)

    return () => {
      clearTimeout(redirectTimeout)
    }
  }, [nav])


  return (
    <div>You have been successfully logged out, now redirecting...</div>
  )
}
