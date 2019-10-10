package com.db.lethal;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
public class SpringSecurityConfig 
extends WebSecurityConfigurerAdapter {

	/*
	 * @Autowired private DataSource dataSource;
	 * 
	 * @Autowired public void configureGlobal(AuthenticationManagerBuilder auth)
	 * throws Exception { auth.jdbcAuthentication() .dataSource(dataSource)
	 * .usersByUsernameQuery("select usr_id,email " + "from user_profile " +
	 * "where email = ?") .authoritiesByUsernameQuery("select 'USERS' from " +
	 * "from user_profile " + "where email = ?"); }
	 */

	@Override
	public void configure(AuthenticationManagerBuilder auth) 
			throws Exception {
		auth.inMemoryAuthentication()
		.withUser("buddy")
		.password(passwordEncoder().encode("pass"))
		.roles("USER");
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.httpBasic()
		.and()
		.authorizeRequests()
		.antMatchers("/login/**").permitAll()
		.anyRequest()
		.authenticated();
	}


	@Bean
	public PasswordEncoder passwordEncoder() {
		return NoOpPasswordEncoder.getInstance();
	}
}