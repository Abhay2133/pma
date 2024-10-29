import Image from "next/image";
import Link from "next/link";

function Sidebar({
  className,
  activeID = "dashboard",
}: {
  className?: any;
  activeID?: "dashboard" | "teams" | "settings" | "user" | ""; // empty for bookmark
}) {
  return (
    <div
      className={
        "flex flex-col p-5 gap-5 dark:bg-gray-900 h-screen " + className
      }
    >
      {/* App Logo + Name */}
      <div className="flex gap-5">
        <div className="h-[50px] w-[50px] rounded-sm bg-gray-600"></div>
        <div className="flex items-center">AppName</div>
      </div>

      {/* Items (Link + Bookmarks + Footer) */}
      <div className="flex flex-col flex-1">
        {/* General Links */}
        <div className="flex gap-1 flex-col">
          <IconedLink
            isActive={activeID == "dashboard"}
            icon={"/icons/apps.png"}
            label="Dashboard"
            href="/dashboard"
          />
          <IconedLink
            isActive={activeID == "teams"}
            icon={"/icons/groups.png"}
            label="Teams"
            href="/teams"
          />
          <a></a>
        </div>

        {/* Bookmarks */}
        <div className="mt-3 ">
          {/* header */}
          <div className="flex justify-between">
            <div className="text-sm">Bookmarks</div>
            <button className="border-none bg-none">
              <Image
                className="dark:invert active:scale-75"
                width={20}
                height={20}
                src={"/icons/triangle.png"}
                alt={"trianlge"}
              />
            </button>
          </div>

          <div>{/* Container */}</div>
        </div>

        {/* Setting + user */}
        <div className="mt-auto space-y-1">
          <IconedLink
            isActive={activeID == "settings"}
            icon="/icons/settings.png"
            label="Settings"
            href="/settings"
          />
          <IconedLink
            isActive={activeID == "user"}
            icon="/icons/user.png"
            label="Log in"
            href="/login"
          />
        </div>
      </div>
    </div>
  );
}

function IconedLink({
  icon,
  label,
  isActive,
  onClick,
  href="#"
}: {
  icon: string;
  label: string;
  onClick?: any;
  isActive?: boolean;
  href?:string;
}) {
  const styles = isActive ? "bg-gray-800" : "";
  return (
    <Link
      href={href}
      className={
        "flex gap-x-3 py-2 px-3 rounded min-w-[200px] cursor-pointer border border-transparent hover:border-gray-700 active:scale-95" +
        " " +
        styles
      }
      onClick={onClick}
    >
      <Image
        src={icon}
        height={30}
        width={30}
        alt={"Dashboard"}
        className="dark:invert"
      />
      <div className="flex items-center">{label}</div>
    </Link>
  );
}

export default Sidebar;
