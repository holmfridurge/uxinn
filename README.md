# uxinn

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

1. Vera með git í tölvunni
2. Vera með xampp í tölvunni (https://www.apachefriends.org/download.html)
    - 2.1 Inní xampp þá ferðu í config button á apache og velur httpd.conf en þar inni breytiru port 80 í hvaða númer sem er. Ég nota 8080.
    - 2.2 Inní xampp þá ferðu í config button á apache og velu httpd-ssl.conf og breytir 443 í hvaða númer sem er. 
    - 2.3 Ýta á start takkann hjá apache og mysql
    - 2.4 Hægt að skoða gagnagrunninn með því að opna http://localhost:8080/phpmyadmin/
3. Clone-a verkefnið https://github.com/holmfridurge/uxinn.git
4. Install nodejs - npm kemur með -- https://nodejs.org/en/
5. Keyra skipunina: `npm install -g grunt-cli` (https://gruntjs.com/getting-started)
.. `install bower npm install --global yo bower grunt-cli`
`bower install`
6. Fara inní root folder og keyra
	 `npm install`
7. Búa til gagnagrunn í localhost sem heitir rames
8. Keyra rames.sql scriptuna sem fylgir með verkefninu. Hún fyllir inn í gagnagrunninn upplýsingar um RAMES, spurningar og önnur gögn sem þurfa að vera til að síðan virki.
    - 8.1 Til að keyra scriptuna þarf að vera mysql á tölvunni.
    - 8.2 Keyra skipunina frá command line client: mysql -h hostname -u user database < path/to/test.sql.
    - 8.3 https://stackoverflow.com/questions/8940230/how-can-i-run-a-sql-text-file-on-a-mysql-database - linkur sem gæti hjálpað
9. Í einum command line glugga. Inní /api möppunni innan verkefnisins er þessi skipun keyrð til að starta vefþjónustunni: `node app`
10. Í öðrum command line glugga. Inní root möppunni er þessi skipun keyrð til að starta verkefninu sjálfu: `grunt serve`
    10.1 This should start up the project


## Note from Bjarni, 

It would be great if possible to get a good documentation on how to set things up from scratch and the folder sturcture and some what information as it would be for a developer to see this for the first time. "guide" thx.
=B