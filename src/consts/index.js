import Buttons from "./buttons";
import Endpoint from "./endpoint";
import Messages from "./messages";
import Routes from "./routes";

const Defaults = {
    ALL_ARTICLES: "ALL_ARTICLES",
    LASTEST_ADDED_ARTICLE: "LASTEST_ADDED_ARTICLE",
    ARTICLE_STORE: "ARTICLE_STORE",
    LOADING: "LOADING"
};

const defaultConsts = {
    ...Buttons,
    ...Defaults,
    ...Endpoint,
    ...Routes,
    ...Messages
};

export default defaultConsts;