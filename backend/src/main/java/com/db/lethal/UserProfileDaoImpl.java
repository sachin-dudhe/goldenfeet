package com.db.lethal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.support.JdbcDaoSupport;
import org.springframework.stereotype.Repository;

import javax.annotation.PostConstruct;
import javax.sql.DataSource;
import java.math.BigDecimal;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Repository
public class UserProfileDaoImpl extends JdbcDaoSupport implements UserDao {
    @Autowired
    DataSource dataSource;

    @PostConstruct
    private void initialize(){
        setDataSource(dataSource);
    }

    @Override
    public List<UserProfile> findAllUser() {
        String sql = "select * from user_profile";
        List<Map<String, Object>> rows = getJdbcTemplate().queryForList(sql);
        List<UserProfile> result = new ArrayList<UserProfile>();

        for(Map<String,Object> row:rows){
            UserProfile profile = new UserProfile();
            profile.setId((BigDecimal) row.get("usr_id"));
            profile.setName((String) row.get("first_name"));
            profile.setLastName((String)row.get("last_name"));
            profile.setAddress((String) row.get("address"));
            profile.setCity((String)row.get("city"));
            profile.setCountry((String)row.get("country"));
            profile.setState((String)row.get("state"));
            profile.setZip((BigDecimal) row.get("zip"));
            profile.setAlternativephone((String) row.get("alternativephone"));
            profile.setEmail((String)row.get("email"));
            profile.setPhone((String) row.get("phone"));
            result.add(profile);
        }

        return result;
    }

    @Override
    public List<Category> findAllCategory() {
        String sql = "select * from category_ref";
        List<Map<String, Object>> rows = getJdbcTemplate().queryForList(sql);
        List<Category> result = new ArrayList<Category>();

        for(Map<String,Object> row:rows){
            Category category = new Category();
            category.setCategoryId((BigDecimal) row.get("category_id"));
            category.setCategoryName((String) row.get("category_name"));
            category.setEmissionPoint((BigDecimal)row.get("emission_point"));
            category.setSubcategory((String) row.get("sub_category"));
            result.add(category);
        }

        return result;
    }

    @Override
    public List<Transaction> findAllTransaction() {
        String sql = "select * from transaction_details";
        List<Map<String, Object>> rows = getJdbcTemplate().queryForList(sql);
        List<Transaction> result = new ArrayList<Transaction>();

        for(Map<String,Object> row:rows){
            Transaction transaction = new Transaction();
            transaction.setTransId((BigDecimal) row.get("trans_id"));
            transaction.setTransDate((Date) row.get("trans_date"));
            transaction.setAccNo((BigDecimal) row.get("account_no"));
            transaction.setAmount((BigDecimal) row.get("amount"));
            transaction.setCategoryId((BigDecimal)row.get("category_id"));
            transaction.setCurrency((String) row.get("currency"));
            transaction.setDetails((String) row.get("details"));
            transaction.setUserId((BigDecimal) row.get("usr_id"));
            result.add(transaction);
        }
        return result;
    }
}
