var giftElement = document.querySelector('[aria-label="Claim Bonus"]');

function sleep(s) {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
}

function claim() {
  if (giftElement) {
    giftElement.click();
    console.log("Claimed!");
  } else {
    console.error("Gift element not found");
  }
}

while (true) {
  claim();
  await sleep(6 * 60);
}
