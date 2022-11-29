package com.votoelectronico.ecommercebackend.repo;

import com.votoelectronico.ecommercebackend.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Long> {
    void deleteById(Long id);
    Optional<Product> findById (Long id);
}
