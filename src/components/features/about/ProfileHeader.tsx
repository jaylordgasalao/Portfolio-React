import Profile from "../../../assets/profile.jpg";
import Background from "../../../assets/bg.jpg";

export default function ProfileHeader() {
  return (
    <div className="flex flex-col">
      <div>
        <img
          src={Background}
          alt="Background Image"
          className="h-40 w-full rounded-2xl object-cover sm:h-52 md:h-60"
        />
        <div className="-mt-16 ml-4 flex flex-col items-center gap-2 text-center sm:-mt-20 sm:ml-10 sm:flex-row sm:items-end sm:text-left">
          <div className="rounded-full">
            <img
              src={Profile}
              alt="Profile Picture"
              className="w-28 rounded-full sm:w-32 md:w-40"
            />
          </div>
          <div className="sm:mx-4 sm:mb-4">
            <h1 className="text-lg font-semibold text-gray-800 sm:text-xl md:text-2xl dark:text-gray-300">
              Romel Balungag
            </h1>
            <p className="sm:text-md text-sm text-red-700 italic dark:text-gray-400">
              Growing Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
