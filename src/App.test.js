const puppeteer = require("puppeteer")

describe("is a dummy test", function () {
  it("used when other tests commented out", () => expect(1).toEqual(1))
})


// // describe("on page load", () => {
// //   test("h1 loads correctly", async () => {
// //     const browser = await puppeteer.launch({})
// //     const page = await browser.newPage()

// //     await page.goto("http://localhost:3000/onboarding")

// //     browser.close()
// //   })
// // })

// // test("h1 loads correctly", async () => {
// //   const browser = await puppeteer.launch()
// //   const page = await browser.newPage()

// //   await page.goto("http://localhost:3000/onboarding")
// //   const html = await page.$eval("#button", e => e.innerHTML)
// //   expect(html).toBe("continue")

// //   await page.click("button#button")
// //   await page.click("input#textInput")
// //   //await page.type("input#textInput")
// //   //await page.click("div#nextButton")

// //   browser.close()
// // })

// jest.setTimeout(100000)

// test("Onboarding", async () => {
//   const browser = await puppeteer.launch({
//     headless: false,
//     //no sandax
//     slowMo: 50 // slow down by 250ms
//   })
//   const page = await browser.newPage()

//   await page.setViewport({ width: 1231, height: 1009 })

//   await page.goto("http://localhost:3000/onboarding")

//   //await page.waitForSelector(".sc-fzooss #button")
//   await page.click("button#button") // Introduction "Lets build you a financial Plan", clicks button to proceed
//   await page.click("input#textInput") //First Name "What's your first Name?"
//   await page.waitFor(1000)

//   //await page.waitForSelector("div #textInput")
//   await page.type("input#textInput", "Ben") // Types in first name
//   await page.click("#nextButton") //next page
//   await page.waitFor(1000)

//   //await page.waitForSelector("div #textInput")
//   await page.click("input#textInput") //BirthYear "What's your Birth Year?"
//   await page.type("input#textInput", "1988") // Types in birthYear
//   await page.click("#nextButton") //next page
//   await page.waitFor(1000)

//   //await page.waitForSelector(".sc-pZaHX > .sc-fzooss > .sc-fzpans > #nextButton > path:nth-child(2)")
//   await page.click("div#male") //Gender "What's your Gender?" selects male
//   await page.click("#nextButton") //next page
//   await page.waitFor(1000)

//   //await page.waitForSelector("div #married")
//   await page.click("div#married") //Marital Status "What's your Marital Status?" selects male
//   await page.click("#nextButton") //next page
//   await page.waitFor(1000)

//   //await page.waitForSelector("div #textInput")
//   await page.type("input#textInput", "Kelsey") // Types in spouses first name
//   await page.click("#nextButton") //next page
//   await page.waitFor(1000)

//   //await page.waitForSelector("div #textInput")
//   await page.click("input#textInput") //BirthYear "What's your Birth Year?"
//   await page.type("input#textInput", "1989") // Types in spouses birthYear
//   await page.click("#nextButton") //next page
//   await page.waitFor(1000)

//   //await page.waitForSelector("div #no")
//   await page.click("div#no")
//   await page.click("#nextButton") //next page
//   await page.waitFor(1000)

//   //await page.waitForSelector(".sc-fzooss #button")
//   await page.click("button#button") // We need some details about your income.
//   await page.waitFor(1000)

//   //await page.waitForSelector("input#textInput")
//   await page.click("input#textInput") //Where does this income come from?
//   await page.type("input#textInput", "Wal Mart Income") // Types in income type
//   await page.waitFor(1000)
//   await page.click("#nextButton") //next page

//   //await page.waitForSelector("div #regularEmployment")
//   await page.click("div #regularEmployment") //Income Registrations
//   await page.click("#nextButton") //next page
//   await page.waitFor(1000)

//   //await page.waitForSelector("div > .sc-fznJRM > .sc-fznOgF > .sc-fznYue > .iNiJRO")
//   await page.click("#nextButton") //next page
//   await page.waitFor(1000)
  
