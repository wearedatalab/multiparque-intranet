/* ============================================================
   Multiparque Intranet — Núcleo de la aplicación (demo)
   Sesión · shell (topbar + nav móvil) · buscador global · UI
   ============================================================ */
(function(){
  'use strict';

  /* ---------- Fecha "hoy" de la demo ---------- */
  MP.TODAY = new Date(2026, 6, 23); // 23 de julio de 2026

  /* ---------- Sesión ---------- */
  MP.getSession = function(){
    try{ return JSON.parse(localStorage.getItem('mp_session')); }catch(e){ return null; }
  };
  MP.setSession = function(s){ localStorage.setItem('mp_session', JSON.stringify(s)); };
  MP.clearSession = function(){ localStorage.removeItem('mp_session'); };
  MP.user = function(id){ return MP.USERS.find(u => u.id === id); };
  MP.me = function(){
    const s = MP.getSession();
    return s ? MP.user(s.userId) : null;
  };

  MP.login = function(userId){
    MP.setSession({ userId: userId, impersonatedBy: null });
    location.href = 'dashboard.html';
  };
  MP.logout = function(){
    MP.clearSession();
    location.href = 'index.html';
  };
  MP.impersonate = function(targetId){
    const s = MP.getSession();
    MP.setSession({ userId: targetId, impersonatedBy: s.impersonatedBy || s.userId });
    location.href = 'dashboard.html';
  };
  MP.stopImpersonation = function(){
    const s = MP.getSession();
    if(s && s.impersonatedBy){
      MP.setSession({ userId: s.impersonatedBy, impersonatedBy: null });
      location.href = 'admin.html';
    }
  };

  /* ---------- Helpers ---------- */
  const MESES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  const MESES_AB = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
  const DIAS = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];

  MP.fmtFecha = function(iso, corta){
    const [y,m,d] = iso.split('-').map(Number);
    if(corta) return d + ' ' + MESES_AB[m-1] + '.';
    return d + ' de ' + MESES[m-1] + ' de ' + y;
  };
  MP.fmtDia = function(iso){
    const [y,m,d] = iso.split('-').map(Number);
    return DIAS[new Date(y, m-1, d).getDay()];
  };
  MP.mesDe = function(iso){
    const m = Number(iso.split('-')[1]);
    return MESES[m-1];
  };
  MP.diaNum = function(iso){ return Number(iso.split('-')[2]); };
  MP.mesAb = function(iso){ return MES_AB(iso); };
  function MES_AB(iso){ return MESES_AB[Number(iso.split('-')[1])-1]; }
  MP.mesAbrev = MES_AB;
  MP.esc = function(s){ const d = document.createElement('div'); d.textContent = s == null ? '' : String(s); return d.innerHTML; };
  MP.norm = function(s){ return (s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,''); };

  MP.iniciales = function(nombre){
    return nombre.split(' ').filter(Boolean).slice(0,2).map(p => p[0]).join('').toUpperCase();
  };

  /* Íconos SVG inline */
  MP.icon = function(name, size){
    size = size || 20;
    const paths = {
      home:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h5v-6h4v6h5V9.5"/>',
      users:'<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.6-3.6 3.2-5.5 6.5-5.5s5.9 1.9 6.5 5.5"/><circle cx="17" cy="9" r="2.6"/><path d="M16.4 14.6c2.6.3 4.5 1.9 5.1 4.9"/>',
      doc:'<path d="M6 2.5h8l4.5 4.5V21a.9.9 0 0 1-1 .9H6a.9.9 0 0 1-1-.9V3.4a.9.9 0 0 1 1-.9Z"/><path d="M14 2.5V7h4.5"/><path d="M9 12h6M9 16h6"/>',
      megaphone:'<path d="M3 11v3a1 1 0 0 0 1 1h2l3 5h2v-5"/><path d="M11 15V9l9-5v16l-9-5Z"/>',
      calendar:'<rect x="3.5" y="5" width="17" height="16" rx="2.5"/><path d="M3.5 10h17M8 2.8V6.5M16 2.8V6.5"/>',
      search:'<circle cx="11" cy="11" r="7"/><path d="m20.5 20.5-4.4-4.4"/>',
      gear:'<circle cx="12" cy="12" r="3.2"/><path d="M12 2.8v2.6M12 18.6v2.6M2.8 12h2.6M18.6 12h2.6M5.5 5.5l1.9 1.9M16.6 16.6l1.9 1.9M18.5 5.5l-1.9 1.9M7.4 16.6l-1.9 1.9"/>',
      chart:'<path d="M4 20V10M10 20V4M16 20v-7M21 20H3"/>',
      heart:'<path d="M12 20.5C7 16.5 3.5 13.3 3.5 9.6 3.5 7 5.5 5 8 5c1.6 0 3.1.8 4 2.1C12.9 5.8 14.4 5 16 5c2.5 0 4.5 2 4.5 4.6 0 3.7-3.5 6.9-8.5 10.9Z"/>',
      cake:'<path d="M4 21h16M5 21v-7h14v7M7 14v-3M12 14v-3M17 14v-3M7 8.5c-.8-.7-.8-1.8 0-2.5.7-.7.8-1.4.3-2M12 8.5c-.8-.7-.8-1.8 0-2.5.7-.7.8-1.4.3-2M17 8.5c-.8-.7-.8-1.8 0-2.5.7-.7.8-1.4.3-2"/>',
      pin:'<path d="M12 21s-6.5-5.4-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.6 12 21 12 21Z"/><circle cx="12" cy="10.3" r="2.3"/>',
      mail:'<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7 8 6 8-6"/>',
      phone:'<path d="M6 3.5h3l1.7 4.3-2.1 1.6a12 12 0 0 0 5.9 5.9l1.6-2.1L20.5 15v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4 5.7 2 2 0 0 1 6 3.5Z"/>',
      shield:'<path d="M12 2.8 4.5 5.6v6.1c0 4.6 3.2 7.7 7.5 9.5 4.3-1.8 7.5-4.9 7.5-9.5V5.6L12 2.8Z"/><path d="m8.8 12 2.2 2.2 4.2-4.4"/>',
      book:'<path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17.5H6.5A2.5 2.5 0 0 0 4 22V4.5Z"/><path d="M20 19.5H6.5A2.5 2.5 0 0 1 4 17"/>',
      alert:'<path d="M12 3 2.5 20h19L12 3Z"/><path d="M12 10v4.5M12 17.4v.2"/>',
      palette:'<path d="M12 3a9 9 0 0 0 0 18c1.5 0 2-.9 2-2 0-1.2-.6-1.6-.6-2.5 0-1.1.9-2 2.1-2H18a4 4 0 0 0 4-4c0-4.5-4.5-7.5-10-7.5Z"/><circle cx="7.5" cy="11" r="1.1"/><circle cx="10.5" cy="7" r="1.1"/><circle cx="15" cy="7.5" r="1.1"/>',
      clock:'<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5.2l3.4 2"/>',
      download:'<path d="M12 3.5V15m0 0 4-4m-4 4-4-4"/><path d="M4 17v2.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V17"/>',
      eye:'<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="2.8"/>',
      x:'<path d="m6 6 12 12M18 6 6 18"/>',
      login:'<path d="M14 3.5h4.5a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H14"/><path d="M10 8l4 4-4 4M14 12H3.5"/>',
      history:'<path d="M4 5v4h4"/><path d="M4.6 9A8.5 8.5 0 1 1 3.5 12"/><path d="M12 8v4.2l3 1.8"/>'
    };
    return '<svg width="'+size+'" height="'+size+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">'+(paths[name]||paths.doc)+'</svg>';
  };

  MP.avatarHtml = function(u, cls){
    if(!u) return '';
    return '<img class="avatar '+(cls||'avatar--sm')+'" src="'+u.foto+'" alt="'+MP.esc(u.nombre)+'" onerror="this.outerHTML=MP.avatarFallback(\''+u.id+'\',\''+(cls||'avatar--sm')+'\')">';
  };
  MP.avatarFallback = function(id, cls){
    const u = MP.user(id);
    return '<span class="avatar '+cls+'" style="display:grid;place-items:center;background:var(--navy);color:var(--lime);font-weight:800;font-size:.8em">'+MP.iniciales(u ? u.nombre : '?')+'</span>';
  };

  /* ---------- Toast ---------- */
  MP.toast = function(msg){
    let t = document.querySelector('.toast');
    if(!t){
      t = document.createElement('div');
      t.className = 'toast';
      document.body.appendChild(t);
    }
    t.innerHTML = '<span class="tick">✓</span> ' + msg;
    requestAnimationFrame(() => t.classList.add('is-on'));
    clearTimeout(t._h);
    t._h = setTimeout(() => t.classList.remove('is-on'), 2800);
  };

  /* ---------- Permisos del gestor documental ----------
     La visibilidad de cada documento se aplica de verdad: filtra el listado, el
     dashboard y el buscador global, para que «Ingresar como» muestre a cada rol
     exactamente lo que le corresponde. */
  MP.puedeVer = function(doc, user){
    user = user || MP.me();
    if(!user) return false;
    if(['direccion','admin'].includes(user.rol)) return true;   // ven todo
    const v = doc.visibilidad;
    if(v === 'Todo el parque') return true;
    if(v === 'Jefes de área') return ['jefe','talento','comunicaciones'].includes(user.rol);
    if(v.startsWith('Área: ')) return user.area === v.slice(6);
    return false;
  };
  MP.docsVisibles = function(user){
    return MP.DOCS.filter(d => MP.puedeVer(d, user));
  };

  /* ---------- Copiar al portapapeles ---------- */
  MP.copiar = function(texto){
    const fin = () => MP.toast('Copiado: ' + texto);
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(texto).then(fin).catch(fin);
    } else {
      const t = document.createElement('textarea');
      t.value = texto; document.body.appendChild(t); t.select();
      try{ document.execCommand('copy'); }catch(e){}
      document.body.removeChild(t); fin();
    }
  };

  /* ---------- Modal genérico ---------- */
  MP.openModal = function(html, imgSrc){
    let m = document.getElementById('mp-modal');
    if(!m){
      m = document.createElement('div');
      m.id = 'mp-modal';
      m.className = 'modal';
      m.addEventListener('click', e => { if(e.target === m) MP.closeModal(); });
      document.body.appendChild(m);
    }
    m.innerHTML = '<div class="modal__panel">' +
      '<button class="modal__close" onclick="MP.closeModal()" aria-label="Cerrar">✕</button>' +
      (imgSrc ? '<img class="modal__img" src="'+imgSrc+'" alt="">' : '') +
      '<div class="modal__body">' + html + '</div></div>';
    requestAnimationFrame(() => m.classList.add('is-open'));
    document.body.style.overflow = 'hidden';
  };
  MP.closeModal = function(){
    const m = document.getElementById('mp-modal');
    if(m){ m.classList.remove('is-open'); document.body.style.overflow = ''; }
  };
  document.addEventListener('keydown', e => {
    if(e.key === 'Escape'){ MP.closeModal(); MP.closeSearch(); }
  });

  /* ---------- Descarga .ics ---------- */
  MP.downloadICS = function(evId){
    const ev = MP.EVENTS.find(x => x.id === evId);
    if(!ev) return;
    const dt = ev.fecha.replace(/-/g,'');
    const ics = ['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//Multiparque//Intranet//ES','BEGIN:VEVENT',
      'UID:'+ev.id+'@intranet.multiparque.co','DTSTART;VALUE=DATE:'+dt,
      'SUMMARY:'+ev.titulo.replace(/,/g,'\\,'),'LOCATION:'+(ev.lugar||'').replace(/,/g,'\\,'),
      'DESCRIPTION:'+(ev.desc||'').replace(/,/g,'\\,'),'END:VEVENT','END:VCALENDAR'].join('\r\n');
    const a = document.createElement('a');
    a.href = 'data:text/calendar;charset=utf-8,' + encodeURIComponent(ics);
    a.download = ev.id + '-multiparque.ics';
    a.click();
    MP.toast('Evento guardado en tu calendario');
  };

  /* ============================================================
     SHELL: topbar + nav móvil + buscador global
     ============================================================ */
  MP.renderShell = function(activePage){
    const me = MP.me();
    if(!me){ location.href = 'index.html'; return; }
    const s = MP.getSession();
    const isAdmin = me.rol === 'admin' || me.rol === 'direccion';

    const links = [
      { id:'dashboard',  href:'dashboard.html',  label:'Inicio',      icon:'home' },
      { id:'directorio', href:'directorio.html', label:'Directorio',  icon:'users' },
      { id:'documentos', href:'documentos.html', label:'Documentos',  icon:'doc' },
      { id:'noticias',   href:'noticias.html',   label:'Noticias',    icon:'megaphone' },
      { id:'calendario', href:'calendario.html', label:'Calendario',  icon:'calendar' }
    ];
    if(isAdmin) links.push({ id:'admin', href:'admin.html', label:'Administración', icon:'gear' });

    const nav = links.map(l =>
      '<a href="'+l.href+'" class="'+(l.id===activePage?'is-active':'')+'">'+l.label+'</a>'
    ).join('');

    let banner = '';
    if(s.impersonatedBy){
      const admin = MP.user(s.impersonatedBy);
      banner = '<div class="impersonation">' + MP.icon('eye',16) +
        ' Estás viendo la intranet como <u>' + MP.esc(me.nombre) + '</u> (sesión de ' + MP.esc(admin.nombre) + ')' +
        ' <button onclick="MP.stopImpersonation()">Volver a mi sesión</button></div>';
    }

    const header = document.createElement('div');
    header.innerHTML =
      '<header class="topbar"><div class="topbar__inner">' +
        '<a class="topbar__logo" href="dashboard.html"><img src="assets/logo.png" alt="Multiparque"></a>' +
        '<nav class="topbar__nav">' + nav + '</nav>' +
        '<div class="topbar__spacer"></div>' +
        '<button class="topbar__search" onclick="MP.openSearch()">' + MP.icon('search',17) +
          '<span class="label">Buscar en la intranet…</span><kbd>Ctrl K</kbd></button>' +
        '<div class="topbar__user">' +
          '<button onclick="MP.toggleUserMenu(event)">' + MP.avatarHtml(me,'avatar--sm') +
            '<span class="topbar__userinfo"><strong>' + MP.esc(me.nombre.split(' ')[0]) + '</strong>' +
            '<span>' + MP.ROL_NOMBRE[me.rol] + '</span></span></button>' +
          '<div class="usermenu hidden" id="usermenu">' +
            '<a href="directorio.html?yo=1">' + MP.icon('users',17) + ' Mi perfil</a>' +
            (isAdmin ? '<a href="admin.html">' + MP.icon('gear',17) + ' Administración</a>' : '') +
            '<hr><button onclick="MP.logout()">' + MP.icon('login',17) + ' Cerrar sesión</button>' +
          '</div>' +
        '</div>' +
      '</div></header>' + banner;
    document.body.prepend(header);

    /* Nav móvil inferior (experiencia tipo app / PWA) */
    const bn = document.createElement('nav');
    bn.className = 'bottomnav';
    bn.innerHTML = links.slice(0, isAdmin ? 6 : 5).map(l =>
      '<a href="'+l.href+'" class="'+(l.id===activePage?'is-active':'')+'">'+MP.icon(l.icon,22)+l.label.split(' ')[0]+'</a>'
    ).join('');
    document.body.appendChild(bn);

    /* Overlay de búsqueda */
    const lay = document.createElement('div');
    lay.className = 'searchlay';
    lay.id = 'searchlay';
    lay.innerHTML =
      '<div class="searchlay__panel">' +
        '<div class="searchlay__input">' + MP.icon('search',22) +
          '<input id="gsearch" type="text" placeholder="Personas, documentos, noticias, eventos…" autocomplete="off">' +
          '<kbd>ESC</kbd>' +
          '<button class="searchlay__close" onclick="MP.closeSearch()" aria-label="Cerrar búsqueda">' + MP.icon('x',20) + '</button>' +
        '</div>' +
        '<div class="searchlay__chips"><div class="chips" id="gsearch-chips">' +
          ['Todo','Personas','Documentos','Noticias','Eventos'].map((c,i) =>
            '<button class="chip'+(i===0?' is-active':'')+'" data-t="'+c+'">'+c+'</button>').join('') +
        '</div></div>' +
        '<div class="searchlay__results" id="gsearch-results"></div>' +
      '</div>';
    lay.addEventListener('click', e => { if(e.target === lay) MP.closeSearch(); });
    document.body.appendChild(lay);

    document.getElementById('gsearch').addEventListener('input', MP.runSearch);
    document.getElementById('gsearch-chips').addEventListener('click', e => {
      const b = e.target.closest('.chip'); if(!b) return;
      document.querySelectorAll('#gsearch-chips .chip').forEach(c => c.classList.remove('is-active'));
      b.classList.add('is-active');
      MP.runSearch();
    });
    document.addEventListener('keydown', e => {
      if((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k'){ e.preventDefault(); MP.openSearch(); }
    });
    document.addEventListener('click', e => {
      const um = document.getElementById('usermenu');
      if(um && !um.classList.contains('hidden') && !e.target.closest('.topbar__user')) um.classList.add('hidden');
    });
  };

  MP.toggleUserMenu = function(e){
    e.stopPropagation();
    document.getElementById('usermenu').classList.toggle('hidden');
  };

  MP.openSearch = function(){
    const l = document.getElementById('searchlay');
    if(!l) return;
    l.classList.add('is-open');
    const inp = document.getElementById('gsearch');
    inp.value = ''; MP.runSearch();
    setTimeout(() => inp.focus(), 80);
  };
  MP.closeSearch = function(){
    const l = document.getElementById('searchlay');
    if(l) l.classList.remove('is-open');
  };

  /* ---------- Búsqueda global ---------- */
  function hl(text, q){
    if(!q) return MP.esc(text);
    const nt = MP.norm(text), nq = MP.norm(q);
    const i = nt.indexOf(nq);
    if(i < 0) return MP.esc(text);
    return MP.esc(text.slice(0,i)) + '<mark>' + MP.esc(text.slice(i, i+q.length)) + '</mark>' + MP.esc(text.slice(i+q.length));
  }

  MP.runSearch = function(){
    const q = document.getElementById('gsearch').value.trim();
    const tipo = document.querySelector('#gsearch-chips .chip.is-active').dataset.t;
    const out = document.getElementById('gsearch-results');
    const nq = MP.norm(q);
    const has = s => MP.norm(s).includes(nq);

    if(!q){
      out.innerHTML = '<div class="sr-empty">' +
        '<div style="font-size:2rem">🔎</div><b>Un solo buscador para todo el parque</b>' +
        '<span class="small">Escribe un nombre, una habilidad, el título de un documento<br>o incluso una frase de su contenido.</span></div>';
      return;
    }

    let html = '', total = 0;

    if(tipo === 'Todo' || tipo === 'Personas'){
      const r = MP.USERS.filter(u => has(u.nombre) || has(u.cargo) || has(u.area) || has(u.zona) || u.habilidades.some(has));
      if(r.length){
        html += '<div class="sr-group">Personas · ' + r.length + '</div>' + r.slice(0,5).map(u =>
          '<button class="sr-item" onclick="location.href=\'directorio.html?p=' + u.id + '\'">' +
          MP.avatarHtml(u,'avatar--sm') +
          '<div><strong>' + hl(u.nombre, q) + '</strong><span>' + MP.esc(u.cargo) + ' · ' + MP.esc(u.area) + '</span></div></button>').join('');
        total += r.length;
      }
    }
    if(tipo === 'Todo' || tipo === 'Documentos'){
      const r = MP.docsVisibles().filter(d => has(d.titulo) || has(d.contenido) || has(d.autor));
      if(r.length){
        html += '<div class="sr-group">Documentos · ' + r.length + '</div>' + r.slice(0,5).map(d =>
          '<button class="sr-item" onclick="location.href=\'documentos.html?d=' + d.id + '\'">' +
          '<span class="sr-item__icon">' + MP.icon('doc',19) + '</span>' +
          '<div><strong>' + hl(d.titulo, q) + '</strong><span>' + d.version + ' · ' + MP.esc(d.visibilidad) +
          (has(d.contenido) && !has(d.titulo) ? ' · coincide con el contenido' : '') + '</span></div></button>').join('');
        total += r.length;
      }
    }
    if(tipo === 'Todo' || tipo === 'Noticias'){
      const r = MP.NEWS.filter(n => has(n.titulo) || has(n.resumen) || has(n.cuerpo) || has(n.categoria));
      if(r.length){
        html += '<div class="sr-group">Noticias · ' + r.length + '</div>' + r.slice(0,5).map(n =>
          '<button class="sr-item" onclick="location.href=\'noticias.html?n=' + n.id + '\'">' +
          '<span class="sr-item__icon">' + MP.icon('megaphone',19) + '</span>' +
          '<div><strong>' + hl(n.titulo, q) + '</strong><span>' + MP.esc(n.categoria) + ' · ' + MP.fmtFecha(n.fecha) + '</span></div></button>').join('');
        total += r.length;
      }
    }
    if(tipo === 'Todo' || tipo === 'Eventos'){
      const r = MP.EVENTS.filter(ev => has(ev.titulo) || has(ev.lugar||'') || has(ev.desc||''));
      if(r.length){
        html += '<div class="sr-group">Eventos · ' + r.length + '</div>' + r.slice(0,5).map(ev =>
          '<button class="sr-item" onclick="location.href=\'calendario.html?e=' + ev.id + '\'">' +
          '<span class="sr-item__icon">' + MP.icon('calendar',19) + '</span>' +
          '<div><strong>' + hl(ev.titulo, q) + '</strong><span>' + MP.fmtFecha(ev.fecha) + ' · ' + MP.esc(ev.hora) + '</span></div></button>').join('');
        total += r.length;
      }
    }

    out.innerHTML = total ? html :
      '<div class="sr-empty"><div style="font-size:2rem">🙈</div><b>Sin resultados para «' + MP.esc(q) + '»</b>' +
      '<span class="small">Prueba con otra palabra o revisa la ortografía.</span></div>';
  };

  /* ---------- Modal de perfil de persona (compartido) ---------- */
  MP.openPerson = function(id){
    const u = MP.user(id);
    if(!u) return;
    const a = MP.AREAS[u.area] || { color:'#262161', txt:'#fff' };
    MP.openModal(
      '<div style="text-align:center">' +
        MP.avatarHtml(u,'avatar--lg') +
        '<h2 style="margin-top:12px">' + MP.esc(u.nombre) + '</h2>' +
        '<p class="muted">' + MP.esc(u.cargo) + '</p>' +
        '<div style="display:flex;gap:8px;justify-content:center;margin-top:10px;flex-wrap:wrap">' +
          '<span class="catbadge" style="background:' + a.color + ';color:' + a.txt + '">' + MP.esc(u.area) + '</span>' +
          '<span class="badge badge--soft">' + MP.icon('pin',12) + ' ' + MP.esc(u.zona) + '</span>' +
        '</div>' +
      '</div>' +
      '<div class="card" style="box-shadow:none;background:var(--bg);margin-top:20px;padding:18px">' +
        '<div style="display:grid;gap:10px;font-size:.92rem">' +
          '<div style="display:flex;gap:10px;align-items:center">' + MP.icon('mail',17) + ' ' + MP.esc(u.correo) + '</div>' +
          '<div style="display:flex;gap:10px;align-items:center">' + MP.icon('phone',17) + ' ' + MP.esc(u.cel) + (u.ext !== '—' ? ' · Ext. ' + u.ext : '') + '</div>' +
          '<div style="display:flex;gap:10px;align-items:center">' + MP.icon('clock',17) + ' En Multiparque desde ' + u.ingreso.split('-')[0] + '</div>' +
        '</div>' +
      '</div>' +
      '<h4 style="margin:18px 0 10px">Habilidades y conocimientos</h4>' +
      '<div class="chips">' + u.habilidades.map(h =>
        '<span class="chip is-active" style="cursor:default">' + MP.esc(h) + '</span>').join('') + '</div>' +
      '<div style="display:flex;gap:10px;margin-top:22px;flex-wrap:wrap">' +
        '<a class="btn btn--navy btn--sm" href="mailto:' + u.correo + '">' + MP.icon('mail',15) + ' Escribir correo</a>' +
        '<button class="btn btn--ghost btn--sm" onclick="MP.copiar(\'' + u.correo + '\')">' + MP.icon('doc',15) + ' Copiar correo</button>' +
      '</div>'
    );
  };

  /* ---------- Modal de documento (compartido) ---------- */
  MP.openDoc = function(id){
    const d = MP.DOCS.find(x => x.id === id);
    if(!d) return;
    if(!MP.puedeVer(d)){
      MP.toast('Este documento está restringido para tu rol');
      return;
    }
    const carpeta = MP.CARPETAS.find(c => c.id === d.carpeta);
    const hist = [{ v:d.version, fecha:d.fecha, autor:d.autor, actual:true }].concat(d.historial);
    MP.openModal(
      '<div style="display:flex;gap:16px;align-items:center">' +
        '<span class="docicon docicon--' + d.tipo + '" style="width:56px;height:56px;font-size:.78rem">' + d.tipo.toUpperCase() + '</span>' +
        '<div><h2 style="font-size:1.25rem;line-height:1.25">' + MP.esc(d.titulo) + '</h2>' +
        '<p class="muted small">' + MP.esc(carpeta.nombre) + ' · ' + d.tamano + ' · ' + d.descargas + ' descargas</p></div>' +
      '</div>' +
      '<div style="display:flex;gap:8px;margin:16px 0;flex-wrap:wrap">' +
        '<span class="vbadge">Versión vigente: ' + d.version + '</span>' +
        '<span class="badge badge--soft">' + MP.icon('eye',12) + ' ' + MP.esc(d.visibilidad) + '</span>' +
      '</div>' +
      '<div style="background:var(--bg);border-radius:16px;padding:22px;text-align:center;border:1.5px dashed var(--line)">' +
        '<div style="width:120px;height:150px;background:#fff;border-radius:10px;box-shadow:var(--shadow);margin:0 auto 12px;padding:14px;text-align:left">' +
          '<div style="height:8px;width:60%;background:var(--navy);border-radius:99px;margin-bottom:8px"></div>' +
          [90,75,85,60,80,70].map(w => '<div style="height:5px;width:'+w+'%;background:var(--line);border-radius:99px;margin-bottom:6px"></div>').join('') +
        '</div>' +
        '<p class="small muted">Vista previa disponible desde cualquier dispositivo, incluido el celular.</p>' +
        '<div style="display:flex;gap:10px;justify-content:center;margin-top:14px;flex-wrap:wrap">' +
          '<button class="btn btn--lime btn--sm" onclick="MP.toast(\'Descarga iniciada · ' + d.tamano + '\')">' + MP.icon('download',15) + ' Descargar</button>' +
          '<button class="btn btn--ghost btn--sm" onclick="MP.toast(\'Abriendo vista previa…\')">' + MP.icon('eye',15) + ' Vista previa</button>' +
        '</div>' +
      '</div>' +
      '<h4 style="margin:20px 0 10px">' + MP.icon('history',16) + ' Historial de versiones</h4>' +
      hist.map(h =>
        '<div style="display:flex;gap:12px;align-items:center;padding:9px 0;border-top:1px solid var(--line);font-size:.88rem">' +
          '<span class="vbadge" style="' + (h.actual ? '' : 'background:var(--line);color:var(--muted)') + '">' + h.v + '</span>' +
          '<span style="flex:1">' + MP.esc(h.autor) + '</span>' +
          '<span class="muted small">' + MP.fmtFecha(h.fecha) + '</span>' +
          (h.actual ? '<span class="badge badge--soft">Vigente</span>' : '') +
        '</div>').join('')
    );
  };

  /* ---------- Modal de noticia (compartido) ---------- */
  MP.openNews = function(id){
    const n = MP.NEWS.find(x => x.id === id);
    if(!n) return;
    const autor = MP.USERS.find(u => u.nombre === n.autor);
    MP.openModal(
      '<span class="catbadge" style="background:' + MP.NEWS_CATS[n.categoria] + (n.categoria === 'Seguridad' ? ';color:var(--navy)' : '') + '">' + n.categoria + '</span>' +
      '<h2 style="margin:12px 0 8px;font-size:1.45rem">' + MP.esc(n.titulo) + '</h2>' +
      '<div style="display:flex;gap:10px;align-items:center;margin-bottom:18px">' +
        (autor ? MP.avatarHtml(autor,'avatar--xs') : '') +
        '<span class="small muted">' + MP.esc(n.autor) + ' · ' + MP.fmtDia(n.fecha) + ', ' + MP.fmtFecha(n.fecha) + '</span>' +
      '</div>' +
      '<div style="font-size:.96rem;display:grid;gap:12px" class="newsbody">' + n.cuerpo + '</div>' +
      '<div style="display:flex;gap:10px;margin-top:24px;align-items:center;flex-wrap:wrap">' +
        '<button class="btn btn--ghost btn--sm" onclick="this.innerHTML=\'💚 ¡Gracias!\';MP.toast(\'Te gustó esta noticia\')">💚 Me gusta · ' + n.likes + '</button>' +
        '<button class="btn btn--ghost btn--sm" onclick="MP.toast(\'Enlace copiado\')">Compartir enlace</button>' +
      '</div>',
      n.imagen
    );
  };

  /* ---------- Modal de evento (compartido) ---------- */
  MP.openEvent = function(id){
    const ev = MP.EVENTS.find(x => x.id === id);
    if(!ev) return;
    const a = ev.area ? MP.AREAS[ev.area] : null;
    MP.openModal(
      '<div style="display:flex;gap:16px;align-items:flex-start">' +
        '<div class="datebox" style="width:64px;padding:10px 0"><b style="font-size:1.5rem">' + MP.diaNum(ev.fecha) + '</b><span>' + MP.mesAbrev(ev.fecha) + '</span></div>' +
        '<div><h2 style="font-size:1.3rem;line-height:1.25">' + MP.esc(ev.titulo) + '</h2>' +
        '<p class="muted small" style="margin-top:4px">' + MP.fmtDia(ev.fecha) + ', ' + MP.fmtFecha(ev.fecha) + ' · ' + MP.esc(ev.hora) + '</p></div>' +
      '</div>' +
      '<div style="display:flex;gap:8px;margin:16px 0;flex-wrap:wrap">' +
        (a ? '<span class="catbadge" style="background:' + a.color + ';color:' + a.txt + '">' + MP.esc(ev.area) + '</span>'
           : '<span class="catbadge" style="background:var(--navy)">Corporativo</span>') +
        '<span class="badge badge--soft">' + MP.icon('pin',12) + ' ' + MP.esc(ev.lugar) + '</span>' +
      '</div>' +
      '<p style="font-size:.95rem">' + MP.esc(ev.desc) + '</p>' +
      '<div style="background:rgba(0,174,239,.07);border:1.5px dashed var(--cyan);border-radius:14px;padding:14px 18px;margin-top:18px;font-size:.85rem">' +
        MP.icon('mail',15) + ' Recibirás un <strong>recordatorio por correo</strong> con la marca Multiparque un día antes del evento.' +
      '</div>' +
      '<div style="display:flex;gap:10px;margin-top:20px;flex-wrap:wrap">' +
        '<button class="btn btn--lime btn--sm" onclick="MP.downloadICS(\'' + ev.id + '\')">' + MP.icon('calendar',15) + ' Recordar (.ics)</button>' +
        '<button class="btn btn--ghost btn--sm" onclick="MP.toast(\'Recordatorio por correo activado\')">' + MP.icon('mail',15) + ' Avisarme por correo</button>' +
      '</div>'
    );
  };

})();
