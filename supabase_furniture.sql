-- =============================================
-- Таблица заказов магазина кресел
-- Выполни этот SQL в Supabase → SQL Editor
-- =============================================

CREATE TABLE IF NOT EXISTS furniture_orders (
  id SERIAL PRIMARY KEY,
  product_id TEXT NOT NULL,
  product_name TEXT NOT NULL,
  product_composition TEXT,
  product_price INTEGER NOT NULL,
  color TEXT,
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  customer_city TEXT,
  comment TEXT,
  telegram_user_id BIGINT,
  telegram_username TEXT,
  referral_code TEXT,              -- ref_bloger1, ref_ivan и т.д.
  status TEXT DEFAULT 'new',       -- new, contacted, completed, cancelled
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Индекс для быстрого поиска по реферальному коду
CREATE INDEX idx_furniture_orders_referral ON furniture_orders(referral_code);

-- =============================================
-- Функция статистики блогера
-- Вызов: SELECT * FROM get_blogger_stats('ref_bloger1');
-- =============================================

CREATE OR REPLACE FUNCTION get_blogger_stats(p_ref_code TEXT)
RETURNS JSON AS $$
  SELECT json_build_object(
    'total_orders', COUNT(*),
    'total_revenue', COALESCE(SUM(product_price), 0),
    'commission', COALESCE(SUM(product_price) * 30 / 100, 0),
    'last_order', MAX(created_at)
  )
  FROM furniture_orders
  WHERE referral_code = p_ref_code;
$$ LANGUAGE SQL;
