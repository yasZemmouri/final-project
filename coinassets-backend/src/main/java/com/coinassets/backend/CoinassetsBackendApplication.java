package com.coinassets.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.coinassets.backend.models.User;

@SpringBootApplication
public class CoinassetsBackendApplication {

	public static void main(String[] args) {
		//SpringApplication.run(CoinassetsBackendApplication.class, args);
		
		User yassine = new User(1 ,"yassine81ma@gmail.com", "Yassine");
		User adil = new User(2 ,"adil@gmail.com", "Adil");
		System.out.println(yassine);
		System.out.println(adil);
	 
	}

}
