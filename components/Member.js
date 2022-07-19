import { useState } from "react"
import styles from "./members.module.css"
import Image from "next/image"
import bannerImgDefault from "../public/blank_banner.png"

export default function Member(props) {
 
  const profile_image = props.profile_image_url.replace("_normal", "")
  const description = props.description.replace(/\n/g, ' ').trim()

  return (
    <div className={styles.holdBox}>
      <a href={`https://twitter.com/${props.screen_name}`} target="_blank" className={styles.member} rel="noopener noreferrer">
      {props.profile_banner_url ? //checks if member has banner set. renders default if not
        <div>
          <Image src={props.profile_banner_url} height="167" width="500" placeholder="blur" alt="" className={styles.banner} 
          blurDataURL="../../blank_banner.png"/>
        </div>
      : 
        <div>
            <Image src={bannerImgDefault} height="167" width="500" placeholder="blur" alt="" className={styles.banner} 
              blurDataURL="../../blank_banner.png"/>
        </div>
      }
      <img src={!!profile_image ? profile_image : "../images/blank_profile.png" } className={styles.profileImg} />
      <div className={styles.nameBox}>
          <p>{props.name}</p>
          <span>@{props.screen_name}</span>
      </div>
      <p className={styles.info}>{description}</p>
      </a>
    </div>
  )
}

