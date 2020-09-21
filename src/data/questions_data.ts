export const incomeQuestions_data = {
  streamType: "income",
  q1: {
    question: "Where does this income come from?",
    explanation: 'Examples could be if you work as an Engineer, you could say "Engineering". Or name if after the employer that pays you, like "Wal Mart".',
    label: "Source of Income",
    placeholder: "Income Name",
  },
  q2: {
    question: "What kind of income is it?",
    explanation: "Determining your pension income depends on the type of income you were earning and if you were contributing to Canada Pension Plan.",
    optionArray: ["Regular Employment", "Business Income", "Investment Income", "Rental Income"],
  },
  q3: {
    question: "What kind of income is it?",
    explanation: "Determining your pension income depends on the type of income you were earning and if you were contributing to Canada Pension Plan.",
    optionArray: ["Regular Employment", "Business Income", "Investment Income", "Rental Income"],
  },
  qFinal: {
    question: "Would you like to add another income source?",
    explanation: "The more income streams you add the better an idea you'll get of your finanical position. Streams could be rental income, different jobs or pensions.",
  },
  slidersInput: {
    question: "We need estimates of the past, present and future of this income source.",
    explanation: "Knowing your future income helps us determine your pension income",
    topLabelPast: "I earned",
    topLabelFuture: "I hope to earn",
    bottomLabel: "before tax per year",
  },
}

export const savingsQuestions_data = {
  streamType: "savings",
  q1: {
    question: "What should we call this account?",
    explanation: "Just an approximation of the current value is helpful. ",
    label: "Source of Income",
    placeholder: "Income Name",
  },
  q2: {
    question: "What kind of account is it?",
    explanation: "",
    optionArray: ["TFSA", "RRSP", "Personal", "LIRA", "Pension", "RESP"],
  },
  q3: {
    question: "",
    explanation: "",
  },
  qFinal: {
    question: "Would you like to add another savings account?",
    explanation: "Determining your pension income depends on the type of income you were earning and if you were contributing to Canada Pension Plan.",
  },
  slidersInput: {
    explanation:
      "We want to know what you estimate your future contributes to be so we can calculate your future value. Ignore your past contributes as they are accounted for in the current value",
    topLabelPast: "",
    topLabelFuture: "I aim to contribute",
    bottomLabel: "Per Year",
  },
  slidersInputWithdraw: {
    explanation:
      "We want to know what you estimate your future contributes to be so we can calculate your future value. Ignore your past contributes as they are accounted for in the current value",
    topLabelPast: "",
    topLabelFuture: "I aim to withdraw",
    bottomLabel: "Per Year",
  },
}

export const spendingQuestions_data = {
  streamType: "spending",
  q1: {
    question: "What should we call this expense?",
    explanation: "Just an approximation of the current value is helpful. ",
    label: "Expense",
  },
  q2: {
    question: "What kind of expense is it?",
    explanation: "Determining your pension income depends on the type of income you were earning and if you were contributing to Canada Pension Plan.",
    optionArray: ["Housing", "Entertainment", "Investment Income", "Rental Income"],
  },
  q3: {
    question: "",
    explanation: "",
  },
  qFinal: {
    question: "Would you like to add another expense?",
    explanation: "Determining your pension income depends on the type of income you were earning and if you were contributing to Canada Pension Plan.",
  },
  slidersInput: {
    question: "Tell us about the expense starting from now then guessing into the future",
    explanation:
      "We want to know what you estimate your future contributes to be so we can calculate your future value. Ignore your past contributes as they are accounted for in the current value",
    topLabelPast: "I spend about",
    topLabelFuture: "I think I'll spend",
    bottomLabel: "Per Month",
    slider2Max: 4000,
    slider2Min: 0,
    slider2Step: 10,
  },
}

export const propertyQuestions_data = {
  streamType: "property",
  q1: {
    question: "What should we call this property?",
    explanation: "The name will show up in our charts",
    label: "Property Name",
  },
  q2: {
    question: "What kind of property is it?",
    explanation: "Determining your pension income depends on the type of income you were earning and if you were contributing to Canada Pension Plan.",
    optionArray: ["Primary Residence", "Vacation Property", "Rental Property", "Business", "Other"],
  },
  q3: {
    question: "Who's name is it under?",
    explanation: "We'll use this information in the tax section.",
  },
  qFinal: {
    question: "Would you like to add another property?",
    explanation: "Determining your pension income depends on the type of income you were earning and if you were contributing to Canada Pension Plan.",
    optionArray: ["Regular Employment", "Business Income", "Investment Income", "Rental Income"],
  },
  slidersInput: {
    question: "How much is it worth?",
    explanation: "We'll use this information in the tax section.",
    topLabelPast: "banana",
    topLabelFuture: "banana",
    bottomLabel: "banana",
  },
}

export const debtQuestions_data = {
  streamType: "debt",
  q1: {
    question: "What should we call this debt?",
    explanation: 'Examples could be Primary Residence, home, rental property or the address".',
    label: "Debt Name",
  },
  q2: {
    question: "What kind of unsecured debt is it?",
    explanation: "The type of property can have different tax consequences.",
    optionArray: ["Credit Card", "Student Loan", "Line of Credit", "Business loan", "Other"],
  },
  q3: {
    question: "Who's name is it under?",
    explanation: "We'll use this information in the tax section.",
  },
  qFinal: {
    question: "Would you like to add any other debts?",
    explanation: "this will be accounted for in your net worth calculation",
    optionArray: ["Regular Employment", "Business Income", "Investment Income", "Rental Income"],
  },
  slidersInput: {
    topLabelPast: "banana",
    topLabelFuture: "banana",
    bottomLabel: "banana",
  },
}

