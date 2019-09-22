const { post } = require("axios");
const authImperial = require("../auth");

const fs = require('fs');
const path = require("path");
const absPath = (relPath) => path.join(__dirname, relPath);  

jest.unmock('cheerio');
jest.mock('axios', () => ({
    post: jest.fn()
}));

test("successful login via missed access redirect", (done) => {
    post.mockImplementation(() => { 
        return {
            "data": fs.readFileSync(absPath("./testdata/successful-login.html"), 'utf8')
        }
    });

    authImperial("shortcode", "pass").then(result => {
        expect(result).toBe(true);
        done();
    });
});

test("unsuccessful login via incorrect username or password", (done) => {
    post.mockImplementation(() => { 
        return {
            "data": fs.readFileSync(absPath("./testdata/unsuccessful-login.html"), 'utf8')
        }
    });

    authImperial("shortcode", "pass").then(result => {
        expect(result).toBe(false);
        done();
    });
});

describe("change in page formatting should fail in all cases", () => {
    test("elements no longer exist", () => {
        post.mockImplementation(() => { 
            return {
                "data": "<html><html>"
            }
        });
    
        authImperial("shortcode", "pass").then(result => {
            expect(result).toBe(false);
        });
    });

    test("non-html text shouldn't work either", () => {
        post.mockImplementation(() => { 
            return {
                "data": "dud"
            }
        });
    
        authImperial("shortcode", "pass").then(result => {
            expect(result).toBe(false);
        });
    });
});

