import "./Equipment.css";

function Equipment() {
  const equipmentImages = [
    {
      src: "/assets/bench-press.jpeg",
      alt: "bench press",
      name: "Bench Press",
    },
    {
      src: "/assets/cable-machine.jpeg",
      alt: "cable machine",
      name: "Cable Machine",
    },
    {
      src: "/assets/treadmill.jpeg",
      alt: "treadmill",
      name: "Treadmill",
    },
    {
      src: "/assets/elliptical.jpeg",
      alt: "elliptical machine",
      name: "Elliptical Machine",
    },
    {
      src: "/assets/dumbbells.jpeg",
      alt: "dumbbells",
      name: "Dumbbells",
    },
    {
      src: "/assets/back-machine.jpeg",
      alt: "back machine",
      name: "Back Machine",
    },
    {
      src: "/assets/leg-machine.jpeg",
      alt: "leg machine",
      name: "Leg Machine",
    },
  ];

  return (
    <main className="equipment-page">
      <h1 className="equipment-title">Gym Equipment</h1>

      <section className="gallery">
        {equipmentImages.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img src={item.src} alt={item.alt} />
            <p>{item.name}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Equipment;