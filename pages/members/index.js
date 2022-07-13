import Member from "./Member"
import logo from "../../public/dcv_white.png"
import React from "react";
import Banner from "../../components/banner"
import Link from "next/link"
import Head from "next/head"
// import Image from "next/image";

export default function MemberPage() { 

  const [memberData, setMemberData] = React.useState([])

  React.useEffect(()=>{
    const fetchMembers = async () => {
      const res = await fetch ("/api/twitter-fetch")
      const data = await res.json()
      setMemberData(data)
    }
    fetchMembers()
  }, []);

  const memberElements = memberData.map((element, index) => {
    return <Member {...element} key={element.id}/>
  })

  return (
    <>
      <Head>
        <title>DCV Members</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <div className="px-8 bg-gray-900">
        <header>
          <Link href="/">
            <a>
              <Banner />
            </a>
          </Link>
        </header>
          <div className="members">
            { memberElements }
        </div>
      </div>
    </>
  );
}
