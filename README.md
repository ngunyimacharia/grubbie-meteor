# Grubbie

[Meltwater Entreprenuerial School of Technology](https://github.com/ngunyimacharia/grubbie/blob/master/meltwater.org), MEST, and MEST Incubator provide training, seed investment and mentorship for the next generation of globally successful African software entrepreneurs.

The MEST Operations team proposed the development of an application that would achieve the following goals:

-   List item
-   Reduce wastage
-   Plan weekly purchases effectively
-   Track inventory
-   Measure the satisfaction level of customers, and;
-   Know the potential headcount per meal

This repository holds the meteor implementation of the approved Grubbie html implementation: https://github.com/ngunyimacharia/grubbie

## Installation

**Step 1:** This project is built using [Meteor](https://meteor.com) JavaScript framework. Thus, setting up meteor is a prerequisite: https://www.meteor.com/install

**Step 2:** After setup, clone the repository by running the following command in your preferred terminal.

    git clone https://github.com/ngunyimacharia/grubbie-meteor.git

NB: To run the above command, one needs to have installed [Git](https://git-scm.com/) version control system. An alternative is to download the repository as a .zip

## Usage

Enter into the cloned / downloaded repository in the terminal by running the following command:

    cd grubbie-meteor

Run the meteor command in your terminal to run your application on port 3000

    meteor

If port 3000 is unavailable, you can specify an alternative port. For example port 1234

    meteor --port 1234

![enter image description here](https://camo.githubusercontent.com/be7ea1ffa9e28bce424d465b301709b8cc7cc48c/68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f30496e6f37584762524d41584147714b4b476f54756c327746396373795678524c7a2d325368516b383537644d753631414a6b666267536441674f4d3551535247643266555f724f46504478)
## Contributing

#### Technology stack

HTML (Markup Language)

-   [https://www.w3schools.com/html/default.asp](https://www.w3schools.com/html/default.asp)

SASS (Styling)

-   [http://sass-lang.com/](http://sass-lang.com/)
-   [https://www.tutorialspoint.com/sass/](https://www.tutorialspoint.com/sass/)

Javascript (Animations)

-   [https://www.w3schools.com/js/default.asp](https://www.w3schools.com/js/default.asp)

Meteor (Blaze templating engine)

-   [https://www.meteor.com/tutorials/blaze](https://www.meteor.com/tutorials/blaze)

#### Packages used

Meteor Accounts
- https://atmospherejs.com/meteor/accounts-base
- https://atmospherejs.com/meteor/accounts-password

Meteor Roles
- https://atmospherejs.com/alanning/roles

Flow Router (Routing)
- https://atmospherejs.com/kadira/flow-router
- https://atmospherejs.com/kadira/blaze-layout

Tracker (Dependency Tracker)
- https://atmospherejs.com/meteor/tracker

Bootstrap Grid (Grid system)
- https://getbootstrap.com/docs/4.1/layout/grid/

Font Awesome (Icon Pack)
- https://fontawesome.bootstrapcheatsheets.com/

Chart.js (Charting)
- http://chartjs.org/

Sweet Alert
- https://atmospherejs.com/kevohagan/sweetalert


#### General file naming rules

All file names will be in lowercase. For where we have multiple words per name, underscores to be used. Using of more than one word is not recommended.

#### SASS files naming and organisation

SASS Files will be named with respect to the section they relate to. E.g. users.sass for all user section related styling. All files will be compiled into one main.css

#### HTML pages file structure and naming

All files will have lowercase names. The recommended word count per file name is one word. If necessary, multiple words may be used with underscores. Words should represent the actions of the files. Examples are _create, read, update, delete, view, deactivate, vote / rate_

Only files related to the folder scope should be placed within the relevant folder.

#### Template names

Page, header and footer template names shall be lowercase with only the first letter as uppercase.  All other template names shall be fully lowercase.

Page templates names will end with the suffix: *_page*

## Credits

HTML implementation:

- **Amanda Williams:** UI / UX design, data structures , backend
- **Daniel Kayode:** Product Manager
- **Esther Mwangi:** Frond End Mockup, Data
- **Kelvin Macharia:** Backend Development
- **Solomon Igori:** Front-end / Back-end

Meteor implementation:

- Amanda Williams
- Daniel Kayode
- Kelvin Macharia
- Bekithemba Ngulube
- Victor Okech

## License

This project is covered under the MIT License.
