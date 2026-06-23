/* ===================== i18n ===================== */
const I18N = {
en: {
page_title:"Pet Age Toolbox — Convert, Plan, Protect",
brand_name:"Pet Age Toolbox",
hero_eyebrow:"Free · No login · Works offline",
hero_title:"How old is your pet, really?",
hero_sub:"A 7-year-old Great Dane and a 7-year-old tabby cat are not the same age. Translate it properly below.",
lbl_species:"Species", lbl_size:"Size", lbl_years:"Years", lbl_months:"Months",
opt_dog:"Dog", opt_cat:"Cat", opt_small:"Small (<9kg)", opt_medium:"Medium (9–22kg)", opt_large:"Large (22–40kg)", opt_giant:"Giant (>40kg)",
result_pet_age:"Pet age", result_human_age:"Human-equivalent age",
age_fineprint:"Estimates based on common veterinary growth curves. Individual breeds and health vary.",
btn_add_pet:"+ Add another pet (up to 3 free)",
calorie_title:"Daily feeding calories", calorie_sub:"Based on weight, age, spay/neuter status and activity level.",
lbl_weight:"Weight (kg)", lbl_status:"Life stage / status",
status_growth:"Puppy / kitten (growing)", status_intact:"Adult, not neutered", status_neutered:"Adult, neutered/spayed",
status_loss:"Needs weight loss", status_gain:"Needs weight gain", status_active:"Very active / working", status_senior:"Senior",
btn_calculate:"Calculate",
toxic_title:"Is it toxic to my pet?", toxic_sub:"Search food, plants, and household items. Separate risk ratings for dogs and cats.",
toxic_placeholder:"Type an item, e.g. "grapes", "lily", "bleach"…",
vaccine_title:"Vaccine & deworming timeline", vaccine_sub:"Enter your pet's birth date to generate a simple schedule.",
lbl_species2:"Species", lbl_birthdate:"Birth date", btn_generate:"Generate schedule",
vaccine_locked_hint:"🔒 Premium: export this as a printable PDF",
cost_title:"Monthly cost estimate", cost_sub:"A rough budget for one pet's recurring expenses.",
lbl_food_cost:"Food / month", lbl_litter_cost:"Litter / grooming", lbl_vet_cost:"Vet / insurance", lbl_extras_cost:"Toys / extras",
btn_estimate:"Estimate", cost_locked_hint:"🔒 Premium: multi-pet annual Excel report",
import_title:"Pet travel & import rules", import_sub:"Quick basics by destination country. Always confirm with the official authority before travel.",
import_locked_hint:"🔒 Premium: full compliance PDF (quarantine, crate sizing, banned items)",
premium_eyebrow:"One-time purchase · Lifetime", premium_title:"Go ad-free, forever, for one small payment",
premium_b1:"Removes all ads sitewide, permanently", premium_b2:"Unlimited pets with cloud-saved profiles",
premium_b3:"Printable PDF: full vaccine + deworming + check-up plan", premium_b4:"Full travel compliance PDF for any destination",
premium_b5:"Multi-pet annual Excel cost report", premium_b6:"Custom weight-loss / weight-gain feeding plans",
premium_b7:"Everything works fully offline",
price_note:"Limited-time price. Your price is locked in forever once purchased.",
btn_buy:"Unlock Premium — one-time", btn_restore:"Restore a previous purchase",
modal_title:"Unlock Premium",
modal_body:"You'll be taken to a secure Stripe checkout page. An email receipt and permanent unlock code will be issued automatically. You can optionally check a box to receive occasional product update emails — unchecked by default.",
btn_continue:"Continue to checkout",
restore_title:"Restore purchase", lbl_restore_email:"Purchase email", lbl_restore_order:"Order number", btn_restore_submit:"Restore access",
footer_more:"More toolboxes:", footer_student:"Study Abroad & Overseas Work Toolbox", footer_car:"Used Car Lifecycle & Valuation Toolbox",
footer_legal:"© 2026 Pet Age Toolbox. Estimates only — not veterinary, legal, or financial advice.",
premium_active_banner:"✓ Premium active on this device — thank you!",
restore_ok:"Restored! Premium is now active on this device.",
restore_fail:"No matching purchase found. Check the email and order number, or contact support.",
toxic_no_match:"No exact match found. When in doubt, contact a vet or poison control.",
},
"zh-CN": {
page_title:"宠物年龄换算工具箱 — 换算、规划、防护",
brand_name:"宠物年龄工具箱",
hero_eyebrow:"免费 · 无需登录 · 可离线使用",
hero_title:"你的宠物到底多大了？",
hero_sub:"一只7岁的大丹犬和一只7岁的家猫年龄完全不同。在下面准确换算。",
lbl_species:"物种", lbl_size:"体型", lbl_years:"岁", lbl_months:"月",
opt_dog:"狗", opt_cat:"猫", opt_small:"小型（<9kg）", opt_medium:"中型（9–22kg）", opt_large:"大型（22–40kg）", opt_giant:"巨型（>40kg）",
result_pet_age:"宠物年龄", result_human_age:"对应人类年龄",
age_fineprint:"基于常见兽医生长曲线估算，具体品种与健康状况会有差异。",
btn_add_pet:"+ 添加另一只宠物（免费最多3只）",
calorie_title:"每日喂食热量", calorie_sub:"基于体重、年龄、绝育状态与活动量计算。",
lbl_weight:"体重（kg)", lbl_status:"生命阶段/状态",
status_growth:"幼犬/幼猫（生长期）", status_intact:"成年未绝育", status_neutered:"成年已绝育",
status_loss:"需要减重", status_gain:"需要增重", status_active:"非常活跃/工作犬", status_senior:"老年",
btn_calculate:"计算",
toxic_title:"这对我的宠物有毒吗？", toxic_sub:"搜索食物、植物和家居用品，狗与猫分别评级。",
toxic_placeholder:"输入物品，例如“葡萄”“百合”“漂白水”…",
vaccine_title:"疫苗与驱虫时间表", vaccine_sub:"输入宠物出生日期，生成简易计划。",
lbl_species2:"物种", lbl_birthdate:"出生日期", btn_generate:"生成计划",
vaccine_locked_hint:"🔒 高级版：导出可打印PDF",
cost_title:"每月开销估算", cost_sub:"单只宠物常规开销的粗略预算。",
lbl_food_cost:"食物/月", lbl_litter_cost:"猫砂/美容", lbl_vet_cost:"医疗/保险", lbl_extras_cost:"玩具/其他",
btn_estimate:"估算", cost_locked_hint:"🔒 高级版：多宠物年度Excel报表",
import_title:"宠物出行与入境规则", import_sub:"按目的地国家速查基础信息，出行前请务必与官方机构确认。",
import_locked_hint:"🔒 高级版：完整合规PDF（隔离、箱体尺寸、禁带物品）",
premium_eyebrow:"一次性购买 · 永久使用", premium_title:"一次小额付费，永久去广告",
premium_b1:"永久移除全站广告", premium_b2:"无限宠物档案，云端存储",
premium_b3:"可打印PDF：完整疫苗+驱虫+体检计划", premium_b4:"任意目的地完整出行合规PDF",
premium_b5:"多宠物年度Excel开销报表", premium_b6:"自定义减重/增重喂食方案",
premium_b7:"全部功能支持离线使用",
price_note:"限时价格，购买后永久锁定该价格权益。",
btn_buy:"解锁高级版 — 一次性付费", btn_restore:"恢复之前的购买",
modal_title:"解锁高级版",
modal_body:"将跳转至安全的Stripe结账页。系统会自动发送邮件凭证与永久解锁码。可自愿勾选接收偶尔的产品更新邮件，默认不勾选。",
btn_continue:"前往结账",
restore_title:"恢复购买", lbl_restore_email:"购买邮箱", lbl_restore_order:"订单号", btn_restore_submit:"恢复权限",
footer_more:"更多工具箱：", footer_student:"留学生&海外打工生存工具箱", footer_car:"二手车全周期成本&估值套利工具箱",
footer_legal:"© 2026 宠物年龄工具箱。仅供估算参考，非兽医、法律或财务建议。",
premium_active_banner:"✓ 本设备已激活高级版，感谢支持！",
restore_ok:"恢复成功！本设备已激活高级版。",
restore_fail:"未找到匹配的购买记录。请核对邮箱和订单号，或联系客服。",
toxic_no_match:"未找到精确匹配。如有疑虑请联系兽医或宠物中毒咨询热线。",
},
"zh-TW": {
page_title:"寵物年齡換算工具箱 — 換算、規劃、防護",
brand_name:"寵物年齡工具箱",
hero_eyebrow:"免費 · 無需登入 · 可離線使用",
hero_title:"你的寵物到底多大了？",
hero_sub:"一隻7歲的大丹犬和一隻7歲的家貓年齡完全不同。在下面準確換算。",
lbl_species:"物種", lbl_size:"體型", lbl_years:"歲", lbl_months:"月",
opt_dog:"狗", opt_cat:"貓", opt_small:"小型（<9kg）", opt_medium:"中型（9–22kg）", opt_large:"大型（22–40kg）", opt_giant:"巨型（>40kg）",
result_pet_age:"寵物年齡", result_human_age:"對應人類年齡",
age_fineprint:"基於常見獸醫生長曲線估算，具體品種與健康狀況會有差異。",
btn_add_pet:"+ 新增另一隻寵物（免費最多3隻）",
calorie_title:"每日餵食熱量", calorie_sub:"依體重、年齡、絕育狀態與活動量計算。",
lbl_weight:"體重（kg）", lbl_status:"生命階段/狀態",
status_growth:"幼犬/幼貓（生長期）", status_intact:"成年未絕育", status_neutered:"成年已絕育",
status_loss:"需要減重", status_gain:"需要增重", status_active:"非常活躍/工作犬", status_senior:"老年",
btn_calculate:"計算",
toxic_title:"這對我的寵物有毒嗎？", toxic_sub:"搜尋食物、植物與居家用品，狗與貓分別評級。",
toxic_placeholder:"輸入物品，例如「葡萄」「百合」「漂白水」…",
vaccine_title:"疫苗與驅蟲時間表", vaccine_sub:"輸入寵物出生日期，產生簡易計畫。",
lbl_species2:"物種", lbl_birthdate:"出生日期", btn_generate:"產生計畫",
vaccine_locked_hint:"🔒 高級版：匯出可列印PDF",
cost_title:"每月開銷估算", cost_sub:"單隻寵物常規開銷的粗略預算。",
lbl_food_cost:"食物/月", lbl_litter_cost:"貓砂/美容", lbl_vet_cost:"醫療/保險", lbl_extras_cost:"玩具/其他",
btn_estimate:"估算", cost_locked_hint:"🔒 高級版：多寵物年度Excel報表",
import_title:"寵物出行與入境規則", import_sub:"依目的地國家速查基礎資訊，出行前請務必與官方機構確認。",
import_locked_hint:"🔒 高級版：完整合規PDF（隔離、箱體尺寸、禁帶物品）",
premium_eyebrow:"一次性購買 · 永久使用", premium_title:"一次小額付費，永久去廣告",
premium_b1:"永久移除全站廣告", premium_b2:"無限寵物檔案，雲端儲存",
premium_b3:"可列印PDF：完整疫苗+驅蟲+健檢計畫", premium_b4:"任意目的地完整出行合規PDF",
premium_b5:"多寵物年度Excel開銷報表", premium_b6:"自訂減重/增重餵食方案",
premium_b7:"全部功能支援離線使用",
price_note:"限時價格，購買後永久鎖定該價格權益。",
btn_buy:"解鎖高級版 — 一次性付費", btn_restore:"恢復先前的購買",
modal_title:"解鎖高級版",
modal_body:"將跳轉至安全的Stripe結帳頁。系統會自動寄送郵件憑證與永久解鎖碼。可自願勾選接收偶爾的產品更新郵件，預設不勾選。",
btn_continue:"前往結帳",
restore_title:"恢復購買", lbl_restore_email:"購買信箱", lbl_restore_order:"訂單號", btn_restore_submit:"恢復權限",
footer_more:"更多工具箱：", footer_student:"留學生&海外打工生存工具箱", footer_car:"Used Car Lifecycle & Valuation Toolbox",
footer_legal:"© 2026 寵物年齡工具箱。僅供估算參考，非獸醫、法律或財務建議。",
premium_active_banner:"✓ 本裝置已啟用高級版，感謝支持！",
restore_ok:"恢復成功！本裝置已啟用高級版。",
restore_fail:"未找到符合的購買記錄。請核對信箱和訂單號，或聯絡客服。",
toxic_no_match:"未找到精確符合項目。如有疑慮請聯絡獸醫或寵物中毒諮詢熱線。",
}
};

