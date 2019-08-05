# Vue Make Table

This Project is a modified Project from [GhitaB](https://github.com/GhitaB/datatables-admin) <br>
Demo code here is uploaded on Heroku. Click [here](https://vuemaketable.herokuapp.com/) <br>

### Additional Functions From GhitaB's code

1. change result table's format (color, background, etc *still developing) <br>
2. major change in main.js and app.vue <br>
3. able to convert the result table to json <br>
4. additional features are designed by me. welcome to modified and change!
5. At the end, i implemented a simple feature that will convert the table to json. 

### Installation Instruction

1. Git Clone This Repo to Local <br>
2. Cd to that directory from terminal  <br>
3. Ensure vue is downloaded globally <br>

```bash
npm install -g @vue/cli-init
```
4. Ensure all dependencies are built <br>

```bash
npm install
```

### Sample JSON input to alter table
{"headerColor":"yellow","headerBg":"black","cellColor":"red"} <br>
Inserting input, changing table data, then click enter. <br>

### Design 
1. Main.js --> App.Vue --> Table-Preview.vue & Editable.vue <br>
2. App.vue takes user json input and table input <br>
3. Table-Preview.vue generates a table from parent <br>
4. Editable.vue keeps table editable before made <br>
5. Within App.vue, updateStyleObject is what changed the table setting <br>

### Deploying on Heroku

1. Read [This](https://medium.com/netscape/deploying-a-vue-js-2-x-app-to-heroku-in-5-steps-tutorial-a69845ace489)  <br>
2. And read [This](https://medium.com/binarcode/deploying-vue-apps-to-heroku-the-right-way-26b11c1ae5cd)  <br>
3. I had to combine knowledge from both of these webs to upload this to project on heroku. 
