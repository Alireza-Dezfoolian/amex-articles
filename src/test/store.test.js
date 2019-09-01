import axios from "axios";
import React from "react";
import configureMockStore from "redux-mock-store";
import MockAdapter from "axios-mock-adapter";
import config from "../config";
import {
    ActionTypes,
    Constants,
    ReducerTypes
} from "../constants";
import actions from "../store/actions";
import reducer from "../store/reducer";

describe("an action", () => {

    let store;
    let httpMock;

    const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

    beforeEach(() => {
        httpMock = new MockAdapter(axios);
        const mockStore = configureMockStore();
        store = mockStore({});
    });

    it("fetch event success", async () => {
        const data = [{
            "_id": "5d693c0b453a5a068dd67986",
            "title": "American Express",
            "article": "The American Express Company, also known as Amex, is an American multinational financial services corporation headquartered in Three World Financial Center in New York City. The company was founded in 1850 and is one of the 30 components of the Dow Jones Industrial Average.",
            "__v": 0
        }, {
            "_id": "5d6953c632fdff0017b005c7",
            "title": "Hello from Amex team in Australia:) 💳 🇦🇺 😊",
            "article": "Hello there you need to be doing something better... Hello there you need to be doing something better...",
            "imgUrl": "https://icm.aexp-static.com/Internet/internationalcardshop/gcp/business/en_au/images/cards/plat.png",
            "__v": 0
        }, {
            "_id": "5d6959ad32fdff0017b005c8",
            "title": "American Express To Acquire LoungeBuddy",
            "article": "American Express (NYSE: AXP) today announced it will acquire LoungeBuddy, a digital platform that enables travelers to discover, book and access airport lounges worldwide. Founded in 2013, LoungeBuddy’s mobile app and website (www.loungebuddy.com) provide a premium airport experience with robust lounge ratings and reviews, comprehensive eligibility criteria, and global airport coverage through its lounge partners. The acquisition is expected to be completed in April 2019.",
            "imgUrl": "https://www.dufl.com/wp-content/uploads/2016/04/loungebuddy.png",
            "__v": 0
        }];

        // given
        httpMock
            .onGet(config.API_ENDPOINT_URL)
            .reply(200, {
                success: true,
                result: data
            });

        //testing GET_ALL_ARTICLES
        actions[ActionTypes.GET_ALL_ARTICLES]()(store.dispatch); // calls the action
        await flushAllPromises(); // before the assertion, flush any pending promises

        // then action should be loading the articles
        expect(store.getActions()).toEqual([{
            "payload": true,
            "type": "GET_ALL_ARTICLES_LOADING"
        }, {
            "payload": {
                "result": [{
                    "_id": "5d693c0b453a5a068dd67986",
                    "title": "American Express",
                    "article": "The American Express Company, also known as Amex, is an American multinational financial services corporation headquartered in Three World Financial Center in New York City. The company was founded in 1850 and is one of the 30 components of the Dow Jones Industrial Average.",
                    "__v": 0
                }, {
                    "_id": "5d6953c632fdff0017b005c7",
                    "title": "Hello from Amex team in Australia:) 💳 🇦🇺 😊",
                    "article": "Hello there you need to be doing something better... Hello there you need to be doing something better...",
                    "imgUrl": "https://icm.aexp-static.com/Internet/internationalcardshop/gcp/business/en_au/images/cards/plat.png",
                    "__v": 0
                }, {
                    "_id": "5d6959ad32fdff0017b005c8",
                    "title": "American Express To Acquire LoungeBuddy",
                    "article": "American Express (NYSE: AXP) today announced it will acquire LoungeBuddy, a digital platform that enables travelers to discover, book and access airport lounges worldwide. Founded in 2013, LoungeBuddy’s mobile app and website (www.loungebuddy.com) provide a premium airport experience with robust lounge ratings and reviews, comprehensive eligibility criteria, and global airport coverage through its lounge partners. The acquisition is expected to be completed in April 2019.",
                    "imgUrl": "https://www.dufl.com/wp-content/uploads/2016/04/loungebuddy.png",
                    "__v": 0
                }],
                "success": true
            },
            "type": "GET_ALL_ARTICLES_LOADED"
        }]);
    });

    it("post event fail", async () => {
        const data = [{
            data: "content"
        }];

        // given
        httpMock
            .onPost(config.API_ENDPOINT_URL)
            .reply(500, {
                success: true,
                result: data
            });

        // when
        actions[ActionTypes.ADD_ARTICLE]()(store.dispatch); // calls the action
        await flushAllPromises(); // before the assertion, flush any pending promises

        // then
        expect(store.getActions()).toEqual([{
            "payload": true,
            "type": "ADD_ARTICLE_LOADING"
        }, {
            "payload": new Error("Request failed with status code 500"),
            "type": "ADD_ARTICLE_ERROR"
        }]);
    });

});