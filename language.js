const lang_form = document.querySelector(".tabber")
const lang_about = document.querySelector("#lang_about")
const lang_work = document.querySelector("#lang_work")
const lang_aboutUS = document.querySelector("#lang_aboutUS")
const lang_cardTitle1 = document.querySelector("#lang_card-title1")
const lang_cardTitle2 = document.querySelector("#lang_card-title2")
const lang_cardTitle3 = document.querySelector("#lang_card-title3")
const lang_cardTitle4 = document.querySelector("#lang_card-title4")
const lang_card1 = document.querySelector("#lang_card1")
const lang_card2 = document.querySelector("#lang_card2")
const lang_card3 = document.querySelector("#lang_card3")
const lang_card4 = document.querySelector("#lang_card4")
const lang_serviceTitle = document.querySelector("#lang_service")
const lang_service1 = document.querySelector("#lang_service1")
const lang_service2 = document.querySelector("#lang_service2")
const lang_service3 = document.querySelector("#lang_service3")
const lang_service4 = document.querySelector("#lang_service4")
const lang_service5 = document.querySelector("#lang_service5")
const lang_service6 = document.querySelector("#lang_service6")
const lang_service7 = document.querySelector("#lang_service7")
const lang_service8 = document.querySelector("#lang_service8")
const lang_service9 = document.querySelector("#lang_service9")
const lang_service10 = document.querySelector("#lang_service10")
const lang_service11 = document.querySelector("#lang_service11")
const lang_service12 = document.querySelector("#lang_service12")
const lang_service13 = document.querySelector("#lang_service13")
const lang_service14 = document.querySelector("#lang_service14")
const lang_partner = document.querySelector("#lang_partner")
const lang_contact = document.querySelector("#lang_contact")
const lang_time = document.querySelector("#lang_time")
const lang_footer = document.querySelector("#lang_footer")
const lang_callMe = document.querySelector("#lang_callMe")
const lang_callInput = document.querySelector("#lang_callInput")
const lang_btn = document.querySelector("#lang_btn")
const lang_privacy = document.querySelector("#lang_privacy")
const lang_address = document.querySelector("#lang_address")
const lang_socialMedia = document.querySelector("#lang_socialMedia")
const lang_contactText = document.querySelector("#lang_contactText")

