import "./App.css";
import TopNews from "./components/TopNews/TopNews";
import Currency from "./components/Currency/Currency";
import Search from "./components/SearchInput/Input";
import PromoBanner from "./components/PromoBanner/PromoBanner";
import WidgetContainer from "./components/WidgetContainer/WidgetContainer";
import Service from "./components/Service/Service";

/**
 * Основной компонент страницы
 * Объединяет компоненты:
 * - TopNews (Новости)
 * - Currency (курсы валют)
 * - PromoWidget (ПромоБаннер внутреннего сервиса)
 * - Search (Блок поисковой строки)
 * - Banner (Рекламный горизонтальный баннер)
 * - WidgetsСontainer(Блок дополнительных виджетов)
 */
function App() {
  return (
    <div className="Wrapper">
      <TopNews />
      <Currency />
      <Service />
      <Search />
      <PromoBanner />
      <WidgetContainer />
    </div>
  );
}

export default App;
