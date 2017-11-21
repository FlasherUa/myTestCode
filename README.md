# myTestCode

This is test project


*Some things may look not optimal because it is my learning. 
For the real project I would do things more "quick-and-dirty" without  experiments.* 

**Description**

SAP (Single Page Application)

Front-end 

Back-end 

Server only holds data API.

Deploy

It is based on Docker. There  are  2 configs - for development and production.  

**Security**

Data sanity
- html tags are stripped
- Mysql queries are used only with PDO substitution 

Code security 

- index.php is hidden
- php application is outside www root

Install & Run 

1. If you have not docker-compose installed already you will need to install 
https://docs.docker.com/engine/installation/ Docker and 
2. https://docs.docker.com/compose/install/ Docker-Compose


3. Clone project from Github
or download directly 

4. Run `docker-compose up`
   
This will start container with a production version.  
If there are no errors just visit  http://localhost:8800/ with your browser. 


To build from sources  
`>bash build.sh`
This will uglify and minify js,css, copy only necessary files to folder 
`\html-distr`

**Some commandline hints**


Start production docker

`>docker-compose up`

Than visit  
`http://localhost:8800/`

 

Connect to mysql 

`>mysql -h172.18.0.2 -uroot -proot`

Select DB

`mysql>USE webforge;`

List tables

`mysql> SHOW TABLES;`

Test

js 
/tests/npm run test:watch
or 
npm run test:single
