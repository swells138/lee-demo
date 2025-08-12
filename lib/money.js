export function formatPrice(value, locale = "en-US", currency = "USD") {
  if (value == null) return "";
  return new Intl.NumberFormat(locale, { style: "currency", currency, maximumFractionDigits: 0 }).format(value);
}
