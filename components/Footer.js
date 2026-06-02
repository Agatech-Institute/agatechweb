import { MdOutlineFacebook } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
  const date = new Date().getFullYear();
  return (
    <main>
      <div className="bg-blue-950">
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6 px-5">
          <ul>
            <li className="text-2xl text-white font-bold">Our Courses</li>
            <li className="text-white">MOBILE APP DEVELOPEMENT</li>
            <li className="text-white">FULLSTACK WEB DEVELOPEMENT</li>
            <li className="text-white">DATA SCIENCE AND ANALYTIC</li>
            <li className="text-white">UI/UX PRODUCT DESIGN</li>
            <li className="text-white">CYBERSECURITY ANALYST</li>
          </ul>
          <ul>
            <li className="text-white">Agatech Institute</li>
            <li className="text-white">
              &copy; {date} Agatech institute. All rights reserved.
            </li>
            <li className="text-white">privacy policy</li>
            <li className="text-white">terms of service</li>
            <li className="text-white">contact us</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="text-white">Follow us on social media:</li>
            <FaInstagram className="bg-white w-10 h-10 text-blue-950" />
            <MdOutlineFacebook className="bg-white w-10 h-10 text-blue-950" />
            <FaXTwitter className="bg-white w-10 h-10 text-blue-950" />
            <FaGithub className="bg-white w-10 h-10 text-blue-950" />
          </ul>
        </footer>
      </div>
    </main>
  );
}
