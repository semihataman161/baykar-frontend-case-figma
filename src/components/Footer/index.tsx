import PlayStore from '@/assets/images/playStore.svg';
import AppStore from '@/assets/images/appStore.svg';
import Youtube from '@/assets/images/youtube.svg';
import Facebook from '@/assets/images/facebook.svg';
import Twitter from '@/assets/images/twitter.svg';
import Instagram from '@/assets/images/instagram.svg';
import Linkedin from '@/assets/images/linkedin.svg';
import Language from '@/assets/images/langugage.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-[#E2E8F0] font-[16px] leading-[22.4px] py-[80px]">
      <div className="flex flex-col items-center justify-start">
        <div className="flex gap-[100px]">
          <div className="space-y-7">
            <h5 className="text-white leading-[17.6px] font-medium">Product</h5>
            <ul className="space-y-7">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Overview
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Browse
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Five
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-7">
            <h5 className="text-white leading-[17.6px] font-medium">Solutions</h5>
            <ul className="space-y-7">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Brainstorming
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Ideation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Wireframing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Research
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Design
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-7">
            <h5 className="text-white leading-[17.6px] font-medium">Support</h5>
            <ul className="space-y-7">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Developers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Reports
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white leading-[17.6px] font-medium">Get the App</h5>
            <div className="flex space-x-4 mt-4">
              <a href="#">
                <img
                  src={PlayStore}
                  alt="PlayStore"
                />
              </a>
              <a href="#">
                <img
                  src={AppStore}
                  alt="AppStore"
                />
              </a>
            </div>
            <h5 className="text-white leading-[17.6px] font-medium mt-4">Follow Us</h5>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-gray-300">
                <img
                  src={Youtube}
                  alt="Youtube"
                />
              </a>
              <a href="#" className="hover:text-gray-300">
                <img
                  src={Facebook}
                  alt="Facebook"
                />
              </a>
              <a href="#" className="hover:text-gray-300">
                <img
                  src={Twitter}
                  alt="Twitter"
                />
              </a>
              <a href="#" className="hover:text-gray-300">
                <img
                  src={Instagram}
                  alt="Instagram"
                />
              </a>
              <a href="#" className="hover:text-gray-300">
                <img
                  src={Linkedin}
                  alt="Linkedin"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full border-t border-gray-700 mt-8 pt-4">
          <div className="flex flex-col md:flex-row items-center justify-evenly">
            <p className="text-center md:text-left">
              Collers @ 2023. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="hover:text-gray-300">
                Terms
              </a>
              <a href="#" className="hover:text-gray-300">
                Privacy
              </a>
              <a href="#" className="hover:text-gray-300">
                Contact
              </a>
              <a href="#" className="hover:text-gray-300 flex items-center space-x-2">
                <img
                  src={Language}
                  alt="Language"
                />
                <span>EN</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;