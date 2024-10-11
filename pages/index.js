import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AlchemixLogo from "../public/alchemix.png";
import DopexLogo from "../public/dopex.svg";
import HolyHeldLogo from "../public/holyheld.svg";
import ParagonsLogo from "../public/paragons.png";
import GridplusLogo from "../public/gridplus_logo.png";
import MeritCircleLogo from "../public/meritcircle.png";
import DivaLogo from "../public/divalogo.svg";
import SablierLogo from "../public/sablier_logo.png";
import NFTPerpLogo from "../public/nftperp.svg";
import HoprLogo from "../public/hopr_logo.png";
import X23Logo from "../public/x23_logo.svg";
import Banner from "../components/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-gray-300 font-poppins">
      <main className="flex flex-col items-center flex-1 md:px-0 px-8 text-center bg-gray-900 md:w-1/2">
        <Banner />
        <div className="flex flex-row w-full mb-8 mt-10 items-center justify-center">
          <button>
            <a href="https://twitter.com/dcv_capital" target="_blank">
              <FontAwesomeIcon icon={faTwitter} size="lg" className="text-gray-400 mr-5" />
            </a>
          </button>
          <button>
            <a href="mailto:hi@dcv.capital">
              <FontAwesomeIcon icon={faEnvelope} size="lg" className="text-gray-400" />
            </a>
          </button>
        </div>
        <div>
          <div className="md:text-justify text-center text-lg">
            Simultaneously everywhere and nowhere. We are the shadowy super-coders that lurk in every Discord server and every governance call. A collective of engineers, operators & defi OGs angel investing together. Think decentralized venture
            capital 2.0. Our vision is to make Web3 accessible to everyone in the world, and we won’t stop until the old paradigm is irreparably broken.
          </div>
        </div>
        <div className="mt-6 w-full">
          {/* <Link href="/members">
            <a>
              <div className="text-white font-semibold text-2xl mb-12 underline">Members</div>
            </a>
          </Link> */}
          <div className="text-white font-semibold text-3xl mb-14 ">Our Portfolio</div>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-14 mb-12">
            {[
              {
                logo: AlchemixLogo,
                name: "Alchemix",
                link: "https://alchemix.fi/",
              },
              {
                logo: DopexLogo,
                name: "Dopex",
                link: "https://www.dopex.io/",
              },
              {
                logo: MeritCircleLogo,
                name: "Merit Circle",
                link: "https://meritcircle.io/",
              },
              {
                logo: ParagonsLogo,
                name: "Paragons",
                link: "https://paragonsdao.com/",
              },
              {
                logo: HolyHeldLogo,
                name: "holyheld",
                link: "https://holyheld.com/",
              },
              {
                logo: NFTPerpLogo,
                name: "NFTPerp",
                link: "https://nftperp.xyz/",
              },
              {
                logo: DivaLogo,
                name: "Diva",
                link: "https://divalabs.org/",
              },
              {
                logo: GridplusLogo,
                name: "GridPlus",
                link: "https://gridplus.io/",
                width: 200,
              },
              {
                logo: HoprLogo,
                name: "HOPR",
                link: "https://hoprnet.org/",
              },
              {
                logo: SablierLogo,
                name: "Sablier",
                link: "https://sablier.com/",
              },
              {
                logo: X23Logo,
                name: "X23",
                link: "https://x23.ai/",
              },
            ].map((item) => {
              return (
                <a key={item.name} target="_blank" href={item.link} className="md:mb-0 mb-10 flex items-center flex-col justify-evenly">
                  <Image src={item.logo} width={item.width ? item.width : 100} height={item.height ? item.height : 100} alt={item.name} />
                  <div className="mt-2 text-gray-400 text-lg font-semibold">{item.name}</div>
                </a>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
