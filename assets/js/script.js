// assets/js/script.js

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('productType')?.addEventListener('change', handleProductTypeChange);
    document.getElementById('mass-delete-button')?.addEventListener('click', handleMassDelete);
});

/**
 * Handles changes in the product type dropdown.
 * Dynamically updates the form fields based on the selected product type.
 */
function handleProductTypeChange() {
    const type = document.getElementById('productType').value;
    const typeAttributes = document.getElementById('typeAttributes');
    
    typeAttributes.innerHTML = ''; // Clear previous attributes
    
    switch (type) {
        case 'DVD':
            typeAttributes.innerHTML = `
                <div class="form-group">
                    <label for="size">Size (MB):</label>
                    <input type="number" class="form-control" id="size" name="size" required>
                </div>
            `;
            break;
        case 'Book':
            typeAttributes.innerHTML = `
                <div class="form-group">
                    <label for="weight">Weight (Kg):</label>
                    <input type="number" class="form-control" id="weight" name="weight" required>
                </div>
            `;
            break;
        case 'Furniture':
            typeAttributes.innerHTML = `
                <div class="form-group">
                    <label for="height">Height (cm):</label>
                    <input type="number" class="form-control" id="height" name="height" required>
                </div>
                <div class="form-group">
                    <label for="width">Width (cm):</label>
                    <input type="number" class="form-control" id="width" name="width" required>
                </div>
                <div class="form-group">
                    <label for="length">Length (cm):</label>
                    <input type="number" class="form-control" id="length" name="length" required>
                </div>
            `;
            break;
    }
}

/**
 * Handles the mass delete button click.
 * Submits the form to delete selected products.
 */
function handleMassDelete() {
    const form = document.getElementById('productForm');
    if (form) {
        form.submit();
    }
}
