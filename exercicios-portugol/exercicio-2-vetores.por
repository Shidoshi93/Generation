programa
{
	
	funcao inicio()
	{
		inteiro vetor[10]
		
		para (inteiro i = 0; i < 10; i++) 
		{
			escreva ("Digite um número: ")
			leia (vetor[i])
		}

		escreva ("\n")

		escreva ("índices impares: ") 
		retornaElementosNoIndiceImpar(vetor)
		escreva ("\n")
		escreva ("Números pares: ")
		retornaElementosNoIndicePar(vetor)
		escreva ("\n")
		inteiro total = somaElementos(vetor)
		escreva ("\n")
		mediaElementos(10, total)
	}

	funcao retornaElementosNoIndiceImpar(inteiro vetor[])
	{
		para (inteiro i = 0; i < 10; i++) 
		{
			se (i % 2 == 1) 
			{
				escreva (vetor[i], " ")
			}
		}
	}

	funcao retornaElementosNoIndicePar(inteiro vetor[])
	{
		para (inteiro i = 0; i < 10; i++) 
		{
			se (vetor[i] % 2 == 0) 
			{
				escreva (vetor[i], " ")
			}
		}
	}

	funcao inteiro somaElementos(inteiro vetor[])
	{
		inteiro total = 0
		para (inteiro i = 0; i < 10; i++) 
		{
			total += vetor[i]
		}

		escreva ("A soma dos valores é: ", total)

		retorne total
	}

	funcao mediaElementos(inteiro tamanhoVetor, inteiro total)
	{
		inteiro media = 0

		media = total / tamanhoVetor

		escreva ("A média é: ", media)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1109; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */