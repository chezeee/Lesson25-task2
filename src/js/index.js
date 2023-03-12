import FetchWrapper from "./fetch-wrapper.js";

const checkForNewNotifications = () => {
  const API = new FetchWrapper(
    "https://jsdemo-3f387-default-rtdb.europe-west1.firebasedatabase.app"
  );

  API.get("/notifications/new.json").then((data) => {
    showNewNotifications(data.count);
  });
};

function showNewNotifications(count) {
  console.log(
    `You have ${count} new notifications. Would you like to read them?`
  );
}

checkForNewNotifications();
