const CountryNames = [
    { value: "AD", text: "Andorra" },
    { value: "AE", text: "United Arab Emirates" },
    { value: "AF", text: "Afghanistan" },
    { value: "AG", text: "Antigua and Barbuda" },
    { value: "AI", text: "Anguilla" },
    { value: "AL", text: "Albania" },
    { value: "AM", text: "Armenia" },
    { value: "AO", text: "Angola" },
    { value: "AQ", text: "Antarctica" },
    { value: "AR", text: "Argentina" },
    { value: "AS", text: "American Samoa" },
    { value: "AT", text: "Austria" },
    { value: "AU", text: "Australia" },
    { value: "AW", text: "Aruba" },
    { value: "AX", text: "\u00c5land Islands" },
    { value: "AZ", text: "Azerbaijan" },
    { value: "BA", text: "Bosnia and Herzegovina" },
    { value: "BB", text: "Barbados" },
    { value: "BD", text: "Bangladesh" },
    { value: "BE", text: "Belgium" },
    { value: "BF", text: "Burkina Faso" },
    { value: "BG", text: "Bulgaria" },
    { value: "BH", text: "Bahrain" },
    { value: "BI", text: "Burundi" },
    { value: "BJ", text: "Benin" },
    { value: "BL", text: "Saint Barthélemy" },
    { value: "BM", text: "Bermuda" },
    { value: "BN", text: "Brunei Darussalam" },
    { value: "BO", text: "Bolivia, Plurinational State of" },
    { value: "BQ", text: "Caribbean Netherlands" },
    { value: "BR", text: "Brazil" },
    { value: "BS", text: "Bahamas" },
    { value: "BT", text: "Bhutan" },
    { value: "BV", text: "Bouvet Island" },
    { value: "BW", text: "Botswana" },
    { value: "BY", text: "Belarus" },
    { value: "BZ", text: "Belize" },
    { value: "CA", text: "Canada" },
    { value: "CC", text: "Cocos (Keeling) Islands" },
    { value: "CD", text: "Congo, the Democratic Republic of the" },
    { value: "CF", text: "Central African Republic" },
    { value: "CG", text: "Republic of the Congo" },
    { value: "CH", text: "Switzerland" },
    { value: "CI", text: "C\u00f4te d'Ivoire" },
    { value: "CK", text: "Cook Islands" },
    { value: "CL", text: "Chile" },
    { value: "CM", text: "Cameroon" },
    { value: "CN", text: "China (People's Republic of China)" },
    { value: "CO", text: "Colombia" },
    { value: "CR", text: "Costa Rica" },
    { value: "CU", text: "Cuba" },
    { value: "CV", text: "Cape Verde" },
    { value: "CW", text: "Cura\u00e7ao" },
    { value: "CX", text: "Christmas Island" },
    { value: "CY", text: "Cyprus" },
    { value: "CZ", text: "Czech Republic" },
    { value: "DE", text: "Germany" },
    { value: "DJ", text: "Djibouti" },
    { value: "DK", text: "Denmark" },
    { value: "DM", text: "Dominica" },
    { value: "DO", text: "Dominican Republic" },
    { value: "DZ", text: "Algeria" },
    { value: "EC", text: "Ecuador" },
    { value: "EE", text: "Estonia" },
    { value: "EG", text: "Egypt" },
    { value: "EH", text: "Western Sahara" },
    { value: "ER", text: "Eritrea" },
    { value: "ES", text: "Spain" },
    { value: "ET", text: "Ethiopia" },
    { value: "EU", text: "Europe" },
    { value: "FI", text: "Finland" },
    { value: "FJ", text: "Fiji" },
    { value: "FK", text: "Falkland Islands (Malvinas)" },
    { value: "FM", text: "Micronesia, Federated States of" },
    { value: "FO", text: "Faroe Islands" },
    { value: "FR", text: "France" },
    { value: "GA", text: "Gabon" },
    { value: "GB-ENG", text: "England" },
    { value: "GB-NIR", text: "Northern Ireland" },
    { value: "GB-SCT", text: "Scotland" },
    { value: "GB-WLS", text: "Wales" },
    { value: "GB", text: "United Kingdom" },
    { value: "GD", text: "Grenada" },
    { value: "GE", text: "Georgia" },
    { value: "GF", text: "French Guiana" },
    { value: "GG", text: "Guernsey" },
    { value: "GH", text: "Ghana" },
    { value: "GI", text: "Gibraltar" },
    { value: "GL", text: "Greenland" },
    { value: "GM", text: "Gambia" },
    { value: "GN", text: "Guinea" },
    { value: "GP", text: "Guadeloupe" },
    { value: "GQ", text: "Equatorial Guinea" },
    { value: "GR", text: "Greece" },
    { value: "GS", text: "South Georgia and the South Sandwich Islands" },
    { value: "GT", text: "Guatemala" },
    { value: "GU", text: "Guam" },
    { value: "GW", text: "Guinea-Bissau" },
    { value: "GY", text: "Guyana" },
    { value: "HK", text: "Hong Kong" },
    { value: "HM", text: "Heard Island and McDonald Islands" },
    { value: "HN", text: "Honduras" },
    { value: "HR", text: "Croatia" },
    { value: "HT", text: "Haiti" },
    { value: "HU", text: "Hungary" },
    { value: "ID", text: "Indonesia" },
    { value: "IE", text: "Ireland" },
    { value: "IL", text: "Israel" },
    { value: "IM", text: "Isle of Man" },
    { value: "IN", text: "India" },
    { value: "IO", text: "British Indian Ocean Territory" },
    { value: "IQ", text: "Iraq" },
    { value: "IR", text: "Iran, Islamic Republic of" },
    { value: "IS", text: "Iceland" },
    { value: "IT", text: "Italy" },
    { value: "JE", text: "Jersey" },
    { value: "JM", text: "Jamaica" },
    { value: "JO", text: "Jordan" },
    { value: "JP", text: "Japan" },
    { value: "KE", text: "Kenya" },
    { value: "KG", text: "Kyrgyzstan" },
    { value: "KH", text: "Cambodia" },
    { value: "KI", text: "Kiribati" },
    { value: "KM", text: "Comoros" },
    { value: "KN", text: "Saint Kitts and Nevis" },
    { value: "KP", text: "Korea, Democratic People's Republic of" },
    { value: "KR", text: "Korea, Republic of" },
    { value: "KW", text: "Kuwait" },
    { value: "KY", text: "Cayman Islands" },
    { value: "KZ", text: "Kazakhstan" },
    { value: "LA", text: "Laos (Lao People's Democratic Republic)" },
    { value: "LB", text: "Lebanon" },
    { value: "LC", text: "Saint Lucia" },
    { value: "LI", text: "Liechtenstein" },
    { value: "LK", text: "Sri Lanka" },
    { value: "LR", text: "Liberia" },
    { value: "LS", text: "Lesotho" },
    { value: "LT", text: "Lithuania" },
    { value: "LU", text: "Luxembourg" },
    { value: "LV", text: "Latvia" },
    { value: "LY", text: "Libya" },
    { value: "MA", text: "Morocco" },
    { value: "MC", text: "Monaco" },
    { value: "MD", text: "Moldova, Republic of" },
    { value: "ME", text: "Montenegro" },
    { value: "MF", text: "Saint Martin" },
    { value: "MG", text: "Madagascar" },
    { value: "MH", text: "Marshall Islands" },
    { value: "MK", text: "North Macedonia" },
    { value: "ML", text: "Mali" },
    { value: "MM", text: "Myanmar" },
    { value: "MN", text: "Mongolia" },
    { value: "MO", text: "Macao" },
    { value: "MP", text: "Northern Mariana Islands" },
    { value: "MQ", text: "Martinique" },
    { value: "MR", text: "Mauritania" },
    { value: "MS", text: "Montserrat" },
    { value: "MT", text: "Malta" },
    { value: "MU", text: "Mauritius" },
    { value: "MV", text: "Maldives" },
    { value: "MW", text: "Malawi" },
    { value: "MX", text: "Mexico" },
    { value: "MY", text: "Malaysia" },
    { value: "MZ", text: "Mozambique" },
    { value: "NA", text: "Namibia" },
    { value: "NC", text: "New Caledonia" },
    { value: "NE", text: "Niger" },
    { value: "NF", text: "Norfolk Island" },
    { value: "NG", text: "Nigeria" },
    { value: "NI", text: "Nicaragua" },
    { value: "NL", text: "Netherlands" },
    { value: "NO", text: "Norway" },
    { value: "NP", text: "Nepal" },
    { value: "NR", text: "Nauru" },
    { value: "NU", text: "Niue" },
    { value: "NZ", text: "New Zealand" },
    { value: "OM", text: "Oman" },
    { value: "PA", text: "Panama" },
    { value: "PE", text: "Peru" },
    { value: "PF", text: "French Polynesia" },
    { value: "PG", text: "Papua New Guinea" },
    { value: "PH", text: "Philippines" },
    { value: "PK", text: "Pakistan" },
    { value: "PL", text: "Poland" },
    { value: "PM", text: "Saint Pierre and Miquelon" },
    { value: "PN", text: "Pitcairn" },
    { value: "PR", text: "Puerto Rico" },
    { value: "PS", text: "Palestine" },
    { value: "PT", text: "Portugal" },
    { value: "PW", text: "Palau" },
    { value: "PY", text: "Paraguay" },
    { value: "QA", text: "Qatar" },
    { value: "RE", text: "Réunion" },
    { value: "RO", text: "Romania" },
    { value: "RS", text: "Serbia" },
    { value: "RU", text: "Russian Federation" },
    { value: "RW", text: "Rwanda" },
    { value: "SA", text: "Saudi Arabia" },
    { value: "SB", text: "Solomon Islands" },
    { value: "SC", text: "Seychelles" },
    { value: "SD", text: "Sudan" },
    { value: "SE", text: "Sweden" },
    { value: "SG", text: "Singapore" },
    { value: "SH", text: "Saint Helena, Ascension and Tristan da Cunha" },
    { value: "SI", text: "Slovenia" },
    { value: "SJ", text: "Svalbard and Jan Mayen Islands" },
    { value: "SK", text: "Slovakia" },
    { value: "SL", text: "Sierra Leone" },
    { value: "SM", text: "San Marino" },
    { value: "SN", text: "Senegal" },
    { value: "SO", text: "Somalia" },
    { value: "SR", text: "Suriname" },
    { value: "SS", text: "South Sudan" },
    { value: "ST", text: "Sao Tome and Principe" },
    { value: "SV", text: "El Salvador" },
    { value: "SX", text: "Sint Maarten (Dutch part)" },
    { value: "SY", text: "Syrian Arab Republic" },
    { value: "SZ", text: "Swaziland" },
    { value: "TC", text: "Turks and Caicos Islands" },
    { value: "TD", text: "Chad" },
    { value: "TF", text: "French Southern Territories" },
    { value: "TG", text: "Togo" },
    { value: "TH", text: "Thailand" },
    { value: "TJ", text: "Tajikistan" },
    { value: "TK", text: "Tokelau" },
    { value: "TL", text: "Timor-Leste" },
    { value: "TM", text: "Turkmenistan" },
    { value: "TN", text: "Tunisia" },
    { value: "TO", text: "Tonga" },
    { value: "TR", text: "Turkey" },
    { value: "TT", text: "Trinidad and Tobago" },
    { value: "TV", text: "Tuvalu" },
    { value: "TW", text: "Taiwan (Republic of China)" },
    { value: "TZ", text: "Tanzania, United Republic of" },
    { value: "UA", text: "Ukraine" },
    { value: "UG", text: "Uganda" },
    { value: "UM", text: "US Minor Outlying Islands" },
    { value: "US", text: "United States" },
    { value: "UY", text: "Uruguay" },
    { value: "UZ", text: "Uzbekistan" },
    { value: "VA", text: "Holy See (Vatican City State)" },
    { value: "VC", text: "Saint Vincent and the Grenadines" },
    { value: "VE", text: "Venezuela, Bolivarian Republic of" },
    { value: "VG", text: "Virgin Islands, British" },
    { value: "VI", text: "Virgin Islands, U.S." },
    { value: "VN", text: "Vietnam" },
    { value: "VU", text: "Vanuatu" },
    { value: "WF", text: "Wallis and Futuna Islands" },
    { value: "WS", text: "Samoa" },
    { value: "XK", text: "Kosovo" },
    { value: "YE", text: "Yemen" },
    { value: "YT", text: "Mayotte" },
    { value: "ZA", text: "South Africa" },
    { value: "ZM", text: "Zambia" },
    { value: "ZW", text: "Zimbabwe" }
];

export default {
    CountryNames
}