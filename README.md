# VueMakeTable


This Project is a modified table from [GhitaB](https://github.com/GhitaB/datatables-admin) <br>
I added new methods to change the setting of the table. <br> 
I also made a major structure update from the original main.js & app.vue <br>
Demo code here is uploaded on Heroku. Click [here](https://vuemaketable.herokuapp.com/) <br>

### Installation Instruction

1. Git Clone This Repo to Local <br>
2. Cd to that directory from terminal  <br>
3. Then, ensure vue is downloaded globally <br>

```bash
npm install -g @vue/cli-init
```
4. Ensure all dependencies are built <br>

```bash
npm install
```

### Sample JSON input to alter table
{"headerColor":"yellow","bgColor":"black","cellColor":"red"} <br>

Inserting input, changing table data, then click enter. <br>
<br>
<br>

### Design 
1. Main.js --> App.Vue --> Table-Preview.vue & Editable.vue <br>
2. App.vue takes user json input and table input <br>
3. Table-Preview.vue generates a table from parent <br>
4. Editable.vue keeps table editable before made <br>
5. Within App.vue, updateStyleObject is what changed the table setting <br>
