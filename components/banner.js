import Logo from "../public/dcv_white.png"
import Image from "next/image"

export default function Banner() {
  return (
      <div className="mt-10">
        <Image src={Logo} alt="logo" width="400" height="162" />
      </div>
  )
}