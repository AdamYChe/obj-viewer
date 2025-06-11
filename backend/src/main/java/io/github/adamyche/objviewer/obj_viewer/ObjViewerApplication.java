package io.github.adamyche.objviewer.obj_viewer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

@SpringBootApplication
//@RestController
public class ObjViewerApplication {
	/* 
	@GetMapping("/hello")
	public String check() {
		return "Hello World...";
	}*/

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(ObjViewerApplication.class, args);

		// Annotation-Based Config
		Letter letter = context.getBean(Letter.class);
		letter.print();

		/* Java-Based Config
		ApplicationContext context = new AnnotationConfigApplicationContext(Learning.class);
		Letter letter = context.getBean(Letter.class);

		letter.print(); */
	}
}