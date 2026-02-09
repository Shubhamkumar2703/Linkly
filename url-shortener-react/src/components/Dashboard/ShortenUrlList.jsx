import ShortenItem from "./ShortenItem";

const ShortenUrlList = ({ data = [] }) => {
  if (!data.length) return null;

  return (
    <div className="mt-6 space-y-5">
      {data.map((item) => (
        <ShortenItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ShortenUrlList;
