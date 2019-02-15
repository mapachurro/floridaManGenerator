# floridaManGenerator

We've all seen the crazy headlines of something involving police, firearms, alligators and copious amounts of alcohol. 

And the headlines usually begin, "Flordia man..."

This is the Florida Man Generator: Starting from a dataset of *real headline and article data* from the South Florida Sun Sentinel, you as a user can edit and save your very own Florida Man article.

Have a search tool of key words for people to search articles; Use unusual words to entice users to want to read articles; alligator, lingerie, pooped, unbuttoned, Grandma.

Our stack consists of:

-an Express/NodeJS server
-Hosted and deployed on Heroku
-Using a MySQL (through JAWSDB) database to keep original and edited articles, and a Sequelize ORM to coordinate that
-We provide GET routes to serve the article data, and POST routes to save the edited articles
-Utilizes JS libraries to facilitate user editing of article data through the browser
-It's totally sick
