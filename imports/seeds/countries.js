import casual from 'casual';
import { Countries } from '../api/countries.js';

export const createCountries = () => {
  //Set countries
  const countries = [
    {
      "code": "AF",
      "country": "Afghanistan",
      "diallingCode": "+93"
    },
    {
      "code": "AL",
      "country": "Albania",
      "diallingCode": "+355"
    },
    {
      "code": "DZ",
      "country": "Algeria",
      "diallingCode": "+213"
    },
    {
      "code": "AS",
      "country": "American Samoa",
      "diallingCode": "+1"
    },
    {
      "code": "AD",
      "country": "Andorra",
      "diallingCode": "+376"
    },
    {
      "code": "AO",
      "country": "Angola",
      "diallingCode": "+244"
    },
    {
      "code": "AI",
      "country": "Anguilla",
      "diallingCode": "+1"
    },
    {
      "code": "AG",
      "country": "Antigua",
      "diallingCode": "+1"
    },
    {
      "code": "AR",
      "country": "Argentina",
      "diallingCode": "+54"
    },
    {
      "code": "AM",
      "country": "Armenia",
      "diallingCode": "+374"
    },
    {
      "code": "AW",
      "country": "Aruba",
      "diallingCode": "+297"
    },
    {
      "code": "AU",
      "country": "Australia",
      "diallingCode": "+61"
    },
    {
      "code": "AI",
      "country": "Austria",
      "diallingCode": "+43"
    },
    {
      "code": "AZ",
      "country": "Azerbaijan",
      "diallingCode": "+994"
    },
    {
      "code": "BH",
      "country": "Bahrain",
      "diallingCode": "+973"
    },
    {
      "code": "BD",
      "country": "Bangladesh",
      "diallingCode": "+880"
    },
    {
      "code": "BB",
      "country": "Barbados",
      "diallingCode": "+1"
    },
    {
      "code": "BY",
      "country": "Belarus",
      "diallingCode": "+375"
    },
    {
      "code": "BE",
      "country": "Belgium",
      "diallingCode": "+32"
    },
    {
      "code": "BZ",
      "country": "Belize",
      "diallingCode": "+501"
    },
    {
      "code": "BJ",
      "country": "Benin",
      "diallingCode": "+229"
    },
    {
      "code": "BM",
      "country": "Bermuda",
      "diallingCode": "+1"
    },
    {
      "code": "BT",
      "country": "Bhutan",
      "diallingCode": "+975"
    },
    {
      "code": "BO",
      "country": "Bolivia",
      "diallingCode": "+591"
    },
    {
      "code": "BA",
      "country": "Bosnia and Herzegovina",
      "diallingCode": "+387"
    },
    {
      "code": "BW",
      "country": "Botswana",
      "diallingCode": "+267"
    },
    {
      "code": "BR",
      "country": "Brazil",
      "diallingCode": "+55"
    },
    {
      "code": "IO",
      "country": "British Indian Ocean Territory",
      "diallingCode": "+246"
    },
    {
      "code": "VG",
      "country": "British Virgin Islands",
      "diallingCode": "+1"
    },
    {
      "code": "BN",
      "country": "Brunei",
      "diallingCode": "+673"
    },
    {
      "code": "BG",
      "country": "Bulgaria",
      "diallingCode": "+359"
    },
    {
      "code": "BF",
      "country": "Burkina Faso",
      "diallingCode": "+226"
    },
    {
      "code": "MM",
      "country": "Burma Myanmar",
      "diallingCode": "+95"
    },
    {
      "code": "BI",
      "country": "Burundi",
      "diallingCode": "+257"
    },
    {
      "code": "KH",
      "country": "Cambodia",
      "diallingCode": "+855"
    },
    {
      "code": "CM",
      "country": "Cameroon",
      "diallingCode": "+237"
    },
    {
      "code": "CA",
      "country": "Canada",
      "diallingCode": "+1"
    },
    {
      "code": "CV",
      "country": "Cape Verde",
      "diallingCode": "+238"
    },
    {
      "code": "KY",
      "country": "Cayman Islands",
      "diallingCode": "+1"
    },
    {
      "code": "CF",
      "country": "Central African Republic",
      "diallingCode": "+236"
    },
    {
      "code": "ID",
      "country": "Chad",
      "diallingCode": "+235"
    },
    {
      "code": "CL",
      "country": "Chile",
      "diallingCode": "+56"
    },
    {
      "code": "CN",
      "country": "China",
      "diallingCode": "+86"
    },
    {
      "code": "CO",
      "country": "Colombia",
      "diallingCode": "+57"
    },
    {
      "code": "KM",
      "country": "Comoros",
      "diallingCode": "+269"
    },
    {
      "code": "CK",
      "country": "Cook Islands",
      "diallingCode": "+682"
    },
    {
      "code": "CR",
      "country": "Costa Rica",
      "diallingCode": "+506"
    },
    {
      "code": "CI",
      "country": "Côte d'Ivoire",
      "diallingCode": "+225"
    },
    {
      "code": "HR",
      "country": "Croatia",
      "diallingCode": "+385"
    },
    {
      "code": "CU",
      "country": "Cuba",
      "diallingCode": "+53"
    },
    {
      "code": "CY",
      "country": "Cyprus",
      "diallingCode": "+357"
    },
    {
      "code": "CZ",
      "country": "Czech Republic",
      "diallingCode": "+420"
    },
    {
      "code": "CD",
      "country": "Democratic Republic of Congo",
      "diallingCode": "+243"
    },
    {
      "code": "DK",
      "country": "Denmark",
      "diallingCode": "+45"
    },
    {
      "code": "DJ",
      "country": "Djibouti",
      "diallingCode": "+253"
    },
    {
      "code": "DM",
      "country": "Dominica",
      "diallingCode": "+1"
    },
    {
      "code": "DO",
      "country": "Dominican Republic",
      "diallingCode": "+1"
    },
    {
      "code": "EC",
      "country": "Ecuador",
      "diallingCode": "+593"
    },
    {
      "code": "EG",
      "country": "Egypt",
      "diallingCode": "+20"
    },
    {
      "code": "SV",
      "country": "El Salvador",
      "diallingCode": "+503"
    },
    {
      "code": "GQ",
      "country": "Equatorial Guinea",
      "diallingCode": "+240"
    },
    {
      "code": "ER",
      "country": "Eritrea",
      "diallingCode": "+291"
    },
    {
      "code": "EE",
      "country": "Estonia",
      "diallingCode": "+372"
    },
    {
      "code": "ET",
      "country": "Ethiopia",
      "diallingCode": "+251"
    },
    {
      "code": "FK",
      "country": "Falkland Islands",
      "diallingCode": "+500"
    },
    {
      "code": "FO",
      "country": "Faroe Islands",
      "diallingCode": "+298"
    },
    {
      "code": "FM",
      "country": "Federated States of Micronesia",
      "diallingCode": "+691"
    },
    {
      "code": "FJ",
      "country": "Fiji",
      "diallingCode": "+679"
    },
    {
      "code": "FI",
      "country": "Finland",
      "diallingCode": "+358"
    },
    {
      "code": "FR",
      "country": "France",
      "diallingCode": "+33"
    },
    {
      "code": "GF",
      "country": "French Guiana",
      "diallingCode": "+594"
    },
    {
      "code": "PF",
      "country": "French Polynesia",
      "diallingCode": "+689"
    },
    {
      "code": "GA",
      "country": "Gabon",
      "diallingCode": "+241"
    },
    {
      "code": "GE",
      "country": "Georgia",
      "diallingCode": "+995"
    },
    {
      "code": "DE",
      "country": "Germany",
      "diallingCode": "+49"
    },
    {
      "code": "GH",
      "country": "Ghana",
      "diallingCode": "+233"
    },
    {
      "code": "GI",
      "country": "Gibraltar",
      "diallingCode": "+350"
    },
    {
      "code": "GR",
      "country": "Greece",
      "diallingCode": "+30"
    },
    {
      "code": "GL",
      "country": "Greenland",
      "diallingCode": "+299"
    },
    {
      "code": "GD",
      "country": "Grenada",
      "diallingCode": "+1"
    },
    {
      "code": "GP",
      "country": "Guadeloupe",
      "diallingCode": "+590"
    },
    {
      "code": "GU",
      "country": "Guam",
      "diallingCode": "+1"
    },
    {
      "code": "GT",
      "country": "Guatemala",
      "diallingCode": "+502"
    },
    {
      "code": "GN",
      "country": "Guinea",
      "diallingCode": "+224"
    },
    {
      "code": "GW",
      "country": "Guinea-Bissau",
      "diallingCode": "+245"
    },
    {
      "code": "GY",
      "country": "Guyana",
      "diallingCode": "+592"
    },
    {
      "code": "HT",
      "country": "Haiti",
      "diallingCode": "+509"
    },
    {
      "code": "HN",
      "country": "Honduras",
      "diallingCode": "+504"
    },
    {
      "code": "HK",
      "country": "Hong Kong",
      "diallingCode": "+852"
    },
    {
      "code": "HU",
      "country": "Hungary",
      "diallingCode": "+36"
    },
    {
      "code": "IS",
      "country": "Iceland",
      "diallingCode": "+354"
    },
    {
      "code": "IN",
      "country": "India",
      "diallingCode": "+91"
    },
    {
      "code": "ID",
      "country": "Indonesia",
      "diallingCode": "+62"
    },
    {
      "code": "IR",
      "country": "Iran",
      "diallingCode": "+98"
    },
    {
      "code": "IQ",
      "country": "Iraq",
      "diallingCode": "+964"
    },
    {
      "code": "IE",
      "country": "Ireland",
      "diallingCode": "+353"
    },
    {
      "code": "IL",
      "country": "Israel",
      "diallingCode": "+972"
    },
    {
      "code": "IT",
      "country": "Italy",
      "diallingCode": "+39"
    },
    {
      "code": "JM",
      "country": "Jamaica",
      "diallingCode": "+1"
    },
    {
      "code": "JP",
      "country": "Japan",
      "diallingCode": "+81"
    },
    {
      "code": "JO",
      "country": "Jordan",
      "diallingCode": "+962"
    },
    {
      "code": "KZ",
      "country": "Kazakhstan",
      "diallingCode": "+7"
    },
    {
      "code": "KE",
      "country": "Kenya",
      "diallingCode": "+254"
    },
    {
      "code": "KI",
      "country": "Kiribati",
      "diallingCode": "+686"
    },
    {
      "code": "XK",
      "country": "Kosovo",
      "diallingCode": "+381"
    },
    {
      "code": "KW",
      "country": "Kuwait",
      "diallingCode": "+965"
    },
    {
      "code": "KG",
      "country": "Kyrgyzstan",
      "diallingCode": "+996"
    },
    {
      "code": "LA",
      "country": "Laos",
      "diallingCode": "+856"
    },
    {
      "code": "LV",
      "country": "Latvia",
      "diallingCode": "+371"
    },
    {
      "code": "LB",
      "country": "Lebanon",
      "diallingCode": "+961"
    },
    {
      "code": "LS",
      "country": "Lesotho",
      "diallingCode": "+266"
    },
    {
      "code": "LR",
      "country": "Liberia",
      "diallingCode": "+231"
    },
    {
      "code": "LY",
      "country": "Libya",
      "diallingCode": "+218"
    },
    {
      "code": "LI",
      "country": "Liechtenstein",
      "diallingCode": "+423"
    },
    {
      "code": "LT",
      "country": "Lithuania",
      "diallingCode": "+370"
    },
    {
      "code": "LU",
      "country": "Luxembourg",
      "diallingCode": "+352"
    },
    {
      "code": "MO",
      "country": "Macau",
      "diallingCode": "+853"
    },
    {
      "code": "MK",
      "country": "Macedonia",
      "diallingCode": "+389"
    },
    {
      "code": "MG",
      "country": "Madagascar",
      "diallingCode": "+261"
    },
    {
      "code": "MW",
      "country": "Malawi",
      "diallingCode": "+265"
    },
    {
      "code": "MY",
      "country": "Malaysia",
      "diallingCode": "+60"
    },
    {
      "code": "MV",
      "country": "Maldives",
      "diallingCode": "+960"
    },
    {
      "code": "ML",
      "country": "Mali",
      "diallingCode": "+223"
    },
    {
      "code": "MT",
      "country": "Malta",
      "diallingCode": "+356"
    },
    {
      "code": "MH",
      "country": "Marshall Islands",
      "diallingCode": "+692"
    },
    {
      "code": "MQ",
      "country": "Martinique",
      "diallingCode": "+596"
    },
    {
      "code": "MR",
      "country": "Mauritania",
      "diallingCode": "+222"
    },
    {
      "code": "MU",
      "country": "Mauritius",
      "diallingCode": "+230"
    },
    {
      "code": "YT",
      "country": "Mayotte",
      "diallingCode": "+262"
    },
    {
      "code": "MX",
      "country": "Mexico",
      "diallingCode": "+52"
    },
    {
      "code": "MD",
      "country": "Moldova",
      "diallingCode": "+373"
    },
    {
      "code": "MC",
      "country": "Monaco",
      "diallingCode": "+377"
    },
    {
      "code": "MN",
      "country": "Mongolia",
      "diallingCode": "+976"
    },
    {
      "code": "ME",
      "country": "Montenegro",
      "diallingCode": "+382"
    },
    {
      "code": "MS",
      "country": "Montserrat",
      "diallingCode": "+1"
    },
    {
      "code": "MA",
      "country": "Morocco",
      "diallingCode": "+212"
    },
    {
      "code": "MZ",
      "country": "Mozambique",
      "diallingCode": "+258"
    },
    {
      "code": "NA",
      "country": "Namibia",
      "diallingCode": "+264"
    },
    {
      "code": "NR",
      "country": "Nauru",
      "diallingCode": "+674"
    },
    {
      "code": "NP",
      "country": "Nepal",
      "diallingCode": "+977"
    },
    {
      "code": "NL",
      "country": "Netherlands",
      "diallingCode": "+31"
    },
    {
      "code": "AN",
      "country": "Netherlands Antilles",
      "diallingCode": "+599"
    },
    {
      "code": "NC",
      "country": "New Caledonia",
      "diallingCode": "+687"
    },
    {
      "code": "NZ",
      "country": "New Zealand",
      "diallingCode": "+64"
    },
    {
      "code": "NI",
      "country": "Nicaragua",
      "diallingCode": "+505"
    },
    {
      "code": "NE",
      "country": "Niger",
      "diallingCode": "+227"
    },
    {
      "code": "NG",
      "country": "Nigeria",
      "diallingCode": "+234"
    },
    {
      "code": "NU",
      "country": "Niue",
      "diallingCode": "+683"
    },
    {
      "code": "NF",
      "country": "Norfolk Island",
      "diallingCode": "+672"
    },
    {
      "code": "KP",
      "country": "North Korea",
      "diallingCode": "+850"
    },
    {
      "code": "MP",
      "country": "Northern Mariana Islands",
      "diallingCode": "+1"
    },
    {
      "code": "NO",
      "country": "Norway",
      "diallingCode": "+47"
    },
    {
      "code": "OM",
      "country": "Oman",
      "diallingCode": "+968"
    },
    {
      "code": "PK",
      "country": "Pakistan",
      "diallingCode": "+92"
    },
    {
      "code": "PW",
      "country": "Palau",
      "diallingCode": "+680"
    },
    {
      "code": "PS",
      "country": "Palestine",
      "diallingCode": "+970"
    },
    {
      "code": "PA",
      "country": "Panama",
      "diallingCode": "+507"
    },
    {
      "code": "PG",
      "country": "Papua New Guinea",
      "diallingCode": "+675"
    },
    {
      "code": "PY",
      "country": "Paraguay",
      "diallingCode": "+595"
    },
    {
      "code": "PE",
      "country": "Peru",
      "diallingCode": "+51"
    },
    {
      "code": "PH",
      "country": "Philippines",
      "diallingCode": "+63"
    },
    {
      "code": "PL",
      "country": "Poland",
      "diallingCode": "+48"
    },
    {
      "code": "PT",
      "country": "Portugal",
      "diallingCode": "+351"
    },
    {
      "code": "PR",
      "country": "Puerto Rico",
      "diallingCode": "+1"
    },
    {
      "code": "QA",
      "country": "Qatar",
      "diallingCode": "+974"
    },
    {
      "code": "CG",
      "country": "Republic of the Congo",
      "diallingCode": "+242"
    },
    {
      "code": "RE",
      "country": "Réunion",
      "diallingCode": "+262"
    },
    {
      "code": "RO",
      "country": "Romania",
      "diallingCode": "+40"
    },
    {
      "code": "RU",
      "country": "Russia",
      "diallingCode": "+7"
    },
    {
      "code": "RW",
      "country": "Rwanda",
      "diallingCode": "+250"
    },
    {
      "code": "BL",
      "country": "Saint Barthélemy",
      "diallingCode": "+590"
    },
    {
      "code": "SH",
      "country": "Saint Helena",
      "diallingCode": "+290"
    },
    {
      "code": "KN",
      "country": "Saint Kitts and Nevis",
      "diallingCode": "+1"
    },
    {
      "code": "MF",
      "country": "Saint Martin",
      "diallingCode": "+590"
    },
    {
      "code": "PM",
      "country": "Saint Pierre and Miquelon",
      "diallingCode": "+508"
    },
    {
      "code": "VC",
      "country": "Saint Vincent and the Grenadines",
      "diallingCode": "+1"
    },
    {
      "code": "WS",
      "country": "Samoa",
      "diallingCode": "+685"
    },
    {
      "code": "SM",
      "country": "San Marino",
      "diallingCode": "+378"
    },
    {
      "code": "ST",
      "country": "São Tomé and Príncipe",
      "diallingCode": "+239"
    },
    {
      "code": "SA",
      "country": "Saudi Arabia",
      "diallingCode": "+966"
    },
    {
      "code": "SN",
      "country": "Senegal",
      "diallingCode": "+221"
    },
    {
      "code": "RS",
      "country": "Serbia",
      "diallingCode": "+381"
    },
    {
      "code": "SC",
      "country": "Seychelles",
      "diallingCode": "+248"
    },
    {
      "code": "SL",
      "country": "Sierra Leone",
      "diallingCode": "+232"
    },
    {
      "code": "SG",
      "country": "Singapore",
      "diallingCode": "+65"
    },
    {
      "code": "SK",
      "country": "Slovakia",
      "diallingCode": "+421"
    },
    {
      "code": "SI",
      "country": "Slovenia",
      "diallingCode": "+386"
    },
    {
      "code": "SB",
      "country": "Solomon Islands",
      "diallingCode": "+677"
    },
    {
      "code": "SO",
      "country": "Somalia",
      "diallingCode": "+252"
    },
    {
      "code": "ZA",
      "country": "South Africa",
      "diallingCode": "+27"
    },
    {
      "code": "KR",
      "country": "South Korea",
      "diallingCode": "+82"
    },
    {
      "code": "ES",
      "country": "Spain",
      "diallingCode": "+34"
    },
    {
      "code": "LK",
      "country": "Sri Lanka",
      "diallingCode": "+94"
    },
    {
      "code": "LC",
      "country": "St. Lucia",
      "diallingCode": "+1"
    },
    {
      "code": "SD",
      "country": "Sudan",
      "diallingCode": "+249"
    },
    {
      "code": "SR",
      "country": "Suriname",
      "diallingCode": "+597"
    },
    {
      "code": "SZ",
      "country": "Swaziland",
      "diallingCode": "+268"
    },
    {
      "code": "SE",
      "country": "Sweden",
      "diallingCode": "+46"
    },
    {
      "code": "CH",
      "country": "Switzerland",
      "diallingCode": "+41"
    },
    {
      "code": "SY",
      "country": "Syria",
      "diallingCode": "+963"
    },
    {
      "code": "TW",
      "country": "Taiwan",
      "diallingCode": "+886"
    },
    {
      "code": "TJ",
      "country": "Tajikistan",
      "diallingCode": "+992"
    },
    {
      "code": "TZ",
      "country": "Tanzania",
      "diallingCode": "+255"
    },
    {
      "code": "TH",
      "country": "Thailand",
      "diallingCode": "+66"
    },
    {
      "code": "BS",
      "country": "The Bahamas",
      "diallingCode": "+1"
    },
    {
      "code": "GM",
      "country": "The Gambia",
      "diallingCode": "+220"
    },
    {
      "code": "TL",
      "country": "Timor-Leste",
      "diallingCode": "+670"
    },
    {
      "code": "TG",
      "country": "Togo",
      "diallingCode": "+228"
    },
    {
      "code": "TK",
      "country": "Tokelau",
      "diallingCode": "+690"
    },
    {
      "code": "TO",
      "country": "Tonga",
      "diallingCode": "+676"
    },
    {
      "code": "TT",
      "country": "Trinidad and Tobago",
      "diallingCode": "+1"
    },
    {
      "code": "TN",
      "country": "Tunisia",
      "diallingCode": "+216"
    },
    {
      "code": "TR",
      "country": "Turkey",
      "diallingCode": "+90"
    },
    {
      "code": "TM",
      "country": "Turkmenistan",
      "diallingCode": "+993"
    },
    {
      "code": "TC",
      "country": "Turks and Caicos Islands",
      "diallingCode": "+1"
    },
    {
      "code": "TV",
      "country": "Tuvalu",
      "diallingCode": "+688"
    },
    {
      "code": "UG",
      "country": "Uganda",
      "diallingCode": "+256"
    },
    {
      "code": "UA",
      "country": "Ukraine",
      "diallingCode": "+380"
    },
    {
      "code": "AE",
      "country": "United Arab Emirates",
      "diallingCode": "+971"
    },
    {
      "code": "GB",
      "country": "United Kingdom",
      "diallingCode": "+44"
    },
    {
      "code": "US",
      "country": "United States",
      "diallingCode": "+1"
    },
    {
      "code": "UY",
      "country": "Uruguay",
      "diallingCode": "+598"
    },
    {
      "code": "VI",
      "country": "US Virgin Islands",
      "diallingCode": "+1"
    },
    {
      "code": "UZ",
      "country": "Uzbekistan",
      "diallingCode": "+998"
    },
    {
      "code": "VU",
      "country": "Vanuatu",
      "diallingCode": "+678"
    },
    {
      "code": "VA",
      "country": "Vatican City",
      "diallingCode": "+39"
    },
    {
      "code": "VE",
      "country": "Venezuela",
      "diallingCode": "+58"
    },
    {
      "code": "VN",
      "country": "Vietnam",
      "diallingCode": "+84"
    },
    {
      "code": "WF",
      "country": "Wallis and Futuna",
      "diallingCode": "+681"
    },
    {
      "code": "YE",
      "country": "Yemen",
      "diallingCode": "+967"
    },
    {
      "code": "ZM",
      "country": "Zambia",
      "diallingCode": "+260"
    },
    {
      "code": "ZW",
      "country": "Zimbabwe",
      "diallingCode": "+263"
    }
  ];
  //Clear country
  Countries.remove({});
  //Insert countries
  countries.forEach((val,ind)=>{
    Countries.insert({
      code: val.code,
      country: val.country,
      diallingCode: val.diallingCode,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  });
}
