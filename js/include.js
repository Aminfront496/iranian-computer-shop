async function loadComponent(id, file) {
    const element = document.getElementById(id);
    if (!element) {
        console.error(`Element with id "${id}" not found.`);
        return;
    }
    try {
        const response = await fetch(file);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        element.innerHTML = html;
    } catch (error) {
        console.error(`Failed to load component from ${file}:`, error);
        element.innerHTML = '<p style="color: red; font-size: 1.6rem;">خطا در بارگذاری بخش.</p>';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadComponent("mobile-navbar", "components/mobile-navbar.html");
    loadComponent("header", "components/header.html");
    loadComponent("footer", "components/footer.html");
});