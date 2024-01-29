const autoCompleteJS = new autoComplete({
  placeHolder: "Lütfen anahtar kelime giriniz. Örn: Adana",
  data: {
    src: [
      "Adana",
      "Adıyaman",
      "Afyonkarahisar",
      "Ağrı",
      "Amasya",
      "Ankara",
      "Antalya",
      "Artvin",
      "Aydın",
      "Balıkesir",
      "Bilecik",
      "Bingöl",
      "Bitlis",
      "Bolu",
      "Burdur",
      "Bursa",
      "Çanakkale",
      "Çankırı",
      "Çorum",
      "Denizli",
      "Diyarbakır",
      "Edirne",
      "Elazığ",
      "Erzincan",
      "Erzurum",
      "Eskişehir",
      "Gaziantep",
      "Giresun",
      "Gümüşhane",
      "Hakkâri",
      "Hatay",
      "Isparta",
      "İçel (Mersin)",
      "İstanbul",
      "İzmir",
      "Kars",
      "Kastamonu",
      "Kayseri",
      "Kırklareli",
      "Kırşehir",
      "Kocaeli",
      "Konya",
      "Kütahya",
      "Malatya",
      "Manisa",
      "Kahramanmaraş",
      "Mardin",
      "Muğla",
      "Muş",
      "Nevşehir",
      "Niğde",
      "Ordu",
      "Rize",
      "Sakarya",
      "Samsun",
      "Siirt",
      "Sinop",
      "Sivas",
      "Tekirdağ",
      "Tokat",
      "Trabzon",
      "Tunceli",
      "Şanlıurfa",
      "Uşak",
      "Van",
      "Yozgat",
      "Zonguldak",
      "Aksaray",
      "Bayburt",
      "Karaman",
      "Kırıkkale",
      "Batman",
      "Şırnak",
      "Bartın",
      "Ardahan",
      "Iğdır",
      "Yalova",
      "Karabük",
      "Kilis",
      "Osmaniye",
      "Düzce",
    ],
    // Normalde kelime içindeki harfleri aratarak çalışıyor. Ama baş harflerden başlayarak öneri yapılması istendiği için aşağıdaki kodu ekledim.
    filter: (list) => {
      const results = list.filter((item) => {
        const inputValue = String(autoCompleteJS.input.value).toLocaleLowerCase(
          "tr-TR"
        );
        const itemValue = String(item.value).toLocaleLowerCase("tr-TR");

        if (itemValue.startsWith(inputValue)) {
          return item.value;
        }
      });

      return results;
    },
  },
  resultItem: {
    highlight: true,
  },
  diacritics: true,
  // Aşağıdaki kod yapılan seçim sonrası input alanına seçilen değerin yazılmasını sağlıyor.
  events: {
    input: {
      selection: (event) => {
        const selection = event.detail.selection.value;
        autoCompleteJS.input.value = selection;
      },
    },
  },
});
