import Image from "next/image";
import Link from "next/link";
import TitleFooter from "./title-footer";
import FooterMenu from "./footer-menu";
import { CompanyList, SupportList, ConnectList } from "./footer-list";
import { Fragment } from "react";

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <Link href="/" passHref>
                <a className="mb-30">
                  <Image
                    src="/icon/logo.svg"
                    alt="logo"
                    width={60}
                    height={60}
                  />
                </a>
              </Link>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreUp membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <TitleFooter title="Company" />
                  <ul className="list-unstyled">
                    {CompanyList.map((item, i) => (
                      <Fragment key={i}>
                        <FooterMenu name={item} />
                      </Fragment>
                    ))}
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <TitleFooter title="Support" />
                  <ul className="list-unstyled">
                    {SupportList.map((item, i) => (
                      <Fragment key={i}>
                        <FooterMenu name={item} />
                      </Fragment>
                    ))}
                  </ul>
                </div>
                <div className="col-md-4 col-6 mb-lg-0 mb-25">
                  <TitleFooter title="Connect" />
                  <ul className="list-unstyled">
                    {ConnectList.map((item, i) => (
                      <Fragment key={i}>
                        <FooterMenu name={item} />
                      </Fragment>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
