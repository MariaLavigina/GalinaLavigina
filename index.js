// ==================== Language Toggle button ==================== //

// document.addEventListener("DOMContentLoaded", () => {
//   const texts = {
//     English: {
//       titleTop: "Everyone chooses",
//       titleMain: "for themselves",
//       paragraphs: [
//         "This is a story about how a difficult",
//         "choice turned into unexpected,",
//         "incredible happiness.",
//       ],
//     },
//     עברית: {
//       titleTop: "כל אחד בוחר",
//       titleMain: "לעצמו",
//       paragraphs: [
//         "זהו סיפור על איך בחירה קשה",
//         "הפכה לאושר בלתי צפוי,",
//         "בלתי יאומן.",
//       ],
//     },
//   };

// Start language is Russian (default)
// let currentLang = "Русский";
// const langOrder = ["Русский", "English", "עברית"];

// const langToggleBtn = document.getElementById("langToggle");
// const langLabel = document.getElementById("langLabel");

// const titleTop = document.getElementById("titleTop");
// const titleMain = document.getElementById("titleMain");
// const introParagraph = document.getElementById("introParagraph");

// Save original Russian text from HTML for restoring later
// const originalTexts = {
//   titleTop: titleTop.textContent,
//   titleMain: titleMain.textContent,
//   paragraphs: Array.from(introParagraph.querySelectorAll("tspan")).map(
//     (el) => el.textContent
//   ),
// };

// langToggleBtn.addEventListener("click", () => {
// Cycle to next language
// const nextIndex = (langOrder.indexOf(currentLang) + 1) % langOrder.length;
// currentLang = langOrder[nextIndex];

// Update language label
// langLabel.textContent = currentLang;

// if (currentLang === "Русский") {
// Restore original Russian text
//   titleTop.textContent = originalTexts.titleTop;
//   titleMain.textContent = originalTexts.titleMain;
//   const tspans = introParagraph.querySelectorAll("tspan");
//   originalTexts.paragraphs.forEach((line, i) => {
//     if (tspans[i]) tspans[i].textContent = line;
//   });
// } else {
// Set text from translations
//       const content = texts[currentLang];
//       titleTop.textContent = content.titleTop;
//       titleMain.textContent = content.titleMain;
//       const tspans = introParagraph.querySelectorAll("tspan");
//       content.paragraphs.forEach((line, i) => {
//         if (tspans[i]) tspans[i].textContent = line;
//       });
//     }
//   });
// });

// ==================== find "" and makes the quotes italic ==================== //

// document.addEventListener("DOMContentLoaded", () => {
//   const elements = document.querySelectorAll("p, h1");

//   elements.forEach((el) => {
//     el.innerHTML = el.innerHTML.replace(/“([^”]+)”/g, "<em>“$1”</em>");
//   });
// });

// ==================== next ==================== //
// document.addEventListener("DOMContentLoaded", function () {
//   const btnMobile = document.getElementById("forwardBtnMobile");
//   if (btnMobile) {
//     btnMobile.addEventListener("click", () => {
//       window.location.href = "01_page.html";
//     });
//   }

//   const btnDesktop = document.getElementById("forwardBtnDesktop");
//   if (btnDesktop) {
//     btnDesktop.addEventListener("click", () => {
//       window.location.href = "01_page.html";
//     });
//   }
// });
