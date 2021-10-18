package Pacote02;

import java.util.Scanner;

public class Classe02 {

	public static void main(String[] args) {
		int valor1 = 0, valor2 = 75, valor3 = 0;
		Scanner ent = new Scanner (System.in);
		
		System.out.println("Digite um número inteiro para a variável valor1: ");
		valor1 = ent.nextInt();
		valor2 += valor1;
		
		if (valor1 % 2 == 0)
			valor3 = valor1 * 5;
		else if (valor1 % 3 == 0)
			valor3 = valor2 * 9;
		else
			valor3 = valor2;
		System.out.printf("O valor da variável valor3 é: %d.", valor3);
	}

}
