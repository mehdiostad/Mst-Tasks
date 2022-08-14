function poetry(userPoet) {
  let poets = [
    "بگفتا چون به دست آری نشانش  که از ما بی‌نشان است آشیانش",
    "فرحبخشی در این ترکیب پیداست  که نغز شعر و مغز جان اجزاست",
    "الا ای آهوی وحشی کجایی  مرا با توست چندین آشنایی",
    "گفتا هر آنکه عیب کسی در قفا شمرد  هر چند دل فریبد و رو خوش کند عدوست",
    "پروین، نشان دوست درستی و راستی است  هرگز نیازموده، کسی را مدار دوست",
    "خاری بطعنه گفت چه حاصل ز بو و رنگ  خندید گل که هرچه مرا هست رنگ و بوست",
    "ما را زمانه رنجکش و تیره روز کرد  خرم کسیکه همچو تواش طالعی نکوست",
    "هرگز تو بار زحمت مردم نمیکشی  ما شانه می‌کشیم بهر جا که تار موست",
    "زانکس که نام خلق بگفتار زشت کشت  دوری گزین که از همه بدنامتر هموست",
    "در پیش روی خلق بما جا دهند از انک  ما را هر آنچه از بد و نیکست روبروست",
    "وقت سحر، به آینه‌ای گفت شانه‌ای کاوخ!  فلک چه کجرو و گیتی چه تند خوست",
  ];

  let firstWords = poets.map((poet) => poet[0].split(""));
  let lastUserWord = userPoet.split("").slice(-1);
  let death = userPoet.split("  ").pop();
  let lastDeathWord = death.split("").slice(-1);
  for (let i = 0; i < firstWords.length; i++) {
  if(lastUserWord[0] == firstWords[i]){
   return console.log(poets[i]);
  }else if(lastDeathWord[0] == firstWords[i]){
    console.log(poets[i]);
  }
}
return console.log("empty");
}
let userPoet = "پاسبان و حارس در می‌شود  گرچه بر وی جور و سختی می‌رود";
poetry(userPoet);
