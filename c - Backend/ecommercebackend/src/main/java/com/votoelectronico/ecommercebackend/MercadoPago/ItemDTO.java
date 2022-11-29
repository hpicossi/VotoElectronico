package com.votoelectronico.ecommercebackend.MercadoPago;



import java.io.Serializable;
import java.math.BigDecimal;


public class ItemDTO implements Serializable {
    String title;
    BigDecimal price;
    int quantity;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}


