package com.example.feed.repo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.feed.model.Feedback;

@Repository
public interface FeedbackRepo extends MongoRepository<Feedback, Integer>{

}
