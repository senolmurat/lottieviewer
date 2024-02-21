const data = [
  {
    "title": "Reject Super Loan",
    "source": "lotties/reject_super_loan.json"
  },
  {
    "title": "Birthday",
    "source": "lotties/birthday.json"
  },
  {
    "title": "Cancel Biller Success",
    "source": "lotties/cancel_biller_success.json"
  },
  {
    "title": "Cardless Withdrawal Cancel",
    "source": "lotties/cardless_withdrawal_cancel.json"
  },
  {
    "title": "Cardless Withdrawal Empty",
    "source": "lotties/cardless_withdrawal_empty.json"
  },
  {
    "title": "Consent No Data",
    "source": "lotties/consent_no_data.json"
  },
  {
    "title": "Future Payment Date",
    "source": "lotties/future_payment_date.json"
  },
  {
    "title": "Albanian Flag",
    "source": "lotties/flag.json"
  },
  {
    "title": "General Festive",
    "source": "lotties/generalfestive.json"
  },
  {
    "title": "No Transaction",
    "source": "lotties/ill-any-transaction.json"
  },
  {
    "title": "Beneficiary Delete",
    "source": "lotties/ill-beneficiary-delete.json"
  },
  {
    "title": "Chart",
    "source": "lotties/ill-chart.json"
  },
  {
    "title": "Connection Lost",
    "source": "lotties/ill-connection-lost.json"
  },
  {
    "title": "Great News",
    "source": "lotties/ill-great-news.json"
  },
  {
    "title": "Hooray",
    "source": "lotties/ill-hooray.json"
  },
  {
    "title": "Maintanence",
    "source": "lotties/ill-maintenance.json"
  },
  {
    "title": "Maintanence",
    "source": "lotties/ill-maintenance.json"
  },
  {
    "title": "Phone Invite",
    "source": "lotties/ill-phone-invite.json"
  },
  {
    "title": "Similar Payment",
    "source": "lotties/ill-similar-payment.json"
  },
  {
    "title": "Splash",
    "source": "lotties/ill-splash.json"
  },
  {
    "title": "Beneficiary Success",
    "source": "lotties/ill-success-beneficiary.json"
  },
  {
    "title": "Bill Success",
    "source": "lotties/ill-success-bill.json"
  },
  {
    "title": "Car Success",
    "source": "lotties/ill-success-car.json"
  },
  {
    "title": "Mobile Recharge Success",
    "source": "lotties/ill-success-mobile-recharge.json"
  },
  {
    "title": "Motorcycle Success",
    "source": "lotties/ill-success-motorcycle.json"
  },
  {
    "title": "QR Success",
    "source": "lotties/ill-success-qr.json"
  },
  {
    "title": "Money Request Success",
    "source": "lotties/ill-success-request.json"
  },
  {
    "title": "RIA Success",
    "source": "lotties/ill-success-ria.json"
  },
  {
    "title": "Generic Success",
    "source": "lotties/ill-success.json"
  },
  {
    "title": "Welcome",
    "source": "lotties/ill-welcome.json"
  },
  {
    "title": "Independence Flag",
    "source": "lotties/independence.json"
  },
  {
    "title": "Labor Day",
    "source": "lotties/laborday.json"
  },
  {
    "title": "Link Account",
    "source": "lotties/link_account.json"
  },
  {
    "title": "Logout Confirmation",
    "source": "lotties/logout_confirmation.json"
  },
  {
    "title": "Loyalty Delete Confirmation",
    "source": "lotties/loyalty_delete_confirmation.json"
  },
  {
    "title": "Location Pin",
    "source": "lotties/nearest_bkt_location_pin.json"
  },
  {
    "title": "New Year Festive",
    "source": "lotties/newyear.json"
  },
  {
    "title": "No Bill Information",
    "source": "lotties/no_bill_to_pay.json"
  },
  {
    "title": "No Insurance Information",
    "source": "lotties/no_insurance.json"
  },
  {
    "title": "No Second Account Information",
    "source": "lotties/no_second_account.json"
  },
  {
    "title": "Otp Validation",
    "source": "lotties/otp_validation.json"
  },
  {
    "title": "Paysmart No Account Information",
    "source": "lotties/paysmart_no_account.json"
  },
  {
    "title": "Paysmart No Link Account Information",
    "source": "lotties/paysmart_no_link_account.json"
  },
  {
    "title": "Phone Number Landing",
    "source": "lotties/phone_number_landing.json"
  },
  {
    "title": "Phone Number Non-BKT",
    "source": "lotties/phone_number_non_bkt.json"
  },
  {
    "title": "Register Landing",
    "source": "lotties/register_landing.json"
  },
  {
    "title": "Spring Day Festive",
    "source": "lotties/springday.json"
  },
  {
    "title": "Smart Pos Payment Success",
    "source": "lotties/success_smartpos_payment.json"
  },
  {
    "title": "No Message",
    "source": "lotties/there_is_no_message.json"
  },
  {
    "title": "Traffic Fine No Car",
    "source": "lotties/traffic_fine_no_car.json"
  },
  {
    "title": "Unlink Account",
    "source": "lotties/unlink_account.json"
  },
  {
    "title": "Women's Day Festive",
    "source": "lotties/womensday.json"
  },
  {
    "title": "Loading",
    "source": "lotties/spinner_gray.json"
  },
]

function foo() {
  const root = document.querySelector('.root');

  for (let i = 0; i < data.length; i++) {
    const cell = document.createElement('div');

    const fileName = data[i].source.split("/").pop(); 

    cell.innerHTML += (`
    <lottie-player src="${data[i].source}" background="transparent" speed="1" style="width: 300px; height: 300px"
    direction="1" mode="normal" autoplay="false" hover="true" loop controls autoplay></lottie-player>
    <span class="title">${data[i].title}</span>
    <span class="title">${fileName}</span>`)

    root.append(cell);
  }

}