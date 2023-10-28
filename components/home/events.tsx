import Heading from "@/components/home/heading";
import Subheading from "@/components/home/subheading";
import Event from "@/components/home/event";

const events = [
  {
    id: 2,
    imagePath: "/dummy/ev-2.png",
    name: "Seminar Kit",
  },
  {
    id: 1,
    imagePath: "/dummy/ev-1.png",
    name: "Pameran Kit",
  },
  {
    id: 3,
    imagePath: "/dummy/ev-3.png",
    name: "Rapat Formal",
  },
  {
    id: 4,
    imagePath: "/dummy/ev-4.png",
    name: "Corporate Starterpack",
  },
  {
    id: 5,
    imagePath: "/dummy/ev-5.png",
    name: "Others",
  },
];

const Events = () => {
  return (
    <div className="mt-[2rem] lg:mt-[5rem]">
      <Heading text="Events" />
      <Subheading text="Temukan produk kit sesuai dengan kebutuhanmu" />
      <div className="grid event-grid-mobile gap-[1rem] mt-[2rem] lg:event-grid-desktop">
        {events.slice(0, 5).map((e, i) => {
          switch (i) {
            case 0:
              return (
                <div
                  key={e.id}
                  className="relative grid-main rounded-xl overflow-hidden transition-all cursor-pointer hover:scale-[1.05]"
                >
                  <Event imagePath={e.imagePath} name={e.name} />
                </div>
              );
            case 1:
              return (
                <div
                  key={e.id}
                  className="relative grid-ev1 rounded-xl overflow-hidden transition-all cursor-pointer hover:scale-[1.05]"
                >
                  <Event imagePath={e.imagePath} name={e.name} />
                </div>
              );
            case 2:
              return (
                <div
                  key={e.id}
                  className="relative grid-ev2 rounded-xl overflow-hidden transition-all cursor-pointer hover:scale-[1.05]"
                >
                  <Event imagePath={e.imagePath} name={e.name} />
                </div>
              );
            case 3:
              return (
                <div
                  key={e.id}
                  className="relative grid-ev3 rounded-xl overflow-hidden transition-all cursor-pointer hover:scale-[1.05]"
                >
                  <Event imagePath={e.imagePath} name={e.name} />
                </div>
              );
            default:
              return (
                <div
                  key={e.id}
                  className="relative grid-ev4 rounded-xl overflow-hidden transition-all cursor-pointer hover:scale-[1.05]"
                >
                  <Event imagePath={e.imagePath} name={e.name} />
                </div>
              );
          }
        })}
      </div>
    </div>
  );
};

export default Events;
