import {
  configure,
  defineRule,
  ErrorMessage,
  Field as VeeField,
  Form as VeeForm
} from 'vee-validate';
import {
  alpha_spaces as alphaSpaces,
  confirmed,
  email,
  max,
  max_value,
  min,
  min_value,
  not_one_of as exclude,
  required
} from "@vee-validate/rules";

export default {
  install(app){
      app.component("VeeForm", VeeForm);
      app.component("VeeField", VeeField);
      app.component("ErrorMessage", ErrorMessage);

      //set rules:
      defineRule('required', required);
      defineRule('tos', required);
      defineRule('min', min);
      defineRule('max',max);
      defineRule('alpha_spaces', alphaSpaces);
      defineRule('email', email);
      defineRule('min_value', min_value);
      defineRule('max_value', max_value);
      defineRule('confirmed', confirmed);
      defineRule('exclude', exclude);
      defineRule('country_exclude', exclude);
      configure({
        generateMessage:(ctx)=>{
          const messages={
            required:`The field ${ctx.field} is required.`,
            min:`The field ${ctx.field} is too short.`,
            max:`The field ${ctx.field} is too long`,
            alphaSpaces:`The field ${ctx.field} may only contain alphabetic characters and spaces.`,
            email:`The field ${ctx.field} must be a valid email`,
            min_value:`The field ${ctx.field} is too low`,
            max_value:`The field ${ctx.field} is too high`,
            exclude:`You are not allowed to use this vale for the field ${ctx.field}`,
            tos: `You must accept the Terms of Service.`,
            confirmed:`The password dont' match.`,
            country_exclude:`Due to restrictions, we don't accept users from this location.`
          };
          return messages[ctx.rule.name] ? messages[ctx.rule.name] : `the field ${ctx.field} is invalid.`;
        },
        validateOnBlur:true,
        validateOnInput:false,
        validateOnModelUpdate:true,
        validateOnChange:true
      })
  }
}
