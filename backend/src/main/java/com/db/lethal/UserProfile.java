package com.db.lethal;

import java.math.BigDecimal;

public class UserProfile {

    private BigDecimal id;
    private String name;
    private String lastName;
    private String address;
    private String city;
    private String country;
    private String state;
    private BigDecimal zip;
    private String phone;
    private String alternativephone;
    private String email;

    public BigDecimal getId() {
        return id;
    }

    public void setId(BigDecimal id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public BigDecimal getZip() {
        return zip;
    }

    public void setZip(BigDecimal zip) {
        this.zip = zip;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getAlternativephone() {
        return alternativephone;
    }

    public void setAlternativephone(String alternativephone) {
        this.alternativephone = alternativephone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
