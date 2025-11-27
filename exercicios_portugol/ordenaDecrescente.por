programa
{
	funcao inicio()
	{
		ordenaDecrescente()
	}

	funcao ordenaDecrescente()
	{
		inteiro vetor[10] = {2, 5, 1, 3, 4, 9, 7, 8, 10, 6}

		para (inteiro i = 0; i < 10 - 1; i++)
		{
			logico foiTrocado = falso
			para (inteiro j = 0; j < 10 - 1; j++)
			{
				se (vetor[j] < vetor[j + 1])
				{
					inteiro temporario = vetor[j]
					vetor[j] = vetor[j + 1]
					vetor[j + 1] = temporario
					foiTrocado = verdadeiro
				}
			}

			se (foiTrocado == falso)
			{
				pare
			}
		}

		para (inteiro k = 0; k < 10; k++)
		{
			escreva (vetor[k], " ")
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 565; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */