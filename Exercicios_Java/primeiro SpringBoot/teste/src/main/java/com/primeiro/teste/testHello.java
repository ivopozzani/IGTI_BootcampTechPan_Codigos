package com.primeiro.teste;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Hello-world") //path da requisição
public class testHello {
	@GetMapping()
	public String msgHelloWorld() {
		return "Hello World";
	}

}
