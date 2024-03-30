import Card from './Card.tsx';

const Productions = () => (
  <section className="md:grid grid-cols-7 bg-black py-16 text-gray-50" id="productions">
    <div className="col-span-1"></div>
    <div className="col-span-5 flex flex-col gap-4">
      <h1 className="text-4xl">Productions</h1>
      <div className="grid grid-cols-3 gap-8">
        <Card
          type="production"
          image_path="https://picsum.photos/700"
          title="Production 1"
          date="2023-05-01"
          description="This is a description of the production."
        />
        <Card
          type="production"
          image_path="https://picsum.photos/701"
          title="Production 2"
          date="2023-05-01"
          description="This is a description of the production."
        />
        <Card
          type="production"
          image_path="https://picsum.photos/702"
          title="Production 3"
          date="2023-05-01"
          description="This is a description of the production."
        />
        <Card
          type="production"
          image_path="https://picsum.photos/703"
          title="Production 4"
          date="2023-05-01"
          description="This is a description of the production."
        />
        <Card
          type="production"
          image_path="https://picsum.photos/704"
          title="Production 5"
          date="2023-05-01"
          description="This is a description of the production."
        />
        <Card
          type="production"
          image_path="https://picsum.photos/700"
          title="Production Ramon"
          date="2023-05-01"
          description="This is a description of the production."
        />
      </div>
    </div>
    <div className="col-span-1"></div>
  </section>
)

export default Productions;