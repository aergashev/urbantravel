export const bookingErrors = {
  name: {
    required: {
      uz: "Ism kiritilishi shart",
      ru: "Имя обязательно",
    },
    min: {
      uz: "Ism kamida 2 ta harf bo'lishi kerak",
      ru: "Имя должно содержать минимум 2 буквы",
    },
  },
  phone: {
    required: {
      uz: "Telefon raqam kiritilishi shart",
      ru: "Номер телефона обязателен",
    },
    invalid: {
      uz: "Telefon raqam noto'g'ri",
      ru: "Неверный номер телефона",
    },
  },
  comment: {
    max: {
      uz: "Izoh 500 belgidan oshmasligi kerak",
      ru: "Комментарий не должен превышать 500 символов",
    },
  },
  submit: {
    error: {
      uz: "Xatolik yuz berdi. Qayta urinib ko'ring.",
      ru: "Ошибка отправки. Попробуйте ещё раз.",
    },
  },
} as const
