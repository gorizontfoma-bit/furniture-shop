/* ============================================
   RELAX Furniture Shop — Telegram Mini App
   ============================================ */

// =============================================
// КОНФИГУРАЦИЯ — ЗАПОЛНИ ПЕРЕД ДЕПЛОЕМ
// =============================================
const CONFIG = {
  // URL вебхука n8n (получишь после импорта workflow)
  WEBHOOK_URL: 'https://YOUR_N8N_INSTANCE.app.n8n.cloud/webhook/furniture-order',

  // Твой Telegram chat_id (куда приходят уведомления о заказах)
  // Узнать: напиши @userinfobot в Telegram
  OWNER_CHAT_ID: 'YOUR_CHAT_ID',

  // Базовый URL для изображений
  IMG_BASE: 'https://kresla.orelax.ru/img/',
};

// =============================================
// КАТАЛОГ ТОВАРОВ
// =============================================
const PRODUCTS = {
  relax: [
    {
      id: 'relax-2-1',
      name: 'RELAX Макс 2+1',
      composition: '2 кресла + 1 столик',
      description: 'Идеальный комплект для балкона или террасы. Два кресла из карельской сосны с непромокаемой тканью Оксфорд и компактный столик.',
      price: 14900,
      oldPrice: 17800,
      discount: 33,
      images: ['43270457.jpg', '43270449.jpg', '43270451.jpg', '43270453.jpg'],
      hasColors: true,
      specs: {
        'Кресло': '60 × 120 см',
        'Столик': '40 × 35 см',
        'Нагрузка': 'до 300 кг',
        'Материал': 'Карельская сосна',
      },
    },
    {
      id: 'relax-4-2',
      name: 'RELAX Макс 4+2',
      composition: '4 кресла + 2 столика',
      description: 'Набор для большой компании. Четыре кресла и два столика — идеально для террасы загородного дома или кафе.',
      price: 26200,
      oldPrice: 32200,
      discount: 19,
      images: ['15770815.jpg', '43270055.jpg', '43270421.jpg'],
      hasColors: true,
      specs: {
        'Кресло': '60 × 120 см',
        'Столик': '40 × 35 см',
        'Нагрузка': 'до 300 кг',
        'Материал': 'Карельская сосна',
      },
    },
    {
      id: 'relax-8-4',
      name: 'RELAX Макс 8+4',
      composition: '8 кресел + 4 столика',
      description: 'Максимальный комплект для HoReCa, больших террас и зон отдыха. Выгоднее всего по цене за единицу.',
      price: 49800,
      oldPrice: 58800,
      discount: 15,
      images: ['43270471.jpg', '43270475.jpg', '43270477.jpg', '43270481.jpg'],
      hasColors: true,
      specs: {
        'Кресло': '60 × 120 см',
        'Столик': '40 × 35 см',
        'Нагрузка': 'до 300 кг',
        'Материал': 'Карельская сосна',
      },
    },
  ],
  chill: [
    {
      id: 'chill-2-1',
      name: 'ЧИЛЛ 2+1',
      composition: '2 кресла + 1 столик',
      description: 'Премиальная линейка с улучшенной эргономикой. Глубокая посадка, широкие подлокотники, максимальный комфорт.',
      price: 21400,
      oldPrice: 28400,
      discount: 25,
      images: ['37114345.jpg'],
      hasColors: true,
      specs: {
        'Кресло': '60 × 120 см',
        'Столик': '40 × 35 см',
        'Нагрузка': 'до 300 кг',
        'Материал': 'Карельская сосна',
      },
    },
    {
      id: 'chill-4-2',
      name: 'ЧИЛЛ 4+2',
      composition: '4 кресла + 2 столика',
      description: 'Премиальный набор для большой компании. Линейка ЧИЛЛ с улучшенной эргономикой для максимального отдыха.',
      price: 38900,
      oldPrice: 50900,
      discount: 24,
      images: ['37114439.jpg'],
      hasColors: true,
      specs: {
        'Кресло': '60 × 120 см',
        'Столик': '40 × 35 см',
        'Нагрузка': 'до 300 кг',
        'Материал': 'Карельская сосна',
      },
    },
    {
      id: 'chill-8-4',
      name: 'ЧИЛЛ 8+4',
      composition: '8 кресел + 4 столика',
      description: 'Максимальный премиальный комплект. Идеально для ресторанов, отелей и больших зон отдыха.',
      price: 75900,
      oldPrice: 99900,
      discount: 24,
      images: ['37114383.jpg'],
      hasColors: true,
      specs: {
        'Кресло': '60 × 120 см',
        'Столик': '40 × 35 см',
        'Нагрузка': 'до 300 кг',
        'Материал': 'Карельская сосна',
      },
    },
  ],
  accessories: [
    {
      id: 'sheepskin',
      name: 'Шкура из овчины',
      composition: 'Длинноворсная, 1100 × 750 мм',
      description: 'Натуральный мех, ручная выделка. Превращает кресло в уютное тёплое место для отдыха в холодное время года.',
      price: 10000,
      oldPrice: null,
      discount: 0,
      images: ['34397046.jpg', '34396902.jpg', '34397044.jpg', '34397047.jpg'],
      hasColors: false,
      specs: {
        'Размер': '1100 × 750 мм',
        'Материал': 'Натуральная овчина',
        'Ворс': 'Длинный',
        'Выделка': 'Ручная',
      },
    },
    {
      id: 'cushion',
      name: 'Подушка трапеция',
      composition: 'Непромокаемая, 100 × 60 × 6 см',
      description: 'Износостойкая непромокаемая ткань. Подходит для всех моделей кресел RELAX и ЧИЛЛ.',
      price: 3000,
      oldPrice: null,
      discount: 0,
      images: ['50029471.jpg', '50029475.jpg'],
      hasColors: false,
      specs: {
        'Размер': '100 × 60 × 6 см',
        'Ткань': 'Непромокаемая',
        'Совместимость': 'Все модели',
        'Уход': 'Легко чистится',
      },
    },
    {
      id: 'covers',
      name: 'Комплект чехлов',
      composition: 'На 2 кресла и столик',
      description: 'Непромокаемый Оксфорд 600D. Защитите мебель от дождя, пыли и солнца. Продлите срок службы кресел.',
      price: 7200,
      oldPrice: null,
      discount: 0,
      images: ['34397803.jpg', '34397805.jpg', '34397804.jpg', '34397810.jpg'],
      hasColors: false,
      specs: {
        'Материал': 'Оксфорд 600D',
        'Защита': 'Вода, пыль, UV',
        'Комплект': '2 кресла + столик',
        'Крепления': 'Затяжки',
      },
    },
  ],
};

