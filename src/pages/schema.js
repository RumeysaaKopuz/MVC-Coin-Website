import * as yup from 'yup';

// Kaynak: https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
// Şifre için Kurallar:
// 1 büyük 1 küçük harf
// 1 sayı
// 1 özel karakter
const passwordRules =
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$';

export const schema = yup.object().shape({
  email: yup
    .string()
    .email('Lütfen geçerli bir email giriniz')
    .required('Zorunlu alan'),
  age: yup
    .number()
    .positive()
    .min(18, '18 yaşından kküçükler giremez')
    .max(100, "Yaşınız 100'den büyük olamaz")
    .required('Zorunlu alan'),
  password: yup
    .string()
    .min(5, 'Şifre en az 5 karakter olmalı')
    .matches(passwordRules, 'Lütfen daha güçlü bir şifre giriniz')
    .required('Zorunlu alan'),
  confirmPassword: yup
    .string()
    // one of: elemanın değeri verilen değerlerden biriyle eşleşiyormu kontrol eder
    .oneOf(
      // ref: farklı bir inputun değerini çağırmaya yarar
      [yup.ref('password')],
      'Şifre eşleşmiyor'
    )
    .required('Zorunlu Alan'),
  terms: yup
    .boolean()
    .isTrue('Koşulları kabul etmeden devam edemezsiniz.'),
});