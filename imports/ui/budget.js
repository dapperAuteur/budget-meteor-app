// paycheck and tax info
let current_marriage_status = "single";
const set_marriage_status = (marriage_status = "single") => {
  current_marriage_status = marriage_status;
  return current_marriage_status;
};
let current_salary = 120000;
const set_salary = (salary = 120000) => {
  current_salary = salary;
  return current_salary;
};
let current_location = "San Francisco";
const set_location = (location = "San Francisco") => {
  current_location = location;
  return current_location;
};
let current_estimated_semi_monthly_take_home_pay = 1956;
const set_estimated_semi_monthly_take_home_pay = (
  estimated_semi_monthly_take_home_pay = 1956
) => {
  current_estimated_semi_monthly_take_home_pay = estimated_semi_monthly_take_home_pay;
  return current_estimated_semi_monthly_take_home_pay;
};
let paycheck_gross = 5000;
// determine pretax 401k contribution
let current_paycheck_pre_tax_deductions_per = -2500;
const set_paycheck_pre_tax_deductions = (
  paycheck_pre_tax_deductions_per = 2500
) => {
  current_paycheck_pre_tax_deductions_per = -paycheck_pre_tax_deductions_per;
  return current_paycheck_pre_tax_deductions_per;
};
// calculate taxes
let current_paycheck_taxes_per = -613;
const set_paycheck_taxes_per = (paycheck_paycheck_taxes_per = 613) => {
  current_paycheck_taxes_per = -paycheck_paycheck_taxes_per;
  return current_paycheck_taxes_per;
};
const current_paycheck_fica_and_state_insurance_taxes_per_AZ = -383;
const current_paycheck_fica_and_state_insurance_taxes_per_CA = -430;

// calculate take home
let calculate_paycheck_take_home = current_paycheck_pre_tax_deductions_per => {
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

// expenses info
let exp_rent_utilities = -2000;
let exp_public_transportation = -100;
let exp_selfcare = -200;
let exp_groceries = -400;
let exp_cell_phone = -40;
let exp_student_loans = -1000;
let exp_travel = -500;
let exp_entertainment = -300;
let exp_other = -0;
let exp_monthly_total = () => {
  return (
    exp_rent_utilities +
    exp_public_transportation +
    exp_selfcare +
    exp_groceries +
    exp_cell_phone +
    exp_student_loans +
    exp_travel +
    exp_entertainment +
    exp_other
  );
};
let savings_net_exp_per_two_paychecks = () => {
  return 2 * calculate_paycheck_take_home() + exp_monthly_total();
};

console.log("current_salary", current_salary);
console.log("set_salary()", set_salary());
console.log("set_salary(50000)", set_salary(50000));
console.log("current_salary", current_salary);
