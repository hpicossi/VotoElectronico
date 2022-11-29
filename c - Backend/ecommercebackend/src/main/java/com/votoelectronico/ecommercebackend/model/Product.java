package com.votoelectronico.ecommercebackend.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false, length = 128)
    private String name;

    @Column(nullable = false, length = 4000)
    private String description;


    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;

    @Column(nullable = false, precision = 10, scale = 2)
    private double price;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(nullable = false)
    private Date addedOn = new Date();

    @Lob
    @Column(nullable = true, length = Integer.MAX_VALUE)
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private byte[] image;

    public Product () {
    }

    /*public Product (String name, String description, double price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    public Product (String name, String description, double price, byte[]image) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
    }*/

    public Product(long id, String name, String description, Category category, double price, Date addedOn, byte[] image) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
        this.addedOn = addedOn;
        this.image = image;
    }

    public Product(String name, String description, Category category, double price, Date addedOn) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.price = price;
        this.addedOn = addedOn;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Date getAddedOn() {
        return addedOn;
    }

    public void setAddedOn(Date addedOn) {
        this.addedOn = addedOn;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }
}
