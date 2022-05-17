package com.example.feed.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.feed.model.Feedback;
import com.example.feed.repo.FeedbackRepo;

@Service
public class FeedbackServiceImpl implements FeedbackService{
	
	@Autowired
	FeedbackRepo feedbackRepo;

	@Override
	public Feedback saveFeed(Feedback feed) {
		// TODO Auto-generated method stub
		return feedbackRepo.save(feed);
	}

}
