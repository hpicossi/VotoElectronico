package com.votoelectronico.ecommercebackend.exceptions;

public class CartItemDoesNotExistsException extends RuntimeException {
    public CartItemDoesNotExistsException(String message) {
        super(message);
    }
}
