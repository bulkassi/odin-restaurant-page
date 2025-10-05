const contentContainer = document.querySelector("#content");

const createContentBox = (doc) => {
  const box = doc.createElement("div");
  box.classList.add("content-box");
  return box;
};

const createContent = (doc) => {
  const createContactHeader = (doc) => {
    const headerBox = createContentBox(doc);
    headerBox.classList.add("flex-column", "align-center");
    const header = doc.createElement("h1");
    const emphasized = doc.createElement("em");
    emphasized.append("Contact");
    header.appendChild(emphasized);
    headerBox.appendChild(header);
    return headerBox;
  };

  const createContactInfo = (doc) => {
    const infoBox = createContentBox(doc);
    infoBox.classList.add("flex-column", "align-center");
    const infoText = doc.createElement("p");
    infoText.append(
      "For more information about the menu and prices, please contact us!"
    );
    const phonePara = doc.createElement("p");
    phonePara.append("Phone number: +1234567890");
    const emailPara = doc.createElement("p");
    emailPara.append("Email: saladrestmail@mail.com");
    infoBox.appendChild(infoText);
    infoBox.appendChild(phonePara);
    infoBox.appendChild(emailPara);
    return infoBox;
  };

  contentContainer.appendChild(createContactHeader(doc));
  contentContainer.appendChild(createContactInfo(doc));
};

const renderContactPage = () => {
  contentContainer.replaceChildren();
  createContent(document);
};

export { renderContactPage };
