const stripe = Stripe('pk_test_51RjrdeP3pkq0qqBy3ILSuogHpgAsRtYJt7n66Rkzfe5tMxpKPzrgx64pprf5E9anufEiFvf2WswXwjpqAhfVrkFl00vk89hlSb');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
	stripe.redirectToCheckout({
		sessionId: sessionId
	})
});