const tg = window.Telegram.WebApp;
tg.ready();

document.querySelector(".refresh").addEventListener("click", () => {
    tg.HapticFeedback.impactOccurred("medium");
    alert("Сигнал обновлён (временно демо)");
});
