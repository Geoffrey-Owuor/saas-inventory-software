import Link from "next/link";

export default function OptionCard({ optionData }) {
  const {
    title,
    description,
    link,
    linkTitle,
    enabled,
    icon: Icon,
  } = optionData;
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-md bg-white pt-4 pb-10 shadow-md">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="">
        <Icon strokeWidth=".5px" className="h-36 w-36" />
      </div>
      <p className="line-clamp-1">
        {/* Create multiple variants of the same item using item groups */}
        {description}
      </p>
      {enabled ? (
        <Link
          href={link}
          className="space-x-1 rounded-sm bg-blue-500 px-2 py-1 text-white"
        >
          {linkTitle}
        </Link>
      ) : (
        <button className="space-x-1 rounded-sm bg-blue-500 px-2 py-1 text-white">
          Enable
        </button>
      )}
    </div>
  );
}
