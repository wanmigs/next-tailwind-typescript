import React, { useEffect, useState } from "react";
import { Floor } from "models/floor.model";
import Link from "next/link";
import QRCode from "qrcode.react";

interface Props {
  floor: Floor;
}

const LevelDetail: React.FC<Props> = ({ floor }) => {
  const [link, setLink] = useState<string | null>("");

  useEffect(() => {
    setLink(window.location.href);
  }, []);

  return (
    <div className="bg-white relative rounded-lg shadow-lg">
      <div className="flex items-center justify-start">
        <Link href="/levels">
          <a className="duration-150 ease-in-out flex font-semibold hover:bg-gray-200 hover:text-blue-600 items-center pr-6 rounded-md shadow-lg text-gray-700 text-lg transition py-1">
            <svg className="feather-icon h-10 sm:h-12 sm:w-12 w-10">
              <use xlinkHref="/images/svg/feather-sprite.svg#chevron-left"></use>
            </svg>
            All Levels
          </a>
        </Link>
      </div>
      <section className="pb-4 px-6">
        <div className="flex relative">
          <span className="-mb-6 absolute bg-white bottom-0 font-bold md:text-5xl pr-6 text-4xl">
            {floor.level}
          </span>
          <div className="flex mt-3 overflow-auto">
            <img
              className="h-32 mr-4 object-cover sm:h-64 w-3/5"
              src="https://pbs.twimg.com/profile_images/1204987711326580736/F17RQDVl_400x400.jpg"
            />
            <img
              className="h-32 mr-4 object-cover sm:h-64 w-3/5"
              src="https://pbs.twimg.com/profile_images/1204987711326580736/F17RQDVl_400x400.jpg"
            />
          </div>
        </div>

        <section className="flex items-start justify-between mt-4 relative">
          <div>
            <span className="flex items-center ">
              <span className="bg-green-400 block h-4 mr-2 rounded-full w-4"></span>
              <span className="font-semibold md:text-2xl">
                {floor.available} spaces available
              </span>
            </span>
            <div className="flex flex-1 sm:text-lg text-gray-600 text-base mt-6">
              {floor.utilities.map((utility, key) => (
                <span key={key} className="mr-6">
                  {utility}
                </span>
              ))}
            </div>
          </div>

          <QRCode value={link} size={100} />
        </section>
      </section>
    </div>
  );
};

export default LevelDetail;
