import type { NextComponentType } from "next";

import {
  BsSpotify,
  MdEmail,
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineInstagram
} from "../Misc/Icons.collection";

import { Icon } from "../Misc/Icon.component";

const Contact: NextComponentType = () => {
  return (
    <div className="px-3 font-sen" id="contact">
      <p className="text-3xl font-bold text-white">Get in touch</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon icon={<AiOutlineGithub />} url="https://github.com/griffin-a" />

        <Icon
          icon={<AiOutlineFacebook />}
          url="https://www.facebook.com/griffin.almquist.16"
        />

        <Icon icon={<AiOutlineInstagram />} url="https://www.instagram.com/griff1in/" />

        <Icon icon={<AiOutlineLinkedin />} url="https://www.linkedin.com/in/griffin-almquist-55035620a/" />

        <Icon icon={<MdEmail />} url="mailto:griffinalmquist@gmail.com" />

        <Icon
          icon={<BsSpotify />}
          url="https://open.spotify.com/user/griffinalmquist?si=e76e3fa2b74a473a"
        />
      </div>
    </div>
  );
};

export default Contact;
