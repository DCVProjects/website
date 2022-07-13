import Link from "next/link"
import logo from "../public/dcv_white.png"

export default function Banner() {
  return (
    <img src={logo.src} className="logo" alt="logo"/>
  )
}