export const onboard_data = {
  intro: {
    subTitle: 'Our goal is to answer one question for you, are you ok finanically?  ',
    question: "Lets build you a financial Plan",
    label: "continue",
  },
  user1Name: {
    explanation: "This helps us personalize your plan.",
    label: "First Name",
    question: "What's your first Name?",
    placeholder: "Name",
  },
  user1BirthYear: {
    explanation: "This forms the basis of our financial calculations.",
    component: "TextInput",
    label: "Birth Year",
    question: "What's your Birth Year?",
    placeholder: "YYYY",
  },
  user1BirthGender: {
    optionArray: ["male", "female", "prefer not to say", "write below"],
    explanation: "We want to ensure our planning process is inclusive.",
    component: "PickSingleOption",
    question: "What's your Gender?",
  },
  maritalStatus: {
    optionArray: ["single", "married", "common-law", "write below"],
    explanation: "Having a spouse has a large impact on your plan",
    component: "PickSingleOption",
    question: "What's your marital status?",
  },
  user2Name: {
    explanation: "This helps us personalize your plan.",
    label: "Spouse's First Name",
    question: "What's your spouse's first Name?",
    placeholder: "Name",
  },
  user2BirthYear: {
    explanation: "This forms the basis of our financial calculations.",
    component: "TextInput",
    label: "Spouse's Birth Year",
    question: "What's your spouse's birth Year?",
    placeholder: "YYYY",
  },
  children: {
    optionArray: ["yes", "no", "hope to eventually", "yes, and they are over 18"],
    explanation: "We'd like to estimate your government child benefits. Even if you only plan on having children its helpful to know so we can show you how it will impact your finances.",
    component: "PickSingleOption",
    question: "Do you have children?",
    textInput: false,
  },
  numberOfChildren: {
    optionArray: ["yes", "no", "hope to eventually", "yes, and they are over 18"],
    explanation1: "We'd like to estimate your government child benefits.",
    explanation2: "Just guessing is fine, it will give you an idea of the impact of government benefits on your plan. You can always change it later. ",
    question: "How many children?",
    textInput: false,
  },
  user1Income: {
    explanation:
      "",
    subTitle: "We'll use this to build a chart showings your income streams and estimate your pension income.",
    question: "We need some details about your income.",
    label: "lets go",
  },
  addUser2Income: {
    explanation:
      "",
    subTitle: "",
    question: "Would you like to add your spouses income?",
    label: "lets go",
  },
  user1IncomeChart1: {
    explanation:
      "",
    subTitle: "Each color represents a source of income that we'll call a stream. The goal is to transition the streams from income that you have to work for, to income you don't have to work for such as pension, rental property or savings income. Once all you're streams are from passive sources you no longer have to work.",
    question: "This chart shows your income for each year",
  },
  user1IncomeChart2: {
    explanation:
      "",
    subTitle: "The red stream is our estimate of your Canada Pension Plan. This is based on your earnings over your lifetime, that's why we need you to estimate your income in the past and future. The more you earn the higher it will be.",
    question: "Canada Pension Plan",
  },
  user1IncomeChart3: {
    explanation:
      "",
    subTitle: "The darker bars are your Old Age Security. If you earn too much money in retirement this will be taken away. Our goal is to build a savings plan that keeps you in the lowest tax bracket in retirement so that you can keep your OAS.",
    question: "Old Age Security",
  },
  user1IncomeChart4: {
    explanation:
      "",
    subTitle: "We've added your savings withdrawals to the chart",
    question: "Income with savings",
  },
  user2IncomeChart1: {
    explanation:
      "",
    subTitle: "If there are large differences between you and your spouse's income we can calculate tax savings strategies to reduce your taxes",
    question: "Here we can see your spouses income",
  },
  user2IncomeChart2: {
    explanation:
      "",
    subTitle: "If there are large differences between you and your spouse's income we can calculate tax savings strategies to reduce your taxes",
    question: "Here we can see your spouses income",
  },
  user1SavingsChart1: {
    explanation:
      "",
    subTitle: "This chart shows an estimate of your savings account value along with your contributions and withdrawals below. ",
    question: "Your Savings Contributions",
  },
  user1SavingsChart2: {
    explanation:
      "",
    subTitle: "This chart shows an estimate of your savings account value along with your contributions and withdrawals below. ",
    question: "Your Withdrawals",
  },
  user2SavingsChart1: {
    explanation:
      "",
    subTitle: "This chart shows an estimate of your savings account value along with your contributions and withdrawals below. ",
    question: "Your Savings Contributions",
  },
  user2SavingsChart2: {
    explanation:
      "",
    subTitle: "This chart shows an estimate of your savings account value along with your contributions and withdrawals below. ",
    question: "Your Withdrawals",
  },
  user2Income: {
    explanation:
      "",
    subTitle: "We'll use this to build a chart showings your income streams and estimate your pension income.",
    question: "Would you like to add your spouses income?",
    label: "lets go",
  },
  user1Savings: {
    explanation: "We'll use this info to see how much income in retirement your investments will provide",
  },
  property: {
    question: "Do you own the home you live in, or any property?",
    explanation: "We'll add this to your net worth",
  },
  debt: {
    question: "Do you have any unsecured debt?",
    explanation: "This is debt that isn't secured on a property. Examples are credit card debt, student loans, or lines of credit.",
  },
}
