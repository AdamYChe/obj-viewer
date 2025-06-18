package io.github.adamyche.objviewer.obj_viewer.repository;

import io.github.adamyche.objviewer.obj_viewer.model.User;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

}
