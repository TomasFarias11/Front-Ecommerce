/* 
Public
TEST-9fbc8f53-3938-4b5c-9e50-9dc56c995090

Acces Token
TEST-113123061409856-012822-e6e2b2f5c8eefd1fd72a8b11a619dc5f-47039087


curl -X POST \
-H "Content-Type: application/json" \
-H 'Authorization: Bearer PROD_ACCESS_TOKEN' \
"https://api.mercadopago.com/users/test_user" \
-d '{"site_id":"MLA"}'

Vendedor
{
    "id": 1064947848,
    "nickname": "TETE3480532",
    "password": "qatest1496",
    "site_status": "active",
    "email": "test_user_48796061@testuser.com"
}
Public Key
APP_USR-16bdd49c-e5f2-4553-ba7e-812a402aa5f9

Access Token
APP_USR-8267654299243561-012823-d0e8cba1293e852e15bbcfff9052d250-1064947848

Cliente
{
    "id": 1064943233,
    "nickname": "TESTYDGHNNH9",
    "password": "qatest8046",
    "site_status": "active",
    "email": "test_user_53156760@testuser.com"
}
{
    "id": 1065022122,
    "nickname": "TETE7456008",
    "password": "qatest6817",
    "site_status": "active",
    "email": "test_user_43026534@testuser.com"
}
{
    "id": 1065021258,
    "nickname": "TESTB3UZMCVJ",
    "password": "qatest6644",
    "site_status": "active",
    "email": "test_user_48884465@testuser.com"
}
{
    "id": 1065022190,
    "nickname": "TETE7424107",
    "password": "qatest8701",
    "site_status": "active",
    "email": "test_user_38186048@testuser.com"
}
{
    "id": 1065022200,
    "nickname": "TESTGWTSXCNX",
    "password": "qatest4676",
    "site_status": "active",
    "email": "test_user_74800556@testuser.com"
}
{
    "id": 1065022990,
    "nickname": "TESTUSVYS1O6",
    "password": "qatest4512",
    "site_status": "active",
    "email": "test_user_23749227@testuser.com"
}
{
    "id": 1065023006,
    "nickname": "TETE1230735",
    "password": "qatest9020",
    "site_status": "active",
    "email": "test_user_83253233@testuser.com"
}
{
    "id": 1065020347,
    "nickname": "TESTUCANYIRH",
    "password": "qatest5780",
    "site_status": "active",
    "email": "test_user_64589228@testuser.com"
}
{
    "id": 1065021326,
    "nickname": "TEST5JMOMAEC",
    "password": "qatest8859",
    "site_status": "active",
    "email": "test_user_11312618@testuser.com"
}
{
    "id": 1065020369,
    "nickname": "TETE2517473",
    "password": "qatest7520",
    "site_status": "active",
    "email": "test_user_25470426@testuser.com"
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////

{
    "body": {
        "additional_info": "",
        "auto_return": "approved",
        "back_urls": {
            "failure": "http://localhost:3000/mercadopago/rechazado",
            "pending": "http://localhost:3000/mercadopago/rechazado",
            "success": "http://localhost:3000/mercadopago/aceptado"
        },
        "binary_mode": false,
        "client_id": "8267654299243561",
        "collector_id": 1064947848,
        "coupon_code": null,
        "coupon_labels": null,
        "date_created": "2022-02-01T13:37:16.946+00:00",
        "date_of_expiration": null,
        "expiration_date_from": null,
        "expiration_date_to": null,
        "expires": false,
        "external_reference": "",
        "id": "1064947848-7c02ab8d-9d35-426d-a375-54624ef92545",
        "init_point": "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=1064947848-7c02ab8d-9d35-426d-a375-54624ef92545",
        "internal_metadata": null,
        "items": [
            {
                "id": "",
                "category_id": "",
                "currency_id": "ARS",
                "description": "",
                "title": "asdasaew",
                "quantity": 1,
                "unit_price": 20
            }
        ],
        "marketplace": "NONE",
        "marketplace_fee": 0,
        "metadata": {},
        "notification_url": null,
        "operation_type": "regular_payment",
        "payer": {
            "phone": {
                "area_code": "",
                "number": ""
            },
            "address": {
                "zip_code": "",
                "street_name": "",
                "street_number": null
            },
            "email": "",
            "identification": {
                "number": "",
                "type": ""
            },
            "name": "",
            "surname": "",
            "date_created": null,
            "last_purchase": null
        },
        "payment_methods": {
            "default_card_id": null,
            "default_payment_method_id": null,
            "excluded_payment_methods": [
                {
                    "id": ""
                }
            ],
            "excluded_payment_types": [
                {
                    "id": ""
                }
            ],
            "installments": null,
            "default_installments": null
        },
        "processing_modes": null,
        "product_id": null,
        "redirect_urls": {
            "failure": "",
            "pending": "",
            "success": ""
        },
        "sandbox_init_point": "https://sandbox.mercadopago.com.ar/checkout/v1/redirect?pref_id=1064947848-7c02ab8d-9d35-426d-a375-54624ef92545",
        "site_id": "MLA",
        "shipments": {
            "default_shipping_method": null,
            "receiver_address": {
                "zip_code": "",
                "street_name": "",
                "street_number": null,
                "floor": "",
                "apartment": "",
                "city_name": null,
                "state_name": null,
                "country_name": null
            }
        },
        "total_amount": null,
        "last_updated": null
    },
    "response": {
        "additional_info": "",
        "auto_return": "approved",
        "back_urls": {
            "failure": "http://localhost:3000/mercadopago/rechazado",
            "pending": "http://localhost:3000/mercadopago/rechazado",
            "success": "http://localhost:3000/mercadopago/aceptado"
        },
        "binary_mode": false,
        "client_id": "8267654299243561",
        "collector_id": 1064947848,
        "coupon_code": null,
        "coupon_labels": null,
        "date_created": "2022-02-01T13:37:16.946+00:00",
        "date_of_expiration": null,
        "expiration_date_from": null,
        "expiration_date_to": null,
        "expires": false,
        "external_reference": "",
        "id": "1064947848-7c02ab8d-9d35-426d-a375-54624ef92545",
        "init_point": "https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=1064947848-7c02ab8d-9d35-426d-a375-54624ef92545",
        "internal_metadata": null,
        "items": [
            {
                "id": "",
                "category_id": "",
                "currency_id": "ARS",
                "description": "",
                "title": "asdasaew",
                "quantity": 1,
                "unit_price": 20
            }
        ],
        "marketplace": "NONE",
        "marketplace_fee": 0,
        "metadata": {},
        "notification_url": null,
        "operation_type": "regular_payment",
        "payer": {
            "phone": {
                "area_code": "",
                "number": ""
            },
            "address": {
                "zip_code": "",
                "street_name": "",
                "street_number": null
            },
            "email": "",
            "identification": {
                "number": "",
                "type": ""
            },
            "name": "",
            "surname": "",
            "date_created": null,
            "last_purchase": null
        },
        "payment_methods": {
            "default_card_id": null,
            "default_payment_method_id": null,
            "excluded_payment_methods": [
                {
                    "id": ""
                }
            ],
            "excluded_payment_types": [
                {
                    "id": ""
                }
            ],
            "installments": null,
            "default_installments": null
        },
        "processing_modes": null,
        "product_id": null,
        "redirect_urls": {
            "failure": "",
            "pending": "",
            "success": ""
        },
        "sandbox_init_point": "https://sandbox.mercadopago.com.ar/checkout/v1/redirect?pref_id=1064947848-7c02ab8d-9d35-426d-a375-54624ef92545",
        "site_id": "MLA",
        "shipments": {
            "default_shipping_method": null,
            "receiver_address": {
                "zip_code": "",
                "street_name": "",
                "street_number": null,
                "floor": "",
                "apartment": "",
                "city_name": null,
                "state_name": null,
                "country_name": null
            }
        },
        "total_amount": null,
        "last_updated": null
    },
    "status": 201
}




*/
