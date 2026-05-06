const teams = [
  // CONMEBOL (6)
  { rank: 1,  name: "Argentina",        conf: "CONMEBOL", pts: 1896, flag: "https://flagcdn.com/w80/ar.png" },
  { rank: 5,  name: "Brasil",           conf: "CONMEBOL", pts: 1782, flag: "https://flagcdn.com/w80/br.png", brasil: true },
  { rank: 6,  name: "Uruguai",          conf: "CONMEBOL", pts: 1744, flag: "https://flagcdn.com/w80/uy.png" },
  { rank: 13, name: "Colômbia",         conf: "CONMEBOL", pts: 1659, flag: "https://flagcdn.com/w80/co.png" },
  { rank: 20, name: "Venezuela",        conf: "CONMEBOL", pts: 1564, flag: "https://flagcdn.com/w80/ve.png" },
  { rank: 22, name: "Equador",          conf: "CONMEBOL", pts: 1547, flag: "https://flagcdn.com/w80/ec.png" },

  // UEFA (16)
  { rank: 2,  name: "França",           conf: "UEFA",     pts: 1843, flag: "https://flagcdn.com/w80/fr.png" },
  { rank: 3,  name: "Espanha",          conf: "UEFA",     pts: 1830, flag: "https://flagcdn.com/w80/es.png" },
  { rank: 4,  name: "Inglaterra",       conf: "UEFA",     pts: 1793, flag: "https://flagcdn.com/w80/gb-eng.png" },
  { rank: 7,  name: "Portugal",         conf: "UEFA",     pts: 1742, flag: "https://flagcdn.com/w80/pt.png" },
  { rank: 8,  name: "Bélgica",          conf: "UEFA",     pts: 1737, flag: "https://flagcdn.com/w80/be.png" },
  { rank: 9,  name: "Holanda",          conf: "UEFA",     pts: 1735, flag: "https://flagcdn.com/w80/nl.png" },
  { rank: 10, name: "Alemanha",         conf: "UEFA",     pts: 1720, flag: "https://flagcdn.com/w80/de.png" },
  { rank: 11, name: "Itália",           conf: "UEFA",     pts: 1710, flag: "https://flagcdn.com/w80/it.png" },
  { rank: 12, name: "Croácia",          conf: "UEFA",     pts: 1680, flag: "https://flagcdn.com/w80/hr.png" },
  { rank: 14, name: "Dinamarca",        conf: "UEFA",     pts: 1651, flag: "https://flagcdn.com/w80/dk.png" },
  { rank: 15, name: "Áustria",          conf: "UEFA",     pts: 1636, flag: "https://flagcdn.com/w80/at.png" },
  { rank: 17, name: "Suíça",            conf: "UEFA",     pts: 1620, flag: "https://flagcdn.com/w80/ch.png" },
  { rank: 19, name: "Turquia",          conf: "UEFA",     pts: 1568, flag: "https://flagcdn.com/w80/tr.png" },
  { rank: 21, name: "Escócia",          conf: "UEFA",     pts: 1560, flag: "https://flagcdn.com/w80/gb-sct.png" },
  { rank: 23, name: "Hungria",          conf: "UEFA",     pts: 1540, flag: "https://flagcdn.com/w80/hu.png" },
  { rank: 24, name: "Romênia",          conf: "UEFA",     pts: 1532, flag: "https://flagcdn.com/w80/ro.png" },
  { rank: 25, name: "Eslováquia",       conf: "UEFA",     pts: 1528, flag: "https://flagcdn.com/w80/sk.png" },
  { rank: 26, name: "Noruega",          conf: "UEFA",     pts: 1521, flag: "https://flagcdn.com/w80/no.png" },
  { rank: 27, name: "Ucrânia",          conf: "UEFA",     pts: 1514, flag: "https://flagcdn.com/w80/ua.png" },

  // CAF (9)
  { rank: 16, name: "Marrocos",         conf: "CAF",      pts: 1626, flag: "https://flagcdn.com/w80/ma.png" },
  { rank: 28, name: "Senegal",          conf: "CAF",      pts: 1508, flag: "https://flagcdn.com/w80/sn.png" },
  { rank: 29, name: "Egito",            conf: "CAF",      pts: 1499, flag: "https://flagcdn.com/w80/eg.png" },
  { rank: 30, name: "Nigéria",          conf: "CAF",      pts: 1491, flag: "https://flagcdn.com/w80/ng.png" },
  { rank: 31, name: "Camarões",         conf: "CAF",      pts: 1480, flag: "https://flagcdn.com/w80/cm.png" },
  { rank: 32, name: "Mali",             conf: "CAF",      pts: 1471, flag: "https://flagcdn.com/w80/ml.png" },
  { rank: 33, name: "Argélia",          conf: "CAF",      pts: 1463, flag: "https://flagcdn.com/w80/dz.png" },
  { rank: 34, name: "Costa do Marfim",  conf: "CAF",      pts: 1455, flag: "https://flagcdn.com/w80/ci.png" },
  { rank: 35, name: "África do Sul",    conf: "CAF",      pts: 1447, flag: "https://flagcdn.com/w80/za.png" },

  // CONCACAF (6)
  { rank: 18, name: "México",           conf: "CONCACAF", pts: 1608, flag: "https://flagcdn.com/w80/mx.png" },
  { rank: 36, name: "EUA",              conf: "CONCACAF", pts: 1440, flag: "https://flagcdn.com/w80/us.png" },
  { rank: 37, name: "Canadá",           conf: "CONCACAF", pts: 1432, flag: "https://flagcdn.com/w80/ca.png" },
  { rank: 38, name: "Jamaica",          conf: "CONCACAF", pts: 1424, flag: "https://flagcdn.com/w80/jm.png" },
  { rank: 39, name: "Honduras",         conf: "CONCACAF", pts: 1416, flag: "https://flagcdn.com/w80/hn.png" },
  { rank: 40, name: "Haiti",            conf: "CONCACAF", pts: 1408, flag: "https://flagcdn.com/w80/ht.png" },

  // AFC (8)
  { rank: 41, name: "Japão",            conf: "AFC",      pts: 1602, flag: "https://flagcdn.com/w80/jp.png" },
  { rank: 42, name: "Coreia do Sul",    conf: "AFC",      pts: 1588, flag: "https://flagcdn.com/w80/kr.png" },
  { rank: 43, name: "Irã",              conf: "AFC",      pts: 1574, flag: "https://flagcdn.com/w80/ir.png" },
  { rank: 44, name: "Austrália",        conf: "AFC",      pts: 1560, flag: "https://flagcdn.com/w80/au.png" },
  { rank: 45, name: "Arábia Saudita",   conf: "AFC",      pts: 1546, flag: "https://flagcdn.com/w80/sa.png" },
  { rank: 46, name: "Qatar",            conf: "AFC",      pts: 1532, flag: "https://flagcdn.com/w80/qa.png" },
  { rank: 47, name: "Uzbequistão",      conf: "AFC",      pts: 1518, flag: "https://flagcdn.com/w80/uz.png" },
  { rank: 48, name: "Jordânia",         conf: "AFC",      pts: 1390, flag: "https://flagcdn.com/w80/jo.png" },

  // OFC (1)
  { rank: 48, name: "Nova Zelândia",    conf: "OFC",      pts: 1250, flag: "https://flagcdn.com/w80/nz.png" }
];

