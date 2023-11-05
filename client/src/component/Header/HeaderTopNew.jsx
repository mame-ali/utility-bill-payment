import React from "react";
import { useTranslation } from "react-i18next";

function HeaderTopNew() {
	const { t, i18n } = useTranslation();

	// Function to handle language change
	const handleLanguageChange = (language) => {
		i18n.changeLanguage(language);
	};

	return (
		<div>
			<div className="header-top">
				{/* ... Your existing HTML code ... */}
				<ul className="dropdown-menu hover-target" data-v-61a126ab="">
					<li className="dropdown-item py-0 w-full" data-v-61a126ab="">
						<button
							className={`nav-link w-full p-0 ${
								i18n.language === "en" ? "active" : ""
							}`}
							data-v-61a126ab=""
							onClick={() => handleLanguageChange("en")}
						>
							{t("language")}
						</button>
					</li>
					<li className="dropdown-item py-0 w-full" data-v-61a126ab="">
						<button
							className={`nav-link w-full p-0 ${
								i18n.language === "am" ? "active" : ""
							}`}
							data-v-61a126ab=""
							onClick={() => handleLanguageChange("am")}
						>
							{t("language")}
						</button>
					</li>
					<li className="dropdown-item py-0 w-full" data-v-61a126ab="">
						<button
							className={`nav-link w-full p-0 ${
								i18n.language === "om" ? "active" : ""
							}`}
							data-v-61a126ab=""
							onClick={() => handleLanguageChange("om")}
						>
							{t("language")}
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default HeaderTopNew;
