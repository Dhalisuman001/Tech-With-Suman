import React from "react";
import { Link } from "react-router-dom";
import {
  FaYoutube,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLink,
  FaTwitter,
} from "react-icons/fa";
import Moment from "react-moment";

const About = ({ className, bio, social_links, joinedAt }) => {
  // const [links, setLinks] = useState(Object.keys(social_links));
  console.log(joinedAt);
  const icon_link = {
    facebook: <FaFacebook />,
    youtube: <FaYoutube />,
    github: <FaGithub />,
    instagram: <FaInstagram />,
    website: <FaLink />,
    twitter: <FaTwitter />,
  };

  return (
    <div className={className + "   md:w-[90%] md:mt-7"}>
      <p className="text-xl leading-7 text-gray-800">
        {bio ? bio : "Nothing to read here"}
      </p>
      <div className="flex gap-x-7 gap-y-2 flex-wrap my-7 items-center text-gray-900">
        {social_links &&
          Object.keys(social_links)?.map((key, i) => {
            let link = social_links[key];
            return (
              link && (
                <Link key={i} to={link} target="_blank">
                  {icon_link[key]}
                </Link>
              )
            );
          })}
      </div>
      <p>
        Joined on{" "}
        <Moment format="D MMM YYYY" withTitle>
          {joinedAt}
        </Moment>
      </p>
    </div>
  );
};

export default About;
