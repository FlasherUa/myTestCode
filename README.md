# myTestCode

This is my test project

Here  [PHP&JS Source Codes written by me](tree/master/!sources)

**Description**

I used SAP (Single Page Application) architecture. 

Pros:  
- All HTML are in static templates, cached by browser
- Server loads only clean JSON
- That gives high load capability, times more than server-side rendering.

Minuses:
- Not indexed by most search engines (this variant)
- Requires client JS.
- Page may be milliseconds slower than clean HTML.  

It seems to satisfy the assigment needs and looks less [collegues projects](https://www.google.com.ua/search?dcr=0&ei=3dr-WcfKNujM6AT10azYDA&q=github+webmasters+forge+%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5&oq=github+webmasters+forge+%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5&gs_l=psy-ab.3...62369.64715.0.65171.8.8.0.0.0.0.134.906.0j8.8.0....0...1.1.64.psy-ab..1.0.0....0.TEYegDlGjfM)
*Some things may look not optimal because it is for my learning.
For the real project I would do things "quick-and-dirty" without  experiments.*

 
**Front-end:**  JavaScript (Vanilla, 4kB gzipped). Includes simple router, ajax support, template engine, forms generator & validator, multilanguage support.  

**Back-end:** php7, PDO, mysql 
Server only holds data API (JSON). 

**QA:** unit tests using phpunit, karma + mocha + phantomJS 

**Deploy:** Docker. There  are  2 configs - for development and production.  


**Install & Run** 

1. If you have not docker-compose installed already you will need to install 
https://docs.docker.com/engine/installation/ Docker and 
2. https://docs.docker.com/compose/install/ Docker-Compose


3. Clone project from Github
or download directly 

4. Run `docker-compose up` in the project root
  
This will start container with a production version.  
If there are no errors 
5. Visit  `http://localhost:8800/` with your browser. 


**Security**

Data sanity
- html tags are stripped
- Mysql queries are used only with PDO substitution 

Code security 

- index.php is hidden
- php application is outside www root



**Some commandline hints**
Prepare project for production
`>bash build.sh `

Bind js
`>tests/js/grant`


Connect to mysql 

`>mysql -h172.18.0.2 -uroot -proot`


Test

js 
/tests/npm run test:watch
or 
npm run test:single
