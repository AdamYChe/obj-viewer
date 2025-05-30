package io.github.adamyche.objviewer.obj_viewer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class ObjViewerApplication {

	@GetMapping("/hello")
	public String check() {
		return "Hello World!";
	}

	public static void main(String[] args) {
		SpringApplication.run(ObjViewerApplication.class, args);
	}

}
