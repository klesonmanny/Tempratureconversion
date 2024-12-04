        const textbox = document.getElementById("textbox");
        const toFahrenheit = document.getElementById("toFahrenheit");
        const toCelsius = document.getElementById("toCelsius");
        const result = document.getElementById("result");
        const themeToggle = document.getElementById("themeToggle");
        const themeText = document.getElementById("themeText");
        let temp;

        function convert() {
            const value = textbox.value.trim();

            if (value === "" || isNaN(value)) {
                result.textContent = "Please enter a valid number.";
                result.className = "error";
                return;
            }

            result.className = "";

            if (toFahrenheit.checked) {
                temp = Number(value);
                temp = temp * 9 / 5 + 32;
                result.textContent = `${value}°C = ${temp.toFixed(1)}°F`;
            } else if (toCelsius.checked) {
                temp = Number(value);
                temp = (temp - 32) * (5 / 9);
                result.textContent = `${value}°F = ${temp.toFixed(1)}°C`;
            } else {
                result.textContent = "Please select a conversion unit.";
                result.className = "error";
            }
        }

        themeToggle.addEventListener("change", () => {
            document.body.classList.toggle("dark-mode");
            if (document.body.classList.contains("dark-mode")) {
                themeText.textContent = "Dark Mode";
            } else {
                themeText.textContent = "Light Mode";
            }
        });