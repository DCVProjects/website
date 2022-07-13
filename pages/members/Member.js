import React from "react"

export default function Member(props) {
 
  const profile_image = props.profile_image_url.replace("_normal", "")
  const description = props.description.replace(/\n/g, ' ').trim()

  const [bannerLoad, setBannerLoad] = React.useState(false)
  const [profileLoad, setProfileLoad] = React.useState(false)

  function showBanner() {
    setBannerLoad(true)
  }
  function showProfile() {
    setProfileLoad(true)
  }
  
  return (
      <div className="test-box ">
        <a href={`https://twitter.com/${props.screen_name}`} target="_blank" className="member" rel="noopener noreferrer">
        {props.profile_banner_url ? 
        <>
          <img src={props.profile_banner_url} alt="" className="banner" onLoad={showBanner}
            style={ bannerLoad ? {} : {display: "none"}}
          />
          <img src="../images/blank_banner.png" alt="" className="banner" style={ bannerLoad ? {display: "none"} : {}}/>
        </>
         : <img src="../images/blank_banner.png" className="banner" alt="" 
        />}
        <>
          <img src={profile_image} alt="" className="profile-img" onLoad={showProfile}
            style={ profileLoad ? {} : {display: "none"}}/>

          <img src="../images/blank_profile.png" alt="" className="profile-img" style={ profileLoad ? {display: "none"} : {}}/>
        </>
        <div className="nameBox ">
            <p>{props.name}</p>
            <span>@{props.screen_name}</span>
        </div>
        <p className="info ">{description}</p>
        </a>
      </div>
  )
}

