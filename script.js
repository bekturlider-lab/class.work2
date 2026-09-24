// typing effect for lede
(function(){
  const text = "Жанр, где сверкающие технологии соседствуют с разрухой на улицах, а корпорации значат больше, чем государства.";
  const el = document.getElementById('lede');
  let i = 0;
  function type(){
    if(i <= text.length){
      el.innerHTML = text.slice(0,i) + '<span class="cursor"></span>';
      i++;
      setTimeout(type, 18);
    }
  }
  type();
})();

// scroll reveal
(function(){
  const items = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); } });
  }, {threshold:.15});
  items.forEach(i=>io.observe(i));
})();

// matrix rain
(function(){
  const canvas = document.getElementById('rain');
  const ctx = canvas.getContext('2d');
  let w, h, cols, drops;
  const chars = "01アイウエオカキクケコサシスセソタチツテト".split("");
  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    cols = Math.floor(w / 16);
    drops = new Array(cols).fill(1);
  }
  resize();
  window.addEventListener('resize', resize);
  function draw(){
    ctx.fillStyle = 'rgba(5,6,9,0.08)';
    ctx.fillRect(0,0,w,h);
    ctx.fillStyle = '#00f0ff';
    ctx.font = '14px monospace';
    for(let i=0;i<drops.length;i++){
      const text = chars[Math.floor(Math.random()*chars.length)];
      ctx.fillText(text, i*16, drops[i]*16);
      if(drops[i]*16 > h && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }
  setInterval(draw, 55);
})();

// terminal fact generator
(function(){
  const facts = [
    "Термин «киберпанк» соединяет кибернетику и панк-культуру — технологии и бунт против системы.",
    "Дождь на улицах ночного мегаполиса — фирменный визуальный приём жанра: неон красивее отражается в мокром асфальте.",
    "В киберпанке будущее редко выглядит чистым — оно перегружено рекламой, проводами и надписями на разных языках.",
    "Хакер в киберпанке — не просто программист, а фигура, близкая к уличному бойцу или контрабандисту.",
    "Импланты и протезы в жанре часто ставят вопрос: сколько тела можно заменить, оставаясь человеком.",
    "Мегакорпорации в киберпанке нередко влиятельнее правительств — у них своя армия, законы и территории."
  ];
  const out = document.getElementById('term-out');
  const btn = document.getElementById('term-btn');
  btn.addEventListener('click', ()=>{
    const f = facts[Math.floor(Math.random()*facts.length)];
    out.textContent = '$ random_fact.sh\n> ' + f;
  });
})();
