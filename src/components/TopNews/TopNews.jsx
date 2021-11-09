import DisorderedList from "../DisorderedList/DisorderedList";
import Link from "../Link/Link";
import ListItem from "../ListItem/ListItem";
import {newsLists,newsArray, logoURL} from "../../fakeData/fakeData";

const TopNews = () => {
  return (
    <section>
      <DisorderedList
        items={newsLists}
        className="news-top-list news-top-list__horizontal"
      >
        {(items) =>
          items.map((item) => (
            <ListItem key={Math.random()} className="news-top-item">
              <Link className="news-top-link" href="/">
                {item}
              </Link>
            </ListItem>
          ))
        }
      </DisorderedList>
    </section>
  );
};
export default TopNews;
