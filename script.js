document.addEventListener("DOMContentLoaded", function () {
  const contributorsList = document.getElementById("contributors-list");
  const addContributorButton = document.getElementById(
    "add-contributor-button"
  );
  const nameInput = document.getElementById("name-input");
  const profileLinkInput = document.getElementById("profile-link-input");

  addContributorButton.addEventListener("click", function () {
    const name = nameInput.value;
    const profileLink = profileLinkInput.value;

    if (name && profileLink) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<a href="${profileLink}" target="_blank">${name}</a>`;
      listItem.classList.add("fade-in");
      contributorsList.appendChild(listItem);

      nameInput.value = "";
      profileLinkInput.value = "";
    }
  });
});
