import { useRef, useEffect } from "preact/hooks";

type CardProps = {
  type: string;
  image_path: string;
  title: string;
  date: string;
  description: string;
};

const Card = (props: CardProps) => {
  const { type, image_path, title, date, description } = props;

  const dialogRef = useRef<HTMLDialogElement>(null);
  const showButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const showButton = showButtonRef.current;
    const closeButton = closeButtonRef.current;

    const showModal = () => {
      dialog?.showModal();
      
      document.body.style.overflow = 'hidden';
    }
    const closeDialog = () => {
      dialog?.close();
      document.body.style.overflow = 'auto';
    }

    showButton?.addEventListener("click", showModal);
    closeButton?.addEventListener("click", closeDialog);

    return () => {
      showButtonRef.current?.removeEventListener("click", showModal);
      closeButtonRef.current?.removeEventListener("click", closeDialog);
    };
  }, []);

  const date_class = `text-md rounded-lg ${type === 'event' ? 'text-primary' : 'text-secondary'}`;
  const details_close_class = `text-xl p-2 border-2 text-center ${type === 'event' 
    ? 'text-secondary border-secondary hover:bg-secondary hover:text-gray-50' 
    : 'text-primary border-primary hover:bg-primary hover:text-gray-50'}`;

  return (
    <div class={`rounded-md p-4 flex flex-col gap-4 max-w-md
    ${type === 'event' 
      ? 'bg-gray-50 text-gray-950' 
      : 'bg-gray-900 text-gray-50'}`}>
      <img src={image_path} alt={title} class="rounded-lg" />
      <h1 class="text-2xl">{title}</h1>
      <div class="flex flex-col gap-2">
        <p class={date_class}>Date: {date}</p>
        <p class="text-sm">{description}</p>
      </div>
      <button ref={showButtonRef} class={details_close_class}>View details</button>
      <dialog ref={dialogRef} class="p-4 rounded-lg backdrop-blur-xl backdrop:drop-shadow-xl backdrop:backdrop-blur-xl">
        <div class="text-light text-lg flex flex-col gap-4 max-w-md">
          <img src={image_path} alt={title} class="rounded-lg max-w-md"/>
          <h1 class="text-2xl">{title}</h1>
          <div class="flex flex-col gap-2">
            <p class={date_class}>Date: {date}</p>
            <p class="text-sm">{description}</p>
          </div>
          <button autofocus ref={closeButtonRef} class={details_close_class}>Close</button>
        </div>
      </dialog>
    </div>
  );
};

export default Card;