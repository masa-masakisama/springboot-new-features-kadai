package com.example.samuraitravel.event;

import org.springframework.context.ApplicationEvent;

import com.example.samuraitravel.entity.User;

import lombok.Getter;

@Getter
public class SignupEvent extends ApplicationEvent {
   private User user;
   private  String requestUrl;
   
   public SignupEvent(Object source, User user, String requestUrl) {
	   super(source);
	   
	   this.user = user;
	   this.requestUrl = requestUrl;
   }
}
