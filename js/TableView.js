class TableView {
  constructor() {
    /*
     *  propeties
     *  @param [array] tableClass - css классы оформления.
     *  @param [array] data - выходные данные.
     *  @param [array] attribute - управляем что выводим.
     *  @param [array] element - куда выводить таблицу.
     *  @param [array] header -заголовок таблицы.
     *  @param [array] headerClass - css классы заголовка.
     */

    this.tableClass = [];
    this.attribute = [];
    this.element = "body";
    this.header = "";
    this.headerClass = [];
  }

  /**
   * Метод добавления элемента.
   */

  setElement(element) {
    if (document.querySelector(element)) {
      this.element = element;
      return true;
    }
    return false;
  }

  /**
   * Метод добавления заголовка.
   */

  setHeader(header) {
    if (typeof header == "string" && header != "") {
      this.header = header.trim();
      return true;
    }
    return false;
  }

  /**
   * Метод добавления классов заголовку.
   */

  setHeaderClass(headerClass) {
    if (typeof headerClass == "object") {
      this.headerClass = headerClass;
      return true;
    }
    return false;
  }

  /**
   * Метод рендера таблицы на страницу.
   */

  render() {
    // Показать заголовок.

    if (this.header != "") {
      const header = document.createElement("h1");
      header.textContent = this.header;
      this.headerClass.forEach((cssClass) => {
        header.classList.add(cssClass);
      });
      document.querySelector(this.element).append(header);
    }
    // Показать таблицу.

    const table = document.createElement("table");
    this.tableClass.forEach((cssClass) => {
      table.classList.add(cssClass);
    });

    // Добавить заголовок таблицы.

    let trHeader = document.createElement("tr");
    for (let key in this.attribute) {
      let th = document.createElement("th");
      if (this.attribute[key].label) {
        th.textContent = this.attribute[key].label;
      } else {
        th.textContent = key;
      }
      trHeader.append(th);
    }
    table.append(trHeader);

    //Показать таблицу.
    for (let i = 0; i < this.data.length; i++) {
      let dataArr = this.data[i]; //одна строка данных
      let tr = document.createElement('tr');
      for (let key in this.attribute) {
        let td = document.createElement('td');
        let value = dataArr[key];

        //есть ли функция в value
        if (this.attribute[key].value) {
          value = this.attribute[key].value(dataArr);
        }
        //атрибут src
        if (this.attribute[key].src) {
          td.innerHTML = value;
        } else {
          td.textContent = value;
        }
        tr.append(td);
      }
      table.append(tr);
    }

    document.querySelector(this.element).append(table);
  }
}
