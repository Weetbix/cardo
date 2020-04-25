import React, { useEffect } from "react"
import { Cookies } from "react-cookie-consent"
import { tracking_cookie_name } from "../../site-config"

// Opts out of tracking by setting our cookie to false
// and calling the GA opt out function.
// Then we nagivate back to the privacy policy page because
// thats where we came from anyway!
const OptOut = () => {
  useEffect(() => {
    Cookies.set(tracking_cookie_name, false)
    window.gaOptout()
    window.alert("Cookies have been opted out")
    window.location.href = "/privacy-policy"
  })
  return <span>Opting out of tracking</span>
}

export default OptOut
