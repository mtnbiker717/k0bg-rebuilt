(function() {
  'use strict';

  // ===== Theme Toggle =====
  var toggle = document.querySelector('.theme-toggle');
  var saved = localStorage.getItem('theme') || 'light';

  if (saved === 'dark') {
    document.documentElement.classList.add('dark');
  }

  if (toggle) {
    toggle.textContent = document.documentElement.classList.contains('dark') ? '☀️' : '🌙';

    toggle.addEventListener('click', function() {
      document.documentElement.classList.toggle('dark');
      var isDark = document.documentElement.classList.contains('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      toggle.textContent = isDark ? '☀️' : '🌙';
    });
  }

  // ===== Mobile Sidebar Toggle =====
  var hamburger = document.querySelector('.hamburger');
  var sidebar = document.querySelector('.sidebar');
  var overlay = document.querySelector('.sidebar-overlay');

  function closeSidebar() {
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
    if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburger) {
    hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      if (sidebar && sidebar.classList.contains('open')) {
        closeSidebar();
      } else {
        if (sidebar) sidebar.classList.add('open');
        if (overlay) overlay.classList.add('active');
        hamburger.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden';
      }
    });
  }

  if (overlay) {
    overlay.addEventListener('click', closeSidebar);
  }

  // Close sidebar on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && sidebar && sidebar.classList.contains('open')) {
      closeSidebar();
    }
  });

  // Close sidebar on resize to desktop
  window.addEventListener('resize', function() {
    if (window.innerWidth > 1023 && sidebar && sidebar.classList.contains('open')) {
      closeSidebar();
    }
  });

  // Close sidebar on nav link click (mobile)
  document.querySelectorAll('.sidebar-nav a').forEach(function(link) {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 1023) closeSidebar();
    });
  });

  // ===== Active Nav Highlighting =====
  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.sidebar-nav a').forEach(function(link) {
    var href = link.getAttribute('href');
    if (href && href.split('/').pop() === currentPath) {
      link.classList.add('active');
    }
  });

  // ===== Collapsible Nav Groups =====
  var navCollapsed = {};
  try { navCollapsed = JSON.parse(localStorage.getItem('nav-collapsed') || '{}'); } catch(e) {}

  document.querySelectorAll('.nav-group').forEach(function(group, i) {
    var label = group.querySelector('.nav-group-label');
    if (!label) return;

    var key = 'g' + i;

    // Restore saved state
    if (navCollapsed[key]) {
      group.classList.add('collapsed');
    }

    // Ensure group containing the active link is always open
    if (group.querySelector('a.active')) {
      group.classList.remove('collapsed');
      delete navCollapsed[key];
    }

    // Set initial aria-expanded state
    label.setAttribute('aria-expanded', group.classList.contains('collapsed') ? 'false' : 'true');

    label.addEventListener('click', function() {
      group.classList.toggle('collapsed');
      var isCollapsed = group.classList.contains('collapsed');
      label.setAttribute('aria-expanded', isCollapsed ? 'false' : 'true');
      if (isCollapsed) {
        navCollapsed[key] = true;
      } else {
        delete navCollapsed[key];
      }
      try { localStorage.setItem('nav-collapsed', JSON.stringify(navCollapsed)); } catch(e) {}
    });
  });

  // ===== Reading Time =====
  var articleBody = document.querySelector('.article-body');
  var dateEl = document.querySelector('.article-date');
  if (articleBody && dateEl) {
    var text = articleBody.textContent || '';
    var words = text.trim().split(/\s+/).length;
    var mins = Math.max(1, Math.round(words / 200));
    dateEl.textContent = dateEl.textContent + ' · ' + mins + ' min read';
  }

  // ===== Table of Contents Generator =====
  var tocContainer = document.getElementById('toc');
  if (tocContainer && articleBody) {
    var headings = articleBody.querySelectorAll('h2');
    if (headings.length === 0) {
      tocContainer.style.display = 'none';
    } else {
      // Build inline TOC
      var ol = document.createElement('ol');
      headings.forEach(function(heading, index) {
        var id = heading.id || 'section-' + (index + 1);
        heading.id = id;
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = '#' + id;
        a.textContent = heading.textContent;
        li.appendChild(a);
        ol.appendChild(li);
      });
      tocContainer.appendChild(ol);

      // Build right-rail TOC (JS-generated, no HTML changes needed)
      var rail = document.createElement('aside');
      rail.className = 'toc-rail';
      var railTitle = document.createElement('div');
      railTitle.className = 'toc-rail-title';
      railTitle.textContent = 'On This Page';
      rail.appendChild(railTitle);
      var railOl = document.createElement('ol');
      headings.forEach(function(heading) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = '#' + heading.id;
        a.textContent = heading.textContent;
        li.appendChild(a);
        railOl.appendChild(li);
      });
      rail.appendChild(railOl);
      // Position rail after main content
      var mainContent = document.querySelector('.main-content');
      if (mainContent) mainContent.appendChild(rail);

      // Position the rail dynamically based on content area
      function positionRail() {
        var container = document.querySelector('.article-container');
        if (!container || window.innerWidth < 1400) return;
        var rect = container.getBoundingClientRect();
        var rightEdge = rect.right + window.scrollX;
        rail.style.left = (rightEdge + 32) + 'px';
      }
      positionRail();
      window.addEventListener('resize', positionRail);

      // Scroll-spy for both inline and rail TOC
      if ('IntersectionObserver' in window) {
        var inlineLinks = ol.querySelectorAll('li');
        var railLinks = railOl.querySelectorAll('li');
        var observer = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              var targetId = entry.target.id;
              // Update inline TOC
              inlineLinks.forEach(function(li) {
                var link = li.querySelector('a');
                if (link && link.getAttribute('href') === '#' + targetId) {
                  li.classList.add('active');
                } else {
                  li.classList.remove('active');
                }
              });
              // Update rail TOC
              railLinks.forEach(function(li) {
                var link = li.querySelector('a');
                if (link && link.getAttribute('href') === '#' + targetId) {
                  li.classList.add('active');
                } else {
                  li.classList.remove('active');
                }
              });
            }
          });
        }, { rootMargin: '-10% 0px -80% 0px', threshold: 0 });

        headings.forEach(function(h) { observer.observe(h); });
      }
    }
  }

  // ===== Search =====
  var searchInput = document.getElementById('search-input');
  var searchResults = document.getElementById('search-results');
  var searchIndex = null;
  var focusedIndex = -1;

  function loadSearchIndex() {
    var basePath = '';
    if (window.location.pathname.indexOf('/articles/') !== -1) {
      basePath = '../';
    }
    fetch(basePath + 'search-index.json')
      .then(function(res) { return res.json(); })
      .then(function(data) { searchIndex = data; })
      .catch(function() {});
  }

  function escapeHtml(text) {
    var div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  function performSearch(query) {
    if (!searchIndex || !query || query.length < 2) {
      if (searchResults) searchResults.classList.remove('active');
      return;
    }
    var terms = query.toLowerCase().split(/\s+/);
    var results = [];
    searchIndex.forEach(function(item) {
      var searchText = (item.title + ' ' + item.headings.join(' ') + ' ' + item.keywords.join(' ')).toLowerCase();
      var score = 0;
      var matched = true;
      terms.forEach(function(term) {
        if (searchText.indexOf(term) === -1) { matched = false; }
        else {
          if (item.title.toLowerCase().indexOf(term) !== -1) score += 10;
          item.headings.forEach(function(h) { if (h.toLowerCase().indexOf(term) !== -1) score += 5; });
          item.keywords.forEach(function(k) { if (k.toLowerCase().indexOf(term) !== -1) score += 3; });
          score += 1;
        }
      });
      if (matched && score > 0) results.push({ item: item, score: score });
    });
    results.sort(function(a, b) { return b.score - a.score; });
    results = results.slice(0, 8);
    displayResults(results);
  }

  function displayResults(results) {
    if (!searchResults) return;
    searchResults.innerHTML = '';
    focusedIndex = -1;
    if (results.length === 0) {
      searchResults.innerHTML = '<div class="search-no-results">No results found</div>';
      searchResults.classList.add('active');
      return;
    }
    var basePath = '';
    if (window.location.pathname.indexOf('/articles/') !== -1) basePath = '../';
    results.forEach(function(r) {
      var div = document.createElement('div');
      div.className = 'search-result-item';
      div.setAttribute('data-url', basePath + r.item.url);
      div.innerHTML = '<h4>' + escapeHtml(r.item.title) + '</h4><p>' + escapeHtml(r.item.description) + '</p>';
      div.addEventListener('click', function() { window.location.href = basePath + r.item.url; });
      searchResults.appendChild(div);
    });
    searchResults.classList.add('active');
  }

  if (searchInput) {
    searchInput.addEventListener('input', function() { performSearch(this.value.trim()); });
    searchInput.addEventListener('focus', function() { if (this.value.trim().length >= 2) performSearch(this.value.trim()); });
    document.addEventListener('click', function(e) {
      if (searchResults && !searchResults.contains(e.target) && e.target !== searchInput) {
        searchResults.classList.remove('active');
      }
    });
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') { searchResults.classList.remove('active'); searchInput.blur(); return; }
      var items = searchResults ? searchResults.querySelectorAll('.search-result-item') : [];
      if (items.length === 0) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        focusedIndex = focusedIndex < items.length - 1 ? focusedIndex + 1 : 0;
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        focusedIndex = focusedIndex > 0 ? focusedIndex - 1 : items.length - 1;
      } else if (e.key === 'Enter' && focusedIndex >= 0) {
        e.preventDefault();
        var url = items[focusedIndex].getAttribute('data-url');
        if (url) window.location.href = url;
        return;
      }
      items.forEach(function(item, i) {
        item.classList.toggle('focused', i === focusedIndex);
      });
    });
  }

  loadSearchIndex();

  // ===== Smooth Scroll =====
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        var offset = 72;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  // ===== Topbar Scroll Shadow =====
  var topbar = document.querySelector('.topbar');
  if (topbar) {
    window.addEventListener('scroll', function() {
      topbar.classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });
  }

  // ===== Back to Top Button =====
  var backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    var tocEl = document.querySelector('.toc');
    var scrollThreshold = tocEl
      ? tocEl.offsetTop + tocEl.offsetHeight
      : 400;

    window.addEventListener('scroll', function() {
      if (window.scrollY > scrollThreshold) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
