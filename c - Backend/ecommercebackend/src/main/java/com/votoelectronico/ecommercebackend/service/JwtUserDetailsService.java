package com.votoelectronico.ecommercebackend.service;

import com.votoelectronico.ecommercebackend.model.User;
import com.votoelectronico.ecommercebackend.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class JwtUserDetailsService implements UserDetailsService {
    @Autowired
    private UserRepository repo;

    @Autowired
    private PasswordEncoder bcryptEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = repo.findByUsername(username);

        if (user == null) {
            throw new UsernameNotFoundException("User not found with the username of: " + username);
        }

        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(),
                new ArrayList<>());
    }

    public User save (User user) {
        User newUser = new User(user.getUsername(), user.getLastname(), bcryptEncoder.encode(user.getPassword()), user.getEmail(),
                user.getName(), user.getDni(), user.getPhone());

        return repo.save(newUser);
    }
}
