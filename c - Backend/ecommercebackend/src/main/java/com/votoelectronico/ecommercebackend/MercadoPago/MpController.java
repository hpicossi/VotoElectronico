package com.votoelectronico.ecommercebackend.MercadoPago;

import com.mercadopago.exceptions.MPApiException;
import com.mercadopago.exceptions.MPException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


@RestController
@RequestMapping("/reference")
@CrossOrigin
public class MpController {

    @Autowired
    MpService mpService;


    @PostMapping("/new2")
    public void nuevaPreference4 (@RequestBody PreferenceDTO preferenceDTO, HttpServletResponse resp)
            throws MPException, MPApiException, IOException {
        String prueba = mpService.nuevaPreferencia4(preferenceDTO);
        System.out.println(prueba);
        resp.sendRedirect(prueba);
    }

    @PostMapping("/new")
    public ResponseEntity nuevaPreference3 (@RequestBody PreferenceDTO preferenceDTO, HttpServletResponse resp)
            throws MPException, MPApiException {
        return mpService.nuevaPreferencia3(preferenceDTO);

    }


    @GetMapping("/success")
    public void compra( @RequestParam("collection_status") String collectionStatus ,
                          @RequestParam("preference_id") String preferenceId ,
                          @RequestParam("payment_id") String paymentId,
                          HttpServletResponse resp) throws IOException {
        CompraDTO compra = new CompraDTO();
        compra.setStatus(collectionStatus);
        compra.setPreferenceId(preferenceId);
        compra.setPaymentId(paymentId);
        System.out.println(compra.toString());
        resp.sendRedirect("http://localhost:8080/redirect");
    }


}
