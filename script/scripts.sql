SELECT * FROM teams.teams;

/* DEZ MENORES ARENAS POR CAPACIDADE */
SELECT * FROM teams 
ORDER BY ARENA_CAP ASC 
LIMIT 10;

/* DEZ MAIORES ARENAS POR CAPACIDADE */
SELECT * FROM teams 
ORDER BY ARENA_CAP DESC 
LIMIT 10;

/* CINCO TIMES MAIS ANTIGOS */
SELECT * FROM teams 
WHERE FUNDACAO <=2002 
ORDER BY FUNDACAO ASC LIMIT 5;

/* CINCO TIMES MAIS NOVOS */
SELECT * FROM teams 
WHERE FUNDACAO <=2002 
ORDER BY FUNDACAO DESC LIMIT 5;

/*CINCO TIMES QUE MAIS MARCARAM PONTOS EM CASA*/
SELECT * FROM games
ORDER BY PTS_home DESC
LIMIT 5;

