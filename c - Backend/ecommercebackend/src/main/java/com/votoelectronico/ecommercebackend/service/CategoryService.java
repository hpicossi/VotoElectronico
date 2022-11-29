package com.votoelectronico.ecommercebackend.service;

import com.votoelectronico.ecommercebackend.exceptions.CategoryNotFoundException;
import com.votoelectronico.ecommercebackend.model.Category;
import com.votoelectronico.ecommercebackend.repo.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CategoryService {

    private final CategoryRepository repo;

    public CategoryService(CategoryRepository repo) {
        this.repo = repo;
    }

    public List<Category> getCategories () {
        return repo.findAll();
    }

    public Category getCategory (Long id) {
        return repo.findById(id).orElseThrow(() ->
                new CategoryNotFoundException("Category by id " + id + " was not found."));
    }
}
