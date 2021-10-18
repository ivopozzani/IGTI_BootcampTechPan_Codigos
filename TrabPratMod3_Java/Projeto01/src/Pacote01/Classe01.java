package Pacote01;

import java.util.Scanner;

public class Classe01 {

	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		double n1 = 0, n2 = 0, n3 = 2, resultado;
		
		System.out.println("Digite o valor para a variável n1..: ");
		n1 = entrada.nextDouble();
		
		System.out.println("Digite o valor para a variável n2..: ");
		n2 = entrada.nextDouble();
		
		resultado = n1 * n2 % n3;
		System.out.printf("O valor total é..:" + resultado);

	}

}
