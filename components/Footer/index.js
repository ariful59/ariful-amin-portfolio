import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-10 p-2 laptop:p-0">
        <div>
          <h1 className="text-5xl text-bold">CONTACT</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            <Button type="primary" onClick={()=>window.open("https://zoom.us/")}>Schedule a call</Button>
            {/*<Button type="primary" onClick={GoogleSchdule}>Schedule a call</Button>*/}
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0 justify-center flex flex-row">
        Copywrite@Ariful Amin
        <Link href="http://www.arifulamindu.com">
          <a className="underline underline-offset-1"></a>
        </Link>
      </h1>
    </>
  );
};

export default Footer;