let currentLang = (navigator.language||"en").startsWith("zh")
? ((navigator.language||"").toLowerCase().includes("tw") || (navigator.language||"").toLowerCase().includes("hk") ? "zh-TW" : "zh-CN")
: "en";

let DATA = null;

function t(key){
return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key;
}

function applyI18n(){
document.documentElement.lang = currentLang;

document.querySelectorAll("[data-i18n]").forEach(el=>{
el.textContent = t(el.getAttribute("data-i18n"));
});

document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
});

document.querySelectorAll(".lang-btn").forEach(button=>{
button.classList.toggle("is-active", button.dataset.lang === currentLang);
});

populateImportCountries();
renderMarquee();
}

document.querySelectorAll(".lang-btn").forEach(button=>{
button.addEventListener("click", ()=>{
currentLang = button.dataset.lang;
applyI18n();
});
});

/* ===================== LOAD DATA ===================== */
fetch("/data/data.json")
.then(response=>response.json())
.then(data=>{
DATA = data;
applyI18n();
runAgeTranslator();
})
.catch(()=>{
console.error("Failed to load dataset");
});

/* ===================== AGE TRANSLATOR ===================== */
function computeHumanAge(species, sizeKey, years, months){
const totalYears = years + months / 12;
let table;

if(species === "cat"){
table = DATA.ageConversion.cat;
}else{
table = DATA.ageConversion.dog[sizeKey] || DATA.ageConversion.dog.medium;
}

const breakpoints = table.breakpoints;

if(totalYears <= 0){
return 0;
}

if(totalYears <= breakpoints[0].petAge){
return Math.round((totalYears / breakpoints[0].petAge) * breakpoints[0].humanAge);
}

for(let index = 0; index < breakpoints.length - 1; index++){
if(totalYears <= breakpoints[index + 1].petAge){
const span = breakpoints[index + 1].petAge - breakpoints[index].petAge;
const fraction = (totalYears - breakpoints[index].petAge) / span;

```
  return Math.round(
    breakpoints[index].humanAge +
    fraction * (breakpoints[index + 1].humanAge - breakpoints[index].humanAge)
  );
}
```

}

const lastBreakpoint = breakpoints[breakpoints.length - 1];

return Math.round(
lastBreakpoint.humanAge +
(totalYears - lastBreakpoint.petAge) * table.perYearAfter
);
}

function runAgeTranslator(){
if(!DATA){
return;
}

const species = document.getElementById("species").value;
const size = document.getElementById("size").value;
const years = parseInt(document.getElementById("years").value, 10) || 0;
const months = parseInt(document.getElementById("months").value, 10) || 0;

document.getElementById("size-field").style.display = species === "dog" ? "" : "none";

const humanAge = computeHumanAge(species, size, years, months);

document.getElementById("out-pet-age").textContent = `${years}y ${months}m`;
document.getElementById("out-human-age").textContent = humanAge;
}

["species", "size", "years", "months"].forEach(id=>{
document.getElementById(id).addEventListener("input", runAgeTranslator);
document.getElementById(id).addEventListener("change", runAgeTranslator);
});

let batchPets = [];

document.getElementById("add-pet-btn").addEventListener("click", ()=>{
if(!isPremium() && batchPets.length >= 2){
openPaywall();
return;
}

const species = document.getElementById("species").value;
const size = document.getElementById("size").value;
const years = parseInt(document.getElementById("years").value, 10) || 0;
const months = parseInt(document.getElementById("months").value, 10) || 0;
const human = computeHumanAge(species, size, years, months);

batchPets.push({ species, size, years, months, human });

renderBatch();
});

function renderBatch(){
const list = document.getElementById("batch-list");
list.innerHTML = "";

batchPets.forEach(pet=>{
const row = document.createElement("div");

```
row.className = "batch-item";
row.innerHTML = `
  <span>${pet.species === "dog" ? t("opt_dog") : t("opt_cat")} · ${pet.years}y ${pet.months}m</span>
  <span class="mono">≈ ${pet.human}</span>
`;

list.appendChild(row);
```

});
}

/* ===================== CALORIE CALCULATOR ===================== */
document.getElementById("cal-run").addEventListener("click", ()=>{
const weight = parseFloat(document.getElementById("cal-weight").value) || 0;
const status = document.getElementById("cal-status").value;

if(weight <= 0){
document.getElementById("cal-result").textContent = "";
return;
}

const calorieConfig = DATA.calorie;
const rer = calorieConfig.RER_factor * Math.pow(weight, calorieConfig.RER_exponent);
const mer = rer * (calorieConfig.activityMultipliers[status] || 1.4);
const grams = mer / calorieConfig.kcalPerGramDryFood;

document.getElementById("cal-result").innerHTML =
`<strong class="mono">${Math.round(mer)} kcal/day</strong> · ≈ <span class="mono">${Math.round(grams)} g</span> ${
      currentLang === "en"
        ? "of typical dry food (3.5 kcal/g — check your bag's actual label)"
        : "典型干粮（每克3.5大卡，请以实际包装标签为准）"
    }`;
});

/* ===================== TOXICITY CHECKER ===================== */
function tagFor(level){
const classMap = {
severe:"tag-severe",
moderate:"tag-moderate",
low:"tag-low",
unknown:"tag-unknown"
};

const labelMap = {
en:{ severe:"Severe", moderate:"Moderate", low:"Low", unknown:"Unknown" },
"zh-CN":{ severe:"严重", moderate:"中度", low:"轻微", unknown:"未知" },
"zh-TW":{ severe:"嚴重", moderate:"中度", low:"輕微", unknown:"未知" }
};

const className = classMap[level] || "tag-unknown";
const label = (labelMap[currentLang] || labelMap.en)[level] || level;

return `<span class="tag ${className}">${label}</span>`;
}

function searchToxic(query){
if(!DATA){
return [];
}

const normalizedQuery = query.trim().toLowerCase();

if(!normalizedQuery){
return [];
}

const allItems = [...DATA.toxicFoods, ...DATA.toxicPlantsHousehold];

return allItems.filter(item=>{
return Object.values(item.name).some(name=>{
return name.toLowerCase().includes(normalizedQuery);
});
}).slice(0, 8);
}

document.getElementById("toxic-search").addEventListener("input", event=>{
const results = searchToxic(event.target.value);
const box = document.getElementById("toxic-result");

if(!event.target.value.trim()){
box.innerHTML = "";
return;
}

if(results.length === 0){
box.innerHTML = `<p>${t("toxic_no_match")}</p>`;
return;
}

box.innerHTML = results.map(item=>{
const name = item.name[currentLang] || item.name.en;
const note = item.note[currentLang] || item.note.en;

```
return `
  <div class="toxic-row">
    <div>
      <strong>${name}</strong><br>
      <span style="color:#7a7a6e;font-size:.82rem">${note}</span>
    </div>
    <div style="display:flex;flex-direction:column;gap:4px;align-items:flex-end">
      <span>${t("opt_dog")}: ${tagFor(item.dog)}</span>
      <span>${t("opt_cat")}: ${tagFor(item.cat)}</span>
    </div>
  </div>
`;
```

}).join("");
});

/* ===================== VACCINE SCHEDULE ===================== */
document.getElementById("vac-run").addEventListener("click", ()=>{
const species = document.getElementById("vac-species").value;
const birthDateValue = document.getElementById("vac-birthdate").value;
const box = document.getElementById("vac-result");

if(!birthDateValue){
box.innerHTML = "";
return;
}

const birthDate = new Date(birthDateValue);
const schedule = DATA.vaccineSchedule[species];

const vaccineRows = schedule.map(item=>{
const date = new Date(birthDate.getTime() + item.week * 7 * 24 * 3600 * 1000);

```
return `
  <div class="vac-row">
    <span>${date.toLocaleDateString(currentLang)}</span>
    <span>${item.item[currentLang] || item.item.en}</span>
  </div>
`;
```

});

const dewormRows = DATA.vaccineSchedule.dewormingWeeks.slice(0, 5).map(week=>{
const date = new Date(birthDate.getTime() + week * 7 * 24 * 3600 * 1000);

```
return `
  <div class="vac-row">
    <span>${date.toLocaleDateString(currentLang)}</span>
    <span>${currentLang === "en" ? "Deworming" : "驱虫"}</span>
  </div>
`;
```

});

box.innerHTML = vaccineRows.join("") + dewormRows.join("");
});

/* ===================== COST ESTIMATOR ===================== */
document.getElementById("cost-run").addEventListener("click", ()=>{
const values = [
"cost-food",
"cost-grooming",
"cost-vet",
"cost-extras"
].map(id=>{
return parseFloat(document.getElementById(id).value) || 0;
});

const total = values.reduce((sum, value)=>sum + value, 0);

document.getElementById("cost-result").innerHTML =
`<div class="cost-total">$${total.toFixed(2)} / mo · ≈ $${(total * 12).toFixed(2)} / yr</div>`;
});

/* ===================== IMPORT RULES ===================== */
function populateImportCountries(){
if(!DATA){
return;
}

const select = document.getElementById("import-country");

select.innerHTML = DATA.importRules.map((country, index)=>{
return `<option value="${index}">${country.country[currentLang] || country.country.en}</option>`;
}).join("");

renderImportResult();
}

function renderImportResult(){
const select = document.getElementById("import-country");

if(!select || select.value === ""){
return;
}

const country = DATA.importRules[parseInt(select.value, 10)];

if(!country){
return;
}

const note = country.note[currentLang] || country.note.en;

document.getElementById("import-result").innerHTML = `     <div class="vac-row">       <span>${currentLang === "en" ? "Rabies vaccine required" : "需要狂犬疫苗"}</span>       <span>${country.rabiesRequired ? "✓" : "—"}</span>     </div>     <div class="vac-row">       <span>${currentLang === "en" ? "Min. age" : "最低年龄"}</span>       <span>${country.minAgeWeeks} ${currentLang === "en" ? "weeks" : "周"}</span>     </div>     <div class="vac-row">       <span>${currentLang === "en" ? "Quarantine" : "隔离期"}</span>       <span>${country.quarantineDays} ${currentLang === "en" ? "days" : "天"}</span>     </div>     <p style="font-size:.85rem;color:#7a7a6e;margin-top:8px">${note}</p>
  `;
}

document.getElementById("import-country").addEventListener("change", renderImportResult);

/* ===================== ADS ===================== */
let ADS_CONFIG = null;

fetch("/ads-config.json")
.then(response=>response.json())
.then(config=>{
ADS_CONFIG = config;
renderAds();
})
.catch(()=>{});

function isPremium(){
return localStorage.getItem("petToolbox_premium") === "1";
}

function renderAds(){
if(!ADS_CONFIG){
return;
}

document.body.classList.toggle("premium-active", isPremium());

if(isPremium()){
return;
}

const slotIds = {
topBanner:"ad-top",
sidebar:"ad-sidebar",
bottomBanner:"ad-bottom"
};

Object.entries(slotIds).forEach(([key, id])=>{
const config = ADS_CONFIG.slots[key];
const element = document.getElementById(id);

```
if(!config || !config.enabled || !element){
  return;
}

const privateCreative = config.private;

element.innerHTML =
  `<a href="${privateCreative.linkUrl}" target="_blank" rel="noopener sponsored">
    <img src="${privateCreative.imageUrl}" alt="${privateCreative.alt}" onerror="this.style.display='none'">
  </a>`;
```

});

maybeShowInterstitial();
}

function renderMarquee(){
if(!ADS_CONFIG || isPremium()){
return;
}

const config = ADS_CONFIG.slots.marquee;
const track = document.getElementById("marquee-track");

if(!config || !config.enabled || !track){
return;
}

const text = config.text[currentLang] || config.text.en;

track.textContent = `${text}    •    ${text}`;
}

function maybeShowInterstitial(){
const config = ADS_CONFIG.privateInterstitial;

if(!config || !config.enabled || ADS_CONFIG.googleVignetteEnabled){
return;
}

if(config.suppressOnFirstVisit && !localStorage.getItem("petToolbox_visited")){
localStorage.setItem("petToolbox_visited", "1");
return;
}

const today = new Date().toDateString();
const countKey = `petToolbox_interstitial_${today}`;
const count = parseInt(localStorage.getItem(countKey) || "0", 10);

if(count >= config.maxPerUserPerDay){
return;
}

const lastShown = parseInt(localStorage.getItem("petToolbox_interstitial_last") || "0", 10);

if(Date.now() - lastShown < config.minSecondsBetweenShows * 1000){
return;
}

setTimeout(()=>{
localStorage.setItem(countKey, String(count + 1));
localStorage.setItem("petToolbox_interstitial_last", String(Date.now()));
showInterstitialModal(config.creative);
}, 8000);
}

function showInterstitialModal(creative){
const backdrop = document.createElement("div");

backdrop.className = "modal-backdrop";
backdrop.innerHTML = `     <div class="modal card">       <button class="modal-close" aria-label="Close">×</button>       <a href="${creative.linkUrl}" target="_blank" rel="noopener sponsored">         <img src="${creative.imageUrl}" style="max-width:100%" onerror="this.style.display='none'">       </a>     </div>
  `;

document.body.appendChild(backdrop);

backdrop.querySelector(".modal-close").addEventListener("click", ()=>{
backdrop.remove();
});

backdrop.addEventListener("click", event=>{
if(event.target === backdrop){
backdrop.remove();
}
});
}

/* ===================== PRICING ===================== */
fetch("/pricing-schedule.json")
.then(response=>response.json())
.then(pricing=>{
const now = new Date();

```
const active = pricing.schedule.find(item=>{
  const start = new Date(item.startsAt);
  const end = new Date(start.getTime() + item.durationDays * 86400000);

  return now >= start && now < end;
}) || pricing.schedule[pricing.schedule.length - 1];

document.getElementById("price-new").textContent = `$${active.priceUsd.toFixed(2)}`;

const standard = pricing.schedule.find(item=>{
  return item.label.includes("standard");
});

if(standard && standard.priceUsd !== active.priceUsd){
  document.getElementById("price-old").textContent = `$${standard.priceUsd.toFixed(2)}`;
  document.getElementById("price-old").style.display = "";
}else{
  document.getElementById("price-old").style.display = "none";
}

window.__activePriceLabel = active.label;
```

})
.catch(()=>{});

/* ===================== PAYWALL / CHECKOUT ===================== */
function openPaywall(){
document.getElementById("paywall-modal").hidden = false;
}

function closePaywall(){
document.getElementById("paywall-modal").hidden = true;
}

document.getElementById("buy-btn").addEventListener("click", openPaywall);

document.getElementById("modal-close").addEventListener("click", closePaywall);

document.getElementById("paywall-modal").addEventListener("click", event=>{
if(event.target.id === "paywall-modal"){
closePaywall();
}
});

document.getElementById("modal-checkout").addEventListener("click", async ()=>{
try{
const response = await fetch("/api/create-checkout-session", {
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
priceLabel:window.__activePriceLabel,
lang:currentLang
})
});

```
const data = await response.json();

if(data.url){
  window.location.href = data.url;
}else{
  alert(
    currentLang === "en"
      ? "Checkout is not configured yet on the server."
      : "服务器尚未配置结账功能。"
  );
}
```

}catch(error){
alert(
currentLang === "en"
? "Checkout is not configured yet on the server."
: "服务器尚未配置结账功能。"
);
}
});

/* ===================== RESTORE PURCHASE ===================== */
document.getElementById("restore-btn").addEventListener("click", ()=>{
document.getElementById("restore-modal").hidden = false;
});

document.getElementById("restore-close").addEventListener("click", ()=>{
document.getElementById("restore-modal").hidden = true;
});

document.getElementById("restore-submit").addEventListener("click", async ()=>{
const email = document.getElementById("restore-email").value.trim();
const order = document.getElementById("restore-order").value.trim();
const output = document.getElementById("restore-result");

if(!email || !order){
output.textContent =
currentLang === "en"
? "Please fill in both fields."
: "请填写完整信息。";
return;
}

try{
const response = await fetch("/api/restore-purchase", {
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
email,
order
})
});

```
const data = await response.json();

if(data.authCode){
  localStorage.setItem("petToolbox_premium", "1");
  localStorage.setItem("petToolbox_authCode", data.authCode);

  output.textContent = t("restore_ok");

  renderAds();
}else{
  output.textContent = t("restore_fail");
}
```

}catch(error){
output.textContent = t("restore_fail");
}
});

document.addEventListener("DOMContentLoaded", ()=>{
document.body.classList.toggle("premium-active", isPremium());
});
