import RestaurantImage from "./public/restaurant_default.svg";

const contentContainer = document.querySelector("#content");

const createContentBox = (doc) => {
  const box = doc.createElement("div");
  box.classList.add("content-box");

  return box;
};

const createContent = (doc) => {
  const createRestaurantNameBox = (doc) => {
    const restaurantNameBox = createContentBox(doc);
    restaurantNameBox.classList.add("flex-column");
    restaurantNameBox.classList.add("align-center");

    const restaurantName = doc.createElement("h1");
    const emphasized = doc.createElement("em");
    emphasized.append("The");
    restaurantName.append(emphasized, " Snack Restaurant");

    const restaurantSvg = doc.createElement("img");
    restaurantSvg.src = RestaurantImage;

    restaurantNameBox.appendChild(restaurantName);
    restaurantNameBox.appendChild(restaurantSvg);

    return restaurantNameBox;
  };

  const createDescriptionBox = (doc) => {
    const descriptionBox = createContentBox(doc);
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

  const createScheduleBox = (doc) => {
    const scheduleBox = createContentBox(doc);
    scheduleBox.classList.add("flex-column");
    scheduleBox.classList.add("align-center");

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

  contentContainer.appendChild(createRestaurantNameBox(doc));
  contentContainer.appendChild(createDescriptionBox(doc));
  contentContainer.appendChild(createScheduleBox(doc));
};

const renderAboutPage = (doc) => {
  contentContainer.replaceChildren();
  createContent(document);
};

export { renderAboutPage };
