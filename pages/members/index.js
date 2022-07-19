import Member from "../../components/Member"
import React, { useEffect } from "react";
import Banner from "../../components/Banner"
import Link from "next/link"
import Head from "next/head"

export default function MemberPage({ memberData }) { 

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

export async function getServerSideProps() {

  const client = require("../../utilities/twitterClient");

  // Twitter IDs
  const members = {
    toast : "1076915521835225088",
    scoopy : "1012777913299689477",
    alex: "6409802",
    block : "962932834418790400",
    foobazz: "706407124079775744",
    mathieu: "106882516",
    cl: "1073132650309726208",
    maki: "1269408213876846592",
    marc: "2190759643",
    davis: "1249193324461916161",
    state: "1249460237913874433",
    rafi: "899962415135297538",
    ted: "910814692032917506",
    validator: "29965756",
    chop: "1299328228444831744",
    inugami: "1272288920403767296",
    techno: "1230030444030300160",
    zer0: "2255425337",
    mick: "362625515",
    dan: "1177187922258341888",
    finesseb0i: "1252222862418681858",
    gorby: "772457882755276800",
    ross: "517856571",
    aribma: "1447605049790803973",
    t3rtium: "1373726811339771905",
    oxean: "1483954529301237762"
  }

  //get Twitter user object
  async function getUser(userId) {
    return await client.v1.user({user_id:userId})
  }

  function compare(a, b) {
    if ( a.followers_count > b.followers_count ){
      return -1;
    }
    if ( a.followers_count < b.followers_count ){
      return 1;
    }
    return 0;
  }

  async function getAllMembers() {
    const arrMembers = Object.values(members); // return array of member ids
    const memberObjs = await Promise.all(arrMembers.map(key => (getUser(key))))
    return memberObjs.sort(compare)
  };

  const data = await getAllMembers()

  return {
    props: {
      memberData: data
    }
  }
}