//   //await page.waitForSelector("div #yes")
//   await page.click("div#yes") //Add Spouse Income
//   await page.click("#nextButton") //next page
//   await page.waitFor(1000)

//   //await page.waitForSelector("input#textInput") //Where does this income come from?"
//   await page.click("input#textInput") //Where does this income come from?"
//   await page.type("input#textInput", "Counselling Income") // Types in income type
//   await page.click("#nextButton") //next page
//   await page.waitFor(1000)

//   //await page.waitForSelector("div #businessIncome")
//   await page.click("div #regularEmployment") //Income Registrations
//   await page.click("#nextButton") //next page
//   await page.waitFor(1000)

//   await page.click(".sc-pZaHX > .sc-fzooss > .sc-fzpans > #nextButton > path:nth-child(2)") //Income Input for spouse await page.waitFor(1000)

//   //await page.waitForSelector("#nextButton")
//   await page.click("#nextButton") //next page
//   await page.waitFor(1000)

//   //await page.waitForSelector("div#tfsa")
//   await page.click("div#tfsa") //Add Spouse Income
//   await page.click("#nextButton") //next page
//   await page.waitFor(1000)

//   //await page.waitForSelector("#nextButton")
//   await page.click("#nextButton") //next page
//   await page.waitFor(1000)

//   await page.click("#nextButton") //next page
//   await page.waitFor(1000)

//   await page.click("div#yes") //Add Property
//   await page.click("#nextButton") //next page
//   await page.waitFor(1000)

//   await page.click("input#textInput") //Where does this income come from?"
//   await page.type("input#textInput", "Primary Residence") // Types in income type
//   await page.click("#nextButton") //next page
//   await page.waitFor(1000)

//   //await page.waitForSelector("div #primaryResidence")
//   await page.click("div #regularEmployment") //Income Registrations
//   await page.click("#nextButton") //next page
//   await page.waitFor(1000)

//   browser.close()
// })

// test("h2 loads correctly", async () => {
//   const browser = await puppeteer.launch({
//     headless: false,
//   })
//   const page = await browser.newPage()

//   await page.setViewport({ width: 1792, height: 1009 })
//   await page.goto("http://localhost:3000/onboarding")

//   //await page.waitForSelector(".sc-fzooss #button")
//   await page.click(".sc-fzooss #button
//   page.waitFor(1000)

//   //await page.waitForSelector("div #textInput")
//   await page.click("div #textInput
//   page.waitFor(1000)

//   //await page.waitForSelector(".sc-pZaHX > .sc-fzooss > .sc-fzpans > #nextButton > path:nth-child(2)")
//   await page.click(".sc-pZaHX > .sc-fzooss > .sc-fzpans > #nextButton > path:nth-child(2)")

//   //await page.waitForSelector("div #textInput")
//   await page.click("div #textInput
//   page.waitFor(1000)

//   //await page.waitForSelector(".sc-pZaHX > .sc-fzooss > .sc-fzpans > #nextButton > path:nth-child(2)")
//   await page.click(".sc-pZaHX > .sc-fzooss > .sc-fzpans > #nextButton > path:nth-child(2)")

//   //await page.waitForSelector("div #male")
//   await page.click("div #male
//   page.waitFor(1000)

//   //await page.waitForSelector("div #married")
//   await page.click("div #married
//   page.waitFor(1000)

//   //await page.waitForSelector("div #textInput")
//   await page.click("div #textInput
//   page.waitFor(1000)

//   //await page.waitForSelector("div #textInput")
//   await page.click("div #textInput
//   page.waitFor(1000)

//   //await page.waitForSelector("div #yes")
//   await page.click("div #yes
//   page.waitFor(1000)

//   //await page.waitForSelector("div > .sc-fzppip > .sc-fzqyvX > .sc-fznLxA > .sc-fznXWL:nth-child(2)")
//   await page.click("div > .sc-fzppip > .sc-fzqyvX > .sc-fznLxA > .sc-fznXWL:nth-child(2)")

