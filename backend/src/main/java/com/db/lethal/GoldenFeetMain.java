package com.db.lethal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration;
import org.springframework.boot.autoconfigure.orm.jpa.HibernateJpaAutoConfiguration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import javax.sql.DataSource;
//import org.springframework.boot.DataSourceBuilder;

@SpringBootApplication
@PropertySource("classpath:application.properties")
//@EnableAutoConfiguration(exclude = {DataSourceAutoConfiguration.class, DataSourceTransactionManagerAutoConfiguration.class, HibernateJpaAutoConfiguration.class})
@Controller
public class GoldenFeetMain {
    private static final String PATH = "/";

    public static void main(String[] args) {
        SpringApplication.run(GoldenFeetMain.class, args);
    }

    @GetMapping(value = PATH)
    public String home() {
        return "forward:/index.html";
    }

    // @Bean
    // public DataSource dataSource() {
    // return DataSourceBuilder.create().build();
//}

}
