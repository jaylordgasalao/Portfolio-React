import Profile from "../../../assets/profile.jpg";
import Background from "../../../assets/bg.jpg";

export default function ProfileHeader() {
  return (
    <div className="flex flex-col">
      <div>
        <img
          src={Background}
          alt="Background Image"
          className="h-40 w-full rounded-3xl object-cover sm:h-52 md:h-64"
        />
        <div className="-mt-16 ml-4 flex flex-col items-center gap-2 text-center sm:-mt-20 sm:ml-10 sm:flex-row sm:items-end sm:text-left">
          <div className="rounded-full">
            <img
              src={Profile}
              alt="Profile Picture"
              className="w-28 rounded-full border-8 border-[#f6f8f5] sm:w-32 md:w-40"
            />
          </div>
          <div className="sm:mx-4 sm:mb-4">
            <h1 className="text-xl font-bold tracking-tight text-[#1d2927] sm:text-2xl md:text-3xl">
              Jaylord Gasalao
            </h1>
            <p className="mt-1 text-sm font-medium text-[#176b63]">
              Frontend developer in progress
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
