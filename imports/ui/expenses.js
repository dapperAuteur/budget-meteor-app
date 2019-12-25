import { calculate_paycheck_take_home } from ".";

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
