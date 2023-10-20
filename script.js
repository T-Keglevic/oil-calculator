document.addEventListener('DOMContentLoaded', function () {
    const gasolineInput = document.getElementById('gasoline');
    const ratioSelect = document.getElementById('ratio');
    const oilAmount = document.getElementById('oilAmount');

    // Function to calculate the required oil amount
    function calculateOil() {
        const gasoline = parseFloat(gasolineInput.value);
        const ratio = parseFloat(ratioSelect.value);
        const requiredOil = gasoline * ratio;
        oilAmount.textContent = requiredOil.toFixed(2);
    }

    // Event listeners
    gasolineInput.addEventListener('input', calculateOil);
    ratioSelect.addEventListener('change', calculateOil);

    // Initial calculation
    calculateOil();
});