package com.votoelectronico.ecommercebackend.model;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.votoelectronico.ecommercebackend.model.cart.CartItem;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(unique = true, nullable = false, length = 35)
    private String username;


    @Column(nullable = false, length = 128)
    private String lastname;

    @Column(nullable = false, length = 128)
    private String password;

    @Column(unique = true, nullable = false, length = 100)
    private String email;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(nullable = false, length = 50)
    private String dni;

    @Column(nullable = false, length = 15)
    private String phone;

    @Column(name="rol")
    @Enumerated(EnumType.STRING)
    private Rol rol = Rol.USER;

    @JsonManagedReference
    @OneToMany(mappedBy = "pk.user", cascade = CascadeType.ALL)
    private List<CartItem> cartItems = new ArrayList<>();

    public User () {
    }

    public User(String username, String lastname, String password, String email, String name, String dni, String phone) {

        this.username = username;
        this.lastname = lastname;
        this.password = password;
        this.email = email;
        this.name = name;
        this.dni = dni;
        this.phone = phone;
        this.cartItems = new ArrayList<>();;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Rol getRol() {
        return rol;
    }

    public void setRol(Rol rol) {
        this.rol = rol;
    }

    public List<CartItem> getCartItems() {
        return cartItems;
    }

    public void setCartItems(List<CartItem> cartItems) {
        this.cartItems = cartItems;
    }

    @Transient
    public double getCartTotal () {
        double sum = 0;

        for (CartItem item : cartItems) {
            sum += item.getTotalPrice();
        }
        return sum;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                ", name='" + name + '\'' +
                ", dni='" + dni + '\'' +
                ", phone='" + phone + '\'' +
                ", cartItems=" + cartItems +
                '}';
    }
}
