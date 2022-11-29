package com.votoelectronico.ecommercebackend.exceptions;

public class CategoryNotFoundException extends RuntimeException{

    public CategoryNotFoundException(String message) {
        super(message);
    }
}
