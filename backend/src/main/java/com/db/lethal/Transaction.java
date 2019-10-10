package com.db.lethal;

import java.math.BigDecimal;
import java.sql.Date;

public class Transaction {

    private BigDecimal transId;
    private Date transDate;
    private BigDecimal accNo;
    private BigDecimal amount;
    private String details;
    private BigDecimal userId;
    private BigDecimal categoryId;
    private String currency;

    public BigDecimal getTransId() {
        return transId;
    }

    public void setTransId(BigDecimal transId) {
        this.transId = transId;
    }

    public Date getTransDate() {
        return transDate;
    }

    public void setTransDate(Date transDate) {
        this.transDate = transDate;
    }

    public BigDecimal getAccNo() {
        return accNo;
    }

    public void setAccNo(BigDecimal accNo) {
        this.accNo = accNo;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public BigDecimal getUserId() {
        return userId;
    }

    public void setUserId(BigDecimal userId) {
        this.userId = userId;
    }

    public BigDecimal getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(BigDecimal categoryId) {
        this.categoryId = categoryId;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }
}
