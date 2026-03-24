document.addEventListener('DOMContentLoaded', () => {
  // JOBスライダー
  document.querySelectorAll(".job_slider").forEach((slider) => {
    new Splide(slider, {
      type: "slide",
      autoplay: false,
      pauseOnHover: false,
      pauseOnFocus: false,
      interval: 2000,
      speed: 800,
      perPage: 3,
      destroy: true,
      gap: 8,
      breakpoints: {
        640: {
          perPage: 1,
          fixedWidth: '95%',
          padding: {
            right: '5%',
          },
        },
        1023: {
          perPage: 2,
          destroy: false,
          fixedWidth: '50%',
          padding: {
            right: '10%',
          },
        },
      },
    }).mount();
  });

  // 下からふわっと表示
  const elements = document.querySelectorAll(".fade-up");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
  });
  elements.forEach(el => observer.observe(el));

  // 追従ボタン & トップへ戻るボタン
  const fixedButton = document.getElementById('fixedCv');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const showButtonAt = window.innerHeight * 3;
  const showTopBtnAt = window.innerHeight * 2;

  // スクロールイベントリスナーを1つにまとめる
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    // 追従ボタンの表示/非表示
    if (fixedButton) {
      if (scrollPosition > showButtonAt) {
        fixedButton.style.opacity = '1';
        fixedButton.style.pointerEvents = 'auto';
      } else {
        fixedButton.style.opacity = '0';
        fixedButton.style.pointerEvents = 'none';
      }
    }

    // トップへ戻るボタンの表示/非表示
    if (backToTopBtn) {
      if (scrollPosition > showTopBtnAt) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.pointerEvents = 'auto';
      } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.pointerEvents = 'none';
      }
    }
  });

  // トップへ戻るボタンのクリックイベント
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});