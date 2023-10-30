import React, { useState } from "react";
import "./Faq.css";
function FaqTwo() {
	const [faqs, setFaqs] = useState([
		{
			question: "How can I pay my electricity bill online?",
			answer:
				"You can pay your electricity bill online through our website or mobile app. Simply log in to your account, enter your billing information, and choose a payment method.",
		},
		{
			question:
				"What payment methods are accepted for electricity bill payments?",
			answer:
				"We accept various payment methods, including credit/debit cards, bank transfers, e-wallets, and more. You can choose the one that is most convenient for you.",
		},
		{
			question: "Is it safe to make online payments for my electricity bill?",
			answer:
				"Yes, we prioritize security. Our payment platform uses encryption to protect your financial information, and we regularly update our security measures to ensure a safe transaction.",
		},
		{
			question: "Can I set up automatic bill payments?",
			answer:
				"Yes, you can set up automatic bill payments by linking your preferred payment method to your account. Your bill will be paid automatically on the due date.",
		},
		{
			question: "What should I do if my online payment fails?",
			answer:
				"If your payment fails, please double-check your payment details and try again. If the issue persists, contact our customer support for assistance.",
		},
		{
			question: "Can I view my billing history online?",
			answer:
				"Yes, you can access your billing history and payment records by logging into your account and navigating to the billing section.",
		},
		{
			question: "What is the due date for my electricity bill?",
			answer:
				"he due date varies depending on your billing cycle. You can find the due date on your bill or by logging into your account.",
		},
		{
			question:
				"Do I need to create an account to pay my electricity bill online?",
			answer:
				"Yes, you'll need to create an account to make online payments. This ensures your payments are securely linked to your billing information.",
		},
		{
			question: "How can I receive my electricity bill electronically?",
			answer:
				"You can opt to receive your electricity bills electronically by updating your communication preferences in your account settings.",
		},
		{
			question: "What happens if I miss my electricity bill payment?",
			answer:
				"If you miss a payment, late fees may apply. It's important to pay your bill on time to avoid any service interruptions. Contact us for assistance if you're having trouble making a payment.",
		},
		// Add more FAQ items here
	]);

	const toggleFAQ = (index) => {
		const updatedFaqs = [...faqs];
		updatedFaqs[index].isOpen = !updatedFaqs[index].isOpen;
		setFaqs(updatedFaqs);
	};

	return (
		<div>
			<h1>Electricity Bill Payment FAQ</h1>
			<h5>
				{faqs.map((faq, index) => (
					<div key={index} className="faq-item">
						<div
							className="faq-question"
							onClick={() => toggleFAQ(index)}
							style={faq.isOpen ? { color: "rgb(76, 216, 207)" } : {}}
						>
							{faq.isOpen ? "- " : "+ "} {faq.question}
						</div>
						{faq.isOpen && <div className="faq-answer">{faq.answer}</div>}
					</div>
				))}
			</h5>
		</div>
	);
}

export default FaqTwo;
