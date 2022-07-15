import Member from "./Member"
import React from "react";
import Banner from "../../components/banner"
import Link from "next/link"
import Head from "next/head"

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
    <div className="px-8 bg-gray-900 min-h-screen">
      <Head>
        <title>DCV Members</title>
        <meta name="author" content="toast.eth"/>
      </Head>
      <div >
        <header className="flex justify-center">
          <Link href="/">
            <a>
              <Banner />
            </a>
          </Link>
        </header>
          <div className="flex flex-wrap justify-center px-[130px] pb-[130px] mt-16 gap-10 font-poppins">
            { memberElements }
          </div>
        </div>
      </div>
  );
}
