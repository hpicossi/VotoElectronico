package com.votoelectronico.ecommercebackend.exceptions;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException (String message) {
        super(message);
    }
}
