let body = JSON.parse($response.body);

body = {
  "status": 0,
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "bundle_id": "com.frontierdesign.videostar",
    "in_app": [
      {
        "quantity": "1",
        "product_id": "vspro.yearly",
        "transaction_id": "1000000000000000",
        "original_transaction_id": "1000000000000000",
        "purchase_date": "2024-04-01T07:00:00Z",
        "original_purchase_date": "2024-04-01T07:00:00Z",
        "expires_date": "2099-12-31T23:59:59Z",
        "is_trial_period": "false",
        "is_in_intro_offer_period": "false"
      }
    ]
  },
  "latest_receipt_info": [],
  "latest_receipt": "FAKE_BASE64_STRING",
  "pending_renewal_info": []
};

$done({ body: JSON.stringify(body) });
