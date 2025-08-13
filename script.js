const questions=[


{q:"Barqaror turizmda madaniy va tabiat merosini muhofaza qilish uchun qanday yondashuvlar qo‘llaniladi?",opts:["Jamoatchilikni jalb etish, ta’lim va monitoring, hamda qonuniy himoya tizimlarini kuchaytirish","Turistlarni oqimini cheklash, monitoring, hamda qonuniy himoya tizimlarini kuchaytirish","Yirik turistik infratuzilma qurilishini rag‘batlantirish","Madaniy merosni faqat muzeylarda saqlash va jamoatchilikni keng jalb etish"],a:"A"},
{q:"Barqaror turizmda sayyohlarning ekologik xulq-atvorini qanday shakllantirish mumkin?",opts:["Axloqiy ta’lim berish, axborot kampaniyalari va ijtimoiy normalarni rivojlantirish orqali","Qonun-qoidalar bilan tartibga keltirish orqali","Ma’muriy jazolarni ko‘paytirish orqali","Ekologik xulq-atvorni keng targ‘ib qilish orqali"],a:"A"},
{q:"Barqaror turizmda iqtisodiy barqarorlik qanday ta’minlanadi?",opts:["Mahalliy iqtisodiyotga doimiy daromad keltiradigan, turizm manbalarini oqilona boshqaradigan tizim orqali","Uzoq muddatli strategik foyda olish uchun turistik destinatsiyalar orqali","Xalqaro investorlar manfaatlarini ko‘zlash va ularni jalb qilish orqali","Turizm sohasiga davlat tomonidan ajratiladigan subsidiyalariga tayanish orqali"],a:"A"},
{q:"Ekoturizmda sayyohlar uchun qanday xizmatlar taqdim etilishi kerak?",opts:["Tabiat va madaniyatni chuqur anglashga yordam beruvchi, ekologik va madaniy jihatdan mas’uliyatli turistik xizmatlar","Tabiat qo‘ynidagi qulay dam olish joylari va madaniy jihatdan mas’uliyatli turistik xizmatlar","Turli ko‘lamdagi ko‘ngilochar xizmatlar va madaniy jihatdan mas’uliyatli turistik xizmatlar","Ekologik turizm xizmatlaridan iborat komplekslar majmuasi"],a:"A"},
{q:"Barqaror turizmda turizm infratuzilmasini qurishda qaysi omil asosiy hisoblanadi?",opts:["Atrof-muhitga minimal zarar yetkazish, energiya va suv resurslarini tejash","Arzon qurilish materiallaridan foydalanish, energiya va suv resurslarini tejash","Turistlar uchun qulayliklarni oshirish va energiya, suv resurslarini tejash","Turistlar oqimini ko‘paytirish uchun barcha vositalardan foydalanib, qulayliklarni oshirish"],a:"A"},
{q:"Barqaror turizmda mahalliy hamjamiyatlarning qanday hissasi muhim hisoblanadi?",opts:["Ularning fikrlari muhim emasligi sababli e’tiborga olinmaydi","Turizm boshqaruvida ularning faol ishtirokini ta’minlash","Mahalliy resurslarni tashqi investorlar ixtiyoriga berish","Mehmonxonalarni kengaytirish orqali ularni jalb qilish"],a:"B"},
{q:"Atrof-muhitni boshqarish tizimlari (EMS) nima uchun butun dunyoda qo‘llab-quvvatlanadi?",opts:["Har qanday narx-navo va mavsumiylikda foyda olish uchun","Atmosferaga chiqariladigan zararli moddalar va resurs sarfini kamaytirish uchun","Ruxsatsiz joylashtiruv vositalari bo‘yicha qurilishlarga barham berish uchun","Suv sarfini kamaytirish maqsadida"],a:"B"},
{q:"Uch tomonlama natija (Triple Bottom Line – TBL) modeliga nimalar kiradi?",opts:["Foyda, marketing, brend yaratish","Iqtisodiy samaradorlik, ijtimoiy barqarorlik va ekologik muvozanat","Turistlar, tur operatorlar, yo‘l xaritalari","Faqat ekologiya va madaniy qadriyatlar"],a:"B"},
{q:"Yashil iqtisodiyot (green economy) deganda nima nazarda tutiladi?",opts:["Ekologiyani hisobga olmasdan iqtisodiy o‘sishni ta’minlash","Iqtisodiyot, ekologik barqarorlik va ijtimoiy tenglik uyg‘unligi","Faqat yangilanadigan energiya manbalaridan foydalanish","Yashil turizmni rivojlantirish maqsadida infratuzilma qurilishini kuchaytirish"],a:"B"},
{q:"COVID-19 pandemiyasi turizmda barqarorlikka qanday ta’sir ko‘rsatdi?",opts:["Haddan tashqari turizmniga salbiy ta’sir qildi","Ommaviy turizmni to‘xtatdi va barqarorlik asosida qayta boshlash uchun imkon yaratdi","Joylashtiruv vositalarining hajmini keskin oshishiga sabab bo‘ldi","Ekologik tashabbuslar uchun ajratilgan mablag‘larni kamaytirdi"],a:"B"},



]

let idx = 0;
let correct = 0;
let wrong = 0;
const qnumEl = document.getElementById('qnum');
const qtextEl = document.getElementById('qtext');
const optionsEl = document.getElementById('options');
const form = document.getElementById('quizForm');
const typed = document.getElementById('typedAnswer');
const progress = document.getElementById('progress');
const resultBox = document.getElementById('resultBox');
const submitBtn = document.getElementById('submitBtn');

function renderQuestion() {
  if (idx >= questions.length) return;
  const q = questions[idx];
  qnumEl.textContent = `Savol ${idx + 1} / ${questions.length}`;
  qtextEl.textContent = q.q;
  optionsEl.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.opts.forEach((opt, i) => {
    const id = `opt${i}`;
    const div = document.createElement('label');
    div.className = 'option';
    div.innerHTML = `<input name='choice' type='radio' value='${letters[i]}' id='${id}' /><span>${letters[i]}. ${opt}</span>`;
    optionsEl.appendChild(div);
  });
  progress.textContent = `${idx + 1} / ${questions.length}`;
  typed.value = '';
}

function showResults() {
  resultBox.style.display = 'block';
  resultBox.innerHTML = `<strong>Test yakunlandi</strong><div class='small' style='margin-top:8px'>To'g'ri javoblar: ${correct}<br> Noto'g'ri javoblar: ${wrong}<br> Umumiy: ${questions.length}</div>`;
  submitBtn.disabled = true;
  form.style.display = 'none';
  progress.textContent = `${questions.length} / ${questions.length}`;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const chosenRadio = document.querySelector("input[name='choice']:checked");
  let answer = chosenRadio ? chosenRadio.value : typed.value.trim().toUpperCase();
  if (!answer || !['A', 'B', 'C', 'D'].includes(answer)) {
    alert('Iltimos A, B, C yoki D variantidan birini tanlang yoki yozing');
    return;
  }
  const correctAnswer = questions[idx].a;
  if (answer === correctAnswer) correct++; else wrong++;
  idx++;

  if (idx >= questions.length) {
    showResults();
  } else {
    renderQuestion();
  }
});

typed.addEventListener('input', e => {
  const v = e.target.value.trim().toUpperCase();
  if (['A', 'B', 'C', 'D'].includes(v)) {
    const radio = document.querySelector(`input[value='${v}']`);
    if (radio) radio.checked = true;
  }
});

optionsEl.addEventListener('click', e => {
  const input = e.target.closest('label')?.querySelector('input');
  if (input) {
    typed.value = input.value;
  }
});

renderQuestion();
