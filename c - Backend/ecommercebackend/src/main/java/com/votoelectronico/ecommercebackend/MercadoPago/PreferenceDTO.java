package com.votoelectronico.ecommercebackend.MercadoPago;



import java.io.Serializable;
import java.util.List;


public class PreferenceDTO implements Serializable {
    private String accessToken = "TEST-5462318479570379-070117-08e69a4d80f8ece3cd527a3810ee7291-114387581";
    private List <ItemDTO> items;

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public List<ItemDTO> getItems() {
        return items;
    }

    public void setItems(List<ItemDTO> items) {
        this.items = items;
    }
}