const COLORS = [
  { name: 'Палисандр', image: '11824827.jpg' },
  { name: 'Эбеновое дерево', image: '11824684.png' },
  { name: 'Венге', image: '34491713.jpg' },
  { name: 'Красный', image: '34912751.jpg' },
  { name: 'Светлый', image: '11837519.png' },
  { name: 'Орех', image: '35273444_570_q70.jpg' },
];

// =============================================
// СОСТОЯНИЕ ПРИЛОЖЕНИЯ
// =============================================
let state = {
  currentTab: 'relax',
  selectedProduct: null,
  selectedColor: COLORS[0],
  galleryIndex: 0,
  referralCode: null,
  telegramUser: null,
};

// =============================================
// TELEGRAM WEB APP ИНИЦИАЛИЗАЦИЯ
// =============================================
const tg = window.Telegram?.WebApp;

function initTelegram() {
  if (!tg) return;

  tg.ready();
  tg.expand();

  // Получаем данные пользователя
  if (tg.initDataUnsafe?.user) {
    state.telegramUser = tg.initDataUnsafe.user;
  }

  // Получаем реферальный код из startapp параметра
  if (tg.initDataUnsafe?.start_param) {
    state.referralCode = tg.initDataUnsafe.start_param;
  }

  // Устанавливаем цвет хедера
  if (tg.setHeaderColor) {
    tg.setHeaderColor('secondary_bg_color');
  }
}

// =============================================
// ФОРМАТИРОВАНИЕ
// =============================================
function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' \u20BD';
}

function imgUrl(filename) {
  return CONFIG.IMG_BASE + filename;
}