//   //await page.waitForSelector(".sc-fzooss #button")
//   await page.click(".sc-fzooss #button
//   page.waitFor(1000)

//   //await page.waitForSelector("div #regularEmployment")
//   await page.click("div #regularEmployment
//   page.waitFor(1000)

//   //await page.waitForSelector("div > .sc-fznJRM > .sc-fznOgF > .sc-fznYue > .iNiJRO")
//   await page.click("div > .sc-fznJRM > .sc-fznOgF > .sc-fznYue > .iNiJRO
//   page.waitFor(1000)

//   //await page.waitForSelector("div #yes")
//   await page.click("div #yes
//   page.waitFor(1000)

//   //await page.waitForSelector("div #businessIncome")
//   await page.click("div #businessIncome
//   page.waitFor(1000)

//   //await page.waitForSelector("div > .sc-fznJRM > .sc-fznOgF > .sc-fznYue > .enszQC")
//   await page.click("div > .sc-fznJRM > .sc-fznOgF > .sc-fznYue > .enszQC
//   page.waitFor(1000)

//   //await page.waitForSelector(".sc-fzqyvX > .sc-fzoaKM > .sc-fzqAui:nth-child(1) > .sc-fzomuh > .sc-fzoVTD")
//   await page.click(".sc-fzqyvX > .sc-fzoaKM > .sc-fzqAui:nth-child(1) > .sc-fzomuh > .sc-fzoVTD
//   page.waitFor(1000)

//   //await page.waitForSelector(".sc-fzqyvX > .sc-fzoaKM > .sc-fzqAui:nth-child(2) > .sc-fzomuh > .sc-fzoVTD")
//   await page.click(".sc-fzqyvX > .sc-fzoaKM > .sc-fzqAui:nth-child(2) > .sc-fzomuh > .sc-fzoVTD
//   page.waitFor(1000)

//   await page.goto("http://localhost:3000/onboarding")

//   browser.close()
// })

//<div class="sc-fznAgC krGuRN">yes</div>
// const puppeteer = require('puppeteer');
// (async () => {
//   const browser = await puppeteer.launch()
//   const page = await browser.newPage()

//   await page.goto('http://localhost:3001/onboarding')

//   await page.setViewport({ width: 1231, height: 1009 })

//   //await page.waitForSelector('.sc-fzooss #button')
//   await page.click('.sc-fzooss #button')

//   //await page.waitForSelector('.sc-fzooss #button')
//   await page.click('.sc-fzooss #button')

//   //await page.waitForSelector('div #textInput')
//   await page.click('div #textInput')

//   //await page.waitForSelector('.sc-pReKu #nextButton')
//   await page.click('.sc-pReKu #nextButton')

//   //await page.waitForSelector('div #textInput')
//   await page.click('div #textInput')

//   //await page.waitForSelector('.sc-pZaHX > .sc-fzooss > .sc-fzpans > #nextButton > path:nth-child(2)')
//   await page.click('.sc-pZaHX > .sc-fzooss > .sc-fzpans > #nextButton > path:nth-child(2)')

//   //await page.waitForSelector('div #female')
//   await page.click('div #female')

//   //await page.waitForSelector('div #male')
//   await page.click('div #male')

//   //await page.waitForSelector('div #married')
//   await page.click('div #married')

//   //await page.waitForSelector('div #textInput')
//   await page.click('div #textInput')

//   //await page.waitForSelector('.sc-pZaHX > .sc-fzooss > .sc-fzpans > #nextButton > path:nth-child(2)')
//   await page.click('.sc-pZaHX > .sc-fzooss > .sc-fzpans > #nextButton > path:nth-child(2)')

//   //await page.waitForSelector('div #textInput')
//   await page.click('div #textInput')

