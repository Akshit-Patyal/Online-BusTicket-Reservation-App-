package com.example.feed.service;

import org.springframework.stereotype.Service;

import com.example.feed.model.Feedback;

@Service
public interface FeedbackService {

	public Feedback saveFeed(Feedback feed);
	
}
