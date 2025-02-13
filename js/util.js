// util.js

function drawCart() {
  let countIcon = document.querySelector('span.count');

  if (loginUser.grade == "admin") {
    countIcon.hidden = true;
    return;
  }

  let count = 0;

  for (let bid of bidData) {
    if (bid.id == loginUser.id && bid.status == true) {
      count++;
    }
  }

  if (count == 0) {
    countIcon.hidden = true;
  } else {
    countIcon.hidden = false;
    countIcon.innerHTML = count;
  }
}

function getPrice() {
  for (let i = 0; i < bidData.length; i++) {
    if (item.itemCode == bidData[i].itemCode && bidData[i].status) {
      return bidData[i].price;
    }
  }
  return -1;
}

function selectItem(index) {
  console.log(index);

  localStorage.setItem("selectedItem", JSON.stringify(itemData[index]));

  location.href = "shop-single.html";
}

function getDate(date) {
  date = new Date(date);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return year + '-' + month + '-' + day;
}

function differDate(date) {
  date = new Date(date);

  const now = new Date();

  const dateTime = date.getTime();
  const nowTime = now.getTime();

  const difference = dateTime - nowTime;

  const msPerDay = 24 * 60 * 60 * 1000;

  return Math.round(difference / msPerDay)
}