const data = {
    uz: [{
        about: "Bizning xizmatlar",
        work: "Biz haqimizda",
        aboutUs: "Biz haqimizda",
        cardTitle1: "1FIN qanday kompaniya?",
        cardTitle2: "Nimalar taklif qilamiz?",
        cardTitle3: "Qanday tajribaga ega?",
        cardTitle4: "Sifati qanday?",
        cardDesc1: "1FIN O‘zbekistondagi yetakchi kompaniyalardan biri bo‘lib, buxgalteriya xizmatlarining to‘liq qamrovini, soliq va yuridik maslahatlar, moliyaviy konsalting va biznes jarayonlari autsorsingini taqdim etishga ixtisoslashgan.",
        cardDesc2: "Mutaxassislarimiz buxgalteriya hisobi sohasida katta amaliy tajribaga, shuningdek, soliq maslahati bo'yicha tajribaga ega. Biz iqtisodiyotning turli tarmoqlaridagi barcha so'nggi o'zgarishlarni doimiy ravishda kuzatib boramiz va bu biznesga qanday ta'sir qilishi haqida o'z ekspert fikrimizni taklif qilamiz.",
        cardDesc3: "1FIN O'zbekiston bozorida o'z faoliyatini yaqinda boshlagan. Yaqinda boshlaganiga qaramay o'z jamoasining chuqur bilimi, tajribasi, malakasi, mas'uliyati va ishonchliligi tufayli kompaniya raqobatchilarga nisbatan arzon narxlari va yuqori sifatli xizmatlar tufayli bozorda o'z nomini yaratishga muvaffaq bo'ldi. Kompaniya tezda mashhurlikka erishmoqda va mavjud bo'lgan davrda buxgalteriya xizmatlari bozorida muvaffaqiyatli faoliyat yuritib kelmoqda.",
        cardDesc4: "Bizning ishimizning eng muhim tamoyillari - ko'rsatilayotgan xizmatlarning yuqori sifati, mutlaq maxfiylik va ishning tez bajarilishi. Biz zamonaviy biznes texnologiyalaridan foydalanamiz va xizmatlarimiz sifatini doimiy ravishda oshiramiz.",
        service: "Bizning xizmatlar",
        serviceDesc1: "Buxgalteriya hisobini yuritish",
        serviceDesc2: "Buxgalteriya hisobini tiklash",
        serviceDesc3: "Buxgalteriya hisob siyosatini tayyorlash",
        serviceDesc4: "Buxgalteriyani tahlil qilish",
        serviceDesc5: "Buxgalteriya hisobini avtomatlashtirish uchun ulibiy yordam",
        serviceDesc6: "Buxgalteriya hisobini optimallashtirish",
        serviceDesc7: "Buxgalteriyan hisobi bo'yicha maslahatlar berish",
        serviceDesc8: "Ish haqini hisoblash",
        serviceDesc9: "Elektron hujjat aylanmasini amalga oshirish",
        serviceDesc10: "Soliq va Statistika hisobotlarni tayyorlash va topshirish",
        serviceDesc11: "Moliyaviy hisobotlarni tayyorlash",
        serviceDesc12: "Hisobotlarni BHMS dan XMHS ga o'tkazish",
        serviceDesc13: "XMHS asosida hisob yurutish",
        serviceDesc14: "XMHS asosida hisob yurutish bo'yicha maslahat",
        partner: "Bizning hamkorlar",
    }],
    ru: [{
        about: "Наша работа",
        work: "O нас",
        aboutUs: "O нас",
        cardTitle1: "Что это за компания 1FIN?",
        cardTitle2: "Что мы предлагаем?",
        cardTitle3: "Какой у вас опыт?",
        cardTitle4: "Как качество?",
        cardDesc1: "1FIN - одна из ведущих компаний в Узбекистане, специализирующаяся на предоставлении полного спектра бухгалтерских услуг, налогового и юридического консультирования, финансового консультирования, аутсорсинга бизнес-процессов. ",
        cardDesc2: "Наши специалисты имеют большой практический опыт в бухгалтерской области, а также опыт налогового консультирования. Мы постоянно отслеживаем все последние изменения в различных секторах экономики и предлагаем свое экспертное мнение о том, как это может повлиять на бизнес.",
        cardDesc3: "1FIN начала свою деятельность на рынке Узбекистана сравнительно недавно. Несмотря на свое недавнее появление и благодаря глубоким знаниям, опыту, компетентности, ответственности и надежности своего коллектива, компания уже успела заявить о себе на рынке благодаря низкой цене и высокому качеству услуг по сравнению с конкурентами. Компания стремительно набирает популярность и за время своего существования уже успешно работает на рынке бухгалтерских услуг.",
        cardDesc4: "Важнейшими принципами нашей работы являются высокое качество предоставляемых услуг, абсолютная конфиденциальность и быстрое выполнение работ. Мы используем современные бизнес-технологии и постоянно улучшаем качество наших услуг.",
        service: "Наши сервисы",
        serviceDesc1: "Ведение бухгалтерского учета",
        serviceDesc2: "Восстановление бухгалтерского учета",
        serviceDesc3: "Подготовка бухгалтерской учетной политики",
        serviceDesc4: "Анализ эффективности работы бухгалтерской службы и системы внутреннего контроля",
        serviceDesc5: "Методологическая поддержка при автоматизации учета",
        serviceDesc6: "Оптимизация бухгалтерии",
        serviceDesc7: "Консультации по вопросам бухгалтерского учета",
        serviceDesc8: "Расчет заработных плат",
        serviceDesc9: "Электронный документооборот",
        serviceDesc10: "Подготовка и сдача налоговой и статистической отчетности",
        serviceDesc11: "Подготовка финансовой отчетности",
        serviceDesc12: "Трансформация отчетности из НСБУ в МСФО",
        serviceDesc13: "Ведение учета по МСФО",
        serviceDesc14: "Консультации по вопросам учета по МСФО",
        partner: "Наши партнеры",
    }]
}



