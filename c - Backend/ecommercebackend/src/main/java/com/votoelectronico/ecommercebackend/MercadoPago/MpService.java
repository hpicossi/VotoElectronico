package com.votoelectronico.ecommercebackend.MercadoPago;


import com.mercadopago.MercadoPagoConfig;
import com.mercadopago.client.preference.PreferenceBackUrlsRequest;
import com.mercadopago.client.preference.PreferenceClient;
import com.mercadopago.client.preference.PreferenceItemRequest;
import com.mercadopago.client.preference.PreferenceRequest;
import com.mercadopago.exceptions.MPApiException;
import com.mercadopago.exceptions.MPException;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class MpService {


/*    public ResponseEntity nuevaPreferencia (PreferenceDTO preferenceDTO) throws MPException, MPApiException {

    MercadoPagoConfig.setAccessToken(preferenceDTO.getAccessToken());
    // Crea un objeto de preferencia
    PreferenceClient client = new PreferenceClient();
    // Crea un ítem en la preferencia
    List<PreferenceItemRequest> items = new ArrayList<>();
    PreferenceItemRequest item =
            PreferenceItemRequest.builder()
                    .title(preferenceDTO.getItems().getTitle())
                    .quantity(preferenceDTO.getItems().getQuantity())
                    .unitPrice(preferenceDTO.getItems().getPrice())
                    .build();
		items.add(item);
    PreferenceRequest request = PreferenceRequest.builder().items(items).build();
        client.create(request);
        return ResponseEntity.ok(client.create(request));
    }
}*/


/* INTENTO 2 */

/*    public String nuevaPreferencia (PreferenceDTO preferenceDTO) throws MPException, MPApiException {

        MercadoPagoConfig.setAccessToken(preferenceDTO.getAccessToken());
        // Crea un objeto de preferencia
        PreferenceClient client = new PreferenceClient();
        // Crea un ítem en la preferencia
        List<PreferenceItemRequest> items = new ArrayList<>();

        //arma la lista de productos
        for (int j = 0; j < preferenceDTO.getItems().size() ; j++) {
        PreferenceItemRequest item =
                PreferenceItemRequest.builder()
                        .title(preferenceDTO.getItems().get(j).getTitle())
                        .quantity(preferenceDTO.getItems().get(j).getQuantity())
                        .unitPrice(preferenceDTO.getItems().get(j).getPrice())
                        .build();
        items.add(item);
        }


        PreferenceRequest request = PreferenceRequest.builder().items(items).build();

        //hace la peticion que devuelve el initpoint

        client.create(request).getInitPoint();

         String linkParaPagar = client.create(request).getSandboxInitPoint();

         LinkParaPagarDTO linkParaPagarDTO = new LinkParaPagarDTO();
         linkParaPagarDTO.setLinkParaPagar(linkParaPagar);
         return linkParaPagarDTO.getLinkParaPagar();

    }*/

    /*INTENTO 3 - funciona y devuelve el initpoint(link para pagar)*/
    public ResponseEntity nuevaPreferencia3 (PreferenceDTO preferenceDTO) throws MPException, MPApiException {

        MercadoPagoConfig.setAccessToken(preferenceDTO.getAccessToken());
        // Crea un objeto de preferencia
        PreferenceClient client = new PreferenceClient();
        // Crea un ítem en la preferencia
        List<PreferenceItemRequest> items = new ArrayList<>();

        // setear los items
        for (int j = 0; j < preferenceDTO.getItems().size() ; j++) {
            PreferenceItemRequest item =
                    PreferenceItemRequest.builder()
                            .title(preferenceDTO.getItems().get(j).getTitle())
                            .quantity(preferenceDTO.getItems().get(j).getQuantity())
                            .unitPrice(preferenceDTO.getItems().get(j).getPrice())
                            .build();
            items.add(item);
        }

        /* Setear los backUrls */
        PreferenceBackUrlsRequest backUrls =
                PreferenceBackUrlsRequest.builder()
                        .success("http://localhost:8080/reference/success")
                        .pending("http://localhost:8080/pending")
                        .failure("http://localhost:8080/failure")
                        .build();

        /* Setear los backUrls */
        PreferenceRequest request = PreferenceRequest.builder().
                items(items).
                backUrls(backUrls).
                autoReturn("approved").
                build();

        return ResponseEntity.ok(client.create(request).getInitPoint());
    }

    /*intento 4 - redireccina al init point*/
    public String nuevaPreferencia4 (PreferenceDTO preferenceDTO) throws MPException, MPApiException, IOException {

        MercadoPagoConfig.setAccessToken(preferenceDTO.getAccessToken());
        // Crea un objeto de preferencia
        PreferenceClient client = new PreferenceClient();
        // Crea un ítem en la preferencia
        List<PreferenceItemRequest> items = new ArrayList<>();

        // setear los items
        for (int j = 0; j < preferenceDTO.getItems().size() ; j++) {
            PreferenceItemRequest item =
                    PreferenceItemRequest.builder()
                            .title(preferenceDTO.getItems().get(j).getTitle())
                            .quantity(preferenceDTO.getItems().get(j).getQuantity())
                            .unitPrice(preferenceDTO.getItems().get(j).getPrice())
                            .build();
            items.add(item);
        }

        /* Setear los backUrls */
        PreferenceBackUrlsRequest backUrls =
                PreferenceBackUrlsRequest.builder()
                        .success("http://localhost:8080/reference/success")
                        .pending("http://localhost:8080/pending")
                        .failure("http://localhost:8080/failure")
                        .build();

        /* Setear los backUrls */
        PreferenceRequest request = PreferenceRequest.builder().
                items(items).
                backUrls(backUrls).
                autoReturn("approved").
                build();

        String linkParaPagar = client.create(request).getInitPoint();

        return linkParaPagar;
    }


}
