type CardProps = {
  type: string;
  image_path: string;
  title: string;
  date: string;
  description: string;
};

const Card = (props: CardProps) => {
  const { type, image_path, title, date, description } = props;
  function getCardClasses(type: string) {
    let general_card_class, detail_button_class, date_class;

    if (type === 'event') {
      general_card_class = "bg-gray-50 rounded-md p-4 flex flex-col gap-4 text-gray-950";
      detail_button_class = "text-[#ea7af4] text-xl p-2 border-2 border-[#ea7af4] text-center hover:bg-[#ea7af4] hover:text-gray-50";
      date_class = "text-[#17a398] text-md";
    } else {
      general_card_class = "bg-gray-900 rounded-md p-4 flex flex-col gap-4 text-gray-50";
      detail_button_class = "text-[#17a398] text-xl p-2 border-2 border-[#17a398] text-center";
      date_class = "text-[#ea7af4] text-md";
    }

    return { general_card_class, detail_button_class, date_class };
  }

  const { general_card_class, detail_button_class, date_class } = getCardClasses(type);
  return (
    <div className={general_card_class}>
      <img src={image_path} alt={title} className="rounded-lg" />
      <h1 className="text-2xl">{title}</h1>
      <div className="flex flex-col gap-2">
        <p className={date_class}>Date: {date}</p>
        <p className="text-sm">{description}</p>
      </div>
      <button className={detail_button_class}>View details</button>
    </div>
  );
};

export default Card;