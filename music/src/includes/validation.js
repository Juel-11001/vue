import {Form as VeeForm, Field as VeeField, defineRule, ErrorMessage} from 'vee-validate';
import {required, min, max, alpha_spaces as alphaSpaces, email, min_value, max_value, confirmed, not_one_of as exclude} from "@vee-validate/rules";

export default {
  install(app){
      app.component("VeeForm", VeeForm);
      app.component("VeeField", VeeField);
      app.component("ErrorMessage", ErrorMessage);

      //set rules: 
      defineRule('required', required);
      defineRule('min', min);
      defineRule('max',max);
      defineRule('alpha_spaces', alphaSpaces);
      defineRule('email', email);
      defineRule('min_value', min_value);
      defineRule('max_value', max_value);
      defineRule('confirmed', confirmed);
      defineRule('exclude', exclude)
  }
}
