package com.votoelectronico.ecommercebackend.service;

import com.votoelectronico.ecommercebackend.exceptions.ProductNotFoundException;
import com.votoelectronico.ecommercebackend.model.Product;
import com.votoelectronico.ecommercebackend.repo.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductRepository repo;

    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    public List<Product> getProducts () {
        return repo.findAll();
    }

    public Product getProduct (Long id) {
        return repo.findById(id).orElseThrow(() ->
                new ProductNotFoundException("Product by id " + id + " was not found."));
    }

    public Product addProduct (Product product) {
        return repo.save(product);
    }

    public Product updateProduct (Long id, Product product) {
        Product oldProduct = getProduct(id);

        oldProduct.setName(product.getName());
        oldProduct.setDescription(product.getDescription());
        oldProduct.setPrice(product.getPrice());
        oldProduct.setImage(product.getImage());
        oldProduct.setCategory(product.getCategory());

        return repo.save(oldProduct);
    }

    public void deleteProduct (Long id) {
        repo.deleteById(id);
    }
}
