package com.example.inahozuul;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.context.annotation.Bean;
import org.springframework.format.FormatterRegistry;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.validation.MessageCodesResolver;
import org.springframework.validation.Validator;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.HandlerMethodReturnValueHandler;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.config.annotation.AsyncSupportConfigurer;
import org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.PathMatchConfigurer;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.example.inahozuul.model.User;
import com.example.inahozuul.repo.UserRepository;

@EnableZuulProxy
@EnableDiscoveryClient
@SpringBootApplication
public class InahoZuulApplication {

	public static void main(String[] args) {
		SpringApplication.run(InahoZuulApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer()
	{
		return new WebMvcConfigurer()
				{
			
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/*").allowedHeaders("*").allowedOrigins("*");
			}

			@Override
			public void addArgumentResolvers(List<HandlerMethodArgumentResolver> arg0) {
				// TODO Auto-generated method stub
				
			}

			@Override
			public void addFormatters(FormatterRegistry arg0) {
				// TODO Auto-generated method stub
				
			}

			@Override
			public void addInterceptors(InterceptorRegistry arg0) {
				// TODO Auto-generated method stub
				
			}

			@Override
			public void addResourceHandlers(ResourceHandlerRegistry arg0) {
				// TODO Auto-generated method stub
				
			}

			@Override
			public void addReturnValueHandlers(List<HandlerMethodReturnValueHandler> arg0) {
				// TODO Auto-generated method stub
				
			}

			@Override
			public void addViewControllers(ViewControllerRegistry arg0) {
				// TODO Auto-generated method stub
				
			}

			@Override
			public void configureAsyncSupport(AsyncSupportConfigurer arg0) {
				// TODO Auto-generated method stub
				
			}

			@Override
			public void configureContentNegotiation(ContentNegotiationConfigurer arg0) {
				// TODO Auto-generated method stub
				
			}

			@Override
			public void configureDefaultServletHandling(DefaultServletHandlerConfigurer arg0) {
				// TODO Auto-generated method stub
				
			}

			@Override
			public void configureHandlerExceptionResolvers(List<HandlerExceptionResolver> arg0) {
				// TODO Auto-generated method stub
				
			}

			@Override
			public void configureMessageConverters(List<HttpMessageConverter<?>> arg0) {
				// TODO Auto-generated method stub
				
			}

			@Override
			public void configurePathMatch(PathMatchConfigurer arg0) {
				// TODO Auto-generated method stub
				
			}

			@Override
			public void configureViewResolvers(ViewResolverRegistry arg0) {
				// TODO Auto-generated method stub
				
			}

			@Override
			public void extendHandlerExceptionResolvers(List<HandlerExceptionResolver> arg0) {
				// TODO Auto-generated method stub
				
			}

			@Override
			public void extendMessageConverters(List<HttpMessageConverter<?>> arg0) {
				// TODO Auto-generated method stub
				
			}

			@Override
			public MessageCodesResolver getMessageCodesResolver() {
				// TODO Auto-generated method stub
				return null;
			}

			@Override
			public Validator getValidator() {
				// TODO Auto-generated method stub
				return null;
			}
				};
	}
	
	
	
//	  @Autowired private UserRepository repository;
//	  
//	  
//	  @PostConstruct public void initUsers() { List<User> users = Stream.of( new
//	  User(101, "test", "password", "test@abc.com"), new User(102, "user1", "pwd1",
//	  "test@abc.com"), new User(103, "user2", "pwd2", "test@abc.com"), new
//	  User(104, "user3", "pwd3", "test@abc.com") ).collect(Collectors.toList());
//	  repository.save(users); }
	 
}
