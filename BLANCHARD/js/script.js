let validation = new JustValidate('#form',{
  errorLabelStyle: {
    color: '#D11616'
  }
})

let selector = document.querySelector("#phone")
let im = new Inputmask("+7(999)999-99-99")
im.mask(selector)

validation.addField("#name", [
  {
    rule: 'required',
    errorMessage : 'Введите имя'
  },
  {
    rule: 'minLength',
    value: 2,
    errorMessage : 'Минимум 2 символа'
  },
])
.addField("#phone", [
  {
    validator: (value) => {
      const phone = selector.inputmask.unmaskedvalue()
      return Boolean(Number(phone) && phone.length > 0)
    },
    errorMessage : 'Недопустимый формат'
  },
  {
    validator: (value) => {
      const phone = selector.inputmask.unmaskedvalue()
      return Boolean(Number(phone) && phone.length === 10)
    },
    errorMessage : 'Введите телефон полностью'
  }
])



