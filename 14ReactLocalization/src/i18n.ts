import i18n from "i18next";
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({

   debug: true,
   fallbackLng: "en",
   resources: {
      en: {
         translation: {
            viteReactLine: "Click on the Vite and React logos to learn more",
            right: "Right"
         }
      },
      pt: {
         translation: {
            viteReactLine: "lorem5",
            direction: {
               right: 'Direita'
            },
            correctness: {
               right: 'Certo'
            }
         }
      },
      es: {},
   }

}) 

export default i18n