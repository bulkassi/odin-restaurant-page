import CaesarSaladImage from "./public/caesar_salad.jpg";
import VeniceSaladImage from "./public/venice_salad.jpg";
import QuinoaSaladImage from "./public/quinoa_salad.jpg";

const contentContainer = document.querySelector("#content");

const createContentBox = (doc) => {
  const box = doc.createElement("div");
  box.classList.add("content-box");
  return box;
};

const createContent = (doc) => {
  const createMenuHeader = (doc) => {
    const headerBox = createContentBox(doc);
    headerBox.classList.add("flex-column", "align-center");
    const header = doc.createElement("h1");
    const emphasized = doc.createElement("em");
    emphasized.append("Menu");
    header.appendChild(emphasized);
    headerBox.appendChild(header);
    return headerBox;
  };

  const createMenuItem = (
    doc,
    name,
    description,
    imageSrc,
    altText,
    imageFirst = false
  ) => {
    const itemBox = createContentBox(doc);
    const card = doc.createElement("div");
    card.classList.add("menu-card", "flex-row", "align-center");

    const descriptionDiv = doc.createElement("div");
    descriptionDiv.classList.add("menu-option-desc");
    const itemTitle = doc.createElement("h2");
    itemTitle.append(name);
    const itemDesc = doc.createElement("p");
    itemDesc.append(description);
    descriptionDiv.appendChild(itemTitle);
    descriptionDiv.appendChild(itemDesc);

    const image = doc.createElement("img");
    image.src = imageSrc;
    image.alt = altText;

    if (imageFirst) {
      card.appendChild(image);
      card.appendChild(descriptionDiv);
    } else {
      card.appendChild(descriptionDiv);
      card.appendChild(image);
    }

    itemBox.appendChild(card);
    return itemBox;
  };

  const createMoreItemsBox = (doc) => {
    const moreBox = createContentBox(doc);
    moreBox.classList.add("flex-column", "align-center");
    const moreHeader = doc.createElement("h2");
    moreHeader.append("And much more!");
    moreBox.appendChild(moreHeader);
    return moreBox;
  };

  contentContainer.appendChild(createMenuHeader(doc));
  contentContainer.appendChild(
    createMenuItem(
      doc,
      "Caesar Salad",
      "A classic combination of crisp romaine lettuce and golden croutons, tossed in a creamy dressing made with lemon juice, olive oil, eggs, Worcestershire sauce, anchovies, garlic, Dijon mustard, and freshly ground black pepper. Finished with a generous shaving of Parmesan cheese for a rich and savory touch.",
      CaesarSaladImage,
      "Caesar salad picture",
      false // image on the right
    )
  );
  contentContainer.appendChild(
    createMenuItem(
      doc,
      "Venice Salad",
      "A classic combination of crisp romaine lettuce and golden croutons, tossed in a creamy dressing made with lemon juice, olive oil, eggs, Worcestershire sauce, anchovies, garlic, Dijon mustard, and freshly ground black pepper. Finished with a generous shaving of Parmesan cheese for a rich and savory touch.",
      VeniceSaladImage,
      "Venice salad picture",
      true // image on the left
    )
  );
  contentContainer.appendChild(
    createMenuItem(
      doc,
      "Mediterranean Quinoa Salad",
      "A hearty and nutritious salad featuring fluffy quinoa as the base, mixed with diced cucumbers, cherry tomatoes, Kalamata olives, red onion, and fresh parsley. Finished with crumbled feta cheese, a sprinkle of oregano, and a light dressing made from extra virgin olive oil, lemon juice, garlic, and a hint of mint for an authentic Mediterranean flair.",
      QuinoaSaladImage,
      "Mediterranean Quinoa salad picture",
      false // image on the right
    )
  );
  contentContainer.appendChild(createMoreItemsBox(doc));
};

const renderMenuPage = () => {
  contentContainer.replaceChildren();
  createContent(document);
};

export { renderMenuPage };