lang_form.addEventListener('change', (e) => {
    let language = e.target.value

    if (language === "uz") {
        lang_about.innerHTML = data.uz[0].about
        lang_work.innerHTML = data.uz[0].work
        lang_aboutUS.innerHTML = data.uz[0].aboutUs
        lang_cardTitle1.innerHTML = data.uz[0].cardTitle1
        lang_card1.innerHTML = data.uz[0].cardDesc1
        lang_cardTitle2.innerHTML = data.uz[0].cardTitle2
        lang_card2.innerHTML = data.uz[0].cardDesc2
        lang_cardTitle3.innerHTML = data.uz[0].cardTitle3
        lang_card3.innerHTML = data.uz[0].cardDesc3
        lang_cardTitle4.innerHTML = data.uz[0].cardTitle4
        lang_card4.innerHTML = data.uz[0].cardDesc4
        lang_serviceTitle.innerHTML = data.uz[0].service
        lang_service1.innerHTML = data.uz[0].serviceDesc1
        lang_service2.innerHTML = data.uz[0].serviceDesc2
        lang_service3.innerHTML = data.uz[0].serviceDesc3
        lang_service4.innerHTML = data.uz[0].serviceDesc4
        lang_service5.innerHTML = data.uz[0].serviceDesc5
        lang_service6.innerHTML = data.uz[0].serviceDesc6
        lang_service7.innerHTML = data.uz[0].serviceDesc7
        lang_service8.innerHTML = data.uz[0].serviceDesc8
        lang_service9.innerHTML = data.uz[0].serviceDesc9
        lang_service10.innerHTML = data.uz[0].serviceDesc10
        lang_service11.innerHTML = data.uz[0].serviceDesc11
        lang_service12.innerHTML = data.uz[0].serviceDesc12
        lang_service13.innerHTML = data.uz[0].serviceDesc13
        lang_service14.innerHTML = data.uz[0].serviceDesc14
        lang_partner.innerHTML = data.uz[0].partner
        lang_contact.innerHTML = `
        <h3 class="order-item__title h2">
        Barcha savollaringizga javob beramiz <small> va hal qilishga
        yordam beramiz. Siz bilan hamkorlik qilganimizdan mamnunmiz!</small>
        </h3>`
        lang_time.innerHTML = `
        <div class="order-item__work-time">
            Ish vaqti: 09:00 - 18:00
        </div>
        <div class="order-item__work-value">
            (dam olish kunlari bundan mustasno)
        </div>
        `
        lang_footer.innerHTML = "Buxgalteriya xizmatlari"
        lang_callMe.innerHTML = "Bizga qo'ng'iroq qiling:"
        lang_callInput.innerHTML = "Yoki telefon raqamingizni qoldiring va biz sizga imkon qadar tezroq qo'ng'iroq qilamiz."
        lang_btn.innerHTML = "Menga qo'ng'iroq qiling"
        lang_privacy.innerHTML = `
            Tugmani bosish orqali siz shaxsiy ma'lumotlarni qayta ishlashga rozilik berasiz <a href="#" class="policy--js"> Privacy Policy</a>.
        `
        lang_address.innerHTML = `
            <i class="fa-solid fa-location-dot text-red-900 mr-2 text-[20px]"></i>
            Toshkent shahar, Yakkasaroy tumani, Rakatboshi mahallasi <br /> 
            O'rikzor ko'chasi 7-uy, Rakatboshi Biznes Center 202-xona`
        lang_socialMedia.innerHTML = "Ijtimoiy tarmoqlarimiz"
        lang_contactText.innerHTML = "Kontakt"

    } else {
        lang_about.innerHTML = data.ru[0].about
        lang_work.innerHTML = data.ru[0].work
        lang_aboutUS.innerHTML = data.ru[0].aboutUs
        lang_cardTitle1.innerHTML = data.ru[0].cardTitle1
        lang_card1.innerHTML = data.ru[0].cardDesc1
        lang_cardTitle2.innerHTML = data.ru[0].cardTitle2
        lang_card2.innerHTML = data.ru[0].cardDesc2
        lang_cardTitle3.innerHTML = data.ru[0].cardTitle3
        lang_card3.innerHTML = data.ru[0].cardDesc3
        lang_cardTitle4.innerHTML = data.ru[0].cardTitle4
        lang_card4.innerHTML = data.ru[0].cardDesc4
        lang_serviceTitle.innerHTML = data.ru[0].service
        lang_service1.innerHTML = data.ru[0].serviceDesc1
        lang_service2.innerHTML = data.ru[0].serviceDesc2
        lang_service3.innerHTML = data.ru[0].serviceDesc3
        lang_service4.innerHTML = data.ru[0].serviceDesc4
        lang_service5.innerHTML = data.ru[0].serviceDesc5
        lang_service6.innerHTML = data.ru[0].serviceDesc6
        lang_service7.innerHTML = data.ru[0].serviceDesc7
        lang_service8.innerHTML = data.ru[0].serviceDesc8
        lang_service9.innerHTML = data.ru[0].serviceDesc9
        lang_service10.innerHTML = data.ru[0].serviceDesc10
        lang_service11.innerHTML = data.ru[0].serviceDesc11
        lang_service12.innerHTML = data.ru[0].serviceDesc12
        lang_service13.innerHTML = data.ru[0].serviceDesc13
        lang_service14.innerHTML = data.ru[0].serviceDesc14
        lang_partner.innerHTML = data.ru[0].partner
        lang_contact.innerHTML = `
        <h3 class="order-item__title h2">
        Ответим на все ваши вопросы <small> и решим их
        мы поможем. Мы рады сотрудничеству с Вами!</small>
        </h3>`
        lang_time.innerHTML = `
        <div class="order-item__work-time">
            Рабочее время: 09:00 - 18:00
        </div>
        <div class="order-item__work-value">
            (кроме выходных)
        </div>
        `
        lang_footer.innerHTML = "Бухгалтерские услуги"
        lang_callMe.innerHTML = "Позвоните нам:"
        lang_callInput.innerHTML = "Или оставьте свой номер телефона, и мы перезвоним вам как можно скорее."
        lang_btn.innerHTML = "Позвоните мне"
        lang_privacy.innerHTML = `
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных <a href="#" class="policy--js">Политика конфиденциальности</a>.
        `
        lang_address.innerHTML = `
            <i class="fa-solid fa-location-dot text-red-900 mr-2 text-[20px]"></i>
            г.Ташкент, Яккасарайский район, микрорайон Ракатбоши <br />
            Улица Орикзор 7, Бизнес-центр Ракатбоши, кабинет 202`
        lang_socialMedia.innerHTML = "Наши социальные сети"
        lang_contactText.innerHTML = "Контакт"
    }
})