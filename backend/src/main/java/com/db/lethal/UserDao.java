package com.db.lethal;

import java.util.List;

public interface UserDao {

    List<UserProfile> findAllUser();
    List<Category> findAllCategory();
    List<Transaction> findAllTransaction();
}
