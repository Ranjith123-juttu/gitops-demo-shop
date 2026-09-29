const statusHeading = document.getElementById("status-heading");
const statusMessage = document.getElementById("status-message");
const statusBadge = document.getElementById("status-badge");
const productsContainer = document.getElementById("products");
const productCount = document.getElementById("product-count");
const versionElement = document.getElementById("version");

async function fetchJson(url) {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
    }

    return response.json();
}

async function loadBackendStatus() {
    try {
        const health = await fetchJson("/api/health");

        statusHeading.textContent = "Backend is healthy";
        statusMessage.textContent = `${health.service} responded successfully.`;
        statusBadge.textContent = "HEALTHY";
        statusBadge.classList.add("healthy");
    } catch (error) {
        statusHeading.textContent = "Backend unavailable";
        statusMessage.textContent = "The frontend could not reach the backend API.";
        statusBadge.textContent = "FAILED";
        statusBadge.classList.add("failed");
        console.error(error);
    }
}

async function loadProducts() {
    try {
        const data = await fetchJson("/api/products");

        productCount.textContent = `${data.items.length} products`;

        productsContainer.innerHTML = data.items.map(
            (product) => `
                <article class="product">
                    <p class="eyebrow">PRODUCT #${product.id}</p>
                    <h3>${product.name}</h3>
                    <p class="price">${product.currency} ${product.price.toFixed(2)}</p>
                </article>
            `
        ).join("");
    } catch (error) {
        productsContainer.innerHTML = `
            <div class="error">
                Unable to load products from the backend API.
            </div>
        `;
        console.error(error);
    }
}

async function loadVersion() {
    try {
        const data = await fetchJson("/api/version");
        versionElement.textContent = data.version;
    } catch (error) {
        versionElement.textContent = "unknown";
        console.error(error);
    }
}

async function initialize() {
    await Promise.all([
        loadBackendStatus(),
        loadProducts(),
        loadVersion(),
    ]);
}

initialize();
