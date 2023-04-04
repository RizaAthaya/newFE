
//assets
import logo from "../../assets/LogoSWUWhite.svg";
import Call from '../../assets/icon/Call.svg';
import Mail from "../../assets/icon/Mail.svg";

const Footer = () => {
  return (
    <div className="w-[100vw] h-auto bg-[#192BC2] text-white lg:mb-[0] mb-[10px]">
      <div className="justify-around px-[50px] sm:px-[100px] py-[48px] lg:flex">
        <div className="sm:w-[80vw] lg:w-[20vw] w-[300px]">
          <h2 className="text-left font-[700] text-[32px] text-[#FAFAFF]"><img src={logo} className="sm:w-[30vw] lg:w-[95px] h-auto sm:h-[auto]"></img></h2>
          <h4 className="text-left font-[400] sm:text-[24px] lg:text-[16px] xl:text-[20px] text-[16px] text-[#C0C0C5] lg:mt-[15px] mt-[16px]">Lorem ipsum dolor sit amet consectetur.</h4>
          <h4 className="text-left font-[400] sm:text-[24px] lg:text-[16px] xl:text-[20px] text-[16px] text-[#C0C0C5]">© 2023 Lorem. Hak cipta dilindungi.</h4>
        </div>
        <div className="lg:ml-[90px] w-[190px] lg:mt-[0] mt-[50px]">
          <ul className="list-none">
            <li className="text-left font-[600] text-[20px] text-[#FAFAFF]">LAYANAN</li>
            <li className="text-left mt-[16px] sm:text-[20px] lg:text-[16px] xl:text-[20px]">Study Abroad</li>
            <li className="text-left mt-[16px] sm:text-[20px] lg:text-[16px] xl:text-[20px]">Pojok Beasiswa</li>
            <li className="text-left mt-[16px] sm:text-[20px] lg:text-[16px] xl:text-[20px]">Komunitas</li>
            <li className="text-left mt-[16px] sm:text-[20px] lg:text-[16px] xl:text-[20px]">Artikel</li>
          </ul>
        </div>
        <div className="lg:ml-[90px] w-[190px] lg:mt-[0] mt-[50px]">
          <ul className="list-none">
            <li className="text-left font-[600] text-[20px] text-[#FAFAFF]">LAINNYA</li>
            <li className="text-left mt-[16px] sm:text-[20px] lg:text-[16px] xl:text-[20px]">Help center</li>
            <li className="text-left mt-[16px] sm:text-[20px] lg:text-[16px] xl:text-[20px]">Syarat & Ketentuan</li>
            <li className="text-left mt-[16px] sm:text-[20px] lg:text-[16px] xl:text-[20px]">Kebijakan Privasi</li>
          </ul>
        </div>
        <div className="lg:ml-[90px] w-[190px] lg:mt-[0] mt-[50px]">
          <h2 className="text-left font-[600] text-[20px] text-[#FAFAFF]">Kontak</h2>
          <div className="flex mt-[22px]">
            <img src={Call}></img>
            <h5 className="ml-[11px] sm:text-[20px] lg:text-[16px]">0271-192837</h5>
          </div>
          <div className="flex mt-[22px]">
            <img src={Mail}></img>
            <h5 className="ml-[11px] sm:text-[20px] lg:text-[16px]">scholarwithus@email.com</h5>
          </div>
        </div>
      </div>
      <div className="pb-[10px]">
        <hr className="mx-[100px]"/>
        <h3 className="my-[24px] justify-center flex mx-auto sm:text-[20px]">
          Copyright © 2023 ScholarWithUs. All rights reserved.
        </h3>
      </div>
    </div>
  );
};

export default Footer;
