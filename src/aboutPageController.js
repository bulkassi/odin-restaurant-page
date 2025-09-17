const contentContainer = doc.querySelector("#content");

const createContentBox = () => {
  const box = doc.createElement("div");
  box.classList.add("content-box");

  return box;
};

const createContent = () => {
  const createRestaurantNameBox = () => {
    const restaurantNameBox = createContentBox();

    const restaurantName = doc.createElement("h1");
    const emphasized = doc.createElement("em");
    emphasized.append("The");
    restaurantName.append(emphasized, " Snack Restaurant");

    restaurantNameBox.appendChild(restaurantName);

    return restaurantNameBox;
  };

  const createDescriptionBox = () => {
    const descriptionBox = createContentBox();
    const description = doc.createElement("p");
    const descEm = doc.createElement("em");
    descEm.append("bonus");
    description.append(
      "Our restaurant presents all known yet more flavourful snacks to try \
          for everyone! The first guests of the day receive a ",
      descEm,
      "!"
    );
    descriptionBox.appendChild(description);

    return descriptionBox;
  };

  const createScheduleBox = () => {
    const scheduleBox = createContentBox();
    scheduleBox.classList.add("flex-column");

    const scheduleHeader = doc.createElement("h2");
    scheduleHeader.append("Hours");

    const scheduleMonFri = doc.createElement("p");
    scheduleMonFri.append("Mon-Fri: 10am - 10pm");

    const scheduleSat = doc.createElement("p");
    scheduleSat.append("Sat: 10am - 8pm");

    const scheduleSun = doc.createElement("p");
    const emphasized = doc.createElement("em");
    emphasized.append("Day off");
    scheduleSun.append("Sun: ", emphasized);

    scheduleBox.appendChild(scheduleHeader);
    scheduleBox.appendChild(scheduleMonFri);
    scheduleBox.appendChild(scheduleSat);
    scheduleBox.appendChild(scheduleSun);

    return scheduleBox;
  };

  contentContainer.appendChild(createRestaurantNameBox());
  contentContainer.appendChild(createDescriptionBox());
  contentContainer.appendChild(createScheduleBox());
};

const renderAboutPage = () => {
  contentContainer.replaceChildren();
  createContent();
};

export { renderAboutPage };