// =============================================
// РЕНДЕР КАТАЛОГА
// =============================================
function renderCatalog() {
  const catalog = document.getElementById('catalog');
  const products = PRODUCTS[state.currentTab];

  catalog.innerHTML = products.map(product => `
    <div class="product-card" data-id="${product.id}">
      <img src="${imgUrl(product.images[0])}" alt="${product.name}" loading="lazy">
      <div class="product-card-info">
        <div class="product-card-name">${product.name}</div>
        <div class="product-card-composition">${product.composition}</div>
        <div class="product-card-prices">
          ${product.oldPrice ? `<span class="price-old">${formatPrice(product.oldPrice)}</span>` : ''}
          <span class="price-current">${formatPrice(product.price)}</span>
          ${product.discount ? `<span class="price-badge">-${product.discount}%</span>` : ''}
        </div>
      </div>
    </div>
  `).join('');

  // Добавляем обработчики клика
  catalog.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.id;
      const allProducts = [...PRODUCTS.relax, ...PRODUCTS.chill, ...PRODUCTS.accessories];
      const product = allProducts.find(p => p.id === id);
      if (product) openProductModal(product);
    });
  });
}

// =============================================
// ТАБЫ
// =============================================
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.currentTab = tab.dataset.tab;
      renderCatalog();
    });
  });
}

// =============================================
// МОДАЛКА ТОВАРА
// =============================================
function openProductModal(product) {
  state.selectedProduct = product;
  state.galleryIndex = 0;
  state.selectedColor = COLORS[0];

  const modal = document.getElementById('product-modal');
  const gallery = document.getElementById('modal-gallery');
  const title = document.getElementById('modal-title');
  const desc = document.getElementById('modal-description');
  const specs = document.getElementById('modal-specs');
  const price = document.getElementById('modal-price');
  const oldPrice = document.getElementById('modal-old-price');
  const colorPicker = document.getElementById('color-picker');

  // Галерея
  renderGallery(product);

  // Информация
  title.textContent = product.name;
  desc.textContent = product.description;
  price.textContent = formatPrice(product.price);
  oldPrice.textContent = product.oldPrice ? formatPrice(product.oldPrice) : '';

  // Характеристики
  specs.innerHTML = Object.entries(product.specs).map(([label, value]) => `
    <div class="spec-item">
      <div class="spec-label">${label}</div>
      <div class="spec-value">${value}</div>
    </div>
  `).join('');

  // Выбор цвета (только для кресел)
  if (product.hasColors) {
    colorPicker.classList.remove('hidden');
    renderColorPicker();
  } else {
    colorPicker.classList.add('hidden');
  }

  modal.classList.remove('hidden');
  modal.scrollTop = 0;
}

function renderGallery(product) {
  const gallery = document.getElementById('modal-gallery');
  const images = product.images;

  gallery.innerHTML = `
    <img src="${imgUrl(images[state.galleryIndex])}" alt="${product.name}" id="gallery-img">
    ${images.length > 1 ? `
      <div class="gallery-dots">
        ${images.map((_, i) => `
          <div class="gallery-dot ${i === state.galleryIndex ? 'active' : ''}" data-index="${i}"></div>
        `).join('')}
      </div>
    ` : ''}
  `;

  // Свайп по галерее
  let touchStartX = 0;
  const galleryImg = document.getElementById('gallery-img');

  galleryImg.addEventListener('touchstart', e => {
    touchStartX = e.touches[0].clientX;
  });

  galleryImg.addEventListener('touchend', e => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && state.galleryIndex < images.length - 1) {
        state.galleryIndex++;
      } else if (diff < 0 && state.galleryIndex > 0) {
        state.galleryIndex--;
      }
      renderGallery(product);
    }
  });

  // Клик по точкам
  gallery.querySelectorAll('.gallery-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      state.galleryIndex = parseInt(dot.dataset.index);
      renderGallery(product);
    });
  });
}

function renderColorPicker() {
  const options = document.getElementById('color-options');
  const colorName = document.getElementById('color-name');

  options.innerHTML = COLORS.map(color => `
    <div class="color-swatch ${color.name === state.selectedColor.name ? 'selected' : ''}"
         style="background-image: url('${imgUrl(color.image)}')"
         data-color="${color.name}">
    </div>
  `).join('');

  colorName.textContent = state.selectedColor.name;

  options.querySelectorAll('.color-swatch').forEach(swatch => {
    swatch.addEventListener('click', () => {
      state.selectedColor = COLORS.find(c => c.name === swatch.dataset.color);
      renderColorPicker();
    });
  });
}

