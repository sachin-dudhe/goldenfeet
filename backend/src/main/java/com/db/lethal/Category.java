package com.db.lethal;

import java.math.BigDecimal;

public class Category {

    private BigDecimal categoryId;
    private String categoryName;
    private BigDecimal emissionPoint;
    private String subcategory;

    public BigDecimal getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(BigDecimal categoryId) {
        this.categoryId = categoryId;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public BigDecimal getEmissionPoint() {
        return emissionPoint;
    }

    public void setEmissionPoint(BigDecimal emissionPoint) {
        this.emissionPoint = emissionPoint;
    }

    public String getSubcategory() {
        return subcategory;
    }

    public void setSubcategory(String subcategory) {
        this.subcategory = subcategory;
    }
}
