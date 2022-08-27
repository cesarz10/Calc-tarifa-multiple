import React from 'react'

const Person = ({ user }) => {

  const { name, budget, debt, expenses } = user;

  let debtArr = []

  // userDebt: [usuario, amount]
  for (const userDebt of debt) {
    debtArr.push({ name: userDebt[0], debt: userDebt[1] })
  }

  return (
    <>
      <h3>{name}</h3>
      <p>{budget}</p>
      <p>{expenses}</p>
      {debtArr.map((item, index) =>
        <p key={index}>debe a {item.name} ${item.debt}</p>)}
    </>
  )
}

export default Person