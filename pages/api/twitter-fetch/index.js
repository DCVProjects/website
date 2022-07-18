const client = require("./twitterClient");

export default async function handler(req, res) {
  res.json(await getAllMembers())
}

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
async function getUser(user_id) {
  return await client.v1.user({user_id})
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

