package com.votoelectronico.ecommercebackend.repo;

import com.votoelectronico.ecommercebackend.model.cart.CartItem;
import com.votoelectronico.ecommercebackend.model.cart.CartItemPK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository <CartItem, CartItemPK> {
}
