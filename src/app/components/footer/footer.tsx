import IconEmail from "@/app/components/footer/icon-email";
import IconInstagram from "@/app/components/footer/icon-instagram";
import IconYoutube from "@/app/components/footer/icon-youtube";
import IconX from "@/app/components/footer/icon-x";

const Footer = () => {
  return (
      <footer>
        <div className="footer-wrapper">
          <div className="footer-left">
            {/*<span>Contact&nbsp;&nbsp;&nbsp;</span>*/}
            <a href="https://www.massadoption.net/contact" target="_blank"><IconEmail/></a>
            <a href="https://www.youtube.com/@massadoptionbtc" target="_blank"><IconYoutube/></a>
            <a href="https://x.com/BTC_Mass" target="_blank"><IconX/></a>
            <a href="https://www.instagram.com/freedomfestival_btc/" target="_blank"><IconInstagram/></a>
          </div>
          <div className="footer-right">
            <span>Copyright © 2024,&nbsp;</span>
            <a href="https://www.massadoption.net/" target="_blank">MassAdoption LLC.</a>
            <span className="whitespace-nowrap">&nbsp;All Rights Reserved.</span>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
