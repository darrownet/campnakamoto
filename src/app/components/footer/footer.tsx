import IconEmail from "@/app/components/footer/icon-email";
import IconInstagram from "@/app/components/footer/icon-instagram";
import IconYoutube from "@/app/components/footer/icon-youtube";
import IconX from "@/app/components/footer/icon-x";

const Footer = () => {
  return (
      <footer>
        <div className="footer-wrapper">
          <div className="footer-left">
            <a data-eo-form-toggle-id="4f05de42-9a31-11ef-94c4-432dbbbbc6f0" href="#">
              <IconEmail/>
            </a>
            <a href="https://www.youtube.com/@massadoptionbtc" target="_blank"><IconYoutube/></a>
            <a href="https://x.com/campnakamoto?s=21&t=0P3tRJeFY9pZd2-HhyTugw" target="_blank"><IconX/></a>
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
