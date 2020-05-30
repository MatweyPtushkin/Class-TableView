const data = [
  {
    company: "<b>BMW</b>",
    model: "BMW 5 Series",
    country: "Germany",
  },
  {
    company: "<b>Volvo</b>",
    model: "Volvo XC90",
    country: "Sweden",
  },
  {
    company: "<b>Cadillac</b>",
    model: "Cadillac Escalade",
    country: "USA",
  },
  {
    company: "<b>Ferrari</b>",
    model: "Ferrari F12 Berlinetta",
    country: "Italy",
  },
  {
    company: "<b>Kia</b>",
    model: "Kia Sorento",
    country: "Korea",
  },
];

const tableView = new TableView();
tableView.header = "Заголовок таблицы";
tableView.headerClass = ["header", "site-header"];
tableView.data = data;
tableView.attribute = {
  company: {
    label: "Компания",
    src: "html",
  },
  model: {
    label: "Модель",
  },
  country: {
    label: "Страна",
    value: (data) => {
      if (data["country"] === "Germany") {
        return data["country"] + " map";
      }
      return data["country"];
    },
  },
};

tableView.render(tableView.attribute);
