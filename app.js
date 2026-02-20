const tg = window.Telegram.WebApp;
tg.expand();

document.getElementById("user-name").innerText =
  tg.initDataUnsafe.user?.first_name || "";

async function loadSignal() {

  const response = await fetch("https://YOUR-DOMAIN/api/signal");
  const data = await response.json();

  if (!data.subscribed) {
    document.getElementById("locked").classList.remove("hidden");
    document.getElementById("signal-card").classList.add("hidden");
    return;
  }

  document.getElementById("locked").classList.add("hidden");
  document.getElementById("signal-card").classList.remove("hidden");

  document.getElementById("entry").innerText = data.entry;
  document.getElementById("tp").innerText = data.tp;
  document.getElementById("sl").innerText = data.sl;
  document.getElementById("conf").innerText = data.confidence + "%";

  const sideEl = document.getElementById("side");
  sideEl.innerText = data.side;

  sideEl.classList.remove("buy", "sell");
  sideEl.classList.add(data.side.toLowerCase());
}

function openSubscription() {
  tg.openTelegramLink("https://t.me/YOUR_BOT?start=subscribe");
}

loadSignal();