//   //await page.waitForSelector('.sc-pZaHX > .sc-fzooss > .sc-fzpans > #nextButton > path:nth-child(2)')
//   await page.click('.sc-pZaHX > .sc-fzooss > .sc-fzpans > #nextButton > path:nth-child(2)')

//   //await page.waitForSelector('div #no')
//   await page.click('div #no')

//   //await page.waitForSelector('div #yes')
//   await page.click('div #yes')

//   //await page.waitForSelector('.sc-pZaHX > .sc-fzooss > .sc-fzpans > #nextButton > path:nth-child(2)')
//   await page.click('.sc-pZaHX > .sc-fzooss > .sc-fzpans > #nextButton > path:nth-child(2)')

//   //await page.waitForSelector('div > .sc-fzppip > .sc-fzqyvX > .sc-fznLxA > .sc-fznXWL:nth-child(2)')
//   await page.click('div > .sc-fzppip > .sc-fzqyvX > .sc-fznLxA > .sc-fznXWL:nth-child(2)')

//   //await page.waitForSelector('.sc-pZaHX > .sc-fzooss > .sc-fzpans > #nextButton > path:nth-child(2)')
//   await page.click('.sc-pZaHX > .sc-fzooss > .sc-fzpans > #nextButton > path:nth-child(2)')

//   //await page.waitForSelector('.sc-fzooss #button')
//   await page.click('.sc-fzooss #button')

//   //await page.waitForSelector('div #textInput')
//   await page.click('div #textInput')

//   //await page.waitForSelector('.sc-pZaHX > .sc-fzooss > .sc-fzpans > #nextButton > path:nth-child(2)')
//   await page.click('.sc-pZaHX > .sc-fzooss > .sc-fzpans > #nextButton > path:nth-child(2)')

//   //await page.waitForSelector('div #regularEmployment')
//   await page.click('div #regularEmployment')

//   //await page.waitForSelector('.sc-pZaHX > .sc-fzooss > .sc-fzpans > #nextButton > path:nth-child(2)')
//   await page.click('.sc-pZaHX > .sc-fzooss > .sc-fzpans > #nextButton > path:nth-child(2)')

//   //await page.waitForSelector('div > .sc-fznJRM > .sc-fznOgF > .sc-fznYue:nth-child(2) > .sc-fzqOul')
//   await page.click('div > .sc-fznJRM > .sc-fznOgF > .sc-fznYue:nth-child(2) > .sc-fzqOul')

//   //await page.waitForSelector('div > .sc-fznJRM > .sc-fznOgF > .sc-fznYue:nth-child(3) > .sc-fzqOul')
//   await page.click('div > .sc-fznJRM > .sc-fznOgF > .sc-fznYue:nth-child(3) > .sc-fzqOul')

//   //await page.waitForSelector('.sc-pZaHX > .sc-fzooss > .sc-fzpans > #nextButton > path:nth-child(2)')
//   await page.click('.sc-pZaHX > .sc-fzooss > .sc-fzpans > #nextButton > path:nth-child(2)')

//   //await page.waitForSelector('div > .sc-fzppip > .sc-fzqyvX > .sc-fzpkqZ > .gbhuJq')
//   await page.click('div > .sc-fzppip > .sc-fzqyvX > .sc-fzpkqZ > .gbhuJq')

//   //await page.waitForSelector('.sc-pZaHX > .sc-fzooss > .sc-fzpans > #nextButton > path:nth-child(2)')
//   await page.click('.sc-pZaHX > .sc-fzooss > .sc-fzpans > #nextButton > path:nth-child(2)')

//   //await page.waitForSelector('.sc-fzqyvX > .sc-fzoaKM > .sc-fzqAui:nth-child(1) > .sc-fzomuh > .sc-fzoVTD')
//   await page.click('.sc-fzqyvX > .sc-fzoaKM > .sc-fzqAui:nth-child(1) > .sc-fzomuh > .sc-fzoVTD')

//   await browser.close()
// })()

