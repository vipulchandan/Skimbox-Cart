const coupons = document.querySelectorAll('.coupon');
const totalPriceDisplay = document.getElementById('total-calculated-price');
let total = 0; 

coupons.forEach(coupon => {
    const selectButton = coupon.querySelector('.select-button');
    const couponDetails = coupon.querySelector('.coupon-details');
    const couponPrice = coupon.querySelector('.price h2');

    coupon.addEventListener('click', () => {
        coupons.forEach(c => {
            c.classList.remove('selected');
            c.querySelector('.coupon-details').style.display = 'none';
            c.querySelector('.select-button').classList.remove('filled');
        });

        coupon.classList.add('selected');
        couponDetails.style.display = 'block';
        selectButton.classList.add('filled');

        total = parseFloat(couponPrice.textContent.split(' ')[1]);
        updateTotalPriceDisplay();
    });
});


function updateTotalPriceDisplay() {
    totalPriceDisplay.textContent = total.toFixed(2);
}