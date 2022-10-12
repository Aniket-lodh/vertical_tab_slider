const tabs = document.querySelector(".tabs");
tabs.addEventListener("click", (e) => handleClicks(e))
function handleClicks(e) {
    const target = e.target;
    const tabNum = target.dataset.tab;
    const activeTab = document.querySelector(".tabs .active");
    const activeContent = document.querySelector(".content .visible");
    const currentContent = document.querySelector(`.content_section[data-tab='${tabNum}']`);
    activeTab.classList.remove('active');
    target.classList.add("active");
    activeContent.classList.remove("visible");
    currentContent.classList.add("visible");
}