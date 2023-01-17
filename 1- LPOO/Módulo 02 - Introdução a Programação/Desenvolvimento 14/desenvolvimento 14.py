import pandas as pd

df = pd.read_excel("C:/Users/Edson/OneDrive/Programação/Mimo/Desenvolvimento14-Pandas/notas_alunos.xlsx")

# O programa lerá esse arquivo e criará duas colunas. A primeira coluna será “media”, que terá a média das duas notas do aluno.
df["Média"] = (df["Nota 1"] + df["Nota 2"]) / 2

# A segunda será “situacao”, com os valores: APROVADO ou REPROVADO.
# O aluno que tiver mais de 5 faltas ou possuir média menor que sete, será reprovado.
df.loc[(df['Faltas'] > 5) | (df['Média'] < 7), 'Situação'] = 'Reprovado'
df.loc[(df['Faltas'] < 5) & (df['Média'] >= 7), 'Situação'] = 'Aprovado'
print(df)

# O programa deverá salvar esse novo dataframe com o nome “alunos_situacao.csv”.
df.to_csv('C:/Users/Edson/OneDrive/Programação/Mimo/Desenvolvimento14-Pandas/alunos_situacao.csv')

print()
# O maior número de faltas
max_f = df["Faltas"].max()
print(f"O maior número de faltas foi: {max_f} faltas.")

print()
# A média geral das notas dos alunos
mediag = df["Média"].sum() / 4
print(f"A média geral das notas dos alunos: {mediag}.")

print()
# A maior média
max_f = df["Média"].max()
print(f"A maior média entre os alunos foi de: {max_f}.")
