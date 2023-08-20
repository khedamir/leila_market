export const validationSchema = {
  first_name: {
    required: "Укажите имя",
    minLength: {
      value: 2,
      message: "Имя должно содержать не менее 2 символов",
    },
    maxLength: {
      value: 255,
      message: "Имя должно содержать не более 255 символов",
    },
  },
  last_name: {
    required: "Укажите фамилию",
    minLength: {
      value: 2,
      message: "Фамилия должна содержать не менее 2 символов",
    },
    maxLength: {
      value: 255,
      message: "Фамилия должна содержать не более 255 символов",
    },
  },
  email: {
    required: "Укажите электронную почту",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Неверный адрес электронной почты",
    },
  },
  phone: {
    required: "Укажите телефон",
    pattern: {
      value: /^(\+7\s)?\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/,
      message: "Неверный телефон",
    },
  },
  city: {
    required: "Укажите город",
  },
  delivery_method: {
    required: "Выберите метод доставки",
  },
  street: {
    required: "Укажите улицу",
    minLength: {
      value: 2,
      message: "Улица должна содержать не менее 5 символов",
    },
    maxLength: {
      value: 100,
      message: "Улица должна содержать не более 100 символов.",
    },
  },
  house: {
    required: "Укажите номер дома",
  },
  apartment_office: {
    required: "Укажите номер квартиры/офиса",
  },
  postal_code: {
    required: "Укажите почтовый индекс",
  },
  courier_comment: {
    required: "Укажите комментарий для курьера",
  },
};
