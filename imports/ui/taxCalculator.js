let current_marriage_status = "single";
export const set_marriage_status = (marriage_status = "single") => {
  current_marriage_status = marriage_status;
  return current_marriage_status;
};

let current_location = "San Francisco";
export const set_location = (location = "San Francisco") => {
  current_location = location;
  return current_location;
};

let current_paycheck_pre_tax_deductions_per = -2500;
export const set_paycheck_pre_tax_deductions = (
  paycheck_pre_tax_deductions_per = 2500
) => {
  current_paycheck_pre_tax_deductions_per = -paycheck_pre_tax_deductions_per;
  return current_paycheck_pre_tax_deductions_per;
};
// calculate taxes
// let current_paycheck_taxes_per = -613;
// export const set_paycheck_taxes_per = (paycheck_paycheck_taxes_per = 613) => {
//   current_paycheck_taxes_per = -paycheck_paycheck_taxes_per;
//   return current_paycheck_taxes_per;
// };

// export const current_paycheck_fica_and_state_insurance_taxes_per_AZ = -383;
export const current_paycheck_fica_and_state_insurance_taxes_per_CA = -430;

let current_paycheck_taxes_per =
  -613 + current_paycheck_fica_and_state_insurance_taxes_per_CA;
export const set_paycheck_taxes_per = (paycheck_paycheck_taxes_per = 613) => {
  current_paycheck_taxes_per = -paycheck_paycheck_taxes_per;
  return current_paycheck_taxes_per;
};

export const calculate_paycheck_take_home = current_paycheck_pre_tax_deductions_per => {
  switch (current_paycheck_pre_tax_deductions_per) {
    case 0:
      set_paycheck_pre_tax_deductions(0);
      set_paycheck_taxes_per(
        1311 + current_paycheck_fica_and_state_insurance_taxes_per_CA
      );
      return (
        paycheck_gross +
        current_paycheck_pre_tax_deductions_per +
        current_paycheck_taxes_per
      );
    case 500:
      set_paycheck_pre_tax_deductions(500);
      set_paycheck_taxes_per(
        1132 + current_paycheck_fica_and_state_insurance_taxes_per_CA
      );
      return (
        paycheck_gross +
        current_paycheck_pre_tax_deductions_per +
        current_paycheck_taxes_per
      );
    case 1000:
      set_paycheck_pre_tax_deductions(1000);
      set_paycheck_taxes_per(
        954 + current_paycheck_fica_and_state_insurance_taxes_per_CA
      );
      return (
        paycheck_gross +
        current_paycheck_pre_tax_deductions_per +
        current_paycheck_taxes_per
      );
    case 1500:
      set_paycheck_pre_tax_deductions(1500);
      set_paycheck_taxes_per(
        782 + current_paycheck_fica_and_state_insurance_taxes_per_CA
      );
      return (
        paycheck_gross +
        current_paycheck_pre_tax_deductions_per +
        current_paycheck_taxes_per
      );
    case 2000:
      set_paycheck_pre_tax_deductions(2000);
      set_paycheck_taxes_per(
        613 + current_paycheck_fica_and_state_insurance_taxes_per_CA
      );
      return (
        paycheck_gross +
        current_paycheck_pre_tax_deductions_per +
        current_paycheck_taxes_per
      );
    case 2500:
      set_paycheck_pre_tax_deductions(2500);
      set_paycheck_taxes_per(
        445 + current_paycheck_fica_and_state_insurance_taxes_per_CA
      );
      return (
        paycheck_gross +
        current_paycheck_pre_tax_deductions_per +
        current_paycheck_taxes_per
      );
    case 3000:
      set_paycheck_pre_tax_deductions(3000);
      set_paycheck_taxes_per(
        283 + current_paycheck_fica_and_state_insurance_taxes_per_CA
      );
      return (
        paycheck_gross +
        current_paycheck_pre_tax_deductions_per +
        current_paycheck_taxes_per
      );
    case 3500:
      set_paycheck_pre_tax_deductions(3500);
      set_paycheck_taxes_per(
        182 + current_paycheck_fica_and_state_insurance_taxes_per_CA
      );
      return (
        paycheck_gross +
        current_paycheck_pre_tax_deductions_per +
        current_paycheck_taxes_per
      );
    case 4000:
      set_paycheck_pre_tax_deductions(4000);
      set_paycheck_taxes_per(
        93 + current_paycheck_fica_and_state_insurance_taxes_per_CA
      );
      return (
        paycheck_gross +
        current_paycheck_pre_tax_deductions_per +
        current_paycheck_taxes_per
      );
    case 4500:
      set_paycheck_pre_tax_deductions(4500);
      set_paycheck_taxes_per(
        21 + current_paycheck_fica_and_state_insurance_taxes_per_CA
      );
      return (
        paycheck_gross +
        current_paycheck_pre_tax_deductions_per +
        current_paycheck_taxes_per
      );
    case 5000:
      set_paycheck_pre_tax_deductions(5000);
      set_paycheck_taxes_per(
        0 + current_paycheck_fica_and_state_insurance_taxes_per_CA
      );
      return (
        paycheck_gross +
        current_paycheck_pre_tax_deductions_per +
        current_paycheck_taxes_per
      );
    default:
      set_paycheck_pre_tax_deductions(0);
      set_paycheck_taxes_per(1741);
      return (
        paycheck_gross +
        current_paycheck_pre_tax_deductions_per +
        current_paycheck_taxes_per
      );
  }
};
