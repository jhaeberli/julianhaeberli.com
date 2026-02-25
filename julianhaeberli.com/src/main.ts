const en = document.getElementById("content-en");
const es = document.getElementById("content-es");
const btnEn = document.getElementById("btn-en") as HTMLButtonElement | null;
const btnEs = document.getElementById("btn-es") as HTMLButtonElement | null;

type Lang = "en" | "es";

function setLang(lang: Lang): void {
  if (!en || !es || !btnEn || !btnEs) return;

  const isEn = lang === "en";

  document.documentElement.lang = isEn ? "en" : "es";

  en.classList.toggle("hidden", !isEn);
  es.classList.toggle("hidden", isEn);

  btnEn.classList.toggle("active", isEn);
  btnEs.classList.toggle("active", !isEn);

  localStorage.setItem("lang", lang);
}

btnEn?.addEventListener("click", () => setLang("en"));
btnEs?.addEventListener("click", () => setLang("es"));

const savedLang = localStorage.getItem("lang");
setLang(savedLang === "es" ? "es" : "en");
