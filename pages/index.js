import Head from "next/head";
import Image from "next/image";
import Logo from "../public/logo.png";
import AlchemixLogo from "../public/alchemix.png";
import DopexLogo from "../public/dopex.svg";
import BuudlezLogo from "../public/buudlez.png";
import ParagonsLogo from "../public/paragons.png";
import ElasticSwapLogo from "../public/elasticswap.svg";
import MeritCircleLogo from "../public/meritcircle.png";
import PrepoLogo from "../public/prepo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-gray-300 font-source-sans-pro">
      <Head>
        <title>DCV</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </Head>
      <main className="flex flex-col items-center justify-center flex-1 md:px-0 px-8 text-center bg-gray-900 md:w-1/2">
        <div className="flex-shrink-0">
          <Image src={Logo} width={600} height={200} alt="dcv logo" />
        </div>
        <div className="flex flex-row w-full mb-10 -mt-4 items-center justify-center">
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
            Simultaneously everywhere and nowhere at the same time. We are the shadowy super-coders that lurk in every Discord server and every governance call. A collective of engineers, operators & defi OGs angel investing together. Think
            decentralized venture capital 2.0. Our vision is to make Web3 accessible to everyone in the world, and we won’t stop until the old paradigm is irreparably broken.
          </div>
        </div>
        <div className="mt-20 w-full">
          <div className="text-white font-semibold text-3xl mb-14 underline">Our Portfolio</div>
          <div className="grid grid-cols-4 gap-14">
            {[
              {
                logo: AlchemixLogo,
                name: "Alchemist",
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
                logo: BuudlezLogo,
                name: "Buudlez",
                width: 150,
                link: "https://www.buudlez.com/",
              },
              {
                logo: ElasticSwapLogo,
                name: "Elastic Swap",
                width: 80,
                link: "https://elasticswap.org/",
              },
              {
                logo: ParagonsLogo,
                name: "Paragons",
                link: "https://paragonsdao.com/",
              },
              {
                logo: PrepoLogo,
                name: "Prepo",
                width: 160,
                link: "https://prepo.io/",
              },
            ].map((item) => {
              return (
                <a key={item.name} target="_blank" href={item.link} className="md:mb-0 mb-10">
                  <Image src={item.logo} width={item.width ? item.width : 100} height={item.height ? item.height : 100} alt={item.name} />
                  <div className="mt-2 text-gray-400 text-lg">{item.name}</div>
                </a>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
