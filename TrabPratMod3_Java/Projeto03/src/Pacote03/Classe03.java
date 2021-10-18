package Pacote03;

import java.util.Scanner;

public class Classe03 {

	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		double nota1 = 0, nota2 = 0, nota3 = 0, notaTotal = 0, frequencia = 0;
		double notaCorte = 50, freqCorte = 60;
		
		System.out.println("Digite a primeira nota..: ");
		nota1 = entrada.nextDouble();
		System.out.println("Digite a segunda nota..: ");
		nota2 = entrada.nextDouble();
		System.out.println("Digite a terceira nota..: ");
		nota3 = entrada.nextDouble();
		System.out.println("Digite a frequência..: ");
		frequencia = entrada.nextDouble();
		
		notaTotal = nota1 + nota2 + nota3;
		if (notaTotal >= notaCorte && frequencia >= freqCorte)
			System.out.println("Aprovado.");
		else if (notaTotal >= (notaCorte - notaCorte * 0.20) && frequencia >= freqCorte)
			System.out.println("Prova Especial.");
		else if (notaTotal >= 80)
			System.out.println("Aprovado direto.");
		else
			System.out.println("Reprovado.");

	}

}
