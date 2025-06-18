package io.github.adamyche.objviewer.obj_viewer.controller;

import io.github.adamyche.objviewer.obj_viewer.repository.UserRepository;
import io.github.adamyche.objviewer.obj_viewer.model.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserRepository userRepo;

    @PostMapping("/addUser")
    public User addUser(@RequestBody User user) {
        return userRepo.save(user);
    }

    @GetMapping("/getAllUser")
    public List<User> getAllUser() {
        return userRepo.findAll();
    }
}
