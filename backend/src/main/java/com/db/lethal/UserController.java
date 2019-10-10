/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See LICENSE in the project root for
 * license information.
 */

package com.db.lethal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;


@Controller
@RequestMapping(path="/users")
public class UserController {
    @Autowired
    private UserDao userDao;

   /* @PostMapping
    public @ResponseBody String createPet(@RequestBody Pet pet) {
        petRepository.save(pet);
        return String.format("Added %s.", pet);
    }*/

//    @GetMapping
//    public @ResponseBody Iterable<Pet> getAllPets() {
//        return petRepository.findAll();
//    }

    @GetMapping("/allUsers")
    public @ResponseBody
    List<UserProfile> getUsers() {
        return userDao.findAllUser();
    }

    @GetMapping("/allCategory")
    public @ResponseBody
    List<Category> getCategory() {
        return userDao.findAllCategory();
    }

    @GetMapping("/allTransaction")
    public @ResponseBody
    List<Transaction> getTransaction() {
        return userDao.findAllTransaction();
    }
}
