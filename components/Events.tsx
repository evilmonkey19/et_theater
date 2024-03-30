import Card from './Card.tsx';

const Events = () => (
  <section className="md:grid grid-cols-7 bg-gray-200 py-16" id="events">
    <div className="col-span-1"></div>
    <div className="col-span-5 flex flex-col gap-4">
      <h1 className="text-4xl">Events</h1>
      <div className="grid grid-cols-3 gap-8">
        <Card 
          type="event"
          image_path="https://picsum.photos/560"
          title="Event 1"
          date="2023-05-01"
          description="This is a description of the event."
        />
        <Card 
          type="event"
          image_path="https://picsum.photos/561"
          title="Event 2"
          date="2023-05-01"
          description="This is a description of the event."
        />
        <Card 
          type="event"
          image_path="https://picsum.photos/562"
          title="Event 3"
          date="2023-05-01"
          description="This is a description of the event."
        />
        <Card 
          type="event"
          image_path="https://picsum.photos/563"
          title="Event 4"
          date="2023-05-01"
          description="This is a description of the event."
        />
        <Card 
          type="event"
          image_path="https://picsum.photos/564"
          title="Event 5"
          date="2023-05-01"
          description="This is a description of the event."
        />
      </div>
    </div>
    <div className="col-span-1"></div>
  </section>
)

export default Events;