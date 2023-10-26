import React from "react";
import "./postpaid.css"; // CSS file for styling

const Postpaid = () => {
	return (
		<div className="postpaid-container">
			<h2 className="postpaid-header">
				Monitor Your Meter Reading Each Month. If Not, Apply To Our Service
				Center Immediately
			</h2>
			<p className="postpaid-paragraph">
				Dear Post-paid customers, if you are sure every month that your electric
				meter is not read or checked by a reader because your house is closed or
				for some other reason, we ask you to report it to our customer service
				center located at your supplier immediately.
			</p>
			<p className="postpaid-paragraph">
				What are the shortcomings for customers, if their meter is not read or
				checked every month?
			</p>
			<p className="postpaid-paragraph">
				Remember, if you don't get a bill due to a meter reading, you may incur
				additional charges.
			</p>
			<p className="postpaid-paragraph">
				For example, if you are a residential customer and use 90 kWh in
				September and 120 kWh in October, if your meter is read every month and
				a bill is prepared for you every month:
			</p>
			<ul className="postpaid-list">
				<li>
					In September, 90 * 0.767 = 69.03 Birr. When the service charge is
					added to this, the total monthly bill comes to 111.03 Birr.
				</li>
				<li>
					In October, 120 * 1.625 = 195 Birr. When the service fee is added to
					this, the total monthly bill comes to 237 Birr.
				</li>
			</ul>
			<p className="postpaid-paragraph">
				However, if your meter is not read in September and you do not receive a
				reading, and if you only pay 10 Birr for the September service fee, and
				the September and October readings are entered together, the payment you
				will have to make is 210 kWh x 2,000 = 420 Birr, plus 10 Birr for
				September and 42 Birr for the October service fee in total. You will pay
				472 Birr.
			</p>
			<p className="postpaid-paragraph">
				This means that every time the KW-hour increases, the KW-hour payment
				also will be added to the next additional payment level (level), so you
				will spend 123.97 more money than you would have to pay every month.
			</p>
			<p className="postpaid-paragraph">
				Therefore, our dear customers, if you are sure that your electricity
				meter has not been read according to the reading schedule, and if you
				are sure that it has not been read and checked every month for various
				reasons, we ask you to report it in person to your nearest EEU service
				center to avoid additional costs.
			</p>
		</div>
	);
};

export default Postpaid;
