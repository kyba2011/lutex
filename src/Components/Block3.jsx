import Card from "./card";

function Block3() {
  const api = [
    { id: 1, name: "poplin", name2: "zima", visit: ["1sp", "2sp", "euro"] },
    { id: 2, name: "poplin", name2: "zima", visit: ["1sp", "2sp", "euro"] },
    { id: 3, name: "poplin", name2: "zima", visit: ["1sp", "2sp", "euro"] },
    { id: 4, name: "poplin", name2: "zima", visit: ["1sp", "2sp", "euro"] },
    { id: 5, name: "poplin", name2: "zima", visit: ["1sp", "2sp", "euro"] },
    { id: 6, name: "poplin", name2: "zima", visit: ["1sp", "2sp", "euro"] },
    { id: 7, name: "poplin", name2: "zima", visit: ["1sp", "2sp", "euro"] },
    { id: 8, name: "poplin", name2: "zima", visit: ["1sp", "2sp", "euro"] },
    { id: 9, name: "poplin", name2: "zima", visit: ["1sp", "2sp", "euro"] },
    { id: 10, name: "poplin", name2: "zima", visit: ["1sp", "2sp", "euro"] },
    { id: 11, name: "poplin", name2: "zima", visit: ["1sp", "2sp", "euro"] },
    { id: 12, name: "poplin", name2: "zima", visit: ["1sp", "2sp", "euro"] },
  ];

  return (
    <div
      data-bg="white"
      data-header-theme="light"
      className="w-ful py-16"
    >
      <h1 className="text-5xl text-teal-light font-semibold text-center mb-10">
        УЮТНАЯ СПАЛЬНЯ
      </h1>
      <div className="flex justify-center space-x-6 my-10 leading-3.25 text-[16px] text-teal-light font-semibold">
        <p>-Поплин</p>
        <p>-Хлопок</p>
        <p>-Сатин</p>
        <p>-Бязь</p>
        <p>-Лён</p>
      </div>
      <div className=" py-16 px-20">
        <div className="flex flex-wrap gap-6 justify-center">
          {api.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Block3;
