-- 12. Titles of all of movies in which both Jennifer Lawrence and Bradley Cooper starred

SELECT movies.title
FROM movies
JOIN stars
ON stars.movie_id = movies.id

JOIN people
ON people.id = stars.person_id
WHERE people.name = "Johnny Depp"

INTERSECT

SELECT movies.title
FROM movies
JOIN stars
ON stars.movie_id = movies.id

JOIN people
ON people.id = stars.person_id
WHERE people.name = "Helena Bonham Carter";
