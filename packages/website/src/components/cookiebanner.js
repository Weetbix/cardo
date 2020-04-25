import React from "react"
import CookieConsent from "react-cookie-consent"
import configs from "../../site-config"

export default () => (
  <CookieConsent
    location="bottom"
    buttonText="Accept"
    declineButtonText="Decline"
    enableDeclineButton
    cookieName={configs.tracking_cookie_name}
    declineButtonStyle={{
      background: "rgba(255,255,255,0.3",
      color: "white",
      opacity: 0.8,
    }}
    style={{
      background: "#3F3D56",
      borderTop: "1px solid white",
      justifyContent: "center",
      fontSize: "16px",
      lineHeight: "28px",
    }}
    onAccept={() => window.location.reload()}
    contentStyle={{ flex: "unset" }}
  >
    <div style={{ maxWidth: 900 }}>
      This website uses cookies for page analytics, so I can see if people think
      the app is a cool idea or not. For more information on what and why, check
      out the <a href="/privacy-policy">Privacy Policy</a>.
    </div>
  </CookieConsent>
)
