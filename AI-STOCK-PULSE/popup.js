const apiKey = "d9cvn89r01qvnjr0l3hgd9cvn89r01qvnjr0l3i0";

document
    .getElementById("refresh")
    .addEventListener("click", load);

document
    .getElementById("symbol")
    .addEventListener("change", load);

load();

async function load() {

    const symbol = document.getElementById("symbol").value;
    console.log("Selected:", symbol);
    try {
        const response = await fetch(
            `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`
        );

        const data = await response.json();
        console.log(data);

        const price = data.c;
        const previousClose = data.pc;

        const percent =
            (((price - previousClose) / previousClose) * 100).toFixed(2);

        const change = percent + "%";


        const color = parseFloat(change) >= 0 ? "green" : "red";

        document.getElementById("market").innerHTML = `
            <div class="stock">
                <span>${symbol}</span>
                <span>$${Number(price).toFixed(2)}</span>
                <span class="${color}">${change}</span>
            </div>
        `;

        aiSummary(change);

    } catch (error) {

        console.log(error);

        document.getElementById("market").innerHTML =
            "<p>Unable to fetch market data.</p>";
    }
}

function aiSummary(change) {

    let text = "";

    if (parseFloat(change) > 2) {

        text = "📈 Strong bullish momentum detected. Investors are buying aggressively.";

    } else if (parseFloat(change) > 0) {

        text = "🙂 Mild positive growth today. Market sentiment appears optimistic.";

    } else if (parseFloat(change) > -2) {

        text = "⚠ Slight decline. Investors may be taking profits.";

    } else {

        text = "📉 Heavy selling pressure today. Market sentiment is bearish.";
    }

    document.getElementById("ai").innerHTML =
        "<b>AI Insight</b><br><br>" + text;
}
