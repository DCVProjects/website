import Head from "next/head";
import Image from "next/image";
import Logo from "../public/logo.png";
import AlchemixLogo from "../public/alchemix.png";
import DopexLogo from "../public/dopex.svg";
import BuudlezLogo from "../public/buudlez.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-900 text-gray-300">
      <Head>
        <title>DCV</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center bg-gray-900 w-1/2">
        <div>
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
          <div className="text-justify text-lg">
            Simultaneously everywhere and nowhere at the same time. We are the shadowy super-coders that lurk in every Discord server and every governance call. A collective of engineers, operators & defi OGs angel investing together. Think
            decentralized venture capital 2.0. Our vision is to make Web3 accessible to everyone in the world, and we won’t stop until the old paradigm is irreparably broken.
          </div>
        </div>
        <div className="mt-20 w-full">
          <div className="text-white font-semibold text-3xl mb-20">Our Portfolio</div>
          <div className="flex flex-row justify-around">
            <button>
              <Image src={AlchemixLogo} width={100} height={100} alt="alchemix logo" />
            </button>
            <button className="">
              <Image src={DopexLogo} width={100} height={100} alt="dopex logo" />
            </button>
            <button className="">
              <Image src={BuudlezLogo} width={150} height={100} alt="dopex logo" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