// ── Elementos do DOM ──
const grid        = document.getElementById('teams-grid');
const searchInput = document.getElementById('search-input');
const filterBtns  = document.querySelectorAll('.filter-btn');
const countEl     = document.getElementById('count');

let activeFilter = 'all';

// ── Label de continente ──
function confLabel(conf) {
  const labels = {
    CONMEBOL: 'América do Sul',
    UEFA:     'Europa',
    CAF:      'África',
    CONCACAF: 'Américas N/C',
    AFC:      'Ásia',
    OFC:      'Oceania'
  };
  return labels[conf] || conf;
}

// ── Renderiza os cards ──
function buildCards(list) {
  grid.innerHTML = '';

  if (!list.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#444" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.35-4.35"/>
        </svg>
        <p>Nenhuma seleção encontrada.</p>
      </div>`;
    countEl.textContent = 0;
    return;
  }

  countEl.textContent = list.length;

  list.forEach(function(team, index) {
    var card = document.createElement('div');
    card.className = 'card rank-' + team.rank + (team.brasil ? ' brasil' : '');
    card.style.animationDelay = (index * 0.03) + 's';

    card.innerHTML =
      '<div class="rank-badge">#' + team.rank + '</div>' +
      '<img class="flag-img" src="' + team.flag + '" alt="Bandeira ' + team.name + '" loading="lazy" />' +
      '<div class="team-name">' + team.name + '</div>' +
      '<div class="continent-label">' + confLabel(team.conf) + '</div>' +
      '<div class="fifa-pts">' + team.pts.toLocaleString('pt-BR') + ' pts</div>';

    grid.appendChild(card);
  });
}

// ── Filtra e renderiza ──
function render() {
  var list = teams.slice();

  if (activeFilter !== 'all') {
    list = list.filter(function(t) { return t.conf === activeFilter; });
  }

  var query = searchInput.value.toLowerCase().trim();
  if (query) {
    list = list.filter(function(t) { return t.name.toLowerCase().indexOf(query) !== -1; });
  }

  buildCards(list);
}

// ── Eventos dos botões de filtro ──
filterBtns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    filterBtns.forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    activeFilter = btn.getAttribute('data-filter');
    render();
  });
});

// ── Evento da busca ──
searchInput.addEventListener('input', render);

// ── Renderização inicial ──
render();