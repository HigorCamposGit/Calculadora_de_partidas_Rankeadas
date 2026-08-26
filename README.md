# 2️⃣ Calculadora de Partidas Rankeadas - DIO

Projeto desenvolvido como parte do bootcamp de lógica de programação da **Digital Innovation One (DIO)**. O objetivo é calcular o saldo de partidas rankeadas de um jogador e determinar seu nível com base na quantidade de vitórias.

---

## 🛠️ Tecnologias e Conceitos Utilizados

- **Variáveis (`const` e `let`):** Armazenamento de vitórias, derrotas e patentes.
- **Operadores Aritméticos e Lógicos:** Cálculo do saldo e validações de intervalos.
- **Estruturas de Decisão (`if / else if / else`):** Classificação do nível do herói.
- **Funções:** Função `calcularRank()` para isolar a lógica de cálculo.
- **Laços de Repetição (`for`):** Iteração sobre a lista de testes.

---

## 📐 Regras de Classificação

| Vitórias | Nível |
|---|---|
| Menor que 10 | **Ferro** |
| 11 a 20 | **Bronze** |
| 21 a 50 | **Prata** |
| 51 a 80 | **Ouro** |
| 81 a 90 | **Diamante** |
| 91 a 100 | **Lendário** |
| Maior ou igual a 101 | **Imortal** |

---

## 💬 Exemplo de Saída

```text
O Herói tem de saldo de **5** está no nível de **Ferro**
O Herói tem de saldo de **10** está no nível de **Bronze**
O Herói tem de saldo de **35** está no nível de **Prata**
O Herói tem de saldo de **55** está no nível de **Ouro**
O Herói tem de saldo de **76** está no nível de **Diamante**
O Herói tem de saldo de **80** está no nível de **Lendário**
O Herói tem de saldo de **90** está no nível de **Imortal**
