[![Typing SVG](https://readme-typing-svg.herokuapp.com?color=%2336BCF7&lines=Introducing)](https://git.io/typing-svg)

Hello everybody, I nice to introduce yours in Storage Imperialis - ***"Adeptus Administratum"*** ! <br>
There is small SPA, works like library of minimalistic article about most popular heroes, antagonist, xenos and other person from world infinity war - **Warhammer 40000**.

[![Typing SVG](https://readme-typing-svg.herokuapp.com?color=%2336BCF7&lines=Opportunities)](https://git.io/typing-svg)


+ ***FIRST*** of all this SPA provides an opportunity to register unique user and log in after registration in you oun profile. For this I created "**Sign Up**" and "**Sign In**" forms.
+ ***SECOND***. You can learn, read, sort and copy a lot of minimalistic article, description about persons of **Warhammer 40000**. By the way, for more usable work with this info I implemented additional block above list of article, which can show details.
+ ***THIRD***. I created "**Edit**", "**Save**" and "**Shared**" Buttons. 
  + "Edit" able to open edit filed;
  + "Save" works as updater article;
  + Last button - "Shared" can send article other users which registered in "Adeptus Administratum" before.
+ ***FOURTH***. How its works? I implemented tab in this SPA which has name **"Shared Notes"**. This tab shows count of articles and identify contain of articles which had sent other user, but nobody knows who and when sent this (_there is feature, because Galaxy is dark, Imperium is dark, as souls of heretics which touched forbidden knowledge)_). Thees shared articles have full information and updated after Sign Out/Sign In.
+ **FIFTH**. Also created input which able to add own article, You can sent its to other users and other users can send its to You  additional.
+ **SIXTH**. For more comfortable work, I implemented Lazy Loading/Infinity loading for List of article, and added "**Drag & Drop**" in case you need to move the note up or down. Finally i added small "**About**" block which how info about project, library. In Future i Will update its or other blocks. P.S. This project also has test for cheking correctly work.

[![Typing SVG](https://readme-typing-svg.herokuapp.com?color=%2336BCF7&lines=Important)](https://git.io/typing-svg)

Dear Code-ninja, I suppose time after time you will have some questions like:
+ "_This Application has critical problem with private users data, its is not good idea request and save each user id data in client!_";
+ "_You have to use additional backend for handling (token, id etc.)!_"
+ "_This **Article data-base** has is not good usable structure, developer should create array of users which sent/get or create article! Its os not good idea send link in article!_" etc.

I completely agree with this review! BUT!!! Purpose of the application was another:
+ Creating SPA based **ONLY** on FrontEnd side
+ This is open-test project, whose tasks do not include user data-privacy. On real project **MUST** to add this things
+ Implementing React Queries(multisending), and testing work with this. For this i use article data-base with article links in array instead array of users whose to have access to shared articles. In this case I checked, matched and analyst performance, usability and other things.


[![Typing SVG](https://readme-typing-svg.herokuapp.com?color=%2336BCF7&lines=How+Run+Its?)](https://git.io/typing-svg)
+ clone this repo github.com/NikitaKhadnevich/AdeptusAdministratum and `run git clone` in you IDE
+ setup dependies running command `npm install` or `npx install`. 
  + _Warning_! When you will see that `node_modules` started download `electron@11.5.0 postinstall` you may to skip its using `ctrl+C`. This dependies is not important
+ starting. For this you should run next command:
  + `npm run jSon` - starting user data-base (works on `http://localhost:3001/`) ;
  + `npm run jSonNotes` - starting article data-base (works on `http://localhost:3100`);
  + `npm run start` - starting application on (works on `http://localhost:3000`);
  + `npm run test` - run test most importatn blocks;


[![Typing SVG](https://readme-typing-svg.herokuapp.com?color=%2336BCF7&lines=Technologies+and+Tools)](https://git.io/typing-svg)

This project based on:

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![React Query](https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Formik](https://img.shields.io/badge/FORMIK-blue?style=for-the-badge&logo=appveyor)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)




