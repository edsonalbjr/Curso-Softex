-- Inner Join
-- Esse método retorna os registros que são comuns entre as tabelas.

SELECT acao.FilmesAcao, comedia.FilmesComedia
FROM acao
INNER JOIN comedia ON acao.FilmesAcao = comedia.FilmesComedia

-- Left Join
-- Esse método apresenta todos os registros que estão em uma tabela A, mesmo que não estejam em uma tabela B, e os registros em comum das tabelas B e A.

SELECT acao.FilmesAcao, comedia.FilmesComedia
FROM acao
LEFT JOIN comedia ON acao.FilmesAcao = comedia.FilmesComedia

-- Right Join
-- Esse método apresenta todos os registros que estão em uma tabela B, mesmo que não estejam em uma tabela A. Como também, os registros em comum da tabela A com a tabela B.

SELECT acao.FilmesAcao, comedia.FilmesComedia
FROM acao
RIGHT JOIN comedia ON acao.FilmesAcao = comedia.FilmesComedia

-- Full Join
-- Esse método apresenta todos os registros que estão nas tabelas A e B.

SELECT acao.FilmesAcao, comedia.FilmesComedia
FROM acao
LEFT OUTER JOIN comedia ON acao.FilmesAcao = comedia.FilmesComedia

UNION

SELECT acao.FilmesAcao, comedia.FilmesComedia
FROM acao
RIGHT OUTER JOIN comedia ON acao.FilmesAcao = comedia.FilmesComedia