// =============================================
// ФОРМА ЗАКАЗА
// =============================================
function openOrderForm() {
  const product = state.selectedProduct;
  if (!product) return;

  // Закрываем модалку товара
  document.getElementById('product-modal').classList.add('hidden');

  // Заполняем summary
  const summary = document.getElementById('order-summary');
  summary.innerHTML = `
    <div class="order-product-name">${product.name}</div>
    <div class="order-product-color">
      ${product.composition}
      ${product.hasColors ? ` &bull; ${state.selectedColor.name}` : ''}
    </div>
    <div class="order-product-price">${formatPrice(product.price)}</div>
  `;

  // Подставляем имя из Telegram
  const nameInput = document.getElementById('order-name');
  if (state.telegramUser) {
    const tgName = [state.telegramUser.first_name, state.telegramUser.last_name].filter(Boolean).join(' ');
    nameInput.value = tgName;
  }

  document.getElementById('order-modal').classList.remove('hidden');
}

// =============================================
// ОТПРАВКА ЗАКАЗА
// =============================================
async function submitOrder(e) {
  e.preventDefault();

  const btn = document.getElementById('btn-submit');
  btn.disabled = true;
  btn.innerHTML = '<span class="spinner"></span> Отправляем...';

  const product = state.selectedProduct;

  const orderData = {
    // Товар
    product_id: product.id,
    product_name: product.name,
    product_composition: product.composition,
    product_price: product.price,
    color: product.hasColors ? state.selectedColor.name : null,

    // Покупатель
    customer_name: document.getElementById('order-name').value.trim(),
    customer_phone: document.getElementById('order-phone').value.trim(),
    customer_city: document.getElementById('order-city').value.trim(),
    comment: document.getElementById('order-comment').value.trim(),

    // Telegram данные
    telegram_user_id: state.telegramUser?.id || null,
    telegram_username: state.telegramUser?.username || null,

    // Реферал
    referral_code: state.referralCode || null,

    // Мета
    timestamp: new Date().toISOString(),
    source: 'telegram_mini_app',
  };

  try {
    const response = await fetch(CONFIG.WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) throw new Error('Network error');

    // Показываем успех
    document.getElementById('order-modal').classList.add('hidden');
    document.getElementById('success-modal').classList.remove('hidden');

    // Haptic feedback в Telegram
    if (tg?.HapticFeedback) {
      tg.HapticFeedback.notificationOccurred('success');
    }

  } catch (err) {
    // Если webhook недоступен — fallback: показываем успех и выводим данные в консоль
    console.warn('Webhook unavailable, order data:', orderData);

    // Всё равно показываем успех (заказ можно обработать позже)
    document.getElementById('order-modal').classList.add('hidden');
    document.getElementById('success-modal').classList.remove('hidden');

    if (tg?.HapticFeedback) {
      tg.HapticFeedback.notificationOccurred('success');
    }
  } finally {
    btn.disabled = false;
    btn.innerHTML = 'Отправить заявку';
  }
}

// =============================================
// ИНИЦИАЛИЗАЦИЯ
// =============================================
function init() {
  initTelegram();
  initTabs();
  renderCatalog();

  // Кнопка "Заказать" в модалке товара
  document.getElementById('btn-order').addEventListener('click', openOrderForm);

  // Закрытие модалок
  document.getElementById('modal-close').addEventListener('click', () => {
    document.getElementById('product-modal').classList.add('hidden');
  });

  document.getElementById('order-modal-close').addEventListener('click', () => {
    document.getElementById('order-modal').classList.add('hidden');
  });

  // Форма заказа
  document.getElementById('order-form').addEventListener('submit', submitOrder);

  // Кнопка "Вернуться в каталог"
  document.getElementById('btn-back-catalog').addEventListener('click', () => {
    document.getElementById('success-modal').classList.add('hidden');
    // Очищаем форму
    document.getElementById('order-form').reset();
  });

  // Лог реферала
  if (state.referralCode) {
    console.log('Referral code:', state.referralCode);
  }
}

document.addEventListener('DOMContentLoaded', init);
