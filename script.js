const data = [
    {
        title: "Apple",
        sub: "AAPL",
        text: "$ 2.690 T"
    },
    {
        title: "Microsoft",
        sub: "MSFT",
        text: "$ 2.228 T"
    },
    {
        title: "Saudi Aramco",
        sub: "2222.SR",
        text: "$ 2.205 T"
    },
    {
        title: "Alphabet (Google)",
        sub: "GOOG",
        text: "$ 1.778 T"
    },
    {
        title: "Amazon",
        sub: "AMZN",
        text: "$ 1.565 T"
    },
    {
        title: "Tesla",
        sub: "TSLA",
        text: "$ 837.00 B"
    },
    {
        title: "Nvidia",
        sub: "NVDA",
        text: "$ 601.99 B"
    }
]

function loadEvent() {
    console.log("Load completed.");
    document.getElementById("items").insertAdjacentHTML("beforeend", data.map((item, index) => 
        `<div class="card">
            <div class="cardData">
                <div class="sub">${item.sub}</div>
                <h2 class="title">${item.title}</h2>
            </div>
            <div class="text">${item.text}</div>
            <button>
                <span class="buttonText">Visit</span>
                <span class="arrow material-icons">arrow_forward</span>
            </button>
        </div>`).join(''));
}

window.addEventListener("load", loadEvent);