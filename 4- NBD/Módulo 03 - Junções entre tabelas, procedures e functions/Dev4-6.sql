-- 1. Inclua a coluna DATA_NASCIMENTO na tabela ALUNO do tipo string e de tamanho 10 caracteres; 
SELECT * FROM curso_computacao.alunos;
ALTER TABLE 'curso_computacao'.'alunos'
ADO COLUNA 'DATA_NASCIMENTO' VARCHAR(10) NULL AFTER 'Telefone';

-- 2. Altere a coluna TELEFONE para CONTATO e seu tipo de dado para string; 
SELECT * FROM curso_computacao.alunos;
ALTER TABLE 'curso_computacao'.'alunos'
CHANGE COLUMN 'Telefone' 'Contato' VARCHAR(13) NULL DEFAULT NULL;

-- 3. Inclua o campo ISBN na tabela LIVRO, com tamanho de 13 caracteres do tipo inteiro; 
SELECT * FROM curso_computacao.livros;
ALTER TABLE 'curso_computacao'.'livros'
ADD COLUMM 'ISBN' INT(13) NULL AFTER 'Cod_Sessao';

-- 4. E remova o campo ISBN da tabela LIVRO.
SELECT * FROM curso_computacao.livros;
ALTER TABLE 'curso_computacao'.' Livros'
DROP COLUMN 'ISBN';