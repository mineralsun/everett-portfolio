CREATE TABLE "projects" (
	"id" SERIAL PRIMARY KEY,
	"project_name" VARCHAR(100) NOT NULL,
	"project_description" VARCHAR(10000) NOT NULL,
	"thumbnail" VARCHAR(1000),
	"live_demo" VARCHAR(1000),
	"source_code" VARCHAR(1000)
);

INSERT INTO "projects" ("project_name", "project_description", "thumbnail", "live_demo", "source_code")
VALUES ('YourCannaBuddy', 'An all-in-one cannabis tracking app where users can add, edit, and delete different cannabis products to keep track of what products they have used and favorite them!', 'public/images/your cannaBuddy Stash pic.png', 'https://www.linkedin.com/posts/everett-james-butler_a-couple-weeks-ago-i-had-the-opportunity-activity-7077778170183094274-L8ka?utm_source=share&utm_medium=member_desktop', 'https://github.com/mineralsun/YourCannabuddy');

INSERT INTO "projects" ("project_name", "project_description", "thumbnail", "live_demo", "source_code")
VALUES ('OCD-Diva', 'A conditional survey used for estimating a home cleaning service, combined with a CRM for employees', 'public/images/OCD-Diva-Screenshot.png', 'https://www.linkedin.com/posts/everett-james-butler_hello-everyone-i-recently-had-the-opportunity-activity-7087208810108366848--nIn?utm_source=share&utm_medium=member_desktop', 'https://github.com/mineralsun/OCDDiva-project');

INSERT INTO "projects" ("project_name", "project_description", "thumbnail", "live_demo", "source_code")
VALUES ('Movie-Saga', 'A movie slide-deck where users can add movies they have seen, upload information about the movie, and view those movies', 'public/images/Movie-saga.png', 'No Demo Available', 'https://github.com/mineralsun/Everett-Movie-Sagas');

INSERT INTO "projects" ("project_name", "project_description", "thumbnail", "live_demo", "source_code")
VALUES ('Everett''s Portfolio', 'A portfolio of Everett, this very developer! Kinda meta isn''t it?', 'public/images/everett-portfolio.png', 'No Demo Available', 'https://github.com/mineralsun/everett-portfolio');

SELECT * FROM "projects";
