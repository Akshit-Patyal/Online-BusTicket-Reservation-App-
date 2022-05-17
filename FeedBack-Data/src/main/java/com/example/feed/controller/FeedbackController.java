package com.example.feed.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.feed.model.Feedback;
import com.example.feed.service.FeedbackService;

@CrossOrigin
@RequestMapping("feedback")
@RestController
public class FeedbackController {
	
	@Autowired
	FeedbackService feedbackService;
	
	@PostMapping
	public ResponseEntity<Feedback> postFeedback(@RequestBody Feedback feed){
		Feedback saveFeedback=feedbackService.saveFeed(feed);
		return new ResponseEntity<Feedback>(saveFeedback,HttpStatus.OK);
	}
	

}
