import Link from "next/link";
import { Floor } from "models/floor.model";

interface Props {
  floor: Floor;
}

const FloorItem: React.FC<Props> = ({ floor }) => (
  <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
    <div className="flex items-center justify-between">
      <span className="font-bold md:text-3xl text-2xl text-blue-800">
        {floor.level}
      </span>
      <span className="flex items-center">
        <span className="bg-green-400 block h-4 mr-2 rounded-full w-4"></span>
        <span className="font-semibold md:text-2xl">
          {floor.available} spaces available
        </span>
      </span>
    </div>
    <div className="flex mt-3">
      <img
        className="h-32 mr-3 object-cover sm:h-64 w-3/5"
        src="https://pbs.twimg.com/profile_images/1204987711326580736/F17RQDVl_400x400.jpg"
      />
      <section className="flex flex-col flex-1">
        <div className="flex flex-1 flex-col leading-8 sm:text-base text-gray-600 text-sm">
          {floor.utilities.map((utility, key) => (
            <span key={key}>{utility}</span>
          ))}
        </div>
        <div className="flex items-center justify-end">
          <Link href={`/level/${floor.id}`}>
            <a className="-mr-4 duration-150 ease-in-out  hover:text-blue-600 rounded-md text-gray-700 transition">
              <svg className="feather-icon w-10 h-10 sm:h-16 sm:w-16">
                <use xlinkHref="/images/svg/feather-sprite.svg#chevron-right"></use>
              </svg>
            </a>
          </Link>
        </div>
      </section>
    </div>
  </div>
);

export default FloorItem;
