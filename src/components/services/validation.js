
const validation = (state) => {
    const errors = {};
  
    if (!state.subscription_name) {
      errors.subscription_name = 'Name is required';
    }
    if (!state.subscription_email) {
      errors.subscription_email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(state.subscription_email)) {
      errors.subscription_email = 'Email is invalid';
    }
    if (!state.subscription_phone) {
      errors.subscription_phone = 'Phone is required';
    } else if (state.subscription_phone.length < 10 || state.subscription_phone.length > 10) {
      errors.subscription_phone = 'Phone must be equal to 10 numbers';
    }
    if (!state.subscription_campany_name) {
      errors.subscription_campany_name = 'Company name is required';
    } 
    if (!state.subscription_message) {
      errors.subscription_message = 'Message is required';
    } else if (state.subscription_message.length < 15) {
      errors.subscription_message = 'Message must be more than 15 characters';
    }
    return errors;
  };
  
  export default validation;